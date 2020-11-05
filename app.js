// Users account
const users = [
    {
        username: "Courtneyc148",
        password: "Craw2020!"
    },

    {
        username: "SarahJ",
        password: "Ohio@201" 
    }
]


let error = document.getElementById("error");

function getInfo() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if (userName === users[i].username && password === users[i].password) {
            error.style.display = ("none");
            document.getElementById("userName").focus();
            window.location.assign('welcome.html');
            return
        }
    }
    error.style.display = ("block");

}