const create_acaund = document.querySelector(".create_acaund")
const login_acaund = document.querySelector(".login_acaund")

const register_form = document.querySelector(".register-form")
const login_form = document.querySelector(".login-form")

  create_acaund.addEventListener("click",()=>{
      login_form.style.display ="none"
      register_form.style.display ="block"
  })
  login_acaund.addEventListener("click",()=>{
      register_form.style.display ="none"
      login_form.style.display ="block"
  })
