import { servicesHome } from "../../data/servicesHome"
import { ServiceItem } from "./ServiceItem";

export const Services = () => {

    const services = servicesHome;

    return (
        <>
            <div className="container-fluid">
                <div className="row my-5">
                    <div id="servicesHome" className="row mx-auto w-100 d-flex justify-content-center" >
                        {
                            services.map((service) => (
                                <ServiceItem key={service.id} {...service} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
