let myapp= angular.module("Myapp",[]);
let mycon= function($scope){
    $scope.message="Hello World";
}

myapp.controller("MyController",mycon);

let JSONController = function($scope){
let student = {
    Firstname :"Bharath Kumar",
    Lastname : "kanagala",
    Email : "S534865@nwmissouri.edu"
}
$scope.stud=student;
}
myapp.controller("Student",JSONController);

let bhar = function($scope){
    $scope.storedata= "Hi all my name is BK"
}
myapp.controller("Bharath",bhar);