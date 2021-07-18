export function setState(store, state){
  store.gameState = state
}

export function setCategories(store, list){
  store.categories = list
}

export function categoryActive(store, index, value){
  store.categories[index].values.splice(store.categories[index].values.indexOf(value), 1)
}
