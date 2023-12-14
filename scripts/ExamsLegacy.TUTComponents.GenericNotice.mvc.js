define("ExamsLegacy.TUTComponents.GenericNotice.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.Content.CardItem.mvc$model"], function (OutSystems, ExamsLegacyModel, OutSystemsUI_Content_CardItem_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("IconColour", "iconColourIn", "IconColour", true, false, OS.Types.Text, function () {
    return ExamsLegacyModel.staticEntities.color.blue;
    }, false), 
    this.attr("_iconColourInDataFetchStatus", "_iconColourInDataFetchStatus", "_iconColourInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Model._hasValidationWidgetsValue = OutSystemsUI_Content_CardItem_mvcModel.hasValidationWidgets;
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("IconColour" in inputs) {
    this.variables.iconColourIn = inputs.IconColour;
    if("_iconColourInDataFetchStatus" in inputs) {
    this.variables._iconColourInDataFetchStatus = inputs._iconColourInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTComponents.GenericNotice");
    });
    define("ExamsLegacy.TUTComponents.GenericNotice.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTComponents.GenericNotice.mvc$model", "ExamsLegacy.TUTComponents.GenericNotice.mvc$controller", "ExamsLegacy.clientVariables", "OutSystemsUI.Content.CardItem.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_TUTComponents_GenericNotice_mvc_model, ExamsLegacy_TUTComponents_GenericNotice_mvc_controller, ExamsLegacyClientVariables, OutSystemsUI_Content_CardItem_mvc_view, OSWidgets) {
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
            View.displayName = "TUTComponents.GenericNotice";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Content_CardItem_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_GenericNotice_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_GenericNotice_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_Content_CardItem_mvc_view, {
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
    uuid: "0",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    left: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "info-circle",
    iconSize: /*Fourtimes*/ 3,
    style: (("icon" + " text-") + model.variables.iconColourIn),
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconColourInDataFetchStatus)
    })];
    }),
    title: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phTitle,
    _idProps: {
    service: idService,
    name: "phTitle"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    content: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phContent,
    _idProps: {
    service: idService,
    name: "phContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    right: PlaceholderContent.Empty
    }
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTComponents.GenericNotice.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    
    