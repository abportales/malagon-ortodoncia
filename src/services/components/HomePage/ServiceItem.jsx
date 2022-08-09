import { Link } from "react-router-dom"

export const ServiceItem = ({
    id,
    title,
    info,
    width,
    path,
    nav,
}) => {

    return (
        <>
            <div className="card cardServices col-lg-3 col-12"
                data-aos="flip-left">
                <div className="card-header">
                    <Link to={nav} style={{ textDecoration: 'none' }}>
                        <h3 className="border border-dark rounded-3 card-title titleServicesCard p-2 text-center">{title}</h3>
                    </Link>
                </div>
                <div className="card-body mt-2">
                    <p className="card-text" align="justify">{info}</p>
                    <Link to={nav}>
                        <img className="d-block m-auto" src={path} alt={title}
                            width={width} />
                    </Link>
                </div>
            </div>
        </>
    )
}
