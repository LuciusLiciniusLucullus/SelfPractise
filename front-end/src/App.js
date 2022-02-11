import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Handler from './components/Handler';
import ContextTheme from './components/ContextTheme';
import FunctionTheme from './components/FunctionTheme';
import WeatherAPI from './components/WeatherAPI';
import UseEffectPrac from './components/UseEffectPrac';
import Home from './components/Home';

export const ThemeContext = React.createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  //NAB lesson - array destructuring with ... operator
  const [first, ...others] = [1,2,3,4]

  const handleWidthChange = () =>{
    setWindowWidth(window.innerWidth)
  }

 

  useEffect(() =>{
    window.addEventListener('resize', handleWidthChange)
    return () =>{
      window.removeEventListener('resize', handleWidthChange)
    } 
  }, [])

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return <div>
    <Router>
      <Navbar/>

      <Route path="/home">
          <Home/>
      </Route>

      <Route path="/handler">
        <Handler/>
      </Route>

      <Route path="/weatherAPI">
        <WeatherAPI/>
      </Route>

      <Route path="/useEffectPrac">
        <UseEffectPrac/>
      </Route>

    </Router>

    <div>
      <p>{windowWidth}</p>
    </div>

    <div>
        <p>{first}</p>
        {others.map((nums) =>{
          return(
            <p>{nums}</p>
          )
        })}
    </div>

    

    <ThemeContext.Provider value = {darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ContextTheme/>
      <FunctionTheme/>
    </ThemeContext.Provider>
  </div>
}

export default App;
