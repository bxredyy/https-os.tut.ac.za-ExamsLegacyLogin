define("TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.Content.Tag.mvc$model", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$model", "TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeList"], function (OutSystems, TUTExamsLegacyCoreUIModel, OutSystemsUI_Content_Tag_mvcModel, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("ExamResults", "examResultsIn", "ExamResults", true, false, OS.Types.RecordList, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyCoreUIModel.ERResult_prt_ExamTypeList());
    }, false, TUTExamsLegacyCoreUIModel.ERResult_prt_ExamTypeList), 
    this.attr("_examResultsInDataFetchStatus", "_examResultsInDataFetchStatus", "_examResultsInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
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
    Model._hasValidationWidgetsValue = undefined;
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    if((Model._hasValidationWidgetsValue === undefined)) {
    Model._hasValidationWidgetsValue = (OutSystemsUI_Content_Tag_mvcModel.hasValidationWidgets || TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvcModel.hasValidationWidgets);
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("ExamResults" in inputs) {
    this.variables.examResultsIn = inputs.ExamResults;
    if("_examResultsInDataFetchStatus" in inputs) {
    this.variables._examResultsInDataFetchStatus = inputs._examResultsInDataFetchStatus;
    }
    
    }
    
    if("HeadingCSS" in inputs) {
    this.variables.headingCSSIn = inputs.HeadingCSS;
    if("_headingCSSInDataFetchStatus" in inputs) {
    this.variables._headingCSSInDataFetchStatus = inputs._headingCSSInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Results.Results_Dash");
    });
    define("TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "react", "OutSystems/ReactView/Main", "TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$model", "TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$controller", "TUTExamsLegacyCoreUI.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Content.Tag.mvc$view", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$view", "TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeList"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, React, OSView, TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_model, TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_controller, TUTExamsLegacyCoreUIClientVariables, OSWidgets, OutSystemsUI_Content_Tag_mvc_view, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view) {
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
            View.displayName = "Results.Results_Dash";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css", "css/TUTExamsLegacyCoreUI.Results.Results_Dash.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Content_Tag_mvc_view, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
    animateItems: true,
    gridProperties: {
    classes: "OSFillParent"
    },
    mode: /*Default*/ 0,
    source: model.variables.examResultsIn,
    style: "\"list list-group\"",
    tag: "div",
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus),
    placeholders: {
    content: new IteratorPlaceholderContent(function (idService, callContext) {
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
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).messageAttr), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).examTypeAttr), asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables._headingCSSInDataFetchStatus), asPrimitiveValue(model.variables.headingCSSIn)]
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: ("border-radius: 5px; font-size: 18px; font-weight: bold; margin-bottom: 8px; margin-top: 5px; padding: 5px 5px 7px 8px;" + model.variables.headingCSSIn)
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: (((model.variables.examResultsIn.getCurrent(callContext.iterationContext).examTypeAttr + " (") + (model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.length).toString()) + " papers)"),
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "ResultScrollBox",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.TableRecords, {
    showHeader: true,
    source: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr,
    style: "table",
    styleHeader: "table-header resultstbl-header",
    styleRow: "resultstbl-row",
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus),
    placeholders: {
    headerRow: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.HeaderCell, {
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Subject"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Predicate"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Admission"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Paper Mark"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Final Mark"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "11"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Subject Result"), React.createElement(OSWidgets.HeaderCell, {
    _idProps: {
    service: idService,
    uuid: "12"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Date"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "13"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Time"), React.createElement(OSWidgets.HeaderCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "14"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Paper No."), React.createElement(OSWidgets.HeaderCell, {
    _idProps: {
    service: idService,
    uuid: "15"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }, "Paper Description")];
    }),
    row: new IteratorPlaceholderContent(function (idService, callContext) {
    return [React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "16"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).subjectAttr)]
    }, React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "display: inline-block;"
    },
    gridProperties: {
    width: "63px"
    },
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).subjectAttr,
    _idProps: {
    service: idService,
    uuid: "17"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "18"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).yearMarkAttr)]
    }, React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "display: inline-block;"
    },
    gridProperties: {
    width: "50px"
    },
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).yearMarkAttr,
    _idProps: {
    service: idService,
    uuid: "19"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "20"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).hasAdmissionAttr)]
    }, $if(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).hasAdmissionAttr, false, this, function () {
    return [React.createElement(OutSystemsUI_Content_Tag_mvc_view, {
    inputs: {
    Size: TUTExamsLegacyCoreUIModel.staticEntities.size.small,
    Color: TUTExamsLegacyCoreUIModel.staticEntities.color.green
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
    uuid: "21",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    tag: new PlaceholderContent(function () {
    return ["YES"];
    })
    },
    _dependencies: []
    })];
    }, function () {
    return [];
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "22"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperMarkAttr)]
    }, React.createElement(OSWidgets.Expression, {
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperMarkAttr,
    _idProps: {
    service: idService,
    uuid: "23"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "24"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).finalMarkAttr)]
    }, React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "display: inline-block; min-width: 90px;"
    },
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).finalMarkAttr,
    _idProps: {
    service: idService,
    uuid: "25"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: ("text-align: center;" + ((model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).qualifySuppAttr) ? ("color:red;font-weight: bold;") : ("")))
    },
    _idProps: {
    service: idService,
    uuid: "26"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).outcomeAttr)]
    }, React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "display: inline-block; min-width: 220px;"
    },
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).outcomeAttr,
    _idProps: {
    service: idService,
    uuid: "27"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "28"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperDateAttr)]
    }, React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "display: inline-block; min-width: 80px;"
    },
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperDateAttr,
    _idProps: {
    service: idService,
    uuid: "29"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "30"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperTimeAttr)]
    }, React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "display: inline-block; min-width: 40px;"
    },
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperTimeAttr,
    _idProps: {
    service: idService,
    uuid: "31"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "32"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperNumAttr)]
    }, React.createElement(OSWidgets.Expression, {
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperNumAttr,
    _idProps: {
    service: idService,
    uuid: "33"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    })), React.createElement(OSWidgets.RowCell, {
    extendedProperties: {
    style: "text-align: center;"
    },
    _idProps: {
    service: idService,
    uuid: "34"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperDescriptAttr)]
    }, React.createElement(OSWidgets.Expression, {
    value: model.variables.examResultsIn.getCurrent(callContext.iterationContext).resultsAttr.getCurrent(callContext.iterationContext).paperDescriptAttr,
    _idProps: {
    service: idService,
    uuid: "35"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
    }))];
    }, callContext, idService, "2_0")
    },
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus)]
    })), $if(((OS.BuiltinFunctions.trim(model.variables.examResultsIn.getCurrent(callContext.iterationContext).messageAttr)) !== ("")), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-top: 2px; padding: 5px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "36"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, {
    inputs: {
    Markdown: model.variables.examResultsIn.getCurrent(callContext.iterationContext).messageAttr,
    _markdownInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._examResultsInDataFetchStatus)
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
    uuid: "37",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }))];
    }, function () {
    return [];
    }))];
    }, callContext, idService, "2")
    },
    _dependencies: [asPrimitiveValue(model.variables._examResultsInDataFetchStatus), asPrimitiveValue(model.variables._headingCSSInDataFetchStatus), asPrimitiveValue(model.variables.headingCSSIn)]
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller", "TUTExamsLegacyCoreUI.languageResources", "TUTExamsLegacyCoreUI.clientVariables", "TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeList"], function (OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController, TUTExamsLegacyCoreUILanguageResources, TUTExamsLegacyCoreUIClientVariables) {
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
    
    