import {RequestValues, ValuesActivity, ValuesBankDetails} from "../models/dto/RequestNewRequisite";
import {TypeForm} from "../models/enum/TypeForm";
import {NamesInputs} from "../models/enum/NamesInputs";

export const fillDataForRequest = (
    valuesActivity: ValuesActivity,
    valuesBankDetails: ValuesBankDetails,
    typeActivity: TypeForm
) => {
    const formData = new FormData();

    formData.append(NamesInputs.ScanINN, valuesActivity.ScanINN!);
    formData.append(NamesInputs.ScanOfAnExtractFromTheUSRIP, valuesActivity.ScanOfAnExtractFromTheUSRIP!);

    if(valuesActivity.ScanLeaseAgreementPremises)
        formData.append(NamesInputs.ScanLeaseAgreementPremises, valuesActivity.ScanLeaseAgreementPremises);

    const values: RequestValues = {
        ActivityValues: {
            INN: valuesActivity.INN!,
            DateOfRegistration: valuesActivity.DateOfRegistration!,
            ThereNoContract: valuesActivity.ThereNoContract!,
        },
        BankValues: {
            BIC: valuesBankDetails.BIC!,
            NameBankBranch: valuesBankDetails.NameBankBranch!,
            CorrespondentAccount: valuesBankDetails.CorrespondentAccount!,
            PaymentAccount: valuesBankDetails.PaymentAccount!
        }
    };

    if(typeActivity === TypeForm.Individual) {
        values.ActivityValues.OGRN = valuesActivity.OGRNIP;

        formData.append(NamesInputs.ScanOGRNIP, valuesActivity.ScanOGRNIP!);
    } else if(typeActivity === TypeForm.LLC) {
        values.ActivityValues.OGRN = valuesActivity.OGRN;
        values.ActivityValues.FullName = valuesActivity.FullName;
        values.ActivityValues.ShortName = valuesActivity.ShortName;

        formData.append(NamesInputs.ScanOGRN, valuesActivity.ScanOGRN!);
    }

    console.log(100, values);

    formData.append("data", JSON.stringify(values));
    return formData;
}