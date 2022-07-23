import { servicesHome } from "../../data/servicesHome"
import { ServiceItem } from "./ServiceItem";

export const Services = () => {

    const services = servicesHome;

    return (
        <>
            <div className="container-fluid ">
                <div id="servicesHome" className="row w-75 mx-auto my-1" >
                    {
                        services.map( (service) => (
                            <ServiceItem key={service.id} {...service} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
