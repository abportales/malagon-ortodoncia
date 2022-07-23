
export const Carousel = () => {
    return (
        <>
            <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                        <img src="/assets/HomePage/carousel00.jpg" className="d-block w-100 animate__animated animate__fadeIn" alt="carousel00"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/HomePage/carousel01.jpg" className="d-block w-100 animate__animated animate__fadeIn" alt="carousel01"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/HomePage/carousel02.jpg" className="d-block w-100 animate__animated animate__fadeIn" alt="carousel02"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/HomePage/carousel03.jpg" className="d-block w-100 animate__animated animate__fadeIn" alt="carousel03"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/HomePage/carousel04.jpg" className="d-block w-100 animate__animated animate__fadeIn" alt="carousel04"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/HomePage/carousel05.jpg" className="d-block w-100 animate__animated animate__fadeIn" alt="carousel05"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
