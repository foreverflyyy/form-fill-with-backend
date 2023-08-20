import {z} from "zod";

export const LlcSchema = z.object({
    Fullname: z.string().transform(val => {
        if (val === "" ) throw new Error('Заполните Полное наименование')
        return val;
    }),
    ShortName: z.string().transform(val => {
        if (val === "" ) throw new Error('Заполните Сокращенное наименование')
        return val;
    }),
    DateOfRegistration: z.string()
        .regex(new RegExp(`\\d{1,2}\\.\\d{1,2}\\.\\d{2,4}`), 'Неправильный формат даты дд.мм.гггг'),
    INN: z.string().transform((val) => {
        if (val.length !== 10) throw new Error('ИНН должен содержать 10 цифр')
        if (val === "" ) throw new Error('Заполните ИНН')
        return parseInt(val)
    }),
    ScanINN: z.any(),
    OGRN: z.string().transform(e => e === "" ? undefined : e),
    ScanOGRN: z.any(),
    ScanOfAnExtractFromTheUSRIP: z.any(),
    ScanLeaseAgreementPremises: z.any(),
    ThereNoContract: z.boolean(),
})

export type TypeLLCValidation = z.infer<typeof LlcSchema>