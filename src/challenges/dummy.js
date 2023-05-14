import React from 'react'
import ReactDOM from 'react-dom'
import smalluigi from './assets/images/smalluigi.png'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { showDate } from './utils/showDate'
import { Main } from './components/main/Main'
import { hexaColor } from './utils/RandomColor'
import { MovinMad } from './utils/MovinMad'

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      isLight: true,
      backgroundColor: '',
      color: '',
    },
    dummy: '',
  }
  
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days of React')
  }
  changeBackground = () =>{
    this.state.styles.isLight ? this.setState
    ({ styles: {isLight: false, backgroundColor: '#00000d', color: 'white' } }) : 
    this.setState({ styles: {isLight: true, backgroundColor: '', color: '' } })
  }
  newLocation = () => {
    this.setState({dummy: 'dummy'})
  }

  render() {
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
      <div className='app' style={this.state.styles}>
        <MovinMad newLocation={this.newLocation}/>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
          colors={colors}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)