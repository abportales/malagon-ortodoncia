import { TopFooter } from '../ui/components/TopFooter'
import { invisalign } from '../data'
import { SectionType1, Video } from '../components/generics'
import { scrollToTop } from '../helpers'
import { useFetchImg } from '../hooks/useFetchImg'
import { useEffect } from 'react'

export const InvisalignPage = () => {

  useEffect(() => {
    // scrollToTop();
  }, [])
  

  const extUrl = "https://providerbio-latam.invisalign.com/sv/1252996#start"
  const {url} = useFetchImg('invisalign/00alineadorinvisalign.jpg')
  // const url = "/assets/img/invisalign/00alineadorinvisalign.jpg"
  const data = invisalign;

  const dataVideo = {
    url: 'video/Entrevista.mp4',
    miniCap: 'video/Entrevista.jpg',
}

  return (
    <>
      <div className="container-invisalign gradient3B">
        {
          data.map((section) => (
            <SectionType1 key={section.id} {...section} />
          ))
        }

        <div className='d-flex justify-content-center gradient3B'>
          <div className='contSectionType d-flex justify-content-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 zoom orderLast d-flex justify-content-center align-items-center' data-aos="fade-left">
              <img className='img-fluid imgResponsive p-3'
                src={url}
                style={{ maxWidth: '840px', maxHeight: '720px' }}
                alt="00alineadorinvisalign" />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center'
              data-aos='fade-right'>
              <h1 className='text-center titleColor2'>¡Invisalign SmileView simula su nueva sonrisa!</h1>
              <div className='contTextSpecial'>
                <span className='text-white spanResponsive'>
                  Tómate una selfie sonriendo y te mostramos lo que un tratamiento Invisalign puede hacer por ti.&nbsp;
                  <a href={extUrl} className='text-info' target="_blank">
                    Clic aqui.
                  </a>
                </span>
              </div>
            </div>

          </div>
        </div>
        <div className='d-flex flex-column justify-content-center gradient3A'>
          <h2 className='titleColor2 text-center'> Entrevista de canal 7 sobre Invisalign</h2>
          <Video url={dataVideo.url} miniCapture={dataVideo.miniCap} />
        </div>
      </div>

      <TopFooter bgColor={'gradient3B'} />

    </>
  )
}


