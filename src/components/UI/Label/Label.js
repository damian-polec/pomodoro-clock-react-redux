import React from 'react';

const label = (props) => {
  return <label id={props.id}>{props.children}</label>
}

export default label;