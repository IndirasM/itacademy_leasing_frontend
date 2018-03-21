export class privateUserData{

    firstName: string;
    lastName: string;
    personalCode: string;
    userAdress: string;
    phoneNumber: string;
    email: string;

    constructor(values: Object = {})
    {
        Object.assign(this, values);
    }
}