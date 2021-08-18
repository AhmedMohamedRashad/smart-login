var username = localStorage.getItem('userName');
if (username != null) {
    document.getElementById('username').innerHTML = "Welcome " + username;
}
var users;
if(localStorage.getItem('users') == null)
{
    users = [];  
}
else
{
    users = JSON.parse(localStorage.getItem('users'));
}
function signUp(){
    var userName = document.getElementById("signupName");
    var userEmail = document.getElementById("signupEmail");
    var userPassword =  document.getElementById("signupPassword");
    if(userName.value == "" || userEmail.value == "" || userPassword.value == "")
    {
        document.getElementById("exist").innerHTML = "All inputs is required";
    }
    else
    {
        for(var i=0; i < users.length; i++)
        {
            if(users[i].email == userEmail.value)
            {
                document.getElementById("exist").innerHTML = "email already exists";
                return ;
            }
        }
        
        var user={
            name:userName.value,
            email:userEmail.value,
            password:userPassword.value
        };
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';        

    }
}
function login(){
    var userEmail = document.getElementById("signinEmail");
    var userPassword =  document.getElementById("signinPassword");
    if(userEmail.value == "" || userPassword == "")
    {
        document.getElementById("incorrect").innerHTML = "All inputs is required"

    }
    else{
        for(var i = 0; i < users.length; i++ )
        {
            if(users[i].email.toLowerCase() == userEmail.value.toLowerCase() && 
            users[i].password.toLowerCase() == userPassword.value.toLowerCase())
            {
               
                 localStorage.setItem("userName",users[i].name);
                 location.replace("home.html"); 
                
            }
        }
        document.getElementById("incorrect").innerHTML = "incorrect email or password"
    }
    
}