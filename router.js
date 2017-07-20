/**
 * Created by huangyao on 2017/5/15.
 */
define(['app'],function(app){
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
        app.register = {
            //得到$controllerProvider的引用
            controller : $controllerProvider.register,
            //同样的。这里也可以保存directive / filter /service 的引用
            directive : $compileProvider.register,
            filter : $filterProvider.register,
            service : $provide.service,
            factory : $provide.factory
        }
    })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('user', {
                    url: '/user',
                    templateUrl: 'views/user/users.html',
                    controller: 'usersController',
                    resolve: {
                        loadCtrl: ['$q',
                            function ($q) {
                                var deferred = $q.defer();
                                //异步加载controller／directive/filter/service
                                require([
                                    'module/user/controller/usersController.js'
                                ], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }]
                    }
                })
            //解决路由异常的方法
            $urlRouterProvider.otherwise('/user');
        });
});

