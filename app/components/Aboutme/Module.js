let myApp= angular.module("myApp",[]);
let mycon= function($scope){
    $scope.message="Hello World";
}

myApp.controller("MyController",mycon);

let JSONController = function($scope){
let student = {
    Firstname :"Bharath Kumar",
    Lastname : "kanagala",
    Email : "S534865@nwmissouri.edu"
}
$scope.stud=student;
}
myApp.controller("Student",JSONController);

let bhar = function($scope){
    $scope.storedata= "Hi all my name is BK"
}
myApp.controller("Bharath",bhar);