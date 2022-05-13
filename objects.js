let person = {
    getName: function () {
        return "Name is: " + this.firstName + " " + this.lastName;
    },
    getInitials: function () {
        if (this.firstName && this.lastName) {
            return this.firstName[0] + this.lastName[0]
        }
    }
}

let funnyGuy = Object.create(person);
funnyGuy.firstName = "David";
funnyGuy.lastName = "Beckham";


console.log(funnyGuy.getName());
console.log(funnyGuy.getInitials());


/*
let colors = {
    header: "blue",
    footer: "gray",
    content: {
        title: "black",
        body: "darkgray",
        signature: "light blue"
    }
};

colors.content.frame = "yellow";

//delete colors.footer;
colors.footer = undefined;
console.log(colors);
*/