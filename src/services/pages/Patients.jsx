
import { TopFooter } from '../ui/components'
import { patients } from '../data/patients';
import { GalleryItem } from '../components/patients';

export const Patients = () => {

  const data = patients;

  return (
    <>
      <div className='container-gallery bgDark py-4'>
        <div className='container d-flex items'>
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
