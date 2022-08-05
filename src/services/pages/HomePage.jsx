import { Header, TypeWriter, Carousel, Services, Reviews } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const HomePage = () => {

    return (
        <>
            <Header />
            <Carousel />

            <section className='border-top border-3 border-dark mt-3'>
                <div className="container-fluid w-50 conTextHome">
                    <h2 className='titleColor1 aling-self-center mt-4 pShort'>
                        <TypeWriter message1={'Malagón Ortodoncia y Estética Dental'} message2={'¡Luce tu mejor sonrisa!'} />
                    </h2>
                    <p className="p-1 text-secondary w-75 pShort">
                        Contamos con especialistas en las áreas de Ortodoncia, Prótesis e Implantología, Endodoncia, Odontopediatría, Cirugía Oral y Maxilofacial.
                    </p>
                </div>
            </section>

            <Services />
     
            <section className='container-fluid conVideo my-3' >
                <iframe className='d-flex' src="https://www.youtube.com/embed/z-qvHluNMtk"
                    title="Made for Freedom. Made for You. Invisalign"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </section>


            <section className=''>
                <div className='maps m-3 border rounded-5 border-primary border-3 d-flex flex-row p-4 conMap' style={{maxHeight: '480px'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.90672556341!2d-100.97845234932201!3d22.129531754592197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa363a721e6bf%3A0xf43c857f9b779301!2sMalag%C3%B3n%20Ortodoncia%20y%20Est%C3%A9tica%20Dental!5e0!3m2!1ses-419!2smx!4v1659632015811!5m2!1ses-419!2smx"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        // data-aos="fade-right"
                        className='col-lg-7 offset-lg-1 col-md-6 col-12 text-center'>
                    </iframe>
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-12 mx-md-2"
                        // data-aos="fade-left"
                        >
                        <h2 className="titleColor1 pShort">
                            <strong>Malagón Ortodoncia y Estética Dental</strong>
                        </h2>
                        <h2 className='pShort text-secondary'>Estamos ubicados en:</h2>
                        <p className='pShort text-dark' >Tecnólogos #225, Col. Himno Nacional 1ra Sección, San Luis Potosí, S.L.P.</p>
                    </div>
                </div>
            </section>
            <Reviews numberOfReviews={3} bgColor={'darkBackground'} />
            <TopFooter bgColor={'darkBackground'} />
        </>
    )
}
