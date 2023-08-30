// let count = 5 / 7

// console.log(count)

// let myAge = 22
// let humanDogRatio = 7

// let myDogAge = myAge*humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment(){
//     console.log("the button was clicked")

// }

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLapTimes(){
//     let sumOfLapTimes = lap1+lap2+lap3
//     console.log(sumOfLapTimes)
// }

// totalLapTimes()




// let username = "per"
// let message = "You have three notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let name = "Tulina"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Tulina"
// let greeting = "Welcome "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " 👋"

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
count += 1
countEl.textContent = count
}

function save(){
    console.log(count)
    let savedCount = count + " - "
    saveEl.textContent += savedCount
    countEl.innerText = 0
    count = 0
}