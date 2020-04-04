import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    // console.log(array)
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.cash} remaining!
      </h1>



      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushisEaten)
          }
        </div>
      </div>

      <div className='add-cash-form'>
        <form  onSubmit={(e)=>{props.addCash(e)}} >
          <h3>Need more money?? How much do you want??????</h3>
          $<input type='number' />
          <input type='submit' value='Add!' />
        </form>
      </div>
    </Fragment>
  )
}

export default Table