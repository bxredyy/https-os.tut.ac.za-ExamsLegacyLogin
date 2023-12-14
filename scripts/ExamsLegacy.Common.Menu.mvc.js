define("ExamsLegacy.Common.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.model", "OutSystemsUI.controller", "ExamsLegacy.Common.ApplicationTitle.mvc$model", "ExamsLegacy.Common.UserInfo.mvc$model", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, ExamsLegacyModel, OutSystemsUIModel, OutSystemsUIController, ExamsLegacy_Common_ApplicationTitle_mvcModel, ExamsLegacy_Common_UserInfo_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.Types.Integer, function () {
    return -1;
    }, false), 
    this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ActiveSubItem", "activeSubItemIn", "ActiveSubItem", true, false, OS.Types.Integer, function () {
    return -1;
    }, false), 
    this.attr("_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Model._hasValidationWidgetsValue = (ExamsLegacy_Common_ApplicationTitle_mvcModel.hasValidationWidgets || ExamsLegacy_Common_UserInfo_mvcModel.hasValidationWidgets);
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("ActiveItem" in inputs) {
    this.variables.activeItemIn = inputs.ActiveItem;
    if("_activeItemInDataFetchStatus" in inputs) {
    this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
    }
    
    }
    
    if("ActiveSubItem" in inputs) {
    this.variables.activeSubItemIn = inputs.ActiveSubItem;
    if("_activeSubItemInDataFetchStatus" in inputs) {
    this.variables._activeSubItemInDataFetchStatus = inputs._activeSubItemInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Common.Menu");
    });
    define("ExamsLegacy.Common.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.Common.Menu.mvc$model", "ExamsLegacy.Common.Menu.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "ExamsLegacy.Common.ApplicationTitle.mvc$view", "ExamsLegacy.Common.UserInfo.mvc$view", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIModel, OutSystemsUIController, React, OSView, ExamsLegacy_Common_Menu_mvc_model, ExamsLegacy_Common_Menu_mvc_controller, ExamsLegacyClientVariables, OSWidgets, ExamsLegacy_Common_ApplicationTitle_mvc_view, ExamsLegacy_Common_UserInfo_mvc_view) {
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
            View.displayName = "Common.Menu";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [ExamsLegacy_Common_ApplicationTitle_mvc_view, ExamsLegacy_Common_UserInfo_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_Common_Menu_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_Common_Menu_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.AdvancedHtml, {
    extendedProperties: {
    className: "app-menu-content display-flex",
    role: "navigation"
    },
    tag: "nav",
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "header-logo ph",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(false, false, this, function () {
    return [];
    }, function () {
    return [React.createElement(ExamsLegacy_Common_ApplicationTitle_mvc_view, {
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
    uuid: "2",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    })];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    role: "menubar"
    },
    style: "app-menu-links",
    visible: true,
    _idProps: {
    service: idService,
    name: "PageLinks"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Link, {
    enabled: true,
    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
    url: OS.Navigation.generateScreenURL("ExamsLegacy", "Home", {}),
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Home"), React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    classes: "ThemeGrid_MarginGutter"
    },
    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
    url: OS.Navigation.generateScreenURL("ExamsLegacy", "TimeTable", {}),
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Time Table"), React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    classes: "ThemeGrid_MarginGutter"
    },
    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
    url: OS.Navigation.generateScreenURL("ExamsLegacy", "OtherExams", {}),
    visible: ExamsLegacyClientVariables.getHaveMultipleExams(),
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Other Exams"), $if(((ExamsLegacyClientVariables.getAdmMode() && (ExamsLegacyClientVariables.getAdmType() === "A")) || (ExamsLegacyClientVariables.getAdmType() === "P")), false, this, function () {
    return [React.createElement(OSWidgets.Link, {
    enabled: true,
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.loadStudent$Action(controller.callContext(eventHandlerContext));
    
    ;
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Load Student")];
    }, function () {
    return [];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "app-login-info ph",
    visible: true,
    _idProps: {
    service: idService,
    name: "LoginInfo"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(ExamsLegacy_Common_UserInfo_mvc_view, {
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
    uuid: "9",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedEvents: {
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.hideMenu$Action(controller.callContext(eventHandlerContext));
    
    ;
    }
    },
    extendedProperties: {
    role: "button"
    },
    style: "app-menu-overlay",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.Common.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIModel, OutSystemsUIController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._onRender$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnRender");
    callContext = controller.callContext(callContext);
    var setActiveMenuItemsVar = new OS.DataTypes.VariableHolder();
    var setMenuListenersVar = new OS.DataTypes.VariableHolder();
    // Execute Action: SetMenuListeners
    setMenuListenersVar.value = OutSystemsUIController.default.setMenuListeners$Action("", callContext);
    
    // Execute Action: SetActiveMenuItems
    setActiveMenuItemsVar.value = OutSystemsUIController.default.setActiveMenuItems$Action("", model.variables.activeItemIn, model.variables.activeSubItemIn, callContext);
    
    };
    Controller.prototype._hideMenu$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("HideMenu");
    callContext = controller.callContext(callContext);
    var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
    // Execute Action: ToggleSideMenu
    toggleSideMenuVar.value = OutSystemsUIController.default.toggleSideMenu$Action(callContext);
    
    };
    Controller.prototype._loadStudent$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("LoadStudent");
    callContext = controller.callContext(callContext);
    if((ExamsLegacyClientVariables.getAdmMode())) {
    // AdmSBStatus = True
    ExamsLegacyClientVariables.setAdmSBStatus(true);
    // AdmRefreshTimeStamp = CurrDateTime
    ExamsLegacyClientVariables.setAdmRefreshTimeStamp(OS.BuiltinFunctions.currDateTime());
    // Execute Action: HideMenu
    controller._hideMenu$Action(callContext);
    }
    
    };
    
    Controller.prototype.onRender$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
    
    };
    Controller.prototype.hideMenu$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._hideMenu$Action, callContext);
    
    };
    Controller.prototype.loadStudent$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._loadStudent$Action, callContext);
    
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onRender$Action(callContext);
    
    };
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onRender$Action(callContext);
    
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
    
    