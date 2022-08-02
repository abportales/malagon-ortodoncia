
import { GalleryItem } from '../components/patients/galleryItem'
import { TopFooter } from '../ui/components/TopFooter'

export const Patients = () => {

  const names = ['000', '001', '002', '003', '004', '005']
  const names2 = ['006', '007', '008', '009', '010', '012', '013']
  // https://www.youtube.com/watch?v=6qko7Nbe8YA&ab_channel=FalconMasters
  return (
    <>
      <section className='patients bgDark'>
        <div className="container-patients">

          <div className="banner">
            <GalleryItem key={'banner'} imageName={'banner'} />
          </div>

          <div className='gallery'>
            {
              names.map((image) => (
                <GalleryItem key={image} imageName={image} />
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
