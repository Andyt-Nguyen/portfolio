let PortfolioApp = angular.module('PortfolioApp', ['ui.router']);

PortfolioApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/about');

    $stateProvider
      .state('about', {
          url: '/about',
          templateUrl: './views/about.html',
					controller:"AboutController"
      })

			.state('projects', {
					url: '/projects',
					templateUrl: './views/projects.html',
			})

			.state('contact', {
				url:'/contact',
				templateUrl:'./views/contact.html'
			})

});
