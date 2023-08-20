import React from 'react';
import {InputProperty} from "../../models/FormProperty";

interface Props {
    property: InputProperty,
    onChange: (val: boolean) => void,
    value: boolean
}

const InputCheckbox = ({property, value, onChange}: Props) => {
    return (
        <div className={"flex flex-col pr-[16px] pt-[24px]"}>
            <div className={"invisible"}>{property.label}</div>
            <div className={"flex flex-row items-center space-x-3"}>
                <input
                    type={"checkbox"}
                    checked={value}
                    onChange={() => onChange(!value)}
                    className={"w-[18px] h-[18px]"}
                    placeholder={property.placeholder}
                />
                <div className={"text-[14px] text-[#222] font-normal opacity-60"}>
                    {property.label}
                    {property.required && "*"}
                </div>
            </div>
        </div>
    );
};

export default InputCheckbox;