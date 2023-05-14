import React from 'react'
import ReactDOM from 'react-dom'
import smalluigi from './images/smalluigi.png'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0,3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName},
    date,
  },
}) => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {firstName} {lastName}
      </p>
      <small>{showDate(date)}</small>
    </div>
  </header>
)

const TechList = ({techs}) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

const UserCard = ({user: {firstName, lastName, image}}) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>{firstName} {lastName}</h2>
  </div>
)

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = ( {colors} ) => {
  const colorsFormatted = colors.map((color) => 
    <li key={color} style={hexaStyle(color)}>{color}</li>)
  return colorsFormatted
}

const hexaStyle = (color) => {
  const style = {
    backgroundColor: color,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 2,
    borderRadius: 10,
  }
  return style
}

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Main = ({ user, techs, greetPeople, handleTime, colors }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul><TechList techs={techs} /></ul>
      <UserCard user={user}/>
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
      <HexaColor colors={colors} />
    </div> 
  </main>
)

const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Dude',
      lastName: 'Chill',
    },
    date: new Date(),
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  const user = { ...data.author, image: smalluigi }

  const colors = [hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days of React Challange')
  }
  return (
    <div className='app'>
      <Header data={data}/>
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        colors={colors}
      />
      <Footer copyRight={date}/>
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)