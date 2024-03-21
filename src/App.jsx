
import './App.css'
// import DaisyNav from './Component/DaisyNav/DaisyNav'
import NavBar from './Component/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
import LineCharts from './Component/LineCharts/LineCharts'
import Phones from './Component/Phones/Phones'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-7xl'>Vite</h1> */}
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  )
}

export default App
