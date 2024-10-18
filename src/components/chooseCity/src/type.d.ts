import { proviceType } from './type.d';
export interface cityType {
    id: number
    spell: string
    name: string
}

export interface cityTypeList {
    [key: string]: Array<cityType>
}

export interface proviceType {
    id?: string
    name: string
    data: Array<string>
}

export interface proviceTypeList {
    [key: string]: Array<proviceType>
}