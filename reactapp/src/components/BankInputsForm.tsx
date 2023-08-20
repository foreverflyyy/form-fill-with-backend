import Button from "./UI/Button";
import {inputs} from "../data/inputs";
import GenerateInputs from "./GenerateInputs";
import {useDispatch, useSelector} from "react-redux";
import {selectActivity, setActivityValues, setShowBankDetails} from "../store/features/activitySlice";
import {TypeForm} from "../models/enum/TypeForm";
import {ReactComponent as PlusIcon} from "../assets/plus.svg";
import {useValuesInputsForm} from "../hooks/useValuesInputsForm";
import {useEffect, useState} from "react";
import {NamesInputs} from "../models/enum/NamesInputs";
import axios from "axios";
import {checkValidation} from "../helpers/checkValidation";
import {fillBankDetails} from "../helpers/fillBankDetails";
import {fillDataForRequest} from "../helpers/fillDataForRequest";
import {API_CREATE_REQUISITE, API_DATA_BY_BIC, SERVER_PATH} from "../services/api";

const BankInputsForm = () => {

    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const {activityValues, typeActivity} = useSelector(selectActivity);
    const dispatch = useDispatch();

    const {requiredForm, changeValue} = useValuesInputsForm(inputs, TypeForm.BankDetails);

    const needValueProperty = requiredForm.render
        .find(item => item.id === NamesInputs.BIC)?.value as string;

    useEffect(() => {
        if(needValueProperty?.length === 9)
            updateData(needValueProperty);
    }, [needValueProperty]);

    const updateData = async (valueBIC: string) => {
        const response = await axios.get(`${API_DATA_BY_BIC}?type=json&bik=${valueBIC}`);

        const ks = response.data.ks;
        const name = response.data.name.replace(/&quot;/g,'"');

        changeValue(ks, NamesInputs.CorrespondentAccount);
        changeValue(name, NamesInputs.NameBankBranch);
    }

    const handlerRequest = async () => {
        const error = checkValidation(requiredForm);

        if(error) {
            setIsSuccess(false);
            setError(error);
            return;
        }

        if(!activityValues?.INN){
            setIsSuccess(false);
            setError("Заполните для начала форму вида деятельности!");
            return;
        }

        const valuesBankDetails = fillBankDetails(requiredForm.render, TypeForm.BankDetails);

        const formData = fillDataForRequest(
            activityValues,
            valuesBankDetails,
            typeActivity
        );

        const response = await axios.post(`${SERVER_PATH}/${API_CREATE_REQUISITE}`, formData);

        if(response.status === 200) {
            setError("");
            setIsSuccess(true);
            dispatch(setActivityValues({}))
        } else {
            setError("Error when you tried send request!")
        }
    }

    return (
        <>
            <h4 className={"text-[#222] text-[18px] opacity-90"}>
                {requiredForm.name}
            </h4>

            {error && <h3 className={"text-red-500 italic"}>{error}</h3>}
            {isSuccess && <h3 className={"text-green-500 italic"}>Успешно!</h3>}

            <GenerateInputs
                requiredForm={requiredForm}
                changeValue={changeValue}
            />
            <div className={"w-full flex justify-between"}>
                <div className={"pt-[24px] h-full flex space-x-3 items-center cursor-pointer"}>
                    <PlusIcon/>
                    <div
                        onClick={() => dispatch(setShowBankDetails(false))}
                        className={"text-[#3E85FD] text-[15px] hover:text-blue-300 duration-300"}
                    >
                        Добавить еще один банк
                    </div>
                </div>
                <Button onClick={handlerRequest}>
                    Отправить
                </Button>
            </div>
        </>
    );
};

export default BankInputsForm;