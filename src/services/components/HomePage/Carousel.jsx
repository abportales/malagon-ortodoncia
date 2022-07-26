import { useFetchImg } from "../../hooks/useFetchImg";

export const Carousel = () => {

    const speed = 2500;
    const height = 550;

    const storagePaths = [
        useFetchImg('home/carousel00.jpg').url,
        useFetchImg('home/carousel01.jpg').url,
        useFetchImg('home/carousel02.jpg').url,
        useFetchImg('home/carousel03.jpg').url,
        useFetchImg('home/carousel04.jpg').url,
        useFetchImg('home/carousel05.jpg').url,
    ]

    return (
        <>
            <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner bgDark">
                    <div className="carousel-item active" data-bs-interval={speed}>
                        <img src={storagePaths[0]} 
                            className="d-block w-100 m-auto animate__animated animate__pulse animate__delay-1s imgCarousel" 
                            height={height}
                            alt="carousel00" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src={storagePaths[1]}
                            className="d-block w-40 m-auto animate__animated animate__pulse animate__delay-1s imgCarousel" 
                            height={height}
                            alt="carousel01" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src={storagePaths[2]}
                            className="d-block m-auto w-70 animate__animated animate__pulse animate__delay-1s imgCarousel" 
                            height={height}
                            alt="carousel02" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src={storagePaths[3]}
                            className="d-block m-auto w-40 animate__animated animate__pulse animate__delay-1s imgCarousel"
                            height={height}
                            alt="carousel03" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src={storagePaths[4]}
                            className="d-block m-auto w-40 animate__animated animate__pulse animate__delay-1s imgCarousel"
                            height={height}
                            alt="carousel04" />
                    </div>
                    <div className="carousel-item" data-bs-interval={speed}>
                        <img src={storagePaths[5]}
                            className="d-block m-auto w-40 animate__animated animate__pulse animate__delay-1s imgCarousel" 
                            height={height}
                            alt="carousel05" />
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
