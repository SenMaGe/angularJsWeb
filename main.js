/**
 * Created by huangyao on 2017/5/15.
 */
(function(){
    /**
     * 文件依赖
     */
    var config = {
        paths:{
            "angular" : 'libs/angular.min',
            "jquery" : 'libs/jquery-1.7.2.min',
            "uiRouter" : 'libs/angular-ui-router',
            "indexController": 'module/indexController',
            "userApp": 'module/user/userApp',
            'user1Controller' : 'module/user/controller/user1Controller',
            'user2Controller' : 'module/user/controller/user2Controller'
        },
        waitSeconds : 7,  //出现网络慢加载文件慢的时候  设置最长等待时间7s
        shim : {  //这里shim等于快速定义一个模块，定义模块需要的依赖
            'angular':{
                exports:'angular'
            },
            uiRouter: {
                deps: ['angular']   //依赖什么模块
            }
        }
    };
    require.config(config);

    require(['router','jquery','uiRouter','indexController','userApp'],function(){
        angular.bootstrap(document,['securityManage']);
    });

})(window);