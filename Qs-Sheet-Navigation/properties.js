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
  './lib/external/sense-extension-utils/extUtils',
  'ng!$q',
  'ng!$http'
], function ($, _, qlik, extUtils, $q, $http) {

  var app = qlik.currApp();


  var getSheetList = function () {

    var defer = $q.defer();

    app.getAppObjectList(function (data) {
      var sheets = [];
      var sortedData = _.sortBy(data.qAppObjectList.qItems, function (item) {
        return item.qData.rank;
      });
      _.each(sortedData, function (item) {
        sheets.push({
          value: item.qInfo.qId,
          label: item.qMeta.title
        });
      });
      return defer.resolve(sheets);
    });

    return defer.promise;
  };




  var getIcons = function () {
    var defer = $q.defer();

    $http.get(extUtils.getExtensionPath('PX_Navigation') + '/lib/data/icons-fa.json')
      .then(function (res) {

        var sortedIcons = _.sortBy(res.data.icons, function (o) {
          return o.name;
        });

        var propDef = [];
        propDef.push({
          "value": "",
          "label": ">> No icon <<"
        });

        sortedIcons.forEach(function (icon) {
          propDef.push(
            {
              "value": icon.id,
              "label": icon.name
            }
          )
        });
        defer.resolve(propDef);

      });

    return defer.promise;
  };

  // ****************************************************************************************
  // Layout
  // ****************************************************************************************
  var style = {
     type: "string",
   // component: "dropdown",
    ref: "props.buttonStyle",
    label: "Backgrounnd-color",
    expression:"optional",
    defaultValue: "#cccccc "

  };

  var color = {
     type: "string",
   // component: "dropdown",
    ref: "propscolor",
    label: "Text-color",
    expression:"optional",
    defaultValue: "#333333 "

  };

   var width = {
     type: "string",
   // component: "dropdown",
    ref: "proswidth",
    label: "width",
    expression:"optional",
    defaultValue: "150"

  };

   var height = {
     type: "string",
   // component: "dropdown",
    ref: "prosheight",
    label: "height",
    expression:"optional",
    defaultValue: "20"

  };

    var btn_width = {
     type: "string",
   // component: "dropdown",
    ref: "btn_width",
    label: "sheet button width",
    expression:"optional",
    defaultValue: "150"

  };

   var btn_height = {
     type: "string",
   // component: "dropdown",
    ref: "btn_height",
    label: "sheet button height",
    expression:"optional",
    defaultValue: "20"

  };


    var fsize = {
     type: "string",
   // component: "dropdown",
    ref: "fontS",
    label: "Font Size",
    expression:"optional",
    defaultValue: "13"

  };


  var buttonIcon = {
    type: "string",
    component: "dropdown",
    label: "Icon",
    ref: "props.buttonIcon",
    options: function () {
      return getIcons().then(function (items) {
        return items;
      });
    }
  };

  var buttonAlign = {
    ref: "props.buttonAlign",
    label: "Alignment",
    type: "string",
    component: "dropdown",
    defaultValue: "left",
    options: [
      {
        value: "center",
        label: "Center"
      },
      {
        value: "left",
        label: "Left"
      },
      {
        value: "right",
        label: "Right"
      }
    ],
    show: function (data) {
      return data.props.fullWidth === false;
    }
  };



 

  // ****************************************************************************************
  // Behavior
  // ****************************************************************************************
  var action = {
    ref: "props.action",
    label: "Navigation Action",
    type: "string",
    component: "dropdown",
    default: "nextSheet",
    options: [
      {
        value: "none",
        label: "None"
      },
      
      {
        value: "gotoSheet",
        label: "Go to a specific sheet"
      },
     
    ]
  };
  var sheetList = {
    type: "string",
    component: "dropdown",
    label: "Select button1 Sheet",
    ref: "props.selectedSheet",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };

   var sheetList1 = {
    type: "string",
    component: "dropdown",
    label: "Select button2 Sheet",
    ref: "props.selectedSheet1",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };


   var sheetList2 = {
    type: "string",
    component: "dropdown",
    label: "Select button3 Sheet",
    ref: "props.selectedSheet2",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };


   var sheetList3 = {
    type: "string",
    component: "dropdown",
    label: "Select button4 Sheet",
    ref: "props.selectedSheet3",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };


   var sheetList4= {
    type: "string",
    component: "dropdown",
    label: "Select button5 Sheet",
    ref: "props.selectedSheet4",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };



   var sheetList5 = {
    type: "string",
    component: "dropdown",
    label: "Select button6 Sheet",
    ref: "props.selectedSheet5",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };



   var sheetList6= {
    type: "string",
    component: "dropdown",
    label: "Select button7 Sheet",
    ref: "props.selectedSheet6",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };



   var sheetList7 = {
    type: "string",
    component: "dropdown",
    label: "Select button8 Sheet",
    ref: "props.selectedSheet7",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };



   var sheetList8 = {
    type: "string",
    component: "dropdown",
    label: "Select button9 Sheet",
    ref: "props.selectedSheet8",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };



   var sheetList9 = {
    type: "string",
    component: "dropdown",
    label: "Select button10 Sheet",
    ref: "props.selectedSheet9",
    options: function () {
      return getSheetList().then(function (items) {
        return items;
      });
    },
    show: function (data) {
      return data.props.action === 'gotoSheet';
    }
  };




 var buttonLabel1= {
    ref: "props.buttonLabel1",
    label: "Label1",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };


 var buttonLabel2= {
    ref: "props.buttonLabel2",
    label: "Label2",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };


 var buttonLabel3= {
    ref: "props.buttonLabel3",
    label: "Label3",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };


 var buttonLabel4= {
    ref: "props.buttonLabel4",
    label: "Label4",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };

   var buttonLabel5= {
    ref: "props.buttonLabel5",
    label: "Label5",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };


 var buttonLabel6= {
    ref: "props.buttonLabel6",
    label: "Label6",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };

   var buttonLabel7= {
    ref: "props.buttonLabel7",
    label: "Label7",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };


 var buttonLabel8= {
    ref: "props.buttonLabel8",
    label: "Label8",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };

 var buttonLabel9= {
    ref: "props.buttonLabel9",
    label: "Label9",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };

 var buttonLabel10= {
    ref: "props.buttonLabel10",
    label: "Label10",
    type: "string",
    expression: "optional",
    show: function () {
      return true;
    },
    defaultValue: "My Button"
  };

  var navigation_color = {
     type: "string",
    ref: "prop.colorj",
    label: "navigation button color",
    expression:"optional",
    defaultValue: "#777777 "

  };






  var visible1 = {
     type: "string",
    ref: "prop.visiblea",
    label: "visibility button1(* visible or hidden)",
    defaultValue: "visible"

  };


  var visible2 = {
     type: "string",
    ref: "prop.visibleb",
    label: "visibility button2",
  
    defaultValue: "visible"

  };


  var visible3= {
     type: "string",
    ref: "prop.visiblec",
    label: "visibility button3",
  
    defaultValue: "visible"

  };


  var visible4 = {
     type: "string",
    ref: "prop.visibled",
    label: "visibility button4",
   
    defaultValue: "visible"

  };


  var visible5 = {
     type: "string",
    ref: "prop.visiblee",
    label: "visibility button5",
   
    defaultValue: "visible"

  };

    var visible6 = {
     type: "string",
    ref: "prop.visiblef",
    label: "visibility button6",

    defaultValue: "visible"

  };


    var visible7 = {
     type: "string",
    ref: "prop.visibleg",
    label: "visibility button7",
   
    defaultValue: "visible"

  };




    var visible8 = {
     type: "string",
    ref: "prop.visibleh",
    label: "visibility button8",
   
    defaultValue: "visible"

  };




    var visible9 = {
     type: "string",
    ref: "prop.visiblei",
    label: "visibility button9",
   
    defaultValue: "visible"

  };



    var visible10= {
     type: "string",
    ref: "prop.visiblej",
    label: "visibility button10",
    
    defaultValue: "visible"

  };

var navsheet_width={

    type: "string",
   // component: "dropdown",
    ref: "prop.navwidth",
    label: "width",
    expression:"optional",
    defaultValue: "250"

}

var navsheet_color={

  type: "string",
   // component: "dropdown",
    ref: "props.buttonStylea",
    label: "Backgrounnd-color",
    expression:"optional",
    defaultValue: "#cccccc "

};













































  // ****************************************************************************************
  // Setup
  // ****************************************************************************************
  var settings = {
    uses: "settings",
    items: {
      general: {
        items: {
          showTitles: {
            defaultValue: false
          }
        }
      },
      layout: {
        type: "items",
        label: "Layout",
        items: {
          
          style: style,
          btn_width:btn_width,
          btn_height:btn_height,
          navigation_color: navigation_color,

          color:color,
          
          align: buttonAlign,
         
          icons: buttonIcon,
          width: width,
          height : height,
          fsize: fsize
        }
      },

      Visibility: {
        type: "items",
        label: "Visibility of Buttons",
        items: {
         visible1:visible1,

          visible2:visible2,
           visible3:visible3,

            visible4:visible4,
           visible5:visible5,

            visible6:visible6,
           visible7:visible7,

            visible8:visible8,
           visible9:visible9,
             visible10:visible10,
           
        }
      },
      behavior: {
        type: "items",
        label: "Navigation Behavior",
        items: {
          action: action,
          
          sheetList: sheetList,
          sheetList1: sheetList1,
          sheetList2: sheetList2,

          sheetList3: sheetList3,
          sheetList4: sheetList4,
          sheetList5: sheetList5,

          sheetList6: sheetList6,
          sheetList7: sheetList7,
          sheetList8: sheetList8,
          sheetList9: sheetList9
        
         
        }
      },

       behavior1: {

         type: "items",
        label: "button labels",
         items: {

            buttonLabel1:buttonLabel1,
            buttonLabel2:buttonLabel2,
            buttonLabel3:buttonLabel3,
            buttonLabel4:buttonLabel4,

            buttonLabel5:buttonLabel5,
            buttonLabel6:buttonLabel6,
            buttonLabel7:buttonLabel7,

            buttonLabel8:buttonLabel8,
            buttonLabel9:buttonLabel9,
            buttonLabel10:buttonLabel10,
            

         }
},


       Navsheet: {

         type: "items",
        label: "Navsheet Style",
         items: {

        navsheet_width: navsheet_width,
       navsheet_color: navsheet_color
            

         }
},



 }

  };

  var panelDefinition = {
    type: "items",
    component: "accordion",
    items: {
      settings: settings
    }
  };


  return panelDefinition;



});
