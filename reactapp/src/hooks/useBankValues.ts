import {useMemo, useState} from "react";
import {FormProperty} from "../models/FormProperty";
import {TypesValues} from "../models/TypesValues";
import {TypeForm} from "../models/enum/TypeForm";
import {NamesInputs} from "../models/enum/NamesInputs";
import {TypeInput} from "../models/enum/TypeInput";

export const useBankValues = (inputForms: FormProperty[]) => {

    const requiredForm = useMemo(() => {
        return inputForms.find(input => input.name === TypeForm.BankDetails)!;
    }, []);

    const [bankForms, setBankForms] = useState<FormProperty[]>([requiredForm]);

    const changeValue = (idForm: number, value: TypesValues, idField: string) => {

        const newState = bankForms.map(form => {
            if (form.id === idForm) {
                form.render.map((input) => {
                    if (input.id === idField) {
                        input.value = value;
                    }

                    return input;
                })
            }
            return form;
        })

        setBankForms(newState);
    };

    const setNewBankForm = () => {
        const data: FormProperty = {
            id: bankForms.length,
            name: TypeForm.BankDetails,
            render: [
                {
                    id: NamesInputs.BIC,
                    type: TypeInput.Text,
                    label: "БИК",
                    required: true,
                    placeholder: 'ххххххххх',
                    value: "",
                },
                {
                    id: NamesInputs.NameBankBranch,
                    type: TypeInput.Text,
                    label: "Название филиала банка",
                    required: true,
                    placeholder: "ООО «Московская промышленная компания»",
                    value: ""
                },
                {
                    id: NamesInputs.PaymentAccount,
                    type: TypeInput.Text,
                    label: "Рассчетный счет",
                    required: true,
                    placeholder: 'хххххххххххххххххххх'
                },
                {
                    id: NamesInputs.CorrespondentAccount,
                    type: TypeInput.Text,
                    label: "Корреспондентский счет",
                    required: true,
                    placeholder: "хххххххххххххххххххх"
                }
            ]
        };

        setBankForms([...bankForms, data]);
    }

    return {
        bankForms,
        setNewBankForm,
        changeValue,
        numLastIndexForm: bankForms.length - 1
    }
}