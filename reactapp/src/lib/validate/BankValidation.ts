import {z} from "zod";

export const BankValidation = z.object({
    BIC: z.string().transform((val) => {
        if (val.length !== 9) throw new Error('БИК должен содержать 9 цифр')
        if (val === "" ) throw new Error('Заполните БИК')
        return parseInt(val)
    }),
    NameBankBranch: z.string().transform((val) => {
        if (val === "" ) throw new Error('Заполните Название филиала банка')
        return parseInt(val)
    }),
    PaymentAccount: z.string().transform((val) => {
        if (val === "" ) throw new Error('Заполните Рассчетный счет')
        return parseInt(val)
    }),
    CorrespondentAccount: z.string().transform((val) => {
        if (val.length !== 20) throw new Error('Корреспондентский счет должен содержать 20 цифр')
        if (val === "" ) throw new Error('Заполните Корреспондентский счет')
        return parseInt(val)
    })
})

export type TypeBankValidation = z.infer<typeof BankValidation>