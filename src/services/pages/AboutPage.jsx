import { Helmet } from 'react-helmet';
import { SectionType1 } from '../components/generics/SectionType1';
import { Reviews } from '../components/HomePage'
import { about } from '../data';
import { TopFooter } from '../ui/components/'

export const AboutPage = () => {

  const data = about;
  const title = '¿Quién es Malagón Ortodoncia?'
  return (
    <>

      <div className="container-about bgDark">
        <Helmet>
          <title> { title } </title>
          <meta name='description' content={title}/>
        </Helmet>
        {
          data.map((section) => (
            <SectionType1 key={section.id} {...section} />
          ))
        }
      </div>

      <Reviews bgColor={'bgDark'} />
      <TopFooter bgColor={'bgDark'} />
    </>
  )
}