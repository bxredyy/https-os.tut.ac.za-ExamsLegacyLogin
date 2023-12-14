define("OutSystemsUI.Interaction.Sidebar.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$Sidebar_InternalConfigRec", "OutSystemsUI.controller$SidebarDestroy", "OutSystemsUI.controller$SidebarRegisterCallback", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$SidebarCreate", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$SidebarInitialize", "OutSystemsUI.controller$SidebarChangeStartsOpen", "OutSystemsUI.controller$SidebarChangeDirection", "OutSystemsUI.controller$SidebarChangeWidth", "OutSystemsUI.controller$SidebarChangeExtendedClass", "OutSystemsUI.controller$SidebarChangeHasOverlay"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Sidebar_InternalConfigRec());
    }, false, OutSystemsUIModel.Sidebar_InternalConfigRec), 
    this.attr("StartsOpen", "startsOpenIn", "StartsOpen", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("Direction", "directionIn", "Direction", true, false, OS.Types.Text, function () {
    return OutSystemsUIModel.staticEntities.direction.right;
    }, false), 
    this.attr("_directionInDataFetchStatus", "_directionInDataFetchStatus", "_directionInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("HasOverlay", "hasOverlayIn", "HasOverlay", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("Width", "widthIn", "Width", true, false, OS.Types.Text, function () {
    return "500px";
    }, false), 
    this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("StartsOpen" in inputs) {
    this.variables.startsOpenIn = inputs.StartsOpen;
    if("_startsOpenInDataFetchStatus" in inputs) {
    this.variables._startsOpenInDataFetchStatus = inputs._startsOpenInDataFetchStatus;
    }
    
    }
    
    if("Direction" in inputs) {
    this.variables.directionIn = inputs.Direction;
    if("_directionInDataFetchStatus" in inputs) {
    this.variables._directionInDataFetchStatus = inputs._directionInDataFetchStatus;
    }
    
    }
    
    if("HasOverlay" in inputs) {
    this.variables.hasOverlayIn = inputs.HasOverlay;
    if("_hasOverlayInDataFetchStatus" in inputs) {
    this.variables._hasOverlayInDataFetchStatus = inputs._hasOverlayInDataFetchStatus;
    }
    
    }
    
    if("Width" in inputs) {
    this.variables.widthIn = inputs.Width;
    if("_widthInDataFetchStatus" in inputs) {
    this.variables._widthInDataFetchStatus = inputs._widthInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "Interaction.Sidebar");
    });
    define("OutSystemsUI.Interaction.Sidebar.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Interaction.Sidebar.mvc$model", "OutSystemsUI.Interaction.Sidebar.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$Sidebar_InternalConfigRec", "OutSystemsUI.controller$SidebarDestroy", "OutSystemsUI.controller$SidebarRegisterCallback", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$SidebarCreate", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$SidebarInitialize", "OutSystemsUI.controller$SidebarChangeStartsOpen", "OutSystemsUI.controller$SidebarChangeDirection", "OutSystemsUI.controller$SidebarChangeWidth", "OutSystemsUI.controller$SidebarChangeExtendedClass", "OutSystemsUI.controller$SidebarChangeHasOverlay"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_Sidebar_mvc_model, OutSystemsUI_Interaction_Sidebar_mvc_controller, OSWidgets) {
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
            View.displayName = "Interaction.Sidebar";
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
                    return OutSystemsUI_Interaction_Sidebar_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return OutSystemsUI_Interaction_Sidebar_mvc_controller;
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
    return [React.createElement(OSWidgets.AdvancedHtml, {
    extendedProperties: {
    className: "osui-sidebar",
    name: model.variables.internalConfigsVar.uniqueIdAttr
    },
    tag: "aside",
    _idProps: {
    service: idService,
    name: "Sidebar"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.header,
    style: "osui-sidebar__header ph",
    _idProps: {
    service: idService,
    name: "Header"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.content,
    style: "osui-sidebar__content ph",
    _idProps: {
    service: idService,
    name: "Content"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("OutSystemsUI.Interaction.Sidebar.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.Sidebar.mvc$translationsResources", "OutSystemsUI.Interaction.Sidebar.mvc$controller.RegisterCallback.GetCallbackHandlersJS", "OutSystemsUI.model$Sidebar_InternalConfigRec", "OutSystemsUI.controller$SidebarDestroy", "OutSystemsUI.controller$SidebarRegisterCallback", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$SidebarCreate", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$SidebarInitialize", "OutSystemsUI.controller$SidebarChangeStartsOpen", "OutSystemsUI.controller$SidebarChangeDirection", "OutSystemsUI.controller$SidebarChangeWidth", "OutSystemsUI.controller$SidebarChangeExtendedClass", "OutSystemsUI.controller$SidebarChangeHasOverlay"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_Sidebar_mvc_TranslationsResources, OutSystemsUI_Interaction_Sidebar_mvc_controller_RegisterCallback_GetCallbackHandlersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {
    initializedHandler$Action: function (sidebarIdIn) {
    sidebarIdIn = (sidebarIdIn === undefined) ? "" : sidebarIdIn;
    return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(sidebarIdIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "InitializedHandler");
    },
    onToggleHandler$Action: function (sidebarIdIn, isSidebarOpenIn) {
    sidebarIdIn = (sidebarIdIn === undefined) ? "" : sidebarIdIn;
    isSidebarOpenIn = (isSidebarOpenIn === undefined) ? false : isSidebarOpenIn;
    return controller.executeActionInsideJSNode(controller._onToggleHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(sidebarIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isSidebarOpenIn, OS.Types.Boolean)), controller.callContext(), function (actionResults) {
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
    Controller.prototype.translationResources = OutSystemsUI_Interaction_Sidebar_mvc_TranslationsResources;
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._onToggleHandler$Action = function (sidebarIdIn, isSidebarOpenIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnToggleHandler");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars"))());
    vars.value.sidebarIdInLocal = sidebarIdIn;
    vars.value.isSidebarOpenInLocal = isSidebarOpenIn;
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: OnToggle
    return controller.onToggle$Action(vars.value.sidebarIdInLocal, vars.value.isSidebarOpenInLocal, callContext);
    });
    };
    Controller.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars", [{
    name: "SidebarId",
    attrName: "sidebarIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "IsSidebarOpen",
    attrName: "isSidebarOpenInLocal",
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
    // Execute Action: SidebarDestroy
    OutSystemsUIController.default.sidebarDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
    };
    Controller.prototype._initializedHandler$Action = function (sidebarIdIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("InitializedHandler");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars"))());
    vars.value.sidebarIdInLocal = sidebarIdIn;
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: Initialized
    return controller.initialized$Action(vars.value.sidebarIdInLocal, callContext);
    });
    };
    Controller.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars", [{
    name: "SidebarId",
    attrName: "sidebarIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    Controller.prototype._registerCallback$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("RegisterCallback");
    callContext = controller.callContext(callContext);
    var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
    getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Interaction_Sidebar_mvc_controller_RegisterCallback_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallback", {
    Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object),
    OnToggle: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult"))();
    jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.Types.Object);
    jsNodeResult.onToggleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnToggle, OS.Types.Object);
    return jsNodeResult;
    }, {
    InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
    OnToggleHandler: controller.clientActionProxies.onToggleHandler$Action
    }, {});
    // Execute Action: RegisterOnInitialize
    OutSystemsUIController.default.sidebarRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Initialized", getCallbackHandlersJSResult.value.initializedOut, callContext);
    // Execute Action: RegisterOnToggle
    OutSystemsUIController.default.sidebarRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, "OnToggle", getCallbackHandlersJSResult.value.onToggleOut, callContext);
    };
    Controller.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult", [{
    name: "Initialized",
    attrName: "initializedOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }, {
    name: "OnToggle",
    attrName: "onToggleOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }]);
    Controller.prototype._onInitialize$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnInitialize");
    callContext = controller.callContext(callContext);
    var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
    var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
    // Execute Action: LogStart
    OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Sidebar", callContext);
    // Execute Action: GenerateUniqueId
    generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
    
    // Set Initial Configs
    // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
    model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
    // InternalConfigs.StartsOpen = StartsOpen
    model.variables.internalConfigsVar.startsOpenAttr = model.variables.startsOpenIn;
    // InternalConfigs.ExtendedClass = ExtendedClass
    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
    // InternalConfigs.Direction = Direction
    model.variables.internalConfigsVar.directionAttr = model.variables.directionIn;
    // InternalConfigs.Width = Width
    model.variables.internalConfigsVar.widthAttr = model.variables.widthIn;
    // InternalConfigs.HasOverlay = HasOverlay
    model.variables.internalConfigsVar.hasOverlayAttr = model.variables.hasOverlayIn;
    // JSON Serialize: Serialize_configs
    serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
    // Execute Action: SidebarCreate
    OutSystemsUIController.default.sidebarCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, callContext);
    // Execute Action: RegisterCallback
    controller._registerCallback$Action(callContext);
    };
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    // Execute Action: SidebarInitialize
    OutSystemsUIController.default.sidebarInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
    // Execute Action: LogEnd
    OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Sidebar created", callContext);
    };
    Controller.prototype._onParametersChanged$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnParametersChanged");
    callContext = controller.callContext(callContext);
    if((((model.variables.internalConfigsVar.startsOpenAttr) !== (model.variables.startsOpenIn)))) {
    // InternalConfigs.StartsOpen = StartsOpen
    model.variables.internalConfigsVar.startsOpenAttr = model.variables.startsOpenIn;
    // Execute Action: SidebarChangeStartsOpen
    OutSystemsUIController.default.sidebarChangeStartsOpen$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.startsOpenAttr, callContext);
    }
    
    if((((model.variables.internalConfigsVar.directionAttr) !== (model.variables.directionIn)))) {
    // InternalConfigs.Direction = Direction
    model.variables.internalConfigsVar.directionAttr = model.variables.directionIn;
    // Execute Action: SidebarChangeDirection
    OutSystemsUIController.default.sidebarChangeDirection$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.directionAttr, callContext);
    }
    
    if((((model.variables.internalConfigsVar.widthAttr) !== (model.variables.widthIn)))) {
    // InternalConfigs.Width = Width
    model.variables.internalConfigsVar.widthAttr = model.variables.widthIn;
    // Execute Action: SidebarChangeWidth
    OutSystemsUIController.default.sidebarChangeWidth$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.widthAttr, callContext);
    }
    
    if((((model.variables.internalConfigsVar.hasOverlayAttr) !== (model.variables.hasOverlayIn)))) {
    // InternalConfigs.HasOverlay = HasOverlay
    model.variables.internalConfigsVar.hasOverlayAttr = model.variables.hasOverlayIn;
    // Execute Action: SidebarChangeHasOverlay
    OutSystemsUIController.default.sidebarChangeHasOverlay$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.hasOverlayAttr, callContext);
    }
    
    if((((model.variables.internalConfigsVar.extendedClassAttr) !== (model.variables.extendedClassIn)))) {
    // InternalConfigs.ExtendedClass = ExtendedClass
    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
    // Execute Action: SidebarChangeExtendedClass
    OutSystemsUIController.default.sidebarChangeExtendedClass$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.extendedClassAttr, callContext);
    }
    
    };
    
    Controller.prototype.onToggleHandler$Action = function (sidebarIdIn, isSidebarOpenIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onToggleHandler$Action, callContext, sidebarIdIn, isSidebarOpenIn);
    
    };
    Controller.prototype.onDestroy$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
    
    };
    Controller.prototype.initializedHandler$Action = function (sidebarIdIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, sidebarIdIn);
    
    };
    Controller.prototype.registerCallback$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._registerCallback$Action, callContext);
    
    };
    Controller.prototype.onInitialize$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
    };
    Controller.prototype.onParametersChanged$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
    
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
    define("OutSystemsUI.Interaction.Sidebar.mvc$controller.RegisterCallback.GetCallbackHandlersJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.Initialized = $actions.InitializedHandler;
    $parameters.OnToggle = $actions.OnToggleHandler;
    };
    });
    
    define("OutSystemsUI.Interaction.Sidebar.mvc$translationsResources", ["exports"], function (exports) {
    return {};
    });
    