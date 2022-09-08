import { Helmet } from "react-helmet"
import { Header, Location } from "../components/HomePage"
import { useFetchImg } from "../hooks/useFetchImg"
import { TopFooter } from "../ui/components"

export const ContactUs = () => {

    const { url } = useFetchImg('utilities/01contactus.jpg')
    const title = 'Contacta a Malagón Ortodoncia';
    return (
        <>
            <Helmet>
                <title> {title} </title>
                <meta name='description' content={title} />
            </Helmet>
            <Header />
            <div className="container-contactus d-flex flex-column bgDark justify-content-start"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${url})` }}
            >
                <div className='w-25'>
                    <h2 className='text-white mt-5 bgDark p-2 rounded-3 mx-1'>Nos encantaria escuchar cualquier comentario o duda que tengas.</h2>
                    <hr />
                    <form
                        action="https://formsubmit.co/malagon.ortodoncia@gmail.com"
                        target="_blank"
                        className="mx-1"
                        method="POST">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="username"
                            required
                        />
                        <input
                            type="email"
                            className="form-control mt-2"
                            placeholder="E-mail"
                            name="email"
                            required
                        />
                        <textarea
                            type="text"
                            className="form-control mt-2"
                            placeholder="Comentarios y/o dudas."
                            name="comments"
                            required
                        />
                        <hr />
                        <button className="btn btn-primary text-white mt-2 d-block m-auto"
                            style={{ width: '100%' }}>
                            Enviar
                        </button>
                        <hr />
                    </form>
                </div>
            </div>
            <Location />
            <TopFooter bgColor={'bgWhite'} />
        </>
    )
}
