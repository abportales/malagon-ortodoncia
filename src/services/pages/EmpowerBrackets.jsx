import { SectionType1 } from "../components/generics";
import { empower } from "../data/empower"
import { TopFooter } from "../ui/components";

export const EmpowerBrackets = () => {

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
