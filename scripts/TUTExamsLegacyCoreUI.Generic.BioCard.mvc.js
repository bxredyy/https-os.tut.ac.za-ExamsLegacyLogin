define("TUTExamsLegacyCoreUI.Generic.BioCard.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.Content.CardItem.mvc$model", "TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordList"], function (OutSystems, TUTExamsLegacyCoreUIModel, OutSystemsUI_Content_CardItem_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("StudentBio", "studentBioIn", "StudentBio", true, false, OS.Types.RecordList, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyCoreUIModel.StudentBioDetail_RecordList());
    }, false, TUTExamsLegacyCoreUIModel.StudentBioDetail_RecordList), 
    this.attr("_studentBioInDataFetchStatus", "_studentBioInDataFetchStatus", "_studentBioInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("IsDataFetched", "isDataFetchedIn", "IsDataFetched", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_isDataFetchedInDataFetchStatus", "_isDataFetchedInDataFetchStatus", "_isDataFetchedInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false)
    ].concat(_super.attributesToDeclare.call(this));
    };
    VariablesRecord.init();
    return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function (_super) {
    __extends(WidgetsRecord, _super);
    function WidgetsRecord() {
    _super.apply(this, arguments);
    }
    WidgetsRecord.getWidgetsType = function () {
    return {};
    };
    
    return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function (_super) {
    __extends(Model, _super);
    function Model() {
    _super.apply(this, arguments);
    }
    Model.getVariablesRecordConstructor = function () {
    return VariablesRecord;
    };
    Model.getWidgetsRecordConstructor = function () {
    return WidgetsRecord;
    };
    Model._hasValidationWidgetsValue = undefined;
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    if((Model._hasValidationWidgetsValue === undefined)) {
    Model._hasValidationWidgetsValue = OutSystemsUI_Content_CardItem_mvcModel.hasValidationWidgets;
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("StudentBio" in inputs) {
    this.variables.studentBioIn = inputs.StudentBio;
    if("_studentBioInDataFetchStatus" in inputs) {
    this.variables._studentBioInDataFetchStatus = inputs._studentBioInDataFetchStatus;
    }
    
    }
    
    if("IsDataFetched" in inputs) {
    this.variables.isDataFetchedIn = inputs.IsDataFetched;
    if("_isDataFetchedInDataFetchStatus" in inputs) {
    this.variables._isDataFetchedInDataFetchStatus = inputs._isDataFetchedInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Generic.BioCard");
    });
    define("TUTExamsLegacyCoreUI.Generic.BioCard.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "react", "OutSystems/ReactView/Main", "TUTExamsLegacyCoreUI.Generic.BioCard.mvc$model", "TUTExamsLegacyCoreUI.Generic.BioCard.mvc$controller", "TUTExamsLegacyCoreUI.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Content.CardItem.mvc$view", "TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordList"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, React, OSView, TUTExamsLegacyCoreUI_Generic_BioCard_mvc_model, TUTExamsLegacyCoreUI_Generic_BioCard_mvc_controller, TUTExamsLegacyCoreUIClientVariables, OSWidgets, OutSystemsUI_Content_CardItem_mvc_view) {
        var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    
    
        var View = (function (_super) {
            __extends(View,_super);
            function View() {
                try {
                    this.initialize.apply(this, arguments);
                } catch (error) {
                    View.handleError(error);
                    throw error;
                }
            }
            View.prototype.initialize = function() {
                _super.apply(this, arguments);
            };
            View.displayName = "Generic.BioCard";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Content_CardItem_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Generic_BioCard_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Generic_BioCard_mvc_controller;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "title", {
                get: function () {
                    return "";
                },
                enumerable: true,
                configurable: true
            });
            View.prototype.internalRender = function() {
                var model = this.model;
                var controller = this.controller;
                var idService = this.idService;
                var validationService = controller.validationService;
                var widgetsRecordProvider = this.widgetsRecordProvider;
                var callContext = controller.callContext();
                var $if = View.ifWidget;
                var $text = View.textWidget;
                var asPrimitiveValue = View.asPrimitiveValue;
                var getTranslation = View.getTranslation;
                var _this = this;
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    style: "DropShadow",
    visible: model.variables.isDataFetchedIn,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDataFetchedInDataFetchStatus)
    }, React.createElement(OutSystemsUI_Content_CardItem_mvc_view, {
    inputs: {},
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    uuid: "1",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    left: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "align-items: center; background-color: #d0d0d0; border-radius: 50px; display: flex; height: 80px; justify-content: center;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "80px"
    },
    style: "ShowAvatar",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "height: 56px; margin: 0;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "44px"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Icon, {
    icon: "user",
    iconSize: /*Fourtimes*/ 3,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })))];
    }),
    title: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Expression, {
    gridProperties: {
    marginLeft: "0px"
    },
    value: (model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdInitialsAttr + " "),
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._studentBioInDataFetchStatus)
    }), React.createElement(OSWidgets.Expression, {
    gridProperties: {
    marginLeft: "0px"
    },
    value: model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdSurnameAttr,
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._studentBioInDataFetchStatus)
    })];
    }),
    content: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Text, {
    extendedProperties: {
    style: "font-weight: bold;"
    },
    text: ["Student Number: "],
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Expression, {
    gridProperties: {
    marginLeft: "0px"
    },
    value: OS.BuiltinFunctions.longIntegerToText(model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdNumAttr),
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._studentBioInDataFetchStatus)
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Text, {
    extendedProperties: {
    style: "font-weight: bold;"
    },
    text: ["Email: "],
    _idProps: {
    service: idService,
    uuid: "11"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Expression, {
    gridProperties: {
    marginLeft: "0px"
    },
    value: model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdEmailAttr,
    _idProps: {
    service: idService,
    uuid: "12"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._studentBioInDataFetchStatus)
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "13"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Text, {
    extendedProperties: {
    style: "font-weight: bold;"
    },
    text: ["Cellphone: "],
    _idProps: {
    service: idService,
    uuid: "14"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Expression, {
    gridProperties: {
    marginLeft: "0px"
    },
    value: model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdCellphoneAttr,
    _idProps: {
    service: idService,
    uuid: "15"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._studentBioInDataFetchStatus)
    }))];
    }),
    right: PlaceholderContent.Empty
    },
    _dependencies: [asPrimitiveValue(model.variables._studentBioInDataFetchStatus), asPrimitiveValue(model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdCellphoneAttr), asPrimitiveValue(model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdEmailAttr), asPrimitiveValue(model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdNumAttr), asPrimitiveValue(model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdSurnameAttr), asPrimitiveValue(model.variables.studentBioIn.getCurrent(callContext.iterationContext).stdInitialsAttr)]
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTExamsLegacyCoreUI.Generic.BioCard.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyCoreUI.languageResources", "TUTExamsLegacyCoreUI.clientVariables", "TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordList"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyCoreUILanguageResources, TUTExamsLegacyCoreUIClientVariables) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = null;
    Controller.prototype.handleError = function (ex) {
    return controller.handleError(ex);
    };
    Controller.checkPermissions = function () {
    };
    Controller.prototype.getDefaultTimeout = function () {
    return TUTExamsLegacyCoreUIController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, TUTExamsLegacyCoreUILanguageResources);
    });
    
    