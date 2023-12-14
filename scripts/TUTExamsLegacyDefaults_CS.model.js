define("TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyDefaults_CS.model"], function (exports, OutSystems, TUTExamsLegacyDefaults_CSModel) {
    var OS = OutSystems.Internal;
    var ExecuteErrorsRec = (function (_super) {
    __extends(ExecuteErrorsRec, _super);
    function ExecuteErrorsRec(defaults) {
    _super.apply(this, arguments);
    }
    ExecuteErrorsRec.attributesToDeclare = function () {
    return [
    this.attr("Code", "codeAttr", "Code", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("Message", "messageAttr", "Message", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("AllowRetry", "allowRetryAttr", "AllowRetry", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("ActionName", "actionNameAttr", "ActionName", false, false, OS.Types.Text, function () {
    return "";
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    ExecuteErrorsRec.init();
    return ExecuteErrorsRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec = ExecuteErrorsRec;
    
    });
    define("TUTExamsLegacyDefaults_CS.model$Debug_recordRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyDefaults_CS.model"], function (exports, OutSystems, TUTExamsLegacyDefaults_CSModel) {
    var OS = OutSystems.Internal;
    var Debug_recordRec = (function (_super) {
    __extends(Debug_recordRec, _super);
    function Debug_recordRec(defaults) {
    _super.apply(this, arguments);
    }
    Debug_recordRec.attributesToDeclare = function () {
    return [
    this.attr("Heading", "headingAttr", "Heading", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Message", "messageAttr", "Message", false, false, OS.Types.Text, function () {
    return "";
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    Debug_recordRec.init();
    return Debug_recordRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyDefaults_CSModel.Debug_recordRec = Debug_recordRec;
    
    });
    define("TUTExamsLegacyDefaults_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
    var OS = OutSystems.Internal;
    var TUTExamsLegacyDefaults_CSModel = exports;
    });
    