import { createAsyncThunk } from "@reduxjs/toolkit"
import { toReserve } from "../types/toReserve.type"

const API_URL = import.meta.env.VITE_API_URL

const getListAppointmentsFetch = async (id: string | undefined, serviceTypeId: number) => {
    if (id) {
        const request = await fetch(`${API_URL}appointment/dates?idUser=${id}&serviceTypeId=${serviceTypeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (!request.ok)
            throw Error(request.status.toString())
        else
            return await request.json()
    }
}

const getListHoursFetch = async (date: string, id: string | undefined, serviceTypeId: number) => {
    const [day, month, year] = date.split("/");
    const monthNumber = parseInt(month, 10);
    const dayNumber = parseInt(day, 10);
    const dateFormated = `${year}-${monthNumber <= 9 ? '0' + month : month}-${dayNumber <= 9 ? '0' + day : day}`
    const request = await fetch(`${API_URL}appointment/hours?idUser=${id}&serviceTypeId=${serviceTypeId}&date=${dateFormated}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

const reserveAppointmentFetch = async (data: toReserve) => {
    const request = await fetch(
        `${API_URL}appointment/request?idPet=${data.idPet}&idAppointment=${data.idAppoint}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

const getPetAppointmentsFetch = async (idPet: string | undefined) => {
    const request = await fetch(`${API_URL}pet/my-appointments/${idPet}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

const getServiceTypesFetch = async () => {
    const request = await fetch(`${API_URL}service-type/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

export const getListAppointmentsThunk = createAsyncThunk(
    'appointment/list',
    async ({ id, serviceTypeId }: { id: string | undefined, serviceTypeId: number }) => {
        return await getListAppointmentsFetch(id, serviceTypeId)
    }
)

export const getListHoursThunk = createAsyncThunk(
    '/appointment/hours',
    async ({ date, id, serviceTypeId }: { date: string, id: string | undefined, serviceTypeId: number }) => {
        return await getListHoursFetch(date, id, serviceTypeId)
    }
)

export const reserveAppointmentThunk = createAsyncThunk(
    'appointment/request',
    async (data: toReserve) => {
        return await reserveAppointmentFetch(data)
    }
)

export const getPetAppointmentsThunk = createAsyncThunk(
    '/pet/my-appointments/',
    async (idPet: string | undefined) => {
        return await getPetAppointmentsFetch(idPet)
    }
)

export const getServiceTypesThunk = createAsyncThunk(
    'serviceType/list',
    async () => {
        return await getServiceTypesFetch()
    }
)