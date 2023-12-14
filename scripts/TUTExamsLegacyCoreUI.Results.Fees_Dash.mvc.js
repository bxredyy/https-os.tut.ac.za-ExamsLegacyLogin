define("TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$model"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvcModel) {
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
    }, false), 
    this.attr("FeesTotal", "feesTotalIn", "FeesTotal", true, false, OS.Types.Decimal, function () {
    return OS.DataTypes.Decimal.defaultValue;
    }, false), 
    this.attr("_feesTotalInDataFetchStatus", "_feesTotalInDataFetchStatus", "_feesTotalInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ShowFeesMessage", "showFeesMessageIn", "ShowFeesMessage", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_showFeesMessageInDataFetchStatus", "_showFeesMessageInDataFetchStatus", "_showFeesMessageInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("FeesMessage", "feesMessageIn", "FeesMessage", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_feesMessageInDataFetchStatus", "_feesMessageInDataFetchStatus", "_feesMessageInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Model._hasValidationWidgetsValue = TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvcModel.hasValidationWidgets;
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("HeadingCSS" in inputs) {
    this.variables.headingCSSIn = inputs.HeadingCSS;
    if("_headingCSSInDataFetchStatus" in inputs) {
    this.variables._headingCSSInDataFetchStatus = inputs._headingCSSInDataFetchStatus;
    }
    
    }
    
    if("FeesTotal" in inputs) {
    this.variables.feesTotalIn = inputs.FeesTotal;
    if("_feesTotalInDataFetchStatus" in inputs) {
    this.variables._feesTotalInDataFetchStatus = inputs._feesTotalInDataFetchStatus;
    }
    
    }
    
    if("ShowFeesMessage" in inputs) {
    this.variables.showFeesMessageIn = inputs.ShowFeesMessage;
    if("_showFeesMessageInDataFetchStatus" in inputs) {
    this.variables._showFeesMessageInDataFetchStatus = inputs._showFeesMessageInDataFetchStatus;
    }
    
    }
    
    if("FeesMessage" in inputs) {
    this.variables.feesMessageIn = inputs.FeesMessage;
    if("_feesMessageInDataFetchStatus" in inputs) {
    this.variables._feesMessageInDataFetchStatus = inputs._feesMessageInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Results.Fees_Dash");
    });
    define("TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "react", "OutSystems/ReactView/Main", "TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$model", "TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$controller", "TUTExamsLegacyCoreUI.clientVariables", "OutSystems/ReactWidgets/Main", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$view"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, React, OSView, TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_model, TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_controller, TUTExamsLegacyCoreUIClientVariables, OSWidgets, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view) {
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
            View.displayName = "Results.Fees_Dash";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), $if(!(model.variables.feesTotalIn.equals(OS.BuiltinFunctions.integerToDecimal(0))), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
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
    }, "Outstanding Fees"), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "font-size: 32px; font-weight: bold; margin-bottom: 5px; padding: 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: model.getCachedValue(idService.getId("FTTp8F+JTkqa8iWzg3vgXA.Value"), function () {
    return OS.BuiltinFunctions.formatCurrency(model.variables.feesTotalIn, "R", 2, ".", " ");
    }, function () {
    return model.variables.feesTotalIn;
    }),
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._feesTotalInDataFetchStatus)
    })), $if(model.variables.showFeesMessageIn, false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "border-color: #c9c9c9; border-radius: 5px; border-style: solid; border-width: 1px; margin-bottom: 3px; margin-top: 0px; padding: 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, {
    inputs: {
    Markdown: model.variables.feesMessageIn,
    _markdownInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._feesMessageInDataFetchStatus)
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
    uuid: "5",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }))];
    }, function () {
    return [];
    }))];
    }, function () {
    return [];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyCoreUI.languageResources", "TUTExamsLegacyCoreUI.clientVariables"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyCoreUILanguageResources, TUTExamsLegacyCoreUIClientVariables) {
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
    
    