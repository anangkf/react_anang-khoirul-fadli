const firstName = "andrew";
const lastName = "robertson";

const getfullName = (firstName, lastName) =>{
    return `${firstName} ${lastName}`;
}

const capitalizeName = (firstName, lastName) =>{
    firstName = firstName[0].toUpperCase() + firstName.substr(1);
    lastName = lastName[0].toUpperCase() + lastName.substr(1);

    return `${firstName} ${lastName}`;
}

const upperName = (firstName, lastName) =>{
    firstName = firstName.toUpperCase();
    lastName = lastName.toUpperCase();

    return `${firstName} ${lastName}`;
}

const greeting = (fullName) =>{
    return (`Hi, ${fullName}!`);
}

console.log(greeting(getfullName(firstName, lastName)));