
//   Take the object, add one key-value pair to it and transform it in a JSON.
  
//   Now take the JSON, transform it back into an object with a new name, call and console log each one of the values.
 


let object = {
    id: 1,
    title: "prof",
    content: "This is the amazing content of the note!",
    author: "Conceptman",
  };
console.log(object.id);
object =  {
    id: 1,
    title: "prof",
    content: "This is the amazing content of the note!",
    author: "Conceptman",
    movie: "turn"
  };
var el = JSON.stringify(object);
var object2 = JSON.parse(el);
console.log(object2.author)
