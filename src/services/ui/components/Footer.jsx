export const Footer = () => {
    return (
        <>
            <footer id="footer" className="w-100 d-flex flex-column">
                <div className="p-2 d-flex justify-content-center">
                    <p className="fs-1 px-3">
                        Siguenos en nuestras redes sociales:
                    </p>
                </div>
                
                <div id="icons" className="p-2 mb-5 d-flex justify-content-center">
                    <a href="https://www.facebook.com/Malag%C3%B3n-Ortodoncia-y-Est%C3%A9tica-Dental-102640908193284" target="_blank">
                        <i className="bi bi-facebook fs-1 mx-3"></i>
                    </a>
                    <a href="https://www.instagram.com/malagon.ortodoncia" target="_blank">
                        <i className="bi bi-instagram fs-1 text-danger mx-3"></i>
                    </a>
                    {/* <a href="#">
                        <i className="bi bi-twitter fs-2 mx-3"></i>
                    </a> */}
                </div>

            </footer>
        </>
    )
}
