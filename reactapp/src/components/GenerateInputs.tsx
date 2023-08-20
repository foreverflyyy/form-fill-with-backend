import {TypeInput} from "../models/enum/TypeInput";
import InputText from "./UI/InputText";
import {FormProperty} from "../models/FormProperty";
import InputFile from "./UI/InputFile";
import InputCheckbox from "./UI/InputCheckbox";
import {TypesValues} from "../models/TypesValues";

interface Props {
    requiredForm: FormProperty,
    changeValue: (value: TypesValues, idField: string) => void
}

const GenerateInputs = ({requiredForm, changeValue}: Props) => {

    return (
        <div className={"pt-[32px] flex flex-wrap content-start items-center"}>
            {requiredForm.render.map(property => {
                switch(property.type) {
                    case TypeInput.Text:
                        return (
                            <InputText
                                key={property.id}
                                property={property}
                                onChange={(e) => changeValue(e, property.id)}
                                value={property.value as string || ''}
                            />
                        )
                    case TypeInput.File:
                        return (
                            <InputFile
                                key={property.id}
                                property={property}
                                onChange={(file: File | null) => changeValue(file, property.id)}
                                formId={requiredForm.id}
                                value={property.value as File}
                            />
                    )
                    case TypeInput.Checkbox:
                        return (
                            <InputCheckbox
                                key={property.id}
                                property={property}
                                onChange={(val: boolean) => changeValue(val, property.id)}
                                value={property.value as boolean}
                            />
                        )
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default GenerateInputs;