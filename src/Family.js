
class Family {
    familyMembers = [];

    getFamilyMembers() {
        this.familyMembers.forEach(person => {
            console.log(person.name);
        });
    }

    addNewFamilyMember(newMemberName) {
        if (!this.familyMembers.some((person) => person.name === newMemberName)) {
            this.familyMembers.push(new Person(newMemberName));
        } else {
            console.log('Error: person with this name already exists');
        }
    }
}

let family = new Family();