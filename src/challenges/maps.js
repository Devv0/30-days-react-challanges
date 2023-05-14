import React from 'react'
import ReactDOM from 'react-dom'

const numbers = () => {
    const numbers = []
    for(let i = 0; i < 32; i++){
        numbers.push(i)
    }
    return numbers
}

const Numbers = ( {nums} ) => {
    const numMap = nums.map((num) => <li style={style(num)} key={num}>{num}</li>)
    return numMap
}

const style = (num) => {
  let isPrime = true;
  for (let i = 2; i < num; i++){
    if (num % i === 0){
      isPrime = false
      break;
    }
  }
  if (isPrime === true && num !== 0 && num !== 1){
    return numStyle('red')
  }else if (num % 2 === 0){
    return numStyle('green')
  }else{
    return numStyle('yellow')
  }
}

const numStyle = (color) => {
  const style = {
    backgroundColor: color,
    color: 'white',
    fontSize: 24,
    float: 'left',
    padding: 40,
    margin: 2,
  }
  return style
}

const App = () => {
  const nums = numbers()
    return(
        <div className='container'>
            <h1>30 Days of React</h1>
            <h2>Number Generator</h2>
            <ul>
                <Numbers nums={nums} />
            </ul>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)