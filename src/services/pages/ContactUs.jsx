import { Header, Location } from "../components/HomePage"
import { TopFooter } from "../ui/components"

export const ContactUs = () => {

    return (
        <>
            <Header />
            <div className="container-contactus d-flex flex-column bgDark justify-content-start">
                <div className='w-25'>
                    <h2 className='text-white mt-5 bgDark p-2 rounded-3 mx-1'>Nos encantaria escuchar cualquier comentario o duda que tengas.</h2>
                    <hr />
                    <form action="https://formsubmit.co/malagon.ortodoncia@gmail.com"
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
                        <button onClick={SubmitEvent} className="btn btn-primary text-white mt-2 d-block m-auto"
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
