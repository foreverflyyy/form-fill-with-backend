import {inputs} from "../../data/inputs";
import GenerateInputs from "../GenerateInputs";
import {useSelector} from "react-redux";
import {selectActivity} from "../../store/features/activitySlice";
import {TypeForm} from "../../models/enum/TypeForm";
import React, {useEffect, useState} from "react";
import {NamesInputs} from "../../models/enum/NamesInputs";
import axios from "axios";
import {checkValidation} from "../../helpers/checkValidation";
import {fillBankDetails} from "../../helpers/fillBankDetails";
import {fillDataForRequest} from "../../helpers/fillDataForRequest";
import {API_CREATE_REQUISITE, API_DATA_BY_BIC, SERVER_PATH} from "../../services/api";
import {useBankValues} from "../../hooks/useBankValues";
import FooterBankForm from "../FooterBankForm";
import {TypesValues} from "../../models/TypesValues";
import Button from "../UI/Button";

const BankInputsForm = () => {

    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const {activityValues, typeActivity} = useSelector(selectActivity);

    const {bankForms, changeValue, setNewBankForm, numLastIndexForm} = useBankValues(inputs);

    const needValueProperty = bankForms[numLastIndexForm].render
        .find(item => item.id === NamesInputs.BIC)?.value as string;

    useEffect(() => {
        if(needValueProperty?.length === 9)
            updateData(needValueProperty);
    }, [needValueProperty]);

    const updateData = async (valueBIC: string) => {
        const response = await axios.get(`${API_DATA_BY_BIC}?type=json&bik=${valueBIC}`);

        const ks = response.data.ks;
        const name = response.data.name.replace(/&quot;/g,'"');

        changeValue(numLastIndexForm, ks, NamesInputs.CorrespondentAccount);
        changeValue(numLastIndexForm, name, NamesInputs.NameBankBranch);
    }

    const handlerRequest = async () => {
        setIsSuccess(false);
        setError("");
        const error = checkValidation(bankForms[numLastIndexForm]);

        if(error) {
            setError(error);
            return;
        }

        const valuesBankDetails = fillBankDetails(
            bankForms[numLastIndexForm].render,
            TypeForm.BankDetails
        );

        const formData = fillDataForRequest(
            activityValues,
            valuesBankDetails,
            typeActivity
        );

        const response = await axios.post(`${SERVER_PATH}/${API_CREATE_REQUISITE}`, formData);

        if(response.status === 200)
            setIsSuccess(true);
        else
            setError("Error when you tried send request!");
    }

    return (
        <>
            <h4 className={"text-[#222] text-[18px] opacity-90"}>
                {bankForms[0].name}
            </h4>

            {error && <h3 className={"text-red-500 italic"}>{error}</h3>}
            {isSuccess && <h3 className={"text-green-500 italic"}>Успешно!</h3>}

            <div className={""}>
                {bankForms.map((form, i) => (
                    <div className={"flex flex-col"} key={form.id}>
                        <GenerateInputs
                            requiredForm={form}
                            disabled={numLastIndexForm !== i}
                            changeValue={(value: TypesValues, idField: string) => changeValue(i, value, idField)}
                        />
                    </div>
                ))}
            </div>

            <FooterBankForm
                handlerAddNewBank={() => setNewBankForm()}
                handlerRequest={handlerRequest}
            />
        </>
    );
};

export default BankInputsForm;