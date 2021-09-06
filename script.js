log = console.log

//Exercise 1

const testNum =(num)=>{
return new Promise((resolve,reject) =>{
  if (num > 10){
    resolve(`The ${num} is greater then 10`)
  }else{
    reject(`The ${num} is lesser then 10`)
  }
})
}

testNum(7)
.then(result => log(result))
.catch(error => log(error))
testNum(11)
.then(result => log(result))
.catch(error => log(error))

//Exercise 2

const makeAllCaps = words =>{
  return new Promise((resolve, reject)=> {
  if(
    words.every(word =>{
      return typeof word === 'string';
    })
  ){
    resolve(sortWords(
      words.map(word => {
        return word.toUpperCase()
    })
    )
    )
  }else{
    reject('not a string');
  }
})
}

const sortWords = words => {
  return new Promise((resolve,reject) =>{
  if(words){
    resolve(words.sort())
  }else{
    reject('strings only')
  }
})
}

  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then(result => log(result))
  .catch(error => log(error))



  makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then(result => log(result))
  .catch(error => log(error))


