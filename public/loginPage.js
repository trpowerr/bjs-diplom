"use strict"

const newUser = new UserForm()

newUser.loginFormCallback = data => {
  ApiConnector.login(data, fn => {
    if (fn.success) {
      location.reload()
    } else {
      newUser.setLoginErrorMessage(fn.error)
    }
  })
}

newUser.registerFormCallback = data => {
  ApiConnector.register(data, fn => {
    if (fn.success) {
      location.reload()
    } else {
      newUser.setRegisterErrorMessage(fn.error)
    }
  })
}

