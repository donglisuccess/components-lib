export interface AreaType {
    code: string
    name: string
    children?: Array<AreaType>
}