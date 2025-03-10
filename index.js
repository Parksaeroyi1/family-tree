import { Person, FamilyTree } from './family.js';

// Sample Dataset
const john = new Person("John", '1950-01-01', 'Engineer');
const jane = new Person("Jane", '1955-02-02', 'Doctor');
const mike = new Person("Mike", '1975-03-03', 'Teacher');
const anna = new Person("Anna", '1980-04-04', 'Artist');
const kate = new Person("Kate", '2000-05-05', 'Student');
const tom = new Person("Tom", '2005-06-06', 'Musician');

// Establish relationships
john.addChild(mike);
john.addChild(anna);

jane.addChild(anna);

mike.addChild(kate);
mike.addChild(tom);

// Create family tree
const familyTree = new FamilyTree();
familyTree.addMember(john);
familyTree.addMember(jane);
familyTree.addMember(mike);
familyTree.addMember(anna);
familyTree.addMember(kate);
familyTree.addMember(tom);

// Display descendants of a person with details
function displayDescendants(person) {
    const descendants = person.getDescendants();
    console.log(`--- ${person.name} ---`);
    console.log(`Birthdate: ${person.birthdate}`);
    console.log(`Profession: ${person.profession}`);
    if (descendants === "No children") {
        console.log("Descendants: No children");
    } else {
        console.log("Descendants:");
        descendants.forEach(descendant => {
            console.log(`- ${descendant.name} (${descendant.birthdate}, ${descendant.profession})`);
        });
    }
    console.log("\n"); 
}

// Display descendants for each person
displayDescendants(john);
