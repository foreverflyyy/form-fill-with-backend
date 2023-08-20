import {TypesValues} from "../models/TypesValues";
import {TypeInput} from "../models/enum/TypeInput";
import {IndividualSchema} from "../lib/validate/IndividualValidation";
import {FormProperty} from "../models/FormProperty";
import {ZodError} from "zod";
import {TypeForm} from "../models/enum/TypeForm";
import {LlcSchema} from "../lib/validate/LlcValidation";
import {BankSchema} from "../lib/validate/BankSchema";

export const checkValidation = (requiredForm: FormProperty) => {
    const files = requiredForm.render.filter(item =>
        item.type === TypeInput.File && item.required
    );

    for(const property of files)
        if (property.value === null)
            return "Загрузите обязательные файлы!";

    const data = {} as Record<string, TypesValues>;

    for(const el of requiredForm.render){
        if(el.value === undefined)
            data[el.id] = ""
        else
            data[el.id] = el.value;
    }

    try {
        let response: any = {};
        if(requiredForm.name === TypeForm.Individual)
            response = IndividualSchema.safeParse(data);
        else if(requiredForm.name === TypeForm.LLC)
            response = LlcSchema.safeParse(data);
        else if(requiredForm.name === TypeForm.BankDetails)
            response = BankSchema.safeParse(data);
        else
            response = {};

        if(!response.success) {
            const parse = JSON.parse(response.error.message) as ZodError[];
            console.log("Error", response)
            return parse[0].message;
        }

    } catch(err: any) {
        console.log("Error catch", err)
        return err?.message;
    }

    return "";
}