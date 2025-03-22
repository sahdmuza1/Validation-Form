const form = document.getElementById('form')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit',e =>{
    e.preventDefault()

    validateInputs()

})

const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText =''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
 
const validateInputs = () => {
    const fullnameValue =fullname.value
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()



if(fullnameValue === ''){
    setError(fullname,'Full Name is required ')
}else{
 setSuccess(fullname)

}

if(emailValue === ''){
    setError(email, 'Email is required ')
}else{
    setSuccess(email)
}
if(passwordValue === ''){
     setError(password, 'password is required ')
}else if (passwordValue.length < 8){
     setError(password, 'password must be at least  8 characters')
}else{
     setSuccess(password)
}
    

if(password2Value === ''){
    setError(password2, 'password is required ')
}else if (password2Value !== passwordValue){
    setError(password2, "password dosen't match")
}else{ setSuccess(password2)}
   
}