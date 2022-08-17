import { servicesHome } from "../../data"
import { ServiceItem } from "../generics";

export const Services = () => {

    const services = servicesHome;

    return (
        <>
            <div className="container-fluid p-5">
                <div className="d-flex justify-content-center align-items-baseline align-items-stretch gap-5 p-3 servicesHome" >
                    {
                        services.map((service) => (
                            <ServiceItem key={service.id} {...service} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
