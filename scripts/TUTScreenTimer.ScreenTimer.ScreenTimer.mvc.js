define("TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTScreenTimer.model"], function (OutSystems, TUTScreenTimerModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("PreviousIntervalId", "previousIntervalIdVar", "PreviousIntervalId", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("TimerEventName", "timerEventNameVar", "TimerEventName", true, false, OS.Types.Text, function () {
    return "MyTimer";
    }, false), 
    this.attr("IntervalTime_ms", "intervalTime_msIn", "IntervalTime_ms", true, false, OS.Types.Integer, function () {
    return 0;
    }, false), 
    this.attr("_intervalTime_msInDataFetchStatus", "_intervalTime_msInDataFetchStatus", "_intervalTime_msInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("IsActive", "isActiveIn", "IsActive", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("IntervalTime_ms" in inputs) {
    this.variables.intervalTime_msIn = inputs.IntervalTime_ms;
    if("_intervalTime_msInDataFetchStatus" in inputs) {
    this.variables._intervalTime_msInDataFetchStatus = inputs._intervalTime_msInDataFetchStatus;
    }
    
    }
    
    if("IsActive" in inputs) {
    this.variables.isActiveIn = inputs.IsActive;
    if("_isActiveInDataFetchStatus" in inputs) {
    this.variables._isActiveInDataFetchStatus = inputs._isActiveInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ScreenTimer.ScreenTimer");
    });
    define("TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTScreenTimer.model", "TUTScreenTimer.controller", "react", "OutSystems/ReactView/Main", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$model", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, TUTScreenTimerModel, TUTScreenTimerController, React, OSView, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_model, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller, OSWidgets) {
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
            View.displayName = "ScreenTimer.ScreenTimer";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return ["scripts/TUTScreenTimer.TimerIntervalSetup.js"];
            };
            View.getBlocks = function() {
                return [];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
    return [];
    }, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    name: "cParentTWidget"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "display:none"
    },
    visible: true,
    _idProps: {
    service: idService,
    name: "EventContainer"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTScreenTimer.model", "TUTScreenTimer.controller", "TUTScreenTimer.languageResources", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller.OnReady.AddEvent_JSJS", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller.OnParametersChanged.StartIntervalJS", "TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller.OnParametersChanged.ClearPreviousIntervalJS"], function (OutSystems, TUTScreenTimerModel, TUTScreenTimerController, TUTScreenTimerLanguageResources, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller_OnReady_AddEvent_JSJS, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller_OnParametersChanged_StartIntervalJS, TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller_OnParametersChanged_ClearPreviousIntervalJS) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {
    trigger$Action: function () {
    return controller.executeActionInsideJSNode(controller._trigger$Action.bind(controller), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "Trigger");
    }
    };
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    controller.safeExecuteJSNode(TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller_OnReady_AddEvent_JSJS, "AddEvent_JS", "OnReady", {
    ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("EventContainer"), OS.Types.Text),
    EventName: OS.DataConversion.JSNodeParamConverter.to(model.variables.timerEventNameVar, OS.Types.Text)
    }, function ($parameters) {
    }, {
    Trigger: controller.clientActionProxies.trigger$Action
    }, {});
    // Execute Action: OnParametersChanged
    controller._onParametersChanged$Action(callContext);
    };
    Controller.prototype._trigger$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Trigger");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: IntervalCompleted
    return controller.intervalCompleted$Action(callContext);
    });
    };
    Controller.prototype._onParametersChanged$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnParametersChanged");
    callContext = controller.callContext(callContext);
    var startIntervalJSResult = new OS.DataTypes.VariableHolder();
    // IntervalPreviouslySetup
    if((!((model.variables.previousIntervalIdVar === "")))) {
    controller.safeExecuteJSNode(TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller_OnParametersChanged_ClearPreviousIntervalJS, "ClearPreviousInterval", "OnParametersChanged", {
    PreviousIntervalId: OS.DataConversion.JSNodeParamConverter.to(model.variables.previousIntervalIdVar, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    }
    
    if((model.variables.isActiveIn)) {
    startIntervalJSResult.value = controller.safeExecuteJSNode(TUTScreenTimer_ScreenTimer_ScreenTimer_mvc_controller_OnParametersChanged_StartIntervalJS, "StartInterval", "OnParametersChanged", {
    IntervalTime_ms: OS.DataConversion.JSNodeParamConverter.to(model.variables.intervalTime_msIn, OS.Types.Integer),
    EventName: OS.DataConversion.JSNodeParamConverter.to(model.variables.timerEventNameVar, OS.Types.Text),
    ParentWidggetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("cParentTWidget"), OS.Types.Text),
    IntervalId: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("TUTScreenTimer.ScreenTimer.ScreenTimer.OnParametersChanged$startIntervalJSResult"))();
    jsNodeResult.intervalIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IntervalId, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // PreviousIntervalId = StartInterval.IntervalId
    model.variables.previousIntervalIdVar = startIntervalJSResult.value.intervalIdOut;
    }
    
    };
    Controller.registerVariableGroupType("TUTScreenTimer.ScreenTimer.ScreenTimer.OnParametersChanged$startIntervalJSResult", [{
    name: "IntervalId",
    attrName: "intervalIdOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
    };
    Controller.prototype.trigger$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._trigger$Action, callContext);
    
    };
    Controller.prototype.onParametersChanged$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
    
    };
    Controller.prototype.intervalCompleted$Action = function () {
    return Promise.resolve();
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onReady$Action(callContext);
    
    };
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onParametersChanged$Action(callContext);
    
    };
    Controller.prototype.handleError = function (ex) {
    return controller.handleError(ex);
    };
    Controller.checkPermissions = function () {
    };
    Controller.prototype.getDefaultTimeout = function () {
    return TUTScreenTimerController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, TUTScreenTimerLanguageResources);
    });
    define("TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller.OnReady.AddEvent_JSJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    var container = document.getElementById($parameters.ContainerId);
    
    container.setAttribute('name',$parameters.EventName);
    
    container.event = function(){
        $actions.Trigger();
    };
    
    /* example where we pass something back
    container.event = function(value){
        $actions.Trigger(value);
    };
    */
    };
    });
    define("TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller.OnParametersChanged.StartIntervalJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.IntervalId = setTimerInterval($parameters.ParentWidggetId,$parameters.EventName, $parameters.IntervalTime_ms)
    };
    });
    define("TUTScreenTimer.ScreenTimer.ScreenTimer.mvc$controller.OnParametersChanged.ClearPreviousIntervalJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    clearInterval($parameters.PreviousIntervalId);
    };
    });
    
    