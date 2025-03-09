// family.js
export class Person {
    constructor(name, birthdate, profession) {
        this.name = name;
        this.birthdate = birthdate;
        this.profession = profession;
        this.parents = []; // Array to store parents
        this.children = []; // Array to store children
    }

    addChild(child) {
        this.children.push(child);
        child.parents.push(this); // Add this person as a parent to the child
    }

    getDescendants() {
        let descendants = [];

        const findDescendants = (person) => {
            for (let child of person.children) {
                descendants.push(child);
                findDescendants(child); // Recursively find descendants
            }
        };

        if (this.children.length === 0) {
            return "No children";
        } else {
            findDescendants(this);
            return descendants;
        }
    }

    // Helper method to display person details
    getDetails() {
        return {
            name: this.name,
            birthdate: this.birthdate,
            profession: this.profession,
        };
    }
}

export class FamilyTree {
    constructor() {
        this.members = [];
    }

    addMember(person) {
        this.members.push(person);
    }
}