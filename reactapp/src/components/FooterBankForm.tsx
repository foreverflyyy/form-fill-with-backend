import React from 'react';
import Button from "./UI/Button";
import {setActivityValues, setShowBankDetails} from "../store/features/activitySlice";
import {useDispatch} from "react-redux";
import {ReactComponent as PlusIcon} from "../assets/plus.svg";
import {inputs} from "../data/inputs";
import {boolean} from "zod";

interface Props {
    handlerAddNewBank: () => void;
    handlerRequest: () => void;
}

const FooterBankForm = ({handlerAddNewBank, handlerRequest}: Props) => {

    const dispatch = useDispatch();

    const handlerBackToActivity = () => {

        inputs?.map(item => {
            item.render.map((subItem) => {
                if (subItem.value instanceof File)
                    subItem.value = {} as File;

                if(subItem.value instanceof boolean)
                    subItem.value = false;

                if(subItem.value instanceof String)
                    subItem.value = "";

                return subItem
            })
            return item
        })

        dispatch(setActivityValues({}));
        dispatch(setShowBankDetails(false));
    }

    return (
        <div className={"w-full flex flex-col"}>
            <div className={"pt-[24px] h-full flex space-x-3 items-center cursor-pointer"}>
                <PlusIcon/>
                <div
                    onClick={handlerAddNewBank}
                    className={"text-[#3E85FD] text-[15px] hover:text-blue-300 duration-300"}
                >
                    Добавить еще один банк
                </div>
            </div>
            <div className={"w-full pt-6 flex flex-row justify-between"}>
                <Button onClick={handlerBackToActivity}>
                    Назад
                </Button>
                <Button onClick={handlerRequest}>
                    Отправить
                </Button>
            </div>
        </div>
    );
};

export default FooterBankForm;
