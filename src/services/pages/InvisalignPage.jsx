import React from 'react'

export const InvisalignPage = () => {
  return (
    <div className="container-fluid w-100">
      <section className='row'>
        <div className='col-lg-6 col-md-12 d-flex px-3' id='gradientRB'>
          <div className=' border rounded align-self-center' >
            <h1 className='text-white text-center'>Alineadores Invisalign®</h1>
            <p className='text-white px-4' id='responsiveText'>
              Invisalign® es una técnica de ortodoncia invisible que permite alinear los dientes y mejorar la sonrisa de los pacientes mediante el uso de alineadores transparentes, fabricados de forma personalizada para que los dientes adopten una posición correcta de manera progresiva. Los alineadores Invisalign®, al no ser un aparato fijo, se pueden retirar para comer y cepillar los dientes, siendo la técnica más higiénica de ortodoncia. Además, como son totalmente transparentes, casi nadie notará que los llevas puestos.
            </p>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 zoom' id='gradientLB'>
          <img className='img-fluid' src="/assets/img/invisalign/00alineadorinvisalign.jpg" alt="align tecnology" />
        </div>
      </section>

      <section className='row'>
        <div className='col-lg-6 col-md-12 zoom orderLast' id='gradientRU'>
          <img className='img-fluid' src="/assets/img/invisalign/01alineadorinvisalign.jpg" alt="align tecnology" style={{ maxHeight: '100rem' }} />
        </div>
        <div className='col-lg-6 col-md-12 d-flex px-3' id='gradientLU'>
          <div className=' border rounded align-self-center' >
            <h1 className='text-white text-center'>¿Como funciona el tratamiento Invisalign®?</h1>
            <p className='text-white fs-2 px-4' id='responsiveText'>
              Los alineadores de Invisalign® mueven los dientes siguiendo una serie de movimientos cuidadosamente controlados y programados. Por tanto, en cada etapa se permite únicamente el movimiento de determinados dientes, siguiendo un plan de tratamiento para dicha etapa en particular.
            </p>
            <p className='text-white fs-2 px-4' id='responsiveText'>
              Cada alineador se lleva puesto durante aproximadamente de 1-2 semanas antes de ser reemplazado por el siguiente. Se recomienda llevar puestos los alineadores durante al menos 22 horas al día.
            </p>
          </div>
        </div>
      </section>

      <section className='row'>
        <div className='col-lg-6 col-md-12 d-flex px-3' id='gradientRB'>
          <div className=' border rounded align-self-center' >
            <h1 className='text-white text-center'>¿Cuáles son las ventajas del tratamiento Invisalign®?</h1>
            <p className='text-white px-4' id='responsiveText'>
              Invisalign® es un tratamiento que presenta resultados más rápidos que los tratamientos con aparatos convencionales.
            </p>
            <p className='text-white px-4' id='responsiveText'>
              Es más confortable y discreto que otros alineadores ya que utiliza su tecnología SmartTrack®, SmartForce® y SmartStage®.
            </p>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 zoom' id='gradientLB'>
          <img className='img-fluid' src="/assets/img/invisalign/02alineadorinvisalign.jpg" alt="invisalign" />
        </div>
      </section>

      <section className='row'>
        <div className='col-lg-6 col-md-12 zoom orderLast' id='gradientRU'>
          <img className='img-fluid' src="/assets/img/invisalign/03alineadorinvisalign.jpg" alt="align tecnology" style={{ maxHeight: '100rem' }} />
        </div>
        <div className='col-lg-6 col-md-12 d-flex px-3' id='gradientLU'>
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
    </div>
  )
}
