(function(){

    'use strict';

    angular
        .module("schedClient")
        .controller("LoginCtrl", ['LoginService', '$state', ctrl]);

    function ctrl(LoginService, $state) {
        
        var vm = this,
            _password = 123;



        vm.userName = '';
        vm.password = '';

        vm.userNameFieldMsg = 'Enter email';
        vm.passwordFieldMsg = 'Enter password';

        vm.login = function(){

            var user = LoginService.GetUser(vm.userName, vm.password);
            
            if(user.IsAdmin) {

                $state.transitionTo('adminDash');
            }
            else if(user) {

                $state.transitionTo('userDash');
            }
            else {


                // Handle login failure
                console.log('Null user');
            }

        };

        return vm;

    }

}());