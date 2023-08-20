interface Props {
    value: string,
    setValue: (value: string) => void,
    options: string[]
}

const Select = ({value, setValue, options}: Props) => {
    return (
        <div>

            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={"px-[20px] py-[17px] bg-[#FBFBFB] rounded-[7px] border-[1px] border-[#E4E5E7]"}
            >
                {options?.map((option) =>
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
        </div>
    );
};

export default Select;