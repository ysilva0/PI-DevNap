const fs = require('fs')
const path = require('path')

function getInfoDatabase(filename){
  const filePath = path.join(__dirname, '..', 'database', `${filename}.json`)
  const readFromFile = fs.readFileSync(filePath, 'utf-8')
  const info = JSON.parse(readFromFile)
  
  return info
}

module.exports = getInfoDatabase