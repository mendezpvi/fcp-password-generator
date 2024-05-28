const lenghtValue = document.getElementById("length-value")
const lengthRange = document.getElementById("length")

const generateBtn = document.getElementById("generate-btn")
const resetBtn = document.getElementById("reset-btn")

const symbolChk = document.getElementById("symbol")
const numberChk = document.getElementById("number")

const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")

const copyOne = document.getElementById("copy-one")
const copyTwo = document.getElementById("copy-two")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]



lengthRange.addEventListener("input", (e) => {
  lenghtValue.textContent = e.target.value
})

generateBtn.addEventListener("click", () => {
  let newCharacteres = [...characters]
  let hasSymbol = symbolChk.checked
  let hasNumber = numberChk.checked

  if (hasSymbol) {
    newCharacteres.push(...symbols)
    
  } 
  if (hasNumber) {
    newCharacteres.push(...numbers)
    
  }

  let resultOne = []
  let resultTwo = []
  
  for (let i = 0; i < lengthRange.value; i++) {
    let indexRandom1 = Math.floor(Math.random() * (newCharacteres.length))
    let indexRandom2 = Math.floor(Math.random() * (newCharacteres.length))
    resultOne.push(newCharacteres[indexRandom1])
    resultTwo.push(newCharacteres[indexRandom2])
  }

  passwordOne.textContent = resultOne.join("")
  passwordTwo.textContent = resultTwo.join("")

  symbolChk.disabled = true
  lengthRange.disabled = true
  numberChk.disabled = true
  copyOne.disabled = false
  copyTwo.disabled = false
})

resetBtn.addEventListener("click", () => {
  lengthRange.value = 0
  lenghtValue.textContent = lengthRange.value
  passwordOne.textContent = ""
  passwordTwo.textContent = ""
  symbolChk.disabled = false
  numberChk.disabled = false
  lengthRange.disabled = false
  symbolChk.checked = false
  numberChk.checked = false
  copyOne.disabled = true
  copyTwo.disabled = true
})

copyOne.addEventListener("click", () => {
  let passwordOneValue = passwordOne.textContent
  navigator.clipboard.writeText(passwordOneValue)
  copyOne.disabled = true
}) 
copyTwo.addEventListener("click", () => {
  let passwordTwoValue = passwordTwo.textContent
  navigator.clipboard.writeText(passwordTwoValue)
  copyTwo.disabled = true
}) 