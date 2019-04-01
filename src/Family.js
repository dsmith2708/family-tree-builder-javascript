
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

    // Assign gender
    assignGender(personName, gender) {
        // Checks if family member exists
        if (this.doesFamilyMemberExist(personName)) {
            let familyMember = this.getFamilyMember(personName);
            // Check if family member gender is already defined, define as provided value if not, show error message otherwise
            if (familyMember.gender) {
                console.log('Error: gender of', personName, 'is already defined as', familyMember.gender);
                // Return true if already provided value, return false otherwise
                if (familyMember.gender === gender) {
                    return true;
                } else {
                    return false;
                }
            } else {
                // Assign provided gender if not currently defined
                console.log('Assigning', personName, gender, 'gender');
                familyMember.gender = gender;
                return true;
            }
        } else {
            // Create family member then assign provided gender if they do not currently exist
            console.log('provided name does not match any current family member');
            console.log('creating new family member', personName, 'and assigning', gender, 'gender');
            this.addNewFamilyMember(personName);
            this.assignGender(personName, gender);
            return true;
        }
    }

    // Assigns a family member male gender, creates family member and assigns male gender if they do not exist
    male(personName) {
        return this.assignGender(personName, 'Male');
    }

    // Assigns a family member female gender
    female(personName) {
        return this.assignGender(personName, 'Female');
    }

}

let family = new Family();