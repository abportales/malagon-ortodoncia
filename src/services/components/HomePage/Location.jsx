import Aos from "aos";

export const Location = () => {

    Aos.init({
        duration: 1000,
        mirror: true,
        easing: 'ease',
    });

    return (
        <>
            <div className='maps m-3 border rounded-5 border-primary border-3 d-flex flex-row align-items-center p-4 conMap' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.90672556341!2d-100.97845234932201!3d22.129531754592197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa363a721e6bf%3A0xf43c857f9b779301!2sMalag%C3%B3n%20Ortodoncia%20y%20Est%C3%A9tica%20Dental!5e0!3m2!1ses-419!2smx!4v1659632015811!5m2!1ses-419!2smx"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    data-aos="fade-right"
                    style={{ height: '480px' }}
                    className='col-lg-7 offset-lg-1 col-md-6 col-12 text-center'>
                </iframe>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-12 mx-md-2"
                    data-aos="fade-left"
                >
                    <h2 className="titleColor1 textHome">
                        <strong>Malagón Ortodoncia y Estética Dental</strong>
                    </h2>
                    <h2 className='textHome text-secondary'>Estamos ubicados en:</h2>
                    <p className='textHome text-dark' >Tecnólogos #225, Col. Himno Nacional 1ra Sección, San Luis Potosí, S.L.P.</p>
                </div>
            </div>
        </>
    )
}
