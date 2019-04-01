
class Family {
    // Array in which family members will be stored
    familyMembers = [];

    // Prints out names of all family members currently in Array
    getFamilyMembers() {
        this.familyMembers.forEach(person => {
            console.log(person.name);
        });
    }

    // Adds new family member, will not add if another person already has the same name
    addNewFamilyMember(newMemberName) {
        if (!this.familyMembers.some((person) => person.name === newMemberName)) {
            this.familyMembers.push(new Person(newMemberName));
        } else {
            console.log('Error: person with this name already exists');
        }
    }
}

let family = new Family();