import React from 'react'
import { AppRouter } from './router/AppRouter'
import { HomePage } from './services/pages/HomePage'
import { Footer, Header, Navbar } from './services/ui/components'
import { TopFooter } from './services/ui/components/TopFooter'

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
