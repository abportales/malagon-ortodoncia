
import { Helmet } from 'react-helmet';
import { SectionType1 } from '../components/generics/SectionType1'
import { frequency } from '../data/frequency';
import { TopFooter } from '../ui/components/TopFooter'

export const FrequencyQuestions = () => {

    const data = frequency;
    const title = 'Preguntas frecuentes Ortodoncia'
    return (
        <>
            <div className="container-frequency bgDark">
                <Helmet>
                    <title> {title} </title>
                    <meta name='description' content={title} />
                </Helmet>
                {
                    data.map((section) => (
                        <SectionType1 key={section.id} {...section} />
                    ))
                }
            </div>
            <TopFooter bgColor={'bgDark'} />
        </>
    )
}