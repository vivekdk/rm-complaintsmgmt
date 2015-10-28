'use strict';

/**
 * @ngdoc function
 * @name redmartApp.controller:ComplaintsCtrl
 * @description
 * # MainCtrl
 * Controller of the redmartApp
 */
angular.module('redmartApp')
  .controller('ComplaintsCtrl', ['$scope', 'redmartServices', '$modal', function($scope, redmartServices, $modal) {

  	$scope.getComplaints = function (){
  		redmartServices.getComplaints()
    	   .success(function(complaints){
             $scope.complaints = complaints.complaints;
          }).error(function(){
            $scope.msg = 'Error in processing your request';
            //$scope.showError();       
          });
  	};

  	$scope.getComplaints();

  	$scope.showComments = function(comments){
  		$scope.comments = comments;
	    var modalInstance = $modal.open({
	        templateUrl: 'views/showComments.html',
	        scope : $scope,
	        keyboard : true,
	        backdrop  : 'static',
	        size: 'md'
	    });
  	};

  	$scope.changeStatus = function(){

  	};

  	$scope.assignTo = function (complaint){
  		redmartServices.assignComplaintTo(complaint.id, complaint.assignedTo)
    	   .success(function(complaints){
             complaint.showAssignTo = !complaint.showAssignTo;
          }).error(function(){
            $scope.msg = 'Error in processing your request';
            //$scope.showError();       
          });  		  		
  	};

  	$scope.showCreateComplaint = function (){

  		$scope.complaint = {};
	    var modalInstance = $modal.open({
	        templateUrl: 'views/createComplaint.html',
	        scope : $scope,
	        keyboard : true,
	        backdrop  : 'static',
	        size: 'md'
	    });
  	};

  	$scope.createComplaint = function (){

  		$scope.payload = {
  			complaintMessage : $scope.complaint.complaintMessage,
  			  "customerId" : "5630c49c550d646562723d22"
  		};
  		redmartServices.createComplaint ($scope.payload)
    	   .success(function(complaints){
             alert ('complaint created successfully');
             $scope.getComplaints();
          }).error(function(){
            $scope.msg = 'Error in processing your request';
            //$scope.showError();       
          }); 
  	};  	

  }]);
