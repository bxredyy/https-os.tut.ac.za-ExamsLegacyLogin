define("ExamsLegacy.TUTLayouts.StandardLayout.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.Content.Alert.mvc$model", "ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$model", "ExamsLegacy.TUTComponents.GlobalAccessCard.mvc$model"], function (OutSystems, ExamsLegacyModel, OutSystemsUI_Content_Alert_mvcModel, ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvcModel, ExamsLegacy_TUTComponents_GlobalAccessCard_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("IsStudent", "isStudentIn", "IsStudent", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_isStudentInDataFetchStatus", "_isStudentInDataFetchStatus", "_isStudentInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("IsDataFetched", "isDataFetchedIn", "IsDataFetched", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_isDataFetchedInDataFetchStatus", "_isDataFetchedInDataFetchStatus", "_isDataFetchedInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("CSSForMaxWidth", "cSSForMaxWidthIn", "CSSForMaxWidth", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_cSSForMaxWidthInDataFetchStatus", "_cSSForMaxWidthInDataFetchStatus", "_cSSForMaxWidthInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("InGlobalAccessAllowed", "inGlobalAccessAllowedIn", "InGlobalAccessAllowed", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_inGlobalAccessAllowedInDataFetchStatus", "_inGlobalAccessAllowedInDataFetchStatus", "_inGlobalAccessAllowedInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("InGlobalAccessMessage", "inGlobalAccessMessageIn", "InGlobalAccessMessage", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_inGlobalAccessMessageInDataFetchStatus", "_inGlobalAccessMessageInDataFetchStatus", "_inGlobalAccessMessageInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("InAdmType", "inAdmTypeIn", "InAdmType", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_inAdmTypeInDataFetchStatus", "_inAdmTypeInDataFetchStatus", "_inAdmTypeInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Model._hasValidationWidgetsValue = ((OutSystemsUI_Content_Alert_mvcModel.hasValidationWidgets || ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvcModel.hasValidationWidgets) || ExamsLegacy_TUTComponents_GlobalAccessCard_mvcModel.hasValidationWidgets);
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("IsStudent" in inputs) {
    this.variables.isStudentIn = inputs.IsStudent;
    if("_isStudentInDataFetchStatus" in inputs) {
    this.variables._isStudentInDataFetchStatus = inputs._isStudentInDataFetchStatus;
    }
    
    }
    
    if("IsDataFetched" in inputs) {
    this.variables.isDataFetchedIn = inputs.IsDataFetched;
    if("_isDataFetchedInDataFetchStatus" in inputs) {
    this.variables._isDataFetchedInDataFetchStatus = inputs._isDataFetchedInDataFetchStatus;
    }
    
    }
    
    if("CSSForMaxWidth" in inputs) {
    this.variables.cSSForMaxWidthIn = inputs.CSSForMaxWidth;
    if("_cSSForMaxWidthInDataFetchStatus" in inputs) {
    this.variables._cSSForMaxWidthInDataFetchStatus = inputs._cSSForMaxWidthInDataFetchStatus;
    }
    
    }
    
    if("InGlobalAccessAllowed" in inputs) {
    this.variables.inGlobalAccessAllowedIn = inputs.InGlobalAccessAllowed;
    if("_inGlobalAccessAllowedInDataFetchStatus" in inputs) {
    this.variables._inGlobalAccessAllowedInDataFetchStatus = inputs._inGlobalAccessAllowedInDataFetchStatus;
    }
    
    }
    
    if("InGlobalAccessMessage" in inputs) {
    this.variables.inGlobalAccessMessageIn = inputs.InGlobalAccessMessage;
    if("_inGlobalAccessMessageInDataFetchStatus" in inputs) {
    this.variables._inGlobalAccessMessageInDataFetchStatus = inputs._inGlobalAccessMessageInDataFetchStatus;
    }
    
    }
    
    if("InAdmType" in inputs) {
    this.variables.inAdmTypeIn = inputs.InAdmType;
    if("_inAdmTypeInDataFetchStatus" in inputs) {
    this.variables._inAdmTypeInDataFetchStatus = inputs._inAdmTypeInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTLayouts.StandardLayout");
    });
    define("ExamsLegacy.TUTLayouts.StandardLayout.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTLayouts.StandardLayout.mvc$model", "ExamsLegacy.TUTLayouts.StandardLayout.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Content.Alert.mvc$view", "ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$view", "ExamsLegacy.TUTComponents.GlobalAccessCard.mvc$view"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_TUTLayouts_StandardLayout_mvc_model, ExamsLegacy_TUTLayouts_StandardLayout_mvc_controller, ExamsLegacyClientVariables, OSWidgets, OutSystemsUI_Content_Alert_mvc_view, ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_view, ExamsLegacy_TUTComponents_GlobalAccessCard_mvc_view) {
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
            View.displayName = "TUTLayouts.StandardLayout";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Content_Alert_mvc_view, ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_view, ExamsLegacy_TUTComponents_GlobalAccessCard_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_StandardLayout_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_StandardLayout_mvc_controller;
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
    extendedProperties: {
    style: "text-align: center;"
    },
    style: "DarkDropShadow",
    visible: ((model.variables.isDataFetchedIn && !(model.variables.inGlobalAccessAllowedIn)) && (model.variables.inAdmTypeIn === "A")),
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDataFetchedInDataFetchStatus, model.variables._inGlobalAccessAllowedInDataFetchStatus, model.variables._inAdmTypeInDataFetchStatus)
    }, React.createElement(OutSystemsUI_Content_Alert_mvc_view, {
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
    messageText: new PlaceholderContent(function () {
    return ["Students are currently prevented from accessing this site via Global Settings on the Admin Portal. "];
    })
    },
    _dependencies: []
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    extendedProperties: {
    style: "text-align: center;"
    },
    visible: (model.variables.inGlobalAccessAllowedIn || (model.variables.inAdmTypeIn === "A")),
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inGlobalAccessAllowedInDataFetchStatus, model.variables._inAdmTypeInDataFetchStatus)
    }, $if(model.variables.isStudentIn, false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    extendedProperties: {
    style: model.variables.cSSForMaxWidthIn
    },
    style: "StandardCenterBox",
    visible: model.variables.isDataFetchedIn,
    _idProps: {
    service: idService,
    name: "cMainContainer"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDataFetchedInDataFetchStatus)
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phContent,
    _idProps: {
    service: idService,
    name: "phContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    }, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "max-width: 600px; text-align: left;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_view, {
    inputs: {},
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    },
    loadStudent$Action: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.errorNotAStudentCardLoadStudent$Action(controller.callContext(eventHandlerContext));
    });
    ;
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    uuid: "6",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }))];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    visible: (model.variables.isDataFetchedIn && (!(model.variables.inGlobalAccessAllowedIn) && ((model.variables.inAdmTypeIn) !== ("A")))),
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDataFetchedInDataFetchStatus, model.variables._inGlobalAccessAllowedInDataFetchStatus, model.variables._inAdmTypeInDataFetchStatus)
    }, React.createElement(ExamsLegacy_TUTComponents_GlobalAccessCard_mvc_view, {
    inputs: {
    Message: model.variables.inGlobalAccessMessageIn,
    _messageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inGlobalAccessMessageInDataFetchStatus)
    },
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
    uuid: "8",
    alias: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTLayouts.StandardLayout.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = true;
    }
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._errorNotAStudentCardLoadStudent$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("ErrorNotAStudentCardLoadStudent");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: LoadStudent
    return controller.loadStudent$Action(callContext);
    });
    };
    
    Controller.prototype.errorNotAStudentCardLoadStudent$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._errorNotAStudentCardLoadStudent$Action, callContext);
    
    };
    Controller.prototype.loadStudent$Action = function () {
    return Promise.resolve();
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
    return ExamsLegacyController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, ExamsLegacyLanguageResources);
    });
    
    