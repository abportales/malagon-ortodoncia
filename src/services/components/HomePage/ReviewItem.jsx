import Aos from "aos";

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

    Aos.init({
        duration: 1000,
        mirror: false,
        easing: 'ease',
        anchorPlacement: 'top-bottom',
    }) // values from 0 to 3000, with step 50ms)
    const reviewImageUrl = (picture) ? `/assets/img/home/${id}.jpg` : `/assets/img/home/noProfilePic.jpg`;

    return (
        <div className="card d-flex flex-row gap-2 cardReview">
            <img className="content col-lg-3 col-sm-12 profileImgReview roundedImg border border-3 border-primary img-fluid align-self-center"
                data-aos="fade-right" 
                src={reviewImageUrl} alt={name} />
            <div className="content col-lg-9 cols-sm-12 fb-post fs-6"
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

                <div className="card-footer fs-6 bg-primary text-white rounded-bottom">
                    en&nbsp;
                    <a className="text-dark" href={cite} target="_blank"> {date} </a>
                </div>
            </div>
        </div>
    )
}
