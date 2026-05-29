import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useParams } from "react-router-dom"

const ServiceInfo = () => {

    const { idService } = useParams<{ idService: string }>();

    const idServiceparseInt: number | null = idService ? Number.parseInt(idService) : null


    const service = useSelector((state: RootState) =>
        state.getServicesSlice.services.find(service => service.id === idServiceparseInt)
    );

    return (
        <div className="services-info">
            <h2 className="service-title">{service?.title}</h2>
            <p className="">{service?.paragraph}</p>
        </div>
    )
}

export default ServiceInfo
