import { servicesHome } from "../../data/servicesHome"
import { ServiceItem } from "./ServiceItem";

export const Services = () => {

    const services = servicesHome;

    return (
        <>
            <div className="container-fluid p-5">
                <div className="d-flex justify-content-center gap-5 p-3 servicesHome" >
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
