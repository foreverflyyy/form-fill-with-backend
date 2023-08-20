export interface RequestNewRequisite {
    activity: ValuesActivity,
    bank: ValuesBankDetails
}

export interface ValuesActivity {
    INN?: string,
    ScanINN?: File,
    OGRNIP?: string,
    ScanOGRNIP?: File,
    DateOfRegistration?: string,
    ScanOfAnExtractFromTheUSRIP?: File,
    ScanLeaseAgreementPremises?: File,
    ThereNoContract?: boolean,
    FullName?: string,
    ShortName?: string,
    OGRN?: string,
    ScanOGRN?: File,
}

export interface ValuesBankDetails {
    BIC?: string,
    NameBankBranch?: string,
    CorrespondentAccount?: string,
    PaymentAccount?: string,
}

export interface RequestValues {
    INN: string,
    OGRNIP?: string,
    DateOfRegistration: string,
    ThereNoContract: boolean,
    FullName?: string,
    ShortName?: string,
    OGRN?: string,
    BIC: string,
    NameBankBranch: string,
    CorrespondentAccount: string,
    PaymentAccount: string
}