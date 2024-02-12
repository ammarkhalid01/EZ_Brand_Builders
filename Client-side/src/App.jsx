import './Components/PageFourCard/PageFourCard.scss'
import './Components/ProcessCard/ProcessCard.scss'
import './Pages/SignUp/SignUp.scss'
import './Pages/Blog/Blog.scss'
import './Pages/page1/Page1.scss'
import './Components/ServicesCard/ServicesCard.css'
import './Components/Navbar/Navbar.scss'
import './Components/PageSevenCard/PageSevenCard.css'
import './Pages/Services/Services.css'
import './Components/Footer/Footer.scss'
import Router from './Routes/Router'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Router />
      <Footer/>
    </>
  )
}

export default App
