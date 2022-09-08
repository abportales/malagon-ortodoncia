import { Helmet } from "react-helmet";
import { SectionType1, SectionType2 } from "../components/generics";
import { aobrackets, aobrackets2, aobrackets3 } from "../data"
import { scrollToTop } from "../helpers";
import { useFetchImg } from "../hooks/useFetchImg";
import { TopFooter } from "../ui/components";

export const MetalBracketsPage = () => {

  scrollToTop();
  const title='Bracket Convencional';
  const data1 = aobrackets;
  const data2 = aobrackets2;
  const data3 = aobrackets3;

  // const path5 = '/assets/img/aobrackets/05aobrackets.png'
  const { url } = useFetchImg('aobrackets/05aobrackets.png')

  return (
    <>
      <div className="container-aobrackets gradient4A">
        <Helmet>
          <title> {title} </title>
          <meta name='description' content={title}/>
        </Helmet>
        {
          data1.map((section) => (
            <SectionType1 key={section.id} {...section} />
          ))
        }
        <SectionType2 key={data2.id} {...data2} />
        <SectionType1 key={data3.id} {...data3} />
        <img className="img-fluid gradient4A py-3"
          src={url}
          alt="metal brackets" />
      </div>
      <TopFooter bgColor={'gradient4B'} />
    </>
  )
}
