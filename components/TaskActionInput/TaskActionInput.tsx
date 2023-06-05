import React, { useEffect, useState } from 'react';
import SmallCorrectIcon from '../Icons/SmallCorrectIcon';
import InputFieldSubmitButton from '../InputFieldSubmitButton.tsx/InputFieldSubmitButton';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { removeSingleTask, AddPlatformTask } from '@/app/store/taskEditerSlice';
import RightArrowIcon from '../Icons/RightArrowIcon';

const TaskActionInput = ({
    inputTitle,
    isTitleClicked,
    placeholder,
    isPlatformClicked,
    onChangeHandler,
    name,
}: any) => {
    const [isTaskTitleClicked, setIsTaskTitleClicked] = useState(isTitleClicked);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const dispatch = useDispatch();
    const taskToDo: any = useSelector((state: RootState) => state.taskToDo);
    const fieldName = name?.split('.')[0];
    const innerFieldName = name?.split('.')[1];
    const [initialState, setInitialState] = useState({ [fieldName]: { [innerFieldName]: '' } });
    const [isTaskSubmitted, setIsTaskSubmitted] = useState(true);

    const isTaskAdded = taskToDo.some(
        (data: any) => data.task === innerFieldName && data.socialPlatform === fieldName && data.value !== ''
    );

    const inputChangeHandler = (e: any) => {
        setInitialState({
            [fieldName]: { [innerFieldName]: e.target.value },
        });
        if (isTaskSubmitted) {
            e.target.value.length > 0 ? setShowSubmitButton(true) : setShowSubmitButton(false);
        }
        const platform = fieldName;
        const task = innerFieldName;
        const value = e.target.value;
        onChangeHandler(platform, task, value);
    };

    const formInputSubmitHandler = (values: any) => {
        const platform = fieldName;
        const task = innerFieldName;
        const value = initialState[fieldName][innerFieldName];

        dispatch(AddPlatformTask({ platform, task, value }));
        setIsTaskTitleClicked(false);
        setIsTaskSubmitted(!isTaskSubmitted);
        value.length == 0 && setShowSubmitButton(false);
    };

    const TaskHandler = () => {
        const platform = fieldName;
        const task = innerFieldName;
        const value = initialState[fieldName][innerFieldName];

        if (fieldName !== 'daily_task' && fieldName !== 'referral') {
            if (isTaskAdded) {
                dispatch(removeSingleTask({ platform, task }));
                isTaskTitleClicked && setIsTaskTitleClicked(!isTaskTitleClicked);
            } else if (value !== '') {
                dispatch(AddPlatformTask({ platform, task, value }));
                isTaskTitleClicked && setIsTaskTitleClicked(!isTaskTitleClicked);
            } else {
                setIsTaskTitleClicked(!isTaskTitleClicked);
            }
        } else if (isTaskAdded) {
            dispatch(removeSingleTask({ platform, task }));
        } else {
            const value = 'http://localhost:3000/';
            dispatch(AddPlatformTask({ platform, task, value }));
        }
    };

    const inputTitleClickHandler = () => {
        const platform = fieldName;
        const task = innerFieldName;
        const isTaskAdded = taskToDo.some(
            (data: any) => data.task === innerFieldName && data.socialPlatform === fieldName && data.value !== ''
        );
        if (fieldName !== 'daily_task' && fieldName !== 'referral') {
            setIsTaskTitleClicked(!isTaskTitleClicked);
        } else if (isTaskAdded) {

            dispatch(removeSingleTask({ platform, task }));
        } else {
            const value = 'http://localhost:3000/';
            dispatch(AddPlatformTask({ platform, task, value }));
        }
    };

    return (
        <div style={{ display: `${isPlatformClicked ? '' : 'none'}` }}>
            <div className="py-[10px]">
                <div className="flex justify-between items-center cursor-pointer">
                    <div
                        className={`float-none w-[18px] h-[18px] p-1 border mx-[3px] rounded-full text-white flex justify-center items-center
                        ${isTaskAdded ? 'bg-green border-green' : 'border-[#c5cbd6] bg-[#c5cbd6]'}`}
                        onClick={TaskHandler}
                    >
                        <SmallCorrectIcon />
                    </div>
                    <div className="flex-auto px-4" onClick={inputTitleClickHandler}>
                        <button className="flex-auto text-sm leading-[23px] font-semibold text-black">
                            {inputTitle}
                        </button>
                    </div>
                </div>
                <Formik initialValues={initialState} onSubmit={formInputSubmitHandler}>
                    {({ isSubmitting }) => (
                        <Form
                            className="w-full ml-[3px] mt-2"
                            style={{ display: `${isTaskTitleClicked ? '' : 'none'}` }}
                        >
                            <div className="flex items-center mt-2">
                                <Field
                                    type="text"
                                    placeholder={placeholder}
                                    className="form-input rounded-tl rounded-bl rounded-none flex-1"
                                    name={name}
                                    value={initialState[fieldName][innerFieldName]}
                                    onChange={inputChangeHandler}
                                />
                                {showSubmitButton && <InputFieldSubmitButton />}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default TaskActionInput;
