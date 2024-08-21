function swap(array, indice1, indice2){
    
    if (indice1 > 0 && indice1 <= array.length && indice2 > 0 && indice2 <= array.length){
        const aux = array[indice1];
        array[indice1] = array[indice2];
        array[indice2] = aux;
        console.log (array);
    }
}

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

swap(fantasticFour,1,3);
