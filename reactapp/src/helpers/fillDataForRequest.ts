import {RequestValues, ValuesActivity, ValuesBankDetails} from "../models/RequestNewRequisite";
import {TypeForm} from "../models/enum/TypeForm";
import {NamesInputs} from "../models/enum/NamesInputs";

export const fillDataForRequest = (
    valuesActivity: ValuesActivity,
    valuesBankDetails: ValuesBankDetails,
    typeActivity: TypeForm
) => {
    const formData = new FormData();

    const values: RequestValues = {
        INN: valuesActivity.INN!,
        DateOfRegistration: valuesActivity.DateOfRegistration!,
        ThereNoContract: valuesActivity.ThereNoContract!,
        BIC: valuesBankDetails.BIC!,
        NameBankBranch: valuesBankDetails.NameBankBranch!,
        CorrespondentAccount: valuesBankDetails.CorrespondentAccount!,
        PaymentAccount: valuesBankDetails.PaymentAccount!
    };

    formData.append(NamesInputs.ScanINN, valuesActivity.ScanINN!);
    formData.append(NamesInputs.ScanOfAnExtractFromTheUSRIP, valuesActivity.ScanOfAnExtractFromTheUSRIP!);

    if(valuesActivity.ScanLeaseAgreementPremises)
        formData.append(NamesInputs.ScanLeaseAgreementPremises, valuesActivity.ScanLeaseAgreementPremises);

    if(typeActivity === TypeForm.Individual) {
        values.OGRN = valuesActivity.OGRNIP;

        formData.append(NamesInputs.ScanOGRNIP, valuesActivity.ScanOGRNIP!);
    } else if(typeActivity === TypeForm.LLC) {
        values.OGRN = valuesActivity.OGRN;
        values.FullName = valuesActivity.FullName;
        values.ShortName = valuesActivity.ShortName;

        formData.append(NamesInputs.ScanOGRN, valuesActivity.ScanOGRN!);
    }

    formData.append("data", JSON.stringify(values));

    return formData;
}

/*
for (const key in valuesActivity) {
    const valueByKey = valuesActivity[key as keyof ValuesActivity];
    if(valueByKey instanceof File)
        files.append(key, valueByKey);
    else
        values[key as keyof RequestValues] = valueByKey  as string | boolean;
}

for (const key in valuesBankDetails) {
    const valueByKey = valuesBankDetails[key as keyof ValuesBankDetails];
    values[key as keyof RequestValues] = valueByKey as string;
}
*/