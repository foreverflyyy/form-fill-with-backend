import {ValuesBankDetails} from "../models/RequestNewRequisite";
import {TypeForm} from "../models/enum/TypeForm";
import {InputProperty} from "../models/FormProperty";
import {NamesInputs} from "../models/enum/NamesInputs";

export const fillBankDetails = (activityValues: InputProperty[], typeActivity: TypeForm, isBankDetails = false) => {
    const data: ValuesBankDetails = {};

    for(const inputProperty of activityValues){
        switch(inputProperty.id) {
            case NamesInputs.BIC:
                data.BIC = inputProperty.value as string;
                break;
            case NamesInputs.NameBankBranch:
                data.NameBankBranch = inputProperty.value as string;
                break;
            case NamesInputs.CorrespondentAccount:
                data.CorrespondentAccount = inputProperty.value as string;
                break;
            case NamesInputs.PaymentAccount:
                data.PaymentAccount = inputProperty.value as string;
                break;
            default:
                break;
        }
    }

    return data;
}