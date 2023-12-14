define("ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.TUTComponents.SmallGenericNotice.mvc$model"], function (OutSystems, ExamsLegacyModel, ExamsLegacy_TUTComponents_SmallGenericNotice_mvcModel) {
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
    Model._hasValidationWidgetsValue = undefined;
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    if((Model._hasValidationWidgetsValue === undefined)) {
    Model._hasValidationWidgetsValue = ExamsLegacy_TUTComponents_SmallGenericNotice_mvcModel.hasValidationWidgets;
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    };
    return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "TUTComponents.HaveOtherExamWarning");
    });
    define("ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$model", "ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$controller", "ExamsLegacy.clientVariables", "ExamsLegacy.TUTComponents.SmallGenericNotice.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_model, ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_controller, ExamsLegacyClientVariables, ExamsLegacy_TUTComponents_SmallGenericNotice_mvc_view, OSWidgets) {
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
            View.displayName = "TUTComponents.HaveOtherExamWarning";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [ExamsLegacy_TUTComponents_SmallGenericNotice_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(ExamsLegacy_TUTComponents_SmallGenericNotice_mvc_view, {
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
    uuid: "0",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    phTitle: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Text, {
    extendedProperties: {
    style: "font-size: 18px;"
    },
    text: ["Other exams were found"],
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    phContent: new PlaceholderContent(function () {
    return ["We found more than one exam that may be applicable to you. Make sure to review them all!", React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-bottom: 5px; padding: 5px 5px 0px 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Button, {
    enabled: true,
    gridProperties: {
    width: "200px"
    },
    isDefault: false,
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.showAllExamsOnClick$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    style: "btn btn-primary btn-small",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Show all Exams"))];
    })
    },
    _dependencies: []
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    Controller.prototype._loadTheNewerExamOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("LoadTheNewerExamOnClick");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: ShowLatest
    return controller.showLatest$Action(callContext);
    });
    };
    Controller.prototype._showAllExamsOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("ShowAllExamsOnClick");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: ShowAll
    return controller.showAll$Action(callContext);
    });
    };
    
    Controller.prototype.loadTheNewerExamOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._loadTheNewerExamOnClick$Action, callContext);
    
    };
    Controller.prototype.showAllExamsOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._showAllExamsOnClick$Action, callContext);
    
    };
    Controller.prototype.showAll$Action = function () {
    return Promise.resolve();
    };
    Controller.prototype.showLatest$Action = function () {
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
    
    