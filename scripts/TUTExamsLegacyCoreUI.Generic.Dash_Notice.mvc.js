define("TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model"], function (OutSystems, TUTExamsLegacyCoreUIModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("HeadingCSS", "headingCSSIn", "HeadingCSS", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_headingCSSInDataFetchStatus", "_headingCSSInDataFetchStatus", "_headingCSSInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("HeadingCSS" in inputs) {
    this.variables.headingCSSIn = inputs.HeadingCSS;
    if("_headingCSSInDataFetchStatus" in inputs) {
    this.variables._headingCSSInDataFetchStatus = inputs._headingCSSInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Generic.Dash_Notice");
    });
    define("TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "react", "OutSystems/ReactView/Main", "TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$model", "TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$controller", "TUTExamsLegacyCoreUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, React, OSView, TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_model, TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_controller, TUTExamsLegacyCoreUIClientVariables, OSWidgets) {
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
            View.displayName = "Generic.Dash_Notice";
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
                    return TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_controller;
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
    style: "margin-bottom: 10px; padding: 5px;"
    },
    style: "DropShadow",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: ("border-radius: 5px; font-size: 18px; font-weight: bold; margin-bottom: 8px; margin-top: 5px; padding: 5px 5px 7px 8px;" + model.variables.headingCSSIn)
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phHeading,
    _idProps: {
    service: idService,
    name: "phHeading"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-bottom: 5px; padding: 5px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phContent,
    _idProps: {
    service: idService,
    name: "phContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyCoreUI.languageResources", "TUTExamsLegacyCoreUI.clientVariables"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyCoreUILanguageResources, TUTExamsLegacyCoreUIClientVariables) {
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
    return TUTExamsLegacyCoreUIController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, TUTExamsLegacyCoreUILanguageResources);
    });
    
    