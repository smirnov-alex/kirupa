// getter setter
//example 1
let zorb = {
    message: "blah",
    get greeting() {
        return this.message;
    },
    set greeting(value) {
        this.message = value;
    }
};

zorb.greeting = "hola!";
console.log(zorb.greeting);

//example 2
var shout = {
    _message: "HELLO!",

    get message() {
        return this._message;
    },

    set message(value) {
        this._message = value.toUpperCase();
    }
};

shout.message = "This is Sparta!!!";
console.log(shout.message)

//example 3

var superSecureTerminal = {
    allUserNames: [],
    _username: "",

    showHistory() {
        console.log(this.allUserNames);
    },

    get username() {
        return this._username;
    },

    set username(name) {
        this._username = name;
        this.allUserNames.push(name);
    }
}

var myTerminal = Object.create(superSecureTerminal);
myTerminal.username = "Michael Gary Scott";
myTerminal.username = "Dwight K. Schrute";
myTerminal.username = "Creed Bratton";
myTerminal.username = "Pam Beasley";
myTerminal.showHistory();