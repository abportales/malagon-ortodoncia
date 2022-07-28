
export const Carousel = () => {

    const speed = 2500;

    return (
        <>
            <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={speed}>
                        <img src="/assets/img/home/carousel00.jpg" className="d-block w-100 animate__animated animate__pulse animate__delay-1s" alt="carousel00" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src="/assets/img/home/carousel01.jpg" className="d-block w-100 animate__animated animate__pulse animate__delay-1s" alt="carousel01" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src="/assets/img/home/carousel02.jpg" className="d-block w-100 animate__animated animate__pulse animate__delay-1s" alt="carousel02" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src="/assets/img/home/carousel03.jpg" className="d-block w-100 animate__animated animate__pulse animate__delay-1s" alt="carousel03" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src="/assets/img/home/carousel04.jpg" className="d-block w-100 animate__animated animate__pulse animate__delay-1s" alt="carousel04" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src="/assets/img/home/carousel05.jpg" className="d-block w-100 animate__animated animate__pulse animate__delay-1s" alt="carousel05" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
