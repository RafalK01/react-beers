import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom"
import AllBeers from './components/pages/AllBeers';
import RandomBeer from './components/pages/RandomBeer'
import NewBeer from './components/pages/NewBeer'
import SingleBeer from './components/pages/SingleBeer';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/beers" element={<AllBeers />} />
            <Route path='/random-beer' element={<RandomBeer />} />
            <Route path='/new-beer' element={<NewBeer />}/>
            <Route path="/beers/:beerId" element={<SingleBeer />} />

        </Routes>
    </div>
  )
}

export default App
