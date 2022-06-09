const helloWorld = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

const alien = [{
    hull: [3, 4, 5, 6],
    firepower: [2, 3, 4],
    accuracy: [.6, .7, .8]
}]



function hit(){
    return (Math.random() < alien[0].accuracy),
    console.log('You have been hit!')     
}

hit()