import Aos from "aos";
import { about } from "../../data";

export const SectionType2 = ({
    id,
    bgColor,
    title,
    paragraphList,
    path,
    width,
    height,
}) => {

    Aos.init({
        duration: 1000,
        mirror: false,
        easing: 'ease',
    });

    return (
        <>
            <div className= {`d-flex flex-row ${bgColor}`}  >
                <div className='col-lg-6 col-12 d-flex justify-content-center border'
                    data-aos="fade-left"
                >
                    <div className='d-flex flex-column justify-content-center'>
                        <h1 className='text-center titleColor2'>{ title }</h1>
                        {
                            paragraphList.map(
                                (item) => (<p key={ item.id } className='text-center text-white pShort'> { item.p } </p>)
                            )
                        }
                    </div>
                </div>

                <div className='col-lg-6 col-12 zoom container-fluid d-flex justify-content-center'
                    data-aos="fade-right">
                    <img className='img-fluid' src={path} alt={id} style={{maxHeight:height, maxWidth:width}} />
                </div>
            </div>
        </>
    )
}
