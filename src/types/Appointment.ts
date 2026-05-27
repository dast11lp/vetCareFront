import { Specialist } from "./User.type";

export interface AppointmentServiceType {
    id: number,
    name: string,
    description: string,
    durationMinutes: number,
    basePrice: number,
}

export interface Appointment {
    id: number,
    date: string,
    hour: string,
    office: number,
    amount: number,
    procedure: string,
    description: string,
    prescription: string,
    status: string,
    specialist: Specialist,
    serviceType: AppointmentServiceType,
}

export interface hourDate {
    id: number,
    specialist: string,
    hour: string,
}