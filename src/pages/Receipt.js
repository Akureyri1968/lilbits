import React from 'react'
import styled from "styled-components";
import "@fontsource/playfair-display";
import OrderContext from "./OrderContext";


const Container1 = styled.div`
  margin-top: 100px;
  background: transparent;
  border: 2px black solid;
  color: black;
  width: 600px;
  height: 600px;
`;

const Receipt = () => {
  
  return( 
    
    <Container1>
      <OrderContext.Consumer>
      {(props) => { 
        console.log(props)
        return(

        <div></div>
      )}}
    </OrderContext.Consumer>
    </Container1>
    
  
  );
};

export default Receipt;