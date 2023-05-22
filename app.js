Array.prototype.reduce2 = function(callback, initialValue) {
    if(initialValue === undefined) {
        initialValue = {};
    }
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(initialValue, this[index], index, this);
            initialValue = result;
        }
    }
    return initialValue;
}

var courses = [
    {
        id: 1,
        name: 'JavaScript',
        price: 1000,
        isFinish: true,
    },
    {
        id: 2,
        name: 'HTML',
        price: 2000,
        isFinish: true,
    },
    {
        id: 3,
        name: 'CSS',
        price: 3000,
        isFinish: true,
    },
    {
        id: 4,
        name: 'Python',
        price: 4000,
        isFinish: false,
    },
    {
        id: 5,
        name: 'C++',
        price: 5000,
        isFinish: false,
    },
    {
        id: 6,
        name: 'Java',
        price: 6000,
        isFinish: false,
    },
    {
        id: 7,
        name: 'C#',
        price: 7000,
        isFinish: false,
    },
];

function coinHandler(accumlator, currentValue, currentIndex, orriginArray) {
    return accumlator + currentValue.price;
}

var totalPrice = courses.reduce2(coinHandler, 0);

console.log(totalPrice);