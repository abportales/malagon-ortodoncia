
import { GalleryItem } from '../components/patients/galleryItem'
import { GalleryItem2 } from '../components/patients/GalleryItem2';
import { homeImgUrls } from '../data/patientsImgUrls'
import { TopFooter } from '../ui/components/TopFooter'

export const Patients = () => {

  const names = homeImgUrls;
  const names2 = ['006', '007', '008', '009', '010', '012', '013'];
  // https://www.youtube.com/watch?v=6qko7Nbe8YA&ab_channel=FalconMasters
  return (
    <>
      <section className='patients bgDark'>

        <img src="" alt="" width={100} id="myimg" />
        <div className="container-patients">

          <div className="banner">
            <GalleryItem2 key={names[7].id} imageName={names[7].url} />
          </div>

          <div className='gallery'>
            {
              names.map((image) => (
                <GalleryItem2 key={image.id} imageName={image.url} />
              ))
            }
          </div>
        </div>
        <div className="container-patients2">
          <div className='gallery'>
            {
              names2.map((image) => (
                <GalleryItem key={image} imageName={image} />
              ))
            }
          </div>

          <div className="banner">
            <GalleryItem key={'011'} imageName={'011'} />
          </div>
        </div>
      </section>

      <TopFooter bgColor={'darkBackground'} />
    </>
  )
}
