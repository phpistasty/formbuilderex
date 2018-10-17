angular
  .module("myApp.builder", ["ui.bootstrap", "ui.select", "formio", "ngFormBuilder"])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/builder', {
      templateUrl: 'builder/builder.html',
      controller: 'builderCtrl'
    });
  }])
  .controller('builderCtrl', [function() {
  
  }])
  .run([
    "$rootScope",
    'formioComponents',
    '$timeout',
    function(
      $rootScope,
      formioComponents,
      $timeout
    ) {
      $rootScope.displays = [{
        name: 'form',
        title: 'Form'
      }, {
        name: 'wizard',
        title: 'Wizard'
      }];
      
      $rootScope.form = {
      components: [{
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "First Name",
        "key": "firstName",
        "placeholder": "Enter your first name",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": false,
          "when": null,
          "eq": ""
        },
        "type": "textfield"
      }, {
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Last Name",
        "key": "lastName",
        "placeholder": "Enter your last name",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": false,
          "when": null,
          "eq": ""
        },
        "type": "textfield"
      }, {
        "input": true,
        "tableView": true,
        "label": "Message",
        "key": "message",
        "placeholder": "What do you think?",
        "prefix": "",
        "suffix": "",
        "rows": 3,
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "persistent": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": ""
        },
        "type": "textarea",
        "conditional": {
          "show": false,
          "when": null,
          "eq": ""
        }
      }, {
        type: 'button',
        theme: 'primary',
        disableOnInvalid: true,
        action: 'submit',
        block: false,
        rightIcon: '',
        leftIcon: '',
        size: 'md',
        key: 'submit',
        tableView: false,
        label: 'Submit',
        input: true
      }],
        display: 'form'
      };
      
      $rootScope.renderForm = true;
      $rootScope.$on('formUpdate', function(event, form) {
        angular.merge($rootScope.form, form);
        $rootScope.renderForm = false;
        setTimeout(function() {
          $rootScope.renderForm = true;
        }, 10);
      });
      
      
    }
  ]);