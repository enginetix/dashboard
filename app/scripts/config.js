/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main");


    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.devices', {
            url: "/devices",
            templateUrl: "views/devices.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.widgets', {
            url: "/widgets",
            templateUrl: "views/widgets.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.notifications', {
            url: "/notifications",
            templateUrl: "views/notifications.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.triggers', {
            url: "/triggers",
            templateUrl: "views/triggers.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.profile', {
            url: "/profile",
            templateUrl: "views/profile.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.usage', {
            url: "/usage",
            templateUrl: "views/usage.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.billing', {
            url: "/billing",
            templateUrl: "views/billing.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.help', {
            url: "/help",
            templateUrl: "views/help.html",
            data: { pageTitle: 'Example view' }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });