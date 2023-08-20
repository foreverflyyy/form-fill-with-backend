import {z} from "zod";

export const BankSchema = z.object({
    BIC: z.string().transform((val) => {
        if (val.length !== 9) throw new Error('БИК должен содержать 9 цифр')
        if (val === "" ) throw new Error('Заполните БИК')
        if (!isInteger(val)) throw new Error('БИК должно быть числом')
        return parseInt(val, 10)
    }),
    NameBankBranch: z.string().transform((val) => {
        if (val === "") throw new Error('Заполните Название филиала банка')
        return val
    }),
    PaymentAccount: z.string().transform((val) => {
        if (val === "" ) throw new Error('Заполните Рассчетный счет')
        if (!isInteger(val)) throw new Error('Рассчетный счет должен быть числом')
        return parseInt(val, 10)
    }),
    CorrespondentAccount: z.string().transform((val) => {
        if (val.length !== 20) throw new Error('Корреспондентский счет должен содержать 20 цифр')
        if (val === "" ) throw new Error('Заполните Корреспондентский счет')
        if (!isInteger(val)) throw new Error('Корреспондентский счет должен быть числом')
        return parseInt(val, 10)
    })
})

export type TypeBankValidation = z.infer<typeof BankSchema>

function isInteger(value: string) {
    return /^\d+$/.test(value);
}