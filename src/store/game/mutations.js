export function setState(store, state){
  store.gameState = state
}

export function setQuestion(store, q){
  store.currentQuestion = q;
  store.currentTimer.started = false;
}

export function setCategories(store, list){
  store.categories = list
}

export function categoryActive(store, index, value){
  store.categories[index].values.splice(store.categories[index].values.indexOf(value), 1)
}

export function setLastResult(store, res){
  store.lastResult = res
}

export function removeQuestionValue(store, p) {
  let v = store.categories.find(r => r.id === p.catId ).values;
  v.splice(v.indexOf(p.value), 1)
}

export function startQuestion(store){
  if(!store.currentTimer.started){
    store.currentTimer.started = true;
    store.currentTimer.startedTime = Date.now();
  }
}

export function addScore(store, score){
  store.score += score
}
