/**
 * Created by huangyao on 2017/7/20.
 */
define(['app'],function(app){
    app.register.factory('usersService',
        [
            '$http',
            function($http){
                return{
                    getAllUsers:function(data){
                        return $http.post('http://localhost:8080/user/getAllUsers.json',data);
                    }
                }
            }
        ])
})