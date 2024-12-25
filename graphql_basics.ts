// Definir el tipo Query con dos campos: getCat y getDog
type Query = {
  getCat: Cat
  getDog: Dog
}

// Definir el tipo Cat
type Cat = {
  name: String
  age: number
}

//Definir el tipo Dog
type Dog ={
  name: String
  breed: String
  age: number
}

// Resolver para el campo `getCat` en el tipo `Query`
function Query_getCat(query: any, args: any, context: any, info: any): Cat {
  return {
    name: "Whiskers",
    age: 3
  };
}

// Resolver para el campo `name` del tipo `Cat`
function Cat_name(cat: Cat, args: any, context: any, info: any): String {
  return cat.name;
}

// Resolver para el campo `age` del tipo `Cat`
function Cat_age(cat: Cat, args: any, context: any, info: any): number {
  return cat.age;
}
