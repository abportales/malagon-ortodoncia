import Aos from "aos";

export const SectionType1 = ({
    id,
    imgRight,
    orderLast,
    bgColor,
    title,
    paragraphList,
    path,
    width,
    height,
}) => {

    const img = (
        <div className={`col-lg-6 col-md-6 col-sm-12 zoom ${(orderLast) ? 'orderLast' : ''}` }
            data-aos={(imgRight) ? 'fade-left' : 'fade-right'}>
            <img className="img-fluid imgResponsive" src={path} alt={id} style={{ maxHeight: height, maxWidth: width }} />
        </div>
    )

    Aos.init({
        duration: 1000,
        mirror: true,
        easing: 'ease',
    });

    return (
        <>
            <div className={`d-flex justify-content-center ${bgColor}`}  >
                <div className='contSectionType d-flex justify-content-center'>
                    {
                        (!imgRight) &&  img
                    }
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center' data-aos={(imgRight) ? 'fade-right' : 'fade-left'}>
                        <h1 className='text-center titleColor2'>{ title }</h1>
                        {
                            paragraphList.map(
                                (item) => (<span key={item.id} className='text-center text-white pShort' > {item.p} </span>)
                            )
                        }
                    </div>
                    {
                        (imgRight) && img
                    }
                </div>
            </div>
        </>
    )
}
