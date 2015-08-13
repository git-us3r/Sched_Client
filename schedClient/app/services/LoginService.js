(function(){

    'use strict';

    angular
        .module("schedClient")
        .factory("LoginService", [loginService]);
                    

    function loginService() {

        var ret = {},
            currentUser,
        // Temporary data
            users = [

                {
                    _id : "e0",
                    IsAdmin : true,
                    FullName : "Whytee D'ville",
                    Email : "elPingo@gamil.com",
                    Phone : "8019186776",
                    ImgUrl : "https://s3.amazonaws.com/uifaces/faces/twitter/dustinlamont/128.jpg",
                    Shifts : [

                        {
                            _id : "e0s0",
                            TimeIn : new Date(2015, 5, 12, 1, 30),
                            TimeOut : new Date(2015, 5, 12, 3, 30),
                            AssignedBy : "mgmt",
                            AssignedTo : "e0",
                            Status : "OK"
                        },
                        {
                            _id : "e0s1",
                            TimeIn : new Date(2015, 5, 14, 10, 30),
                            TimeOut : new Date(2015, 5, 14, 12, 0),
                            AssignedBy : "mgmt",
                            AssignedTo : "e0",
                            Status : "OK"
                        },
                        {
                            _id : "e0s2",
                            TimeIn : new Date(2015, 5, 18, 16, 20),
                            TimeOut : new Date(2015, 5, 18, 18, 30),
                            AssignedBy : "mgmt",
                            AssignedTo : "e0",
                            Status : "OK"
                        }
                    ]
                },
                {
                    _id : "e1",
                    FullName : "Slum Dogg",
                    Email : "gambino@gamil.com",
                    Phone : "8019199776",
                    ImgUrl : "https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg",
                    Shifts : [

                        {
                            _id : "e1e2s0",
                            TimeIn : new Date(2015, 5, 22, 8, 30),
                            TimeOut : new Date(2015, 5, 22, 10, 30),
                            AssignedBy : "mgmt",
                            AssignedTo : "e1",
                            Status : "OK"
                        },
                        {
                            _id : "e1e2s1",
                            TimeIn : new Date(2015, 5, 24, 10, 30),
                            TimeOut : new Date(2015, 5, 24, 12, 0),
                            AssignedBy : "mgmt",
                            AssignedTo : "e1",
                            Status : "OK"
                        },
                        {
                            _id : "e1e2s2",
                            TimeIn : new Date(2015, 5, 28, 16, 20),
                            TimeOut : new Date(2015, 5, 28, 18, 30),
                            AssignedBy : "mgmt",
                            AssignedTo : "e1",
                            Status : "OK"
                        }
                    ]
                },
                {
                    _id : "e2",
                    FullName : "Maria Cobadonga",
                    Email : "megan@gamil.com",
                    Phone : "8019155776",
                    ImgUrl : "https://s3.amazonaws.com/uifaces/faces/twitter/annapickard/128.jpg",
                    Shifts : [

                        {
                            _id : "e2e2s0",
                            TimeIn : new Date(2015, 5, 2, 8, 30),
                            TimeOut : new Date(2015, 5, 2, 10, 30),
                            AssignedBy : "mgmt",
                            AssignedTo : "e1",
                            Status : "OK"
                        },
                        {
                            _id : "e2e2s1",
                            TimeIn : new Date(2015, 5, 4, 10, 30),
                            TimeOut : new Date(2015, 5, 4, 12, 0),
                            AssignedBy : "mgmt",
                            AssignedTo : "e1",
                            Status : "OK"
                        },
                        {
                            _id : "e2e2s2",
                            TimeIn : new Date(2015, 5, 8, 16, 20),
                            TimeOut : new Date(2015, 5, 8, 18, 30),
                            AssignedBy : "mgmt",
                            AssignedTo : "e1",
                            Status : "OK"
                        }
                    ]
                }
            ];



        function findUserIndex(userName) {

            for(var i = 0; i < users.length; ++i) {

                if(users[i].Email == userName) {

                    return i;
                }
            }

            return null;
        }



        function userIsRegistered(userName) {

            var userIndex = findUserIndex(userName);

            if(userIndex !== null) {

                return true;
            }
            else {

                return false;
            }
        }



        function getUser(userName, password) {

            var userIndex = findUserIndex(userName);

            if(userIndex !== null && users[userIndex].Email == password) {

                currentUser = users[userIndex];
                localStorage.setItem("currentUser", JSON.stringify(currentUser));

                return currentUser;
            }
            else {

                return null;
            }
        }


        function passwordIsValid(userName, password) {

            if(getUser(userName, password) !== null) {

                return true;
            }
            else {

                return false;
            }
        }


        function getCurrentUser() {

            if(currentUser) {

                return currentUser;
            }
            else {

                currentUser = JSON.parse(localStorage.getItem("currentUser"));

                return currentUser;
            }
        }


        function getAllUsers() {

            if(currentUser.IsAdmin) {

                return users;
            }
            else {

                return null;
            }
        }



         //////////////// Public interface ////////////////////////////


         ret.GetUser = getUser;
         ret.UserExists = userIsRegistered;
         ret.PasswordIsValid = passwordIsValid;
         ret.GetCurrentUser = getCurrentUser;
         ret.GetAllUsers = getAllUsers;

         return ret;

    }
    
}());