import React from "react"

export class TechList extends React.Component {
    render(){
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
  }