import Aos from "aos";
import { SectionType1, SectionType2 } from "../components/generics";
import { aobrackets, aobrackets2, aobrackets3 } from "../data"
import { scrollToTop } from "../helpers";
import { TopFooter } from "../ui/components";

export const MetalBracketsPage = () => {
  
  scrollToTop();

  const data1 = aobrackets;
  const data2 = aobrackets2;
  const data3 = aobrackets3;

  Aos.init({
    duration: 1000,
    mirror: true,
    easing: 'ease',
  });

  return (
    <>
      <div className="container-aobrackets gradient4B">
        {
          data1.map((section) => (
            <SectionType1 key={section.id} {...section} />
          ))
        }
        <SectionType2 key={data2.id} {...data2} />
        <SectionType1 key={data3.id} {...data3} />
        <img className="img-fluid gradient4B" src="/assets/img/aobrackets/05aobrackets.png"
          alt="metal brackets" />
      </div>
      <TopFooter bgColor={'gradient4A'} />
    </>
  )
}
