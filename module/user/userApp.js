/**
 * Created by huangyao on 2017/7/20.
 */
define(['angular'],function(){
    angular.module('userApp',[])
        .config(function($stateProvider,$urlRouterProvider){
            $stateProvider
                .state('menu1', {
                    url: '/menu1',
                    templateUrl: 'views/user/user1.html',
                    controller: 'user1Controller',
                    resolve: {
                        loadCtrl: ['$q',
                            function ($q) {
                                var deferred = $q.defer();
                                //异步加载controller／directive/filter/service
                                require([
                                    'module/user/controller/user1Controller.js'
                                ], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }]
                    }
                })
                .state('menu2', {
                    url: '/menu2',
                    templateUrl: 'views/user/user2.html',
                    controller: 'user2Controller',
                    resolve: {
                        loadCtrl: ['$q',
                            function ($q) {
                                var deferred = $q.defer();
                                //异步加载controller／directive/filter/service
                                require([
                                    'module/user/controller/user2Controller.js'
                                ], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }]
                    }
                })
                .state('people', {
                    url: '/people',
                    templateUrl: 'views/user/people.html',
                    controller: 'peopleController',
                    resolve: {
                        loadCtrl: ['$q',
                            function ($q) {
                                var deferred = $q.defer();
                                //异步加载controller／directive/filter/service
                                require([
                                    'module/user/controller/peopleController.js'
                                ], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }]
                    }
                })
        })
})