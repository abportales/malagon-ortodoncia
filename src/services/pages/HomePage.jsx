import { Helmet } from 'react-helmet'
import { Video } from '../components/generics'
import { Header, TypeWriter, Carousel, Services, Reviews, Location } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const HomePage = () => {

    const dataVideo = {
        url: 'video/Invisalign.mp4',
        miniCap: 'video/Invisalign.jpg',
    }

    const title = 'Malagón Ortodoncia y Estética Dental'

    return (
        <>
            <div className='container-home'>
                <Helmet>
                    <title> {title}  </title>
                    <meta 
                        name='description' 
                        content='dentista slp, dentista en san luis potosí, dentista san luis potosí, consultorio dental slp, clinica dental' 
                    />
                </Helmet>
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
                <Video url={dataVideo.url} miniCapture={dataVideo.miniCap} />

                < Location />
                <Reviews numberOfReviews={3} bgColor={'bgDark'} />
                <TopFooter bgColor={'bgDark'} />
            </div>


        </>
    )
}
