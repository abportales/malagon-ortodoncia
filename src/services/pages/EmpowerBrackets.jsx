import { SectionType1 } from "../components/generics";
import { empower } from "../data"
import { scrollToTop } from "../helpers";
import { TopFooter } from "../ui/components";

export const EmpowerBrackets = () => {

  scrollToTop();

  const data = empower;

  return (
    <>
      <div className="container-empower">
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
