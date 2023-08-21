import React from 'react';
import Button from "./UI/Button";
import {setActivityValues, setShowBankDetails} from "../store/features/activitySlice";
import {useDispatch} from "react-redux";
import {ReactComponent as PlusIcon} from "../assets/plus.svg";

interface Props {
    handlerAddNewBank: () => void;
}

const FooterBankForm = ({handlerAddNewBank}: Props) => {

    const dispatch = useDispatch();

    const handlerBackToActivity = () => {
        dispatch(setActivityValues({}))
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
            <div className={"w-full pt-6 flex justify-between"}>
                <Button onClick={handlerBackToActivity}>
                    Назад
                </Button>
            </div>
        </div>
    );
};

export default FooterBankForm;
