define("OutSystemsUI.Content.CardItem.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
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
    if("ExtendedClass" in inputs) {
    this.variables.extendedClassIn = inputs.ExtendedClass;
    if("_extendedClassInDataFetchStatus" in inputs) {
    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Content.CardItem");
    });
    define("OutSystemsUI.Content.CardItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.CardItem.mvc$model", "OutSystemsUI.Content.CardItem.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_CardItem_mvc_model, OutSystemsUI_Content_CardItem_mvc_controller, OSWidgets) {
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
            View.displayName = "Content.CardItem";
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
                    return OutSystemsUI_Content_CardItem_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return OutSystemsUI_Content_CardItem_mvc_controller;
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
    style: (("card card-detail" + " ") + model.variables.extendedClassIn),
    visible: true,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.left,
    gridProperties: {
    classes: "OSInline"
    },
    style: "ph card-detail-left",
    _idProps: {
    service: idService,
    name: "Left"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "card-detail-center",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.title,
    style: "ph card-detail-title",
    _idProps: {
    service: idService,
    name: "Title"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.content,
    style: "ph card-detail-text text-grey",
    _idProps: {
    service: idService,
    name: "Content"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.right,
    gridProperties: {
    classes: "OSInline"
    },
    style: "ph card-detail-right",
    _idProps: {
    service: idService,
    name: "Right"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("OutSystemsUI.Content.CardItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.CardItem.mvc$translationsResources"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_CardItem_mvc_TranslationsResources) {
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
    Controller.prototype.translationResources = OutSystemsUI_Content_CardItem_mvc_TranslationsResources;
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
    return OutSystemsUIController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
    });
    
    define("OutSystemsUI.Content.CardItem.mvc$translationsResources", ["exports"], function (exports) {
    return {};
    });
    