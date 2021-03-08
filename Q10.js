const movies = [
    { id: 1, name: "Joker" },
    { id: 2, name: "Parasite" },
    { id: 3, name: "Avengers" },
    { id: 4, name: "Her" }
  ];
  const actors = [
    { id: 1, name: "Cho Yeo-jeong", movie_ids: [2] },
    { id: 2, name: "Robert Downey Jr.", movie_ids: [3] },
    { id: 3, name: "Joaquin Phoenix", movie_ids: [1, 4] },
    { id: 4, name: "Scarlett Johansson", movie_ids: [3] }
  ];
  
  function movieGetList(movies, actors) {
    const movieList = [];
  
    for (var i = 0; i < movies.length; i++) {
      movieList.push({ id: i + 1, name: movies[i].name, actors: [] });
  
      for (var j = 0; j < movies.length; j++) {
        if (actors[j].movie_ids.includes(i + 1)) {
          movieList[i].actors.push(actors[j].name);
        }
      }
    }
  
    return movieList;
  }
  
  window.exercise10 = function () {
    console.log("resultado ex10:", movieGetList(movies, actors));
  };
  