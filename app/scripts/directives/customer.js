'use strict';

angular.module('redmartApp').directive ('customers', ['$http', 'redmartServices',function ($http, redmartServices){
	var customerDirective = {};
	customerDirective.restrict = 'E'; /* restrict this directive to elements */

	customerDirective.link = function (scope, element, attr){
  		redmartServices.getCustomers()
    	   .success(function(customers){
    	   		console.log (customers);
          }).error(function(){
            $scope.msg = 'Error in processing your request';
            //$scope.showError();       
          });		
	    return;				
	};

    return customerDirective;
}]);