import { AppRouter } from './router/AppRouter'
import { Footer, Header, Navbar } from './services/ui/components'

export const MalagonApp = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
  )
}
