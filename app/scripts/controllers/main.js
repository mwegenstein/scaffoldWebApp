'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) { //rather than reading our todos from a static array, it reads from Local Storage and then storing it in $scope.todos instead.
    
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function () {
    	localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo = function () { //addTodo function pushes new todo items onto the existing todo items array and then clears the text input field
    	$scope.todos.push($scope.todo);
    	$scope.todo ='';
    };

    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1); //removes one todo item from the items array using the JavaScript splice method at the given $index value
    };
    
  });
  // TODO Michelle: if you enter more than one blank todo item or a todo item with the same name the list stops working. enhance addTodo with error checking

