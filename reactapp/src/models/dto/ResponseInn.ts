export interface ResponseInn {
    suggestions: DataByInn[]
}

export interface DataByInn {
    value: string,
    unrestricted_value: string,
    data: Data
}

export interface Data {
    kpp: string;
    ks: string;
    ogrn: string;
    state: State;
}

export interface State {
    status: string;
    code: string;
    actuality_date: number;
    registration_date: number;
}