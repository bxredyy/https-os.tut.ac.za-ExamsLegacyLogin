define("TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyPortal_CSModel) {
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
    this.attr("ReportDetail", "reportDetailIn", "ReportDetail", true, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec());
    }, false, TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec), 
    this.attr("_reportDetailInDataFetchStatus", "_reportDetailInDataFetchStatus", "_reportDetailInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    
    if("ReportDetail" in inputs) {
    this.variables.reportDetailIn = inputs.ReportDetail;
    if("_reportDetailInDataFetchStatus" in inputs) {
    this.variables._reportDetailInDataFetchStatus = inputs._reportDetailInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Generic.ReportCard");
    });
    define("TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyPortal_CS.model", "react", "OutSystems/ReactView/Main", "TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$model", "TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$controller", "TUTExamsLegacyCoreUI.clientVariables", "OutSystems/ReactWidgets/Main", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyPortal_CSModel, React, OSView, TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_model, TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_controller, TUTExamsLegacyCoreUIClientVariables, OSWidgets) {
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
            View.displayName = "Generic.ReportCard";
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
                    return TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.reportDetailIn.reportRunIdAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0)), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: center;"
    },
    gridProperties: {
    classes: "OSInline"
    },
    style: "DarkDropShadow",
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
    style: "min-width: 300px; padding: 4px;"
    },
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    name: "cReportCol"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: ("font-size: 16px; font-weight: bold; margin-bottom: 4px; text-align: center;" + model.variables.headingCSSIn)
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Report"), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "border-color: #d6d4d4; border-radius: 5px; border-style: solid; border-width: 1px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "padding: 5px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: ((OS.BuiltinFunctions.dateTimeToText(model.variables.reportDetailIn.captureDateAttr) + " / ") + OS.BuiltinFunctions.longIntegerToText(model.variables.reportDetailIn.reportRunIdAttr)),
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._reportDetailInDataFetchStatus)
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "padding: 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(model.variables.reportDetailIn.reportIsLiveAttr, false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "check-square-o",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "square-o",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "font-weight: bold; padding-bottom: px; padding-left: 0px; padding-right: 0px; padding-top: 2px;"
    },
    gridProperties: {
    classes: "OSInline",
    marginLeft: "10px"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Is Live?")))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "min-width: 300px; padding: 4px;"
    },
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    name: "cCycleCol"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: ("font-size: 16px; font-weight: bold; margin-bottom: 4px; text-align: center;" + model.variables.headingCSSIn)
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "12"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Exam Cycle"), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "border-color: #d6d4d4; border-radius: 5px; border-style: solid; border-width: 1px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "13"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "padding: 5px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "14"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: model.variables.reportDetailIn.cycleNameAttr,
    _idProps: {
    service: idService,
    uuid: "15"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._reportDetailInDataFetchStatus)
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "padding: 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "16"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "17"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(model.variables.reportDetailIn.cycleIsLiveAttr, false, this, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "check-square-o",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "18"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "square-o",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "19"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "font-weight: bold; padding-bottom: px; padding-left: 0px; padding-right: 0px; padding-top: 2px;"
    },
    gridProperties: {
    classes: "OSInline",
    marginLeft: "10px"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "20"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Is Live?")))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "21"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phResetContent,
    _idProps: {
    service: idService,
    name: "phResetContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })))];
    }, function () {
    return [];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.languageResources", "TUTExamsLegacyCoreUI.clientVariables", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUILanguageResources, TUTExamsLegacyCoreUIClientVariables) {
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
    
    