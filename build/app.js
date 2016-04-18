'use strict';

let app = angular.module('githubApp', []);

app.controller('AppCtrl', ['$http', AppApi]);
app.controller('TabCtrl', function() {
  let vm = this;
  vm.tab = 1;
  vm.setTab = num => vm.tab = num;
  vm.isSet = num => vm.tab == num;
});

function AppApi($http) {
  let vm = this;
  let rootRoute = 'https://api.github.com/users/setheid';

  vm.getProfile = function() {
    $http.get(rootRoute)
    .then(res => {
      vm.profile = res.data;
    })
    .catch(err => console.log(err));
  }
  vm.getStarred = function() {
    $http.get(`${rootRoute}/starred`)
    .then(res => {
      vm.starred = res.data;
    })
    .catch(err => console.log(err));
  }
  vm.getRepositories = function() {
    $http.get(`${rootRoute}/repos`)
    .then(res => {
      vm.repos = res.data;
    })
    .catch(err => console.log(err));
  }
  vm.getFollowers = function() {
    $http.get(`${rootRoute}/followers`)
    .then(res => {
      vm.followers = res.data;
    })
    .catch(err => console.log(err))
  }
  vm.getFollowing = function() {
    $http.get(`${rootRoute}/following`)
    .then(res => {
      vm.following = res.data;
    })
    .catch(err => console.log(err))
  }
}
