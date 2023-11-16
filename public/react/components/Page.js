import React from 'react';

export const Page = (props) => {

  return <>
    <h3 onClick={({target: {innerText}}) => console.log("Value: ", innerText)}>{props.page.title}</h3>
  </>
} 
	