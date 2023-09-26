import Artworks from "./components/Artworks"
import CreateNFT from "./components/CreateNFT"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ShowNFT from "./components/ShowNFT"
import Transactions from "./components/Transactions"
import Update from "./components/Update"


const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-hero '>
        <Header/>
        <Hero/>
      </div>
      <Artworks/>
      <Transactions/>
      <Footer/>
      <CreateNFT/>
      <ShowNFT/>
      <Update/>
    </div>
  )
}

export default App
