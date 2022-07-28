export const ReviewItem = ({
    id,
    picture,
    dataHref,
    cite,
    review,
    publisherHref,
    name,
    date,
}) => {

    const reviewImageUrl = (picture) ? `/assets/img/home/${id}.jpg` : `/assets/img/home/noProfilePic.jpg`;

    return (
        <div className="card col-md-12 col-sm-12 mb-2">
            <div className="row pt-2 mb-2 px-3">
                <div className="foto col-lg-3 col-md-12 col-sm-12 col-12 d-flex align-items-center mb-1" data-aos="fade-right">
                    <img className="picture img-fluid p-1 bg-primary" data-aos="fade-right" src={reviewImageUrl} alt={name} />
                </div>
                <div className="col-lg-9 col-md-12 cols-sm-12 col-12 fb-post fs-6" data-aos="fade-up"
                    data-href={dataHref} data-width="500" data-show-text="true">
                    <div className="card-header bg-primary text-white">
                        Publicado por <a className="text-dark" href={publisherHref} target="_blank"> {name} </a>
                    </div>
                    <div className="card-body border border-primary">
                        <blockquote cite={cite}
                            className="fb-xfbml-parse-ignore">
                            <p>{review}</p> </blockquote>
                    </div>

                    <div className="card-body fs-6 bg-primary text-white rounded-bottom">
                        en&nbsp;
                        <a className="text-dark" href={cite} target="_blank"> {date} </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
