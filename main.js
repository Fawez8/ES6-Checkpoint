let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
const  getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
}
pets.forEach(item=> item.age = getAge(item))

 let dog = pets.filter(pet =>(pet.type = "dog"))
  console.log(dog);
  

  let jasper = pets.find(nom =>pet.name = "jasper");
  console.log(jasper);

  console.log(`Jasper is ${jasper.age} years old`);
