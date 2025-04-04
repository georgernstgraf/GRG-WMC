class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        this.name = name;
        if (gender != 'm' && gender != 'f') {
            throw new Error('wrong gender');
        }
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }
    groesseCM() {
        return this.groesseM * 100;
    }
    vorName() {
        return this.name.split(' ')[0];
    }
    nachName() {
        return this.name.split(' ')[1];
    }
    toString() {
        return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }
    getBmi() {
        return this.gewichtKG / (this.groesseM * this.groesseM);
    }
    getGewichtType() {
        if (this.gender === 'm') {
            if (this.getBmi() < 20) {
                return 'Untergewicht';
            } else if (this.getBmi() > 25) {
                return 'Übergewicht';
            } else {
                return 'Normalgewicht';
            }
        } else {
            if (this.getBmi() < 19) {
                return 'Untergewicht';
            } else if (this.getBmi() > 24) {
                return 'Übergewicht';
            } else {
                return 'Normalgewicht';
            }
        }
    }
}
export { Person };
