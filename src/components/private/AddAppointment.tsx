import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../app/store';
import { getListAppointmentsThunk, getListHoursThunk, reserveAppointmentThunk, getServiceTypesThunk, getPetAppointmentsThunk } from '../../api/appointments';
import { useSelector } from 'react-redux';
import { resetAppointmentSlice } from '../../features/appointment/getAppointmentSlice';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { ServiceType } from '../../types/Service';

interface appointmentTime {
    appointmentTime: number;
}

export const AddAppointment = () => {

    const { idPet } = useParams()
    const { handleSubmit, control } = useForm<appointmentTime>();

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const listAppointments = useSelector((state: RootState) => state.getAppointmentsReducer.listAppointments)
    const listHours = useSelector((state: RootState) => state.getAppointmentsReducer.listHours)
    const idUser = useSelector((state: RootState) => state.authReducer.userInfo?.id)
    const serviceTypes = useSelector((state: RootState) => state.getServiceTypesSlice.serviceTypes)
    const petAppointments = useSelector((state: RootState) => state.getPetAppointmentsReducer.myPetAppointments)

    const [appointment] = useState<Dayjs | null>(dayjs());
    const [date, setDate] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState(true)
    const [selectedServiceTypeId, setSelectedServiceTypeId] = useState<number | null>(null)
    const [serviceBlockedMessage, setServiceBlockedMessage] = useState<string | null>(null)

    const shouldDisableDate = (calendarDate: Dayjs) => {
        const formatted = calendarDate.format("D/M/YYYY")
        return !Object.keys(listAppointments).some((appointDate) => appointDate === formatted)
    }

    const handleServiceType = (serviceTypeId: number) => {
        const alreadyBooked = Array.isArray(petAppointments) &&
            petAppointments.some((a) => a.serviceType?.id === serviceTypeId)

        if (alreadyBooked) {
            setServiceBlockedMessage("Esta mascota ya tiene una cita de este servicio agendada.")
            setSelectedServiceTypeId(null)
            setDate("")
            dispatch(resetAppointmentSlice())
            return
        }

        setServiceBlockedMessage(null)
        setSelectedServiceTypeId(serviceTypeId)
        setDate("")
        setIsDisabled(true)
        dispatch(resetAppointmentSlice())
        dispatch(getListAppointmentsThunk({ id: idUser, serviceTypeId }))
    }

    const handleDate = (calendarDate: Dayjs) => {
        if (!selectedServiceTypeId) return
        const myDate: string = calendarDate.toDate().toLocaleDateString();
        setDate(myDate);
        dispatch(getListHoursThunk({ date: myDate, id: idUser, serviceTypeId: selectedServiceTypeId }))
    }

    const onSubmit = (data: appointmentTime) => {
        const appointData = {
            idAppoint: data.appointmentTime,
            idUser,
            idPet
        }
        dispatch(reserveAppointmentThunk(appointData))
        navigate('/mascotas', { replace: true })
    }

    useEffect(() => {
        dispatch(resetAppointmentSlice())
        dispatch(getServiceTypesThunk())
        dispatch(getPetAppointmentsThunk(idPet))
    }, [dispatch])

    useEffect(() => {
        if (listHours && listHours.length > 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [listHours])

    const dateCalendarStyles = {
        "& .MuiButtonBase-root": { fontSize: '1.6rem' },
        "& .MuiTypography-root": { fontSize: '1.6rem' },
        "& .MuiPickersYear-yearButton": { fontSize: '1.6rem' },
        "& .css-31ca4x-MuiPickersFadeTransitionGroup-root": { fontSize: '1.6rem' },
    };

    return (
        <div className='add-Appointment'>
            <h2>Agendar cita para</h2>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="service-type-label">Tipo de servicio</InputLabel>
                <Select
                    labelId="service-type-label"
                    label="Tipo de servicio"
                    value={selectedServiceTypeId ?? ""}
                    onChange={(e) => handleServiceType(e.target.value as number)}
                >
                    {serviceTypes.map((service: ServiceType) => (
                        <MenuItem key={service.id} value={service.id}>
                            {service.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {serviceBlockedMessage && (
                <div className="service-blocked">
                    <p>{serviceBlockedMessage}</p>
                </div>
            )}

            {selectedServiceTypeId && !serviceBlockedMessage && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar']}>
                        <DateCalendar
                            sx={dateCalendarStyles}
                            value={appointment}
                            onChange={(newValue) => handleDate(newValue)}
                            minDate={dayjs()}
                            shouldDisableDate={shouldDisableDate}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            )}

            {date && (
                <form onSubmit={handleSubmit(onSubmit)} className='select-hour'>
                    <h4>Fecha: {date}</h4>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="hour-label">Hora de la cita</InputLabel>
                        <Controller
                            name='appointmentTime'
                            control={control}
                            defaultValue={listHours && listHours.length > 0 ? listHours[0].id : 0}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    labelId="hour-label"
                                    id="demo-select-small"
                                    label="Hora de la cita"
                                    onChange={(e) => {
                                        setIsDisabled(false);
                                        field.onChange(e);
                                    }}
                                >
                                    {listHours && listHours.map((appoint) => (
                                        <MenuItem key={appoint.id} value={appoint.id}>
                                            {appoint.hour}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                    <input
                        type="submit"
                        value="Enviar"
                        disabled={isDisabled}
                        className={`btn ${isDisabled ? 'btn--disabled' : ""}`}
                    />
                </form>
            )}
        </div>
    )
}