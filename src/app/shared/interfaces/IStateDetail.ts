export interface IStateDetail{
    districtData:IDistrictDetail[],
    statecode: string 
}

export interface IDistrictDetail{  
    notes: string,
    active: number,
    confirmed: number,
    deceased: number,
    recovered: number,
    delta: IDelta
}

interface IDelta{
    confirmed: number,
    deceased: number,
    recovered: number
}

