
import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import Home from './Components/Home'
import Myfooter from './Components/Myfooter'
import Navbar from './Components/Navbar'
import Newsletter from './Components/Newsletter'
import Products from './Components/Products'
import Service from './Components/Service'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <Myfooter />
    </>
  )
}

export default App
