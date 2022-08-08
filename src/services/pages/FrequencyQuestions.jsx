
import { SectionType1 } from '../components/generics/SectionType1'
import { frequency } from '../data/frequency';
import { TopFooter } from '../ui/components/TopFooter'

export const FrequencyQuestions = () => {

    const data = frequency;

    return (
        <>
             <div className="container-frequency bgDark">
                {
                    data.map((section) => (
                        <SectionType1 key={section.id} {...section} />
                    ))
                }
            </div>
            <TopFooter bgColor={'gradient1A'} />
        </>
    )
}