import React from 'react';
import { UserContext } from "../components/context";
import Card from "../components/context"

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <h1>alldata
      <h2>{JSON.stringify(ctx)} </h2>
      </h1>
    )
  }

export default AllData;