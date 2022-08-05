import { Link } from "react-router-dom"

export const ServiceItem = ({
    id,
    title,
    info,
    width,
    path,
}) => {

    const serviceImageUrl = `/assets/img/home/${id}.jpg`

    return (
        <>
            <div className="card cardServices col-lg-3 col-12"
            data-aos="flip-left">
                <Link to={path}>
                    <img className="d-block m-auto" src={serviceImageUrl} alt={title}
                        width={width} />
                </Link>
                <div className="card-body">
                    <h3 className="card-title titleServicesCard">{title}</h3>
                    <p className="card-text">{info}</p>
                </div>
            </div>
        </>
    )
}
