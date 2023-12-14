define("ExamsLegacy.Common.TUTMobMenuIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ToggleSideMenu", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$IsRTL"], function (OutSystems, ExamsLegacyModel, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("MenuAction", "menuActionIn", "MenuAction", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("MenuAction" in inputs) {
    this.variables.menuActionIn = inputs.MenuAction;
    if("_menuActionInDataFetchStatus" in inputs) {
    this.variables._menuActionInDataFetchStatus = inputs._menuActionInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Common.TUTMobMenuIcon");
    });
    define("ExamsLegacy.Common.TUTMobMenuIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.Common.TUTMobMenuIcon.mvc$model", "ExamsLegacy.Common.TUTMobMenuIcon.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ToggleSideMenu", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$IsRTL"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIModel, OutSystemsUIController, React, OSView, ExamsLegacy_Common_TUTMobMenuIcon_mvc_model, ExamsLegacy_Common_TUTMobMenuIcon_mvc_controller, ExamsLegacyClientVariables, OSWidgets) {
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
            View.displayName = "Common.TUTMobMenuIcon";
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
                    return ExamsLegacy_Common_TUTMobMenuIcon_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_Common_TUTMobMenuIcon_mvc_controller;
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
    style: "margin-top: 0px;"
    },
    style: model.getCachedValue(idService.getId("MenuIcon.Style"), function () {
    return ("app-menu-icon" + ((((model.variables.menuActionIn) !== (ExamsLegacyModel.staticEntities.menuAction.back))) ? ("") : (" back")));
    }, function () {
    return model.variables.menuActionIn;
    }),
    visible: ((model.variables.menuActionIn) !== (ExamsLegacyModel.staticEntities.menuAction.hidden)),
    _idProps: {
    service: idService,
    name: "MenuIcon"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus),
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus)
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedEvents: {
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.onToggleMenu$Action(controller.callContext(eventHandlerContext));
    
    ;
    }
    },
    extendedProperties: {
    "aria-label": "Toggle the Menu",
    role: "button",
    tabIndex: "0",
    "aria-haspopup": "true"
    },
    style: "menu-icon",
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
    "aria-hidden": "true"
    },
    style: "menu-icon-line",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    "aria-hidden": "true"
    },
    style: "menu-icon-line",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    "aria-hidden": "true"
    },
    style: "menu-icon-line",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedEvents: {
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.onBack$Action(controller.callContext(eventHandlerContext));
    
    ;
    }
    },
    extendedProperties: {
    "aria-label": "Back to previous screen",
    role: "button",
    tabIndex: "0"
    },
    style: "menu-back",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(model.variables.isRTLVar, false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "angle-right",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "ArrowReverse"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "angle-left",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "ArrowBack"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }))));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.Common.TUTMobMenuIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ToggleSideMenu", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$IsRTL"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIModel, OutSystemsUIController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._onBack$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnBack");
    callContext = controller.callContext(callContext);
    // Destination: (PreviousScreen)
    return OS.Navigation.navigateBack(null, callContext, true);
    };
    Controller.prototype._onToggleMenu$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnToggleMenu");
    callContext = controller.callContext(callContext);
    var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
    // Execute Action: ToggleSideMenu
    toggleSideMenuVar.value = OutSystemsUIController.default.toggleSideMenu$Action(callContext);
    
    };
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    var setMenuIconListenersVar = new OS.DataTypes.VariableHolder();
    var setMenuIconVar = new OS.DataTypes.VariableHolder();
    var checkIsRTLVar = new OS.DataTypes.VariableHolder();
    // Execute Action: SetMenuIcon
    setMenuIconVar.value = OutSystemsUIController.default.setMenuIcon$Action(model.variables.menuActionIn, callContext);
    
    // Execute Action: SetMenuIconListeners
    setMenuIconListenersVar.value = OutSystemsUIController.default.setMenuIconListeners$Action(callContext);
    
    // Execute Action: CheckIsRTL
    checkIsRTLVar.value = OutSystemsUIController.default.isRTL$Action(callContext);
    
    // IsRTL = CheckIsRTL.IsRTL
    model.variables.isRTLVar = checkIsRTLVar.value.isRTLOut;
    };
    
    Controller.prototype.onBack$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onBack$Action, callContext);
    
    };
    Controller.prototype.onToggleMenu$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onToggleMenu$Action, callContext);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
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
    
    return controller.onReady$Action(callContext);
    
    };
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
    
    