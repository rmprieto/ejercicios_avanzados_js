const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

const categoriesMovies = [];

for (const movie of movies){
    for (const category of movie.categories){
        if(!categoriesMovies.includes(category)){
            categoriesMovies.push(category);
        }
    }
}

console.log(categoriesMovies);

