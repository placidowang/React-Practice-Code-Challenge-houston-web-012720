import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => {
            if (props.sushi.eaten === false) {
            props.cash - props.sushi.price >= 0 ?
              props.eatSushi(props.sushi)
            : 
              alert('Not enough cash!')}}}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.eaten ?
            null
          :
            <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi