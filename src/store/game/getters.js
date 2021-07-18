export function someGetter (store) {
  return store.gameState
}

export function getAll(store){
  return store.categories
}

export function getQuestion(store){
  return store.currentQuestion
}

export function getResult(store){
  return store.lastResult
}

export function getScore(store){
  return store.score
}

export function getTimer(store){
  return store.currentTimer
}
