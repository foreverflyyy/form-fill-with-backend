import {ValuesActivity} from "../models/dto/RequestNewRequisite";
import {TypeForm} from "../models/enum/TypeForm";
import {NamesInputs} from "../models/enum/NamesInputs";
import {InputProperty} from "../models/FormProperty";

export const fillActivityValues = (activityValues: InputProperty[], typeActivity: TypeForm, isBankDetails = false) => {
    const data: ValuesActivity = {};

    for(const inputProperty of activityValues){
        switch(inputProperty.id) {
            case NamesInputs.INN:
                data.INN = inputProperty.value as string;
                break;
            case NamesInputs.ScanINN:
                data.ScanINN = inputProperty.value as File;
                break;
            case NamesInputs.DateOfRegistration:
                data.DateOfRegistration = inputProperty.value as string;
                break;
            case NamesInputs.ScanOfAnExtractFromTheUSRIP:
                data.ScanOfAnExtractFromTheUSRIP = inputProperty.value as File;
                break;
            case NamesInputs.ScanLeaseAgreementPremises:
                data.ScanLeaseAgreementPremises = inputProperty.value as File;
                break;
            case NamesInputs.ThereNoContract:
                data.ThereNoContract = inputProperty.value as boolean;
                break;
            default:
                break;
        }
    }

    if(typeActivity === TypeForm.LLC) {
        data.FullName = activityValues.find(activity => activity.id === NamesInputs.Fullname)?.value as string;
        data.ShortName = activityValues.find(activity => activity.id === NamesInputs.ShortName)?.value as string;
        data.OGRN = activityValues.find(activity => activity.id === NamesInputs.OGRN)?.value as string;
        data.ScanOGRN = activityValues.find(activity => activity.id === NamesInputs.ScanOGRN)?.value as File;
    } else if(typeActivity === TypeForm.Individual) {
        data.OGRNIP = activityValues.find(activity => activity.id === NamesInputs.OGRNIP)?.value as string;
        data.ScanOGRNIP = activityValues.find(activity => activity.id === NamesInputs.ScanOGRNIP)?.value as File;
    }

    return data;
}