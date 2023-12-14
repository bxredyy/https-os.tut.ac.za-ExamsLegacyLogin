define("ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "TUTExamsLegacyDefaults_CS.model", "ExamsLegacy.model$StudentBioDetail_RecordList", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS"], function (OutSystems, ExamsLegacyModel, TUTExamsLegacyDefaults_CSModel) {
    var OS = OutSystems.Internal;
    
    var DA_GetStudentBioDataActRec = (function (_super) {
    __extends(DA_GetStudentBioDataActRec, _super);
    function DA_GetStudentBioDataActRec(defaults) {
    _super.apply(this, arguments);
    }
    DA_GetStudentBioDataActRec.attributesToDeclare = function () {
    return [
    this.attr("StudentBio", "studentBioOut", "StudentBio", true, false, OS.Types.RecordList, function () {
    return OS.DataTypes.ImmutableBase.getData(new ExamsLegacyModel.StudentBioDetail_RecordList());
    }, true, ExamsLegacyModel.StudentBioDetail_RecordList), 
    this.attr("IsStudent", "isStudentOut", "IsStudent", true, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("MustIgnore", "mustIgnoreOut", "MustIgnore", true, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("ExecuteErrors", "executeErrorsOut", "ExecuteErrors", true, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec());
    }, true, TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec)
    ].concat(_super.attributesToDeclare.call(this));
    };
    DA_GetStudentBioDataActRec.init();
    return DA_GetStudentBioDataActRec;
    })(OS.Model.DataSourceRecord);
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("StudentNumber", "studentNumberVar", "StudentNumber", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, false), 
    this.attr("ShowWaitPopup", "showWaitPopupVar", "ShowWaitPopup", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("WaitMessage", "waitMessageVar", "WaitMessage", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("ShowErrorMessageOnView", "showErrorMessageOnViewVar", "ShowErrorMessageOnView", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("ShowErrorMessageOnSave", "showErrorMessageOnSaveVar", "ShowErrorMessageOnSave", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("DoTimeoutCheck", "doTimeoutCheckVar", "DoTimeoutCheck", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("TestCaching", "testCachingVar", "TestCaching", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("InStdNum", "inStdNumIn", "InStdNum", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, false), 
    this.attr("_inStdNumInDataFetchStatus", "_inStdNumInDataFetchStatus", "_inStdNumInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("DA_GetStudentBio", "dA_GetStudentBioDataAct", "dA_GetStudentBioDataAct", true, true, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new DA_GetStudentBioDataActRec());
    }, true, DA_GetStudentBioDataActRec)
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
    return {
    Form1: OS.Model.ValidationWidgetRecord,
    Input_StudentNumber: OS.Model.ValidationWidgetRecord,
    Switch_TestCaching: OS.Model.ValidationWidgetRecord
    };
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
    return true;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("InStdNum" in inputs) {
    this.variables.inStdNumIn = inputs.InStdNum;
    if("_inStdNumInDataFetchStatus" in inputs) {
    this.variables._inStdNumInDataFetchStatus = inputs._inStdNumInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTComponents.AdmStudentSelector");
    });
    define("ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "TUTExamsLegacyDefaults_CS.model", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$model", "ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$controller", "ExamsLegacy.clientVariables", "ExamsLegacy.TUTLayouts.BaseLayout.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Utilities.AlignCenter.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "TUTExamsLegacyCoreUI.Generic.BioCard.mvc$view", "ExamsLegacy.model$StudentBioDetail_RecordList", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, TUTExamsLegacyDefaults_CSModel, React, OSView, ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_model, ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_controller, ExamsLegacyClientVariables, ExamsLegacy_TUTLayouts_BaseLayout_mvc_view, OSWidgets, OutSystemsUI_Utilities_AlignCenter_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, TUTExamsLegacyCoreUI_Generic_BioCard_mvc_view) {
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
            View.displayName = "TUTComponents.AdmStudentSelector";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [ExamsLegacy_TUTLayouts_BaseLayout_mvc_view, OutSystemsUI_Utilities_AlignCenter_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, TUTExamsLegacyCoreUI_Generic_BioCard_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(ExamsLegacy_TUTLayouts_BaseLayout_mvc_view, {
    inputs: {
    WaitMessage: model.variables.waitMessageVar,
    ShowErrorMessageOnView: model.variables.showErrorMessageOnViewVar,
    DoTimeoutCheck: model.variables.doTimeoutCheckVar,
    ShowErrorMessageOnSave: model.variables.showErrorMessageOnSaveVar,
    ShowWaitPopup: model.variables.showWaitPopupVar
    },
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    },
    timeoutTimer$Action: function () {
    var eventHandlerContext = callContext.clone();
    controller.timer_TimeoutTimer$Action(controller.callContext(eventHandlerContext));
    
    ;
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
    phGenericViewErrorTitle: new PlaceholderContent(function () {
    return ["Error loading data"];
    }),
    phGenericViewErrorMessage: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "An error occurred while loading data from the SIS."), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    extendedProperties: {
    style: "background-color: #f3f6f8; border-radius: 5px; font-style: italic; padding: 5px;"
    },
    visible: (model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr > 1000),
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr)
    }, React.createElement(OSWidgets.Expression, {
    value: (((((model.variables.dA_GetStudentBioDataAct.executeErrorsOut.messageAttr + " (Error ") + (model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr).toString()) + ", ") + model.variables.dA_GetStudentBioDataAct.executeErrorsOut.actionNameAttr) + ")"),
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr)
    })), $if(((model.variables.dA_GetStudentBioDataAct.hasFetchErrorAttr || (model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr === 0)) || (model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr === 3001)), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "padding: 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Button, {
    enabled: true,
    isDefault: false,
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.onClick_TryAgain$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    style: "btn btn-primary btn-small",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Try Again"))];
    }, function () {
    return [];
    })];
    }),
    phGenericSaveErrorTitle: PlaceholderContent.Empty,
    phGenericSaveErrorMessage: PlaceholderContent.Empty,
    phMainArea: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Form, {
    _validationProps: {
    validationService: validationService
    },
    gridProperties: {
    classes: "OSFillParent"
    },
    style: "form card DropShadow",
    _idProps: {
    service: idService,
    name: "Form1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Label, {
    gridProperties: {
    classes: "OSFillParent"
    },
    mandatory: true,
    targetWidget: "Input_StudentNumber",
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Student Number"), React.createElement(OSWidgets.Input, {
    _validationProps: {
    validationService: validationService,
    validationParentId: idService.getId("Form1")
    },
    enabled: true,
    gridProperties: {
    classes: "OSFillParent"
    },
    inputType: /*Number*/ 2,
    mandatory: true,
    maxLength: 0,
    style: "form-control",
    variable: model.createVariable(OS.Types.LongInteger, model.variables.studentNumberVar, function (value) {
    model.variables.studentNumberVar = value;
    }),
    _idProps: {
    service: idService,
    name: "Input_StudentNumber"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OutSystemsUI_Utilities_AlignCenter_mvc_view, {
    inputs: {},
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    }
    },
    _validationProps: {
    validationService: validationService,
    validationParentId: idService.getId("Form1")
    },
    _idProps: {
    service: idService,
    uuid: "11",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    content: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Switch, {
    _validationProps: {
    validationService: validationService,
    validationParentId: idService.getId("Form1")
    },
    enabled: true,
    style: "switch",
    variable: model.createVariable(OS.Types.Boolean, model.variables.testCachingVar, function (value) {
    model.variables.testCachingVar = value;
    }),
    _idProps: {
    service: idService,
    name: "Switch_TestCaching"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-bottom: 15px;"
    },
    gridProperties: {
    marginLeft: "10px"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "13"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
    inputs: {},
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    }
    },
    _validationProps: {
    validationService: validationService,
    validationParentId: idService.getId("Form1")
    },
    _idProps: {
    service: idService,
    uuid: "14",
    alias: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    content: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Label, {
    gridProperties: {
    classes: "OSFillParent"
    },
    targetWidget: "Switch_TestCaching",
    _idProps: {
    service: idService,
    uuid: "15"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Test caching services?")];
    }),
    tooltip: new PlaceholderContent(function () {
    return ["If set, the system will use cached results, simulating how students experience the system."];
    })
    },
    _dependencies: []
    }))];
    })
    },
    _dependencies: [asPrimitiveValue(model.variables.testCachingVar)]
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "16"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Button, {
    enabled: true,
    isDefault: true,
    onClick: function () {
    _this.validateWidget(idService.getId("Form1"));
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.onClick_Load$Action(controller.callContext(eventHandlerContext));
    });
    
    ;
    },
    style: "btn btn-primary btn-small",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "17"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Load Student"))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    visible: (((model.variables.studentNumberVar.gt(OS.BuiltinFunctions.integerToLongInteger(0)) && model.variables.dA_GetStudentBioDataAct.isDataFetchedAttr) && model.variables.dA_GetStudentBioDataAct.studentBioOut.getCurrent(callContext.iterationContext).stdNumAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))) && (model.variables.dA_GetStudentBioDataAct.mustIgnoreOut === false)),
    _idProps: {
    service: idService,
    uuid: "18"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr)
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "color: #a30f08; font-weight: bold; padding: 5px; text-align: center;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "19"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-right: 10px;"
    },
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "20"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Icon, {
    icon: "exclamation-circle",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "21"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    gridProperties: {
    classes: "OSInline"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "22"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "That student number is invalid"))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    extendedProperties: {
    style: "margin-top: 8px;"
    },
    visible: (model.variables.dA_GetStudentBioDataAct.isDataFetchedAttr && model.variables.dA_GetStudentBioDataAct.studentBioOut.getCurrent(callContext.iterationContext).stdNumAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))),
    _idProps: {
    service: idService,
    uuid: "23"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr)
    }, React.createElement(TUTExamsLegacyCoreUI_Generic_BioCard_mvc_view, {
    inputs: {
    StudentBio: model.variables.dA_GetStudentBioDataAct.studentBioOut,
    _studentBioInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr),
    IsDataFetched: model.variables.dA_GetStudentBioDataAct.isDataFetchedAttr
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
    uuid: "24",
    alias: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }))];
    })
    },
    _dependencies: [asPrimitiveValue(model.variables.testCachingVar), asPrimitiveValue(model.variables.studentNumberVar), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.mustIgnoreOut), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.studentBioOut), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.executeErrorsOut.actionNameAttr), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.executeErrorsOut.messageAttr), asPrimitiveValue(model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr)]
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "TUTExamsLegacyDefaults_CS.model", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "ExamsLegacy.model$StudentBioDetail_RecordList", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, TUTExamsLegacyDefaults_CSModel, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {
    dA_GetStudentBio$DataActRefresh: -1
    };
    this.dataFetchDependentsGraph = {
    dA_GetStudentBio$DataActRefresh: []
    };
    this.shouldSendClientVarsToDataSources = true;
    }
    // Server Actions
    
    // Aggregates and Data Actions
    Controller.prototype.dA_GetStudentBio$DataActRefresh = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var callContext = controller.callContext(callContext);
    return controller.callDataAction("DataActionDA_GetStudentBio", "screenservices/ExamsLegacy/TUTComponents/AdmStudentSelector/DataActionDA_GetStudentBio", "CkKljMB8tGUfsqPbhXZK_Q", function (b) {
    model.variables.dA_GetStudentBioDataAct.dataFetchStatusAttr = b;
    }, function (json) {
    model.variables.dA_GetStudentBioDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.dA_GetStudentBioDataAct.constructor));
    }, undefined, undefined, undefined, callContext, ExamsLegacyClientVariables, false).then(function () {
    return controller._dA_GetStudentBioOnAfterFetch$Action(controller.callContext(callContext));
    });
    };
    
    Controller.prototype.dataFetchActionNames = ["dA_GetStudentBio$DataActRefresh"];
    // Client Actions
    Controller.prototype._onClick_TryAgain$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnClick_TryAgain");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: OnClick_Load
    return controller._onClick_Load$Action(callContext);
    });
    };
    Controller.prototype._dA_GetStudentBioOnAfterFetch$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("DA_GetStudentBioOnAfterFetch");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: Status_ClearIsLoading
    controller._status_ClearIsLoading$Action(callContext);
    return OS.Flow.executeSequence(function () {
    if((model.variables.studentNumberVar.gt(OS.BuiltinFunctions.integerToLongInteger(0)))) {
    // Found records?
    return OS.Flow.executeSequence(function () {
    if((model.variables.dA_GetStudentBioDataAct.studentBioOut.getCurrent(callContext.iterationContext).stdNumAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0)))) {
    // AdmStudentNumber = StudentNumber
    ExamsLegacyClientVariables.setAdmStudentNumber(model.variables.studentNumberVar);
    // AdmTestCaching = TestCaching
    ExamsLegacyClientVariables.setAdmTestCaching(model.variables.testCachingVar);
    // Trigger Event: Refresh
    return controller.refresh$Action(model.variables.dA_GetStudentBioDataAct.studentBioOut.getCurrent(callContext.iterationContext).stdNumAttr, callContext);
    }
    
    });
    }
    
    });
    });
    };
    Controller.prototype._timer_TimeoutTimer$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Timer_TimeoutTimer");
    callContext = controller.callContext(callContext);
    if((model.variables.showWaitPopupVar)) {
    if((model.variables.dA_GetStudentBioDataAct.hasFetchErrorAttr)) {
    // ShowErrorMessageOnView = True
    model.variables.showErrorMessageOnViewVar = true;
    // DoTimeoutCheck = False
    model.variables.doTimeoutCheckVar = false;
    // ShowWaitPopup = False
    model.variables.showWaitPopupVar = false;
    } else {
    if(((model.variables.dA_GetStudentBioDataAct.isDataFetchedAttr && ((model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr) !== (1000))))) {
    OS.FeedbackMessageService.showFeedbackMessage((((((("Error " + (model.variables.dA_GetStudentBioDataAct.executeErrorsOut.codeAttr).toString()) + ": ") + model.variables.dA_GetStudentBioDataAct.executeErrorsOut.messageAttr) + " (") + model.variables.dA_GetStudentBioDataAct.executeErrorsOut.actionNameAttr) + ")"), /*Error*/ 3);
    // DoTimeoutCheck = False
    model.variables.doTimeoutCheckVar = false;
    // ShowWaitPopup = False
    model.variables.showWaitPopupVar = false;
    }
    
    }
    
    } else {
    // DisableTimer
    // DoTimeoutCheck = False
    model.variables.doTimeoutCheckVar = false;
    }
    
    };
    Controller.prototype._onClick_Load$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnClick_Load");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    if(((model.variables.studentNumberVar.lt(OS.BuiltinFunctions.integerToLongInteger(9999)) || model.variables.studentNumberVar.gt(OS.BuiltinFunctions.integerToLongInteger(999999999))))) {
    // Input_StudentNumber.Valid = False
    model.widgets.get(idService.getId("Input_StudentNumber")).validAttr = false;
    // Input_StudentNumber.ValidationMessage = "Enter a valid student number"
    model.widgets.get(idService.getId("Input_StudentNumber")).validationMessageAttr = "Enter a valid student number";
    } else {
    // Input_StudentNumber.Valid = True
    model.widgets.get(idService.getId("Input_StudentNumber")).validAttr = true;
    }
    
    return OS.Flow.executeSequence(function () {
    if((model.widgets.get(idService.getId("Form1")).validAttr)) {
    // Execute Action: Status_SetIsLoading
    controller._status_SetIsLoading$Action("Loading Student", callContext);
    // Refresh Query: DA_GetStudentBio
    var result = controller.dA_GetStudentBio$DataActRefresh(callContext);
    model.flush();
    return result;
    }
    
    });
    });
    };
    Controller.prototype._status_SetIsLoading$Action = function (loadMessageIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Status_SetIsLoading");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ExamsLegacy.TUTComponents.AdmStudentSelector.Status_SetIsLoading$vars"))());
    vars.value.loadMessageInLocal = loadMessageIn;
    // ShowWaitPopup = True
    model.variables.showWaitPopupVar = true;
    // DoTimeoutCheck = True
    model.variables.doTimeoutCheckVar = true;
    // WaitMessage = LoadMessage
    model.variables.waitMessageVar = vars.value.loadMessageInLocal;
    // ShowErrorMessageOnView = False
    model.variables.showErrorMessageOnViewVar = false;
    };
    Controller.registerVariableGroupType("ExamsLegacy.TUTComponents.AdmStudentSelector.Status_SetIsLoading$vars", [{
    name: "LoadMessage",
    attrName: "loadMessageInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    Controller.prototype._onInitialize$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnInitialize");
    callContext = controller.callContext(callContext);
    // TestCaching = AdmTestCaching
    model.variables.testCachingVar = ExamsLegacyClientVariables.getAdmTestCaching();
    if(((ExamsLegacyClientVariables.getAdmStudentNumber().gt(OS.BuiltinFunctions.integerToLongInteger(0)) && ExamsLegacyClientVariables.getAdmStudentNumber().lt(OS.BuiltinFunctions.integerToLongInteger(999999999))))) {
    // StudentNumber = AdmStudentNumber
    model.variables.studentNumberVar = ExamsLegacyClientVariables.getAdmStudentNumber();
    } else {
    if(((model.variables.inStdNumIn.gt(OS.BuiltinFunctions.integerToLongInteger(0)) && model.variables.inStdNumIn.lt(OS.BuiltinFunctions.integerToLongInteger(999999999))))) {
    // StudentNumber = InStdNum
    model.variables.studentNumberVar = model.variables.inStdNumIn;
    }
    
    }
    
    };
    Controller.prototype._status_ClearIsLoading$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("Status_ClearIsLoading");
    callContext = controller.callContext(callContext);
    // ShowWaitPopup = False
    model.variables.showWaitPopupVar = false;
    // DoTimeoutCheck = False
    model.variables.doTimeoutCheckVar = false;
    // ShowErrorMessageOnView = False
    model.variables.showErrorMessageOnViewVar = false;
    };
    
    Controller.prototype.onClick_TryAgain$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onClick_TryAgain$Action, callContext);
    
    };
    Controller.prototype.dA_GetStudentBioOnAfterFetch$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._dA_GetStudentBioOnAfterFetch$Action, callContext);
    
    };
    Controller.prototype.timer_TimeoutTimer$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._timer_TimeoutTimer$Action, callContext);
    
    };
    Controller.prototype.onClick_Load$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onClick_Load$Action, callContext);
    
    };
    Controller.prototype.status_SetIsLoading$Action = function (loadMessageIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._status_SetIsLoading$Action, callContext, loadMessageIn);
    
    };
    Controller.prototype.onInitialize$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
    
    };
    Controller.prototype.status_ClearIsLoading$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._status_ClearIsLoading$Action, callContext);
    
    };
    Controller.prototype.refresh$Action = function () {
    return Promise.resolve();
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onInitialize$Action(callContext);
    
    };
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
    
    