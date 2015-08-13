(function(){

    'use strict';

    angular
        .module("schedClient")
        .controller("AdminCtrl",
                    ['$scope', '$state', 'uiCalendarConfig', 'LoginService', ctrl]);

    function ctrl($scope, $state, uiCalendarConfig, LoginService) {

        var vm = this;

        ///////////////////////////////////////////////////////////////////////////////
        
        validate();


        function validate() {

            vm.user = LoginService.GetCurrentUser();
            
            if(vm.user === null) {

                $state.transitionTo('login');
            }
            else {

                vm.Employees = LoginService.GetAllUsers();
                vm.ActiveEmployee = vm.Employees[0];    
            }
        }


        vm.EmployeeClick = function(index) {

            vm.ActiveEmployee = vm.Employees[index];

            highlightActiveEmployeeEvents(index);

            // uiCalendarConfig.calendars.schedCalendar('render');

        };


        function highlightActiveEmployeeEvents(index) {

            var newEvents = [];

            for(var evntIndex = 0; evntIndex < vm.Events[0].length; ++evntIndex) {

                var newEvent = {

                    id: vm.Events[0][evntIndex].id,
                    title: vm.Events[0][evntIndex].title,
                    start: vm.Events[0][evntIndex].start,
                    end : vm.Events[0][evntIndex].end,
                    editable: true
                };

                // Add the orange color to the events corresponding to the selected user.
                if(vm.Events[0][evntIndex].title === vm.Employees[index].FullName) {

                    newEvent.color = '#FFA500';               
                }
                
                newEvents.push(newEvent);
            }

            // replace the old events with the new one.
            vm.Events[0] = newEvents;
        }

        ///////////////////////////////////////// CAL ///////////////////////////////////////

        vm.CalendarConfig = {
            height : 450,
            editable: true,
            header : {

                left : 'month agendaWeek agendaDay',
                center : 'title',
                right : 'today prev,next'
            },
            defaultView : 'agendaDay',
            businessHours : true,
            dayClick : dayClick

        };


        function dayClick(date) {
           uiCalendarConfig.calendars.schedCalendar.fullCalendar('changeView', 'agendaDay');
           uiCalendarConfig.calendars.schedCalendar.fullCalendar('gotoDate', date);
        }


        var events = [];

        vm.Employees.forEach(function(employee, index, array){

            employee.Shifts.forEach(function(shift, index, array){

                events.push({
                    id: shift._id,
                    title: employee.FullName,
                    start: shift.TimeIn,
                    end : shift.TimeOut,
                    editable: true

                });
            });

        });

        vm.Events = [];
        vm.Events.push(events);

        return vm;
    }
    
}());