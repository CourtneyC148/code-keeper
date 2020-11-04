// Users account
const users = [
    {
        username: "Courtney148",
        password: "Craw2020!"
    },

    {
        username: "SarahJ",
        password: "Ohio@201" 
    }
]

// let userName = document.getElementById("userName").value;
// let password = document.getElementById("password").value;
let submit = document.getElementById("submit");

function getInfo() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if(userName === users[i].username && password === users[i].password) {
            console.log(userName + " is now logged in!");
        }
    }
}

