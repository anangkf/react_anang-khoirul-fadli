let bdays = ['10-17', '05-19', '20-19'];

bdays = bdays.map(el =>{
    let newEl = el.replace('-','/')
    return newEl
});

console.log(bdays);