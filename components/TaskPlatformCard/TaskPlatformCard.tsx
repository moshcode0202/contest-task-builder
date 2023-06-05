import Image from 'next/image';
import BigCorrectIcon from '../Icons/BigCorrectIcon';
import DownArrowIcon from '../Icons/DownArrowIcon';
import TaskActionInput from '../TaskActionInput/TaskActionInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddMultipleTask, removeAllPlatformTask } from '@/app/store/taskEditerSlice';

const TaskPlatformCard = ({
    id,
    taskImgSrc,
    taskTitle,
    imgHeight,
    imgWidth,
    anyTaskAdded,
    isPremium,
    inputFieldsData,
    isPlatformClicked,
    taskToDo,
}: any) => {
    const [isPlatformTitleClicked, setIsPlatformTitleClicked] = useState(isPlatformClicked);
    const [uniqueValuePairs, setUniqueValuePairs] = useState<any>([]);
    const dispatch = useDispatch();


    const anyPlatformTaskAdded = taskToDo.some(
        (data: any) =>
            data.socialPlatform
                .split('_')
                .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ') === taskTitle
    );

    const AllPlatformTaskHandler = () => {
        const matchFound = taskToDo.some(
            (data: any) =>
                data.socialPlatform
                    .split('_')
                    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ') === taskTitle
        );

        const demotask = uniqueValuePairs.some(
            (data: any) =>
                data.platform
                    .split('_')
                    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ') === taskTitle
        );
        if (matchFound) {
            dispatch(removeAllPlatformTask({ taskTitle }));
        } else if ((demotask && taskToDo.length === 0) || (demotask && taskToDo.length > 0)) {
            dispatch(AddMultipleTask(uniqueValuePairs));
        } else {
            setIsPlatformTitleClicked(!isPlatformTitleClicked);
        }
    };

    const handleInputChange = (platform: any, task: any, value: any) => {
        setUniqueValuePairs((prevValuePairs: any) => {
            const index = prevValuePairs.findIndex((pair: any) => pair.platform === platform && pair.task === task);
            if (index >= 0) {
                const updatedValuePair = { ...prevValuePairs[index], value };
                const newPairs = [...prevValuePairs];
                newPairs[index] = updatedValuePair;
                return newPairs;
            } else {
                const newValuePair = { platform, task, value };
                return [...prevValuePairs, newValuePair];
            }
        });
    };

    return (
        <div>
            <div className="flex flex-col gap-[10px]">
                <div
                    aria-label=""
                    data-microtip-position="top"
                    role="tooltip"
                    className="px-5 flex justify-between rounded-[10px] hover:bg-white shadow-3xl items-center cursor-pointer group bg-white  "
                >
                    <div
                        className={`float-none w-6 h-6 border rounded-full text-white flex justify-center items-center
                        ${anyPlatformTaskAdded ? 'bg-green border-green' : 'border-[#c5cbd6] bg-[#c5cbd6]'}`}
                        onClick={() => AllPlatformTaskHandler()}
                    >
                        <BigCorrectIcon />
                    </div>
                    <div className="flex-auto px-4 flex items-center">
                        <div className="flex-none w-[20px] mr-3">
                            <Image src={taskImgSrc} alt="" width={imgWidth} height={imgHeight} />
                        </div>
                        <p
                            className="flex-auto text-sm leading-[44px] font-semibold flex text-black"
                            onClick={() => {
                                setIsPlatformTitleClicked(!isPlatformTitleClicked);
                            }}
                        >
                            {taskTitle}
                            {isPremium && (
                                <Image
                                    src="/images/royal_premium.svg"
                                    alt=""
                                    className="ml-[15px]"
                                    width={17}
                                    height={44}
                                />
                            )}
                        </p>
                    </div>
                    <div className="float-none h-[44px] flex items-center rotate-360">
                        <DownArrowIcon className="text-[#c5cbd6] group-hover:text-black" />
                    </div>
                </div>
                <div className="pl-5 rounded-[10px]">
                    {inputFieldsData.map((input: any, index: any) => {
                        return (
                            <TaskActionInput
                                key={index}
                                inputTitle={input.title}
                                isTitleClicked={input.isTitleClicked}
                                isTaskAdded={input.isTaskAdded}
                                placeholder={input.placeholder}
                                isPlatformClicked={isPlatformTitleClicked}
                                onChangeHandler={handleInputChange}
                                name={input.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TaskPlatformCard;
