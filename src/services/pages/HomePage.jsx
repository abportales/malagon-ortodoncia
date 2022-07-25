import { Header, TypeWriter, Carousel, Services, Reviews } from '../components/HomePage'

export const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <section id="textHome"
                className="w-50 mx-auto mt-1 text-center pt-5">
                <h2 id="title" className="p-3 fs-3 border-top border-3 mb-0 
                    animate__animated animate__fadeInLeft 
                    animate__delay-1s
                    ">
                    En Malagón Ortodoncia y Estética Dental</h2>
                <p className="p-1 fs-5">
                    <span className="text-secondary">Contamos con especialistas en las áreas de Ortodoncia, Prótesis e Implantología, Endodoncia, Odontopediatría, Cirugía Oral y Maxilofacial.</span>
                </p>
            </section>
            <Services/>
            <section id='local' className='border-top border-3'>
                <div className='row my-5 mx-2'>
                    <img id='mapaImg' src="/assets/HomePage/mapa.jpg" className="col-lg-9 col-md-12 col-sm-12 col-12 rounded" alt="ubicación"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" />
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12" id='wrapper'>
                        <h2 className='fs-3 text-primary'><TypeWriter /></h2>
                        <h2 className='fs-3 text-dark'>Estamos ubicados en:</h2>
                        <p className='fs-5 text-secondary ms-3 w-75' >Tecnólogos #223, Himno Nacional 1ra Sección, San Luis Potosí, S.L.P.</p>
                    </div>
                </div>
            </section>
            <Reviews/>
        </>
    )
}
