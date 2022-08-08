import AOS from 'aos'
import { TopFooter } from '../ui/components/TopFooter'
import { invisalign } from '../data/invisalign'
import { SectionType1 } from '../components/generics/SectionType1'

export const InvisalignPage = () => {
  AOS.init({
    duration: 1000,
    mirror: false,
    easing: 'ease',
  }) // values from 0 to 3000, with step 50ms)

  const url = "https://providerbio-latam.invisalign.com/sv/1252996#start"

  const data = invisalign;

  return (
    <>
      <div className="container-invisalign">
        {
          data.map((section) => (
            <SectionType1 key={section.id} {...section} />
          ))
        }

        <div className='d-flex justify-content-center gradient3B'>
          <div className='contSectionType d-flex justify-content-center'>
            <div className='col-lg-6 col-md-6 col-sm-12 zoom orderLast d-flex justify-content-center align-items-center' data-aos="fade-left">
              <img className='img-fluid imgResponsive'
                src="/assets/img/invisalign/00alineadorinvisalign.jpg"
                style={{ maxWidth: '840px', maxHeight: '720px' }}
                alt="00alineadorinvisalign" />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center'
              data-aos='fade-right'>
              <h1 className='text-center titleColor2'>¡Invisalign SmileView simula su nueva sonrisa!</h1>
              <div className='contTextSpecial'>
                <span className='text-white spanResponsive'>
                  Tómate una selfie sonriendo y te mostramos lo que un tratamiento Invisalign puede hacer por ti.&nbsp;
                  <a href={url} className='text-info' target="_blank">
                    Clic aqui.
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopFooter bgColor={'gradient3A'} />

    </>
  )
}


