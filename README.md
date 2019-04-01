# family-tree-builder-javascript
This project is able to build a family tree through the use of classes and functions within javascript

## Using this project in a normal manner
to use this project in a normal manner simply open the index.html file within the src folder in your preferred web browser, and then interact with the already created family object in the console.


The available functions are:

-getFamilyMembers() which prints to the console, and returns the currently created family members

-doesFamilyMemberExist(personName) Which takes in a name and returns true or false depending on whether this person currently exists

-getFamilyMember(personName) Which takes in a name and returns the instance of person with this given name

-addNewFamilyMember(newMemberName) Which takes in a name and creates this Person object if the name does not already exist

-male(personName) Which takes in a name and assigns the gender of this person if possible

-female(personName) Which takes in a name and assigns the gender of this person if possible

-isMale(name) Which takes in a name and returns true if they are definitely male, false if they are not, or cannot be determined

-isFemale(name) Which takes in a name and returns true if they are definitely female, false if they are not, or cannot be determined

-getParents(childName) Which takes in a name and returns an array of parent names if they are available, returns false if they are not

-getChildren(parentName) Which takes in a name and returns an array of child names if they are available, returns false if they are not

-setParentOf(childName, parentName) Which takes in two names and assigns the first name as the child of the second name if this is possible. returns true if completed, returns false if this is impossible
