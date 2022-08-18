import { Map } from "../Mapas/Map"

export const Location = () => {

    return (
        <>


            <div className='maps m-3 border rounded-5 border-primary border-3 d-flex justify-content-center flex-row align-items-center p-4' >
                <div className='googleMap col-lg-7 col-md-6 col-12'
                    data-aos="fade-right">
                    <Map />
                </div>
                <div className="col-lg-3 col-md-6 col-12 mx-md-2"
                    data-aos="fade-left"
                >
                    <h2 className="titleColor1 textHome">
                        <strong>Malagón Ortodoncia y Estética Dental</strong>
                    </h2>
                    <h2 className='textHome text-secondary'>Estamos ubicados en:</h2>
                    <p className='textHome text-dark' >Tecnólogos #225, Col. Himno Nacional 1ra Sección, San Luis Potosí, S.L.P.</p>
                    <hr />
                    <a href="https://goo.gl/maps/mpfXQNUSHHJXcphJ6" target="_blank" rel="noopener noreferrer" className="d-flex flex-column">
                        <span className="align-self-center">Abrir en Google Maps</span>
                    </a>
                </div>
            </div>
        </>
    )
}
