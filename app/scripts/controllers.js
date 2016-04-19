/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Ronnie O Sullivan';
    this.initials = (this.userName).replace(/\W*(\w)\w*/g, '$1').toUpperCase();
    this.helloText = 'Welcome to Faclon Insights';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)