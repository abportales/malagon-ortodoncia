import { TopFooter } from '../ui/components/TopFooter'
import AOS from 'aos'

export const InvisalignPage = () => {
  AOS.init({ 
    duration: 1000, 
    mirror: true,
    easing: 'ease',
   }) // values from 0 to 3000, with step 50ms)
   
  const url = "https://providerbio-latam.invisalign.com/sv/1252996#start"

  return (
    <>
      <div className="container-fluid w-100">
        <section className='row' id='gradientRU'>
          <div className='col-lg-6 col-md-12 d-flex px-3 pt-2' data-aos="fade-up-left">
            <div className='border rounded align-self-center' >
              <h1 className='text-center' id='titleOp1'>Alineadores Invisalign®</h1>
              <p className='text-white px-4' id='responsiveText'>
                Invisalign® es una técnica de ortodoncia invisible que permite alinear los dientes y mejorar la sonrisa de los pacientes mediante el uso de alineadores transparentes, fabricados de forma personalizada para que los dientes adopten una posición correcta de manera progresiva. Los alineadores Invisalign®, al no ser un aparato fijo, se pueden retirar para comer y cepillar los dientes, siendo la técnica más higiénica de ortodoncia. Además, como son totalmente transparentes, casi nadie notará que los llevas puestos.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 zoom' data-aos="fade-down-right" style={{maxHeight:'750px'}}>
            <img className='img-fluid imgMaxHeight2' src="/assets/img/invisalign/00alineadorinvisalign.jpg" alt="00alineadorinvisalign" />
          </div>
        </section>

        <section className='row' id='gradientRB'>
          <div className='col-lg-6 col-md-12 zoom orderLast' data-aos="fade-up-left" style={{maxHeight:'800px'}}>
            <img className='img-fluid imgMaxHeight2' src="/assets/img/invisalign/01alineadorinvisalign.jpg" alt="01alineadorinvisalign" />
          </div>
          <div className='col-lg-6 col-md-12 d-flex px-3'>
            <div className=' border rounded align-self-center' data-aos="fade-down-right">
              <h1 className='text-center' id='titleOp1'>¿Como funciona el tratamiento Invisalign®?</h1>
              <p className='text-white fs-2 px-4' id='responsiveText'>
                Los alineadores de Invisalign® mueven los dientes siguiendo una serie de movimientos cuidadosamente controlados y programados. Por tanto, en cada etapa se permite únicamente el movimiento de determinados dientes, siguiendo un plan de tratamiento para dicha etapa en particular.
              </p>
              <p className='text-white fs-2 px-4' id='responsiveText'>
                Cada alineador se lleva puesto durante aproximadamente de 1-2 semanas antes de ser reemplazado por el siguiente. Se recomienda llevar puestos los alineadores durante al menos 22 horas al día.
              </p>
            </div>
          </div>
        </section>

        <section className='row' id='gradientRU'>
          <div className='col-lg-6 col-md-12 d-flex px-3' >
            <div className=' border rounded align-self-center' data-aos="flip-up">
              <h1 className='text-center' id='titleOp1'>¿Cuáles son las ventajas del tratamiento Invisalign®?</h1>
              <p className='text-white px-4' id='responsiveText'>
                Invisalign® es un tratamiento que presenta resultados más rápidos que los tratamientos con aparatos convencionales.
              </p>
              <p className='text-white px-4' id='responsiveText'>
                Es más confortable y discreto que otros alineadores ya que utiliza su tecnología SmartTrack®, SmartForce® y SmartStage®.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 zoom' data-aos="flip-down">
            <img className='img-fluid imgMaxHeight' src="/assets/img/invisalign/02alineadorinvisalign.jpg" alt="02alineadorinvisalign" />
          </div>
        </section>

        <section className='row' id='gradientRB'>
          <div className='col-lg-6 col-md-12 zoom orderLast' data-aos="flip-up">
            <img className='img-fluid imgMaxHeight' src="/assets/img/invisalign/03alineadorinvisalign.jpg" alt="03alineadorinvisalign" style={{ maxHeight: '100rem' }} />
          </div>
          <div className='col-lg-6 col-md-12 d-flex px-3' data-aos="flip-down">
            <div className=' border rounded align-self-center' >
              <h1 className='text-white text-center'></h1>
              <p className='text-white fs-2 px-4' id='responsiveText'>
                Con Invisalign® las consultas son más rápidas y el seguimiento es totalmente personalizado.
              </p>
              <p className='text-white fs-2 px-4' id='responsiveText'>
                Es posible obtener la previsualización de tu nueva sonrisa desde la primera cita gracias a nuestro escáner iTero®.
              </p>
            </div>
          </div>
        </section>

        <section className='row' id='gradientRU'>
          <div className='col-lg-6 col-md-12 d-flex px-3' data-aos="zoom-in">
            <div className=' border rounded align-self-center' >
              <h1 className='text-center' id='titleOp1'>
                ¡Invisalign SmileView simula su nueva sonrisa!
              </h1>
              <p className='text-white px-4' id='responsiveText'>
                Tómate una selfie sonriendo y te mostramos lo que un tratamiento Invisalign puede hacer por ti.&nbsp;
                <a href={url} className='text-info' target="_blank">
                  Clic aqui.
                </a>
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 zoom' data-aos="zoom-in">
            <a href={url} className='text-info' target="_blank">
              <img className='img-fluid imgMaxHeight' src="/assets/img/invisalign/04alineadorinvisalign.jpg" alt="04alineadorinvisalign" />
            </a>
          </div>
        </section>

      </div>

      <TopFooter bgColor={'gradientRB'} />
    </>
  )
}
