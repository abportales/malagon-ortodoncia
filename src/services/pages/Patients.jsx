import React from 'react'
import { TopFooter } from '../ui/components/TopFooter'

export const Patients = () => {
    return (
        <>
            <div id="darkBackground">
                <div className="container-fluid w-75" id="containerPatients">
                    <section className='row' id='one'>
                        <div className='col-12 d-flex px-3 pt-2 rounded-top' id='gradient1A'>
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp2'>Ortodoncia</h1>
                                <p className='text-white px-4' id='responsiveText'>
                                    La ortodoncia es una especialidad de la odontología que corrige la mala posición de los huesos y dientes mediante la aplicación de diferentes tipos de fuerzas con aparatos. La ortodoncia está indicada para casos de apiñamiento de dientes o cuando la mala posición de las piezas dentales impide su correcta limpieza, lo que aumenta el riesgo de sufrir enfermedades como la caries o la periodontitis. Por lo tanto, la ortodoncia tiene como objetivo contribuir al bienestar del paciente, mejorando la función y la estética de sus dientes.
                                </p>
                                <p className='text-white px-4' id='responsiveText'>
                                    La ortodoncia es una técnica aplicable tanto en niños como en adultos, aunque la ventaja de la ortodoncia infantil respecto a la ortodoncia en adultos es que permite unos resultados más efectivos porque puede aplicarse durante el desarrollo de las estructuras óseas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='row' id='two'>
                        <div className='col-12 d-flex px-3 pt-2' id='gradient1C'>
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp2'>¿Cómo sé si necesito tratamiento de ortodoncia?</h1>
                                <p className='text-white px-4' id='responsiveText'>
                                    Sólo el Ortodoncista puede determinar si usted necesita un tratamiento de ortodoncia basándose en elementos de diagnóstico, tales como historia clínica y odontológica completa, examen clínico, modelos digitales o en yeso de sus dientes, radiografías, fotografías y cefalometrías. De acuerdo con el diagnóstico realizado, su ortodoncista decidirá si usted necesita un tratamiento de ortodoncia y desarrollará un plan de tratamiento adecuado a sus necesidades.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='row' id='three'>
                        <div className='col-12 d-flex px-3 pt-2' id='gradient1A'>
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp2'>¿Qué son los brackets?</h1>
                                <p className='text-white px-4' id='responsiveText'>
                                    Los brackets son pequeñas piezas cuadrangulares que se colocan en el diente de forma fija durante tu tratamiento, mediante un proceso de adhesión. Cada uno de los brackets está diseñado en función del diente sobre el que se sitúa. Estos van unidos entre sí por un arco metálico. Hoy en día los brackets llevan la información necesaria para que, a través del arco, realicen el movimiento que el ortodoncista planifica. Es decir, el arco es el elemento activo, el que transmite la fuerza para mover los dientes a la posición deseada.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='row' id='four'>
                        <div className='col-12 d-flex px-3 pt-2' id='gradient1C'>
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp2'>¿Qué tipos de brackets existen?</h1>
                                <p className='text-white px-4' id='responsiveText'>
                                    Existen diferentes tipos de brackets en función del material con que se fabrican o de cómo se unen al arco:
                                </p>
                                <ul id='responsiveText'>
                                    <li className='text-white px-4' >El tipo de material va a determinar principalmente su estética. Los brackets metálicos son los más habituales, fabricados en acero y titanio, muy resistentes, generalmente más económicos, pero mucho más visibles. Los brackets estéticos se fabrican en varios materiales: resina o policarbonato, cerámica y zafiro. Cada uno de ellos con sus ventajas e inconvenientes.</li>
                                    <li className='text-white px-4' >A parte del material, podemos diferenciar los tipos de brackets según cómo se unen al arco. En ese sentido podemos hablar de: Brackets convencionales y Brackets autoligables.</li>
                                </ul>

                            </div>
                        </div>
                    </section>

                    <section className='row' id='five'>
                        <div className='col-lg-3 col-md-12 zoom orderLast border border-danger' id='gradient1B'>
                            <img className='img-fluid imgMaxHeight border border-danger d-block my-auto' src="/assets/img/patients/00bracketconvencionales.jpg" alt="align tecnology" />
                        </div>
                        <div className='col-lg-6 col-md-12 d-flex px-3 pt-2' id='gradient1A'>
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp2'>Brackets Convencionales</h1>
                                <p className='text-white px-4' id='responsiveText'>
                                    Los brackets convencionales requieren de un elemento adicional para fijar el arco sobre ellos. Este elemento es conocido como ligadura y puede ser hilo metálico o módulos elastoméricos conocidos comúnmente como ligas o módulos.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 zoom' id='gradient1B'>
                            <img className='img-fluid imgMaxHeight' src="/assets/img/patients/01bracketconvencionales.jpg" alt="align tecnology" />
                        </div>
                    </section>

                    <section className='row' id='six'>
                        <div className='col-lg-8 col-md-12 d-flex px-3 pt-2' id='gradient1A'>
                            <div className='align-self-center' >
                                <h1 className='text-center' id='titleOp2'>Brackets Autoligables</h1>
                                <p className='text-white px-4' id='responsiveText'>
                                    Los brackets autoligables no necesitan un elemento adicional para sujetar el arco, sino que llevan un sistema incorporado en el bracket para hacerlo. Por ello, la principal ventaja de los brackets autoligables frente a los convencionales es que evitamos el uso de las ligas/módulos. Las ligas/módulos van perdiendo fuerza gradualmente y acumulan placa, por lo que hay que cambiarlas en cada visita con el ortodoncista. Esto se traduce en que se puede reducir el número de visitas al ortodoncista, así como disminuir el tiempo de las citas.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 zoom' id='gradient1B'>
                            <img className='img-fluid imgMaxHeight p-3' src="/assets/img/patients/02bracketautoligable.jpg" alt="align tecnology" />
                        </div>
                    </section>

                    <section className='row'>
                        <div className='col-lg-4 col-md-12 zoom orderLast' id='gradient1C'>
                            <img className='img-fluid imgMaxHeight p-3' src="/assets/img/patients/03bracketautoligable.jpg" alt="align tecnology" />
                        </div>
                        <div className='col-lg-8 col-md-12 d-flex px-3 pt-2' id='gradient1D'>
                            <div className='align-self-center' >
                                <p className='text-white px-4' id='responsiveText'>
                                    Otra diferencia es que los brackets autoligables reducen la fricción que se produce entre el bracket y el arco, que facilita determinadas fases del tratamiento.
                                </p>
                                <p className='text-white px-4' id='responsiveText'>
                                    El inconveniente principal de los brackets autoligables frente a los convencionales es el precio. Son brackets con un coste más elevado.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <TopFooter bgColor={'gradient1B'} />
        </>
    )
}
