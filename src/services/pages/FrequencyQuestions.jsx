
import Aos from 'aos'
import { TopFooter } from '../ui/components/TopFooter'

export const FrequencyQuestions = () => {

    Aos.init({
        duration: 1000,
        mirror: true,
        easing: 'ease',
    })

    return (
        <>
            <div id="darkBackground">
                <div className="container-fluid w-75" id="containerFrecuency">

                    <section className='row'>
                        <div className="row" id='gradient1A'>
                            <div className='col-12 d-flex pt-2 rounded'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='align-self-center' >
                                    <h1 className='text-center titleColor3'>Ortodoncia</h1>
                                    <div className="row d-flex">
                                        <p className='text-white px-4 col-lg-5 offset-lg-1 col-12 pMid' align="justify">
                                            La ortodoncia es una especialidad de la odontología que corrige la mala posición de los huesos y
                                            dientes mediante la aplicación de diferentes tipos de fuerzas con aparatos. La ortodoncia está
                                            indicada para casos de apiñamiento de dientes o cuando la mala posición de las piezas dentales
                                            impide su correcta limpieza, lo que aumenta el riesgo de sufrir enfermedades como la caries o
                                            la periodontitis. Por lo tanto,
                                        </p>
                                        <p className='text-white px-4 col-lg-5 col-12 pMid' align="justify">
                                            la ortodoncia tiene como objetivo contribuir al bienestar del paciente, mejorando la función y la estética de sus dientes.
                                            <br />
                                            La ortodoncia es una técnica aplicable tanto en niños como en adultos, aunque la ventaja de
                                            la ortodoncia infantil respecto a la ortodoncia en adultos es que permite unos resultados más
                                            efectivos porque puede aplicarse durante el desarrollo de las estructuras óseas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div className='row' id='gradient1C'>
                            <div className='col-12 d-flex pt-2'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='align-self-center' >
                                    <h1 className='text-center titleColor3'>¿Cómo sé si necesito tratamiento de ortodoncia?</h1>
                                    <p className='text-white px-4 col-lg-8 offset-lg-2 pMid' align="justify">
                                        Sólo el Ortodoncista puede determinar si usted necesita un tratamiento de ortodoncia basándose en elementos de diagnóstico, tales como historia clínica y odontológica completa, examen clínico, modelos digitales o en yeso de sus dientes, radiografías, fotografías y cefalometrías. De acuerdo con el diagnóstico realizado, su ortodoncista decidirá si usted necesita un tratamiento de ortodoncia y desarrollará un plan de tratamiento adecuado a sus necesidades.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div className='row' id='gradient1A'>
                            <div className='col-12 d-flex pt-2'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='align-self-center' >
                                    <h1 className='text-center titleColor3'>¿Qué son los brackets?</h1>
                                    <p className='text-white px-4 col-lg-8 offset-lg-2 pMid' align="justify">
                                        Los brackets son pequeñas piezas cuadrangulares que se colocan en el diente de forma fija durante tu tratamiento, mediante un proceso de adhesión. Cada uno de los brackets está diseñado en función del diente sobre el que se sitúa. Estos van unidos entre sí por un arco metálico. Hoy en día los brackets llevan la información necesaria para que, a través del arco, realicen el movimiento que el ortodoncista planifica. Es decir, el arco es el elemento activo, el que transmite la fuerza para mover los dientes a la posición deseada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div className='row' id='gradient1C'>

                            <div className='col-12 d-flex pt-2' id='gradient1C'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='align-self-center' >
                                    <h1 className='text-center titleColor3'>¿Qué tipos de brackets existen?</h1>
                                    <p className='text-white px-4 col-xl-8 offset-xl-2 pMid'>
                                        Existen diferentes tipos de brackets en función del material con que se fabrican o de cómo se unen al arco:
                                    </p>
                                    <ul className='row'>
                                        <li className='text-white px-4 col-xl-4 offset-xl-2 col-12 pLong'
                                            align="justify">El tipo de material va a determinar principalmente su estética. Los brackets metálicos
                                            son los más habituales, fabricados en acero y titanio, muy resistentes, generalmente más económicos,
                                            pero mucho más visibles. Los brackets estéticos se fabrican en varios materiales: resina o
                                            policarbonato, cerámica y zafiro. Cada uno de ellos con sus ventajas e inconvenientes.
                                        </li>
                                        <li className='text-white px-4 col-xl-3 offset-xl-1 col-12 pLong'
                                            align="justify">A parte del material, podemos diferenciar los tipos de brackets según cómo se unen al
                                            arco. En ese sentido podemos hablar de: Brackets convencionales y Brackets autoligables.
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div className='row' id='gradient1A'>
                            <div className='col-lg-3 col-md-12 zoom orderLast d-flex justify-content-center'
                                data-aos="flip-left"
                                data-aos-anchor-placement="top-bottom">
                                <img className='img-fluid imgShort align-self-center'
                                    src="/assets/img/frecuency/00bracketconvencionales.jpg" alt="00bracketconvencionales" />
                            </div>
                            <div className='col-lg-6 col-md-12 d-flex pt-2'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" >
                                <div className='align-self-center' >
                                    <h1 className='text-center titleColor3'>Brackets Convencionales</h1>
                                    <p className='text-white px-4 pMid' align="justify">
                                        Los brackets convencionales requieren de un elemento adicional para fijar el arco sobre ellos.
                                        Este elemento es conocido como ligadura y puede ser hilo metálico o módulos elastoméricos conocidos
                                        comúnmente como ligas o módulos.
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-12 zoom d-flex justify-content-center'
                                data-aos="flip-left"
                                data-aos-anchor-placement="top-bottom">
                                <img className='img-fluid imgShort align-self-center'
                                    src="/assets/img/frecuency/01bracketconvencionales.jpg" alt="01bracketconvencionales" />
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div className='row' id='gradient1C'>
                            <div className='col-lg-8 col-md-12 d-flex pt-2'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='align-self-center' >
                                    <h1 className='text-center titleColor3'>Brackets Autoligables</h1>
                                    <p className='text-white px-4 pMid' align="justify">
                                        Los brackets autoligables no necesitan un elemento adicional para sujetar el arco, sino que llevan un sistema incorporado en el bracket para hacerlo. Por ello, la principal ventaja de los brackets autoligables frente a los convencionales es que evitamos el uso de las ligas/módulos. Las ligas/módulos van perdiendo fuerza gradualmente y acumulan placa, por lo que hay que cambiarlas en cada visita con el ortodoncista. Esto se traduce en que se puede reducir el número de visitas al ortodoncista, así como disminuir el tiempo de las citas.
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12 zoom d-flex justify-content-center'
                                data-aos="flip-left"
                                data-aos-anchor-placement="top-bottom">
                                <img className='img-fluid imgShort align-self-center'
                                    src="/assets/img/frecuency/02bracketautoligable.jpg" alt="02bracketautoligable" />
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div className='row' id='gradient1A'>
                            <div className='col-lg-4 col-md-12 zoom orderLast d-flex justify-content-center'
                                data-aos="flip-left"
                                data-aos-anchor-placement="top-bottom">
                                <img className='img-fluid imgShort align-self-center'
                                    src="/assets/img/frecuency/03bracketautoligable.jpg" alt="03bracketautoligable" />
                            </div>
                            <div className='col-lg-8 col-md-12 d-flex pt-2'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='align-self-center row' >
                                    <p className='text-white px-4 col-lg-10 offset-lg-1 pMid' align="justify">
                                        Otra diferencia es que los brackets autoligables reducen la fricción que se produce entre el bracket y el
                                        arco, que facilita determinadas fases del tratamiento.
                                        <br />
                                        El inconveniente principal de los brackets autoligables frente a los convencionales es el precio. Son
                                        brackets con un coste más elevado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <TopFooter bgColor={'gradient1C'} />
        </>
    )
}
