import {useDispatch, useSelector} from "react-redux";
import {selectActivity, setActivityValues, setShowBankDetails} from "../store/features/activitySlice";
import {inputForms} from "../data/inputForms";
import Button from "./UI/Button";
import {useValuesInputsForm} from "../hooks/useValuesInputsForm";
import FormInputs from "./FormInputs";
import {useEffect, useState} from "react";
import {NamesInputs} from "../models/enum/NamesInputs";
import axios from "axios";
import {ResponseInn} from "../models/ResponseInn";
import {checkValidation} from "../helpers/checkValidation";
import {fillActivityValues} from "../helpers/fillActivityValues";
import {TypeForm} from "../models/enum/TypeForm";
import {API_DATA_BY_INN, SERVER_PATH} from "../services/api";

const FormFilling = () => {

    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const {typeActivity} = useSelector(selectActivity);

    const {requiredForm, changeValue} = useValuesInputsForm(inputForms, typeActivity);

    const needValueProperty = requiredForm.render
        .find(item => item.id === NamesInputs.INN)?.value as string;

    useEffect(() => {
        if(needValueProperty?.length === 10 && typeActivity === TypeForm.LLC)
            updateData(needValueProperty);
    }, [needValueProperty]);

    const updateData = async (valueInn: string) => {
        const response = await axios.get<ResponseInn>(`${SERVER_PATH}/${API_DATA_BY_INN}?Inn=${valueInn}`);

        const data = response.data.suggestions[0];

        if(!data)
            return;

        for(const inputProperty of requiredForm.render){
            switch(inputProperty.id) {
                case NamesInputs.Fullname:
                    changeValue(data.value, inputProperty.id);
                    break;
                case NamesInputs.ShortName:
                    changeValue(data.unrestricted_value, inputProperty.id);
                    break;
                case NamesInputs.DateOfRegistration:
                    const date = new Date(data.data.state.registration_date).toLocaleDateString('en-GB').split('/').join('.');
                    changeValue(date, inputProperty.id);
                    break;
                case NamesInputs.OGRN:
                    changeValue(data.data.ogrn, inputProperty.id);
                    break;
                default:
                    break;
            }
        }
    }

    const nextForm = () => {
        const error = checkValidation(requiredForm);

        if(error) {
            setError(error);
            return;
        }

        const data = fillActivityValues(requiredForm.render, typeActivity)
        console.log(data);
        dispatch(setActivityValues(data));
        dispatch(setShowBankDetails(true));
    }

    if (!requiredForm)
        return null;

    return (
        <>
            <h3 className={"pt-[64px] text-[#222] text-[18px] opacity-90"}>
                {requiredForm.name}
            </h3>

            <FormInputs
                requiredForm={requiredForm}
                changeValue={changeValue}
            />

            {error && <h3 className={"text-red-500 italic"}>{error}</h3>}

            <div className={"flex"}>
                <Button onClick={nextForm}>
                    Далее
                </Button>
            </div>
        </>
    )
};

export default FormFilling;
