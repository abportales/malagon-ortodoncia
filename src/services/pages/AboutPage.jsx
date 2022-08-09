import { SectionType1 } from '../components/generics/SectionType1';
import { Reviews } from '../components/HomePage'
import { about } from '../data';
import { TopFooter } from '../ui/components/'

export const AboutPage = () => {

  const data = about;

  return (
    <>

      <div className="container-about bgDark">
      {
        data.map( (section) => (
          <SectionType1 key={section.id} {...section}/>
        ))
      }
      </div>
      
      <Reviews bgColor={'bgDark'} />
      <TopFooter bgColor={'bgDark'} />
    </>
  )
}