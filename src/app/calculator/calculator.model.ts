// Calculator model (DTO)
export interface Calculator {
    id: number;
    value1: number;
    unit1: string;
    value2: number;
    unit2: string;
    operation: string;
    result: number;
}