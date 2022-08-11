

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
        <div className={`col-lg-6 col-md-6 col-sm-12 zoom d-flex justify-content-center align-items-center ${(orderLast) ? 'orderLast' : ''}`}
            data-aos={(imgRight) ? 'fade-left' : 'fade-right'}>
            <img className="img-fluid imgResponsive p-3" src={path} alt={id} style={{ height: height, width: width }} />
        </div>
    )

    return (
        <>
            <div className={`d-flex justify-content-center ${bgColor}`}  >
                <div className='contSectionType d-flex justify-content-center'>
                    {
                        (!imgRight) && img
                    }
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center' data-aos={(imgRight) ? 'fade-right' : 'fade-left'}>
                        {
                            (title !== '') && <h1 className='text-center titleColor2'>{title}</h1>
                        }
                        <div className="contText d-flex flex-column">
                            {
                                paragraphList.map(
                                    (item) => (<span key={item.id} className='text-white spanResponsive'> {item.p} </span>)
                                )
                            }
                        </div>
                    </div>
                    {
                        (imgRight) && img
                    }
                </div>
            </div>
        </>
    )
}
