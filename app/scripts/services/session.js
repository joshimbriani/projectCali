'use strict';

angular.module('projectCaliApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
