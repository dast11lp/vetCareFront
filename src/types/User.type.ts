export interface UserLogin {
    email: string,
    password: string,
}

export interface UserData extends UserLogin {
    id: number,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    address: string,
}

export interface Specialist extends UserData{
    specialistType: {
        id: number,
        name: string,
        description: string,
    }
}



