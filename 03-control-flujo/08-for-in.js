let user = {
  id: 1,
  name: "Juan",
  age: 30,
};

for (let prop in user){
    console.log(prop); // id, name, age
}
for (let prop in user){
    console.log(prop, user[prop] );
}





