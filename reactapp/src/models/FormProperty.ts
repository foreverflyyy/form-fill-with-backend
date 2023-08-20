import {TypeInput} from "./enum/TypeInput";

export interface FormProperty {
    id: number,
    name: string,
    render: InputProperty[]
}

export interface InputProperty {
    id: string,
    type: TypeInput,
    label: string,
    required: boolean,
    placeholder?: string
    value?: string | boolean | File | null
}