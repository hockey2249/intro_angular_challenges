console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("CohortController", CohortController);

function WelcomeController(){
  this.full_name = "Kyle Gibbons";
  this.age = 29;
  this.city = "South Hero";
  this.state = "VT";
  this.shout = function(str){
    return str.toUpperCase() + "!";
  };
}


function CohortController(){
  this.class_name = "WDI";
  this.enrolled_students = ["Holly", "Greg", "Jamie", "Allison","Matt", "Maddy", "Charlie", "Monica","Kayce", "Nick", "Abe", "Louis"];
  this.start_date = "6-13-2016";
  this.end_date = "9-02-2016";
  this.days_remaining = "21";
}

