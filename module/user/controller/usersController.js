/**
 * Created by huangyao on 2017/5/16.
 */
define(['app','user1Controller','user2Controller'],function(app){
    app.register.controller('usersController',
    [
        '$scope',
        function($scope){
            $scope.show1 = true;
            $scope.change = function(id){
                if(id==1){
                    $scope.show1 = true;
                    $scope.show2 = false;
                }else if(id==2){
                    $scope.show1 = false;
                    $scope.show2 = true;
                }
            }
        }
    ])
})