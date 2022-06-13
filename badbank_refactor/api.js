//create our context (keeping state local) 
// globally shared 
const ctx = {
    "accounts": [
        {
            "name": "peter",
            "email": "peter@mit.edu",
            "balance": 0,
            "password": "secret"
        }
    ]
}

//create account support 
function create(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const status = document.getElementById('createStatus');

    ctx.accounts.push({
        name:       name.value,
        email:      email.value,
        password:   password.value,
        balance:    0,
    });

    //update status and clear form 
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML = 'Account Created';
}


//all data support
function allData(){
    console.log("fire");
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}