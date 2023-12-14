define("UltimatePDF.model$ViewportList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$ViewportRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ViewportList = (function (_super) {
__extends(ViewportList, _super);
function ViewportList(defaults) {
_super.apply(this, arguments);
}
ViewportList.itemType = UltimatePDF_ServiceModel.ViewportRec;
return ViewportList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ViewportList = ViewportList;

});
define("UltimatePDF.model$ManagementSettingsRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ManagementSettingsRec = (function (_super) {
__extends(ManagementSettingsRec, _super);
function ManagementSettingsRec(defaults) {
_super.apply(this, arguments);
}
ManagementSettingsRec.attributesToDeclare = function () {
return [
this.attr("TemporaryFolder", "temporaryFolderAttr", "TemporaryFolder", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("PreventAutomaticDownloads", "preventAutomaticDownloadsAttr", "PreventAutomaticDownloads", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("DefaultBrowserProduct", "defaultBrowserProductAttr", "DefaultBrowserProduct", false, false, OS.Types.Text, function () {
return "chrome";
}, true), 
this.attr("DefaultChromiumRevision", "defaultChromiumRevisionAttr", "DefaultChromiumRevision", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DefaultFirefoxRevision", "defaultFirefoxRevisionAttr", "DefaultFirefoxRevision", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DefaultBrowserTimeoutSeconds", "defaultBrowserTimeoutSecondsAttr", "DefaultBrowserTimeoutSeconds", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ManagementSettingsRec.init();
return ManagementSettingsRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.ManagementSettingsRec = ManagementSettingsRec;

});
define("UltimatePDF.model$PaperSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperSizeRec = (function (_super) {
__extends(PaperSizeRec, _super);
function PaperSizeRec(defaults) {
_super.apply(this, arguments);
}
PaperSizeRec.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Width", "widthAttr", "Width", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Height", "heightAttr", "Height", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IsInternational", "isInternationalAttr", "IsInternational", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsLandscape", "isLandscapeAttr", "IsLandscape", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PaperSizeRec.init();
return PaperSizeRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.PaperSizeRec = PaperSizeRec;

});
define("UltimatePDF.model$PaperSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$PaperSizeRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperSizeRecord = (function (_super) {
__extends(PaperSizeRecord, _super);
function PaperSizeRecord(defaults) {
_super.apply(this, arguments);
}
PaperSizeRecord.attributesToDeclare = function () {
return [
this.attr("PaperSize", "paperSizeAttr", "PaperSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.PaperSizeRec());
}, true, UltimatePDFModel.PaperSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
PaperSizeRecord.fromStructure = function (str) {
return new PaperSizeRecord(new PaperSizeRecord.RecordClass({
paperSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PaperSizeRecord._isAnonymousRecord = true;
PaperSizeRecord.UniqueId = "c490421c-603d-e9c1-124c-1f74de1999e8";
PaperSizeRecord.init();
return PaperSizeRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.PaperSizeRecord = PaperSizeRecord;

});
define("UltimatePDF.model$PaperSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$PaperSizeRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperSizeRecordList = (function (_super) {
__extends(PaperSizeRecordList, _super);
function PaperSizeRecordList(defaults) {
_super.apply(this, arguments);
}
PaperSizeRecordList.itemType = UltimatePDFModel.PaperSizeRecord;
return PaperSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.PaperSizeRecordList = PaperSizeRecordList;

});
define("UltimatePDF.model$DefaultBrowserRevisionRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var DefaultBrowserRevisionRec = (function (_super) {
__extends(DefaultBrowserRevisionRec, _super);
function DefaultBrowserRevisionRec(defaults) {
_super.apply(this, arguments);
}
DefaultBrowserRevisionRec.attributesToDeclare = function () {
return [
this.attr("Product", "productAttr", "Product", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Revision", "revisionAttr", "Revision", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DefaultBrowserRevisionRec.init();
return DefaultBrowserRevisionRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.DefaultBrowserRevisionRec = DefaultBrowserRevisionRec;

});
define("UltimatePDF.model$DefaultBrowserRevisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$DefaultBrowserRevisionRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var DefaultBrowserRevisionRecord = (function (_super) {
__extends(DefaultBrowserRevisionRecord, _super);
function DefaultBrowserRevisionRecord(defaults) {
_super.apply(this, arguments);
}
DefaultBrowserRevisionRecord.attributesToDeclare = function () {
return [
this.attr("DefaultBrowserRevision", "defaultBrowserRevisionAttr", "DefaultBrowserRevision", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.DefaultBrowserRevisionRec());
}, true, UltimatePDFModel.DefaultBrowserRevisionRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultBrowserRevisionRecord.fromStructure = function (str) {
return new DefaultBrowserRevisionRecord(new DefaultBrowserRevisionRecord.RecordClass({
defaultBrowserRevisionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultBrowserRevisionRecord._isAnonymousRecord = true;
DefaultBrowserRevisionRecord.UniqueId = "d10bb892-84b0-d692-89ac-e835f47de4b1";
DefaultBrowserRevisionRecord.init();
return DefaultBrowserRevisionRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.DefaultBrowserRevisionRecord = DefaultBrowserRevisionRecord;

});
define("UltimatePDF.model$DefaultBrowserRevisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$DefaultBrowserRevisionRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var DefaultBrowserRevisionRecordList = (function (_super) {
__extends(DefaultBrowserRevisionRecordList, _super);
function DefaultBrowserRevisionRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultBrowserRevisionRecordList.itemType = UltimatePDFModel.DefaultBrowserRevisionRecord;
return DefaultBrowserRevisionRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.DefaultBrowserRevisionRecordList = DefaultBrowserRevisionRecordList;

});
define("UltimatePDF.model$ViewportRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$ViewportRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ViewportRecord = (function (_super) {
__extends(ViewportRecord, _super);
function ViewportRecord(defaults) {
_super.apply(this, arguments);
}
ViewportRecord.attributesToDeclare = function () {
return [
this.attr("Viewport", "viewportAttr", "Viewport", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDF_ServiceModel.ViewportRec());
}, true, UltimatePDF_ServiceModel.ViewportRec)
].concat(_super.attributesToDeclare.call(this));
};
ViewportRecord.fromStructure = function (str) {
return new ViewportRecord(new ViewportRecord.RecordClass({
viewportAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ViewportRecord._isAnonymousRecord = true;
ViewportRecord.UniqueId = "dd4d049a-a70e-985d-50af-7f361af0dd39";
ViewportRecord.init();
return ViewportRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.ViewportRecord = ViewportRecord;

});
define("UltimatePDF.model$ViewportRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$ViewportRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ViewportRecordList = (function (_super) {
__extends(ViewportRecordList, _super);
function ViewportRecordList(defaults) {
_super.apply(this, arguments);
}
ViewportRecordList.itemType = UltimatePDFModel.ViewportRecord;
return ViewportRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ViewportRecordList = ViewportRecordList;

});
define("UltimatePDF.model$ParameterRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UltimatePDF.model", "ServiceCenter.model$ParameterRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ParameterRecord = (function (_super) {
__extends(ParameterRecord, _super);
function ParameterRecord(defaults) {
_super.apply(this, arguments);
}
ParameterRecord.attributesToDeclare = function () {
return [
this.attr("Parameter", "parameterAttr", "Parameter", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.ParameterRec());
}, true, ServiceCenterModel.ParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
ParameterRecord.fromStructure = function (str) {
return new ParameterRecord(new ParameterRecord.RecordClass({
parameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ParameterRecord._isAnonymousRecord = true;
ParameterRecord.UniqueId = "29d35fc3-ba82-e3be-a2a2-f0300fb9fd04";
ParameterRecord.init();
return ParameterRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.ParameterRecord = ParameterRecord;

});
define("UltimatePDF.model$SessionCookieRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UltimatePDF_Utils.model", "UltimatePDF.model", "Extension.UltimatePDF_Utils.model$SessionCookieRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Utils"], function (exports, OutSystems, Extension_UltimatePDF_UtilsModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var SessionCookieRecord = (function (_super) {
__extends(SessionCookieRecord, _super);
function SessionCookieRecord(defaults) {
_super.apply(this, arguments);
}
SessionCookieRecord.attributesToDeclare = function () {
return [
this.attr("SessionCookie", "sessionCookieAttr", "SessionCookie", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_UltimatePDF_UtilsModel.SessionCookieRec());
}, true, Extension_UltimatePDF_UtilsModel.SessionCookieRec)
].concat(_super.attributesToDeclare.call(this));
};
SessionCookieRecord.fromStructure = function (str) {
return new SessionCookieRecord(new SessionCookieRecord.RecordClass({
sessionCookieAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SessionCookieRecord._isAnonymousRecord = true;
SessionCookieRecord.UniqueId = "2b1b7761-8ee4-79e2-56b8-14651adf18dd";
SessionCookieRecord.init();
return SessionCookieRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.SessionCookieRecord = SessionCookieRecord;

});
define("UltimatePDF.model$QueryParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var QueryParameterRec = (function (_super) {
__extends(QueryParameterRec, _super);
function QueryParameterRec(defaults) {
_super.apply(this, arguments);
}
QueryParameterRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
QueryParameterRec.init();
return QueryParameterRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.QueryParameterRec = QueryParameterRec;

});
define("UltimatePDF.model$ManagementSettingsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$ManagementSettingsRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ManagementSettingsRecord = (function (_super) {
__extends(ManagementSettingsRecord, _super);
function ManagementSettingsRecord(defaults) {
_super.apply(this, arguments);
}
ManagementSettingsRecord.attributesToDeclare = function () {
return [
this.attr("ManagementSettings", "managementSettingsAttr", "ManagementSettings", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.ManagementSettingsRec());
}, true, UltimatePDFModel.ManagementSettingsRec)
].concat(_super.attributesToDeclare.call(this));
};
ManagementSettingsRecord.fromStructure = function (str) {
return new ManagementSettingsRecord(new ManagementSettingsRecord.RecordClass({
managementSettingsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ManagementSettingsRecord._isAnonymousRecord = true;
ManagementSettingsRecord.UniqueId = "3cc0aff5-89ff-568a-ac13-73ede3fabed4";
ManagementSettingsRecord.init();
return ManagementSettingsRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.ManagementSettingsRecord = ManagementSettingsRecord;

});
define("UltimatePDF.model$UserEnvironmentRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var UserEnvironmentRec = (function (_super) {
__extends(UserEnvironmentRec, _super);
function UserEnvironmentRec(defaults) {
_super.apply(this, arguments);
}
UserEnvironmentRec.attributesToDeclare = function () {
return [
this.attr("Locale", "localeAttr", "Locale", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserEnvironmentRec.init();
return UserEnvironmentRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.UserEnvironmentRec = UserEnvironmentRec;

});
define("UltimatePDF.model$UserEnvironmentRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$UserEnvironmentRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var UserEnvironmentRecord = (function (_super) {
__extends(UserEnvironmentRecord, _super);
function UserEnvironmentRecord(defaults) {
_super.apply(this, arguments);
}
UserEnvironmentRecord.attributesToDeclare = function () {
return [
this.attr("UserEnvironment", "userEnvironmentAttr", "UserEnvironment", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.UserEnvironmentRec());
}, true, UltimatePDFModel.UserEnvironmentRec)
].concat(_super.attributesToDeclare.call(this));
};
UserEnvironmentRecord.fromStructure = function (str) {
return new UserEnvironmentRecord(new UserEnvironmentRecord.RecordClass({
userEnvironmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserEnvironmentRecord._isAnonymousRecord = true;
UserEnvironmentRecord.UniqueId = "8b1c7735-0cd6-3cf3-3630-50ebe28dc93f";
UserEnvironmentRecord.init();
return UserEnvironmentRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.UserEnvironmentRecord = UserEnvironmentRecord;

});
define("UltimatePDF.model$UserEnvironmentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$UserEnvironmentRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var UserEnvironmentRecordList = (function (_super) {
__extends(UserEnvironmentRecordList, _super);
function UserEnvironmentRecordList(defaults) {
_super.apply(this, arguments);
}
UserEnvironmentRecordList.itemType = UltimatePDFModel.UserEnvironmentRecord;
return UserEnvironmentRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.UserEnvironmentRecordList = UserEnvironmentRecordList;

});
define("UltimatePDF.model$SessionCookieList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UltimatePDF_Utils.model", "UltimatePDF.model", "Extension.UltimatePDF_Utils.model$SessionCookieRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Utils"], function (exports, OutSystems, Extension_UltimatePDF_UtilsModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var SessionCookieList = (function (_super) {
__extends(SessionCookieList, _super);
function SessionCookieList(defaults) {
_super.apply(this, arguments);
}
SessionCookieList.itemType = Extension_UltimatePDF_UtilsModel.SessionCookieRec;
return SessionCookieList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.SessionCookieList = SessionCookieList;

});
define("UltimatePDF.model$PaperRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$PaperRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperRecord = (function (_super) {
__extends(PaperRecord, _super);
function PaperRecord(defaults) {
_super.apply(this, arguments);
}
PaperRecord.attributesToDeclare = function () {
return [
this.attr("Paper", "paperAttr", "Paper", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDF_ServiceModel.PaperRec());
}, true, UltimatePDF_ServiceModel.PaperRec)
].concat(_super.attributesToDeclare.call(this));
};
PaperRecord.fromStructure = function (str) {
return new PaperRecord(new PaperRecord.RecordClass({
paperAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PaperRecord._isAnonymousRecord = true;
PaperRecord.UniqueId = "4b783ce2-3272-ad6b-3d5f-912d8f531a90";
PaperRecord.init();
return PaperRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.PaperRecord = PaperRecord;

});
define("UltimatePDF.model$ParameterList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UltimatePDF.model", "ServiceCenter.model$ParameterRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ParameterList = (function (_super) {
__extends(ParameterList, _super);
function ParameterList(defaults) {
_super.apply(this, arguments);
}
ParameterList.itemType = ServiceCenterModel.ParameterRec;
return ParameterList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ParameterList = ParameterList;

});
define("UltimatePDF.model$CookieList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$CookieRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var CookieList = (function (_super) {
__extends(CookieList, _super);
function CookieList(defaults) {
_super.apply(this, arguments);
}
CookieList.itemType = UltimatePDF_ServiceModel.CookieRec;
return CookieList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.CookieList = CookieList;

});
define("UltimatePDF.model$EnvironmentRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$EnvironmentRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var EnvironmentRecord = (function (_super) {
__extends(EnvironmentRecord, _super);
function EnvironmentRecord(defaults) {
_super.apply(this, arguments);
}
EnvironmentRecord.attributesToDeclare = function () {
return [
this.attr("Environment", "environmentAttr", "Environment", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDF_ServiceModel.EnvironmentRec());
}, true, UltimatePDF_ServiceModel.EnvironmentRec)
].concat(_super.attributesToDeclare.call(this));
};
EnvironmentRecord.fromStructure = function (str) {
return new EnvironmentRecord(new EnvironmentRecord.RecordClass({
environmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EnvironmentRecord._isAnonymousRecord = true;
EnvironmentRecord.UniqueId = "e60033d5-f35b-0811-49a6-cbf7dd87143d";
EnvironmentRecord.init();
return EnvironmentRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.EnvironmentRecord = EnvironmentRecord;

});
define("UltimatePDF.model$EnvironmentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$EnvironmentRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var EnvironmentRecordList = (function (_super) {
__extends(EnvironmentRecordList, _super);
function EnvironmentRecordList(defaults) {
_super.apply(this, arguments);
}
EnvironmentRecordList.itemType = UltimatePDFModel.EnvironmentRecord;
return EnvironmentRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.EnvironmentRecordList = EnvironmentRecordList;

});
define("UltimatePDF.model$DefaultBrowserRevisionList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$DefaultBrowserRevisionRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var DefaultBrowserRevisionList = (function (_super) {
__extends(DefaultBrowserRevisionList, _super);
function DefaultBrowserRevisionList(defaults) {
_super.apply(this, arguments);
}
DefaultBrowserRevisionList.itemType = UltimatePDFModel.DefaultBrowserRevisionRec;
return DefaultBrowserRevisionList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.DefaultBrowserRevisionList = DefaultBrowserRevisionList;

});
define("UltimatePDF.model$BrowserProductRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var BrowserProductRec = (function (_super) {
__extends(BrowserProductRec, _super);
function BrowserProductRec(defaults) {
_super.apply(this, arguments);
}
BrowserProductRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BrowserProductRec.init();
return BrowserProductRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.BrowserProductRec = BrowserProductRec;

});
define("UltimatePDF.model$BrowserProductRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$BrowserProductRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var BrowserProductRecord = (function (_super) {
__extends(BrowserProductRecord, _super);
function BrowserProductRecord(defaults) {
_super.apply(this, arguments);
}
BrowserProductRecord.attributesToDeclare = function () {
return [
this.attr("BrowserProduct", "browserProductAttr", "BrowserProduct", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.BrowserProductRec());
}, true, UltimatePDFModel.BrowserProductRec)
].concat(_super.attributesToDeclare.call(this));
};
BrowserProductRecord.fromStructure = function (str) {
return new BrowserProductRecord(new BrowserProductRecord.RecordClass({
browserProductAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BrowserProductRecord._isAnonymousRecord = true;
BrowserProductRecord.UniqueId = "f4c47140-e303-6964-355d-2167248c97c6";
BrowserProductRecord.init();
return BrowserProductRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.BrowserProductRecord = BrowserProductRecord;

});
define("UltimatePDF.model$BrowserProductRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$BrowserProductRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var BrowserProductRecordList = (function (_super) {
__extends(BrowserProductRecordList, _super);
function BrowserProductRecordList(defaults) {
_super.apply(this, arguments);
}
BrowserProductRecordList.itemType = UltimatePDFModel.BrowserProductRecord;
return BrowserProductRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.BrowserProductRecordList = BrowserProductRecordList;

});
define("UltimatePDF.model$QueryParameterRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$QueryParameterRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var QueryParameterRecord = (function (_super) {
__extends(QueryParameterRecord, _super);
function QueryParameterRecord(defaults) {
_super.apply(this, arguments);
}
QueryParameterRecord.attributesToDeclare = function () {
return [
this.attr("QueryParameter", "queryParameterAttr", "QueryParameter", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.QueryParameterRec());
}, true, UltimatePDFModel.QueryParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
QueryParameterRecord.fromStructure = function (str) {
return new QueryParameterRecord(new QueryParameterRecord.RecordClass({
queryParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
QueryParameterRecord._isAnonymousRecord = true;
QueryParameterRecord.UniqueId = "631226c0-194f-eb01-2c9c-b2ba532ba20a";
QueryParameterRecord.init();
return QueryParameterRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.QueryParameterRecord = QueryParameterRecord;

});
define("UltimatePDF.model$BrowserProductList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$BrowserProductRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var BrowserProductList = (function (_super) {
__extends(BrowserProductList, _super);
function BrowserProductList(defaults) {
_super.apply(this, arguments);
}
BrowserProductList.itemType = UltimatePDFModel.BrowserProductRec;
return BrowserProductList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.BrowserProductList = BrowserProductList;

});
define("UltimatePDF.model$PaperList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$PaperRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperList = (function (_super) {
__extends(PaperList, _super);
function PaperList(defaults) {
_super.apply(this, arguments);
}
PaperList.itemType = UltimatePDF_ServiceModel.PaperRec;
return PaperList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.PaperList = PaperList;

});
define("UltimatePDF.model$SessionCookieRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$SessionCookieRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var SessionCookieRecordList = (function (_super) {
__extends(SessionCookieRecordList, _super);
function SessionCookieRecordList(defaults) {
_super.apply(this, arguments);
}
SessionCookieRecordList.itemType = UltimatePDFModel.SessionCookieRecord;
return SessionCookieRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.SessionCookieRecordList = SessionCookieRecordList;

});
define("UltimatePDF.model$MarginSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var MarginSizeRec = (function (_super) {
__extends(MarginSizeRec, _super);
function MarginSizeRec(defaults) {
_super.apply(this, arguments);
}
MarginSizeRec.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("MarginTop", "marginTopAttr", "MarginTop", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MarginRight", "marginRightAttr", "MarginRight", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MarginBottom", "marginBottomAttr", "MarginBottom", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MarginLeft", "marginLeftAttr", "MarginLeft", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IsInternational", "isInternationalAttr", "IsInternational", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MarginSizeRec.init();
return MarginSizeRec;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.MarginSizeRec = MarginSizeRec;

});
define("UltimatePDF.model$MarginSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$MarginSizeRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var MarginSizeList = (function (_super) {
__extends(MarginSizeList, _super);
function MarginSizeList(defaults) {
_super.apply(this, arguments);
}
MarginSizeList.itemType = UltimatePDFModel.MarginSizeRec;
return MarginSizeList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.MarginSizeList = MarginSizeList;

});
define("UltimatePDF.model$MarginSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$MarginSizeRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var MarginSizeRecord = (function (_super) {
__extends(MarginSizeRecord, _super);
function MarginSizeRecord(defaults) {
_super.apply(this, arguments);
}
MarginSizeRecord.attributesToDeclare = function () {
return [
this.attr("MarginSize", "marginSizeAttr", "MarginSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDFModel.MarginSizeRec());
}, true, UltimatePDFModel.MarginSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
MarginSizeRecord.fromStructure = function (str) {
return new MarginSizeRecord(new MarginSizeRecord.RecordClass({
marginSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarginSizeRecord._isAnonymousRecord = true;
MarginSizeRecord.UniqueId = "b655b2f3-196c-2bfc-f370-c1268c8bc7fc";
MarginSizeRecord.init();
return MarginSizeRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.MarginSizeRecord = MarginSizeRecord;

});
define("UltimatePDF.model$MarginSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$MarginSizeRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var MarginSizeRecordList = (function (_super) {
__extends(MarginSizeRecordList, _super);
function MarginSizeRecordList(defaults) {
_super.apply(this, arguments);
}
MarginSizeRecordList.itemType = UltimatePDFModel.MarginSizeRecord;
return MarginSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.MarginSizeRecordList = MarginSizeRecordList;

});
define("UltimatePDF.model$UserEnvironmentList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$UserEnvironmentRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var UserEnvironmentList = (function (_super) {
__extends(UserEnvironmentList, _super);
function UserEnvironmentList(defaults) {
_super.apply(this, arguments);
}
UserEnvironmentList.itemType = UltimatePDFModel.UserEnvironmentRec;
return UserEnvironmentList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.UserEnvironmentList = UserEnvironmentList;

});
define("UltimatePDF.model$PaperRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$PaperRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperRecordList = (function (_super) {
__extends(PaperRecordList, _super);
function PaperRecordList(defaults) {
_super.apply(this, arguments);
}
PaperRecordList.itemType = UltimatePDFModel.PaperRecord;
return PaperRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.PaperRecordList = PaperRecordList;

});
define("UltimatePDF.model$CookieRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$CookieRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var CookieRecord = (function (_super) {
__extends(CookieRecord, _super);
function CookieRecord(defaults) {
_super.apply(this, arguments);
}
CookieRecord.attributesToDeclare = function () {
return [
this.attr("Cookie", "cookieAttr", "Cookie", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UltimatePDF_ServiceModel.CookieRec());
}, true, UltimatePDF_ServiceModel.CookieRec)
].concat(_super.attributesToDeclare.call(this));
};
CookieRecord.fromStructure = function (str) {
return new CookieRecord(new CookieRecord.RecordClass({
cookieAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CookieRecord._isAnonymousRecord = true;
CookieRecord.UniqueId = "bbf29c84-8cd4-d167-b5dd-3857a465cfa5";
CookieRecord.init();
return CookieRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.CookieRecord = CookieRecord;

});
define("UltimatePDF.model$CookieRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$CookieRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var CookieRecordList = (function (_super) {
__extends(CookieRecordList, _super);
function CookieRecordList(defaults) {
_super.apply(this, arguments);
}
CookieRecordList.itemType = UltimatePDFModel.CookieRecord;
return CookieRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.CookieRecordList = CookieRecordList;

});
define("UltimatePDF.model$ReservedQueryStringParameterRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UltimatePDF_Utils.model", "UltimatePDF.model", "Extension.UltimatePDF_Utils.model$ReservedQueryStringParameterRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Utils"], function (exports, OutSystems, Extension_UltimatePDF_UtilsModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ReservedQueryStringParameterRecord = (function (_super) {
__extends(ReservedQueryStringParameterRecord, _super);
function ReservedQueryStringParameterRecord(defaults) {
_super.apply(this, arguments);
}
ReservedQueryStringParameterRecord.attributesToDeclare = function () {
return [
this.attr("ReservedQueryStringParameter", "reservedQueryStringParameterAttr", "ReservedQueryStringParameter", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_UltimatePDF_UtilsModel.ReservedQueryStringParameterRec());
}, true, Extension_UltimatePDF_UtilsModel.ReservedQueryStringParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
ReservedQueryStringParameterRecord.fromStructure = function (str) {
return new ReservedQueryStringParameterRecord(new ReservedQueryStringParameterRecord.RecordClass({
reservedQueryStringParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ReservedQueryStringParameterRecord._isAnonymousRecord = true;
ReservedQueryStringParameterRecord.UniqueId = "afdf98d4-f2e5-86e1-2df3-295e6190ebe1";
ReservedQueryStringParameterRecord.init();
return ReservedQueryStringParameterRecord;
})(OS.DataTypes.GenericRecord);
UltimatePDFModel.ReservedQueryStringParameterRecord = ReservedQueryStringParameterRecord;

});
define("UltimatePDF.model$ReservedQueryStringParameterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$ReservedQueryStringParameterRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ReservedQueryStringParameterRecordList = (function (_super) {
__extends(ReservedQueryStringParameterRecordList, _super);
function ReservedQueryStringParameterRecordList(defaults) {
_super.apply(this, arguments);
}
ReservedQueryStringParameterRecordList.itemType = UltimatePDFModel.ReservedQueryStringParameterRecord;
return ReservedQueryStringParameterRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ReservedQueryStringParameterRecordList = ReservedQueryStringParameterRecordList;

});
define("UltimatePDF.model$QueryParameterList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$QueryParameterRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var QueryParameterList = (function (_super) {
__extends(QueryParameterList, _super);
function QueryParameterList(defaults) {
_super.apply(this, arguments);
}
QueryParameterList.itemType = UltimatePDFModel.QueryParameterRec;
return QueryParameterList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.QueryParameterList = QueryParameterList;

});
define("UltimatePDF.model$ReservedQueryStringParameterList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UltimatePDF_Utils.model", "UltimatePDF.model", "Extension.UltimatePDF_Utils.model$ReservedQueryStringParameterRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Utils"], function (exports, OutSystems, Extension_UltimatePDF_UtilsModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ReservedQueryStringParameterList = (function (_super) {
__extends(ReservedQueryStringParameterList, _super);
function ReservedQueryStringParameterList(defaults) {
_super.apply(this, arguments);
}
ReservedQueryStringParameterList.itemType = Extension_UltimatePDF_UtilsModel.ReservedQueryStringParameterRec;
return ReservedQueryStringParameterList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ReservedQueryStringParameterList = ReservedQueryStringParameterList;

});
define("UltimatePDF.model$ManagementSettingsList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$ManagementSettingsRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ManagementSettingsList = (function (_super) {
__extends(ManagementSettingsList, _super);
function ManagementSettingsList(defaults) {
_super.apply(this, arguments);
}
ManagementSettingsList.itemType = UltimatePDFModel.ManagementSettingsRec;
return ManagementSettingsList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ManagementSettingsList = ManagementSettingsList;

});
define("UltimatePDF.model$ManagementSettingsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$ManagementSettingsRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ManagementSettingsRecordList = (function (_super) {
__extends(ManagementSettingsRecordList, _super);
function ManagementSettingsRecordList(defaults) {
_super.apply(this, arguments);
}
ManagementSettingsRecordList.itemType = UltimatePDFModel.ManagementSettingsRecord;
return ManagementSettingsRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ManagementSettingsRecordList = ManagementSettingsRecordList;

});
define("UltimatePDF.model$EnvironmentList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF_Service.model", "UltimatePDF.model", "UltimatePDF_Service.model$EnvironmentRec", "UltimatePDF.referencesHealth", "UltimatePDF.referencesHealth$UltimatePDF_Service"], function (exports, OutSystems, UltimatePDF_ServiceModel, UltimatePDFModel) {
var OS = OutSystems.Internal;
var EnvironmentList = (function (_super) {
__extends(EnvironmentList, _super);
function EnvironmentList(defaults) {
_super.apply(this, arguments);
}
EnvironmentList.itemType = UltimatePDF_ServiceModel.EnvironmentRec;
return EnvironmentList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.EnvironmentList = EnvironmentList;

});
define("UltimatePDF.model$PaperSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$PaperSizeRec"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var PaperSizeList = (function (_super) {
__extends(PaperSizeList, _super);
function PaperSizeList(defaults) {
_super.apply(this, arguments);
}
PaperSizeList.itemType = UltimatePDFModel.PaperSizeRec;
return PaperSizeList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.PaperSizeList = PaperSizeList;

});
define("UltimatePDF.model$ParameterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$ParameterRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var ParameterRecordList = (function (_super) {
__extends(ParameterRecordList, _super);
function ParameterRecordList(defaults) {
_super.apply(this, arguments);
}
ParameterRecordList.itemType = UltimatePDFModel.ParameterRecord;
return ParameterRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.ParameterRecordList = ParameterRecordList;

});
define("UltimatePDF.model$QueryParameterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.model$QueryParameterRecord"], function (exports, OutSystems, UltimatePDFModel) {
var OS = OutSystems.Internal;
var QueryParameterRecordList = (function (_super) {
__extends(QueryParameterRecordList, _super);
function QueryParameterRecordList(defaults) {
_super.apply(this, arguments);
}
QueryParameterRecordList.itemType = UltimatePDFModel.QueryParameterRecord;
return QueryParameterRecordList;
})(OS.DataTypes.GenericRecordList);
UltimatePDFModel.QueryParameterRecordList = QueryParameterRecordList;

});
define("UltimatePDF.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UltimatePDFModel = exports;
Object.defineProperty(UltimatePDFModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["7de3f211-ab83-4d7e-991f-d768b7b6ef80"];
}
});

UltimatePDFModel.staticEntities = {};
UltimatePDFModel.staticEntities.browserProduct = {};
var getBrowserProductRecord = function (record) {
return UltimatePDFModel.module.staticEntities["1ae7965e-bf9f-42d4-a51e-54e07117b75d"][record];
};
Object.defineProperty(UltimatePDFModel.staticEntities.browserProduct, "firefox", {
get: function () {
return getBrowserProductRecord("10baeea1-5926-4b5a-946d-5e96495ee69b");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.browserProduct, "chromium", {
get: function () {
return getBrowserProductRecord("e6677230-aef7-484d-9113-3dd23ceadf43");
}
});

UltimatePDFModel.staticEntities.marginSize = {};
var getMarginSizeRecord = function (record) {
return UltimatePDFModel.module.staticEntities["5b92726d-74f3-4474-8b11-5f1f776e1e16"][record];
};
Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "one_cm", {
get: function () {
return getMarginSizeRecord("207460ac-8d90-4136-9950-d92c944cfedb");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "oneTopBottomByOnePointTwentyFiveSides_in", {
get: function () {
return getMarginSizeRecord("2ffc2dbe-485c-44ab-8a72-eff090faf22f");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "one_in", {
get: function () {
return getMarginSizeRecord("37ad7923-034c-45f0-a454-5fab41ae11a0");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "twoPointFiveTopBottomByThreeSides_cm", {
get: function () {
return getMarginSizeRecord("46b4d879-572b-48f3-9ae0-3fdd9d4aad78");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "onePointFive_cm", {
get: function () {
return getMarginSizeRecord("a81d82cd-4b3e-46c6-b1bd-a24e94f412c0");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "twoPointFive_cm", {
get: function () {
return getMarginSizeRecord("a837839b-d38d-4977-b05a-dbaee1cf6ea9");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.marginSize, "noMargin", {
get: function () {
return getMarginSizeRecord("c38dc081-74d9-43ed-b1d3-acceb9c2a356");
}
});

UltimatePDFModel.staticEntities.paperSize = {};
var getPaperSizeRecord = function (record) {
return UltimatePDFModel.module.staticEntities["87c2e1a6-408e-425e-aee8-38c9e81fb59a"][record];
};
Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "a5", {
get: function () {
return getPaperSizeRecord("16c58283-cd7d-4082-bf76-c3dea443086c");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "landscapeExecutive", {
get: function () {
return getPaperSizeRecord("24ee53cf-0eac-40b5-a657-f5933b7aa2b2");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "landscapeLetter", {
get: function () {
return getPaperSizeRecord("473a402c-d742-416d-838b-48564c6213ec");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "legal", {
get: function () {
return getPaperSizeRecord("5c531416-a2ab-4104-9f70-59fb6082a64e");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "landscapeA4", {
get: function () {
return getPaperSizeRecord("7e8fbf7d-0847-40ee-9b05-9621a06ed9ee");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "letter", {
get: function () {
return getPaperSizeRecord("85748fee-ddf7-48cd-8cad-0954edc0401c");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "executive", {
get: function () {
return getPaperSizeRecord("9eb0f073-aa2e-41ff-a644-4227a583f4ae");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "landscapeLegal", {
get: function () {
return getPaperSizeRecord("b571d5cc-0d7e-4fa6-8c7a-a9e1f68bd9ce");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "a4", {
get: function () {
return getPaperSizeRecord("bddefd8c-48cb-4e38-92d5-477cc122d63e");
}
});

Object.defineProperty(UltimatePDFModel.staticEntities.paperSize, "landscapeA5", {
get: function () {
return getPaperSizeRecord("fb798577-33dc-4753-baa6-0db5e1c8e21f");
}
});

});
