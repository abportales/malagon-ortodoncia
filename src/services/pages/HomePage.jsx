import { Header, TypeWriter, Carousel, Services, Reviews, Location } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const HomePage = () => {

    return (
        <>
            <div className='container-home'>
                <Header />
                <Carousel />

                <section className='border-top border-3 border-dark mt-3'>
                    <div className="d-flex flex-column align-items-center conTextHome w-75 container-fluid">
                        <h2 className='titleColor1 aling-self-center mt-4 textHome'>
                            <TypeWriter message1={'Malagón Ortodoncia y Estética Dental'} message2={'¡Luce tu mejor sonrisa!'} />
                        </h2>
                        <p className="p-1 text-secondary w-75 textHome">
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

                <Location/>
                <Reviews numberOfReviews={3} bgColor={'bgDark'} />
                <TopFooter bgColor={'bgDark'} />
            </div>
        </>
    )
}
