
class Family {
    familyMembers = [];

    getFamilyMembers() {
        this.familyMembers.forEach(person => {
            console.log(person.name);
        });
    }

    addNewFamilyMember(newMemberName) {
        this.familyMembers.push(new Person(newMemberName));
    }
}

let family = new Family();