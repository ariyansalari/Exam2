const form=document.getElementById("Form")

const button=document.getElementById("clicks")

const Submit=document.querySelector("#submit")

const phoneNumber=document.getElementById("phoneNumber")

const UserName=document.getElementById("UserName")

const GetElement=document.getElementById("getElement")

const Accept=document.getElementById("accept")

const Wrong=document.getElementById("wrong")

button.addEventListener("click",showform)

function showform(e)
{
e.preventDefault();
button.style.display="none";
form.style.display="flex";
}

Submit.addEventListener("click",singup)

function singup(e)
{

    e.preventDefault();
    form.style.display="none";
    
    if(UserName.value && phoneNumber.value)
    {
        Accept.style.display="block"
    }
    else{
        Wrong.style.display="block"
       
    }

    const users={
        username:UserName.value,
        password:phoneNumber.value

    };
GetElement.innerHTML+=`
<li>YOUR UserName =${" "+UserName.value}</li>
<li> YOUR phoneNumber = ${phoneNumber.value}</li>
`
console.log(users)
}
