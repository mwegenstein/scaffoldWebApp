'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3!'
    ];
    $scope.addTodo = function () { //addTodo function pushes new todo items onto the existing todo items array and then clears the text input field
    	$scope.todos.push($scope.todo);
    	$scope.todo ='';
    };
  });
  // TODO Michelle: if you enter more than one blank todo item or a todo item with the same name the list stops working. enhance addTodo with error checking
  
