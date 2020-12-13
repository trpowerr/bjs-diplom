const newUser = new LogoutButton();
newUser.action = f => {
  ApiConnector.logout(f => {
    if(f.success) {
      location.reload()
    }
  })
}

ApiConnector.current(f => {
  if (f.success) {
    ProfileWidget.showProfile(f.data)
  }
})

const newRatesBoard = new RatesBoard();

const getExchangeRates = () => {
  ApiConnector.getStocks(f => {
    if (f.success) {
      newRatesBoard.clearTable()
      newRatesBoard.fillTable(f.data)
    }
  })
}

getExchangeRates()

setInterval(() => {
  getExchangeRates()
},60000)

const newMoneyManager = new MoneyManager()

newMoneyManager.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, f => {
    if(f.success) {
      ProfileWidget.showProfile(f.data)
      newMoneyManager.setMessage(f.success, 'Успех!')
    } else {
      newMoneyManager.setMessage(f.success, f.error)
    }
  })
}

newMoneyManager.conversionMoneyCallback = (data) => {
  ApiConnector.convertMoney(data, f => {
    if(f.success) {
      ProfileWidget.showProfile(f.data)
      newMoneyManager.setMessage(f.success, 'Успех!')
    } else {
      newMoneyManager.setMessage(f.success, f.error)
    }
  })
}

newMoneyManager.sendMoneyCallback = (data) => {
  ApiConnector.transferMoney(data, f => {
    if(f.success) {
      ProfileWidget.showProfile(f.data)
      newMoneyManager.setMessage(f.success, 'Успех!')
    } else {
      newMoneyManager.setMessage(f.success, f.error)
    }
  })
}

const newFavoritesWidget = new FavoritesWidget()

ApiConnector.getFavorites(f => {
  if (f.success) {
    newFavoritesWidget.clearTable()
    newFavoritesWidget.fillTable(f.data)
    newMoneyManager.updateUsersList(f.data)
  }
})

newFavoritesWidget.addUserCallback = (data) => {
  ApiConnector.addUserToFavorites(data, f => {
    if (f.success) {
      newFavoritesWidget.clearTable()
      newFavoritesWidget.fillTable(f.data)
      newMoneyManager.updateUsersList(f.data)
      newFavoritesWidget.setMessage(f.success, 'Успех!')
    } else {
      newFavoritesWidget.setMessage(f.success, f.error)
    }
  })
}

newFavoritesWidget.removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites(data, f => {
    if (f.success) {
      newFavoritesWidget.clearTable()
      newFavoritesWidget.fillTable(f.data)
      newMoneyManager.updateUsersList(f.data)
      newFavoritesWidget.setMessage(f.success, 'Успех!')
    } else {
      newFavoritesWidget.setMessage(f.success, f.error)
    }
  })
}



