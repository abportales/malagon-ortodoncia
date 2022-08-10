import { SectionType1 } from "../components/generics/SectionType1"
import { itero } from "../data/itero"
import { TopFooter } from "../ui/components/TopFooter"

export const Itero = () => {

    const data = itero;

    return (
        <>
            <div className="container-itero bgDark">
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