/*
state = {
    season: '',
}

getSeason = () => {
    let month = new Date().getMonth()
    switch (month){
      case 11:
      case 0:
      case 1:
        this.setState({season: 'winter'})
        break
      case 2:
      case 3:
      case 4:
        this.setState({season: 'spring'})
        break
      case 5:
      case 6:
      case 7:
        this.setState({season: 'summer'})
        break
      case 8:
      case 9:
      case 10:
        this.setState({season: 'autumn'})
        break
      default:
        this.setState({season: ''})
        break
    }
    this.seasonBackground()
  }

  seasonBackground = () => {
    if (this.state.season === 'winter'){
      this.setState({ styles: { backgroundColor: 'grey' } })
    }
  }
*/