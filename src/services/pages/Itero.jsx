import { Helmet } from "react-helmet";
import { SectionType1 } from "../components/generics/SectionType1"
import { itero } from "../data/itero"
import { TopFooter } from "../ui/components/TopFooter"

export const Itero = () => {

    const data = itero;
    const title = 'Itero Provider';

    return (
        <>
            <div className="container-itero bgDark">
                <Helmet>
                    <title> {title} </title>
                    <meta name='description' content={title}/>
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