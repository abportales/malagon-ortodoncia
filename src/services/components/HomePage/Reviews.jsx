import AOS from 'aos'

export const Reviews = () => {
    AOS.init({ duration: 1000 }) // values from 0 to 3000, with step 50ms)
    const iFrame = `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fale.lomeli.10%2Fposts%2Fpfbid0rJyjuPr63cNekYYNSRFQy3YmS9XfyDbLdX5KMvNL71AHzMsHiaSVSEXgdJe9io9Tl&show_text=true&width=500" width="500" height="186" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
    return (
        <>
            <div className="container w-50">
{/* TODO: VER SI PUEDO METER LOS COMENTARIOS EN CARDS O SINO LAS DE FERHERRERA 
https://www.youtube.com/watch?v=9elukFIYFvQ&ab_channel=Inform%C3%A1ticaDP
SELECCIONAR CUAL DE LOS 2
https://www.youtube.com/watch?v=1_DXtP0XyDw&ab_channel=FaztCode 

HACER LO DEL REPOSITORIO, CREANDO UNO NUEVO O DEJANDO EL MIO
*/}
                <div className="hero">
                    <h1><i className="bi bi-facebook fs-1 mx-1 text-primary"></i> Opiniones </h1>
                </div>
                <div className="evento d-flex">
                    <div className="foto" data-aos="fade-right">
                        <img className="picture" data-aos="fade-right" src="/assets/HomePage/review00.jpg" alt="" width={200} />
                    </div>
                    <div className="fb-post fs-5 ms-4 mt-4" data-aos="fade-up"
                        data-href="https://www.facebook.com/perla.padron.f/posts/pfbid02WvYu5WCN82UCRdioU45Q62uPnpohbtyfsX5nN1MZULLCSd7LgehXR8KMBb5nggJLl" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/perla.padron.f/posts/3341672632724699"
                            className="fb-xfbml-parse-ignore">
                            <p>Excelente servicio, equipo de primera, con todas las medias sanitarias. Excelente ubicación, buen trato y precios accesibles para todos los tratamientos. Ampliamente recomendable. 🙋🏻‍♀️Ortodoncia 😁</p>Publicado por <a href="https://www.facebook.com/perla.padron.f">Perla Frias</a> en&nbsp;<a href="https://www.facebook.com/perla.padron.f/posts/3341672632724699">Martes, 21 de julio de 2020</a></blockquote>
                    </div>
                </div>
                <div className="evento" data-aos="fade-right">
                    <div className="foto">
                        <img className="picture" src="/assets/HomePage/review00.jpg" alt="" width={200} />
                        {/* TODO: https://www.delftstack.com/es/howto/react/react-iframe/ CHECAR LO DEL USO DEL FRAME */}
                        <iFrame/> 
                    </div>
                    <h3 className="fecha">3 de Febrero de 2021</h3>
                </div>
                <div className="evento">
                    <div className="foto" data-aos="fade-right">
                        <img className="picture" src="/assets/HomePage/review00.jpg" alt="" width={200} />
                    </div>
                    <h3 className="fecha">7 de Junio de 2022</h3>
                </div>
                <div className="evento">
                    <div className="foto">
                        <img className="picture" data-aos="fade-up" src="/assets/HomePage/review00.jpg" alt="" width={200} />
                    </div>
                    <h3 className="fecha">18 de Agosto de 2023</h3>
                </div>
                <div className="evento">
                    <div className="foto">
                        <img className="picture" src="/assets/HomePage/review00.jpg" alt="" width={200} />
                    </div>
                    <h3 className="fecha">26 de Noviembre de 2024</h3>
                </div>
            </div>
        </>
    )
}
