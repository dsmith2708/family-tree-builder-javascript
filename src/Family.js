
class Family {
    // Array in which family members will be stored
    familyMembers = [];

    // Prints out names of all family members currently in Array
    getFamilyMembers() {
        this.familyMembers.forEach(person => {
            console.log(person.name);
        });
        return this.familyMembers;
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
                return familyMember.gender === gender;
            } else {
                // Check make sure this assignment is not impossible
                if (gender === 'Male') {
                    if (this.isFemale(familyMember.name)) {
                        console.log('Error: this gender assignment is not possible');
                        return false;
                    }
                } else if (gender === 'Female') {
                    if (this.isMale(familyMember.name)) {
                        console.log('Error: this gender assignment is not possible');
                        return false;
                    }
                }
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

    // Checks if we can determine if a person is of a specific gender
    isGender(name, gender) {
        // Check if family member exists
        if (this.doesFamilyMemberExist(name)) {
            let familyMember = this.getFamilyMember(name);
            // Check if family member has gender defined, return true if this matches provided value, false if it does not
            if (familyMember.gender) {
                return familyMember.gender === gender;
            } else {
                // If gender is not defined
                // Check if we can determine gender through children
                if (familyMember.children.length > 0) {
                    let matchesProvidedGender = false;
                    // See if children have another parent defined
                    familyMember.children.forEach((childName) => {
                        // If they do, get other parent and check gender
                        if (this.getFamilyMember(childName).parents.length >= 2) {
                            this.getFamilyMember(childName).parents.forEach((parentName) => {
                                if (parentName !== name) {
                                    matchesProvidedGender = this.getFamilyMember(parentName).gender !== undefined &&
                                        this.getFamilyMember(parentName).gender !== gender;
                                }
                            })
                        }
                    });
                    return matchesProvidedGender;
                } else {
                    return false;
                }
            }
        } else {
            console.log('Error: No family member found with name', name);
            return false;
        }
    }

    // Returns true if a person is Male, or false if they are female, or if gender cannot be determined
    isMale(name) {
        return this.isGender(name, 'Male');
    }

    // Returns true if a person is Female, or false if they are male, or if gender cannot be determined
    isFemale(name) {
        return this.isGender(name, 'Female');
    }

    // Prints and returns the parents of a given child
    getParents(childName) {
        // Check if family member exists
        if (this.doesFamilyMemberExist(childName)) {
            let child = this.getFamilyMember(childName);
            // Check if family member has parents defined
            if (child.parents.length <= 0) {
                console.log('Error:', childName, 'does not have any parents');
            } else {
                // Print and return parents in alphabetical order if they are defined
                console.log('The parents of', childName, 'are:');
                child.parents.sort().forEach((parentName) => {
                    console.log(parentName);
                });
                return child.parents.sort();
            }
        } else {
            console.log('Error: family member does not exist with name', childName);
        }
    }

    // Prints and returns the children of a given parent
    getChildren(parentName) {
        // Check if family member exists
        if (this.doesFamilyMemberExist(parentName)) {
            let parent = this.getFamilyMember(parentName);
            // Check if family member has children defined
            if (parent.children.length <= 0) {
                console.log('Error:', parentName, 'does not have any children');
            } else {
                // Print and return children in alphabetical order if they are defined
                console.log('The children of', parentName, 'are:');
                parent.children.sort().forEach((childName) => {
                    console.log(childName)
                });
                return parent.children.sort();
            }
        } else {
            console.log('Error: family member does not exist with name', parentName);
        }
    }

    setParentOf(childName, parentName) {
        if (childName === parentName) {
            console.log('Error: a child cannot be their own parent');
        } else {
            // Check if person with childName already exists
            let child;
            if (this.doesFamilyMemberExist(childName)) {
                child = this.getFamilyMember(childName);
            } else {
                console.log('No family member found with name', childName, 'creating new family member');
                this.addNewFamilyMember(childName);
                child = this.getFamilyMember(childName);
            }
            // Check if parent exists
            let parent;
            if (this.doesFamilyMemberExist(parentName)) {
                parent = this.getFamilyMember(parentName);
            } else {
                console.log('no family member found with name', parentName, 'creating new family member');
                this.addNewFamilyMember(parentName);
                parent = this.getFamilyMember(parentName);
            }
            // Check if child already has two parents defined
            if (child.parents.length >= 2) {
                console.log('Error:', childName, 'already has two parents');
                return false;
            } else if (child.parents.length === 1) {
                // If child already has one parent, 
                let childCurrentParent = this.getFamilyMember(child.parents[0]);
                // Check parent is not already defined as a parent of this child
                if (childCurrentParent.name === parentName) {
                    console.log('Error:', parentName, 'is already a parent of', childName);
                    return false;
                } else {
                    // Make sure they do not share
                    // the same gender as the parent we are currently defining
                    if (childCurrentParent.gender === parent.gender && !childCurrentParent.gender === undefined) {
                        console.log('Error: both parents cannot share the same gender');
                        return false;
                    } else {
                        // Assign parent and child as this is valid
                        console.log('assigning', parentName, 'as parent of', childName);
                        child.parents.push(parentName);
                        parent.children.push(childName);
                        // Check if we can assume a parents gender if not defined
                        if (!parent.gender) {
                            if (childCurrentParent.gender) {
                                if (childCurrentParent.gender === 'Male') {
                                    this.female(parent.name);
                                    return true;
                                } else if (childCurrentParent.gender === 'Female') {
                                    this.male(parent.name);
                                    return true;
                                }
                            } else { return true }
                        }
                        return true;
                    }
                }
            } else {
                // If child currently has no parents
                console.log('assigning', parentName, 'as parent of', childName);
                child.parents.push(parentName);
                parent.children.push(childName);
                return true;
            }


        }
    }

}

let family = new Family();