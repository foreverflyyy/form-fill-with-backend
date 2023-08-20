import React, {useState} from 'react';
import {InputProperty} from "../../models/FormProperty";
import {ReactComponent as UploadIcon} from "../../assets/upload.svg";
import {ReactComponent as CheckIcon} from "../../assets/check.svg";
import {ReactComponent as CrossIcon} from "../../assets/cross.svg";

interface Props {
    property: InputProperty,
    onChange: (file: File | null) => void,
    value: File,
    formId: number
}

const InputFile = ({property, onChange, value, formId}: Props) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [drag, setDrag] = useState(false);

    const handleDrag = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDrag(true);
        } else if (e.type === "dragleave") {
            setDrag(false);
        }
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);
        if (e.dataTransfer.files[0]) {
            onChange(e.dataTransfer.files[0]);
            setIsLoaded(true);
        }
    };
    const handleChange = (e: any) => {
        e.preventDefault();
        if (e.target.files[0]) {
            onChange(e.target.files[0]);
            setIsLoaded(true);
        }
    };

    const handleDeleteFile = (e: any) => {
        e.preventDefault();
        onChange(null);
        setIsLoaded(false);
    };

    return (
        <div className={"flex flex-col pr-[16px] pt-[24px]"}>
            <div className={"text-[14px] text-[#222] font-normal opacity-60"}>
                {property.label}
                {property.required && "*"}
            </div>
            <form onDragEnter={handleDrag} className={"relative"}>
                <div className={"mt-[12px] flex items-center cursor-pointer"}>
                    <input
                        type={"file"}
                        id={`input-file-upload-${formId}-${property.id}`}
                        accept="image/jpeg, image/jpg, image/png, image/svg"
                        className={"hidden"}
                        onChange={handleChange}
                    />
                    {isLoaded && !!value ? (
                        <label htmlFor={`input-file-upload-${formId}-${property.id}`}>
                            <div className={"h-[52px] min-w-[388px] flex justify-between items-center border-[1px] rounded-lg border-[#E4E5E7] px-[20px] py-[15px]"}>
                                <div className={"flex space-x-[12px] items-center "}>
                                    <CheckIcon/>
                                    <div className={"text-[#5795FD] text-[15px]"}>
                                        {value?.name}
                                    </div>
                                </div>
                                <div
                                    className={"cursor-pointer"}
                                    onClick={handleDeleteFile}
                                >
                                    <CrossIcon/>
                                </div>
                            </div>
                        </label>
                    ) : (
                        <label
                            htmlFor={`input-file-upload-${formId}-${property.id}`}
                        >
                            <div className={"h-full flex"}>
                                <div className={`${drag ? "bg-[#5795FD] text-white" : "text-[#999]"} flex items-center min-w-[336px] cursor-pointer h-[52px] px-[20px] py-[16px] border-[1px] rounded-l-lg border-[#E4E5E7] max-w-[200px] duration-500`}>
                                    {drag ? "Отпустите файл" : property.placeholder}
                                </div>
                                <div className={"w-[52px] p-[18px] bg-[#5795FD] cursor-pointer rounded-r-lg"}>
                                    <UploadIcon/>
                                </div>
                            </div>
                        </label>
                    )}
                </div>
                {drag &&
                    <div
                        className={"absolute w-full h-full top-0 bottom-0 left-0 right-0"}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    ></div> }
            </form>
        </div>
    );
};

export default InputFile;