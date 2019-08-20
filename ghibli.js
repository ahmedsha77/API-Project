var vehiclesList = document.getElementById("car");

fetch('https://ghibliapi.herokuapp.com/vehicles') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    console.log(json);
  let vehicles = json; 

  for(vehicle of vehicles) {
    console.log(vehicle.name);
    let listItem = document.createElement('li');
    listItem.innerHTML = '<p>' + vehicle.name + '</p>'; 
    vehiclesList.appendChild(listItem);  
  }

});

//separator

var filmsList = document.getElementById("film");
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
    listItem.innerHTML = '<p>' + movie.title + " : " + movie.release_date + '</p>'; 
    filmsList.appendChild(listItem);  
  }

});

//separator

var peopleList = document.getElementById("person");
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
    listItem.innerHTML = '<p>' + people.name + " : " + people.age + '</p>'; 
    peopleList.appendChild(listItem);  
  }

});


