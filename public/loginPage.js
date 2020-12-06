"use strict"

const newUser = new UserForm()

newUser.loginFormCallback = data => {
  try {
    ApiConnector.login({login: data.login, password: data.password}, fn => console.log(fn))
    //location.reload()
  } catch(e) {
    throw new Error(e)
  }
  
}

