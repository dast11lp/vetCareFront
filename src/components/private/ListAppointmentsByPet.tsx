import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../app/store'
import { useParams } from 'react-router-dom'
import { getPetAppointmentsThunk } from '../../api/appointments'

export const ListAppointmentsByPet = () => {

    const { idPet, namePet } = useParams()
    const dispatch = useAppDispatch();
    const petAppointments = useSelector((state: RootState) => state.getPetAppointmentsReducer.myPetAppointments)


    useEffect(() => {
        dispatch(getPetAppointmentsThunk(idPet))
    }, [])

    return (
    <div>
        <h2>Lista de Citas de {namePet}</h2>
        {Array.isArray(petAppointments) && petAppointments.length > 0 ? (
            <div>
                {petAppointments.map((appoint, key) => (
                    <div key={key} className=''>
                        <p><strong>Servicio: </strong>{appoint?.serviceType?.name}</p>
                        <p><strong>Fecha: </strong>{appoint?.date}</p>
                        <p><strong>Hora: </strong>{appoint?.hour}</p>
                        <p><strong>Especialista: </strong>{appoint?.specialist?.firstname}</p>
                        <p><strong>Estado: </strong>{appoint?.status}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>No hay citas agendadas</p>
        )}
    </div>
)
}
