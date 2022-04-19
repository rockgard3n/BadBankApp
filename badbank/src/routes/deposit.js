import React from 'react';
import { UserContext } from "../components/context";
import Card from "../components/context"

function Deposit(){
    const ctx = React.useContext(UserContext);
    
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState(0);

    //checks if a user is logged in currently, this impacts whether users can see the login card or not
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUserIndex) {
            return false;
        } else {
            return true;
        }
    });


    function handleSubmit() {
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

    return (
       <Card
          bgcolor="primary"
          header="Login"
          status={status}
          body={show ? (  
                  <>
                  Deposit<br/>
                  <input type="number" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleSubmit}>Login</button>
                  </>
                ):(
                  <>
                  <h5>Welcome {ctx.users[ctx.currentUserIndex].name}</h5>
                  </>
                )}
        />
      )
  }

export default Deposit;