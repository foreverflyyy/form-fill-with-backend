import {z} from "zod";

export const IndividualSchema = z.object({
    INN: z.string().transform((val) => {
        if (val.length !== 10) throw new Error('ИНН должен содержать 10 цифр')
        if (val === "" ) throw new Error('Заполните ИНН')
        return parseInt(val)
    }),
    ScanINN: z.any(),
    OGRNIP: z.string().transform((val) => {
        if (val === "") throw new Error('Заполните ОГРНИП')
        return val
    }),
    ScanOGRNIP: z.any(),
    DateOfRegistration: z.string()
        .regex(new RegExp(`\\d{1,2}\\.\\d{1,2}\\.\\d{2,4}`), 'Неправильный формат даты дд.мм.гггг'),
    ScanOfAnExtractFromTheUSRIP: z.any(),
    ScanLeaseAgreementPremises: z.any(),
    ThereNoContract: z.boolean(),
});

export type TypeIndividualValidation = z.infer<typeof IndividualSchema>;