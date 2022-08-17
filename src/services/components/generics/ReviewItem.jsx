import { useFetchImg } from "../../hooks/useFetchImg"

export const ReviewItem = ({
    id,
    path,
    storagePath,
    dataHref,
    cite,
    review,
    publisherHref,
    name,
    date,
}) => {

    const {url} = useFetchImg(storagePath)
    return (
        <div className="card d-flex flex-row p-1 cardReview">
            <img className="content col-lg-3 col-sm-12 profileImgReview roundedImg border border-3 border-primary img-fluid align-self-center me-1"
                data-aos="fade-right" 
                src={url} alt={name} />
            <div className="content col-lg-9 cols-sm-12 fb-post fs-5 pe-1"
                data-aos="fade-up"
                data-href={dataHref} data-width="500" data-show-text="true">

                <div className="card-header bg-primary text-white">
                    Publicado por&nbsp;<a className="text-dark" href={publisherHref} target="_blank"> {name} </a>
                </div>

                <div className="card-body  border border-primary">
                    <blockquote cite={cite}
                        className="fb-xfbml-parse-ignore">
                        <p>{review}</p> 
                    </blockquote>
                </div>

                <div className="card-footer fs-5 bg-primary text-white rounded-bottom">
                    en&nbsp;
                    <a className="text-dark" href={cite} target="_blank"> {date} </a>
                </div>
            </div>
        </div>
    )
}
