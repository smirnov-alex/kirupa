class Driver {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    getName() {
        return "#" + this.number + ". " + this.name + "."
    }

    set nationality(country) {
        this._nationality = country;
    }

    get nationality() {
        console.log("Getting country:");
        return this._nationality;
    }

}

let leclerc = new Driver("Charles Leclerc", 16);
leclerc.nationality = "Monaco";
console.log(leclerc.getName())
console.log(leclerc.nationality)

class Champion extends Driver {
    constructor(name, number, titles) {
        super(name, number);
        this.titles = titles;
    }

    getTitles() {
        let numOfTitles;
        if (this.titles == 1) {
            numOfTitles = "He has " + this.titles + " title.";            
        } else {
            numOfTitles = "He has " + this.titles + " titles.";
        }
        return numOfTitles;
    }

    getName() {
        return "#" + this.number + ". " + this.name + ". " + this.getTitles()
    }
}

let max = new Champion("Max Verstappen", 33, 1);
max.nationality = "Netherlands";
let lewis = new Champion("Lewis Hamilton", 44, 7);
lewis.nationality = "Great Britain";
console.log(max.getName())
console.log(lewis.getName())