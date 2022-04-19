import React from "react";
import { UserContext } from '../components/context'
import Card from '../components/context'


function Login(){
    const ctx = React.useContext(UserContext);
    
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loggedIn, setLoggedIn] = ctx.loginState;
    //checks if a user is logged in currently, this impacts whether users can see the login card or not
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUser) {
            return false;
        } else {
            return true;
        }
    });

    
    return (
      <h1>Login</h1>
    )
  }

export default Login;