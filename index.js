
// returns all drivers that match the passed in name:
// returns matching drivers if case does not match but letters do (if ''   letters match):

// returns an empty array if there is no match:

// function findMatching(array, string){
//   return array.filter(function (el) {
//     if (el = word.length ){
//     } else {
//     return [] 
//     })
// }   


// // * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
// //   as arguments for querying the array, and returns all drivers whose names begin with the provided letters.


function fuzzyMatch(array, query) {
  return array.filter(function(el) {
    return el.indexOf(query) === 0
  })
}


// // `matchName` - This function takes an array of `driver` objects and a `string` as arguments. Each `driver` object has two properties: `name` and `hometown`.
// //The function should return each element whose `name` property matches the
// //provided `string` argument.

function matchName(array, string){
  //name & hometown
  // return element= name(.property) === string
  return array.filter(function (el){
    return el.name === string
  })
}



