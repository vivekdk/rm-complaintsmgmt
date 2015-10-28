'use strict';

/**
 * @ngdoc function
 * @name redmartApp.controller:ComplaintsCtrl
 * @description
 * # MainCtrl
 * Controller of the redmartApp
 */
angular.module('redmartApp')
  .controller('CreateComplaintCtrl', ['$scope', 'redmartServices', '$modal', '$modalInstance', function($scope, redmartServices, $modal, $modalInstance) {

  	$scope.createComplaint = function (){

  		$scope.payload = {
  			 complaintMessage : $scope.complaint.complaintMessage,
  			 customerId : "5630c49c550d646562723d22"
  		};
  		redmartServices.createComplaint ($scope.payload)
    	   .success(function(complaints){
             alert ('complaint created successfully');
             $modalInstance.close();
             $scope.getComplaints();
          }).error(function(){
            $scope.msg = 'Error in processing your request';
            //$scope.showError();       
          }); 
  	};  	

    $scope.close = function (){
      $modalInstance.close();
    }

  }]);
