import Aos from 'aos';
import { AppRouter } from './router/AppRouter'
import { Footer, Header, Navbar } from './services/ui/components'
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('G-8756GH9ZPN');

export const MalagonApp = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  Aos.init({
    duration: 1000,
    mirror: false,
    easing: 'ease',
  });

  return (
    <>
      <Header />
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  )
}
