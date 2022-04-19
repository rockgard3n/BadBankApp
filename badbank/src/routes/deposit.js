import React from 'react';
import { UserContext } from "../components/context";
import Card from "../components/context"

function Deposit(){
    const ctx = React.useContext(UserContext);

    return (
      <h1>Deposit <br/> {JSON.stringify(ctx)} </h1>
       
    )
  }

export default Deposit;