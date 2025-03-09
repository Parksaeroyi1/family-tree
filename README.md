# Family Tree Application

This application allows you to create and manage a family tree by defining individuals (`Person` objects) and establishing parent-child relationships between them.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **Code Editor**: Use a code editor like [Visual Studio Code](https://code.visualstudio.com/).

---

## Getting Started

1. **Initialize the Project**:
   Open your terminal and navigate to your project directory. Run the following command to initialize a new Node.js project:
  
   npm init -y
 
   This creates a `package.json` file with default settings.

2. **Install Dependencies**:
   Install `nodemon` to automatically restart the server when file changes are detected:
  
   npm install nodemon 
  

3. **Update `package.json`**:
   Add a script to run the application using `nodemon`:
   ```json
   "scripts": {
     "node": "nodemon index.js"
   }
   ```

---

## Project Structure

The project consists of two main files:

1. **`family.js`**: Contains the `Person` and `FamilyTree` classes.
2. **`index.js`**: The entry point of the application where family members and relationships are defined.

---

## Running the Application

1. **Create the `family.js` File**:
   Define the `Person` and `FamilyTree` classes in `family.js`:
   ```javascript
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
   ```

2. **Create the `index.js` File**:
   Import the classes and define the family tree:
   ```javascript
   import { Person, FamilyTree } from './family.js';

   // Sample Dataset Here, we create instances of the Person class to represent individuals in the family.
   const john = new Person("John", '1950-01-01', 'Engineer');
   const jane = new Person("Jane", '1955-02-02', 'Doctor');
   const mike = new Person("Mike", '1975-03-03', 'Teacher');
   const anna = new Person("Anna", '1980-04-04', 'Artist');
   const kate = new Person("Kate", '2000-05-05', 'Student');
   const tom = new Person("Tom", '2005-06-06', 'Musician');

   // Establish relationships The addChild method is used to establish parent-child relationships.
   john.addChild(mike);
   john.addChild(anna);

   jane.addChild(anna);

   mike.addChild(kate);
   mike.addChild(tom);

   // Create family tree A FamilyTree object is created to manage all the individuals in the family. The addMember method adds each Person object to the family tree.
   
   const familyTree = new FamilyTree();
   familyTree.addMember(john);
   familyTree.addMember(jane);
   familyTree.addMember(mike);
   familyTree.addMember(anna);
   familyTree.addMember(kate);
   familyTree.addMember(tom);


   // Display descendants of a person with details
   // This function displays the descendants of a given person.
   // It uses the getDescendants method from the Person class to retrieve all descendants recursively.
   //If the person has no children, it outputs "No children".
   //Otherwise, it lists all descendants with their details (name, birthdate, and profession).

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
   //The displayDescendants function is called for each person in the family tree.
   //This outputs the descendants of each individual to the console.
   displayDescendants(john);
   displayDescendants(jane);
   displayDescendants(mike);
   displayDescendants(anna);
   displayDescendants(kate);
   displayDescendants(tom);
   ```

3. **Run the Application**:
   Start the application using the following command:
   
   npm run node
   

---

## Code Explanation

### `Person` Class
- Represents an individual with properties like `name`, `birthdate`, and `profession`.
- Includes methods:
  - `addChild(child)`: Adds a child and establishes a parent-child relationship.
  - `getDescendants()`: Recursively retrieves all descendants of a person.
  - `getDetails()`: Returns the person's details in a structured format.

### `FamilyTree` Class
- Manages a collection of `Person` objects.
- Includes method:
  - `addMember(person)`: Adds a person to the family tree.

### `index.js`
- Imports the `Person` and `FamilyTree` classes.
- Creates a sample dataset of individuals and establishes relationships.
- Displays the descendants of each person in the console.

---

