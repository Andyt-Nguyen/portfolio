PortfolioApp.controller('AboutController', function($scope) {

	$scope.hideLinesB = false;
	$scope.showLinesB = () => {
		$scope.hideLinesB = !$scope.hideLinesB;
	};

	$scope.hideLinesA = false;
	$scope.showLinesA = () => {
		$scope.hideLinesA = !$scope.hideLinesA;
	}

	$scope.hideLinesP = false;
	$scope.showLinesP = () => {
		$scope.hideLinesP = !$scope.hideLinesP;
	};

	$scope.hideLinesS = false;
	$scope.showLinesS = () => {
		$scope.hideLinesS = !$scope.hideLinesS;
	};
});
