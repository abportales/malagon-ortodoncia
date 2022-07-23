import React from 'react'
import { AppRouter } from './router/AppRouter'
import { HomePage } from './services/pages/HomePage'
import { Footer, Navbar } from './services/ui/components'
import { TopFooter } from './services/ui/components/TopFooter'

export const MalagonApp = () => {
  return (
    <>
      <Navbar/>
      <AppRouter/>
      <TopFooter/>
      <Footer/>
    </>
  )
}
