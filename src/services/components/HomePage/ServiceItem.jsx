import { Link } from "react-router-dom"

export const ServiceItem = ({
    id,
    title,
    info,
    width,
    path,
}) => {

    const serviceImageUrl = `/assets/HomePage/${id}.jpg`

    return (
        <>
            <div className="card col-lg-3 col-md-12 col-sm-12 mx-2" id="cardServices" data-aos="flip-left">
                <figure className="figure">
                    <Link to={path}>
                        <img src={serviceImageUrl} id="content" className="d-block m-auto figure-img rounded mt-4" alt={title} width={width} />
                    </Link>
                    <figcaption className="figure-caption">
                        <h3 className="fs-4 mt-4 px-4 pb-1 " id="titleServicesCard">{title}</h3>
                        <p className="fs-6 px-4">{info}</p>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}
