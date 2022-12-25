import { useState } from 'react'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import { useEffect } from 'react'
import { Routes , Route , Link } from 'react-router-dom'


function App() {
  const [infos , setInfos] = useState({})  
  useEffect(()=>{
    fetch('./assets/data.json')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      setInfos(()=>{
        return data
      })
    })  
  },[])


  return (
    <div className="App" >
          <Routes>
            <Route path='/' element={<Home/>} Link={Link}></Route>
            <Route path='/destinations' element={<Destination  destinations={infos.destinations}/>}></Route>
            <Route path='/crew' element={<Crew crew={infos.crew}/>} ></Route>
            <Route path='/technology' element={<Technology technology={infos.technology}/>}></Route>
          </Routes>
          {/* <Home></Home>   */}
          {/* <Destination destinations={infos.destinations} ></Destination> */}
          {/* <Crew crew={infos.crew}></Crew> */}
          {/* <Technology technology={infos.technology}></Technology> */}
    </div>
  )
}

export default App
