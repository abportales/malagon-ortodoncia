import { Header, TypeWriter, Carousel, Services, Reviews } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />

            <section id="textHome" className='border-top border-3 border-dark mt-3'>
                <div className="container-fluid w-50">
                    <h2 className='titleColor1 aling-self-center mt-4 pShort'>
                        <TypeWriter message1={'Malagón Ortodoncia y Estética Dental'} message2={'¡Luce tu mejor sonrisa!'} />
                    </h2>
                    <p className="p-1 text-secondary w-75 pShort">
                        Contamos con especialistas en las áreas de Ortodoncia, Prótesis e Implantología, Endodoncia, Odontopediatría, Cirugía Oral y Maxilofacial.
                    </p>
                </div>
            </section>

            <Services />

            <section className='border-top border-dark border-3'>
                <div className='row my-5 mx-2'>
                    <img src="/assets/img/home/mapa.jpg"
                        className="col-lg-9 col-md-12 col-sm-12 col-12 rounded mapaImg"
                        alt="ubicación"
                        data-aos="fade-right" />
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 p-5" id='wrapper'
                        data-aos="fade-left">
                        <h2 className="titleColor1 fs-3 mb-0">
                            <strong>Malagón Ortodoncia y Estética Dental</strong>
                        </h2>
                        <h2 className='fs-3 text-secondary'>Estamos ubicados en:</h2>
                        <p className='fs-5 text-dark w-75' >Tecnólogos #225, Col. Himno Nacional 1ra Sección, San Luis Potosí, S.L.P.</p>
                    </div>
                </div>
            </section>
            <Reviews numberOfReviews={3} bgColor={'darkBackground'} />
            <TopFooter bgColor={'darkBackground'} />
        </>
    )
}
