//Interface for statewise data
export interface IState{
    id: number;    
    active: number,
    confirmed: number,
    deaths: number,
    deltaconfirmed: number,
    deltadeaths: number,
    deltarecovered: number,
    lastupdatedtime: Date,
    recovered: number,
    state: string,
    statecode: string,
    statenotes: string
}