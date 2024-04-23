import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Menu } from './components/Menu/Menu'
import { Program } from './components/Program/Program'
import { Home } from './components/Home/Home'
import { AboutSSM } from './components/AboutSSM/AboutSSM'
import { AboutReEvents } from './components/AboutReEvents/AboutReEvents'
import { AboutSNEC } from './components/AboutSNEC/AboutSNEC'
import { Contact } from './components/Contact/Contact'
import { WhyExhibit } from './components/WhyExhibit/WhyExhibit'
import { ExhibitorProfile } from './components/ExhibitorProfile/ExhibitorProfile'
import { ExhibitorServices } from './components/ExhibitorServices/ExhibitorServices'
import { Toolkit } from './components/Toolkit/Toolkit'
import { Rates } from './components/Rates/Rates'
import { WhyVisit } from './components/WhyVisit/WhyVisit'
import { VisitorProfile } from './components/VisitorProfile/VisitorProfile'
import { GallgeryPage } from './components/Gallery/GalleryPage'
import { EnergyNight } from './components/EnergyNight/EnergyNight'
import { Videos } from './components/Videos/Videos'
import ScrollToTop from './components/ScrollToTop'
import { Footer } from './components/Footer/Footer'
import { trackPageView } from './google-analytics'
import { Hotels } from './components/Hotels/Hotels'
import { AcademicProgram } from './components/AcademicProgram/AcademicProgram'

function RouteWithHelmet({ element }) {
  return <>{element}</>
}

function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location)
  }, [location])

  return (
    <>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route
          path='/'
          element={<RouteWithHelmet title='Home' element={<Home />} />}
        />
        <Route
          path='about-ssm'
          element={<RouteWithHelmet title='About SSM' element={<AboutSSM />} />}
        />
        <Route
          path='about-re-events'
          element={
            <RouteWithHelmet
              title='About Re+Events'
              element={<AboutReEvents />}
            />
          }
        />
        <Route
          path='about-snec'
          element={
            <RouteWithHelmet title='About SNEC' element={<AboutSNEC />} />
          }
        />
        <Route
          path='contact'
          element={<RouteWithHelmet title='contact' element={<Contact />} />}
        />
        <Route
          path='why-exhibit'
          element={
            <RouteWithHelmet title='About Re+Events' element={<WhyExhibit />} />
          }
        />
        <Route
          path='exhibitor-profile'
          element={
            <RouteWithHelmet
              title='Exhibitor Profile'
              element={<ExhibitorProfile />}
            />
          }
        />
        <Route
          path='exhibitor-services'
          element={
            <RouteWithHelmet
              title='Exhibitor Services'
              element={<ExhibitorServices />}
            />
          }
        />
        <Route
          path='rates'
          element={<RouteWithHelmet title='Rates' element={<Rates />} />}
        />
        <Route
          path='toolkit'
          element={<RouteWithHelmet title='Toolkit' element={<Toolkit />} />}
        />
        <Route
          path='conference-program'
          element={
            <RouteWithHelmet title='Conference Program' element={<Program />} />
          }
        />
        <Route
          path='why-visit'
          element={<RouteWithHelmet title='Why visit' element={<WhyVisit />} />}
        />
        <Route
          path='visitor-profile'
          element={
            <RouteWithHelmet
              title='Visitor Profile'
              element={<VisitorProfile />}
            />
          }
        />
        <Route
          path='gallery'
          element={
            <RouteWithHelmet title='Gallery' element={<GallgeryPage />} />
          }
        />
        <Route
          path='energy-night'
          element={
            <RouteWithHelmet title='Energy Night' element={<EnergyNight />} />
          }
        />
        <Route
          path='videos'
          element={<RouteWithHelmet title='Videos' element={<Videos />} />}
        />
        <Route
          path='hotels'
          element={<RouteWithHelmet title='Hotels' element={<Hotels />} />}
        />
        <Route
          path='expo-hall-education'
          element={
            <RouteWithHelmet
              title='ACADEMIC PROGRAM'
              element={<AcademicProgram />}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
