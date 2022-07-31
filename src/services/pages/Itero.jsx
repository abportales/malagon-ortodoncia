import Aos from "aos"
import { TopFooter } from "../ui/components/TopFooter"

export const Itero = () => {

    Aos.init({
        duration:1000,
        mirror: true,
        easing: 'ease',
    });

    return (
        <>
            <div id="darkBackground">
                <div className="container-fluid w-75" id="containerItero">

                    <section className='row' id='gradient2A' >
                        <div className='col-lg-4 offset-lg-1 col-md-12 d-flex px-3' data-aos="fade-left">
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp1'>iTero®</h1>
                                <p className='text-white px-4 fs-1' id='responsiveText'>
                                    Conoce la nueva forma de hacer ortodoncia. <br/>La más alta tecnología al servicio de nuestros pacientes.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-12 zoom d-flex' data-aos="fade-right">
                            <img className='img-fluid imgMaxHeight2 align-self-center'
                                src="/assets/img/itero/01itero.jpg" alt="invisalign" />
                        </div>
                    </section>

                    <section className='row' id='gradient2B' >
                        <div className='col-lg-7 col-md-12 zoom d-flex orderLast' data-aos="fade-left">
                            <img className='img-fluid imgMaxHeight2 align-self-center'
                                src="/assets/img/itero/00itero.jpg" alt="invisalign" />
                        </div>
                        <div className='col-lg-4 col-md-12 d-flex px-3' data-aos="fade-right">
                            <div className='align-self-center' >
                                <p className='text-white px-4 fs-2' id='responsiveText' align="justify">
                                    El escáner intraoral iTero® es una herramienta digital más para ofrecer comodidad, eficiencia y agilidad en todos nuestros diagnósticos y planes de tratamiento.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section className='row' id='gradient2A' >
                        <div className='col-lg-4 offset-lg-1 col-md-12 d-flex px-3' data-aos="fade-left">
                            <div className='align-self-center' >
                                <p className='text-white px-4 fs-1' id='responsiveText' align="justify">
                                Desde la primera cita puedes visualizar el antes y después de tu tratamiento.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-12 zoom d-flex orderLast' data-aos="fade-right">
                            <img className='img-fluid imgMaxHeight2 align-self-center' style={{maxHeight:'750px'}}
                                src="/assets/img/itero/iteroVideo.gif" alt="invisalign" />
                        </div>
                    </section>
                </div>

            </div>
            <TopFooter bgColor={'darkBackground'} />
        </>
    )
}
