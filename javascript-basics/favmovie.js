let movies = ['Interstellar', 'Batman Dark Knight', 'One piece', 'Oppenheimer', 'favmovie']

console.log("\nTotal number of movies: " + movies.length);
console.log("\nMovie at 3rd index: " + movies[3]);
console.log("\nadding new movie...");
movies.push("batman v superman");
console.log("\nUpdated List: ");
movies.forEach((movie) => {
    console.log('- ' + movie);
})
console.log("\nRemoving last movie...");
movies.pop()
console.log("\nUpdated List: ");
movies.forEach((movie) => {
    console.log('- ' + movie);
})

