import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    showSushis: [],
    sushisEaten: [],
    sushiIndexes: [0,1,2,3],
    cash: 100
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushis => {
        const edibleSushis = sushis.map(sushi => {return ({...sushi, eaten: false})})
        this.setState({
          sushis: edibleSushis,
        }, this.setShowSushis)
      })
  }

  setShowSushis = () => {
    const currentSushis = this.state.sushiIndexes.map(i => this.state.sushis[i])
    // console.log(currentSushis)
    this.setState({
      showSushis: currentSushis
    },
    // ()=>{console.log(this.state.showSushis)}
    )
  }

  nextSushis = () => {
    const nextSushiIndexes = this.state.sushiIndexes.map(i => (i + 4) % 100)
    // console.log(nextSushiIndexes)
    this.setState({
      sushiIndexes: nextSushiIndexes
    }, this.setShowSushis)
  }

  eatSushi = (sushi) => {
    sushi.eaten = true
    this.state.sushisEaten.push(sushi)
    // const sushisEaten = this.state.sushisEaten
    const currentCash = this.state.cash - sushi.price
    this.setState({
      // sushisEaten: sushisEaten,
      cash: currentCash
    },
    // ()=>console.log(this.state.sushisEaten)
    )
  }

  addCash = (event) => {
    event.preventDefault()
    // console.log(event.target)
    const cashToAdd = this.state.cash + parseInt(event.target[0].value)
    this.setState({
      cash: cashToAdd
    })
    event.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.showSushis}
          nextSushis={this.nextSushis}
          eatSushi={this.eatSushi}
          cash={this.state.cash} />
        <Table
          cash={this.state.cash}
          addCash={this.addCash}
          sushisEaten={this.state.sushisEaten}/>
      </div>
    );
  }
}

export default App;