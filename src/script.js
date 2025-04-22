class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    render() {
        const uni = "WSU"
        console.log(`Name: ${this.name}, ID: ${this.id}, University: ${uni}`);
    }
}

const s = new Student('Grace Marvin', 12345);
s.render()