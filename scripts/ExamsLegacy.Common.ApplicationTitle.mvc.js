define("ExamsLegacy.Common.ApplicationTitle.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model"], function (OutSystems, ExamsLegacyModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [].concat(_super.attributesToDeclare.call(this));
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
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Common.ApplicationTitle");
    });
    define("ExamsLegacy.Common.ApplicationTitle.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.Common.ApplicationTitle.mvc$model", "ExamsLegacy.Common.ApplicationTitle.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_Common_ApplicationTitle_mvc_model, ExamsLegacy_Common_ApplicationTitle_mvc_controller, ExamsLegacyClientVariables, OSWidgets) {
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
            View.displayName = "Common.ApplicationTitle";
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
                    return ExamsLegacy_Common_ApplicationTitle_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_Common_ApplicationTitle_mvc_controller;
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
    extendedEvents: {
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.onClick$Action(controller.callContext(eventHandlerContext));
    
    ;
    },
    onKeyPress: function () {
    var eventHandlerContext = callContext.clone();
    controller.onClick$Action(controller.callContext(eventHandlerContext));
    
    ;
    }
    },
    extendedProperties: {
    role: "button",
    tabIndex: "0"
    },
    style: "application-name display-flex align-items-center full-height",
    visible: true,
    _idProps: {
    service: idService,
    name: "ApplicationTitleWrapper"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Image, {
    extendedProperties: {
    alt: "",
    style: "height: 32px;"
    },
    image: OS.Navigation.VersionedURL.getVersionedUrl("img/ExamsLegacy.Logo.png"),
    style: "app-logo",
    type: /*Static*/ 0,
    _idProps: {
    service: idService,
    name: "AppLogo"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Expression, {
    value: "Exams Portal",
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.Common.ApplicationTitle.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._onClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnClick");
    callContext = controller.callContext(callContext);
    // Destination: /ExamsLegacy/
    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
    };
    
    Controller.prototype.onClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
    
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
    
    