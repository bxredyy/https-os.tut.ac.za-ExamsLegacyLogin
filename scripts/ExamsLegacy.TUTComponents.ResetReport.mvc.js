define("ExamsLegacy.TUTComponents.ResetReport.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model"], function (OutSystems, ExamsLegacyModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [].concat(_super.attributesToDeclare.call(this));
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
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    return false;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    };
    return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "TUTComponents.ResetReport");
    });
    define("ExamsLegacy.TUTComponents.ResetReport.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTComponents.ResetReport.mvc$model", "ExamsLegacy.TUTComponents.ResetReport.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_TUTComponents_ResetReport_mvc_model, ExamsLegacy_TUTComponents_ResetReport_mvc_controller, ExamsLegacyClientVariables, OSWidgets) {
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
            View.displayName = "TUTComponents.ResetReport";
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
                    return ExamsLegacy_TUTComponents_ResetReport_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_ResetReport_mvc_controller;
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
    animate: false,
    extendedProperties: {
    style: "padding: 5px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "You are currently viewing the outcomes for a specified report. To view the live results that students can currently see, ", React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    marginLeft: "0px"
    },
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.clickHereOnClick$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "click here"))));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTComponents.ResetReport.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._clickHereOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("ClickHereOnClick");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: Reset
    return controller.reset$Action(callContext);
    });
    };
    
    Controller.prototype.clickHereOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._clickHereOnClick$Action, callContext);
    
    };
    Controller.prototype.reset$Action = function () {
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
    
    