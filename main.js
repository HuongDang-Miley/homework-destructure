// /*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics. 
// EVERY EXERCISE SHOULD USE DESTRUCTURING*/

// //3.  Destructure this object literal so that each value can be called by its key. Re-name the array values for the 'names' key of the ocean object to AT, PA, IN, and AR
const water = {
    lake: {
        description: 'surrounded by land',
        popular: { state: 'Michigan', name: 'Lake Michigan' },
    },
    river: {
        definition: 'flows towards ocean',
        known: { place: 'New York', label: 'Hudson River' },
    },
    ocean: {
        context: 'body of water that composes much of a planet hydrosphere',
        names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    },
};

const {
    lake: {
        description,
        popular: {
            state,
            name
        }
    },
    river: {
        definition,
        known: {
            place,
            label
        }
    },
    ocean: {
        context,
        names: [AT, PA, IN, AR]
    }
} = water


//4.  Using destructuring create a new array that maps through the items array and from each item in the loop, a string of the color and shape values should be logged. for example one loop should return 'blue circle' from the items array. This is not a function. you will just map and use the items array as the only array.
let items = [
    { color: 'blue', shape: 'circle' },
    { color: 'orange', shape: 'triangle' },
    { color: 'red', shape: 'square' },
];

let stringify = items.map(({ color, shape }) => `${color} ${shape}`)
console.log(stringify)


//5.  Deconstruct the complete car object literal
//Find a way to call just one variable name for each of the carTypes
//rename the array values inside the otherShops array to third, fourth, and for the last two values they should be in an array called fifth
const car = {
    carTypes: {
        one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
        two: { make: 'toyota', model: 'Landcruiser', year: 2018, },
    },
    numWheels: 4,
    gps: true,
    autoSteer: true,
    repairPlaces: {
        main: 'Dealership',
        second: 'Roe Park Car Shop',
        otherShops: [
            'Bozo Repair',
            'Johnson Body',
            'Fixer Upper Central',
            'Last Chance Repairs',
        ],
    },
};

const {
    carTypes: {
        one,
        two
    },
    repairPlaces: {
        otherShops: [
            third,
            forth,
            ...fifth
        ]
    }
} = car

console.log(`
${one}
${two}
${third}
${forth}
${fifth}
`
)

/*6.  Create a class Cars that takes make, color, and year
    Instantiate 4 cars, car1,car2, car3, car4
    Using destructuring declare the make, color and year variables for each car and console.log the variables
    OR SHOULD I SAY declare the make, color and year and list a string for each showing their values.*/

class Cars {
    constructor(make, color, year) {
        this.make = make;
        this.color = color;
        this.year = year;
    }
    toString() {
        return `
        Make: ${this.make},
        Color: ${this.color},
        Year: ${this.year}
        ----`
    }
}

const myCars = [
    new Cars('car1', 'blue', '2000'),
    new Cars('car2', 'red', '2010'),
    new Cars('car3', 'green', '2020'),
    new Cars('car4', 'yellow', '1980')
];

let [car1, car2, car3, car4] = myCars

console.log(
    car1.toString(),
    car2.toString(),
    car3.toString(),
    car4.toString())

//7. Using destructuring, choose all the schools with a gpa higher than 3.5,
//and list the chosen object ascending by major and log the average gpa,
//use method chaining if you can

let schoolArray = [
    { school: 'Pataway', major: 'comp sci', year: 'sophomore', gpa: 3.2 },
    { school: 'Bronxville', major: 'medicine', year: 'junior', gpa: 4.0 },
    { school: 'Scarsdale', major: 'accounting', year: 'freshman', gpa: 2.6 },
    { school: 'Peekskill', major: 'liberal arts', year: 'freshman', gpa: 4.0 },
    { school: 'Anopram', major: 'accounting', year: 'senior', gpa: 3.7 },
];


let highGPASchools = schoolArray
    .filter(({ gpa }) => gpa > 3.5)
    .sort((a, b) => a.major > b.major ? 1 : -1)
    .reduce((accumulator, { gpa }, index, arr) => {
        return index === arr.length - 1
            ? accumulator += gpa
            : accumulator / arr.length - 1
    }, 0)

console.log(highGPASchools)