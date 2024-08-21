function findArrayIndex(array, text) {
    if (text){
        for (let i = 0; i < array.length; i++){
            const character = array[i];
            if(character.includes(text)){
                return i;
            }
        }
    }
    return -1;
}

function removeItem (array, text) {

    let indice = findArrayIndex(array, text);
    if (indice >= 0){
        array.splice(indice,1);
        return array;
    }
    return "No se encuentra el elemento a eliminar";
    }


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters,"Luke"));
console.log(findArrayIndex(mainCharacters,"Anakin"));
console.log(findArrayIndex(mainCharacters,"Pepe"));
console.log(findArrayIndex(mainCharacters,""));

console.log(removeItem(mainCharacters,"Luke"));
console.log(removeItem(mainCharacters,"Anakin"));
console.log(removeItem(mainCharacters,"Pepe"));
console.log(removeItem(mainCharacters,""));