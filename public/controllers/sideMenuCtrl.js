PortfolioApp.controller('SideMenuCtrl', function($scope) {
	$scope.hideFolders = false;
	$scope.ctaFolders = () => {
		$scope.hideFolders = !$scope.hideFolders;
	}
});
