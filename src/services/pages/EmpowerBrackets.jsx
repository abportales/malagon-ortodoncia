import { Helmet } from "react-helmet";
import { SectionType1 } from "../components/generics";
import { empower } from "../data"
import { scrollToTop } from "../helpers";
import { TopFooter } from "../ui/components";

export const EmpowerBrackets = () => {

  scrollToTop();

  const data = empower;
  const title = 'Bracket Autoligado'

  return (
    <>
      <div className="container-empower">
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
      <TopFooter bgColor={'gradient0A'} />
    </>
  )
}
