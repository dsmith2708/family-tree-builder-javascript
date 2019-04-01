
class Family {
    // Array in which family members will be stored
    familyMembers = [];

    // Prints out names of all family members currently in Array
    getFamilyMembers() {
        this.familyMembers.forEach(person => {
            console.log(person.name);
        });
    }

    // Returns true if family member exists, false if they do not
    doesFamilyMemberExist(personName) {
        return this.familyMembers.some((person) => person.name == personName);
    }

    // Returns family member with provided name
    getFamilyMember(personName) {
        return this.familyMembers.find((person) => person.name === personName);
    }

    // Adds new family member, will not add if another person already has the same name
    addNewFamilyMember(newMemberName) {
        // Checks if person with provided name currently exists, creates this new person if they do not
        if (!this.doesFamilyMemberExist(newMemberName)) {
            this.familyMembers.push(new Person(newMemberName));
            return true;
        } else {
            console.log('Error: person with this name already exists');
            return false;
        }
    }

    // Assigns a family member male gender
    male(personName) {
        if(this.doesFamilyMemberExist(personName)) {
            console.log('Assigning ', personName, ' Male gender');
            let familyMember = this.getFamilyMember(personName);
            familyMember.gender = 'Male';
        } else {
            console.log('provided name does not match any current family member');
        }
    }

    // Assigns a family member female gender
    female(personName) {

    }

}

let family = new Family();