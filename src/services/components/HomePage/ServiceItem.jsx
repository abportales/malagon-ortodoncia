
export const ServiceItem = ({
    id,
    title,
    info,
    width,
}) => {

    const serviceImageUrl = `/assets/HomePage/${id}.jpg`

    return (
        <>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-2">
                <figure className="figure">
                    <img src={ serviceImageUrl } className="d-block m-auto figure-img rounded" alt={ title } width={ width } />
                    <figcaption className="figure-caption">
                        <h3 className="fs-4 mt-4 px-4 pb-1">{ title }</h3>
                        <p className="fs-6 px-4">{ info }</p>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}
