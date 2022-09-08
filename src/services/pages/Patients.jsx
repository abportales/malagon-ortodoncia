
import { TopFooter } from '../ui/components'
import { patients } from '../data/patients';
import { GalleryItem } from '../components/patients';
import { Helmet } from 'react-helmet';

export const Patients = () => {

  const data = patients;
  const title = 'Pacientes Malagón Ortodoncia';

  return (
    <>
      <Helmet>
        <title> {title} </title>
        <meta name='description' content={title}/>
      </Helmet>
      <div className='container-gallery bgDark py-4'>
        <div className='d-flex items'>
          {
            data.map((item) => (
              <GalleryItem key={item.id} {...item} />
            ))
          }
        </div>
      </div>
      <TopFooter bgColor={'bgDark'} />
    </>
  )
}
