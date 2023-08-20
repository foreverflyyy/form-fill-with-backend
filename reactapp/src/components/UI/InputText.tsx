import React from 'react';
import {InputProperty} from "../../models/FormProperty";

interface Props {
    property: InputProperty
    onChange: (val: string) => void
    value: string
}

const InputText = ({property, onChange, value, ...props}: Props) => {
    return (
        <div className={"flex flex-col pr-[16px] pt-[24px]"}>
            <div className={"text-[14px] text-[#222] font-normal opacity-60"}>
                {property.label}
                {property.required && "*"}
            </div>
            <div className={"inline-block"}>
                <div className={"h-0 text-[17px] invisible"} aria-hidden>{property.placeholder}</div>
                <input
                    type={"text"}
                    className={"inline w-full mt-[12px] h-[52px] px-2 py-1 border-[1px] rounded-[7px] border-[#E4E5E7] text-[#999] opacity-70 duration-500"}
                    placeholder={property.placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    {...props}
                />
            </div>
        </div>
    );
};

export default InputText;