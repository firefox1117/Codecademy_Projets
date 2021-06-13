JavaScript
const randomNumber = num => {
    return math.floor(Math.random() * num)
}

const greetings = {
    choice: ["One", 'Two', 'Three'],
    body: ['move three', 'move one', 'move six'],
    result: ["win", 'lose', 'tie']
}

let store = [];

for (let select in greetings) {
    let randIndex = randomNumber(greetings[select].length) 

    switch(select) {
        case 'choice':
            store.push(`your choice is ${greetings[select][randIndex]}`)
            break
        case 'body':
            store.push(`You must ${greetings[select][randIndex]}`)
            break
        case 'result':
            store.push(`You ${greetings[select][randIndex]}`)
            break
    }
}

function Welcome(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = store.join('\n')
    console.log(formatted)
  }
  
  Welcome(store);