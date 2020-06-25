import React from 'react'

const Doctor = (props) => {
return(
<div>
  <p>Dr.{props.name}</p>
  <p>{props.specialty} </p>
</div>
)
}

export default Doctor
