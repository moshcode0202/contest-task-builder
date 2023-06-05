import RightArrowIcon from '../Icons/RightArrowIcon';

const InputFieldSubmitButton = () => {
    return (
        <button
            type="submit"
            className="bg-green border border-green px-[14px] rounded-tr rounded-br h-[38px] flex-none text-white hover:bg-transparent hover:text-green transition-all duration-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white"
        >
            <RightArrowIcon />
        </button>
    );
};

export default InputFieldSubmitButton;
