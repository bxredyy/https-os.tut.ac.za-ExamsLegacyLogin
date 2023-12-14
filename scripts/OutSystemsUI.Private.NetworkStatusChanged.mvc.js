define("OutSystemsUI.Private.NetworkStatusChanged.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("IsOnline", "isOnlineVar", "IsOnline", true, false, OS.Types.Boolean, function () {
    return true;
    }, false), 
    this.attr("OfflineActionReference", "offlineActionReferenceVar", "OfflineActionReference", true, false, OS.Types.Object, function () {
    return null;
    }, false), 
    this.attr("OnlineActionReference", "onlineActionReferenceVar", "OnlineActionReference", true, false, OS.Types.Object, function () {
    return null;
    }, false), 
    this.attr("DeviceReadyActionReference", "deviceReadyActionReferenceVar", "DeviceReadyActionReference", true, false, OS.Types.Object, function () {
    return null;
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
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Private.NetworkStatusChanged");
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.NetworkStatusChanged.mvc$model", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_NetworkStatusChanged_mvc_model, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller, OSWidgets) {
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
            View.displayName = "Private.NetworkStatusChanged";
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
                    return OutSystemsUI_Private_NetworkStatusChanged_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return OutSystemsUI_Private_NetworkStatusChanged_mvc_controller;
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
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.NetworkStatusChanged.mvc$translationsResources", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_NetworkStatusChanged_mvc_TranslationsResources, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnReady_InitJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetEventListenersJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetActionReferencesJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnDestroy_RemoveEventHandlersJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SaveDeviceReadyCallbackJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_RegisterPluginInfoJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetActionReferencesJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetEventListenersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {
    init$Action: function () {
    return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "Init");
    },
    offline$Action: function () {
    return controller.executeActionInsideJSNode(controller._offline$Action.bind(controller), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "Offline");
    },
    online$Action: function () {
    return controller.executeActionInsideJSNode(controller._online$Action.bind(controller), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "Online");
    },
    deviceReady$Action: function () {
    return controller.executeActionInsideJSNode(controller._deviceReady$Action.bind(controller), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "DeviceReady");
    }
    };
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = false;
    }
    Controller.prototype.translationResources = OutSystemsUI_Private_NetworkStatusChanged_mvc_TranslationsResources;
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._offline$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Offline");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    return OS.Flow.executeSequence(function () {
    if((model.variables.isOnlineVar)) {
    // IsOnline = False
    model.variables.isOnlineVar = false;
    // Trigger Event: NetworkStatusChangedToOffline
    return controller.networkStatusChanged$Action(model.variables.isOnlineVar, callContext);
    }
    
    });
    });
    };
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnReady_InitJS, "Init", "OnReady", null, function ($parameters) {
    }, {
    Init: controller.clientActionProxies.init$Action
    }, {});
    };
    Controller.prototype._online$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Online");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    return OS.Flow.executeSequence(function () {
    if((!(model.variables.isOnlineVar))) {
    // IsOnline = True
    model.variables.isOnlineVar = true;
    // Trigger Event: NetworkStatusChangedToOnline
    return controller.networkStatusChanged$Action(model.variables.isOnlineVar, callContext);
    }
    
    });
    });
    };
    Controller.prototype._deviceReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("DeviceReady");
    callContext = controller.callContext(callContext);
    var setActionReferencesJSResult = new OS.DataTypes.VariableHolder();
    setActionReferencesJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetActionReferencesJS, "SetActionReferences", "DeviceReady", {
    OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object),
    OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.DeviceReady$setActionReferencesJSResult"))();
    jsNodeResult.offlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OfflineActionReference, OS.Types.Object);
    jsNodeResult.onlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnlineActionReference, OS.Types.Object);
    return jsNodeResult;
    }, {
    Offline: controller.clientActionProxies.offline$Action,
    Online: controller.clientActionProxies.online$Action
    }, {});
    // SaveReferences
    // OfflineActionReference = SetActionReferences.OfflineActionReference
    model.variables.offlineActionReferenceVar = setActionReferencesJSResult.value.offlineActionReferenceOut;
    // OnlineActionReference = SetActionReferences.OnlineActionReference
    model.variables.onlineActionReferenceVar = setActionReferencesJSResult.value.onlineActionReferenceOut;
    controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetEventListenersJS, "SetEventListeners", "DeviceReady", {
    OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.Types.Object),
    OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.Types.Object)
    }, function ($parameters) {
    }, {}, {});
    };
    Controller.registerVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.DeviceReady$setActionReferencesJSResult", [{
    name: "OfflineActionReference",
    attrName: "offlineActionReferenceOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }, {
    name: "OnlineActionReference",
    attrName: "onlineActionReferenceOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }]);
    Controller.prototype._onDestroy$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnDestroy");
    callContext = controller.callContext(callContext);
    controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnDestroy_RemoveEventHandlersJS, "RemoveEventHandlers", "OnDestroy", {
    OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.Types.Object),
    OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.Types.Object),
    offlineHandlerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.Types.Object),
    onlineHandlerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.Types.Object),
    deviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.deviceReadyActionReferenceVar, OS.Types.Object)
    }, function ($parameters) {
    }, {}, {});
    };
    Controller.prototype._init$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Init");
    callContext = controller.callContext(callContext);
    var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
    var saveDeviceReadyCallbackJSResult = new OS.DataTypes.VariableHolder();
    var setActionReferencesJSResult = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: GetNetworkStatus
    getNetworkStatusVar.value = OutSystemsUIController.default.getNetworkStatus$Action(callContext);
    
    return OS.Flow.executeSequence(function () {
    if((getNetworkStatusVar.value.isOnlineOut)) {
    // Execute Action: Online
    return controller._online$Action(callContext);
    } else {
    // Execute Action: Offline
    return controller._offline$Action(callContext);
    }
    
    }).then(function () {
    saveDeviceReadyCallbackJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SaveDeviceReadyCallbackJS, "SaveDeviceReadyCallback", "Init", {
    DeviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$saveDeviceReadyCallbackJSResult"))();
    jsNodeResult.deviceReadyActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DeviceReadyActionReference, OS.Types.Object);
    return jsNodeResult;
    }, {
    DeviceReady: controller.clientActionProxies.deviceReady$Action
    }, {});
    // SaveReference
    // DeviceReadyActionReference = SaveDeviceReadyCallback.DeviceReadyActionReference
    model.variables.deviceReadyActionReferenceVar = saveDeviceReadyCallbackJSResult.value.deviceReadyActionReferenceOut;
    controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_RegisterPluginInfoJS, "RegisterPluginInfo", "Init", {
    DeviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.deviceReadyActionReferenceVar, OS.Types.Object)
    }, function ($parameters) {
    }, {}, {});
    setActionReferencesJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetActionReferencesJS, "SetActionReferences", "Init", {
    OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object),
    OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$setActionReferencesJSResult"))();
    jsNodeResult.offlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OfflineActionReference, OS.Types.Object);
    jsNodeResult.onlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnlineActionReference, OS.Types.Object);
    return jsNodeResult;
    }, {
    Offline: controller.clientActionProxies.offline$Action,
    Online: controller.clientActionProxies.online$Action
    }, {});
    // SaveReferences
    // OfflineActionReference = SetActionReferences.OfflineActionReference
    model.variables.offlineActionReferenceVar = setActionReferencesJSResult.value.offlineActionReferenceOut;
    // OnlineActionReference = SetActionReferences.OnlineActionReference
    model.variables.onlineActionReferenceVar = setActionReferencesJSResult.value.onlineActionReferenceOut;
    controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetEventListenersJS, "SetEventListeners", "Init", {
    OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.Types.Object),
    OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.Types.Object)
    }, function ($parameters) {
    }, {}, {});
    });
    });
    };
    Controller.registerVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$saveDeviceReadyCallbackJSResult", [{
    name: "DeviceReadyActionReference",
    attrName: "deviceReadyActionReferenceOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }]);
    Controller.registerVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$setActionReferencesJSResult", [{
    name: "OfflineActionReference",
    attrName: "offlineActionReferenceOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }, {
    name: "OnlineActionReference",
    attrName: "onlineActionReferenceOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }]);
    
    Controller.prototype.offline$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._offline$Action, callContext);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
    };
    Controller.prototype.online$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._online$Action, callContext);
    
    };
    Controller.prototype.deviceReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._deviceReady$Action, callContext);
    
    };
    Controller.prototype.onDestroy$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
    
    };
    Controller.prototype.init$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._init$Action, callContext);
    
    };
    Controller.prototype.networkStatusChanged$Action = function () {
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
    Controller.prototype.onDestroyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onDestroy$Action(callContext);
    
    };
    Controller.prototype.onParametersChangedEventHandler = null;
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
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS", [], function () {
    return function ($actions, $roles, $public) {
    $actions.Init();
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    document.addEventListener("offline", $parameters.OfflineActionReference, false);
    document.addEventListener("online", $parameters.OnlineActionReference, false);
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.OfflineActionReference = $actions.Offline;
    $parameters.OnlineActionReference = $actions.Online;
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    document.removeEventListener("offline", $parameters.offlineHandlerObj );
    document.removeEventListener("online", $parameters.onlineHandlerObj );
    document.removeEventListener("deviceready", $parameters.deviceReadyActionReference);
    window.removeEventListener("offline", $parameters.OfflineActionReference);
    window.removeEventListener("online",$parameters.OnlineActionReference);
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.DeviceReadyActionReference = function(){$actions.DeviceReady();};
    
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    document.addEventListener("deviceready", $parameters.DeviceReadyActionReference, false);
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.OfflineActionReference = $actions.Offline;
    $parameters.OnlineActionReference = $actions.Online;
    };
    });
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    window.addEventListener("offline", $parameters.OfflineActionReference, false);
    window.addEventListener("online",$parameters.OnlineActionReference, false);
    };
    });
    
    define("OutSystemsUI.Private.NetworkStatusChanged.mvc$translationsResources", ["exports"], function (exports) {
    return {};
    });
    