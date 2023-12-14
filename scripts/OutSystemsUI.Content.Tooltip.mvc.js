define("OutSystemsUI.Content.Tooltip.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$Tooltip_InternalConfigRec", "OutSystemsUI.controller$TooltipRegisterCallback", "OutSystemsUI.controller$TooltipInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$TooltipChangeTextProperty", "OutSystemsUI.controller$TooltipChangeBooleanProperty", "OutSystemsUI.controller$TooltipDestroy", "OutSystemsUI.controller$TooltipCreate", "OutSystemsUI.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Tooltip_InternalConfigRec());
    }, false, OutSystemsUIModel.Tooltip_InternalConfigRec), 
    this.attr("Position", "positionIn", "Position", true, false, OS.Types.Text, function () {
    return OutSystemsUIModel.staticEntities.position.right;
    }, false), 
    this.attr("_positionInDataFetchStatus", "_positionInDataFetchStatus", "_positionInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("StartsOpen", "startsOpenIn", "StartsOpen", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("Trigger", "triggerIn", "Trigger", true, false, OS.Types.Text, function () {
    return OutSystemsUIModel.staticEntities.trigger.onHover;
    }, false), 
    this.attr("_triggerInDataFetchStatus", "_triggerInDataFetchStatus", "_triggerInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("Position" in inputs) {
    this.variables.positionIn = inputs.Position;
    if("_positionInDataFetchStatus" in inputs) {
    this.variables._positionInDataFetchStatus = inputs._positionInDataFetchStatus;
    }
    
    }
    
    if("StartsOpen" in inputs) {
    this.variables.startsOpenIn = inputs.StartsOpen;
    if("_startsOpenInDataFetchStatus" in inputs) {
    this.variables._startsOpenInDataFetchStatus = inputs._startsOpenInDataFetchStatus;
    }
    
    }
    
    if("Trigger" in inputs) {
    this.variables.triggerIn = inputs.Trigger;
    if("_triggerInDataFetchStatus" in inputs) {
    this.variables._triggerInDataFetchStatus = inputs._triggerInDataFetchStatus;
    }
    
    }
    
    if("ExtendedClass" in inputs) {
    this.variables.extendedClassIn = inputs.ExtendedClass;
    if("_extendedClassInDataFetchStatus" in inputs) {
    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Content.Tooltip");
    });
    define("OutSystemsUI.Content.Tooltip.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.Tooltip.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$Tooltip_InternalConfigRec", "OutSystemsUI.controller$TooltipRegisterCallback", "OutSystemsUI.controller$TooltipInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$TooltipChangeTextProperty", "OutSystemsUI.controller$TooltipChangeBooleanProperty", "OutSystemsUI.controller$TooltipDestroy", "OutSystemsUI.controller$TooltipCreate", "OutSystemsUI.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_Tooltip_mvc_model, OutSystemsUI_Content_Tooltip_mvc_controller, OSWidgets) {
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
            View.displayName = "Content.Tooltip";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return ["scripts/OutSystemsUI.OutSystemsUI.js"];
            };
            View.getBlocks = function() {
                return [];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return OutSystemsUI_Content_Tooltip_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return OutSystemsUI_Content_Tooltip_mvc_controller;
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
    name: model.variables.internal_ConfigsVar.uniqueIdAttr
    },
    style: "osui-tooltip",
    visible: true,
    _idProps: {
    service: idService,
    name: "TooltipWrapper"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.content,
    style: "osui-tooltip__content",
    _idProps: {
    service: idService,
    name: "Content"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), $if(false, false, this, function () {
    return [];
    }, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    "data-uniqueid": model.variables.internal_ConfigsVar.uniqueIdAttr
    },
    style: "osui-tooltip__balloon-wrapper",
    visible: true,
    _idProps: {
    service: idService,
    name: "TooltipBallonWrapper"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.tooltip,
    gridProperties: {
    classes: "OSInline"
    },
    style: "osui-tooltip__balloon-wrapper__balloon",
    _idProps: {
    service: idService,
    name: "Tooltip"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("OutSystemsUI.Content.Tooltip.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.Tooltip.mvc$translationsResources", "OutSystemsUI.Content.Tooltip.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$Tooltip_InternalConfigRec", "OutSystemsUI.controller$TooltipRegisterCallback", "OutSystemsUI.controller$TooltipInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$TooltipChangeTextProperty", "OutSystemsUI.controller$TooltipChangeBooleanProperty", "OutSystemsUI.controller$TooltipDestroy", "OutSystemsUI.controller$TooltipCreate", "OutSystemsUI.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_Tooltip_mvc_TranslationsResources, OutSystemsUI_Content_Tooltip_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {
    initializedHandler$Action: function (tooltipIdIn) {
    tooltipIdIn = (tooltipIdIn === undefined) ? "" : tooltipIdIn;
    return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tooltipIdIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "InitializedHandler");
    },
    onToggleHandler$Action: function (tooltipIdIn, isOpenedIn) {
    tooltipIdIn = (tooltipIdIn === undefined) ? "" : tooltipIdIn;
    isOpenedIn = (isOpenedIn === undefined) ? false : isOpenedIn;
    return controller.executeActionInsideJSNode(controller._onToggleHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tooltipIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isOpenedIn, OS.Types.Boolean)), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "OnToggleHandler");
    }
    };
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = false;
    }
    Controller.prototype.translationResources = OutSystemsUI_Content_Tooltip_mvc_TranslationsResources;
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._registerCallbacks$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("RegisterCallbacks");
    callContext = controller.callContext(callContext);
    var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
    getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Content_Tooltip_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
    OnToggle: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object),
    Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult"))();
    jsNodeResult.onToggleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnToggle, OS.Types.Object);
    jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.Types.Object);
    return jsNodeResult;
    }, {
    InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
    OnToggleHandler: controller.clientActionProxies.onToggleHandler$Action
    }, {});
    // Execute Action: RegisterOnInitialize
    OutSystemsUIController.default.tooltipRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Initialized", getCallbackHandlersJSResult.value.initializedOut, callContext);
    // Execute Action: RegisterOnToggle
    OutSystemsUIController.default.tooltipRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "OnToggle", getCallbackHandlersJSResult.value.onToggleOut, callContext);
    };
    Controller.registerVariableGroupType("OutSystemsUI.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult", [{
    name: "OnToggle",
    attrName: "onToggleOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }, {
    name: "Initialized",
    attrName: "initializedOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }]);
    Controller.prototype._initializedHandler$Action = function (tooltipIdIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("InitializedHandler");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.InitializedHandler$vars"))());
    vars.value.tooltipIdInLocal = tooltipIdIn;
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: Initialized
    return controller.initialized$Action(vars.value.tooltipIdInLocal, callContext);
    });
    };
    Controller.registerVariableGroupType("OutSystemsUI.Content.Tooltip.InitializedHandler$vars", [{
    name: "TooltipId",
    attrName: "tooltipIdInLocal",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    // Execute Action: TooltipInitialize
    OutSystemsUIController.default.tooltipInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
    // Execute Action: LogEnd
    OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Tooltip created", callContext);
    };
    Controller.prototype._onParametersChanged$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnParametersChanged");
    callContext = controller.callContext(callContext);
    // Position?
    if((((model.variables.positionIn) !== (model.variables.internal_ConfigsVar.positionAttr)))) {
    // Set Position
    // Internal_Configs.Position = Position
    model.variables.internal_ConfigsVar.positionAttr = model.variables.positionIn;
    // Execute Action: UpdatePosition
    OutSystemsUIController.default.tooltipChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Position", model.variables.internal_ConfigsVar.positionAttr, callContext);
    }
    
    // StartVisible?
    if((((model.variables.startsOpenIn) !== (model.variables.internal_ConfigsVar.startVisibleAttr)))) {
    // Set StartVisible
    // Internal_Configs.StartVisible = StartsOpen
    model.variables.internal_ConfigsVar.startVisibleAttr = model.variables.startsOpenIn;
    // Execute Action: UpdateStartVisible
    OutSystemsUIController.default.tooltipChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "StartVisible", model.variables.internal_ConfigsVar.startVisibleAttr, callContext);
    }
    
    // IsHover?
    if((((((model.variables.triggerIn === OutSystemsUIModel.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))) !== (model.variables.internal_ConfigsVar.isHoverAttr)))) {
    // Set IsHover
    // Internal_Configs.IsHover = Trigger = OnHover or Trigger = NullTextIdentifier
    model.variables.internal_ConfigsVar.isHoverAttr = ((model.variables.triggerIn === OutSystemsUIModel.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()));
    // Execute Action: UpdateIsHover
    OutSystemsUIController.default.tooltipChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "IsHover", model.variables.internal_ConfigsVar.isHoverAttr, callContext);
    }
    
    // ExtendedClass?
    if((((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
    // Set ExtendedClass
    // Internal_Configs.ExtendedClass = ExtendedClass
    model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
    // Execute Action: UpdateExtendedClass
    OutSystemsUIController.default.tooltipChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
    }
    
    };
    Controller.prototype._onToggleHandler$Action = function (tooltipIdIn, isOpenedIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnToggleHandler");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.OnToggleHandler$vars"))());
    vars.value.tooltipIdInLocal = tooltipIdIn;
    vars.value.isOpenedInLocal = isOpenedIn;
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: OnToggle
    return controller.onToggle$Action(vars.value.tooltipIdInLocal, vars.value.isOpenedInLocal, callContext);
    });
    };
    Controller.registerVariableGroupType("OutSystemsUI.Content.Tooltip.OnToggleHandler$vars", [{
    name: "TooltipId",
    attrName: "tooltipIdInLocal",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "IsOpened",
    attrName: "isOpenedInLocal",
    mandatory: true,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    Controller.prototype._onDestroy$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnDestroy");
    callContext = controller.callContext(callContext);
    // Execute Action: TooltipDestroy
    OutSystemsUIController.default.tooltipDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
    };
    Controller.prototype._onInitialize$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnInitialize");
    callContext = controller.callContext(callContext);
    var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
    // Execute Action: LogStart
    OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Tooltip", callContext);
    // Execute Action: GenerateUniqueId
    generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
    
    // Set Internal Configs
    // Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
    model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
    // Internal_Configs.Position = Position
    model.variables.internal_ConfigsVar.positionAttr = model.variables.positionIn;
    // Internal_Configs.StartVisible = StartsOpen
    model.variables.internal_ConfigsVar.startVisibleAttr = model.variables.startsOpenIn;
    // Internal_Configs.IsHover = Trigger = OnHover or Trigger = NullTextIdentifier
    model.variables.internal_ConfigsVar.isHoverAttr = ((model.variables.triggerIn === OutSystemsUIModel.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()));
    // Internal_Configs.ExtendedClass = ExtendedClass
    model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
    // Execute Action: TooltipCreate
    OutSystemsUIController.default.tooltipCreate$Action(model.variables.internal_ConfigsVar, callContext);
    // Execute Action: RegisterCallbacks
    controller._registerCallbacks$Action(callContext);
    };
    
    Controller.prototype.registerCallbacks$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);
    
    };
    Controller.prototype.initializedHandler$Action = function (tooltipIdIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, tooltipIdIn);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
    };
    Controller.prototype.onParametersChanged$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
    
    };
    Controller.prototype.onToggleHandler$Action = function (tooltipIdIn, isOpenedIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onToggleHandler$Action, callContext, tooltipIdIn, isOpenedIn);
    
    };
    Controller.prototype.onDestroy$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
    
    };
    Controller.prototype.onInitialize$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
    
    };
    Controller.prototype.onToggle$Action = function () {
    return Promise.resolve();
    };
    Controller.prototype.initialized$Action = function () {
    return Promise.resolve();
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onInitialize$Action(callContext);
    
    };
    Controller.prototype.onReadyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onReady$Action(callContext);
    
    };
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onDestroy$Action(callContext);
    
    };
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
    return OutSystemsUIController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
    });
    define("OutSystemsUI.Content.Tooltip.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.Initialized = $actions.InitializedHandler;
    $parameters.OnToggle = $actions.OnToggleHandler;
    };
    });
    
    define("OutSystemsUI.Content.Tooltip.mvc$translationsResources", ["exports"], function (exports) {
    return {};
    });
    