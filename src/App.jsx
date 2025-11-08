import './App.css'
import Banner from './components/banner/Banner'
import Main from './components/main/Main'
import Navber from './components/navber/Navber'

function App() {

  return (
    <>
    {/* navber */}
    <Navber></Navber>

    {/* banner */}
    <Banner></Banner>

    {/* mainn */}
    <div className='grid grid-cols-12 w-11/12 mx-auto border-2 mt-24 min-h-20'>
      <Main></Main>
    </div>
    </>
  )
}

export default App
