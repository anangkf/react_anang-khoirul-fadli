const firstName = "andrew";
const lastName = "robertson";

const getfullName = (firstName, lastName) =>{
    return `${firstName} ${lastName}`;
}

const greeting = (fullName) =>{
    return (`Hi, ${fullName}!`);
}

console.log(greeting(getfullName(firstName, lastName)));