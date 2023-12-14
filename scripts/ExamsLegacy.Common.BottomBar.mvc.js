define("ExamsLegacy.Common.BottomBar.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Navigation.BottomBarItem.mvc$model", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetBottomBarActiveElement"], function (OutSystems, ExamsLegacyModel, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Navigation_BottomBarItem_mvcModel) {
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
    Model._hasValidationWidgetsValue = OutSystemsUI_Navigation_BottomBarItem_mvcModel.hasValidationWidgets;
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
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Common.BottomBar");
    });
    define("ExamsLegacy.Common.BottomBar.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.Common.BottomBar.mvc$model", "ExamsLegacy.Common.BottomBar.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Navigation.BottomBarItem.mvc$view", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetBottomBarActiveElement"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIModel, OutSystemsUIController, React, OSView, ExamsLegacy_Common_BottomBar_mvc_model, ExamsLegacy_Common_BottomBar_mvc_controller, ExamsLegacyClientVariables, OSWidgets, OutSystemsUI_Navigation_BottomBarItem_mvc_view) {
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
            View.displayName = "Common.BottomBar";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Navigation_BottomBarItem_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_Common_BottomBar_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_Common_BottomBar_mvc_controller;
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
    style: "bottom-bar-wrapper HideMeInPrint",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "bottom-bar ph",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Link, {
    enabled: true,
    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
    url: OS.Navigation.generateScreenURL("ExamsLegacy", "Home", {}),
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
    uuid: "3",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    icon: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "home",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    text: new PlaceholderContent(function () {
    return ["Home"];
    })
    },
    _dependencies: []
    })), React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    classes: "ThemeGrid_MarginGutter"
    },
    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
    url: OS.Navigation.generateScreenURL("ExamsLegacy", "TimeTable", {}),
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
    uuid: "6",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    icon: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "calendar",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    text: new PlaceholderContent(function () {
    return ["Time Tables"];
    })
    },
    _dependencies: []
    })), React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    classes: "ThemeGrid_MarginGutter"
    },
    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
    url: OS.Navigation.generateScreenURL("ExamsLegacy", "OtherExams", {}),
    visible: ExamsLegacyClientVariables.getHaveMultipleExams(),
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
    alias: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    icon: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "graduation-cap",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    text: new PlaceholderContent(function () {
    return ["Other Exams"];
    })
    },
    _dependencies: []
    })))));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.Common.BottomBar.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "OutSystemsUI.model$ErrorMessageRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetBottomBarActiveElement"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIModel, OutSystemsUIController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    var setBottomBarActiveElementVar = new OS.DataTypes.VariableHolder();
    // Execute Action: SetBottomBarActiveElement
    setBottomBarActiveElementVar.value = OutSystemsUIController.default.setBottomBarActiveElement$Action(model.variables.activeItemIn, callContext);
    
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
    
    