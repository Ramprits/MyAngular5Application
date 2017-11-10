export interface IEmployee {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    gender: string;
    address: string;
}

export interface IEmployeeResponse {
    status: boolean;
    employee: IEmployee;
}
