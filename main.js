// Exercise 1 ---------------------

// const nssExperiences = ["Met many new friends", "Commiserated with other imposters", "Got a new lunchbox"]

// nssExperiences.forEach(console.log)

// Exercise 2 ----------------------
// // 1. Write a function that takes two arguments.
// // This function should return the concatenated value of the two arguments.
// const nameFunc = (first,last) => first.concat(last)

// // 2. Call the function with your first name and last name as the two arguments.
// const nameConcat = nameFunc("Deanna", "Vickers")

// // 3. Console log the return value.
// console.log(nameConcat)

// Exercise 3 -------------------------
//1. Create an object to represent a driver.
// The object should have properties to represent the following: //driver's license number, a collection of vehicles they own, and //a collection of dates for when they have gotten a ticket.

// const Driver = Object.create(null, {
//     driversLicenseNumber: {
//         value: "TN83999428",
//         enumerable: true
//     },
//     ownedVehicles: {
//         enumberable:true,
//         value: ["Audi 1000", "Chevy Citation X11", "Plymouth Fury", "Ford LTD"],
//     },
//     ticketsReceived: {
//         enumerable: true,
//         value: ["5/26/1987", "10/9/1991"]
//     },
//     drive: {
//         value: function(action){
//             console.log(`Yes, I will ${action}`)
//         }
//     }
// })

// Driver.drive("accelerate")
// Driver.drive("turn right")

// //2. Iterate over your object and console log the keys and their //values.

// for (const currentKeyOnObject in Driver) {
//     console.log(`${currentKeyOnObject} ${Driver[currentKeyOnObject]}`)
// }

// //directly call the value of the key
// console.log(Driver.driversLicenseNumber)


// Exercise 4 ------------------------
const menu = [
    {
        name: "Frappe McFrapperson",
        price: 6.99,
        category: "beverage",
        size: ["8 oz", "16 oz", "52 oz"]
    },
    {
        name: "Scone",
        price: 6.66,
        category: "pastry",
        size: ["mini", "regular", "large"]
    },
    {
        name: "T-shirt",
        price: 1000.00,
        category: "merchandise",
        size: [
            {
                description: "S",
                material: "Rayon"
            },
            {
                description: "M",
                material: "Cotton"
            },
            {
                description: "L",
                material: "Asbestos"
            }
        ]
    }
]

const printMenu = () => {
    menu.forEach((currentMenuItem, index) => {
        console.log(`${index + 1}. ${currentMenuItem.name} ${currentMenuItem.price}`)

        currentMenuItem.size.forEach(currentSize => {
            console.log(currentSize.description)
        })
    })
}

const Server = Object.create(null, {
    name: {
        value: "Handsome Jake",
        enumerable: true
    },
    employeeID: {
        value: 123432,
        enumerable: true
    },
    ringUpOrder: {
        value: function (item) {
            menu.forEach((menuItem) => {
                if (menuItem.name === item) {
                    console.log("That will be " + menuItem.price)
                }
            })
        }
    },
    deliverOrder: {
        value: function(item){
          console.log(`Here is your order: ${item}! Have a good day!`);
        }
      }
})

const Customer = Object.create(null, {
    name: {
        value: "Thamos",
        enumerable: true
    },
    purchaseItem: {
        value: function (item) {
            console.log(`I would like to purchase ${item}`)
        }
    },
    payForOrder: {
        value: function (paymentMethod) {
            console.log(`I would like to pay using ${paymentMethod}`)
        }
    }
})

Customer.purchaseItem("Frappe McFrapperson")
Server.ringUpOrder("Frappe McFrapperson")
Customer.payForOrder("Cash")
Server.deliverOrder("Frappe McFrapperson")

