define("ExamsLegacy.TUTLayouts.BaseLayout.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.TUTComponents.GenericNotice.mvc$model", "ExamsLegacy.TUTComponents.LoadingAnimation2.mvc$model", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$model"], function (OutSystems, ExamsLegacyModel, ExamsLegacy_TUTComponents_GenericNotice_mvcModel, ExamsLegacy_TUTComponents_LoadingAnimation2_mvcModel, TUTScreenTimer_ScreenTimer_ScreenTimer_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("TimeoutMilliSeconds", "timeoutMilliSecondsVar", "TimeoutMilliSeconds", true, false, OS.Types.Integer, function () {
    return 4000;
    }, false), 
    this.attr("ShowWaitPopup", "showWaitPopupIn", "ShowWaitPopup", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_showWaitPopupInDataFetchStatus", "_showWaitPopupInDataFetchStatus", "_showWaitPopupInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("WaitMessage", "waitMessageIn", "WaitMessage", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_waitMessageInDataFetchStatus", "_waitMessageInDataFetchStatus", "_waitMessageInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ShowErrorMessageOnView", "showErrorMessageOnViewIn", "ShowErrorMessageOnView", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_showErrorMessageOnViewInDataFetchStatus", "_showErrorMessageOnViewInDataFetchStatus", "_showErrorMessageOnViewInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ShowErrorMessageOnSave", "showErrorMessageOnSaveIn", "ShowErrorMessageOnSave", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_showErrorMessageOnSaveInDataFetchStatus", "_showErrorMessageOnSaveInDataFetchStatus", "_showErrorMessageOnSaveInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("DoTimeoutCheck", "doTimeoutCheckIn", "DoTimeoutCheck", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_doTimeoutCheckInDataFetchStatus", "_doTimeoutCheckInDataFetchStatus", "_doTimeoutCheckInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Model._hasValidationWidgetsValue = ((ExamsLegacy_TUTComponents_GenericNotice_mvcModel.hasValidationWidgets || ExamsLegacy_TUTComponents_LoadingAnimation2_mvcModel.hasValidationWidgets) || TUTScreenTimer_ScreenTimer_ScreenTimer_mvcModel.hasValidationWidgets);
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("ShowWaitPopup" in inputs) {
    this.variables.showWaitPopupIn = inputs.ShowWaitPopup;
    if("_showWaitPopupInDataFetchStatus" in inputs) {
    this.variables._showWaitPopupInDataFetchStatus = inputs._showWaitPopupInDataFetchStatus;
    }
    
    }
    
    if("WaitMessage" in inputs) {
    this.variables.waitMessageIn = inputs.WaitMessage;
    if("_waitMessageInDataFetchStatus" in inputs) {
    this.variables._waitMessageInDataFetchStatus = inputs._waitMessageInDataFetchStatus;
    }
    
    }
    
    if("ShowErrorMessageOnView" in inputs) {
    this.variables.showErrorMessageOnViewIn = inputs.ShowErrorMessageOnView;
    if("_showErrorMessageOnViewInDataFetchStatus" in inputs) {
    this.variables._showErrorMessageOnViewInDataFetchStatus = inputs._showErrorMessageOnViewInDataFetchStatus;
    }
    
    }
    
    if("ShowErrorMessageOnSave" in inputs) {
    this.variables.showErrorMessageOnSaveIn = inputs.ShowErrorMessageOnSave;
    if("_showErrorMessageOnSaveInDataFetchStatus" in inputs) {
    this.variables._showErrorMessageOnSaveInDataFetchStatus = inputs._showErrorMessageOnSaveInDataFetchStatus;
    }
    
    }
    
    if("DoTimeoutCheck" in inputs) {
    this.variables.doTimeoutCheckIn = inputs.DoTimeoutCheck;
    if("_doTimeoutCheckInDataFetchStatus" in inputs) {
    this.variables._doTimeoutCheckInDataFetchStatus = inputs._doTimeoutCheckInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTLayouts.BaseLayout");
    });
    define("ExamsLegacy.TUTLayouts.BaseLayout.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTLayouts.BaseLayout.mvc$model", "ExamsLegacy.TUTLayouts.BaseLayout.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "ExamsLegacy.TUTComponents.GenericNotice.mvc$view", "ExamsLegacy.TUTComponents.LoadingAnimation2.mvc$view", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$view"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_TUTLayouts_BaseLayout_mvc_model, ExamsLegacy_TUTLayouts_BaseLayout_mvc_controller, ExamsLegacyClientVariables, OSWidgets, ExamsLegacy_TUTComponents_GenericNotice_mvc_view, ExamsLegacy_TUTComponents_LoadingAnimation2_mvc_view, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_view) {
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
            View.displayName = "TUTLayouts.BaseLayout";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [ExamsLegacy_TUTComponents_GenericNotice_mvc_view, ExamsLegacy_TUTComponents_LoadingAnimation2_mvc_view, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_BaseLayout_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_BaseLayout_mvc_controller;
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
    style: "margin-bottom: 4px; margin-top: 4px; text-align: center;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    visible: model.variables.showErrorMessageOnViewIn,
    _idProps: {
    service: idService,
    name: "cGenericErrorMessageOnView"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showErrorMessageOnViewInDataFetchStatus)
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "max-width: 800px;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    style: "DropShadow",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(ExamsLegacy_TUTComponents_GenericNotice_mvc_view, {
    inputs: {
    IconColour: ExamsLegacyModel.staticEntities.color.red
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
    uuid: "2",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    phTitle: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: left;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phGenericViewErrorTitle,
    _idProps: {
    service: idService,
    name: "phGenericViewErrorTitle"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    }),
    phContent: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: left;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phGenericViewErrorMessage,
    _idProps: {
    service: idService,
    name: "phGenericViewErrorMessage"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    })
    }
    }))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    extendedProperties: {
    style: "margin-bottom: 8px; margin-top: 4px; text-align: center;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    visible: model.variables.showErrorMessageOnSaveIn,
    _idProps: {
    service: idService,
    name: "cGenericErrorMessageOnSave"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showErrorMessageOnSaveInDataFetchStatus)
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "max-width: 800px;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    style: "DropShadow",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(ExamsLegacy_TUTComponents_GenericNotice_mvc_view, {
    inputs: {
    IconColour: ExamsLegacyModel.staticEntities.color.red
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
    uuid: "9",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    phTitle: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: left;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phGenericSaveErrorTitle,
    _idProps: {
    service: idService,
    name: "phGenericSaveErrorTitle"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    }),
    phContent: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: left;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "12"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phGenericSaveErrorMessage,
    _idProps: {
    service: idService,
    name: "phGenericSaveErrorMessage"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    })
    }
    }))), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phMainArea,
    _idProps: {
    service: idService,
    name: "phMainArea"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Popup, {
    extendedProperties: {
    style: "width: 500px;"
    },
    showPopup: model.variables.showWaitPopupIn,
    style: "popup-dialog",
    _idProps: {
    service: idService,
    name: "popWait"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showWaitPopupInDataFetchStatus)
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: center;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "16"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "17"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(ExamsLegacy_TUTComponents_LoadingAnimation2_mvc_view, {
    inputs: {
    WaitMessage: model.variables.waitMessageIn,
    _waitMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._waitMessageInDataFetchStatus)
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
    uuid: "18",
    alias: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    })))), React.createElement(TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_view, {
    inputs: {
    IsActive: model.variables.doTimeoutCheckIn,
    _isActiveInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._doTimeoutCheckInDataFetchStatus),
    IntervalTime_ms: model.variables.timeoutMilliSecondsVar
    },
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    },
    intervalCompleted$Action: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.timeoutTimerIntervalCompleted$Action(controller.callContext(eventHandlerContext));
    });
    ;
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    name: "scTimeoutTimer",
    alias: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTLayouts.BaseLayout.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._timeoutTimerIntervalCompleted$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("TimeoutTimerIntervalCompleted");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: TimeoutTimer2
    return controller.timeoutTimer$Action(callContext);
    });
    };
    
    Controller.prototype.timeoutTimerIntervalCompleted$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._timeoutTimerIntervalCompleted$Action, callContext);
    
    };
    Controller.prototype.timeoutTimer$Action = function () {
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
    
    