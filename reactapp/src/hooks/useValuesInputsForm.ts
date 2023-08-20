import {useMemo, useState} from "react";
import {FormProperty} from "../models/FormProperty";
import {TypesValues} from "../models/TypesValues";

export const useValuesInputsForm = (inputForms: FormProperty[], typeActivity: string) => {

    const [data, setData] = useState<FormProperty[]>(inputForms);

    const requiredForm = useMemo(() => {
        return inputForms.find(input => input.name === typeActivity)!;
    }, [typeActivity]);

    const changeValue = (value: TypesValues, idField: string) => {
        const newState = data?.map(item => {
            if (item.id === requiredForm.id) {
                const prevRender = item.render
                prevRender.map((subItem) => {
                    if (subItem.id === idField)
                        subItem.value = value

                    return subItem
                })

            }
            return item
        })

        setData(newState)
    };

    return {
        changeValue,
        requiredForm
    }
}