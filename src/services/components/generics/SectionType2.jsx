import Aos from "aos";

export const SectionType2 = ({
    id,
    bgColor,
    title,
    paragraphList,
    pathL,
    pathR,
    width,
    height,
}) => {

    Aos.init({
        duration: 1000,
        mirror: true,
        easing: 'ease',
    });
    return (
        <>
            <div className={`d-flex justify-content-center ${bgColor}`}  >
                <div className='contSectionType d-flex justify-content-center'>
                    <div className='col-lg-3 col-md-3 col-sm-12 zoom d-flex justify-content-lg-start justify-content-center align-items-center'
                        data-aos='fade-left'>
                        <img className="img-fluid imgResponsive" src={pathL} alt={id} style={{ height: height, width: width }} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center' 
                        data-aos='fade-up'>
                        <h1 className='text-center titleColor2'>{title}</h1>
                        <div className="contText d-flex flex-column">
                            { 
                                paragraphList.map(
                                    (item) => (<span key={item.id} className='text-white spanResponsive'> {item.p} </span>)
                                )
                            }
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 zoom d-flex justify-content-lg-end justify-content-center align-items-center'
                        data-aos='fade-right'>
                        <img className="img-fluid imgResponsive" src={pathR} alt={id} style={{ height: height, width: width }} />
                    </div>
                </div>
            </div>
        </>
    )
}
