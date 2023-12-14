define("OutSystemsUI.Content.Alert.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SetFocus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("AlertType", "alertTypeIn", "AlertType", true, false, OS.Types.Text, function () {
    return OutSystemsUIModel.staticEntities.alert.info;
    }, false), 
    this.attr("_alertTypeInDataFetchStatus", "_alertTypeInDataFetchStatus", "_alertTypeInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("AlertType" in inputs) {
    this.variables.alertTypeIn = inputs.AlertType;
    if("_alertTypeInDataFetchStatus" in inputs) {
    this.variables._alertTypeInDataFetchStatus = inputs._alertTypeInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "Content.Alert");
    });
    define("OutSystemsUI.Content.Alert.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.Alert.mvc$model", "OutSystemsUI.Content.Alert.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SetFocus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_Alert_mvc_model, OutSystemsUI_Content_Alert_mvc_controller, OSWidgets) {
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
            View.displayName = "Content.Alert";
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
                    return OutSystemsUI_Content_Alert_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return OutSystemsUI_Content_Alert_mvc_controller;
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
    role: model.getCachedValue(idService.getId("Alert.role"), function () {
    return ((((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.error) || (model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.warning))) ? ("alert") : ("status"));
    }, function () {
    return model.variables.alertTypeIn;
    }),
    "aria-live": "polite",
    "aria-atomic": "true",
    tabIndex: "0"
    },
    style: (((("alert" + " ") + model.variables.alertTypeIn) + " ") + model.variables.extendedClassIn),
    visible: true,
    _idProps: {
    service: idService,
    name: "Alert"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._alertTypeInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    "aria-hidden": "true"
    },
    gridProperties: {
    classes: "OSInline"
    },
    style: "alert-icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.success), false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "check-circle",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "Icon1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [$if((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.info), false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "info-circle",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "Icon2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [$if((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.error), false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "times-circle",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "Icon3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "warning",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "Icon4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    })];
    })];
    })), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.messageText,
    style: "alert-message",
    _idProps: {
    service: idService,
    name: "MessageText"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("OutSystemsUI.Content.Alert.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.Alert.mvc$translationsResources", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SetFocus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_Alert_mvc_TranslationsResources) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = false;
    }
    Controller.prototype.translationResources = OutSystemsUI_Content_Alert_mvc_TranslationsResources;
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._focusAlert$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("FocusAlert");
    callContext = controller.callContext(callContext);
    var setFocusVar = new OS.DataTypes.VariableHolder();
    // Execute Action: SetFocus
    setFocusVar.value = OutSystemsUIController.default.setFocus$Action(idService.getId("Alert"), callContext);
    
    };
    
    Controller.prototype.focusAlert$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._focusAlert$Action, callContext);
    
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.focusAlert$Action(callContext);
    
    };
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.focusAlert$Action(callContext);
    
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
    
    define("OutSystemsUI.Content.Alert.mvc$translationsResources", ["exports"], function (exports) {
    return {};
    });
    