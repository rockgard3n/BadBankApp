import React from 'react';
import { UserContext } from '../components/context'
import Card from '../components/context'


function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          // setStatus('Error: ' + label);
          // setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    //function that covers logging the new user in context and also giving the appropriate error status if need 
    //note Im giving everyone a free hundred smackers in their balance to get started cus im a good guy
    function handleCreate(){
      console.log(name,email,password);
      var timestamp = Date.now()
      var date = new Date(timestamp);

      var eventDate = date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds();
      console.log(eventDate);

      if (!validate(name,     'name'))  {
          setStatus("Please enter a name");
          return;
      } 
      if (!validate(email,    'email') || !email.includes('@')) {
        setStatus("Please enter a valid email");
        return;
    } ;
      if (!validate(password, 'password') || password.length < 6) {
        setStatus("Please enter a valid 6+ character password");
        return;}
      ctx.users.push({name,email,password,balance:100, history: {action:"Account Creation", amount: 100, eventDate}});
      setStatus("")
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
  }

export default CreateAccount;