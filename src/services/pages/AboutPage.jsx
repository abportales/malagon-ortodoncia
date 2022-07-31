import { Reviews } from '../components/HomePage'
import { TopFooter } from '../ui/components/TopFooter'

export const AboutPage = () => {
  return (
    <>
      <div className="container-fluid w-100">
        <section className='row' id='gradientLU'>
          <div className='col-lg-6 col-md-12 d-flex px-3 pt-2' >
            <div className='align-self-center' >
              <h1 className='text-center' id='titleOp1'>¿Quienés Somos?</h1>
              <p className='text-white px-4' id='responsiveText'>
                <br />
                Dr. Erick Yair Malagón Rosiles <br />
                Cirujano Dentista por la Universidad Veracruzana<br />
                Ced. Profesional: 11082237 <br />
                Especialista en Ortodoncia por la Universidad Latinoamericana Ced. Especialidad 12854430 <br />
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 zoom'>
            <img className='img-fluid imgMaxHeight2' src="/assets/img/aboutus/00aboutus.jpg" alt="align tecnology" />
          </div>
        </section>

        <section className='row' id='gradientLB'>
          <div className='col-lg-6 col-md-12 zoom orderLast'>
            <img className='img-fluid imgMaxHeight2' src="/assets/img/aboutus/01aboutus.jpg" alt="align tecnology" />
          </div>
          <div className='col-lg-6 col-md-12 d-flex px-3 pt-2' >
            <div className='align-self-center' >
              <p className='text-white px-4' id='responsiveText'>
                <br />
                Invisalign Top Doctor San Luis Tier Platinum <br />
                Tero Provider
              </p>
            </div>
          </div>
        </section>
      </div>
      <Reviews />
      <TopFooter bgColor={'gradientLU'} />
    </>
  )
}
