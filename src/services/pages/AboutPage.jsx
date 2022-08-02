import Aos from 'aos';
import { Reviews } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const AboutPage = () => {

  Aos.init({
    duration: 1000,
    mirror: false,
    easing: 'ease',
  });

  return (
    <>
      <div className="container-fluid w-100" >
        <section className='row' id='gradientLU'>

          <div className='col-lg-6 col-md-12 d-flex px-3 pt-2'
            data-aos="fade-left"
          >
            <div className='container-fluid d-flex flex-column justify-content-center'>
              <h1 className='text-center mt-1 titleColor2'>¿Quienés Somos?</h1>
              <p className='text-center text-white pShort mt-1'>
                Dr. Erick Yair Malagón Rosiles <br />
                Cirujano Dentista por la <br /> Universidad Veracruzana<br />
                Ced. Profesional: 11082237 <br />
              </p>
            </div>
          </div>

          <div className='col-lg-6 col-md-12 zoom container-fluid d-flex justify-content-center'
                data-aos="fade-right">
                <img className='img-fluid imgMaxHeight2' src="/assets/img/aboutus/00aboutus.jpg" alt="align tecnology" />
          </div>
        </section>

        <section className='row' id='gradientLB'>
          <div className='col-lg-6 col-md-12 zoom orderLast d-flex justify-content-md-center mb-5'
            data-aos="fade-left"
          >
            <img className='img-fluid imgMaxHeight2' src="/assets/img/aboutus/01aboutus.jpg" alt="align tecnology" />
          </div>
          <div className='col-lg-6 col-md-12 d-flex px-3 pt-2'
            data-aos="fade-right"
          >
            <div className='container-fluid d-flex flex-column justify-content-center' >
              <p className='text-white ms-4 pShort text-center'>
                <br />
                Especialista en Ortodoncia por la Universidad Latinoamericana <br />
                Ced. Especialidad 12854430 <br />
                Invisalign Top Doctor San Luis Tier Platinum <br />
                Tero Provider
              </p>
            </div>
          </div>
        </section>

      </div>
      <Reviews bgColor={'gradientLU'} />
      <TopFooter bgColor={'gradientLB'} />
    </>
  )
}
