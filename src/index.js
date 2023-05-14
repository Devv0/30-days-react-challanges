import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import smalluigi from './assets/images/smalluigi.png'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { showDate } from './utils/showDate'
import { Main } from './components/main/Main'
import { hexaColor } from './utils/RandomColor'


const App = () => {

  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('')
  const [color, setColor] = useState('')
  const [light, setLight] = useState(true)

  const style = {
    backgroundColor: backgroundColor,
    color: color,
  }
  
  const addOne = () => {
    setCount(count + 1)
  }
  const minusOne = () => {
    setCount(count - 1)
  }
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days of React Challange')
  }
  const changeBackground = () => {
    if (light === true) {
      setBackgroundColor('#00000d') 
      setColor('white') 
      setLight(false)
    }else{
      setBackgroundColor('') 
      setColor('')
      setLight(true)
    }
  }

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Smol',
      lastName: 'Luigi',
    },
    date: showDate(new Date()),
  }

  const techs = ['HTML', 'CSS', 'JavaScript']
  const user = { ...data.author, image: smalluigi }

  const colors = [hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]

  
  return (
    <div className='app' style={style}>
      <Header data={data}/>
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count}
        colors={colors}
      />
      <Footer date={new Date()}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)