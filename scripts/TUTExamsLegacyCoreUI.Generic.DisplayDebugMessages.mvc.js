define("TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$Debug_recordList"], function (OutSystems, TUTExamsLegacyCoreUIModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("ShowDebugData", "showDebugDataVar", "ShowDebugData", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("DebugMode", "debugModeIn", "DebugMode", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_debugModeInDataFetchStatus", "_debugModeInDataFetchStatus", "_debugModeInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("DebugData", "debugDataIn", "DebugData", true, false, OS.Types.RecordList, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyCoreUIModel.Debug_recordList());
    }, false, TUTExamsLegacyCoreUIModel.Debug_recordList), 
    this.attr("_debugDataInDataFetchStatus", "_debugDataInDataFetchStatus", "_debugDataInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("DebugHeading", "debugHeadingIn", "DebugHeading", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_debugHeadingInDataFetchStatus", "_debugHeadingInDataFetchStatus", "_debugHeadingInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    return {
    TextArea_Message: OS.Model.ValidationWidgetRecord
    };
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
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    return true;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("DebugMode" in inputs) {
    this.variables.debugModeIn = inputs.DebugMode;
    if("_debugModeInDataFetchStatus" in inputs) {
    this.variables._debugModeInDataFetchStatus = inputs._debugModeInDataFetchStatus;
    }
    
    }
    
    if("DebugData" in inputs) {
    this.variables.debugDataIn = inputs.DebugData;
    if("_debugDataInDataFetchStatus" in inputs) {
    this.variables._debugDataInDataFetchStatus = inputs._debugDataInDataFetchStatus;
    }
    
    }
    
    if("DebugHeading" in inputs) {
    this.variables.debugHeadingIn = inputs.DebugHeading;
    if("_debugHeadingInDataFetchStatus" in inputs) {
    this.variables._debugHeadingInDataFetchStatus = inputs._debugHeadingInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Generic.DisplayDebugMessages");
    });
    define("TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "react", "OutSystems/ReactView/Main", "TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$model", "TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$controller", "TUTExamsLegacyCoreUI.clientVariables", "OutSystems/ReactWidgets/Main", "TUTExamsLegacyCoreUI.model$Debug_recordList"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, React, OSView, TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_model, TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_controller, TUTExamsLegacyCoreUIClientVariables, OSWidgets) {
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
            View.displayName = "Generic.DisplayDebugMessages";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.debugModeIn && !(model.variables.debugDataIn.isEmpty)), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-bottom: 10px; margin-top: 10px; padding: 10px;"
    },
    style: "DropShadow",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedEvents: {
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.onClick_Switch$Action(controller.callContext(eventHandlerContext));
    
    ;
    }
    },
    extendedProperties: {
    style: "border-radius: 5px; border-style: solid; border-width: 1px; padding: 4px;"
    },
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-right: 5px;"
    },
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(model.variables.showDebugDataVar, false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "minus-circle",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "plus-circle",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: model.getCachedValue(idService.getId("By8E9NVmfkCGvw6EA8ysQA.Value"), function () {
    return ("Debug Data" + (((model.variables.debugHeadingIn === "")) ? ("") : ((": " + model.variables.debugHeadingIn))));
    }, function () {
    return model.variables.debugHeadingIn;
    }),
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._debugHeadingInDataFetchStatus)
    }))), $if(model.variables.showDebugDataVar, false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.List, {
    animateItems: true,
    gridProperties: {
    classes: "OSFillParent"
    },
    mode: /*Default*/ 0,
    source: model.variables.debugDataIn,
    style: "list list-group",
    tag: "div",
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._debugDataInDataFetchStatus),
    placeholders: {
    content: new IteratorPlaceholderContent(function (idService, callContext) {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._debugDataInDataFetchStatus), asPrimitiveValue(model.variables.debugDataIn.getCurrent(callContext.iterationContext).messageAttr), asPrimitiveValue(model.variables.debugDataIn.getCurrent(callContext.iterationContext).headingAttr)]
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "font-weight: bold; margin-bottom: 8px; margin-top: 8px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: (model.variables.debugDataIn.getCurrent(callContext.iterationContext).headingAttr + ":"),
    _idProps: {
    service: idService,
    uuid: "11"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._debugDataInDataFetchStatus)
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "12"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.TextArea, {
    _validationProps: {
    validationService: validationService
    },
    enabled: true,
    gridProperties: {
    classes: "OSFillParent"
    },
    mandatory: false,
    maxLength: 5000,
    style: "form-control",
    textLines: 3,
    variable: model.createVariable(OS.Types.Text, model.variables.debugDataIn.getCurrent(callContext.iterationContext).messageAttr, function (value) {
    model.variables.debugDataIn.getCurrent(callContext.iterationContext).messageAttr = value;
    }),
    _idProps: {
    service: idService,
    name: "TextArea_Message"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._debugDataInDataFetchStatus)
    })))];
    }, callContext, idService, "1")
    },
    _dependencies: [asPrimitiveValue(model.variables._debugDataInDataFetchStatus)]
    }))];
    }, function () {
    return [];
    }))];
    }, function () {
    return [];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyCoreUI.languageResources", "TUTExamsLegacyCoreUI.clientVariables", "TUTExamsLegacyCoreUI.model$Debug_recordList"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyCoreUILanguageResources, TUTExamsLegacyCoreUIClientVariables) {
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
    Controller.prototype._onClick_Switch$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnClick_Switch");
    callContext = controller.callContext(callContext);
    // ShowDebugData = notShowDebugData
    model.variables.showDebugDataVar = !(model.variables.showDebugDataVar);
    };
    
    Controller.prototype.onClick_Switch$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onClick_Switch$Action, callContext);
    
    };
    
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
    
    