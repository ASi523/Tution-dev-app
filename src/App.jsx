import React from 'react'
import './App.css'
import Carousel from './Carousel.jsx'
// import Navbar from './components/Navbar.jsx'
import Nav from './components/Nav.jsx'
import Aboutus from './components/Aboutus.jsx'
import CardSection from './components/Cards.jsx'
import FlatCardSection from './components/Flatecard.jsx'
import FlatCard from './components/Flatecard.jsx'
import Section from './components/Section.jsx'
import MyComponent from './components/Mycomponent.jsx'
import ContactPage from './components/ContactPage.jsx'
import Footer from './components/Footer.jsx'
import MainBox from './components/SubjectsInfo.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
     
        <Nav />
        <Carousel />
        <div>
        <Aboutus />
        <MainBox />
        <FlatCard />
        {/* <CardSection /> */}
       
        
        </div>
      <Section />
      {/* <MyComponent /> */}
      <ContactPage />
      <Footer />
        


        
    </>
  )
}

export default App
