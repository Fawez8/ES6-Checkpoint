let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
const  getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
}

  let petsWithAge = [];
  for (let i of pets) {
    let pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  } // ici j'utilise map ,nn??
  console.log(petsWithAge);

  let dog = pets.filter(pet =>(pet.type = "dog"))
  console.log(dog);
  

  let jasper = pets.find(nom =>pet.name = "jasper");
  console.log(jasper);

  console.log(`Jasper is ${jasper.age} years old`);