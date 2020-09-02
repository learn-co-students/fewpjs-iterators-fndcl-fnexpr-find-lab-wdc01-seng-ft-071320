const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record){

  let found = record.find(function(game) {
    return game.result === "W"
  })
  if (found !== undefined){
    return found.year
  }
  else {
    return undefined
  }
}

