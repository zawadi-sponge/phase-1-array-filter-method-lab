// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  function findMatching(drivers, name){
    const result = drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase())
    if(result){
            return result}
    return []
}
function fuzzyMatch(drivers,string){
    const resultn = drivers.filter(each => each.startsWith(string))
    if(resultn){return resultn}
    return[]
}
function matchName(drivers, string){
    const resultz = drivers.filter(each => each.name === string)
    if(resultz){return resultz}
    return []
}