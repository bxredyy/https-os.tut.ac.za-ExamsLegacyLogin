define("ExamsLegacy.TUTPageBlocks.HomeBlock.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyPortal_CS.model", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$model", "ExamsLegacy.TUTLayouts.ErrorHandlerLayout.mvc$model", "ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$model", "ExamsLegacy.TUTLayouts.StandardLayout.mvc$model", "ExamsLegacy.TUTComponents.ContentCenter.mvc$model", "TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$model", "ExamsLegacy.TUTComponents.ResetReport.mvc$model", "TUTExamsLegacyCoreUI.Generic.BioCard.mvc$model", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$model", "ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$model", "TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$model", "OutSystemsUI.Content.Alert.mvc$model", "TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$model", "TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$model", "TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$model", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "ExamsLegacy.referencesHealth$TUTExamsLegacyPortal_CS", "ExamsLegacy.model$StudentBioDetail_RecordList", "ExamsLegacy.model$ERResult_prt_ExamTypeList", "ExamsLegacy.model$ERResults_prt_ResultList", "ExamsLegacy.model$Debug_recordList"], function (OutSystems, ExamsLegacyModel, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyPortal_CSModel, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvcModel, ExamsLegacy_TUTLayouts_ErrorHandlerLayout_mvcModel, ExamsLegacy_TUTComponents_ErrorBodyHelper_mvcModel, ExamsLegacy_TUTLayouts_StandardLayout_mvcModel, ExamsLegacy_TUTComponents_ContentCenter_mvcModel, TUTExamsLegacyCoreUI_Generic_ReportCard_mvcModel, ExamsLegacy_TUTComponents_ResetReport_mvcModel, TUTExamsLegacyCoreUI_Generic_BioCard_mvcModel, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvcModel, ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvcModel, TUTExamsLegacyCoreUI_Results_Results_Dash_mvcModel, OutSystemsUI_Content_Alert_mvcModel, TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvcModel, TUTExamsLegacyCoreUI_Results_Fees_Dash_mvcModel, TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvcModel) {
var OS = OutSystems.Internal;

var DA_GetDataDataActRec = (function (_super) {
__extends(DA_GetDataDataActRec, _super);
function DA_GetDataDataActRec(defaults) {
_super.apply(this, arguments);
}
DA_GetDataDataActRec.attributesToDeclare = function () {
return [
this.attr("IsStudent", "isStudentOut", "IsStudent", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsGlobalAccessAllowed", "isGlobalAccessAllowedOut", "IsGlobalAccessAllowed", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("GlobalAccessMessage", "globalAccessMessageOut", "GlobalAccessMessage", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Platform", "platformOut", "Platform", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DebugMode", "debugModeOut", "DebugMode", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowLandingNotice", "showLandingNoticeOut", "ShowLandingNotice", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowStartMessage", "showStartMessageOut", "ShowStartMessage", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowEndMessage", "showEndMessageOut", "ShowEndMessage", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowPracticalSubjMessge", "showPracticalSubjMessgeOut", "ShowPracticalSubjMessge", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowFeesOutstandingMessage", "showFeesOutstandingMessageOut", "ShowFeesOutstandingMessage", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("AdmType", "admTypeOut", "AdmType", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExecuteErrors", "executeErrorsOut", "ExecuteErrors", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec());
}, true, TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec), 
this.attr("StudentBio", "studentBioOut", "StudentBio", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ExamsLegacyModel.StudentBioDetail_RecordList());
}, true, ExamsLegacyModel.StudentBioDetail_RecordList), 
this.attr("ExamResults", "examResultsOut", "ExamResults", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ExamsLegacyModel.ERResult_prt_ExamTypeList());
}, true, ExamsLegacyModel.ERResult_prt_ExamTypeList), 
this.attr("ExamCycleName", "examCycleNameOut", "ExamCycleName", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TotalOwed", "totalOwedOut", "TotalOwed", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MessageFeesOutstanding", "messageFeesOutstandingOut", "MessageFeesOutstanding", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MessageStart", "messageStartOut", "MessageStart", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MessageEnd", "messageEndOut", "MessageEnd", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MessagePracticalSubj", "messagePracticalSubjOut", "MessagePracticalSubj", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MessageLandingNotice", "messageLandingNoticeOut", "MessageLandingNotice", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DebugData", "debugDataOut", "DebugData", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ExamsLegacyModel.Debug_recordList());
}, true, ExamsLegacyModel.Debug_recordList), 
this.attr("ReportDateTime", "reportDateTimeOut", "ReportDateTime", true, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CacheDateTime", "cacheDateTimeOut", "CacheDateTime", true, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ReportRefNum", "reportRefNumOut", "ReportRefNum", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OutReportDetail", "outReportDetailOut", "OutReportDetail", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec());
}, true, TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec), 
this.attr("BlockHeading", "blockHeadingOut", "BlockHeading", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("BlockMessage", "blockMessageOut", "BlockMessage", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("NewGUID", "newGUIDOut", "NewGUID", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("NotLatestGUID", "notLatestGUIDOut", "NotLatestGUID", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("LatestGUID", "latestGUIDOut", "LatestGUID", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsInvalidGUID", "isInvalidGUIDOut", "IsInvalidGUID", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("HaveOtherExams", "haveOtherExamsOut", "HaveOtherExams", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DA_GetDataDataActRec.init();
return DA_GetDataDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
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
this.attr("CSS_Heading", "cSS_HeadingVar", "CSS_Heading", true, false, OS.Types.Text, function () {
return "background-color: var(--color-blue-darker); color:white;";
}, false), 
this.attr("InRefresh", "inRefreshIn", "InRefresh", true, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_inRefreshInDataFetchStatus", "_inRefreshInDataFetchStatus", "_inRefreshInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DA_GetData", "dA_GetDataDataAct", "dA_GetDataDataAct", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DA_GetDataDataActRec());
}, true, DA_GetDataDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((((((TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvcModel.hasValidationWidgets || ExamsLegacy_TUTLayouts_ErrorHandlerLayout_mvcModel.hasValidationWidgets) || ExamsLegacy_TUTComponents_ErrorBodyHelper_mvcModel.hasValidationWidgets) || ExamsLegacy_TUTLayouts_StandardLayout_mvcModel.hasValidationWidgets) || ExamsLegacy_TUTComponents_ContentCenter_mvcModel.hasValidationWidgets) || TUTExamsLegacyCoreUI_Generic_ReportCard_mvcModel.hasValidationWidgets) || ExamsLegacy_TUTComponents_ResetReport_mvcModel.hasValidationWidgets) || TUTExamsLegacyCoreUI_Generic_BioCard_mvcModel.hasValidationWidgets) || TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvcModel.hasValidationWidgets) || ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvcModel.hasValidationWidgets) || TUTExamsLegacyCoreUI_Results_Results_Dash_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Alert_mvcModel.hasValidationWidgets) || TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvcModel.hasValidationWidgets) || TUTExamsLegacyCoreUI_Results_Fees_Dash_mvcModel.hasValidationWidgets) || TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("InRefresh" in inputs) {
this.variables.inRefreshIn = inputs.InRefresh;
if("_inRefreshInDataFetchStatus" in inputs) {
this.variables._inRefreshInDataFetchStatus = inputs._inRefreshInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "TUTPageBlocks.HomeBlock");
});
define("ExamsLegacy.TUTPageBlocks.HomeBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyPortal_CS.model", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTPageBlocks.HomeBlock.mvc$model", "ExamsLegacy.TUTPageBlocks.HomeBlock.mvc$controller", "ExamsLegacy.clientVariables", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$view", "OutSystems/ReactWidgets/Main", "ExamsLegacy.TUTLayouts.ErrorHandlerLayout.mvc$view", "ExamsLegacy.TUTComponents.ErrorBodyHelper.mvc$view", "ExamsLegacy.TUTLayouts.StandardLayout.mvc$view", "ExamsLegacy.TUTComponents.ContentCenter.mvc$view", "TUTExamsLegacyCoreUI.Generic.ReportCard.mvc$view", "ExamsLegacy.TUTComponents.ResetReport.mvc$view", "TUTExamsLegacyCoreUI.Generic.BioCard.mvc$view", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$view", "ExamsLegacy.TUTComponents.HaveOtherExamWarning.mvc$view", "TUTExamsLegacyCoreUI.Results.Results_Dash.mvc$view", "OutSystemsUI.Content.Alert.mvc$view", "TUTExamsLegacyCoreUI.Generic.Dash_Notice.mvc$view", "TUTExamsLegacyCoreUI.Results.Fees_Dash.mvc$view", "TUTExamsLegacyCoreUI.Generic.DisplayDebugMessages.mvc$view", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "ExamsLegacy.referencesHealth$TUTExamsLegacyPortal_CS", "ExamsLegacy.model$StudentBioDetail_RecordList", "ExamsLegacy.model$ERResult_prt_ExamTypeList", "ExamsLegacy.model$ERResults_prt_ResultList", "ExamsLegacy.model$Debug_recordList"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyPortal_CSModel, React, OSView, ExamsLegacy_TUTPageBlocks_HomeBlock_mvc_model, ExamsLegacy_TUTPageBlocks_HomeBlock_mvc_controller, ExamsLegacyClientVariables, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_view, OSWidgets, ExamsLegacy_TUTLayouts_ErrorHandlerLayout_mvc_view, ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_view, ExamsLegacy_TUTLayouts_StandardLayout_mvc_view, ExamsLegacy_TUTComponents_ContentCenter_mvc_view, TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_view, ExamsLegacy_TUTComponents_ResetReport_mvc_view, TUTExamsLegacyCoreUI_Generic_BioCard_mvc_view, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_view, TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_view, OutSystemsUI_Content_Alert_mvc_view, TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_view, TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_view, TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_view) {
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
        View.displayName = "TUTPageBlocks.HomeBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_view, ExamsLegacy_TUTLayouts_ErrorHandlerLayout_mvc_view, ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_view, ExamsLegacy_TUTLayouts_StandardLayout_mvc_view, ExamsLegacy_TUTComponents_ContentCenter_mvc_view, TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_view, ExamsLegacy_TUTComponents_ResetReport_mvc_view, TUTExamsLegacyCoreUI_Generic_BioCard_mvc_view, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_view, TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_view, OutSystemsUI_Content_Alert_mvc_view, TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_view, TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_view, TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ExamsLegacy_TUTPageBlocks_HomeBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ExamsLegacy_TUTPageBlocks_HomeBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_view, {
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
_dependencies: []
}), React.createElement(ExamsLegacy_TUTLayouts_ErrorHandlerLayout_mvc_view, {
inputs: {
ShowErrorMessageOnSave: model.variables.showErrorMessageOnSaveVar,
DoTimeoutCheck: model.variables.doTimeoutCheckVar,
WaitMessage: model.variables.waitMessageVar,
ShowErrorMessageOnView: model.variables.showErrorMessageOnViewVar,
ShowWaitPopup: model.variables.showWaitPopupVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
timeoutTimer$Action: function () {
var eventHandlerContext = callContext.clone();
controller.errorHandlerTimeoutTimer$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phGenericViewErrorTitle: new PlaceholderContent(function () {
return ["Error loading information"];
}),
phGenericViewErrorMessage: new PlaceholderContent(function () {
return [React.createElement(ExamsLegacy_TUTComponents_ErrorBodyHelper_mvc_view, {
inputs: {
TargetAction: "-",
ExecuteErrors: model.variables.dA_GetDataDataAct.executeErrorsOut,
_executeErrorsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
FailedAction: "-",
TargetHasFetchError: model.variables.dA_GetDataDataAct.hasFetchErrorAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
retry$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.dA_GetData_TryAgain$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phFetchRetryErrorMessage: new PlaceholderContent(function () {
return ["An error occurred while querying the Student Information System (SIS). If the problem persists, the system may be down temporarily."];
}),
phGeneralErrorMessage: new PlaceholderContent(function () {
return ["An error occurred while querying the Student Information System (SIS)."];
}),
phNoRecoveryMessage: new PlaceholderContent(function () {
return ["You may have to refresh, or close your browser to try again."];
})
},
_dependencies: []
})];
}),
phGenericSaveErrorTitle: PlaceholderContent.Empty,
phGenericSaveErrorMessage: PlaceholderContent.Empty,
phMainArea: new PlaceholderContent(function () {
return [React.createElement(ExamsLegacy_TUTLayouts_StandardLayout_mvc_view, {
inputs: {
InGlobalAccessAllowed: model.variables.dA_GetDataDataAct.isGlobalAccessAllowedOut,
_inGlobalAccessAllowedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
InAdmType: model.variables.dA_GetDataDataAct.admTypeOut,
_inAdmTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
IsDataFetched: model.variables.dA_GetDataDataAct.isDataFetchedAttr,
IsStudent: model.variables.dA_GetDataDataAct.isStudentOut,
_isStudentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
InGlobalAccessMessage: model.variables.dA_GetDataDataAct.globalAccessMessageOut,
_inGlobalAccessMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
loadStudent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.standardLayoutLoadStudent$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phContent: new PlaceholderContent(function () {
return [$if((ExamsLegacyClientVariables.getAdmRRId().gt(OS.BuiltinFunctions.integerToLongInteger(0)) && (model.variables.dA_GetDataDataAct.admTypeOut === "A")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ExamsLegacy_TUTComponents_ContentCenter_mvc_view, {
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
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phContent: new PlaceholderContent(function () {
return [React.createElement(TUTExamsLegacyCoreUI_Generic_ReportCard_mvc_view, {
inputs: {
ReportDetail: model.variables.dA_GetDataDataAct.outReportDetailOut,
_reportDetailInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
HeadingCSS: model.variables.cSS_HeadingVar
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
uuid: "6",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phResetContent: new PlaceholderContent(function () {
return [$if(!(model.variables.dA_GetDataDataAct.outReportDetailOut.reportIsLiveAttr), false, this, function () {
return [React.createElement(ExamsLegacy_TUTComponents_ResetReport_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
reset$Action: function () {
var eventHandlerContext = callContext.clone();
controller.resetReport_Reset$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.dA_GetDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.outReportDetailOut.reportIsLiveAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.cSS_HeadingVar), asPrimitiveValue(model.variables.dA_GetDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.outReportDetailOut)]
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px;"
},
visible: true,
_idProps: {
service: idService,
name: "cBioCard"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ExamsLegacy_TUTComponents_ContentCenter_mvc_view, {
inputs: {
InContentWidth: 450
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
uuid: "9",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phContent: new PlaceholderContent(function () {
return [React.createElement(TUTExamsLegacyCoreUI_Generic_BioCard_mvc_view, {
inputs: {
StudentBio: model.variables.dA_GetDataDataAct.studentBioOut,
_studentBioInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
IsDataFetched: model.variables.dA_GetDataDataAct.isDataFetchedAttr
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
uuid: "10",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.dA_GetDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.studentBioOut)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "margin-bottom: 10px; padding: 5px; text-align: center;"
},
style: "",
visible: model.variables.dA_GetDataDataAct.showStartMessageOut,
_idProps: {
service: idService,
name: "cStartMessage"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
}, React.createElement(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, {
inputs: {
Markdown: model.variables.dA_GetDataDataAct.messageStartOut,
_markdownInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
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
uuid: "12",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "margin-bottom: 10px; padding: 5px; text-align: center;"
},
style: "",
visible: model.variables.dA_GetDataDataAct.showPracticalSubjMessgeOut,
_idProps: {
service: idService,
name: "cPracticalMessage"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
}, React.createElement(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, {
inputs: {
Markdown: model.variables.dA_GetDataDataAct.messagePracticalSubjOut,
_markdownInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
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
uuid: "14",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "cResults"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.dA_GetDataDataAct.isDataFetchedAttr && (model.variables.dA_GetDataDataAct.executeErrorsOut.codeAttr === 1000)) && !(model.variables.dA_GetDataDataAct.examResultsOut.isEmpty)), false, this, function () {
return [$if(model.variables.dA_GetDataDataAct.haveOtherExamsOut, false, this, function () {
return [React.createElement(ExamsLegacy_TUTComponents_ContentCenter_mvc_view, {
inputs: {
InContentWidth: 450
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
uuid: "16",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ExamsLegacy_TUTComponents_HaveOtherExamWarning_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
showLatest$Action: function () {
var eventHandlerContext = callContext.clone();
controller.notLatests_ShowLatest$Action(controller.callContext(eventHandlerContext));

;
},
showAll$Action: function () {
var eventHandlerContext = callContext.clone();
controller.notLatests_ShowAll$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "NotLatests",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-size: 24px; font-weight: bold; margin-bottom: 10px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
name: "cExamCycleName"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.dA_GetDataDataAct.examCycleNameOut,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
})), React.createElement(TUTExamsLegacyCoreUI_Results_Results_Dash_mvc_view, {
inputs: {
ExamResults: model.variables.dA_GetDataDataAct.examResultsOut,
_examResultsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
HeadingCSS: model.variables.cSS_HeadingVar
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
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(((OS.BuiltinFunctions.trim(model.variables.dA_GetDataDataAct.blockHeadingOut)) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Content_Alert_mvc_view, {
inputs: {
AlertType: ExamsLegacyModel.staticEntities.alert.error
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
uuid: "23",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
messageText: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: (model.variables.dA_GetDataDataAct.blockHeadingOut + " "),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "2px"
},
value: model.variables.dA_GetDataDataAct.blockMessageOut,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.dA_GetDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.blockMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.blockHeadingOut)]
}))];
}, function () {
return [];
})];
}, function () {
return [React.createElement(TUTExamsLegacyCoreUI_Generic_Dash_Notice_mvc_view, {
inputs: {
HeadingCSS: model.variables.cSS_HeadingVar
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
uuid: "26",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
phHeading: new PlaceholderContent(function () {
return ["No Results Found"];
}),
phContent: new PlaceholderContent(function () {
return ["We\'re sorry, but we could not find any results for your student number."];
})
},
_dependencies: []
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "cFeesMessage"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(TUTExamsLegacyCoreUI_Results_Fees_Dash_mvc_view, {
inputs: {
HeadingCSS: model.variables.cSS_HeadingVar,
FeesMessage: model.variables.dA_GetDataDataAct.messageFeesOutstandingOut,
_feesMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
FeesTotal: model.variables.dA_GetDataDataAct.totalOwedOut,
_feesTotalInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
ShowFeesMessage: model.variables.dA_GetDataDataAct.showFeesOutstandingMessageOut,
_showFeesMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
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
uuid: "28",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "padding: 5px; text-align: center;"
},
style: "",
visible: model.variables.dA_GetDataDataAct.showEndMessageOut,
_idProps: {
service: idService,
name: "cEndMessage"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
}, React.createElement(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_view, {
inputs: {
Markdown: model.variables.dA_GetDataDataAct.messageEndOut,
_markdownInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
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
uuid: "30",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: "font-size: 12px; font-style: italic; margin-top: 10px; text-align: center;"
},
visible: (model.variables.dA_GetDataDataAct.isDataFetchedAttr && !(model.variables.dA_GetDataDataAct.hasFetchErrorAttr)),
_idProps: {
service: idService,
name: "cTraceInformation"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("9rEbUqCkFE6FOLUPwlIYTQ.Value"), function () {
return ((model.variables.dA_GetDataDataAct.reportDateTimeOut.equals(OS.BuiltinFunctions.nullDate())) ? ("") : ((((((((" Report Timestamp: " + OS.BuiltinFunctions.dateTimeToText(model.variables.dA_GetDataDataAct.reportDateTimeOut)) + " / ") + OS.BuiltinFunctions.longIntegerToText(model.variables.dA_GetDataDataAct.reportRefNumOut)) + ", Cache Timestamp: ") + OS.BuiltinFunctions.dateTimeToText(model.variables.dA_GetDataDataAct.cacheDateTimeOut)) + ", Render Timestamp: ") + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime()))));
}, function () {
return model.variables.dA_GetDataDataAct.reportDateTimeOut;
}, function () {
return model.variables.dA_GetDataDataAct.reportRefNumOut;
}, function () {
return model.variables.dA_GetDataDataAct.cacheDateTimeOut;
}),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.cSS_HeadingVar), asPrimitiveValue(model.variables.dA_GetDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.cacheDateTimeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.reportRefNumOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.reportDateTimeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.messageEndOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showEndMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showFeesOutstandingMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.totalOwedOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.messageFeesOutstandingOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.blockMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.blockHeadingOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.examCycleNameOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.haveOtherExamsOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.examResultsOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.executeErrorsOut.codeAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.messagePracticalSubjOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showPracticalSubjMessgeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.messageStartOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showStartMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.studentBioOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.outReportDetailOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.admTypeOut), asPrimitiveValue(ExamsLegacyClientVariables.getAdmRRId())]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.cSS_HeadingVar), asPrimitiveValue(ExamsLegacyClientVariables.getAdmRRId()), asPrimitiveValue(model.variables.dA_GetDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.cacheDateTimeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.reportRefNumOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.reportDateTimeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.messageEndOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showEndMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showFeesOutstandingMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.totalOwedOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.messageFeesOutstandingOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.blockMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.blockHeadingOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.examCycleNameOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.haveOtherExamsOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.examResultsOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.messagePracticalSubjOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showPracticalSubjMessgeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.messageStartOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.showStartMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.studentBioOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.outReportDetailOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.globalAccessMessageOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.isStudentOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.admTypeOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.isGlobalAccessAllowedOut), asPrimitiveValue(model.variables.dA_GetDataDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.dA_GetDataDataAct.executeErrorsOut)]
}), React.createElement(TUTExamsLegacyCoreUI_Generic_DisplayDebugMessages_mvc_view, {
inputs: {
DebugMode: model.variables.dA_GetDataDataAct.debugModeOut,
_debugModeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr),
DebugData: model.variables.dA_GetDataDataAct.debugDataOut,
_debugDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dA_GetDataDataAct.dataFetchStatusAttr)
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
uuid: "33",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ExamsLegacy.TUTPageBlocks.HomeBlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyPortal_CS.model", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$TUTExamsLegacyDefaults_CS", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "ExamsLegacy.referencesHealth$TUTExamsLegacyPortal_CS", "ExamsLegacy.model$StudentBioDetail_RecordList", "ExamsLegacy.model$ERResult_prt_ExamTypeList", "ExamsLegacy.model$ERResults_prt_ResultList", "ExamsLegacy.model$Debug_recordList"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyPortal_CSModel, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
dA_GetData$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
dA_GetData$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = true;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.dA_GetData$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return controller.callDataAction("DataActionDA_GetData", "screenservices/ExamsLegacy/TUTPageBlocks/HomeBlock/DataActionDA_GetData", "YNolGsqU3Y43iU_FPD8LgA", function (b) {
model.variables.dA_GetDataDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.dA_GetDataDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.dA_GetDataDataAct.constructor));
}, 300, undefined, undefined, callContext, ExamsLegacyClientVariables, false).then(function () {
controller._dA_GetDataOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["dA_GetData$DataActRefresh"];
// Client Actions
Controller.prototype._errorHandlerTimeoutTimer$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ErrorHandlerTimeoutTimer");
callContext = controller.callContext(callContext);
if((model.variables.showWaitPopupVar)) {
if((model.variables.dA_GetDataDataAct.hasFetchErrorAttr)) {
// ShowErrorMessageOnView = True
model.variables.showErrorMessageOnViewVar = true;
// DoTimeoutCheck = False
model.variables.doTimeoutCheckVar = false;
// ShowWaitPopup = False
model.variables.showWaitPopupVar = false;
} else {
if(((model.variables.dA_GetDataDataAct.isDataFetchedAttr && ((model.variables.dA_GetDataDataAct.executeErrorsOut.codeAttr) !== (1000))))) {
OS.FeedbackMessageService.showFeedbackMessage(((("Error " + (model.variables.dA_GetDataDataAct.executeErrorsOut.codeAttr).toString()) + ": ") + model.variables.dA_GetDataDataAct.executeErrorsOut.messageAttr), /*Error*/ 3);
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
Controller.prototype._standardLayoutLoadStudent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("StandardLayoutLoadStudent");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: LoadStudent
return controller.loadStudent$Action(callContext);
});
};
Controller.prototype._status_SetIsLoading$Action = function (loadMessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Status_SetIsLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ExamsLegacy.TUTPageBlocks.HomeBlock.Status_SetIsLoading$vars"))());
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
Controller.registerVariableGroupType("ExamsLegacy.TUTPageBlocks.HomeBlock.Status_SetIsLoading$vars", [{
name: "LoadMessage",
attrName: "loadMessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._notLatests_ShowLatest$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NotLatests_ShowLatest");
callContext = controller.callContext(callContext);
// ECGUID = DA_GetData.LatestGUID
ExamsLegacyClientVariables.setECGUID(model.variables.dA_GetDataDataAct.latestGUIDOut);
// AdmECGUID = ""
ExamsLegacyClientVariables.setAdmECGUID("");
// Destination: /ExamsLegacy/Home
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "Home", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
// Execute Action: Status_SetIsLoading
controller._status_SetIsLoading$Action("Loading...", callContext);
};
Controller.prototype._dA_GetDataOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DA_GetDataOnAfterFetch");
callContext = controller.callContext(callContext);
// Execute Action: Status_ClearIsLoading
controller._status_ClearIsLoading$Action(callContext);
if((model.variables.dA_GetDataDataAct.hasFetchErrorAttr)) {
// ShowErrorMessageOnView = True
model.variables.showErrorMessageOnViewVar = true;
} else {
// Platform = DA_GetData.Platform
ExamsLegacyClientVariables.setPlatform(model.variables.dA_GetDataDataAct.platformOut);
// Got Valid response from server?
if(((model.variables.dA_GetDataDataAct.executeErrorsOut.codeAttr === 1000))) {
// HaveMultipleExams = DA_GetData.HaveOtherExams
ExamsLegacyClientVariables.setHaveMultipleExams(model.variables.dA_GetDataDataAct.haveOtherExamsOut);
}

if((((model.variables.dA_GetDataDataAct.admTypeOut === "A") || (model.variables.dA_GetDataDataAct.admTypeOut === "P")))) {
// AdmType = DA_GetData.AdmType
ExamsLegacyClientVariables.setAdmType(model.variables.dA_GetDataDataAct.admTypeOut);
// AdmMode = True
ExamsLegacyClientVariables.setAdmMode(true);
}

if((((model.variables.dA_GetDataDataAct.newGUIDOut) !== (ExamsLegacyClientVariables.getECGUID())))) {
// ECGUID = DA_GetData.NewGUID
ExamsLegacyClientVariables.setECGUID(model.variables.dA_GetDataDataAct.newGUIDOut);
}

// CurrentGUIDInvalid and HaveOtherExams
if(((model.variables.dA_GetDataDataAct.isInvalidGUIDOut && model.variables.dA_GetDataDataAct.haveOtherExamsOut))) {
// Destination: /ExamsLegacy/OtherExams
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "OtherExams", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

}

};
Controller.prototype._dA_GetData_TryAgain$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DA_GetData_TryAgain");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Status_SetIsLoading
controller._status_SetIsLoading$Action("Loading...", callContext);
// Refresh Query: DA_GetData
var result = controller.dA_GetData$DataActRefresh(callContext);
model.flush();
return result;
});
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Status_SetIsLoading
controller._status_SetIsLoading$Action("Loading...", callContext);
// Refresh Query: DA_GetData
var result = controller.dA_GetData$DataActRefresh(callContext);
model.flush();
return result;
});
};
Controller.prototype._resetReport_Reset$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ResetReport_Reset");
callContext = controller.callContext(callContext);
// AdmRRId = 0
ExamsLegacyClientVariables.setAdmRRId(OS.BuiltinFunctions.integerToLongInteger(0));
// AdmECGUID = ""
ExamsLegacyClientVariables.setAdmECGUID("");
// Destination: /ExamsLegacy/Home
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "Home", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
};
Controller.prototype._notLatests_ShowAll$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NotLatests_ShowAll");
callContext = controller.callContext(callContext);
// Destination: /ExamsLegacy/OtherExams
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "OtherExams", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
};

Controller.prototype.errorHandlerTimeoutTimer$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._errorHandlerTimeoutTimer$Action, callContext);

};
Controller.prototype.standardLayoutLoadStudent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._standardLayoutLoadStudent$Action, callContext);

};
Controller.prototype.status_SetIsLoading$Action = function (loadMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._status_SetIsLoading$Action, callContext, loadMessageIn);

};
Controller.prototype.notLatests_ShowLatest$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._notLatests_ShowLatest$Action, callContext);

};
Controller.prototype.status_ClearIsLoading$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._status_ClearIsLoading$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.dA_GetDataOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._dA_GetDataOnAfterFetch$Action, callContext);

};
Controller.prototype.dA_GetData_TryAgain$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._dA_GetData_TryAgain$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.resetReport_Reset$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetReport_Reset$Action, callContext);

};
Controller.prototype.notLatests_ShowAll$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._notLatests_ShowAll$Action, callContext);

};
Controller.prototype.loadStudent$Action = function () {
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
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
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

