define("TUTMarkdownEditor.model$MarkdownConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model"], function (exports, OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var MarkdownConfigRec = (function (_super) {
    __extends(MarkdownConfigRec, _super);
    function MarkdownConfigRec(defaults) {
    _super.apply(this, arguments);
    }
    MarkdownConfigRec.attributesToDeclare = function () {
    return [
    this.attr("Height", "heightAttr", "Height", false, false, OS.Types.Text, function () {
    return "300px";
    }, true), 
    this.attr("MinHeight", "minHeightAttr", "MinHeight", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("IsHtmlFormat", "isHtmlFormatAttr", "IsHtmlFormat", false, false, OS.Types.Boolean, function () {
    return true;
    }, true), 
    this.attr("IsWysiwyg", "isWysiwygAttr", "IsWysiwyg", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("Placeholder", "placeholderAttr", "Placeholder", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("HideModeSwitch", "hideModeSwitchAttr", "HideModeSwitch", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("Language", "languageAttr", "Language", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Toolbar", "toolbarAttr", "Toolbar", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("IsDebug", "isDebugAttr", "IsDebug", false, false, OS.Types.Boolean, function () {
    return false;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    MarkdownConfigRec.init();
    return MarkdownConfigRec;
    })(OS.DataTypes.GenericRecord);
    TUTMarkdownEditorModel.MarkdownConfigRec = MarkdownConfigRec;
    
    });
    define("TUTMarkdownEditor.model$MarkdownConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.model$MarkdownConfigRec"], function (exports, OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var MarkdownConfigRecord = (function (_super) {
    __extends(MarkdownConfigRecord, _super);
    function MarkdownConfigRecord(defaults) {
    _super.apply(this, arguments);
    }
    MarkdownConfigRecord.attributesToDeclare = function () {
    return [
    this.attr("MarkdownConfig", "markdownConfigAttr", "MarkdownConfig", false, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTMarkdownEditorModel.MarkdownConfigRec());
    }, true, TUTMarkdownEditorModel.MarkdownConfigRec)
    ].concat(_super.attributesToDeclare.call(this));
    };
    MarkdownConfigRecord.fromStructure = function (str) {
    return new MarkdownConfigRecord(new MarkdownConfigRecord.RecordClass({
    markdownConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
    }));
    };
    MarkdownConfigRecord._isAnonymousRecord = true;
    MarkdownConfigRecord.UniqueId = "582e2801-38ca-fd86-e2f5-77d8e48d6f71";
    MarkdownConfigRecord.init();
    return MarkdownConfigRecord;
    })(OS.DataTypes.GenericRecord);
    TUTMarkdownEditorModel.MarkdownConfigRecord = MarkdownConfigRecord;
    
    });
    define("TUTMarkdownEditor.model$MarkdownConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.model$MarkdownConfigRecord"], function (exports, OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var MarkdownConfigRecordList = (function (_super) {
    __extends(MarkdownConfigRecordList, _super);
    function MarkdownConfigRecordList(defaults) {
    _super.apply(this, arguments);
    }
    MarkdownConfigRecordList.itemType = TUTMarkdownEditorModel.MarkdownConfigRecord;
    return MarkdownConfigRecordList;
    })(OS.DataTypes.GenericRecordList);
    TUTMarkdownEditorModel.MarkdownConfigRecordList = MarkdownConfigRecordList;
    
    });
    define("TUTMarkdownEditor.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "TUTMarkdownEditor.model", "ServiceCenter.model$UserRec", "TUTMarkdownEditor.referencesHealth", "TUTMarkdownEditor.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var UserRecord = (function (_super) {
    __extends(UserRecord, _super);
    function UserRecord(defaults) {
    _super.apply(this, arguments);
    }
    UserRecord.attributesToDeclare = function () {
    return [
    this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
    }, true, ServiceCenterModel.UserRec)
    ].concat(_super.attributesToDeclare.call(this));
    };
    UserRecord.fromStructure = function (str) {
    return new UserRecord(new UserRecord.RecordClass({
    userAttr: OS.DataTypes.ImmutableBase.getData(str)
    }));
    };
    UserRecord._isAnonymousRecord = true;
    UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
    UserRecord.init();
    return UserRecord;
    })(OS.DataTypes.GenericRecord);
    TUTMarkdownEditorModel.UserRecord = UserRecord;
    
    });
    define("TUTMarkdownEditor.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.model$UserRecord"], function (exports, OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var UserRecordList = (function (_super) {
    __extends(UserRecordList, _super);
    function UserRecordList(defaults) {
    _super.apply(this, arguments);
    }
    UserRecordList.itemType = TUTMarkdownEditorModel.UserRecord;
    return UserRecordList;
    })(OS.DataTypes.GenericRecordList);
    TUTMarkdownEditorModel.UserRecordList = UserRecordList;
    
    });
    define("TUTMarkdownEditor.model$MarkdownConfigList", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.model$MarkdownConfigRec"], function (exports, OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var MarkdownConfigList = (function (_super) {
    __extends(MarkdownConfigList, _super);
    function MarkdownConfigList(defaults) {
    _super.apply(this, arguments);
    }
    MarkdownConfigList.itemType = TUTMarkdownEditorModel.MarkdownConfigRec;
    return MarkdownConfigList;
    })(OS.DataTypes.GenericRecordList);
    TUTMarkdownEditorModel.MarkdownConfigList = MarkdownConfigList;
    
    });
    define("TUTMarkdownEditor.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "TUTMarkdownEditor.model", "ServiceCenter.model$UserRec", "TUTMarkdownEditor.referencesHealth", "TUTMarkdownEditor.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var UserList = (function (_super) {
    __extends(UserList, _super);
    function UserList(defaults) {
    _super.apply(this, arguments);
    }
    UserList.itemType = ServiceCenterModel.UserRec;
    return UserList;
    })(OS.DataTypes.GenericRecordList);
    TUTMarkdownEditorModel.UserList = UserList;
    
    });
    define("TUTMarkdownEditor.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
    var OS = OutSystems.Internal;
    var TUTMarkdownEditorModel = exports;
    Object.defineProperty(TUTMarkdownEditorModel, "module", {
    get: function () {
    return OS.ApplicationInfo.getModules()["48a653e6-742a-4c19-9c34-13169f3cf10a"];
    }
    });
    
    TUTMarkdownEditorModel.staticEntities = {};
    });
    