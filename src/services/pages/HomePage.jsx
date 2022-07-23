import { Header, TypeWriter, Carousel, Services, Reviews } from '../components/HomePage'

export const HomePage = () => {

    return (
        <>
        {/* TODO:  React scroll animation with react-scroll-motion https://www.youtube.com/watch?v=OAx0we521sk&ab_channel=CandDev*/}
            <Header /> 
            <Carousel />
{/* https://www.youtube.com/watch?v=4Y2SyZ61HFc&ab_channel=AutoDidactDev METER EL FADE EN LOS SERVICIOS Y REDIRRECIONAR A SU PAGINA */}
            <section id="textHome"
                className="w-50 mx-auto mt-1 text-center pt-5">
                <h2 id="title" className="p-3 fs-3 border-top border-3 mb-0 animate__animated animate__fadeInLeft">
                    En Malagón Ortodoncia y Estética Dental</h2>
                <p className="p-1 fs-5">
                    <span className="text-secondary">Contamos con especialistas en las áreas de Ortodoncia, Prótesis e Implantología, Endodoncia, Odontopediatría, Cirugía Oral y Maxilofacial.</span>
                </p>
            </section>

            <Services />

            <section id='local' className='border-top border-3 my-1'>
                <div className='row mb-5'>
                    <img src="/assets/HomePage/mapa.jpg" className="col-lg-9 col-sm-12  d-block m-auto rounded" alt="ubicación" />
                    <div className="wrapper col-lg-3 col-sm-12">
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
