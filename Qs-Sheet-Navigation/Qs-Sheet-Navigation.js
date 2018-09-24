/*!

* sense-navigation - Sense Sheet Navigation + Actions visualization extension for Qlik Sense.
* --
* @version v0.8.3
* @link https://github.com/stefanwalther/sense-navigation
* @author Stefan Walther
* @license MIT
*/

/*global define*/
define([
    'jquery',
    'underscore',
    'qlik',
    'angular',
    'core.utils/deferred',
    './lib/external/sense-extension-utils/extUtils',
    './properties',
    './initialproperties',
  'text!./lib/css/main.css',
    'text!./mytemplate.ng.html'
  ],
  function ($, _, qlik, angular, Deferred, extUtils, props, initProps, cssContent, ngTemplate) {
    'use strict';

 extUtils.addStyleToHeader(cssContent);
    var faUrl = extUtils.getBasePath() + '/extensions/Qs-Sheet-Navigation/lib/external/fontawesome/css/font-awesome.min.css';
    extUtils.addStyleLinkToHeader(faUrl, 'Qs-Sheet-Navigation__fontawesome');

    // Helper function to split numbers.
    function splitToStringNum(str, sep) {
      var a = str.split(sep);
      for (var i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
          a[i] = Number(a[i]);
        }
      }
      return a;
    }

    function fixUrl(url) {
      if (url.startsWith('http://') || url.startsWith('https://') || (url.startsWith('mailto://'))) {
        return url;
      }
      return 'http://' + url;
    }

    return {

      definition: props,
      support: {
        export: false,
        exportData: false,
        snapshot: false
      },
      initialProperties: initProps,
      snapshot: {canTakeSnapshot: false},
      template: ngTemplate,
      controller: [
        '$scope', '$element', function ($scope, $element) {

          // Note: getPreferredSize is an undocumented method and not supported right now.
          // this.getPreferredSize = function () {
          //  var $btn = this.$element.find('.btn');
          //  var size = {
          //    w: $btn.width(),
          //    h: $btn.height() + 7
          //  };
          //  var df = Deferred();
          //    df.resolve( size );
          //  return df.promise;
          // };

          $scope.alignmentStyle = '{text-align: ' + $scope.align + ';}';
          $scope.doNavigate = function () {

            switch ($scope.layout.props.action) {
             
              case "gotoSheet":
                $scope.gotoSheet($scope.layout.props.selectedSheet);

                break;
             
              default:
                break;
            }
          };


           $scope.doNavigate1 = function () {

            switch ($scope.layout.props.action) {
             
              case "gotoSheet":
                

                 $scope.gotoSheet($scope.layout.props.selectedSheet1);
                
                break;
             
              default:
                break;
            }
          };

           $scope.doNavigate2 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet2);
                break;
             
              default:
                break;
            }
          };


            $scope.doNavigate3 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet3);
                break;
             
              default:
                break;
            }
          };


            $scope.doNavigate4 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet4);
                break;
             
              default:
                break;
            }
          };


            $scope.doNavigate5 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet5);
                break;
             
              default:
                break;
            }
          };


            $scope.doNavigate6 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet6);
                break;
             
              default:
                break;
            }
          };


            $scope.doNavigate7 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet7);
                break;
             
              default:
                break;
            }
          };

            $scope.doNavigate8 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet8);
                break;
             
              default:
                break;
            }
          };

            $scope.doNavigate9 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet9);
                break;
             
              default:
                break;
            }
          };
		  
		    $scope.doNavigate10 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet10);
                break;
             
              default:
                break;
            }
          };
		  
		  
		    $scope.doNavigate11 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet11);
                break;
             
              default:
                break;
            }
          };
		  
		  $scope.doNavigate12 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet12);
                break;
             
              default:
                break;
            }
          };
		  
		   $scope.doNavigate13 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet13);
                break;
             
              default:
                break;
            }
          };
		  
		  
		   $scope.doNavigate14 = function () {

            switch ($scope.layout.props.action) {
            
              case "gotoSheet":
     
                  $scope.gotoSheet($scope.layout.props.selectedSheet14);
                break;
             
              default:
                break;
            }
          };
		  
		  
		

		  
		  
		  
          $scope.isEditMode = function () {
            return $scope.$parent.$parent.editmode;
          };
          $scope.doAction = function () {

            if (!$scope.layout.props.isActionsBefore) {
              return;
            }

            var app = qlik.currApp();

            var fld = null;
            var val = null;
            var softlock = null;

            for (var i = 1; i <= 2; i++) {

              fld = $scope.layout.props['field' + i];
              val = $scope.layout.props['value' + i];
              softlock = $scope.layout.props['softlock' + i];

              switch ($scope.layout.props['actionBefore' + i]) {
                case "clearAll":
                  app.clearAll();
                  break;
                case "lockAll":
                  app.lockAll();
                  break;
                case "unlockAll":
                  app.unlockAll();
                  break;
                case "clearField":
                  if (!_.isEmpty(fld)) {
                    app.field(fld).clear();
                  }
                  break;
                case "selectAlternative":
                  console.log('selectAlternative', fld, softlock);
                  if (!_.isEmpty(fld)) {
                    app.field(fld).selectAlternative(softlock);
                  }
                  break;
                case "selectExcluded":
                  console.log('selectExcluded', fld, softlock);
                  if (!_.isEmpty(fld)) {
                    app.field(fld).selectExcluded(softlock);
                  }
                  break;
                case "selectField":
                  if (!_.isEmpty(fld) && (!_.isEmpty(val))) {
                    app.field(fld).selectMatch(val, false);
                  }
                  break;
                case "selectValues":
                  if (!_.isEmpty(fld) && (!_.isEmpty(val))) {
                    var vals = splitToStringNum(val, ';');
                    app.field(fld).selectValues(vals, false);
                  }
                  break;
                case "selectandLockField":
                  if (!_.isEmpty(fld) && (!_.isEmpty(val))) {
                    app.field(fld).selectMatch(val, true);
                    app.field(fld).lock()
                  }
                  break;
                case "lockField":
                  if (!_.isEmpty(fld)) {
                    app.field(fld).lock()
                  }
                  break;
                case "applyBookmark":
                  if (!_.isEmpty($scope.layout.props['bookmark' + i])) {
                    app.bookmark.apply($scope.layout.props['bookmark' + i]);
                  }
                  break;
                case "setVariable":
                  if (!_.isEmpty($scope.layout.props['variable' + i])) {
                    $scope.setVariableContent($scope.layout.props['variable' + i], val);
                  }
                  break;
                default:
                  break;
              }
            }

          };

          $scope.go = function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate();
            }
          };


          $scope.go1 = function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate1();
            }
          };


          $scope.go2 = function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate2();
            }
          };



          $scope.go3 = function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate3();
            }
          };


          $scope.go4= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate4();
            }
          };



          $scope.go5 = function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate5();
            }
          };


          $scope.go6= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate6();
            }
          };


          $scope.go7 = function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate7();
            }
          };


          $scope.go8= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate8();
            }
          };

          $scope.go9= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate9();
            }
          };
		  
		   $scope.go10= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate10();
            }
          };
		  
		  $scope.go11= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate11();
            }
          };
		  
		  $scope.go12= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate12();
            }
          };
		  
		  $scope.go13= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate13();
            }
          };
		  
		  $scope.go14= function () {
            if (!$scope.isEditMode()) {
              $scope.doAction();
              $scope.doNavigate14();
            }
          };
		  
		  
		  
		  


          $scope.gotoSheet = function (sheetId) {
            if ($scope.checkQlikNavigation() && !_.isEmpty(sheetId)) {
              qlik.navigation.gotoSheet(sheetId);
            }
          };

          $scope.gotoStory = function (storyId) {
            if ($scope.checkQlikNavigation() && !_.isEmpty(storyId)) {
              qlik.navigation.gotoStory(storyId);
            }
          };

          $scope.setVariableContent = function (variableName, variableValue) {
            var app = qlik.currApp();
            app.variable.setContent(variableName, variableValue)
              .then(function (/*reply*/) {
                angular.noop();
              });
          };

          $scope.checkQlikNavigation = function () {
            if (!qlik.navigation) {
              window.console.error('Capability API qlik.navigation is not supported in the current version of Qlik Sense');
              return false;
            }
            return true;
          }

        }
      ]
    };

  });
