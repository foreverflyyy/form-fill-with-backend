import {FormProperty} from "../models/FormProperty";
import {TypeInput} from "../models/enum/TypeInput";
import {TypeForm} from "../models/enum/TypeForm";
import {NamesInputs} from "../models/enum/NamesInputs";

export const inputs: FormProperty[] = [
    {
        id: 0,
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
    },
    {
        id: 1,
        name: TypeForm.Individual,
        render: [
            {
                id: NamesInputs.INN,
                type: TypeInput.Text,
                label: "ИНН",
                required: true,
                placeholder: 'хххххххххх'
            },
            {
                id: NamesInputs.ScanINN,
                type: TypeInput.File,
                label: "Скан ИНН",
                required: true,
                placeholder: 'Выберите или перетащите файл',
                value: null
            },
            {
                id: NamesInputs.OGRNIP,
                type: TypeInput.Text,
                label: "ОГРНИП",
                required: true,
                placeholder: 'ххххххххххххххх'
            },
            {
                id: NamesInputs.ScanOGRNIP,
                type: TypeInput.File,
                label: "Скан ОГРНИП",
                required: true,
                placeholder: "Выберите или перетащите файл",
                value: null
            },
            {
                id: NamesInputs.DateOfRegistration,
                type: TypeInput.Text,
                label: "Дата регистрации",
                required: true,
                placeholder: "дд.мм.гггг"
            },
            {
                id: NamesInputs.ScanOfAnExtractFromTheUSRIP,
                type: TypeInput.File,
                label: "Скан выписки из ЕГРИП (не старше 3 месяцев)",
                required: true,
                placeholder: "Выберите или перетащите файл",
                value: null
            },
            {
                id: NamesInputs.ScanLeaseAgreementPremises,
                type: TypeInput.File,
                label: "Скан договора аренды помещения (офиса)",
                required: false,
                placeholder: "Выберите или перетащите файл",
                value: null
            },
            {
                id: NamesInputs.ThereNoContract,
                type: TypeInput.Checkbox,
                label: "Нет договора",
                required: false,
                value: false,
            },
        ]
    },
    {
        id: 2,
        name: TypeForm.LLC,
        render: [
            {
                id: NamesInputs.Fullname,
                type: TypeInput.Text,
                label: "Наименование полное",
                required: true,
                placeholder: "ООО «Московская промышленная компания»"
            },
            {
                id: NamesInputs.ShortName,
                type: TypeInput.Text,
                label: "Наименование сокращенное",
                required: true,
                placeholder: "ООО «МПК»"
            },
            {
                id: NamesInputs.DateOfRegistration,
                type: TypeInput.Text,
                label: "Дата регистрации",
                required: true,
                placeholder: "дд.мм.гггг"
            },
            {
                id: NamesInputs.INN,
                type: TypeInput.Text,
                label: "ИНН",
                required: true,
                placeholder: 'хххххххххх'
            },
            {
                id: NamesInputs.ScanINN,
                type: TypeInput.File,
                label: "Скан ИНН",
                required: true,
                placeholder: 'Выберите или перетащите файл',
                value: null
            },
            {
                id: NamesInputs.OGRN,
                type: TypeInput.Text,
                label: "ОГРН",
                required: true,
                placeholder: 'ххххххххххххххх'
            },
            {
                id: NamesInputs.ScanOGRN,
                type: TypeInput.File,
                label: "Скан ОГРН",
                required: true,
                placeholder: "Выберите или перетащите файл",
                value: null
            },
            {
                id: NamesInputs.ScanOfAnExtractFromTheUSRIP,
                type: TypeInput.File,
                label: "Скан выписки из ЕГРИП (не старше 3 месяцев)",
                required: true,
                placeholder: "Выберите или перетащите файл",
                value: null
            },
            {
                id: NamesInputs.ScanLeaseAgreementPremises,
                type: TypeInput.File,
                label: "Скан договора аренды помещения (офиса)",
                required: false,
                placeholder: "Выберите или перетащите файл",
                value: null
            },
            {
                id: NamesInputs.ThereNoContract,
                type: TypeInput.Checkbox,
                label: "Нет договора",
                required: false,
                value: false
            },
        ]
    },
]
