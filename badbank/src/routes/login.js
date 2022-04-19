import React from "react";
import { UserContext } from '../components/context'
import Card from '../components/context'


function Login(){
    const ctx = React.useContext(UserContext);
    
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    //checks if a user is logged in currently, this impacts whether users can see the login card or not
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUserIndex) {
            return false;
        } else {
            return true;
        }
    });

    function handleSubmit() {
        let search = "";
        for (let i=0; i < ctx.users.length; i++) {
            if (ctx.users[i].email === email) {
                if (ctx.users[i].password === password) {
                    search = ctx.users[i]
                    ctx.currentUserIndex = i;
                    console.log(ctx.users[ctx.currentUserIndex])
                    setStatus("");
                    setShow(false);
                } else {
                    setStatus("Incorrect Password");
                    return;
                }
            }
        }
        if (search === "") {
            setStatus("No such username found")
            return;
        }
    }

    function logOut() {
        ctx.currentUserIndex = null;
        setEmail('');
        setPassword('');
        setShow(true);
    }


    
    return (
        <Card
          bgcolor="primary"
          header="Login"
          status={status}
          body={show ? (  
                  <>
                  Email address<br/>
                  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                  Password<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleSubmit}>Login</button>
                  </>
                ):(
                  <>
                  <h5>Welcome {ctx.users[ctx.currentUserIndex].name}</h5>
                  <button type="submit" className="btn btn-light" onClick={logOut}>LogOut</button>
                  </>
                )}
        />
      )
  }

export default Login;