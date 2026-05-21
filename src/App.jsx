import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ClubsPage from './pages/ClubsPage'
import ClubsDePadelPage from './pages/ClubsDePadelPage'
import EventsPage from './pages/EventsPage'
import CalendarPage from './pages/CalendarPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/clubs-de-padel" element={<ClubsDePadelPage />} />
          <Route path="/evenements" element={<EventsPage />} />
          <Route path="/calendrier" element={<CalendarPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
