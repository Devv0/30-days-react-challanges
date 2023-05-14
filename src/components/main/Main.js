import React from "react";
import { Button } from "../../utils/Button";
import { buttonStyles } from "../../styles/button";
import { TechList } from "./TechList";
import { UserCard } from "../../utils/UserCard";
import { Count } from "../../utils/count";
import { HexaColor } from "../../utils/RandomColor";

export class Main extends React.Component {
    render() {
      const {
        techs,
        user,
        greetPeople,
        handleTime,
        changeBackground,
        count,
        addOne,
        minusOne,
        colors,
      } = this.props
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js</p>
            <ul>
              <TechList techs={techs} />
            </ul>
            <UserCard user={user} />
            <Button text='Greet People' onClick={greetPeople} style={buttonStyles}/>
            <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
            <Button text='Change Background' onClick={changeBackground} style={buttonStyles} />
            <Count count={count} addOne={addOne} minusOne={minusOne} />
            <HexaColor colors={colors} />
          </div>
        </main>
      )
    }
  }

  
