import { Header, TypeWriter, Carousel, Services, Reviews } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <section id="textHome"
                className="w-50 mx-auto mt-1 text-center pt-5">
                <h2 id='title' className='border-top border-2 border-white'>
                    <TypeWriter message1={'Malagón Ortodoncia y Estética Dental'} message2={'¡Luce tu mejor sonrisa!'} />
                </h2>
                <p className="p-1 fs-4">
                    <span className="text-secondary">Contamos con especialistas en las áreas de Ortodoncia, Prótesis e Implantología, Endodoncia, Odontopediatría, Cirugía Oral y Maxilofacial.</span>
                </p>
            </section>
            <Services />
            <section id='local' className='border-top border-3'>
                <div className='row my-5 mx-2'>
                    <img id='mapaImg' src="/assets/img/home/mapa.jpg" className="col-lg-9 col-md-12 col-sm-12 col-12 rounded" alt="ubicación"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" />
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 p-5" id='wrapper' 
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h2 id="title" className="fs-3 mb-0">
                            En Malagón Ortodoncia y Estética Dental</h2>
                        <h2 className='fs-3 text-secondary'>Estamos ubicados en:</h2>
                        <p className='fs-5 text-dark w-75' >Tecnólogos #225, Col. Himno Nacional 1ra Sección, San Luis Potosí, S.L.P.</p>
                    </div>
                </div>
            </section>
            <Reviews />
            <TopFooter bgColor={'whiteBg'}/>
        </>
    )
}
