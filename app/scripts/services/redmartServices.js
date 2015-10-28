angular.module('redmartApp')
	   .factory('redmartServices', ['$http', function($http) {
  
	   	var rServices = {};

	   	var server = {
	   		method 	: 'http',
	   		host  	: 'localhost',
	   		port 	: 9000
	   	};

	   	rServices.getComplaints = function () {
        	return $http.get(server.method + '://' + server.host + ':' + server.port + '/customer/complaints');
    	};

	   	rServices.createComplaint = function (newComplaint) {
        	return $http.post(server.method + '://' + server.host + ':' + server.port + '/customer/complaint', newComplaint);
    	};    	

	   	rServices.changeComplaintStatus = function (complaintId, newStatus) {
        	return $http.put(server.method + '://' + server.host + ':' + server.port + '/customer/complaint/' + complaintId + '/status/' + newStatus);
    	};

	   	rServices.assignComplaintTo = function (complaintId, assignTo) {
        	return $http.put(server.method + '://' + server.host + ':' + server.port + '/customer/complaint/' + complaintId + '/assignto/' + assignTo, {});
    	};    	

	   	rServices.getCustomers = function () {
        	return $http.get(server.method + '://' + server.host + ':' + server.port + '/customers');
    	};    	

    	return rServices;
}]);