import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  // console.log(props.sushis[0])
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} cash={props.cash} />)
        }
        <MoreButton nextSushis={props.nextSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer