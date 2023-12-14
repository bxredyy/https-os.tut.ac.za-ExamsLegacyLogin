define("ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS"], function (OutSystems, ExamsLegacyModel, TUTExamsLegacyDefaults_CSModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("TargetAction", "targetActionIn", "TargetAction", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_targetActionInDataFetchStatus", "_targetActionInDataFetchStatus", "_targetActionInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("TargetHasFetchError", "targetHasFetchErrorIn", "TargetHasFetchError", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_targetHasFetchErrorInDataFetchStatus", "_targetHasFetchErrorInDataFetchStatus", "_targetHasFetchErrorInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("FailedAction", "failedActionIn", "FailedAction", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_failedActionInDataFetchStatus", "_failedActionInDataFetchStatus", "_failedActionInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ExecuteErrors", "executeErrorsIn", "ExecuteErrors", true, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec());
    }, false, TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec), 
    this.attr("_executeErrorsInDataFetchStatus", "_executeErrorsInDataFetchStatus", "_executeErrorsInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    return false;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("TargetAction" in inputs) {
    this.variables.targetActionIn = inputs.TargetAction;
    if("_targetActionInDataFetchStatus" in inputs) {
    this.variables._targetActionInDataFetchStatus = inputs._targetActionInDataFetchStatus;
    }
    
    }
    
    if("TargetHasFetchError" in inputs) {
    this.variables.targetHasFetchErrorIn = inputs.TargetHasFetchError;
    if("_targetHasFetchErrorInDataFetchStatus" in inputs) {
    this.variables._targetHasFetchErrorInDataFetchStatus = inputs._targetHasFetchErrorInDataFetchStatus;
    }
    
    }
    
    if("FailedAction" in inputs) {
    this.variables.failedActionIn = inputs.FailedAction;
    if("_failedActionInDataFetchStatus" in inputs) {
    this.variables._failedActionInDataFetchStatus = inputs._failedActionInDataFetchStatus;
    }
    
    }
    
    if("ExecuteErrors" in inputs) {
    this.variables.executeErrorsIn = inputs.ExecuteErrors;
    if("_executeErrorsInDataFetchStatus" in inputs) {
    this.variables._executeErrorsInDataFetchStatus = inputs._executeErrorsInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTComponents.ErrorBodyHelper");
    });
    define("ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "TUTExamsLegacyDefaults_CS.model", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$model", "ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, TUTExamsLegacyDefaults_CSModel, React, OSView, ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_model, ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_controller, ExamsLegacyClientVariables, OSWidgets) {
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
            View.displayName = "TUTComponents.ErrorBodyHelper";
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
                    return ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.targetActionIn === model.variables.failedActionIn), false, this, function () {
    return [$if((model.variables.targetHasFetchErrorIn || (model.variables.executeErrorsIn.codeAttr === 3001)), false, this, function () {
    return [React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phFetchRetryErrorMessage,
    _idProps: {
    service: idService,
    name: "phFetchRetryErrorMessage"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phGeneralErrorMessage,
    _idProps: {
    service: idService,
    name: "phGeneralErrorMessage"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }), $if((model.variables.executeErrorsIn.codeAttr > 1000), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "background-color: #f3f6f8; padding: 5px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: (((((model.variables.executeErrorsIn.messageAttr + " (Error ") + (model.variables.executeErrorsIn.codeAttr).toString()) + ", ") + model.variables.executeErrorsIn.actionNameAttr) + ")"),
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._executeErrorsInDataFetchStatus)
    }))];
    }, function () {
    return [];
    }), $if((model.variables.targetHasFetchErrorIn || (model.variables.executeErrorsIn.codeAttr === 3001)), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-top: 10px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Button, {
    enabled: true,
    isDefault: false,
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.tryAgainOnClick$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    style: "btn btn-primary btn-small",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Try Again"))];
    }, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-bottom: 5px; margin-top: 10px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phNoRecoveryMessage,
    _idProps: {
    service: idService,
    name: "phNoRecoveryMessage"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    })];
    }, function () {
    return [];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "TUTExamsLegacyDefaults_CS.model", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, TUTExamsLegacyDefaults_CSModel, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._tryAgainOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("TryAgainOnClick");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: Retry
    return controller.retry$Action(callContext);
    });
    };
    
    Controller.prototype.tryAgainOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._tryAgainOnClick$Action, callContext);
    
    };
    Controller.prototype.retry$Action = function () {
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
    
    