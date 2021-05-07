/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unreachable */
const reconcileOrder = (existingBook, incomingOrder) => {
  
  let newExistingBook = []
  if (existingBook.length === 0 ) {
    newExistingBook.push(incomingOrder)

    return newExistingBook
  }

  for (let i = 0; i < existingBook.length; i++) if (existingBook[i].type === incomingOrder.type) {
    existingBook.push(incomingOrder)

    return existingBook
  }

  // eslint-disable-next-line max-len
  for (let i = 0; i < existingBook.length; i++) if (existingBook[i].type === 'buy' && incomingOrder.type === 'sell')(existingBook.price < incomingOrder.price)
  { existingBook.push(incomingOrder)

    return existingBook
  }

  for (let i = 0; i < existingBook.length; i++) if (existingBook[i].type === 'buy' && incomingOrder.type === 'sell')
  { existingBook.shift(incomingOrder)

    return existingBook
  }

  for (let i = 0; i < existingBook.length; i++) if (existingBook[i].type === 'buy' && incomingOrder.type === 'sell')(existingBook.price > incomingOrder.price)
  { existingBook.push(incomingOrder)

    return existingBook
  }
}

module.exports = reconcileOrder
