const newUser = new LogoutButton();
newUser.action = f => {
  ApiConnector.logout(f => {
    if(f.success) {
      location.reload()
    }
  })
}

