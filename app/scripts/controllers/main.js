'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {

  $scope.todos = [];

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };
});
  // TODO Michelle: if you enter more than one blank todo item or a todo item with the same name the list stops working. enhance addTodo with error checking

