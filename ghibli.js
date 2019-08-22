var vehiclesList = document.getElementById("car");
var navCar = document.getElementById("navCar");
fetch('https://ghibliapi.herokuapp.com/vehicles') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    console.log(json);
  let vehicles = json; 

  for(vehicle of vehicles) {
    console.log(vehicle.name);
    let navItem = document.createElement('li');
    let listItem = document.createElement('li');
    listItem.innerHTML = '<p>' + vehicle.name + '</p>'; 
    navItem.innerHTML = '<p>' + vehicle.name + '</p>';
    vehiclesList.appendChild(listItem);
    navCar.appendChild(navItem);
  }

});

//separator

var filmsList = document.getElementById("film");
var movieList = document.getElementById("movie");
fetch('https://ghibliapi.herokuapp.com/films') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    console.log(json);
  let films = json; 

  for(movie of films) {
    console.log(movie.title + movie.release_date);
    let listItem = document.createElement('li');
    let movieItem = document.createElement('li');
    listItem.innerHTML = '<p>' + movie.title + " : " + movie.release_date + '</p>';
    movieItem.innerHTML = '<p>' + movie.title + " : " + movie.release_date + '</p>';
    filmsList.appendChild(listItem);
    movieList.appendChild(movieItem);
    
  }

});


//separator

var peopleList = document.getElementById("person");
var personalList = document.getElementById("personal");
fetch('https://ghibliapi.herokuapp.com/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    console.log(json);
  let persons = json; 

  for(people of persons) {
    console.log(people.name + people.age);
    let listItem = document.createElement('li');
    let personalItem = document.createElement('li');
    listItem.innerHTML = '<p>' + people.name + " : " + people.age + '</p>';
    personalItem.innerHTML = '<p>' + people.name + " : " + people.age + '</p>'; 
    peopleList.appendChild(listItem);
    personalList.appendChild(personalItem);
  }

});

//separator

var speciesList = document.getElementById("species");

fetch('https://ghibliapi.herokuapp.com/species') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    console.log(json);
  let species = json; 

  for(specy of species) {
    console.log(specy.classification);
    let listItem = document.createElement('li');
    
    listItem.innerHTML = '<p>' + specy.classification + '</p>';
    
    speciesList.appendChild(listItem);
    
  }

});

//separator

var locationList = document.getElementById("location");

fetch('https://ghibliapi.herokuapp.com/locations') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    console.log(json);
  let locations = json; 

  for(locate of locations) {
    console.log(locate.name);
    let listItem = document.createElement('li');
    
    listItem.innerHTML = '<p>' + locate.name + '</p>';
    
    locationList.appendChild(listItem);
    
  }

});

