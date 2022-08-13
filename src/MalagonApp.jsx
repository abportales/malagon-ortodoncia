import Aos from 'aos';
import { AppRouter } from './router/AppRouter'
import { Footer, Header, Navbar } from './services/ui/components'

export const MalagonApp = () => {

  Aos.init({
    duration: 1000,
    mirror: false,
    easing: 'ease',
  });

  return (
    <>
      <Header/>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
  )
}
