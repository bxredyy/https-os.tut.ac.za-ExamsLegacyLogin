define("TUTExamsLegacyCoreUI.model$OptionalStaticMapConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OptionalStaticMapConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalStaticMapConfigsRecord = (function (_super) {
__extends(OptionalStaticMapConfigsRecord, _super);
function OptionalStaticMapConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalStaticMapConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalStaticMapConfigs", "optionalStaticMapConfigsAttr", "OptionalStaticMapConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OptionalStaticMapConfigsRec());
}, true, OutSystemsMapsModel.OptionalStaticMapConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalStaticMapConfigsRecord.fromStructure = function (str) {
return new OptionalStaticMapConfigsRecord(new OptionalStaticMapConfigsRecord.RecordClass({
optionalStaticMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalStaticMapConfigsRecord._isAnonymousRecord = true;
OptionalStaticMapConfigsRecord.UniqueId = "003de765-2ef7-0684-ee40-ecb9c31ff117";
OptionalStaticMapConfigsRecord.init();
return OptionalStaticMapConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.OptionalStaticMapConfigsRecord = OptionalStaticMapConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SpaceRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpaceRec());
}, true, OutSystemsUIModel.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SpaceRecord = SpaceRecord;

});
define("TUTExamsLegacyCoreUI.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SpaceRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = TUTExamsLegacyCoreUIModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SpaceRecordList = SpaceRecordList;

});
define("TUTExamsLegacyCoreUI.model$BooleanTypesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$BooleanTypesRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesList = (function (_super) {
__extends(BooleanTypesList, _super);
function BooleanTypesList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesList.itemType = OutSystemsUIModel.BooleanTypesRec;
return BooleanTypesList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BooleanTypesList = BooleanTypesList;

});
define("TUTExamsLegacyCoreUI.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$OrientationRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUIModel.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OrientationList = OrientationList;

});
define("TUTExamsLegacyCoreUI.model$CarouselDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselDirectionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRecord = (function (_super) {
__extends(CarouselDirectionRecord, _super);
function CarouselDirectionRecord(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecord.attributesToDeclare = function () {
return [
this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselDirectionRec());
}, true, OutSystemsUIModel.CarouselDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselDirectionRecord.fromStructure = function (str) {
return new CarouselDirectionRecord(new CarouselDirectionRecord.RecordClass({
carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselDirectionRecord._isAnonymousRecord = true;
CarouselDirectionRecord.UniqueId = "fb5d22b1-003c-ff23-4a58-8ab54b5367f0";
CarouselDirectionRecord.init();
return CarouselDirectionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.CarouselDirectionRecord = CarouselDirectionRecord;

});
define("TUTExamsLegacyCoreUI.model$CarouselDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$CarouselDirectionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRecordList = (function (_super) {
__extends(CarouselDirectionRecordList, _super);
function CarouselDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecordList.itemType = TUTExamsLegacyCoreUIModel.CarouselDirectionRecord;
return CarouselDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselDirectionRecordList = CarouselDirectionRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalMapConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OptionalMapConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalMapConfigsRecord = (function (_super) {
__extends(OptionalMapConfigsRecord, _super);
function OptionalMapConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalMapConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalMapConfigs", "optionalMapConfigsAttr", "OptionalMapConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OptionalMapConfigsRec());
}, true, OutSystemsMapsModel.OptionalMapConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalMapConfigsRecord.fromStructure = function (str) {
return new OptionalMapConfigsRecord(new OptionalMapConfigsRecord.RecordClass({
optionalMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalMapConfigsRecord._isAnonymousRecord = true;
OptionalMapConfigsRecord.UniqueId = "d761bc5f-1b0f-e2de-bf1c-3edffd0efd3c";
OptionalMapConfigsRecord.init();
return OptionalMapConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.OptionalMapConfigsRecord = OptionalMapConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$OptionalMapConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$OptionalMapConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalMapConfigsRecordList = (function (_super) {
__extends(OptionalMapConfigsRecordList, _super);
function OptionalMapConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalMapConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.OptionalMapConfigsRecord;
return OptionalMapConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalMapConfigsRecordList = OptionalMapConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$LegendPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$LegendPositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var LegendPositionRecord = (function (_super) {
__extends(LegendPositionRecord, _super);
function LegendPositionRecord(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecord.attributesToDeclare = function () {
return [
this.attr("LegendPosition", "legendPositionAttr", "LegendPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendPositionRec());
}, true, OutSystemsChartsModel.LegendPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendPositionRecord.fromStructure = function (str) {
return new LegendPositionRecord(new LegendPositionRecord.RecordClass({
legendPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendPositionRecord._isAnonymousRecord = true;
LegendPositionRecord.UniqueId = "054139ee-1b4e-118a-0de0-bda9edde9b3e";
LegendPositionRecord.init();
return LegendPositionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.LegendPositionRecord = LegendPositionRecord;

});
define("TUTExamsLegacyCoreUI.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DirectionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DirectionRecord = (function (_super) {
__extends(DirectionRecord, _super);
function DirectionRecord(defaults) {
_super.apply(this, arguments);
}
DirectionRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DirectionRec());
}, true, OutSystemsUIModel.DirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRecord.fromStructure = function (str) {
return new DirectionRecord(new DirectionRecord.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectionRecord._isAnonymousRecord = true;
DirectionRecord.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
DirectionRecord.init();
return DirectionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DirectionRecord = DirectionRecord;

});
define("TUTExamsLegacyCoreUI.model$DatePickerWeekDayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerWeekDayRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecord = (function (_super) {
__extends(DatePickerWeekDayRecord, _super);
function DatePickerWeekDayRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerWeekDayRec());
}, true, OutSystemsUIModel.DatePickerWeekDayRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerWeekDayRecord.fromStructure = function (str) {
return new DatePickerWeekDayRecord(new DatePickerWeekDayRecord.RecordClass({
datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerWeekDayRecord._isAnonymousRecord = true;
DatePickerWeekDayRecord.UniqueId = "210f541f-43ec-6384-ba59-bfd8fe4b8837";
DatePickerWeekDayRecord.init();
return DatePickerWeekDayRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DatePickerWeekDayRecord = DatePickerWeekDayRecord;

});
define("TUTExamsLegacyCoreUI.model$DatePickerWeekDayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DatePickerWeekDayRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecordList = (function (_super) {
__extends(DatePickerWeekDayRecordList, _super);
function DatePickerWeekDayRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecordList.itemType = TUTExamsLegacyCoreUIModel.DatePickerWeekDayRecord;
return DatePickerWeekDayRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerWeekDayRecordList = DatePickerWeekDayRecordList;

});
define("TUTExamsLegacyCoreUI.model$StyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$StyleRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StyleList = (function (_super) {
__extends(StyleList, _super);
function StyleList(defaults) {
_super.apply(this, arguments);
}
StyleList.itemType = OutSystemsMapsModel.StyleRec;
return StyleList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StyleList = StyleList;

});
define("TUTExamsLegacyCoreUI.model$FBCode_recordRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyBO_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyBO_CS.model$FBCode_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyBO_CS"], function (exports, OutSystems, TUTExamsLegacyBO_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var FBCode_recordRecord = (function (_super) {
__extends(FBCode_recordRecord, _super);
function FBCode_recordRecord(defaults) {
_super.apply(this, arguments);
}
FBCode_recordRecord.attributesToDeclare = function () {
return [
this.attr("FBCode_record", "fBCode_recordAttr", "FBCode_record", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyBO_CSModel.FBCode_recordRec());
}, true, TUTExamsLegacyBO_CSModel.FBCode_recordRec)
].concat(_super.attributesToDeclare.call(this));
};
FBCode_recordRecord.fromStructure = function (str) {
return new FBCode_recordRecord(new FBCode_recordRecord.RecordClass({
fBCode_recordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FBCode_recordRecord._isAnonymousRecord = true;
FBCode_recordRecord.UniqueId = "ae70c6b0-f1f6-1515-b518-2e79003f25b8";
FBCode_recordRecord.init();
return FBCode_recordRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.FBCode_recordRecord = FBCode_recordRecord;

});
define("TUTExamsLegacyCoreUI.model$FBCode_recordRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$FBCode_recordRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var FBCode_recordRecordList = (function (_super) {
__extends(FBCode_recordRecordList, _super);
function FBCode_recordRecordList(defaults) {
_super.apply(this, arguments);
}
FBCode_recordRecordList.itemType = TUTExamsLegacyCoreUIModel.FBCode_recordRecord;
return FBCode_recordRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.FBCode_recordRecordList = FBCode_recordRecordList;

});
define("TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$StudentBioDetail_RecordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StudentBioDetail_RecordRecord = (function (_super) {
__extends(StudentBioDetail_RecordRecord, _super);
function StudentBioDetail_RecordRecord(defaults) {
_super.apply(this, arguments);
}
StudentBioDetail_RecordRecord.attributesToDeclare = function () {
return [
this.attr("StudentBioDetail_Record", "studentBioDetail_RecordAttr", "StudentBioDetail_Record", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.StudentBioDetail_RecordRec());
}, true, TUTExamsLegacyPortal_CSModel.StudentBioDetail_RecordRec)
].concat(_super.attributesToDeclare.call(this));
};
StudentBioDetail_RecordRecord.fromStructure = function (str) {
return new StudentBioDetail_RecordRecord(new StudentBioDetail_RecordRecord.RecordClass({
studentBioDetail_RecordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StudentBioDetail_RecordRecord._isAnonymousRecord = true;
StudentBioDetail_RecordRecord.UniqueId = "0a58e92d-63f4-3c98-0b6e-4faacffd1fc6";
StudentBioDetail_RecordRecord.init();
return StudentBioDetail_RecordRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.StudentBioDetail_RecordRecord = StudentBioDetail_RecordRecord;

});
define("TUTExamsLegacyCoreUI.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ShapeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ShapeRecord = (function (_super) {
__extends(ShapeRecord, _super);
function ShapeRecord(defaults) {
_super.apply(this, arguments);
}
ShapeRecord.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ShapeRec());
}, true, OutSystemsUIModel.ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRecord.fromStructure = function (str) {
return new ShapeRecord(new ShapeRecord.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShapeRecord._isAnonymousRecord = true;
ShapeRecord.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
ShapeRecord.init();
return ShapeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ShapeRecord = ShapeRecord;

});
define("TUTExamsLegacyCoreUI.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$BulkActionsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUIModel.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BulkActionsList = BulkActionsList;

});
define("TUTExamsLegacyCoreUI.model$MarkerClustererList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MarkerClustererRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerClustererList = (function (_super) {
__extends(MarkerClustererList, _super);
function MarkerClustererList(defaults) {
_super.apply(this, arguments);
}
MarkerClustererList.itemType = OutSystemsMapsModel.MarkerClustererRec;
return MarkerClustererList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarkerClustererList = MarkerClustererList;

});
define("TUTExamsLegacyCoreUI.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$StepsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StepsRecord = (function (_super) {
__extends(StepsRecord, _super);
function StepsRecord(defaults) {
_super.apply(this, arguments);
}
StepsRecord.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StepsRec());
}, true, OutSystemsUIModel.StepsRec)
].concat(_super.attributesToDeclare.call(this));
};
StepsRecord.fromStructure = function (str) {
return new StepsRecord(new StepsRecord.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRecord._isAnonymousRecord = true;
StepsRecord.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
StepsRecord.init();
return StepsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.StepsRecord = StepsRecord;

});
define("TUTExamsLegacyCoreUI.model$ERSelectedReport_recordRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERSelectedReport_recordRecord = (function (_super) {
__extends(ERSelectedReport_recordRecord, _super);
function ERSelectedReport_recordRecord(defaults) {
_super.apply(this, arguments);
}
ERSelectedReport_recordRecord.attributesToDeclare = function () {
return [
this.attr("ERSelectedReport_record", "eRSelectedReport_recordAttr", "ERSelectedReport_record", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec());
}, true, TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec)
].concat(_super.attributesToDeclare.call(this));
};
ERSelectedReport_recordRecord.fromStructure = function (str) {
return new ERSelectedReport_recordRecord(new ERSelectedReport_recordRecord.RecordClass({
eRSelectedReport_recordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ERSelectedReport_recordRecord._isAnonymousRecord = true;
ERSelectedReport_recordRecord.UniqueId = "0e3d1473-6231-6723-9753-a10c8d8ea971";
ERSelectedReport_recordRecord.init();
return ERSelectedReport_recordRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ERSelectedReport_recordRecord = ERSelectedReport_recordRecord;

});
define("TUTExamsLegacyCoreUI.model$ChartLegendOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsRecord = (function (_super) {
__extends(ChartLegendOptionalConfigsRecord, _super);
function ChartLegendOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ChartLegendOptionalConfigs", "chartLegendOptionalConfigsAttr", "ChartLegendOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartLegendOptionalConfigsRec());
}, true, OutSystemsChartsModel.ChartLegendOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartLegendOptionalConfigsRecord.fromStructure = function (str) {
return new ChartLegendOptionalConfigsRecord(new ChartLegendOptionalConfigsRecord.RecordClass({
chartLegendOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartLegendOptionalConfigsRecord._isAnonymousRecord = true;
ChartLegendOptionalConfigsRecord.UniqueId = "c38769c4-e3f5-3c55-790e-6a4b2c81b7ff";
ChartLegendOptionalConfigsRecord.init();
return ChartLegendOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ChartLegendOptionalConfigsRecord = ChartLegendOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$ChartLegendOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ChartLegendOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsRecordList = (function (_super) {
__extends(ChartLegendOptionalConfigsRecordList, _super);
function ChartLegendOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.ChartLegendOptionalConfigsRecord;
return ChartLegendOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ChartLegendOptionalConfigsRecordList = ChartLegendOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ChartLegendStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ChartLegendStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingRecord = (function (_super) {
__extends(ChartLegendStylingRecord, _super);
function ChartLegendStylingRecord(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingRecord.attributesToDeclare = function () {
return [
this.attr("ChartLegendStyling", "chartLegendStylingAttr", "ChartLegendStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartLegendStylingRec());
}, true, OutSystemsChartsModel.ChartLegendStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartLegendStylingRecord.fromStructure = function (str) {
return new ChartLegendStylingRecord(new ChartLegendStylingRecord.RecordClass({
chartLegendStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartLegendStylingRecord._isAnonymousRecord = true;
ChartLegendStylingRecord.UniqueId = "11e12158-254e-5be6-bde5-f4ba88bacb32";
ChartLegendStylingRecord.init();
return ChartLegendStylingRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ChartLegendStylingRecord = ChartLegendStylingRecord;

});
define("TUTExamsLegacyCoreUI.model$NoUiSliderConfigs_RangeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeList = (function (_super) {
__extends(NoUiSliderConfigs_RangeList, _super);
function NoUiSliderConfigs_RangeList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeList.itemType = OutSystemsUIModel.NoUiSliderConfigs_RangeRec;
return NoUiSliderConfigs_RangeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.NoUiSliderConfigs_RangeList = NoUiSliderConfigs_RangeList;

});
define("TUTExamsLegacyCoreUI.model$NoUiSliderConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$NoUiSliderConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecord = (function (_super) {
__extends(NoUiSliderConfigsRecord, _super);
function NoUiSliderConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs", "noUiSliderConfigsAttr", "NoUiSliderConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NoUiSliderConfigsRec());
}, true, OutSystemsUIModel.NoUiSliderConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigsRecord.fromStructure = function (str) {
return new NoUiSliderConfigsRecord(new NoUiSliderConfigsRecord.RecordClass({
noUiSliderConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigsRecord._isAnonymousRecord = true;
NoUiSliderConfigsRecord.UniqueId = "1310596a-4ac4-ae2b-0319-b38dd9472639";
NoUiSliderConfigsRecord.init();
return NoUiSliderConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.NoUiSliderConfigsRecord = NoUiSliderConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AnimationTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AnimationTypeRec());
}, true, OutSystemsUIModel.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AnimationTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$YAxisGridLinesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$YAxisGridLinesStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingRecord = (function (_super) {
__extends(YAxisGridLinesStylingRecord, _super);
function YAxisGridLinesStylingRecord(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingRecord.attributesToDeclare = function () {
return [
this.attr("YAxisGridLinesStyling", "yAxisGridLinesStylingAttr", "YAxisGridLinesStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisGridLinesStylingRec());
}, true, OutSystemsChartsModel.YAxisGridLinesStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisGridLinesStylingRecord.fromStructure = function (str) {
return new YAxisGridLinesStylingRecord(new YAxisGridLinesStylingRecord.RecordClass({
yAxisGridLinesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisGridLinesStylingRecord._isAnonymousRecord = true;
YAxisGridLinesStylingRecord.UniqueId = "1566355e-c5fa-f313-8acd-d10ae68fb068";
YAxisGridLinesStylingRecord.init();
return YAxisGridLinesStylingRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.YAxisGridLinesStylingRecord = YAxisGridLinesStylingRecord;

});
define("TUTExamsLegacyCoreUI.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SpaceRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUIModel.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SpaceList = SpaceList;

});
define("TUTExamsLegacyCoreUI.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DeviceResponsiveRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecord = (function (_super) {
__extends(DeviceResponsiveRecord, _super);
function DeviceResponsiveRecord(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecord.attributesToDeclare = function () {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceResponsiveRec());
}, true, OutSystemsUIModel.DeviceResponsiveRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceResponsiveRecord.fromStructure = function (str) {
return new DeviceResponsiveRecord(new DeviceResponsiveRecord.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceResponsiveRecord._isAnonymousRecord = true;
DeviceResponsiveRecord.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
DeviceResponsiveRecord.init();
return DeviceResponsiveRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("TUTExamsLegacyCoreUI.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$OrientationRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OrientationRecord = (function (_super) {
__extends(OrientationRecord, _super);
function OrientationRecord(defaults) {
_super.apply(this, arguments);
}
OrientationRecord.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.OrientationRec());
}, true, OutSystemsUIModel.OrientationRec)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRecord.fromStructure = function (str) {
return new OrientationRecord(new OrientationRecord.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRecord._isAnonymousRecord = true;
OrientationRecord.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
OrientationRecord.init();
return OrientationRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.OrientationRecord = OrientationRecord;

});
define("TUTExamsLegacyCoreUI.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$OrientationRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = TUTExamsLegacyCoreUIModel.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OrientationRecordList = OrientationRecordList;

});
define("TUTExamsLegacyCoreUI.model$AxisLabelList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$AxisLabelRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AxisLabelList = (function (_super) {
__extends(AxisLabelList, _super);
function AxisLabelList(defaults) {
_super.apply(this, arguments);
}
AxisLabelList.itemType = OutSystemsChartsModel.AxisLabelRec;
return AxisLabelList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AxisLabelList = AxisLabelList;

});
define("TUTExamsLegacyCoreUI.model$YAxisStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$YAxisStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisStylingRecord = (function (_super) {
__extends(YAxisStylingRecord, _super);
function YAxisStylingRecord(defaults) {
_super.apply(this, arguments);
}
YAxisStylingRecord.attributesToDeclare = function () {
return [
this.attr("YAxisStyling", "yAxisStylingAttr", "YAxisStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisStylingRec());
}, true, OutSystemsChartsModel.YAxisStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisStylingRecord.fromStructure = function (str) {
return new YAxisStylingRecord(new YAxisStylingRecord.RecordClass({
yAxisStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisStylingRecord._isAnonymousRecord = true;
YAxisStylingRecord.UniqueId = "d614572f-93a7-9200-a323-5ee26034df62";
YAxisStylingRecord.init();
return YAxisStylingRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.YAxisStylingRecord = YAxisStylingRecord;

});
define("TUTExamsLegacyCoreUI.model$YAxisStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$YAxisStylingRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisStylingRecordList = (function (_super) {
__extends(YAxisStylingRecordList, _super);
function YAxisStylingRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisStylingRecordList.itemType = TUTExamsLegacyCoreUIModel.YAxisStylingRecord;
return YAxisStylingRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.YAxisStylingRecordList = YAxisStylingRecordList;

});
define("TUTExamsLegacyCoreUI.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$TriggerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUIModel.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TriggerList = TriggerList;

});
define("TUTExamsLegacyCoreUI.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AutoplayRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AutoplayRecord = (function (_super) {
__extends(AutoplayRecord, _super);
function AutoplayRecord(defaults) {
_super.apply(this, arguments);
}
AutoplayRecord.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AutoplayRec());
}, true, OutSystemsUIModel.AutoplayRec)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRecord.fromStructure = function (str) {
return new AutoplayRecord(new AutoplayRecord.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRecord._isAnonymousRecord = true;
AutoplayRecord.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
AutoplayRecord.init();
return AutoplayRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AutoplayRecord = AutoplayRecord;

});
define("TUTExamsLegacyCoreUI.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AutoplayRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = TUTExamsLegacyCoreUIModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AutoplayRecordList = AutoplayRecordList;

});
define("TUTExamsLegacyCoreUI.model$PaperSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$PaperSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
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
TUTExamsLegacyCoreUIModel.PaperSizeRecord = PaperSizeRecord;

});
define("TUTExamsLegacyCoreUI.model$PaperSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$PaperSizeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PaperSizeRecordList = (function (_super) {
__extends(PaperSizeRecordList, _super);
function PaperSizeRecordList(defaults) {
_super.apply(this, arguments);
}
PaperSizeRecordList.itemType = TUTExamsLegacyCoreUIModel.PaperSizeRecord;
return PaperSizeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.PaperSizeRecordList = PaperSizeRecordList;

});
define("TUTExamsLegacyCoreUI.model$", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.Types.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TextList = TextList;

});
define("TUTExamsLegacyCoreUI.model$PropertyValueRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$PropertyValueRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PropertyValueRecord = (function (_super) {
__extends(PropertyValueRecord, _super);
function PropertyValueRecord(defaults) {
_super.apply(this, arguments);
}
PropertyValueRecord.attributesToDeclare = function () {
return [
this.attr("PropertyValue", "propertyValueAttr", "PropertyValue", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.PropertyValueRec());
}, true, OutSystemsChartsModel.PropertyValueRec)
].concat(_super.attributesToDeclare.call(this));
};
PropertyValueRecord.fromStructure = function (str) {
return new PropertyValueRecord(new PropertyValueRecord.RecordClass({
propertyValueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PropertyValueRecord._isAnonymousRecord = true;
PropertyValueRecord.UniqueId = "a193d684-3268-14a4-a15e-932d0cccd250";
PropertyValueRecord.init();
return PropertyValueRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.PropertyValueRecord = PropertyValueRecord;

});
define("TUTExamsLegacyCoreUI.model$PropertyValueRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$PropertyValueRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PropertyValueRecordList = (function (_super) {
__extends(PropertyValueRecordList, _super);
function PropertyValueRecordList(defaults) {
_super.apply(this, arguments);
}
PropertyValueRecordList.itemType = TUTExamsLegacyCoreUIModel.PropertyValueRecord;
return PropertyValueRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.PropertyValueRecordList = PropertyValueRecordList;

});
define("TUTExamsLegacyCoreUI.model$LegendPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$LegendPositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var LegendPositionList = (function (_super) {
__extends(LegendPositionList, _super);
function LegendPositionList(defaults) {
_super.apply(this, arguments);
}
LegendPositionList.itemType = OutSystemsChartsModel.LegendPositionRec;
return LegendPositionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.LegendPositionList = LegendPositionList;

});
define("TUTExamsLegacyCoreUI.model$YAxisOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$YAxisOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsRecord = (function (_super) {
__extends(YAxisOptionalConfigsRecord, _super);
function YAxisOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("YAxisOptionalConfigs", "yAxisOptionalConfigsAttr", "YAxisOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisOptionalConfigsRec());
}, true, OutSystemsChartsModel.YAxisOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisOptionalConfigsRecord.fromStructure = function (str) {
return new YAxisOptionalConfigsRecord(new YAxisOptionalConfigsRecord.RecordClass({
yAxisOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisOptionalConfigsRecord._isAnonymousRecord = true;
YAxisOptionalConfigsRecord.UniqueId = "65ec7e7c-1193-943a-c7d3-16b6ce7d97cc";
YAxisOptionalConfigsRecord.init();
return YAxisOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.YAxisOptionalConfigsRecord = YAxisOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$YAxisOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$YAxisOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsRecordList = (function (_super) {
__extends(YAxisOptionalConfigsRecordList, _super);
function YAxisOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.YAxisOptionalConfigsRecord;
return YAxisOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.YAxisOptionalConfigsRecordList = YAxisOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$StyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$StyleRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StyleRecord = (function (_super) {
__extends(StyleRecord, _super);
function StyleRecord(defaults) {
_super.apply(this, arguments);
}
StyleRecord.attributesToDeclare = function () {
return [
this.attr("Style", "styleAttr", "Style", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.StyleRec());
}, true, OutSystemsMapsModel.StyleRec)
].concat(_super.attributesToDeclare.call(this));
};
StyleRecord.fromStructure = function (str) {
return new StyleRecord(new StyleRecord.RecordClass({
styleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StyleRecord._isAnonymousRecord = true;
StyleRecord.UniqueId = "97843bcb-5214-6db1-681d-fc816cff70a0";
StyleRecord.init();
return StyleRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.StyleRecord = StyleRecord;

});
define("TUTExamsLegacyCoreUI.model$StyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$StyleRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StyleRecordList = (function (_super) {
__extends(StyleRecordList, _super);
function StyleRecordList(defaults) {
_super.apply(this, arguments);
}
StyleRecordList.itemType = TUTExamsLegacyCoreUIModel.StyleRecord;
return StyleRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StyleRecordList = StyleRecordList;

});
define("TUTExamsLegacyCoreUI.model$BooleanTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$BooleanTypesRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesRecord = (function (_super) {
__extends(BooleanTypesRecord, _super);
function BooleanTypesRecord(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecord.attributesToDeclare = function () {
return [
this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BooleanTypesRec());
}, true, OutSystemsUIModel.BooleanTypesRec)
].concat(_super.attributesToDeclare.call(this));
};
BooleanTypesRecord.fromStructure = function (str) {
return new BooleanTypesRecord(new BooleanTypesRecord.RecordClass({
booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BooleanTypesRecord._isAnonymousRecord = true;
BooleanTypesRecord.UniqueId = "1ea63146-d7f1-d969-afc2-06832e751192";
BooleanTypesRecord.init();
return BooleanTypesRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.BooleanTypesRecord = BooleanTypesRecord;

});
define("TUTExamsLegacyCoreUI.model$AxisLabelRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$AxisLabelRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AxisLabelRecord = (function (_super) {
__extends(AxisLabelRecord, _super);
function AxisLabelRecord(defaults) {
_super.apply(this, arguments);
}
AxisLabelRecord.attributesToDeclare = function () {
return [
this.attr("AxisLabel", "axisLabelAttr", "AxisLabel", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AxisLabelRec());
}, true, OutSystemsChartsModel.AxisLabelRec)
].concat(_super.attributesToDeclare.call(this));
};
AxisLabelRecord.fromStructure = function (str) {
return new AxisLabelRecord(new AxisLabelRecord.RecordClass({
axisLabelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisLabelRecord._isAnonymousRecord = true;
AxisLabelRecord.UniqueId = "f3000856-fa7c-3354-ce37-1360ce2db23a";
AxisLabelRecord.init();
return AxisLabelRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AxisLabelRecord = AxisLabelRecord;

});
define("TUTExamsLegacyCoreUI.model$AxisLabelRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AxisLabelRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AxisLabelRecordList = (function (_super) {
__extends(AxisLabelRecordList, _super);
function AxisLabelRecordList(defaults) {
_super.apply(this, arguments);
}
AxisLabelRecordList.itemType = TUTExamsLegacyCoreUIModel.AxisLabelRecord;
return AxisLabelRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AxisLabelRecordList = AxisLabelRecordList;

});
define("TUTExamsLegacyCoreUI.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AccordionIconPositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUIModel.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AccordionIconPositionList = AccordionIconPositionList;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingMarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesStylingMarkerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerRecord = (function (_super) {
__extends(SeriesStylingMarkerRecord, _super);
function SeriesStylingMarkerRecord(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerRecord.attributesToDeclare = function () {
return [
this.attr("SeriesStylingMarker", "seriesStylingMarkerAttr", "SeriesStylingMarker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesStylingMarkerRec());
}, true, OutSystemsChartsModel.SeriesStylingMarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingMarkerRecord.fromStructure = function (str) {
return new SeriesStylingMarkerRecord(new SeriesStylingMarkerRecord.RecordClass({
seriesStylingMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingMarkerRecord._isAnonymousRecord = true;
SeriesStylingMarkerRecord.UniqueId = "23f04252-aed9-962b-8ebd-b251db000b96";
SeriesStylingMarkerRecord.init();
return SeriesStylingMarkerRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SeriesStylingMarkerRecord = SeriesStylingMarkerRecord;

});
define("TUTExamsLegacyCoreUI.model$NoUiSliderConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$NoUiSliderConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsList = (function (_super) {
__extends(NoUiSliderConfigsList, _super);
function NoUiSliderConfigsList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsList.itemType = OutSystemsUIModel.NoUiSliderConfigsRec;
return NoUiSliderConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.NoUiSliderConfigsList = NoUiSliderConfigsList;

});
define("TUTExamsLegacyCoreUI.model$PropertyValueList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$PropertyValueRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PropertyValueList = (function (_super) {
__extends(PropertyValueList, _super);
function PropertyValueList(defaults) {
_super.apply(this, arguments);
}
PropertyValueList.itemType = OutSystemsChartsModel.PropertyValueRec;
return PropertyValueList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.PropertyValueList = PropertyValueList;

});
define("TUTExamsLegacyCoreUI.model$LegendLayoutRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$LegendLayoutRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var LegendLayoutRecord = (function (_super) {
__extends(LegendLayoutRecord, _super);
function LegendLayoutRecord(defaults) {
_super.apply(this, arguments);
}
LegendLayoutRecord.attributesToDeclare = function () {
return [
this.attr("LegendLayout", "legendLayoutAttr", "LegendLayout", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendLayoutRec());
}, true, OutSystemsChartsModel.LegendLayoutRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendLayoutRecord.fromStructure = function (str) {
return new LegendLayoutRecord(new LegendLayoutRecord.RecordClass({
legendLayoutAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendLayoutRecord._isAnonymousRecord = true;
LegendLayoutRecord.UniqueId = "250abb78-0612-7d6d-6c56-5bcd6bd8fd6f";
LegendLayoutRecord.init();
return LegendLayoutRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.LegendLayoutRecord = LegendLayoutRecord;

});
define("TUTExamsLegacyCoreUI.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$BulkActionsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BulkActionsRecord = (function (_super) {
__extends(BulkActionsRecord, _super);
function BulkActionsRecord(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecord.attributesToDeclare = function () {
return [
this.attr("BulkActions", "bulkActionsAttr", "BulkActions", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BulkActionsRec());
}, true, OutSystemsUIModel.BulkActionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRecord.fromStructure = function (str) {
return new BulkActionsRecord(new BulkActionsRecord.RecordClass({
bulkActionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRecord._isAnonymousRecord = true;
BulkActionsRecord.UniqueId = "dedbf5dd-d64a-7345-04bf-3fd84b1363ec";
BulkActionsRecord.init();
return BulkActionsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.BulkActionsRecord = BulkActionsRecord;

});
define("TUTExamsLegacyCoreUI.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$BulkActionsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = TUTExamsLegacyCoreUIModel.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BulkActionsRecordList = BulkActionsRecordList;

});
define("TUTExamsLegacyCoreUI.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$BreakColumnsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecord = (function (_super) {
__extends(BreakColumnsRecord, _super);
function BreakColumnsRecord(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecord.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BreakColumnsRec());
}, true, OutSystemsUIModel.BreakColumnsRec)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRecord.fromStructure = function (str) {
return new BreakColumnsRecord(new BreakColumnsRecord.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRecord._isAnonymousRecord = true;
BreakColumnsRecord.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
BreakColumnsRecord.init();
return BreakColumnsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("TUTExamsLegacyCoreUI.model$XAxisGridLinesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$XAxisGridLinesStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingRecord = (function (_super) {
__extends(XAxisGridLinesStylingRecord, _super);
function XAxisGridLinesStylingRecord(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingRecord.attributesToDeclare = function () {
return [
this.attr("XAxisGridLinesStyling", "xAxisGridLinesStylingAttr", "XAxisGridLinesStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisGridLinesStylingRec());
}, true, OutSystemsChartsModel.XAxisGridLinesStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisGridLinesStylingRecord.fromStructure = function (str) {
return new XAxisGridLinesStylingRecord(new XAxisGridLinesStylingRecord.RecordClass({
xAxisGridLinesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisGridLinesStylingRecord._isAnonymousRecord = true;
XAxisGridLinesStylingRecord.UniqueId = "268a48d1-c903-fcee-31c2-d9b87f8f364f";
XAxisGridLinesStylingRecord.init();
return XAxisGridLinesStylingRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.XAxisGridLinesStylingRecord = XAxisGridLinesStylingRecord;

});
define("TUTExamsLegacyCoreUI.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SizeRecord = (function (_super) {
__extends(SizeRecord, _super);
function SizeRecord(defaults) {
_super.apply(this, arguments);
}
SizeRecord.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SizeRec());
}, true, OutSystemsUIModel.SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeRecord.fromStructure = function (str) {
return new SizeRecord(new SizeRecord.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRecord._isAnonymousRecord = true;
SizeRecord.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
SizeRecord.init();
return SizeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SizeRecord = SizeRecord;

});
define("TUTExamsLegacyCoreUI.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SizeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = TUTExamsLegacyCoreUIModel.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SizeRecordList = SizeRecordList;

});
define("TUTExamsLegacyCoreUI.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ErrorMessageRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ErrorMessageRec());
}, true, OutSystemsUIModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("TUTExamsLegacyCoreUI.model$TimteTableBio_recordRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$TimteTableBio_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TimteTableBio_recordRecord = (function (_super) {
__extends(TimteTableBio_recordRecord, _super);
function TimteTableBio_recordRecord(defaults) {
_super.apply(this, arguments);
}
TimteTableBio_recordRecord.attributesToDeclare = function () {
return [
this.attr("TimteTableBio_record", "timteTableBio_recordAttr", "TimteTableBio_record", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.TimteTableBio_recordRec());
}, true, TUTExamsLegacyPortal_CSModel.TimteTableBio_recordRec)
].concat(_super.attributesToDeclare.call(this));
};
TimteTableBio_recordRecord.fromStructure = function (str) {
return new TimteTableBio_recordRecord(new TimteTableBio_recordRecord.RecordClass({
timteTableBio_recordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimteTableBio_recordRecord._isAnonymousRecord = true;
TimteTableBio_recordRecord.UniqueId = "c4e2b76a-92b3-7f6a-2726-e19dcd66815f";
TimteTableBio_recordRecord.init();
return TimteTableBio_recordRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TimteTableBio_recordRecord = TimteTableBio_recordRecord;

});
define("TUTExamsLegacyCoreUI.model$TimteTableBio_recordRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TimteTableBio_recordRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TimteTableBio_recordRecordList = (function (_super) {
__extends(TimteTableBio_recordRecordList, _super);
function TimteTableBio_recordRecordList(defaults) {
_super.apply(this, arguments);
}
TimteTableBio_recordRecordList.itemType = TUTExamsLegacyCoreUIModel.TimteTableBio_recordRecord;
return TimteTableBio_recordRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TimteTableBio_recordRecordList = TimteTableBio_recordRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecord = (function (_super) {
__extends(DropdownOptionalConfigsRecord, _super);
function DropdownOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionalConfigsRec());
}, true, OutSystemsUIModel.DropdownOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownOptionalConfigsRecord(new DropdownOptionalConfigsRecord.RecordClass({
dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionalConfigsRecord._isAnonymousRecord = true;
DropdownOptionalConfigsRecord.UniqueId = "2ac88c51-f2d9-ed90-8454-e6a06ffe188e";
DropdownOptionalConfigsRecord.init();
return DropdownOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DropdownOptionalConfigsRecord = DropdownOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$LegendLayoutRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$LegendLayoutRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var LegendLayoutRecordList = (function (_super) {
__extends(LegendLayoutRecordList, _super);
function LegendLayoutRecordList(defaults) {
_super.apply(this, arguments);
}
LegendLayoutRecordList.itemType = TUTExamsLegacyCoreUIModel.LegendLayoutRecord;
return LegendLayoutRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.LegendLayoutRecordList = LegendLayoutRecordList;

});
define("TUTExamsLegacyCoreUI.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MessageStatusRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MessageStatusRec());
}, true, OutSystemsUIModel.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MessageStatusRecord = MessageStatusRecord;

});
define("TUTExamsLegacyCoreUI.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MessageStatusRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = TUTExamsLegacyCoreUIModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("TUTExamsLegacyCoreUI.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MenuActionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MenuActionRec());
}, true, OutSystemsUIModel.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MenuActionRecord = MenuActionRecord;

});
define("TUTExamsLegacyCoreUI.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MenuActionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = TUTExamsLegacyCoreUIModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MenuActionRecordList = MenuActionRecordList;

});
define("TUTExamsLegacyCoreUI.model$YAxisOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$YAxisOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsList = (function (_super) {
__extends(YAxisOptionalConfigsList, _super);
function YAxisOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsList.itemType = OutSystemsChartsModel.YAxisOptionalConfigsRec;
return YAxisOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.YAxisOptionalConfigsList = YAxisOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$StaticMarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$StaticMarkerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StaticMarkerRecord = (function (_super) {
__extends(StaticMarkerRecord, _super);
function StaticMarkerRecord(defaults) {
_super.apply(this, arguments);
}
StaticMarkerRecord.attributesToDeclare = function () {
return [
this.attr("StaticMarker", "staticMarkerAttr", "StaticMarker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.StaticMarkerRec());
}, true, OutSystemsMapsModel.StaticMarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
StaticMarkerRecord.fromStructure = function (str) {
return new StaticMarkerRecord(new StaticMarkerRecord.RecordClass({
staticMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StaticMarkerRecord._isAnonymousRecord = true;
StaticMarkerRecord.UniqueId = "2e794e99-5064-8fb7-8174-0aa3223ba10d";
StaticMarkerRecord.init();
return StaticMarkerRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.StaticMarkerRecord = StaticMarkerRecord;

});
define("TUTExamsLegacyCoreUI.model$ERResults_prt_ResultList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$ERResults_prt_ResultRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERResults_prt_ResultList = (function (_super) {
__extends(ERResults_prt_ResultList, _super);
function ERResults_prt_ResultList(defaults) {
_super.apply(this, arguments);
}
ERResults_prt_ResultList.itemType = TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultRec;
return ERResults_prt_ResultList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ERResults_prt_ResultList = ERResults_prt_ResultList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerRangeOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecord = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecord, _super);
function DatePickerRangeOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerRangeOptionalConfigsRec());
}, true, OutSystemsUIModel.DatePickerRangeOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRangeOptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerRangeOptionalConfigsRecord(new DatePickerRangeOptionalConfigsRecord.RecordClass({
datePickerRangeOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerRangeOptionalConfigsRecord._isAnonymousRecord = true;
DatePickerRangeOptionalConfigsRecord.UniqueId = "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e";
DatePickerRangeOptionalConfigsRecord.init();
return DatePickerRangeOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DatePickerRangeOptionalConfigsRecord = DatePickerRangeOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$DropdownTagsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecord = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecord, _super);
function DropdownTagsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownTagsOptionalConfigsRec());
}, true, OutSystemsUIModel.DropdownTagsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTagsOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownTagsOptionalConfigsRecord(new DropdownTagsOptionalConfigsRecord.RecordClass({
dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTagsOptionalConfigsRecord._isAnonymousRecord = true;
DropdownTagsOptionalConfigsRecord.UniqueId = "4d01ba74-7615-bc6d-c01c-586f0b43450a";
DropdownTagsOptionalConfigsRecord.init();
return DropdownTagsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DropdownTagsOptionalConfigsRecord = DropdownTagsOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$DropdownTagsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DropdownTagsOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecordList = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecordList, _super);
function DropdownTagsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.DropdownTagsOptionalConfigsRecord;
return DropdownTagsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownTagsOptionalConfigsRecordList = DropdownTagsOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$Debug_recordRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyDefaults_CS.model$Debug_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyDefaults_CS"], function (exports, OutSystems, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var Debug_recordRecord = (function (_super) {
__extends(Debug_recordRecord, _super);
function Debug_recordRecord(defaults) {
_super.apply(this, arguments);
}
Debug_recordRecord.attributesToDeclare = function () {
return [
this.attr("Debug_record", "debug_recordAttr", "Debug_record", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyDefaults_CSModel.Debug_recordRec());
}, true, TUTExamsLegacyDefaults_CSModel.Debug_recordRec)
].concat(_super.attributesToDeclare.call(this));
};
Debug_recordRecord.fromStructure = function (str) {
return new Debug_recordRecord(new Debug_recordRecord.RecordClass({
debug_recordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Debug_recordRecord._isAnonymousRecord = true;
Debug_recordRecord.UniqueId = "fc76874c-372b-004d-8ed0-d4e15634b6b1";
Debug_recordRecord.init();
return Debug_recordRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.Debug_recordRecord = Debug_recordRecord;

});
define("TUTExamsLegacyCoreUI.model$Debug_recordRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$Debug_recordRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var Debug_recordRecordList = (function (_super) {
__extends(Debug_recordRecordList, _super);
function Debug_recordRecordList(defaults) {
_super.apply(this, arguments);
}
Debug_recordRecordList.itemType = TUTExamsLegacyCoreUIModel.Debug_recordRecord;
return Debug_recordRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.Debug_recordRecordList = Debug_recordRecordList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecord = (function (_super) {
__extends(DatePickerOptionalConfigsRecord, _super);
function DatePickerOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerOptionalConfigsRec());
}, true, OutSystemsUIModel.DatePickerOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerOptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerOptionalConfigsRecord(new DatePickerOptionalConfigsRecord.RecordClass({
datePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerOptionalConfigsRecord._isAnonymousRecord = true;
DatePickerOptionalConfigsRecord.UniqueId = "327e36bc-408e-dd04-6ca4-0df8a4e734bb";
DatePickerOptionalConfigsRecord.init();
return DatePickerOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DatePickerOptionalConfigsRecord = DatePickerOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$StackedCardsPositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("TUTExamsLegacyCoreUI.model$SplideProviderClassesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SplideProviderClassesRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesList = (function (_super) {
__extends(SplideProviderClassesList, _super);
function SplideProviderClassesList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesList.itemType = OutSystemsUIModel.SplideProviderClassesRec;
return SplideProviderClassesList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SplideProviderClassesList = SplideProviderClassesList;

});
define("TUTExamsLegacyCoreUI.model$FBCode_recordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyBO_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyBO_CS.model$FBCode_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyBO_CS"], function (exports, OutSystems, TUTExamsLegacyBO_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var FBCode_recordList = (function (_super) {
__extends(FBCode_recordList, _super);
function FBCode_recordList(defaults) {
_super.apply(this, arguments);
}
FBCode_recordList.itemType = TUTExamsLegacyBO_CSModel.FBCode_recordRec;
return FBCode_recordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.FBCode_recordList = FBCode_recordList;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsRecord = (function (_super) {
__extends(SeriesStylingOptionalConfigsRecord, _super);
function SeriesStylingOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SeriesStylingOptionalConfigs", "seriesStylingOptionalConfigsAttr", "SeriesStylingOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesStylingOptionalConfigsRec());
}, true, OutSystemsChartsModel.SeriesStylingOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingOptionalConfigsRecord.fromStructure = function (str) {
return new SeriesStylingOptionalConfigsRecord(new SeriesStylingOptionalConfigsRecord.RecordClass({
seriesStylingOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingOptionalConfigsRecord._isAnonymousRecord = true;
SeriesStylingOptionalConfigsRecord.UniqueId = "34d5d5ab-5565-b38a-57ae-5f2563a8c466";
SeriesStylingOptionalConfigsRecord.init();
return SeriesStylingOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SeriesStylingOptionalConfigsRecord = SeriesStylingOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$ZoomList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$ZoomRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ZoomList = (function (_super) {
__extends(ZoomList, _super);
function ZoomList(defaults) {
_super.apply(this, arguments);
}
ZoomList.itemType = OutSystemsMapsModel.ZoomRec;
return ZoomList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ZoomList = ZoomList;

});
define("TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$ERResult_prt_ExamTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERResult_prt_ExamTypeList = (function (_super) {
__extends(ERResult_prt_ExamTypeList, _super);
function ERResult_prt_ExamTypeList(defaults) {
_super.apply(this, arguments);
}
ERResult_prt_ExamTypeList.itemType = TUTExamsLegacyPortal_CSModel.ERResult_prt_ExamTypeRec;
return ERResult_prt_ExamTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ERResult_prt_ExamTypeList = ERResult_prt_ExamTypeList;

});
define("TUTExamsLegacyCoreUI.model$ProgressBarOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecord = (function (_super) {
__extends(ProgressBarOptionalConfigsRecord, _super);
function ProgressBarOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressBarOptionalConfigsRec());
}, true, OutSystemsUIModel.ProgressBarOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBarOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressBarOptionalConfigsRecord(new ProgressBarOptionalConfigsRecord.RecordClass({
progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressBarOptionalConfigsRecord._isAnonymousRecord = true;
ProgressBarOptionalConfigsRecord.UniqueId = "3554b1e2-806a-5b82-7c45-7cdecc492d4a";
ProgressBarOptionalConfigsRecord.init();
return ProgressBarOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ProgressBarOptionalConfigsRecord = ProgressBarOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ColumnBreakRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ColumnBreakList = ColumnBreakList;

});
define("TUTExamsLegacyCoreUI.model$CarouselNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselNavigationRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRecord = (function (_super) {
__extends(CarouselNavigationRecord, _super);
function CarouselNavigationRecord(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecord.attributesToDeclare = function () {
return [
this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselNavigationRec());
}, true, OutSystemsUIModel.CarouselNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselNavigationRecord.fromStructure = function (str) {
return new CarouselNavigationRecord(new CarouselNavigationRecord.RecordClass({
carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselNavigationRecord._isAnonymousRecord = true;
CarouselNavigationRecord.UniqueId = "373fec8a-2329-a8b1-ecd5-5cf717893131";
CarouselNavigationRecord.init();
return CarouselNavigationRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.CarouselNavigationRecord = CarouselNavigationRecord;

});
define("TUTExamsLegacyCoreUI.model$MapErrorsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MapErrorsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MapErrorsList = (function (_super) {
__extends(MapErrorsList, _super);
function MapErrorsList(defaults) {
_super.apply(this, arguments);
}
MapErrorsList.itemType = OutSystemsMapsModel.MapErrorsRec;
return MapErrorsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MapErrorsList = MapErrorsList;

});
define("TUTExamsLegacyCoreUI.model$OffsetRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OffsetRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OffsetRecord = (function (_super) {
__extends(OffsetRecord, _super);
function OffsetRecord(defaults) {
_super.apply(this, arguments);
}
OffsetRecord.attributesToDeclare = function () {
return [
this.attr("Offset", "offsetAttr", "Offset", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OffsetRec());
}, true, OutSystemsMapsModel.OffsetRec)
].concat(_super.attributesToDeclare.call(this));
};
OffsetRecord.fromStructure = function (str) {
return new OffsetRecord(new OffsetRecord.RecordClass({
offsetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OffsetRecord._isAnonymousRecord = true;
OffsetRecord.UniqueId = "a3e0d021-78b0-78a9-60ae-427dd1751cbc";
OffsetRecord.init();
return OffsetRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.OffsetRecord = OffsetRecord;

});
define("TUTExamsLegacyCoreUI.model$OffsetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$OffsetRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OffsetRecordList = (function (_super) {
__extends(OffsetRecordList, _super);
function OffsetRecordList(defaults) {
_super.apply(this, arguments);
}
OffsetRecordList.itemType = TUTExamsLegacyCoreUIModel.OffsetRecord;
return OffsetRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OffsetRecordList = OffsetRecordList;

});
define("TUTExamsLegacyCoreUI.model$ProgressBarOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsList = (function (_super) {
__extends(ProgressBarOptionalConfigsList, _super);
function ProgressBarOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsList.itemType = OutSystemsUIModel.ProgressBarOptionalConfigsRec;
return ProgressBarOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ProgressBarOptionalConfigsList = ProgressBarOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$MapErrorsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MapErrorsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MapErrorsRecord = (function (_super) {
__extends(MapErrorsRecord, _super);
function MapErrorsRecord(defaults) {
_super.apply(this, arguments);
}
MapErrorsRecord.attributesToDeclare = function () {
return [
this.attr("MapErrors", "mapErrorsAttr", "MapErrors", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MapErrorsRec());
}, true, OutSystemsMapsModel.MapErrorsRec)
].concat(_super.attributesToDeclare.call(this));
};
MapErrorsRecord.fromStructure = function (str) {
return new MapErrorsRecord(new MapErrorsRecord.RecordClass({
mapErrorsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapErrorsRecord._isAnonymousRecord = true;
MapErrorsRecord.UniqueId = "3d151c63-adf1-37bd-3c85-eaa462bbbe0c";
MapErrorsRecord.init();
return MapErrorsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MapErrorsRecord = MapErrorsRecord;

});
define("TUTExamsLegacyCoreUI.model$XAxisOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$XAxisOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsList = (function (_super) {
__extends(XAxisOptionalConfigsList, _super);
function XAxisOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsList.itemType = OutSystemsChartsModel.XAxisOptionalConfigsRec;
return XAxisOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.XAxisOptionalConfigsList = XAxisOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ScrollbarStyleRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecord = (function (_super) {
__extends(ScrollbarStyleRecord, _super);
function ScrollbarStyleRecord(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecord.attributesToDeclare = function () {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ScrollbarStyleRec());
}, true, OutSystemsUIModel.ScrollbarStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRecord.fromStructure = function (str) {
return new ScrollbarStyleRecord(new ScrollbarStyleRecord.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRecord._isAnonymousRecord = true;
ScrollbarStyleRecord.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
ScrollbarStyleRecord.init();
return ScrollbarStyleRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("TUTExamsLegacyCoreUI.model$GradientRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$GradientRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GradientRecord = (function (_super) {
__extends(GradientRecord, _super);
function GradientRecord(defaults) {
_super.apply(this, arguments);
}
GradientRecord.attributesToDeclare = function () {
return [
this.attr("Gradient", "gradientAttr", "Gradient", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GradientRec());
}, true, OutSystemsUIModel.GradientRec)
].concat(_super.attributesToDeclare.call(this));
};
GradientRecord.fromStructure = function (str) {
return new GradientRecord(new GradientRecord.RecordClass({
gradientAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientRecord._isAnonymousRecord = true;
GradientRecord.UniqueId = "3f6426ae-ecbf-a4af-19e2-79847df746cc";
GradientRecord.init();
return GradientRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.GradientRecord = GradientRecord;

});
define("TUTExamsLegacyCoreUI.model$NoUiSliderConfigs_RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecord = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecord, _super);
function NoUiSliderConfigs_RangeRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs_Range", "noUiSliderConfigs_RangeAttr", "NoUiSliderConfigs_Range", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NoUiSliderConfigs_RangeRec());
}, true, OutSystemsUIModel.NoUiSliderConfigs_RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigs_RangeRecord.fromStructure = function (str) {
return new NoUiSliderConfigs_RangeRecord(new NoUiSliderConfigs_RangeRecord.RecordClass({
noUiSliderConfigs_RangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigs_RangeRecord._isAnonymousRecord = true;
NoUiSliderConfigs_RangeRecord.UniqueId = "3fbb4bab-d0ba-4885-2fec-c04be37d3c0e";
NoUiSliderConfigs_RangeRecord.init();
return NoUiSliderConfigs_RangeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.NoUiSliderConfigs_RangeRecord = NoUiSliderConfigs_RangeRecord;

});
define("TUTExamsLegacyCoreUI.model$UserEnvironmentRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$UserEnvironmentRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
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
TUTExamsLegacyCoreUIModel.UserEnvironmentRecord = UserEnvironmentRecord;

});
define("TUTExamsLegacyCoreUI.model$UserEnvironmentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$UserEnvironmentRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var UserEnvironmentRecordList = (function (_super) {
__extends(UserEnvironmentRecordList, _super);
function UserEnvironmentRecordList(defaults) {
_super.apply(this, arguments);
}
UserEnvironmentRecordList.itemType = TUTExamsLegacyCoreUIModel.UserEnvironmentRecord;
return UserEnvironmentRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.UserEnvironmentRecordList = UserEnvironmentRecordList;

});
define("TUTExamsLegacyCoreUI.model$CarouselOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecord = (function (_super) {
__extends(CarouselOptionalConfigsRecord, _super);
function CarouselOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselOptionalConfigsRec());
}, true, OutSystemsUIModel.CarouselOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselOptionalConfigsRecord.fromStructure = function (str) {
return new CarouselOptionalConfigsRecord(new CarouselOptionalConfigsRecord.RecordClass({
carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselOptionalConfigsRecord._isAnonymousRecord = true;
CarouselOptionalConfigsRecord.UniqueId = "4028c834-35ff-8f3f-a19c-27e5a3252dd5";
CarouselOptionalConfigsRecord.init();
return CarouselOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.CarouselOptionalConfigsRecord = CarouselOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$IconSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$IconSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var IconSizeList = (function (_super) {
__extends(IconSizeList, _super);
function IconSizeList(defaults) {
_super.apply(this, arguments);
}
IconSizeList.itemType = OutSystemsMapsModel.IconSizeRec;
return IconSizeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.IconSizeList = IconSizeList;

});
define("TUTExamsLegacyCoreUI.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AccordionIconTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecord = (function (_super) {
__extends(AccordionIconTypeRecord, _super);
function AccordionIconTypeRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconTypeRec());
}, true, OutSystemsUIModel.AccordionIconTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRecord.fromStructure = function (str) {
return new AccordionIconTypeRecord(new AccordionIconTypeRecord.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRecord._isAnonymousRecord = true;
AccordionIconTypeRecord.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
AccordionIconTypeRecord.init();
return AccordionIconTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AccordionIconTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DropdownOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecordList = (function (_super) {
__extends(DropdownOptionalConfigsRecordList, _super);
function DropdownOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.DropdownOptionalConfigsRecord;
return DropdownOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownOptionalConfigsRecordList = DropdownOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ErrorMessageRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUIModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ErrorMessageList = ErrorMessageList;

});
define("TUTExamsLegacyCoreUI.model$FlatpickrConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$FlatpickrConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecord = (function (_super) {
__extends(FlatpickrConfigsRecord, _super);
function FlatpickrConfigsRecord(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecord.attributesToDeclare = function () {
return [
this.attr("FlatpickrConfigs", "flatpickrConfigsAttr", "FlatpickrConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.FlatpickrConfigsRec());
}, true, OutSystemsUIModel.FlatpickrConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
FlatpickrConfigsRecord.fromStructure = function (str) {
return new FlatpickrConfigsRecord(new FlatpickrConfigsRecord.RecordClass({
flatpickrConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FlatpickrConfigsRecord._isAnonymousRecord = true;
FlatpickrConfigsRecord.UniqueId = "f3c2b7b3-f72a-bb11-5f72-c934f4368624";
FlatpickrConfigsRecord.init();
return FlatpickrConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.FlatpickrConfigsRecord = FlatpickrConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$FlatpickrConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$FlatpickrConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecordList = (function (_super) {
__extends(FlatpickrConfigsRecordList, _super);
function FlatpickrConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.FlatpickrConfigsRecord;
return FlatpickrConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.FlatpickrConfigsRecordList = FlatpickrConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$YAxisGridLinesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$YAxisGridLinesStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingList = (function (_super) {
__extends(YAxisGridLinesStylingList, _super);
function YAxisGridLinesStylingList(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingList.itemType = OutSystemsChartsModel.YAxisGridLinesStylingRec;
return YAxisGridLinesStylingList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.YAxisGridLinesStylingList = YAxisGridLinesStylingList;

});
define("TUTExamsLegacyCoreUI.model$MonthYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MonthYearRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthYearRecord = (function (_super) {
__extends(MonthYearRecord, _super);
function MonthYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthYearRec());
}, true, OutSystemsUIModel.MonthYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthYearRecord.fromStructure = function (str) {
return new MonthYearRecord(new MonthYearRecord.RecordClass({
monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthYearRecord._isAnonymousRecord = true;
MonthYearRecord.UniqueId = "4835a3b0-a2d4-ab28-e154-f8a8831a00ef";
MonthYearRecord.init();
return MonthYearRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MonthYearRecord = MonthYearRecord;

});
define("TUTExamsLegacyCoreUI.model$GradientColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$GradientColorRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GradientColorRecord = (function (_super) {
__extends(GradientColorRecord, _super);
function GradientColorRecord(defaults) {
_super.apply(this, arguments);
}
GradientColorRecord.attributesToDeclare = function () {
return [
this.attr("GradientColor", "gradientColorAttr", "GradientColor", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GradientColorRec());
}, true, OutSystemsUIModel.GradientColorRec)
].concat(_super.attributesToDeclare.call(this));
};
GradientColorRecord.fromStructure = function (str) {
return new GradientColorRecord(new GradientColorRecord.RecordClass({
gradientColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientColorRecord._isAnonymousRecord = true;
GradientColorRecord.UniqueId = "486a3515-9c95-7506-61e0-12cbe99a555f";
GradientColorRecord.init();
return GradientColorRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.GradientColorRecord = GradientColorRecord;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingList = (function (_super) {
__extends(SeriesStylingList, _super);
function SeriesStylingList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingList.itemType = OutSystemsChartsModel.SeriesStylingRec;
return SeriesStylingList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesStylingList = SeriesStylingList;

});
define("TUTExamsLegacyCoreUI.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MenuActionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MenuActionList = MenuActionList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerTimeFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerTimeFormatRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatList = (function (_super) {
__extends(DatePickerTimeFormatList, _super);
function DatePickerTimeFormatList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatList.itemType = OutSystemsUIModel.DatePickerTimeFormatRec;
return DatePickerTimeFormatList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerTimeFormatList = DatePickerTimeFormatList;

});
define("TUTExamsLegacyCoreUI.model$XAxisOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$XAxisOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsRecord = (function (_super) {
__extends(XAxisOptionalConfigsRecord, _super);
function XAxisOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("XAxisOptionalConfigs", "xAxisOptionalConfigsAttr", "XAxisOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisOptionalConfigsRec());
}, true, OutSystemsChartsModel.XAxisOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisOptionalConfigsRecord.fromStructure = function (str) {
return new XAxisOptionalConfigsRecord(new XAxisOptionalConfigsRecord.RecordClass({
xAxisOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisOptionalConfigsRecord._isAnonymousRecord = true;
XAxisOptionalConfigsRecord.UniqueId = "d4877c3c-e032-067b-5e79-d1ff12e3ea33";
XAxisOptionalConfigsRecord.init();
return XAxisOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.XAxisOptionalConfigsRecord = XAxisOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$XAxisOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$XAxisOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsRecordList = (function (_super) {
__extends(XAxisOptionalConfigsRecordList, _super);
function XAxisOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.XAxisOptionalConfigsRecord;
return XAxisOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.XAxisOptionalConfigsRecordList = XAxisOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerRangeOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsList, _super);
function DatePickerRangeOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsList.itemType = OutSystemsUIModel.DatePickerRangeOptionalConfigsRec;
return DatePickerRangeOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerRangeOptionalConfigsList = DatePickerRangeOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$GradientColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$GradientColorRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GradientColorRecordList = (function (_super) {
__extends(GradientColorRecordList, _super);
function GradientColorRecordList(defaults) {
_super.apply(this, arguments);
}
GradientColorRecordList.itemType = TUTExamsLegacyCoreUIModel.GradientColorRecord;
return GradientColorRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.GradientColorRecordList = GradientColorRecordList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerWeekDayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerWeekDayRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayList = (function (_super) {
__extends(DatePickerWeekDayList, _super);
function DatePickerWeekDayList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayList.itemType = OutSystemsUIModel.DatePickerWeekDayRec;
return DatePickerWeekDayList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerWeekDayList = DatePickerWeekDayList;

});
define("TUTExamsLegacyCoreUI.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$BreakColumnsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = TUTExamsLegacyCoreUIModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("TUTExamsLegacyCoreUI.model$RangeSliderOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecord = (function (_super) {
__extends(RangeSliderOptionalConfigsRecord, _super);
function RangeSliderOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RangeSliderOptionalConfigsRec());
}, true, OutSystemsUIModel.RangeSliderOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderOptionalConfigsRecord.fromStructure = function (str) {
return new RangeSliderOptionalConfigsRecord(new RangeSliderOptionalConfigsRecord.RecordClass({
rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderOptionalConfigsRecord._isAnonymousRecord = true;
RangeSliderOptionalConfigsRecord.UniqueId = "4fc16da6-9510-8ad1-b034-b7256ffa868d";
RangeSliderOptionalConfigsRecord.init();
return RangeSliderOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.RangeSliderOptionalConfigsRecord = RangeSliderOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$CarouselNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$CarouselNavigationRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRecordList = (function (_super) {
__extends(CarouselNavigationRecordList, _super);
function CarouselNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecordList.itemType = TUTExamsLegacyCoreUIModel.CarouselNavigationRecord;
return CarouselNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselNavigationRecordList = CarouselNavigationRecordList;

});
define("TUTExamsLegacyCoreUI.model$NoUiSliderConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$NoUiSliderConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecordList = (function (_super) {
__extends(NoUiSliderConfigsRecordList, _super);
function NoUiSliderConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.NoUiSliderConfigsRecord;
return NoUiSliderConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.NoUiSliderConfigsRecordList = NoUiSliderConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$CarouselOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsList = (function (_super) {
__extends(CarouselOptionalConfigsList, _super);
function CarouselOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsList.itemType = OutSystemsUIModel.CarouselOptionalConfigsRec;
return CarouselOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselOptionalConfigsList = CarouselOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$SeriesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesTypeRecord = (function (_super) {
__extends(SeriesTypeRecord, _super);
function SeriesTypeRecord(defaults) {
_super.apply(this, arguments);
}
SeriesTypeRecord.attributesToDeclare = function () {
return [
this.attr("SeriesType", "seriesTypeAttr", "SeriesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesTypeRec());
}, true, OutSystemsChartsModel.SeriesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesTypeRecord.fromStructure = function (str) {
return new SeriesTypeRecord(new SeriesTypeRecord.RecordClass({
seriesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesTypeRecord._isAnonymousRecord = true;
SeriesTypeRecord.UniqueId = "8bfcc1d3-81d1-0495-3fbf-01fd54a56e45";
SeriesTypeRecord.init();
return SeriesTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SeriesTypeRecord = SeriesTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$SeriesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SeriesTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesTypeRecordList = (function (_super) {
__extends(SeriesTypeRecordList, _super);
function SeriesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.SeriesTypeRecord;
return SeriesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesTypeRecordList = SeriesTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerTimeFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerTimeFormatRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecord = (function (_super) {
__extends(DatePickerTimeFormatRecord, _super);
function DatePickerTimeFormatRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerTimeFormatRec());
}, true, OutSystemsUIModel.DatePickerTimeFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerTimeFormatRecord.fromStructure = function (str) {
return new DatePickerTimeFormatRecord(new DatePickerTimeFormatRecord.RecordClass({
datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerTimeFormatRecord._isAnonymousRecord = true;
DatePickerTimeFormatRecord.UniqueId = "51b1c159-4930-8af5-f9b2-dba7043d5ae6";
DatePickerTimeFormatRecord.init();
return DatePickerTimeFormatRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DatePickerTimeFormatRecord = DatePickerTimeFormatRecord;

});
define("TUTExamsLegacyCoreUI.model$ExecuteErrorsRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyDefaults_CS"], function (exports, OutSystems, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ExecuteErrorsRecord = (function (_super) {
__extends(ExecuteErrorsRecord, _super);
function ExecuteErrorsRecord(defaults) {
_super.apply(this, arguments);
}
ExecuteErrorsRecord.attributesToDeclare = function () {
return [
this.attr("ExecuteErrors", "executeErrorsAttr", "ExecuteErrors", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec());
}, true, TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec)
].concat(_super.attributesToDeclare.call(this));
};
ExecuteErrorsRecord.fromStructure = function (str) {
return new ExecuteErrorsRecord(new ExecuteErrorsRecord.RecordClass({
executeErrorsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExecuteErrorsRecord._isAnonymousRecord = true;
ExecuteErrorsRecord.UniqueId = "5245ec2c-2e14-4fdd-0a36-b2f92fe527ac";
ExecuteErrorsRecord.init();
return ExecuteErrorsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ExecuteErrorsRecord = ExecuteErrorsRecord;

});
define("TUTExamsLegacyCoreUI.model$AxisValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$AxisValuesTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeRecord = (function (_super) {
__extends(AxisValuesTypeRecord, _super);
function AxisValuesTypeRecord(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeRecord.attributesToDeclare = function () {
return [
this.attr("AxisValuesType", "axisValuesTypeAttr", "AxisValuesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AxisValuesTypeRec());
}, true, OutSystemsChartsModel.AxisValuesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AxisValuesTypeRecord.fromStructure = function (str) {
return new AxisValuesTypeRecord(new AxisValuesTypeRecord.RecordClass({
axisValuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisValuesTypeRecord._isAnonymousRecord = true;
AxisValuesTypeRecord.UniqueId = "5411a63f-b30f-bc23-79b4-48666b5ca564";
AxisValuesTypeRecord.init();
return AxisValuesTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AxisValuesTypeRecord = AxisValuesTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ShapeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUIModel.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ShapeList = ShapeList;

});
define("TUTExamsLegacyCoreUI.model$MapEventTriggeredRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MapEventTriggeredRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MapEventTriggeredRecord = (function (_super) {
__extends(MapEventTriggeredRecord, _super);
function MapEventTriggeredRecord(defaults) {
_super.apply(this, arguments);
}
MapEventTriggeredRecord.attributesToDeclare = function () {
return [
this.attr("MapEventTriggered", "mapEventTriggeredAttr", "MapEventTriggered", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MapEventTriggeredRec());
}, true, OutSystemsMapsModel.MapEventTriggeredRec)
].concat(_super.attributesToDeclare.call(this));
};
MapEventTriggeredRecord.fromStructure = function (str) {
return new MapEventTriggeredRecord(new MapEventTriggeredRecord.RecordClass({
mapEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapEventTriggeredRecord._isAnonymousRecord = true;
MapEventTriggeredRecord.UniqueId = "bf75694d-8016-6881-34fa-555a2fd4f5d7";
MapEventTriggeredRecord.init();
return MapEventTriggeredRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MapEventTriggeredRecord = MapEventTriggeredRecord;

});
define("TUTExamsLegacyCoreUI.model$MapEventTriggeredRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MapEventTriggeredRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MapEventTriggeredRecordList = (function (_super) {
__extends(MapEventTriggeredRecordList, _super);
function MapEventTriggeredRecordList(defaults) {
_super.apply(this, arguments);
}
MapEventTriggeredRecordList.itemType = TUTExamsLegacyCoreUIModel.MapEventTriggeredRecord;
return MapEventTriggeredRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MapEventTriggeredRecordList = MapEventTriggeredRecordList;

});
define("TUTExamsLegacyCoreUI.model$CoordinatesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$CoordinatesRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CoordinatesRecord = (function (_super) {
__extends(CoordinatesRecord, _super);
function CoordinatesRecord(defaults) {
_super.apply(this, arguments);
}
CoordinatesRecord.attributesToDeclare = function () {
return [
this.attr("Coordinates", "coordinatesAttr", "Coordinates", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.CoordinatesRec());
}, true, OutSystemsMapsModel.CoordinatesRec)
].concat(_super.attributesToDeclare.call(this));
};
CoordinatesRecord.fromStructure = function (str) {
return new CoordinatesRecord(new CoordinatesRecord.RecordClass({
coordinatesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinatesRecord._isAnonymousRecord = true;
CoordinatesRecord.UniqueId = "e3355f6b-7ba3-051c-4a4a-9a00634d68d0";
CoordinatesRecord.init();
return CoordinatesRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.CoordinatesRecord = CoordinatesRecord;

});
define("TUTExamsLegacyCoreUI.model$CoordinatesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$CoordinatesRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CoordinatesRecordList = (function (_super) {
__extends(CoordinatesRecordList, _super);
function CoordinatesRecordList(defaults) {
_super.apply(this, arguments);
}
CoordinatesRecordList.itemType = TUTExamsLegacyCoreUIModel.CoordinatesRecord;
return CoordinatesRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CoordinatesRecordList = CoordinatesRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownItemRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownItemRecord = (function (_super) {
__extends(DropdownItemRecord, _super);
function DropdownItemRecord(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecord.attributesToDeclare = function () {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownItemRec());
}, true, OutSystemsUIModel.DropdownItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRecord.fromStructure = function (str) {
return new DropdownItemRecord(new DropdownItemRecord.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownItemRecord._isAnonymousRecord = true;
DropdownItemRecord.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
DropdownItemRecord.init();
return DropdownItemRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DropdownItemRecord = DropdownItemRecord;

});
define("TUTExamsLegacyCoreUI.model$SplideProvideri18nRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SplideProvideri18nRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecord = (function (_super) {
__extends(SplideProvideri18nRecord, _super);
function SplideProvideri18nRecord(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecord.attributesToDeclare = function () {
return [
this.attr("SplideProvideri18n", "splideProvideri18nAttr", "SplideProvideri18n", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideProvideri18nRec());
}, true, OutSystemsUIModel.SplideProvideri18nRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProvideri18nRecord.fromStructure = function (str) {
return new SplideProvideri18nRecord(new SplideProvideri18nRecord.RecordClass({
splideProvideri18nAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProvideri18nRecord._isAnonymousRecord = true;
SplideProvideri18nRecord.UniqueId = "8f521ae5-ef17-d239-3da4-331384c022c2";
SplideProvideri18nRecord.init();
return SplideProvideri18nRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SplideProvideri18nRecord = SplideProvideri18nRecord;

});
define("TUTExamsLegacyCoreUI.model$SplideProvideri18nRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SplideProvideri18nRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecordList = (function (_super) {
__extends(SplideProvideri18nRecordList, _super);
function SplideProvideri18nRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecordList.itemType = TUTExamsLegacyCoreUIModel.SplideProvideri18nRecord;
return SplideProvideri18nRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SplideProvideri18nRecordList = SplideProvideri18nRecordList;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingRecord = (function (_super) {
__extends(SeriesStylingRecord, _super);
function SeriesStylingRecord(defaults) {
_super.apply(this, arguments);
}
SeriesStylingRecord.attributesToDeclare = function () {
return [
this.attr("SeriesStyling", "seriesStylingAttr", "SeriesStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesStylingRec());
}, true, OutSystemsChartsModel.SeriesStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingRecord.fromStructure = function (str) {
return new SeriesStylingRecord(new SeriesStylingRecord.RecordClass({
seriesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingRecord._isAnonymousRecord = true;
SeriesStylingRecord.UniqueId = "b433f1b3-ae72-f9da-85b2-0eb8b0abb0e8";
SeriesStylingRecord.init();
return SeriesStylingRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SeriesStylingRecord = SeriesStylingRecord;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SeriesStylingRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingRecordList = (function (_super) {
__extends(SeriesStylingRecordList, _super);
function SeriesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingRecordList.itemType = TUTExamsLegacyCoreUIModel.SeriesStylingRecord;
return SeriesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesStylingRecordList = SeriesStylingRecordList;

});
define("TUTExamsLegacyCoreUI.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$PositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.PositionRec());
}, true, OutSystemsUIModel.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.PositionRecord = PositionRecord;

});
define("TUTExamsLegacyCoreUI.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$PositionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = TUTExamsLegacyCoreUIModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.PositionRecordList = PositionRecordList;

});
define("TUTExamsLegacyCoreUI.model$LegendLayoutList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$LegendLayoutRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var LegendLayoutList = (function (_super) {
__extends(LegendLayoutList, _super);
function LegendLayoutList(defaults) {
_super.apply(this, arguments);
}
LegendLayoutList.itemType = OutSystemsChartsModel.LegendLayoutRec;
return LegendLayoutList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.LegendLayoutList = LegendLayoutList;

});
define("TUTExamsLegacyCoreUI.model$TT_prt_SessionList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$TT_prt_SessionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TT_prt_SessionList = (function (_super) {
__extends(TT_prt_SessionList, _super);
function TT_prt_SessionList(defaults) {
_super.apply(this, arguments);
}
TT_prt_SessionList.itemType = TUTExamsLegacyPortal_CSModel.TT_prt_SessionRec;
return TT_prt_SessionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TT_prt_SessionList = TT_prt_SessionList;

});
define("TUTExamsLegacyCoreUI.model$TT_prt_ExamTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$TT_prt_ExamTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TT_prt_ExamTypeRecord = (function (_super) {
__extends(TT_prt_ExamTypeRecord, _super);
function TT_prt_ExamTypeRecord(defaults) {
_super.apply(this, arguments);
}
TT_prt_ExamTypeRecord.attributesToDeclare = function () {
return [
this.attr("TT_prt_ExamType", "tT_prt_ExamTypeAttr", "TT_prt_ExamType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.TT_prt_ExamTypeRec());
}, true, TUTExamsLegacyPortal_CSModel.TT_prt_ExamTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
TT_prt_ExamTypeRecord.fromStructure = function (str) {
return new TT_prt_ExamTypeRecord(new TT_prt_ExamTypeRecord.RecordClass({
tT_prt_ExamTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TT_prt_ExamTypeRecord._isAnonymousRecord = true;
TT_prt_ExamTypeRecord.UniqueId = "ac734aff-8354-d67a-95eb-a86bd5080030";
TT_prt_ExamTypeRecord.init();
return TT_prt_ExamTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TT_prt_ExamTypeRecord = TT_prt_ExamTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$TT_prt_ExamTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TT_prt_ExamTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TT_prt_ExamTypeRecordList = (function (_super) {
__extends(TT_prt_ExamTypeRecordList, _super);
function TT_prt_ExamTypeRecordList(defaults) {
_super.apply(this, arguments);
}
TT_prt_ExamTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.TT_prt_ExamTypeRecord;
return TT_prt_ExamTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TT_prt_ExamTypeRecordList = TT_prt_ExamTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalStaticMapConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$OptionalStaticMapConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalStaticMapConfigsRecordList = (function (_super) {
__extends(OptionalStaticMapConfigsRecordList, _super);
function OptionalStaticMapConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalStaticMapConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.OptionalStaticMapConfigsRecord;
return OptionalStaticMapConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalStaticMapConfigsRecordList = OptionalStaticMapConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$TimePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$TimePickerOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsList = (function (_super) {
__extends(TimePickerOptionalConfigsList, _super);
function TimePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsList.itemType = OutSystemsUIModel.TimePickerOptionalConfigsRec;
return TimePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TimePickerOptionalConfigsList = TimePickerOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$BrowserProductRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$BrowserProductRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
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
TUTExamsLegacyCoreUIModel.BrowserProductRecord = BrowserProductRecord;

});
define("TUTExamsLegacyCoreUI.model$BrowserProductRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$BrowserProductRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BrowserProductRecordList = (function (_super) {
__extends(BrowserProductRecordList, _super);
function BrowserProductRecordList(defaults) {
_super.apply(this, arguments);
}
BrowserProductRecordList.itemType = TUTExamsLegacyCoreUIModel.BrowserProductRecord;
return BrowserProductRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BrowserProductRecordList = BrowserProductRecordList;

});
define("TUTExamsLegacyCoreUI.model$MapErrorsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MapErrorsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MapErrorsRecordList = (function (_super) {
__extends(MapErrorsRecordList, _super);
function MapErrorsRecordList(defaults) {
_super.apply(this, arguments);
}
MapErrorsRecordList.itemType = TUTExamsLegacyCoreUIModel.MapErrorsRecord;
return MapErrorsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MapErrorsRecordList = MapErrorsRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalStaticMapConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OptionalStaticMapConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalStaticMapConfigsList = (function (_super) {
__extends(OptionalStaticMapConfigsList, _super);
function OptionalStaticMapConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalStaticMapConfigsList.itemType = OutSystemsMapsModel.OptionalStaticMapConfigsRec;
return OptionalStaticMapConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalStaticMapConfigsList = OptionalStaticMapConfigsList;

});
define("TUTExamsLegacyCoreUI.model$ProgressCircleOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecord = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecord, _super);
function ProgressCircleOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressCircleOptionalConfigsRec());
}, true, OutSystemsUIModel.ProgressCircleOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircleOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressCircleOptionalConfigsRecord(new ProgressCircleOptionalConfigsRecord.RecordClass({
progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressCircleOptionalConfigsRecord._isAnonymousRecord = true;
ProgressCircleOptionalConfigsRecord.UniqueId = "646e6c02-297b-69c2-ac89-36bd87cff545";
ProgressCircleOptionalConfigsRecord.init();
return ProgressCircleOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ProgressCircleOptionalConfigsRecord = ProgressCircleOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$BrowserProductList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$BrowserProductRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BrowserProductList = (function (_super) {
__extends(BrowserProductList, _super);
function BrowserProductList(defaults) {
_super.apply(this, arguments);
}
BrowserProductList.itemType = UltimatePDFModel.BrowserProductRec;
return BrowserProductList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BrowserProductList = BrowserProductList;

});
define("TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StudentBioDetail_RecordRecordList = (function (_super) {
__extends(StudentBioDetail_RecordRecordList, _super);
function StudentBioDetail_RecordRecordList(defaults) {
_super.apply(this, arguments);
}
StudentBioDetail_RecordRecordList.itemType = TUTExamsLegacyCoreUIModel.StudentBioDetail_RecordRecord;
return StudentBioDetail_RecordRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StudentBioDetail_RecordRecordList = StudentBioDetail_RecordRecordList;

});
define("TUTExamsLegacyCoreUI.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$TriggerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TriggerRecord = (function (_super) {
__extends(TriggerRecord, _super);
function TriggerRecord(defaults) {
_super.apply(this, arguments);
}
TriggerRecord.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TriggerRec());
}, true, OutSystemsUIModel.TriggerRec)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRecord.fromStructure = function (str) {
return new TriggerRecord(new TriggerRecord.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRecord._isAnonymousRecord = true;
TriggerRecord.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
TriggerRecord.init();
return TriggerRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TriggerRecord = TriggerRecord;

});
define("TUTExamsLegacyCoreUI.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TriggerRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = TUTExamsLegacyCoreUIModel.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TriggerRecordList = TriggerRecordList;

});
define("TUTExamsLegacyCoreUI.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AccordionIconTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUIModel.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AccordionIconTypeList = AccordionIconTypeList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerRangeOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DatePickerRangeOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecordList, _super);
function DatePickerRangeOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.DatePickerRangeOptionalConfigsRecord;
return DatePickerRangeOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerRangeOptionalConfigsRecordList = DatePickerRangeOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$BreakColumnsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUIModel.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BreakColumnsList = BreakColumnsList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerLanguageRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecord = (function (_super) {
__extends(DatePickerLanguageRecord, _super);
function DatePickerLanguageRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerLanguageRec());
}, true, OutSystemsUIModel.DatePickerLanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerLanguageRecord.fromStructure = function (str) {
return new DatePickerLanguageRecord(new DatePickerLanguageRecord.RecordClass({
datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerLanguageRecord._isAnonymousRecord = true;
DatePickerLanguageRecord.UniqueId = "673cc0a6-3dbc-3f58-36f7-732ba0712544";
DatePickerLanguageRecord.init();
return DatePickerLanguageRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DatePickerLanguageRecord = DatePickerLanguageRecord;

});
define("TUTExamsLegacyCoreUI.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ShapeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = TUTExamsLegacyCoreUIModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ShapeRecordList = ShapeRecordList;

});
define("TUTExamsLegacyCoreUI.model$DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$DataPointRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DataPointRecord = (function (_super) {
__extends(DataPointRecord, _super);
function DataPointRecord(defaults) {
_super.apply(this, arguments);
}
DataPointRecord.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.DataPointRec());
}, true, OutSystemsChartsModel.DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
DataPointRecord.fromStructure = function (str) {
return new DataPointRecord(new DataPointRecord.RecordClass({
dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataPointRecord._isAnonymousRecord = true;
DataPointRecord.UniqueId = "87ab3d0b-8093-8e4e-95dc-b616c8a9232e";
DataPointRecord.init();
return DataPointRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DataPointRecord = DataPointRecord;

});
define("TUTExamsLegacyCoreUI.model$DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DataPointRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DataPointRecordList = (function (_super) {
__extends(DataPointRecordList, _super);
function DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
DataPointRecordList.itemType = TUTExamsLegacyCoreUIModel.DataPointRecord;
return DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DataPointRecordList = DataPointRecordList;

});
define("TUTExamsLegacyCoreUI.model$ErrorMessage2Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ErrorMessageRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ErrorMessage2Record = (function (_super) {
__extends(ErrorMessage2Record, _super);
function ErrorMessage2Record(defaults) {
_super.apply(this, arguments);
}
ErrorMessage2Record.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage2", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ErrorMessageRec());
}, true, OutSystemsChartsModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessage2Record.fromStructure = function (str) {
return new ErrorMessage2Record(new ErrorMessage2Record.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessage2Record._isAnonymousRecord = true;
ErrorMessage2Record.UniqueId = "6d8d0ab8-b7a8-6a24-d5f4-b91570ad61d9";
ErrorMessage2Record.init();
return ErrorMessage2Record;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ErrorMessage2Record = ErrorMessage2Record;

});
define("TUTExamsLegacyCoreUI.model$ErrorMessage2List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ErrorMessageRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ErrorMessage2List = (function (_super) {
__extends(ErrorMessage2List, _super);
function ErrorMessage2List(defaults) {
_super.apply(this, arguments);
}
ErrorMessage2List.itemType = OutSystemsChartsModel.ErrorMessageRec;
return ErrorMessage2List;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ErrorMessage2List = ErrorMessage2List;

});
define("TUTExamsLegacyCoreUI.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DeviceConfigurationRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecord = (function (_super) {
__extends(DeviceConfigurationRecord, _super);
function DeviceConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceConfigurationRec());
}, true, OutSystemsUIModel.DeviceConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRecord.fromStructure = function (str) {
return new DeviceConfigurationRecord(new DeviceConfigurationRecord.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceConfigurationRecord._isAnonymousRecord = true;
DeviceConfigurationRecord.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
DeviceConfigurationRecord.init();
return DeviceConfigurationRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("TUTExamsLegacyCoreUI.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DeviceConfigurationRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = TUTExamsLegacyCoreUIModel.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("TUTExamsLegacyCoreUI.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MessageStatusRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MessageStatusList = MessageStatusList;

});
define("TUTExamsLegacyCoreUI.model$Debug_recordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyDefaults_CS.model$Debug_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyDefaults_CS"], function (exports, OutSystems, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var Debug_recordList = (function (_super) {
__extends(Debug_recordList, _super);
function Debug_recordList(defaults) {
_super.apply(this, arguments);
}
Debug_recordList.itemType = TUTExamsLegacyDefaults_CSModel.Debug_recordRec;
return Debug_recordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.Debug_recordList = Debug_recordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalMarkerConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OptionalMarkerConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalMarkerConfigsList = (function (_super) {
__extends(OptionalMarkerConfigsList, _super);
function OptionalMarkerConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalMarkerConfigsList.itemType = OutSystemsMapsModel.OptionalMarkerConfigsRec;
return OptionalMarkerConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalMarkerConfigsList = OptionalMarkerConfigsList;

});
define("TUTExamsLegacyCoreUI.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$StackedCardsPositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecord = (function (_super) {
__extends(StackedCardsPositionRecord, _super);
function StackedCardsPositionRecord(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecord.attributesToDeclare = function () {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StackedCardsPositionRec());
}, true, OutSystemsUIModel.StackedCardsPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRecord.fromStructure = function (str) {
return new StackedCardsPositionRecord(new StackedCardsPositionRecord.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRecord._isAnonymousRecord = true;
StackedCardsPositionRecord.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
StackedCardsPositionRecord.init();
return StackedCardsPositionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("TUTExamsLegacyCoreUI.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$StackedCardsPositionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = TUTExamsLegacyCoreUIModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalMarkerConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OptionalMarkerConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalMarkerConfigsRecord = (function (_super) {
__extends(OptionalMarkerConfigsRecord, _super);
function OptionalMarkerConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalMarkerConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalMarkerConfigs", "optionalMarkerConfigsAttr", "OptionalMarkerConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OptionalMarkerConfigsRec());
}, true, OutSystemsMapsModel.OptionalMarkerConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalMarkerConfigsRecord.fromStructure = function (str) {
return new OptionalMarkerConfigsRecord(new OptionalMarkerConfigsRecord.RecordClass({
optionalMarkerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalMarkerConfigsRecord._isAnonymousRecord = true;
OptionalMarkerConfigsRecord.UniqueId = "c97612a2-7be8-5a55-32e2-b3b5ddfcfa27";
OptionalMarkerConfigsRecord.init();
return OptionalMarkerConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.OptionalMarkerConfigsRecord = OptionalMarkerConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$OptionalMarkerConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$OptionalMarkerConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalMarkerConfigsRecordList = (function (_super) {
__extends(OptionalMarkerConfigsRecordList, _super);
function OptionalMarkerConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalMarkerConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.OptionalMarkerConfigsRecord;
return OptionalMarkerConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalMarkerConfigsRecordList = OptionalMarkerConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$ERResult_prt_ExamTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERResult_prt_ExamTypeRecord = (function (_super) {
__extends(ERResult_prt_ExamTypeRecord, _super);
function ERResult_prt_ExamTypeRecord(defaults) {
_super.apply(this, arguments);
}
ERResult_prt_ExamTypeRecord.attributesToDeclare = function () {
return [
this.attr("ERResult_prt_ExamType", "eRResult_prt_ExamTypeAttr", "ERResult_prt_ExamType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.ERResult_prt_ExamTypeRec());
}, true, TUTExamsLegacyPortal_CSModel.ERResult_prt_ExamTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ERResult_prt_ExamTypeRecord.fromStructure = function (str) {
return new ERResult_prt_ExamTypeRecord(new ERResult_prt_ExamTypeRecord.RecordClass({
eRResult_prt_ExamTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ERResult_prt_ExamTypeRecord._isAnonymousRecord = true;
ERResult_prt_ExamTypeRecord.UniqueId = "75b9e071-2ae3-8802-e3f7-9a9e2130fedb";
ERResult_prt_ExamTypeRecord.init();
return ERResult_prt_ExamTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ERResult_prt_ExamTypeRecord = ERResult_prt_ExamTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$MonthOrderYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MonthOrderYearRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRecord = (function (_super) {
__extends(MonthOrderYearRecord, _super);
function MonthOrderYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthOrderYearRec());
}, true, OutSystemsUIModel.MonthOrderYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthOrderYearRecord.fromStructure = function (str) {
return new MonthOrderYearRecord(new MonthOrderYearRecord.RecordClass({
monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthOrderYearRecord._isAnonymousRecord = true;
MonthOrderYearRecord.UniqueId = "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1";
MonthOrderYearRecord.init();
return MonthOrderYearRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MonthOrderYearRecord = MonthOrderYearRecord;

});
define("TUTExamsLegacyCoreUI.model$MonthOrderYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MonthOrderYearRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRecordList = (function (_super) {
__extends(MonthOrderYearRecordList, _super);
function MonthOrderYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecordList.itemType = TUTExamsLegacyCoreUIModel.MonthOrderYearRecord;
return MonthOrderYearRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MonthOrderYearRecordList = MonthOrderYearRecordList;

});
define("TUTExamsLegacyCoreUI.model$MarkerEventTriggeredRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MarkerEventTriggeredRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerEventTriggeredRecord = (function (_super) {
__extends(MarkerEventTriggeredRecord, _super);
function MarkerEventTriggeredRecord(defaults) {
_super.apply(this, arguments);
}
MarkerEventTriggeredRecord.attributesToDeclare = function () {
return [
this.attr("MarkerEventTriggered", "markerEventTriggeredAttr", "MarkerEventTriggered", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MarkerEventTriggeredRec());
}, true, OutSystemsMapsModel.MarkerEventTriggeredRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerEventTriggeredRecord.fromStructure = function (str) {
return new MarkerEventTriggeredRecord(new MarkerEventTriggeredRecord.RecordClass({
markerEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerEventTriggeredRecord._isAnonymousRecord = true;
MarkerEventTriggeredRecord.UniqueId = "d18425d8-0352-34c4-43ec-bdefa0da8210";
MarkerEventTriggeredRecord.init();
return MarkerEventTriggeredRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MarkerEventTriggeredRecord = MarkerEventTriggeredRecord;

});
define("TUTExamsLegacyCoreUI.model$MarkerEventTriggeredRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MarkerEventTriggeredRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerEventTriggeredRecordList = (function (_super) {
__extends(MarkerEventTriggeredRecordList, _super);
function MarkerEventTriggeredRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerEventTriggeredRecordList.itemType = TUTExamsLegacyCoreUIModel.MarkerEventTriggeredRecord;
return MarkerEventTriggeredRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarkerEventTriggeredRecordList = MarkerEventTriggeredRecordList;

});
define("TUTExamsLegacyCoreUI.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DirectionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUIModel.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DirectionList = DirectionList;

});
define("TUTExamsLegacyCoreUI.model$MarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MarkerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerList = (function (_super) {
__extends(MarkerList, _super);
function MarkerList(defaults) {
_super.apply(this, arguments);
}
MarkerList.itemType = OutSystemsMapsModel.MarkerRec;
return MarkerList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarkerList = MarkerList;

});
define("TUTExamsLegacyCoreUI.model$StackingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$StackingTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StackingTypeRecord = (function (_super) {
__extends(StackingTypeRecord, _super);
function StackingTypeRecord(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecord.attributesToDeclare = function () {
return [
this.attr("StackingType", "stackingTypeAttr", "StackingType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.StackingTypeRec());
}, true, OutSystemsChartsModel.StackingTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
StackingTypeRecord.fromStructure = function (str) {
return new StackingTypeRecord(new StackingTypeRecord.RecordClass({
stackingTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackingTypeRecord._isAnonymousRecord = true;
StackingTypeRecord.UniqueId = "7d371655-b207-8695-8d20-c377072ad1b6";
StackingTypeRecord.init();
return StackingTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.StackingTypeRecord = StackingTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$StackingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$StackingTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StackingTypeRecordList = (function (_super) {
__extends(StackingTypeRecordList, _super);
function StackingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.StackingTypeRecord;
return StackingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StackingTypeRecordList = StackingTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DeviceResponsiveRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = TUTExamsLegacyCoreUIModel.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$OptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalConfigsRecord = (function (_super) {
__extends(OptionalConfigsRecord, _super);
function OptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalConfigs", "optionalConfigsAttr", "OptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.OptionalConfigsRec());
}, true, OutSystemsChartsModel.OptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalConfigsRecord.fromStructure = function (str) {
return new OptionalConfigsRecord(new OptionalConfigsRecord.RecordClass({
optionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalConfigsRecord._isAnonymousRecord = true;
OptionalConfigsRecord.UniqueId = "83bc3ae4-c5fe-c64b-fa52-8e6320384107";
OptionalConfigsRecord.init();
return OptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.OptionalConfigsRecord = OptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$OptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$OptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalConfigsRecordList = (function (_super) {
__extends(OptionalConfigsRecordList, _super);
function OptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.OptionalConfigsRecord;
return OptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalConfigsRecordList = OptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$CarouselNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselNavigationRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationList = (function (_super) {
__extends(CarouselNavigationList, _super);
function CarouselNavigationList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationList.itemType = OutSystemsUIModel.CarouselNavigationRec;
return CarouselNavigationList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselNavigationList = CarouselNavigationList;

});
define("TUTExamsLegacyCoreUI.model$StaticMarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$StaticMarkerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StaticMarkerList = (function (_super) {
__extends(StaticMarkerList, _super);
function StaticMarkerList(defaults) {
_super.apply(this, arguments);
}
StaticMarkerList.itemType = OutSystemsMapsModel.StaticMarkerRec;
return StaticMarkerList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StaticMarkerList = StaticMarkerList;

});
define("TUTExamsLegacyCoreUI.model$NotificationOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$NotificationOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecord = (function (_super) {
__extends(NotificationOptionalConfigsRecord, _super);
function NotificationOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NotificationOptionalConfigsRec());
}, true, OutSystemsUIModel.NotificationOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationOptionalConfigsRecord.fromStructure = function (str) {
return new NotificationOptionalConfigsRecord(new NotificationOptionalConfigsRecord.RecordClass({
notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationOptionalConfigsRecord._isAnonymousRecord = true;
NotificationOptionalConfigsRecord.UniqueId = "e5ad8f04-c380-4744-1643-c6868992c277";
NotificationOptionalConfigsRecord.init();
return NotificationOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.NotificationOptionalConfigsRecord = NotificationOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$NotificationOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$NotificationOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecordList = (function (_super) {
__extends(NotificationOptionalConfigsRecordList, _super);
function NotificationOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.NotificationOptionalConfigsRecord;
return NotificationOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.NotificationOptionalConfigsRecordList = NotificationOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$CoordinatesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$CoordinatesRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CoordinatesList = (function (_super) {
__extends(CoordinatesList, _super);
function CoordinatesList(defaults) {
_super.apply(this, arguments);
}
CoordinatesList.itemType = OutSystemsMapsModel.CoordinatesRec;
return CoordinatesList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CoordinatesList = CoordinatesList;

});
define("TUTExamsLegacyCoreUI.model$DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$DataPointRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DataPointList = (function (_super) {
__extends(DataPointList, _super);
function DataPointList(defaults) {
_super.apply(this, arguments);
}
DataPointList.itemType = OutSystemsChartsModel.DataPointRec;
return DataPointList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DataPointList = DataPointList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsList = (function (_super) {
__extends(DatePickerOptionalConfigsList, _super);
function DatePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsList.itemType = OutSystemsUIModel.DatePickerOptionalConfigsRec;
return DatePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerOptionalConfigsList = DatePickerOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$RangeSliderOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$RangeSliderOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecordList = (function (_super) {
__extends(RangeSliderOptionalConfigsRecordList, _super);
function RangeSliderOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.RangeSliderOptionalConfigsRecord;
return RangeSliderOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.RangeSliderOptionalConfigsRecordList = RangeSliderOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ZoomRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$ZoomRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ZoomRecord = (function (_super) {
__extends(ZoomRecord, _super);
function ZoomRecord(defaults) {
_super.apply(this, arguments);
}
ZoomRecord.attributesToDeclare = function () {
return [
this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ZoomRec());
}, true, OutSystemsMapsModel.ZoomRec)
].concat(_super.attributesToDeclare.call(this));
};
ZoomRecord.fromStructure = function (str) {
return new ZoomRecord(new ZoomRecord.RecordClass({
zoomAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ZoomRecord._isAnonymousRecord = true;
ZoomRecord.UniqueId = "80e81fdd-ca00-89d3-f29f-81106c0bee34";
ZoomRecord.init();
return ZoomRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ZoomRecord = ZoomRecord;

});
define("TUTExamsLegacyCoreUI.model$MarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MarkerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerRecord = (function (_super) {
__extends(MarkerRecord, _super);
function MarkerRecord(defaults) {
_super.apply(this, arguments);
}
MarkerRecord.attributesToDeclare = function () {
return [
this.attr("Marker", "markerAttr", "Marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MarkerRec());
}, true, OutSystemsMapsModel.MarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerRecord.fromStructure = function (str) {
return new MarkerRecord(new MarkerRecord.RecordClass({
markerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerRecord._isAnonymousRecord = true;
MarkerRecord.UniqueId = "bff46e92-99d5-3c31-f521-81ed865bd729";
MarkerRecord.init();
return MarkerRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MarkerRecord = MarkerRecord;

});
define("TUTExamsLegacyCoreUI.model$MarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MarkerRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerRecordList = (function (_super) {
__extends(MarkerRecordList, _super);
function MarkerRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerRecordList.itemType = TUTExamsLegacyCoreUIModel.MarkerRecord;
return MarkerRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarkerRecordList = MarkerRecordList;

});
define("TUTExamsLegacyCoreUI.model$TT_prt_ExamTypeList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$TT_prt_ExamTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TT_prt_ExamTypeList = (function (_super) {
__extends(TT_prt_ExamTypeList, _super);
function TT_prt_ExamTypeList(defaults) {
_super.apply(this, arguments);
}
TT_prt_ExamTypeList.itemType = TUTExamsLegacyPortal_CSModel.TT_prt_ExamTypeRec;
return TT_prt_ExamTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TT_prt_ExamTypeList = TT_prt_ExamTypeList;

});
define("TUTExamsLegacyCoreUI.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "TUTExamsLegacyCoreUI.model", "ServiceCenter.model$UserRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, TUTExamsLegacyCoreUIModel) {
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
TUTExamsLegacyCoreUIModel.UserRecord = UserRecord;

});
define("TUTExamsLegacyCoreUI.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$UserRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = TUTExamsLegacyCoreUIModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.UserRecordList = UserRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownTagsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsList = (function (_super) {
__extends(DropdownTagsOptionalConfigsList, _super);
function DropdownTagsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsList.itemType = OutSystemsUIModel.DropdownTagsOptionalConfigsRec;
return DropdownTagsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownTagsOptionalConfigsList = DropdownTagsOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$AxisValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AxisValuesTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeRecordList = (function (_super) {
__extends(AxisValuesTypeRecordList, _super);
function AxisValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.AxisValuesTypeRecord;
return AxisValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AxisValuesTypeRecordList = AxisValuesTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$MarginSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$MarginSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarginSizeList = (function (_super) {
__extends(MarginSizeList, _super);
function MarginSizeList(defaults) {
_super.apply(this, arguments);
}
MarginSizeList.itemType = UltimatePDFModel.MarginSizeRec;
return MarginSizeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarginSizeList = MarginSizeList;

});
define("TUTExamsLegacyCoreUI.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ColorRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColorRec());
}, true, OutSystemsUIModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ColorRecord = ColorRecord;

});
define("TUTExamsLegacyCoreUI.model$ChartLegendStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ChartLegendStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingList = (function (_super) {
__extends(ChartLegendStylingList, _super);
function ChartLegendStylingList(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingList.itemType = OutSystemsChartsModel.ChartLegendStylingRec;
return ChartLegendStylingList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ChartLegendStylingList = ChartLegendStylingList;

});
define("TUTExamsLegacyCoreUI.model$SeriesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesTypeList = (function (_super) {
__extends(SeriesTypeList, _super);
function SeriesTypeList(defaults) {
_super.apply(this, arguments);
}
SeriesTypeList.itemType = OutSystemsChartsModel.SeriesTypeRec;
return SeriesTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesTypeList = SeriesTypeList;

});
define("TUTExamsLegacyCoreUI.model$MarginSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$MarginSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
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
TUTExamsLegacyCoreUIModel.MarginSizeRecord = MarginSizeRecord;

});
define("TUTExamsLegacyCoreUI.model$MarginSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MarginSizeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarginSizeRecordList = (function (_super) {
__extends(MarginSizeRecordList, _super);
function MarginSizeRecordList(defaults) {
_super.apply(this, arguments);
}
MarginSizeRecordList.itemType = TUTExamsLegacyCoreUIModel.MarginSizeRecord;
return MarginSizeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarginSizeRecordList = MarginSizeRecordList;

});
define("TUTExamsLegacyCoreUI.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUIModel.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SizeList = SizeList;

});
define("TUTExamsLegacyCoreUI.model$BooleanTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$BooleanTypesRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesRecordList = (function (_super) {
__extends(BooleanTypesRecordList, _super);
function BooleanTypesRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecordList.itemType = TUTExamsLegacyCoreUIModel.BooleanTypesRecord;
return BooleanTypesRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.BooleanTypesRecordList = BooleanTypesRecordList;

});
define("TUTExamsLegacyCoreUI.model$ValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ValuesTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ValuesTypeRecord = (function (_super) {
__extends(ValuesTypeRecord, _super);
function ValuesTypeRecord(defaults) {
_super.apply(this, arguments);
}
ValuesTypeRecord.attributesToDeclare = function () {
return [
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ValuesTypeRec());
}, true, OutSystemsChartsModel.ValuesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ValuesTypeRecord.fromStructure = function (str) {
return new ValuesTypeRecord(new ValuesTypeRecord.RecordClass({
valuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValuesTypeRecord._isAnonymousRecord = true;
ValuesTypeRecord.UniqueId = "ec5ba0dc-ae2f-dbb0-747c-672da6bec9fd";
ValuesTypeRecord.init();
return ValuesTypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ValuesTypeRecord = ValuesTypeRecord;

});
define("TUTExamsLegacyCoreUI.model$ValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ValuesTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ValuesTypeRecordList = (function (_super) {
__extends(ValuesTypeRecordList, _super);
function ValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ValuesTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.ValuesTypeRecord;
return ValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ValuesTypeRecordList = ValuesTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$MonthYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MonthYearRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthYearList = (function (_super) {
__extends(MonthYearList, _super);
function MonthYearList(defaults) {
_super.apply(this, arguments);
}
MonthYearList.itemType = OutSystemsUIModel.MonthYearRec;
return MonthYearList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MonthYearList = MonthYearList;

});
define("TUTExamsLegacyCoreUI.model$CarouselOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$CarouselOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecordList = (function (_super) {
__extends(CarouselOptionalConfigsRecordList, _super);
function CarouselOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.CarouselOptionalConfigsRecord;
return CarouselOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselOptionalConfigsRecordList = CarouselOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ChartLegendOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsList = (function (_super) {
__extends(ChartLegendOptionalConfigsList, _super);
function ChartLegendOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsList.itemType = OutSystemsChartsModel.ChartLegendOptionalConfigsRec;
return ChartLegendOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ChartLegendOptionalConfigsList = ChartLegendOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$UserEnvironmentList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$UserEnvironmentRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var UserEnvironmentList = (function (_super) {
__extends(UserEnvironmentList, _super);
function UserEnvironmentList(defaults) {
_super.apply(this, arguments);
}
UserEnvironmentList.itemType = UltimatePDFModel.UserEnvironmentRec;
return UserEnvironmentList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.UserEnvironmentList = UserEnvironmentList;

});
define("TUTExamsLegacyCoreUI.model$IconSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$IconSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var IconSizeRecord = (function (_super) {
__extends(IconSizeRecord, _super);
function IconSizeRecord(defaults) {
_super.apply(this, arguments);
}
IconSizeRecord.attributesToDeclare = function () {
return [
this.attr("IconSize", "iconSizeAttr", "IconSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.IconSizeRec());
}, true, OutSystemsMapsModel.IconSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
IconSizeRecord.fromStructure = function (str) {
return new IconSizeRecord(new IconSizeRecord.RecordClass({
iconSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IconSizeRecord._isAnonymousRecord = true;
IconSizeRecord.UniqueId = "96c340f5-ac62-0f54-6746-41c63eb91876";
IconSizeRecord.init();
return IconSizeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.IconSizeRecord = IconSizeRecord;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingMarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SeriesStylingMarkerRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerRecordList = (function (_super) {
__extends(SeriesStylingMarkerRecordList, _super);
function SeriesStylingMarkerRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerRecordList.itemType = TUTExamsLegacyCoreUIModel.SeriesStylingMarkerRecord;
return SeriesStylingMarkerRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesStylingMarkerRecordList = SeriesStylingMarkerRecordList;

});
define("TUTExamsLegacyCoreUI.model$ProgressCircleOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ProgressCircleOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecordList = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecordList, _super);
function ProgressCircleOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.ProgressCircleOptionalConfigsRecord;
return ProgressCircleOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ProgressCircleOptionalConfigsRecordList = ProgressCircleOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ChartLegendStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ChartLegendStylingRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingRecordList = (function (_super) {
__extends(ChartLegendStylingRecordList, _super);
function ChartLegendStylingRecordList(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingRecordList.itemType = TUTExamsLegacyCoreUIModel.ChartLegendStylingRecord;
return ChartLegendStylingRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ChartLegendStylingRecordList = ChartLegendStylingRecordList;

});
define("TUTExamsLegacyCoreUI.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AccordionIconPositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecord = (function (_super) {
__extends(AccordionIconPositionRecord, _super);
function AccordionIconPositionRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconPositionRec());
}, true, OutSystemsUIModel.AccordionIconPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRecord.fromStructure = function (str) {
return new AccordionIconPositionRecord(new AccordionIconPositionRecord.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRecord._isAnonymousRecord = true;
AccordionIconPositionRecord.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
AccordionIconPositionRecord.init();
return AccordionIconPositionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("TUTExamsLegacyCoreUI.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AccordionIconPositionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = TUTExamsLegacyCoreUIModel.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("TUTExamsLegacyCoreUI.model$TypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$TypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TypeList = (function (_super) {
__extends(TypeList, _super);
function TypeList(defaults) {
_super.apply(this, arguments);
}
TypeList.itemType = OutSystemsMapsModel.TypeRec;
return TypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TypeList = TypeList;

});
define("TUTExamsLegacyCoreUI.model$FlatpickrConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$FlatpickrConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsList = (function (_super) {
__extends(FlatpickrConfigsList, _super);
function FlatpickrConfigsList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsList.itemType = OutSystemsUIModel.FlatpickrConfigsRec;
return FlatpickrConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.FlatpickrConfigsList = FlatpickrConfigsList;

});
define("TUTExamsLegacyCoreUI.model$ProgressBarOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ProgressBarOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecordList = (function (_super) {
__extends(ProgressBarOptionalConfigsRecordList, _super);
function ProgressBarOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.ProgressBarOptionalConfigsRecord;
return ProgressBarOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ProgressBarOptionalConfigsRecordList = ProgressBarOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AlertRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AlertRecord = (function (_super) {
__extends(AlertRecord, _super);
function AlertRecord(defaults) {
_super.apply(this, arguments);
}
AlertRecord.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AlertRec());
}, true, OutSystemsUIModel.AlertRec)
].concat(_super.attributesToDeclare.call(this));
};
AlertRecord.fromStructure = function (str) {
return new AlertRecord(new AlertRecord.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRecord._isAnonymousRecord = true;
AlertRecord.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
AlertRecord.init();
return AlertRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.AlertRecord = AlertRecord;

});
define("TUTExamsLegacyCoreUI.model$TabsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$TabsOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecord = (function (_super) {
__extends(TabsOptionalConfigsRecord, _super);
function TabsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TabsOptionalConfigsRec());
}, true, OutSystemsUIModel.TabsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsOptionalConfigsRecord.fromStructure = function (str) {
return new TabsOptionalConfigsRecord(new TabsOptionalConfigsRecord.RecordClass({
tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsOptionalConfigsRecord._isAnonymousRecord = true;
TabsOptionalConfigsRecord.UniqueId = "b7283e2c-6e9c-6bcb-5286-d1ae04959554";
TabsOptionalConfigsRecord.init();
return TabsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TabsOptionalConfigsRecord = TabsOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$TabsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TabsOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecordList = (function (_super) {
__extends(TabsOptionalConfigsRecordList, _super);
function TabsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.TabsOptionalConfigsRecord;
return TabsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TabsOptionalConfigsRecordList = TabsOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$GradientColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$GradientColorRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GradientColorList = (function (_super) {
__extends(GradientColorList, _super);
function GradientColorList(defaults) {
_super.apply(this, arguments);
}
GradientColorList.itemType = OutSystemsUIModel.GradientColorRec;
return GradientColorList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.GradientColorList = GradientColorList;

});
define("TUTExamsLegacyCoreUI.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ColorRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = TUTExamsLegacyCoreUIModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ColorRecordList = ColorRecordList;

});
define("TUTExamsLegacyCoreUI.model$YAxisGridLinesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$YAxisGridLinesStylingRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingRecordList = (function (_super) {
__extends(YAxisGridLinesStylingRecordList, _super);
function YAxisGridLinesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingRecordList.itemType = TUTExamsLegacyCoreUIModel.YAxisGridLinesStylingRecord;
return YAxisGridLinesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.YAxisGridLinesStylingRecordList = YAxisGridLinesStylingRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalMapConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OptionalMapConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalMapConfigsList = (function (_super) {
__extends(OptionalMapConfigsList, _super);
function OptionalMapConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalMapConfigsList.itemType = OutSystemsMapsModel.OptionalMapConfigsRec;
return OptionalMapConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalMapConfigsList = OptionalMapConfigsList;

});
define("TUTExamsLegacyCoreUI.model$AxisValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$AxisValuesTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeList = (function (_super) {
__extends(AxisValuesTypeList, _super);
function AxisValuesTypeList(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeList.itemType = OutSystemsChartsModel.AxisValuesTypeRec;
return AxisValuesTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AxisValuesTypeList = AxisValuesTypeList;

});
define("TUTExamsLegacyCoreUI.model$VirtualSelectConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$VirtualSelectConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecord = (function (_super) {
__extends(VirtualSelectConfigsRecord, _super);
function VirtualSelectConfigsRecord(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecord.attributesToDeclare = function () {
return [
this.attr("VirtualSelectConfigs", "virtualSelectConfigsAttr", "VirtualSelectConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.VirtualSelectConfigsRec());
}, true, OutSystemsUIModel.VirtualSelectConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
VirtualSelectConfigsRecord.fromStructure = function (str) {
return new VirtualSelectConfigsRecord(new VirtualSelectConfigsRecord.RecordClass({
virtualSelectConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VirtualSelectConfigsRecord._isAnonymousRecord = true;
VirtualSelectConfigsRecord.UniqueId = "a34c0295-79f8-72c2-fbb9-0741544ea7c6";
VirtualSelectConfigsRecord.init();
return VirtualSelectConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.VirtualSelectConfigsRecord = VirtualSelectConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$XAxisStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$XAxisStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisStylingRecord = (function (_super) {
__extends(XAxisStylingRecord, _super);
function XAxisStylingRecord(defaults) {
_super.apply(this, arguments);
}
XAxisStylingRecord.attributesToDeclare = function () {
return [
this.attr("XAxisStyling", "xAxisStylingAttr", "XAxisStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisStylingRec());
}, true, OutSystemsChartsModel.XAxisStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisStylingRecord.fromStructure = function (str) {
return new XAxisStylingRecord(new XAxisStylingRecord.RecordClass({
xAxisStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisStylingRecord._isAnonymousRecord = true;
XAxisStylingRecord.UniqueId = "a36f33fd-75ed-f3ca-18b5-3fc02b778c00";
XAxisStylingRecord.init();
return XAxisStylingRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.XAxisStylingRecord = XAxisStylingRecord;

});
define("TUTExamsLegacyCoreUI.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AnimationTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AnimationTypeList = AnimationTypeList;

});
define("TUTExamsLegacyCoreUI.model$MonthRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MonthRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthRecord = (function (_super) {
__extends(MonthRecord, _super);
function MonthRecord(defaults) {
_super.apply(this, arguments);
}
MonthRecord.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthRec());
}, true, OutSystemsUIModel.MonthRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthRecord.fromStructure = function (str) {
return new MonthRecord(new MonthRecord.RecordClass({
monthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthRecord._isAnonymousRecord = true;
MonthRecord.UniqueId = "e092deac-f9bc-8885-dd34-714ac00f33e4";
MonthRecord.init();
return MonthRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MonthRecord = MonthRecord;

});
define("TUTExamsLegacyCoreUI.model$MonthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MonthRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthRecordList = (function (_super) {
__extends(MonthRecordList, _super);
function MonthRecordList(defaults) {
_super.apply(this, arguments);
}
MonthRecordList.itemType = TUTExamsLegacyCoreUIModel.MonthRecord;
return MonthRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MonthRecordList = MonthRecordList;

});
define("TUTExamsLegacyCoreUI.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$GutterSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GutterSizeRecord = (function (_super) {
__extends(GutterSizeRecord, _super);
function GutterSizeRecord(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GutterSizeRec());
}, true, OutSystemsUIModel.GutterSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRecord.fromStructure = function (str) {
return new GutterSizeRecord(new GutterSizeRecord.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GutterSizeRecord._isAnonymousRecord = true;
GutterSizeRecord.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
GutterSizeRecord.init();
return GutterSizeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.GutterSizeRecord = GutterSizeRecord;

});
define("TUTExamsLegacyCoreUI.model$SplideProvideri18nList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SplideProvideri18nRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nList = (function (_super) {
__extends(SplideProvideri18nList, _super);
function SplideProvideri18nList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nList.itemType = OutSystemsUIModel.SplideProvideri18nRec;
return SplideProvideri18nList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SplideProvideri18nList = SplideProvideri18nList;

});
define("TUTExamsLegacyCoreUI.model$TimteTableBio_recordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$TimteTableBio_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TimteTableBio_recordList = (function (_super) {
__extends(TimteTableBio_recordList, _super);
function TimteTableBio_recordList(defaults) {
_super.apply(this, arguments);
}
TimteTableBio_recordList.itemType = TUTExamsLegacyPortal_CSModel.TimteTableBio_recordRec;
return TimteTableBio_recordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TimteTableBio_recordList = TimteTableBio_recordList;

});
define("TUTExamsLegacyCoreUI.model$SplideConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SplideConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsRecord = (function (_super) {
__extends(SplideConfigsRecord, _super);
function SplideConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SplideConfigs", "splideConfigsAttr", "SplideConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideConfigsRec());
}, true, OutSystemsUIModel.SplideConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideConfigsRecord.fromStructure = function (str) {
return new SplideConfigsRecord(new SplideConfigsRecord.RecordClass({
splideConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideConfigsRecord._isAnonymousRecord = true;
SplideConfigsRecord.UniqueId = "a784fb81-6324-58d6-6903-27bfa77675d9";
SplideConfigsRecord.init();
return SplideConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SplideConfigsRecord = SplideConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$ExecuteErrorsList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyDefaults_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyDefaults_CS.model$ExecuteErrorsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyDefaults_CS"], function (exports, OutSystems, TUTExamsLegacyDefaults_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ExecuteErrorsList = (function (_super) {
__extends(ExecuteErrorsList, _super);
function ExecuteErrorsList(defaults) {
_super.apply(this, arguments);
}
ExecuteErrorsList.itemType = TUTExamsLegacyDefaults_CSModel.ExecuteErrorsRec;
return ExecuteErrorsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ExecuteErrorsList = ExecuteErrorsList;

});
define("TUTExamsLegacyCoreUI.model$MarkerClustererRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MarkerClustererRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerClustererRecord = (function (_super) {
__extends(MarkerClustererRecord, _super);
function MarkerClustererRecord(defaults) {
_super.apply(this, arguments);
}
MarkerClustererRecord.attributesToDeclare = function () {
return [
this.attr("MarkerClusterer", "markerClustererAttr", "MarkerClusterer", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MarkerClustererRec());
}, true, OutSystemsMapsModel.MarkerClustererRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerClustererRecord.fromStructure = function (str) {
return new MarkerClustererRecord(new MarkerClustererRecord.RecordClass({
markerClustererAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerClustererRecord._isAnonymousRecord = true;
MarkerClustererRecord.UniqueId = "d687bfbe-104d-1734-6737-149645109738";
MarkerClustererRecord.init();
return MarkerClustererRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.MarkerClustererRecord = MarkerClustererRecord;

});
define("TUTExamsLegacyCoreUI.model$MarkerClustererRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MarkerClustererRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerClustererRecordList = (function (_super) {
__extends(MarkerClustererRecordList, _super);
function MarkerClustererRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerClustererRecordList.itemType = TUTExamsLegacyCoreUIModel.MarkerClustererRecord;
return MarkerClustererRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarkerClustererRecordList = MarkerClustererRecordList;

});
define("TUTExamsLegacyCoreUI.model$NoUiSliderConfigs_RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$NoUiSliderConfigs_RangeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecordList = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecordList, _super);
function NoUiSliderConfigs_RangeRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecordList.itemType = TUTExamsLegacyCoreUIModel.NoUiSliderConfigs_RangeRecord;
return NoUiSliderConfigs_RangeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.NoUiSliderConfigs_RangeRecordList = NoUiSliderConfigs_RangeRecordList;

});
define("TUTExamsLegacyCoreUI.model$XAxisStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$XAxisStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisStylingList = (function (_super) {
__extends(XAxisStylingList, _super);
function XAxisStylingList(defaults) {
_super.apply(this, arguments);
}
XAxisStylingList.itemType = OutSystemsChartsModel.XAxisStylingRec;
return XAxisStylingList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.XAxisStylingList = XAxisStylingList;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsList = (function (_super) {
__extends(SeriesStylingOptionalConfigsList, _super);
function SeriesStylingOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsList.itemType = OutSystemsChartsModel.SeriesStylingOptionalConfigsRec;
return SeriesStylingOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesStylingOptionalConfigsList = SeriesStylingOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$ERSelectedReport_recordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERSelectedReport_recordList = (function (_super) {
__extends(ERSelectedReport_recordList, _super);
function ERSelectedReport_recordList(defaults) {
_super.apply(this, arguments);
}
ERSelectedReport_recordList.itemType = TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec;
return ERSelectedReport_recordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ERSelectedReport_recordList = ERSelectedReport_recordList;

});
define("TUTExamsLegacyCoreUI.model$CarouselDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselDirectionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionList = (function (_super) {
__extends(CarouselDirectionList, _super);
function CarouselDirectionList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionList.itemType = OutSystemsUIModel.CarouselDirectionRec;
return CarouselDirectionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselDirectionList = CarouselDirectionList;

});
define("TUTExamsLegacyCoreUI.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AlertRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AlertList = AlertList;

});
define("TUTExamsLegacyCoreUI.model$XAxisGridLinesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$XAxisGridLinesStylingRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingRecordList = (function (_super) {
__extends(XAxisGridLinesStylingRecordList, _super);
function XAxisGridLinesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingRecordList.itemType = TUTExamsLegacyCoreUIModel.XAxisGridLinesStylingRecord;
return XAxisGridLinesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.XAxisGridLinesStylingRecordList = XAxisGridLinesStylingRecordList;

});
define("TUTExamsLegacyCoreUI.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DeviceConfigurationRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUIModel.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DeviceConfigurationList = DeviceConfigurationList;

});
define("TUTExamsLegacyCoreUI.model$DropdownOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownOptionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionRecord = (function (_super) {
__extends(DropdownOptionRecord, _super);
function DropdownOptionRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionRec());
}, true, OutSystemsUIModel.DropdownOptionRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionRecord.fromStructure = function (str) {
return new DropdownOptionRecord(new DropdownOptionRecord.RecordClass({
dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionRecord._isAnonymousRecord = true;
DropdownOptionRecord.UniqueId = "e03a4930-8bfa-ca02-257d-451178bbf041";
DropdownOptionRecord.init();
return DropdownOptionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.DropdownOptionRecord = DropdownOptionRecord;

});
define("TUTExamsLegacyCoreUI.model$DropdownOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DropdownOptionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionRecordList = (function (_super) {
__extends(DropdownOptionRecordList, _super);
function DropdownOptionRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecordList.itemType = TUTExamsLegacyCoreUIModel.DropdownOptionRecord;
return DropdownOptionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownOptionRecordList = DropdownOptionRecordList;

});
define("TUTExamsLegacyCoreUI.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ColumnBreakRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecord = (function (_super) {
__extends(ColumnBreakRecord, _super);
function ColumnBreakRecord(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecord.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColumnBreakRec());
}, true, OutSystemsUIModel.ColumnBreakRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRecord.fromStructure = function (str) {
return new ColumnBreakRecord(new ColumnBreakRecord.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRecord._isAnonymousRecord = true;
ColumnBreakRecord.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
ColumnBreakRecord.init();
return ColumnBreakRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("TUTExamsLegacyCoreUI.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ColumnBreakRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = TUTExamsLegacyCoreUIModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("TUTExamsLegacyCoreUI.model$TypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$TypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TypeRecord = (function (_super) {
__extends(TypeRecord, _super);
function TypeRecord(defaults) {
_super.apply(this, arguments);
}
TypeRecord.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.TypeRec());
}, true, OutSystemsMapsModel.TypeRec)
].concat(_super.attributesToDeclare.call(this));
};
TypeRecord.fromStructure = function (str) {
return new TypeRecord(new TypeRecord.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TypeRecord._isAnonymousRecord = true;
TypeRecord.UniqueId = "b32e755d-03dd-085a-4b97-5b8c0c7d4454";
TypeRecord.init();
return TypeRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TypeRecord = TypeRecord;

});
define("TUTExamsLegacyCoreUI.model$TabsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$TabsOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsList = (function (_super) {
__extends(TabsOptionalConfigsList, _super);
function TabsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsList.itemType = OutSystemsUIModel.TabsOptionalConfigsRec;
return TabsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TabsOptionalConfigsList = TabsOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$StudentBioDetail_RecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$StudentBioDetail_RecordRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StudentBioDetail_RecordList = (function (_super) {
__extends(StudentBioDetail_RecordList, _super);
function StudentBioDetail_RecordList(defaults) {
_super.apply(this, arguments);
}
StudentBioDetail_RecordList.itemType = TUTExamsLegacyPortal_CSModel.StudentBioDetail_RecordRec;
return StudentBioDetail_RecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StudentBioDetail_RecordList = StudentBioDetail_RecordList;

});
define("TUTExamsLegacyCoreUI.model$SplideConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SplideConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsRecordList = (function (_super) {
__extends(SplideConfigsRecordList, _super);
function SplideConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.SplideConfigsRecord;
return SplideConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SplideConfigsRecordList = SplideConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownItemRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUIModel.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownItemList = DropdownItemList;

});
define("TUTExamsLegacyCoreUI.model$TimePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$TimePickerOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecord = (function (_super) {
__extends(TimePickerOptionalConfigsRecord, _super);
function TimePickerOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TimePickerOptionalConfigsRec());
}, true, OutSystemsUIModel.TimePickerOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TimePickerOptionalConfigsRecord.fromStructure = function (str) {
return new TimePickerOptionalConfigsRecord(new TimePickerOptionalConfigsRecord.RecordClass({
timePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimePickerOptionalConfigsRecord._isAnonymousRecord = true;
TimePickerOptionalConfigsRecord.UniqueId = "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88";
TimePickerOptionalConfigsRecord.init();
return TimePickerOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TimePickerOptionalConfigsRecord = TimePickerOptionalConfigsRecord;

});
define("TUTExamsLegacyCoreUI.model$ValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$ValuesTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ValuesTypeList = (function (_super) {
__extends(ValuesTypeList, _super);
function ValuesTypeList(defaults) {
_super.apply(this, arguments);
}
ValuesTypeList.itemType = OutSystemsChartsModel.ValuesTypeRec;
return ValuesTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ValuesTypeList = ValuesTypeList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DatePickerOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerOptionalConfigsRecordList, _super);
function DatePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.DatePickerOptionalConfigsRecord;
return DatePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerOptionalConfigsRecordList = DatePickerOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ErrorMessageRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = TUTExamsLegacyCoreUIModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SeriesStylingOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsRecordList = (function (_super) {
__extends(SeriesStylingOptionalConfigsRecordList, _super);
function SeriesStylingOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.SeriesStylingOptionalConfigsRecord;
return SeriesStylingOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesStylingOptionalConfigsRecordList = SeriesStylingOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownOptionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownOptionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionList = (function (_super) {
__extends(DropdownOptionList, _super);
function DropdownOptionList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionList.itemType = OutSystemsUIModel.DropdownOptionRec;
return DropdownOptionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownOptionList = DropdownOptionList;

});
define("TUTExamsLegacyCoreUI.model$StackingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$StackingTypeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StackingTypeList = (function (_super) {
__extends(StackingTypeList, _super);
function StackingTypeList(defaults) {
_super.apply(this, arguments);
}
StackingTypeList.itemType = OutSystemsChartsModel.StackingTypeRec;
return StackingTypeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StackingTypeList = StackingTypeList;

});
define("TUTExamsLegacyCoreUI.model$VirtualSelectConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$VirtualSelectConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecordList = (function (_super) {
__extends(VirtualSelectConfigsRecordList, _super);
function VirtualSelectConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.VirtualSelectConfigsRecord;
return VirtualSelectConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.VirtualSelectConfigsRecordList = VirtualSelectConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$TT_prt_SessionRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$TT_prt_SessionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TT_prt_SessionRecord = (function (_super) {
__extends(TT_prt_SessionRecord, _super);
function TT_prt_SessionRecord(defaults) {
_super.apply(this, arguments);
}
TT_prt_SessionRecord.attributesToDeclare = function () {
return [
this.attr("TT_prt_Session", "tT_prt_SessionAttr", "TT_prt_Session", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.TT_prt_SessionRec());
}, true, TUTExamsLegacyPortal_CSModel.TT_prt_SessionRec)
].concat(_super.attributesToDeclare.call(this));
};
TT_prt_SessionRecord.fromStructure = function (str) {
return new TT_prt_SessionRecord(new TT_prt_SessionRecord.RecordClass({
tT_prt_SessionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TT_prt_SessionRecord._isAnonymousRecord = true;
TT_prt_SessionRecord.UniqueId = "cf8edbb2-3af5-a287-7235-4a352d83a17e";
TT_prt_SessionRecord.init();
return TT_prt_SessionRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.TT_prt_SessionRecord = TT_prt_SessionRecord;

});
define("TUTExamsLegacyCoreUI.model$TT_prt_SessionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TT_prt_SessionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TT_prt_SessionRecordList = (function (_super) {
__extends(TT_prt_SessionRecordList, _super);
function TT_prt_SessionRecordList(defaults) {
_super.apply(this, arguments);
}
TT_prt_SessionRecordList.itemType = TUTExamsLegacyCoreUIModel.TT_prt_SessionRecord;
return TT_prt_SessionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TT_prt_SessionRecordList = TT_prt_SessionRecordList;

});
define("TUTExamsLegacyCoreUI.model$MonthOrderYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MonthOrderYearRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearList = (function (_super) {
__extends(MonthOrderYearList, _super);
function MonthOrderYearList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearList.itemType = OutSystemsUIModel.MonthOrderYearRec;
return MonthOrderYearList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MonthOrderYearList = MonthOrderYearList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerTimeFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DatePickerTimeFormatRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecordList = (function (_super) {
__extends(DatePickerTimeFormatRecordList, _super);
function DatePickerTimeFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecordList.itemType = TUTExamsLegacyCoreUIModel.DatePickerTimeFormatRecord;
return DatePickerTimeFormatRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerTimeFormatRecordList = DatePickerTimeFormatRecordList;

});
define("TUTExamsLegacyCoreUI.model$ProgressCircleOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsList = (function (_super) {
__extends(ProgressCircleOptionalConfigsList, _super);
function ProgressCircleOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsList.itemType = OutSystemsUIModel.ProgressCircleOptionalConfigsRec;
return ProgressCircleOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ProgressCircleOptionalConfigsList = ProgressCircleOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$LegendPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$LegendPositionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var LegendPositionRecordList = (function (_super) {
__extends(LegendPositionRecordList, _super);
function LegendPositionRecordList(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecordList.itemType = TUTExamsLegacyCoreUIModel.LegendPositionRecord;
return LegendPositionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.LegendPositionRecordList = LegendPositionRecordList;

});
define("TUTExamsLegacyCoreUI.model$RangeSliderOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsList = (function (_super) {
__extends(RangeSliderOptionalConfigsList, _super);
function RangeSliderOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsList.itemType = OutSystemsUIModel.RangeSliderOptionalConfigsRec;
return RangeSliderOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.RangeSliderOptionalConfigsList = RangeSliderOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$StepsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StepsList = StepsList;

});
define("TUTExamsLegacyCoreUI.model$ZoomRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ZoomRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ZoomRecordList = (function (_super) {
__extends(ZoomRecordList, _super);
function ZoomRecordList(defaults) {
_super.apply(this, arguments);
}
ZoomRecordList.itemType = TUTExamsLegacyCoreUIModel.ZoomRecord;
return ZoomRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ZoomRecordList = ZoomRecordList;

});
define("TUTExamsLegacyCoreUI.model$ERResults_prt_ResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyPortal_CS.model$ERResults_prt_ResultRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$TUTExamsLegacyPortal_CS"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERResults_prt_ResultRecord = (function (_super) {
__extends(ERResults_prt_ResultRecord, _super);
function ERResults_prt_ResultRecord(defaults) {
_super.apply(this, arguments);
}
ERResults_prt_ResultRecord.attributesToDeclare = function () {
return [
this.attr("ERResults_prt_Result", "eRResults_prt_ResultAttr", "ERResults_prt_Result", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultRec());
}, true, TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ERResults_prt_ResultRecord.fromStructure = function (str) {
return new ERResults_prt_ResultRecord(new ERResults_prt_ResultRecord.RecordClass({
eRResults_prt_ResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ERResults_prt_ResultRecord._isAnonymousRecord = true;
ERResults_prt_ResultRecord.UniqueId = "cc7241dd-76d9-8cab-9b06-dd36aaa1c0b3";
ERResults_prt_ResultRecord.init();
return ERResults_prt_ResultRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.ERResults_prt_ResultRecord = ERResults_prt_ResultRecord;

});
define("TUTExamsLegacyCoreUI.model$SplideConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SplideConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsList = (function (_super) {
__extends(SplideConfigsList, _super);
function SplideConfigsList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsList.itemType = OutSystemsUIModel.SplideConfigsRec;
return SplideConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SplideConfigsList = SplideConfigsList;

});
define("TUTExamsLegacyCoreUI.model$VirtualSelectConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$VirtualSelectConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsList = (function (_super) {
__extends(VirtualSelectConfigsList, _super);
function VirtualSelectConfigsList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsList.itemType = OutSystemsUIModel.VirtualSelectConfigsRec;
return VirtualSelectConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.VirtualSelectConfigsList = VirtualSelectConfigsList;

});
define("TUTExamsLegacyCoreUI.model$OffsetList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$OffsetRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OffsetList = (function (_super) {
__extends(OffsetList, _super);
function OffsetList(defaults) {
_super.apply(this, arguments);
}
OffsetList.itemType = OutSystemsMapsModel.OffsetRec;
return OffsetList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OffsetList = OffsetList;

});
define("TUTExamsLegacyCoreUI.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SpeedRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpeedRec());
}, true, OutSystemsUIModel.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SpeedRecord = SpeedRecord;

});
define("TUTExamsLegacyCoreUI.model$TypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TypeRecordList = (function (_super) {
__extends(TypeRecordList, _super);
function TypeRecordList(defaults) {
_super.apply(this, arguments);
}
TypeRecordList.itemType = TUTExamsLegacyCoreUIModel.TypeRecord;
return TypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TypeRecordList = TypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DeviceResponsiveRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUIModel.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DeviceResponsiveList = DeviceResponsiveList;

});
define("TUTExamsLegacyCoreUI.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SideMenuBehaviorRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUIModel.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("TUTExamsLegacyCoreUI.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ColorRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ColorList = ColorList;

});
define("TUTExamsLegacyCoreUI.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$GutterSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUIModel.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.GutterSizeList = GutterSizeList;

});
define("TUTExamsLegacyCoreUI.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$ScrollbarStyleRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUIModel.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ScrollbarStyleList = ScrollbarStyleList;

});
define("TUTExamsLegacyCoreUI.model$ERResults_prt_ResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ERResults_prt_ResultRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERResults_prt_ResultRecordList = (function (_super) {
__extends(ERResults_prt_ResultRecordList, _super);
function ERResults_prt_ResultRecordList(defaults) {
_super.apply(this, arguments);
}
ERResults_prt_ResultRecordList.itemType = TUTExamsLegacyCoreUIModel.ERResults_prt_ResultRecord;
return ERResults_prt_ResultRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ERResults_prt_ResultRecordList = ERResults_prt_ResultRecordList;

});
define("TUTExamsLegacyCoreUI.model$MapEventTriggeredList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MapEventTriggeredRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MapEventTriggeredList = (function (_super) {
__extends(MapEventTriggeredList, _super);
function MapEventTriggeredList(defaults) {
_super.apply(this, arguments);
}
MapEventTriggeredList.itemType = OutSystemsMapsModel.MapEventTriggeredRec;
return MapEventTriggeredList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MapEventTriggeredList = MapEventTriggeredList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DatePickerLanguageRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageList = (function (_super) {
__extends(DatePickerLanguageList, _super);
function DatePickerLanguageList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageList.itemType = OutSystemsUIModel.DatePickerLanguageRec;
return DatePickerLanguageList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerLanguageList = DatePickerLanguageList;

});
define("TUTExamsLegacyCoreUI.model$NotificationOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$NotificationOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsList = (function (_super) {
__extends(NotificationOptionalConfigsList, _super);
function NotificationOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsList.itemType = OutSystemsUIModel.NotificationOptionalConfigsRec;
return NotificationOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.NotificationOptionalConfigsList = NotificationOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$SplideProviderClassesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SplideProviderClassesRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecord = (function (_super) {
__extends(SplideProviderClassesRecord, _super);
function SplideProviderClassesRecord(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecord.attributesToDeclare = function () {
return [
this.attr("SplideProviderClasses", "splideProviderClassesAttr", "SplideProviderClasses", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideProviderClassesRec());
}, true, OutSystemsUIModel.SplideProviderClassesRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProviderClassesRecord.fromStructure = function (str) {
return new SplideProviderClassesRecord(new SplideProviderClassesRecord.RecordClass({
splideProviderClassesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProviderClassesRecord._isAnonymousRecord = true;
SplideProviderClassesRecord.UniqueId = "dc356367-93ab-1ffb-95f0-eb8bb907f022";
SplideProviderClassesRecord.init();
return SplideProviderClassesRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SplideProviderClassesRecord = SplideProviderClassesRecord;

});
define("TUTExamsLegacyCoreUI.model$SplideProviderClassesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SplideProviderClassesRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecordList = (function (_super) {
__extends(SplideProviderClassesRecordList, _super);
function SplideProviderClassesRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecordList.itemType = TUTExamsLegacyCoreUIModel.SplideProviderClassesRecord;
return SplideProviderClassesRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SplideProviderClassesRecordList = SplideProviderClassesRecordList;

});
define("TUTExamsLegacyCoreUI.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$PositionRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.PositionList = PositionList;

});
define("TUTExamsLegacyCoreUI.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DropdownItemRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = TUTExamsLegacyCoreUIModel.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownItemRecordList = DropdownItemRecordList;

});
define("TUTExamsLegacyCoreUI.model$OptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$OptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var OptionalConfigsList = (function (_super) {
__extends(OptionalConfigsList, _super);
function OptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsList.itemType = OutSystemsChartsModel.OptionalConfigsRec;
return OptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.OptionalConfigsList = OptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$CarouselItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselItemsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsRecord = (function (_super) {
__extends(CarouselItemsRecord, _super);
function CarouselItemsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselItemsRec());
}, true, OutSystemsUIModel.CarouselItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselItemsRecord.fromStructure = function (str) {
return new CarouselItemsRecord(new CarouselItemsRecord.RecordClass({
carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselItemsRecord._isAnonymousRecord = true;
CarouselItemsRecord.UniqueId = "dac62773-434c-f92b-5236-8fd089bbfc2a";
CarouselItemsRecord.init();
return CarouselItemsRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.CarouselItemsRecord = CarouselItemsRecord;

});
define("TUTExamsLegacyCoreUI.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$AutoplayRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AutoplayList = AutoplayList;

});
define("TUTExamsLegacyCoreUI.model$IconSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$IconSizeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var IconSizeRecordList = (function (_super) {
__extends(IconSizeRecordList, _super);
function IconSizeRecordList(defaults) {
_super.apply(this, arguments);
}
IconSizeRecordList.itemType = TUTExamsLegacyCoreUIModel.IconSizeRecord;
return IconSizeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.IconSizeRecordList = IconSizeRecordList;

});
define("TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ERResult_prt_ExamTypeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERResult_prt_ExamTypeRecordList = (function (_super) {
__extends(ERResult_prt_ExamTypeRecordList, _super);
function ERResult_prt_ExamTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ERResult_prt_ExamTypeRecordList.itemType = TUTExamsLegacyCoreUIModel.ERResult_prt_ExamTypeRecord;
return ERResult_prt_ExamTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ERResult_prt_ExamTypeRecordList = ERResult_prt_ExamTypeRecordList;

});
define("TUTExamsLegacyCoreUI.model$ErrorMessage2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ErrorMessage2Record"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ErrorMessage2RecordList = (function (_super) {
__extends(ErrorMessage2RecordList, _super);
function ErrorMessage2RecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessage2RecordList.itemType = TUTExamsLegacyCoreUIModel.ErrorMessage2Record;
return ErrorMessage2RecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ErrorMessage2RecordList = ErrorMessage2RecordList;

});
define("TUTExamsLegacyCoreUI.model$XAxisStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$XAxisStylingRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisStylingRecordList = (function (_super) {
__extends(XAxisStylingRecordList, _super);
function XAxisStylingRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisStylingRecordList.itemType = TUTExamsLegacyCoreUIModel.XAxisStylingRecord;
return XAxisStylingRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.XAxisStylingRecordList = XAxisStylingRecordList;

});
define("TUTExamsLegacyCoreUI.model$MarkerEventTriggeredList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "TUTExamsLegacyCoreUI.model", "OutSystemsMaps.model$MarkerEventTriggeredRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MarkerEventTriggeredList = (function (_super) {
__extends(MarkerEventTriggeredList, _super);
function MarkerEventTriggeredList(defaults) {
_super.apply(this, arguments);
}
MarkerEventTriggeredList.itemType = OutSystemsMapsModel.MarkerEventTriggeredRec;
return MarkerEventTriggeredList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MarkerEventTriggeredList = MarkerEventTriggeredList;

});
define("TUTExamsLegacyCoreUI.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SideMenuBehaviorRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SideMenuBehaviorRec());
}, true, OutSystemsUIModel.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
TUTExamsLegacyCoreUIModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("TUTExamsLegacyCoreUI.model$CarouselItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$CarouselItemsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsRecordList = (function (_super) {
__extends(CarouselItemsRecordList, _super);
function CarouselItemsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecordList.itemType = TUTExamsLegacyCoreUIModel.CarouselItemsRecord;
return CarouselItemsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselItemsRecordList = CarouselItemsRecordList;

});
define("TUTExamsLegacyCoreUI.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$SpeedRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SpeedList = SpeedList;

});
define("TUTExamsLegacyCoreUI.model$ERSelectedReport_recordRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ERSelectedReport_recordRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ERSelectedReport_recordRecordList = (function (_super) {
__extends(ERSelectedReport_recordRecordList, _super);
function ERSelectedReport_recordRecordList(defaults) {
_super.apply(this, arguments);
}
ERSelectedReport_recordRecordList.itemType = TUTExamsLegacyCoreUIModel.ERSelectedReport_recordRecord;
return ERSelectedReport_recordRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ERSelectedReport_recordRecordList = ERSelectedReport_recordRecordList;

});
define("TUTExamsLegacyCoreUI.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$StepsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = TUTExamsLegacyCoreUIModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StepsRecordList = StepsRecordList;

});
define("TUTExamsLegacyCoreUI.model$DatePickerLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DatePickerLanguageRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecordList = (function (_super) {
__extends(DatePickerLanguageRecordList, _super);
function DatePickerLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecordList.itemType = TUTExamsLegacyCoreUIModel.DatePickerLanguageRecord;
return DatePickerLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DatePickerLanguageRecordList = DatePickerLanguageRecordList;

});
define("TUTExamsLegacyCoreUI.model$ExecuteErrorsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ExecuteErrorsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ExecuteErrorsRecordList = (function (_super) {
__extends(ExecuteErrorsRecordList, _super);
function ExecuteErrorsRecordList(defaults) {
_super.apply(this, arguments);
}
ExecuteErrorsRecordList.itemType = TUTExamsLegacyCoreUIModel.ExecuteErrorsRecord;
return ExecuteErrorsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ExecuteErrorsRecordList = ExecuteErrorsRecordList;

});
define("TUTExamsLegacyCoreUI.model$XAxisGridLinesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$XAxisGridLinesStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingList = (function (_super) {
__extends(XAxisGridLinesStylingList, _super);
function XAxisGridLinesStylingList(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingList.itemType = OutSystemsChartsModel.XAxisGridLinesStylingRec;
return XAxisGridLinesStylingList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.XAxisGridLinesStylingList = XAxisGridLinesStylingList;

});
define("TUTExamsLegacyCoreUI.model$PaperSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "TUTExamsLegacyCoreUI.model", "UltimatePDF.model$PaperSizeRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$UltimatePDF"], function (exports, OutSystems, UltimatePDFModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var PaperSizeList = (function (_super) {
__extends(PaperSizeList, _super);
function PaperSizeList(defaults) {
_super.apply(this, arguments);
}
PaperSizeList.itemType = UltimatePDFModel.PaperSizeRec;
return PaperSizeList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.PaperSizeList = PaperSizeList;

});
define("TUTExamsLegacyCoreUI.model$YAxisStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$YAxisStylingRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var YAxisStylingList = (function (_super) {
__extends(YAxisStylingList, _super);
function YAxisStylingList(defaults) {
_super.apply(this, arguments);
}
YAxisStylingList.itemType = OutSystemsChartsModel.YAxisStylingRec;
return YAxisStylingList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.YAxisStylingList = YAxisStylingList;

});
define("TUTExamsLegacyCoreUI.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$GutterSizeRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = TUTExamsLegacyCoreUIModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("TUTExamsLegacyCoreUI.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SideMenuBehaviorRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = TUTExamsLegacyCoreUIModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("TUTExamsLegacyCoreUI.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "TUTExamsLegacyCoreUI.model", "ServiceCenter.model$UserRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.UserList = UserList;

});
define("TUTExamsLegacyCoreUI.model$GradientList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$GradientRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GradientList = (function (_super) {
__extends(GradientList, _super);
function GradientList(defaults) {
_super.apply(this, arguments);
}
GradientList.itemType = OutSystemsUIModel.GradientRec;
return GradientList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.GradientList = GradientList;

});
define("TUTExamsLegacyCoreUI.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$AlertRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = TUTExamsLegacyCoreUIModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.AlertRecordList = AlertRecordList;

});
define("TUTExamsLegacyCoreUI.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$SpeedRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = TUTExamsLegacyCoreUIModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SpeedRecordList = SpeedRecordList;

});
define("TUTExamsLegacyCoreUI.model$SeriesStylingMarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "TUTExamsLegacyCoreUI.model", "OutSystemsCharts.model$SeriesStylingMarkerRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerList = (function (_super) {
__extends(SeriesStylingMarkerList, _super);
function SeriesStylingMarkerList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerList.itemType = OutSystemsChartsModel.SeriesStylingMarkerRec;
return SeriesStylingMarkerList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.SeriesStylingMarkerList = SeriesStylingMarkerList;

});
define("TUTExamsLegacyCoreUI.model$TimePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$TimePickerOptionalConfigsRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecordList = (function (_super) {
__extends(TimePickerOptionalConfigsRecordList, _super);
function TimePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecordList.itemType = TUTExamsLegacyCoreUIModel.TimePickerOptionalConfigsRecord;
return TimePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.TimePickerOptionalConfigsRecordList = TimePickerOptionalConfigsRecordList;

});
define("TUTExamsLegacyCoreUI.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$DirectionRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = TUTExamsLegacyCoreUIModel.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DirectionRecordList = DirectionRecordList;

});
define("TUTExamsLegacyCoreUI.model$GradientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$GradientRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var GradientRecordList = (function (_super) {
__extends(GradientRecordList, _super);
function GradientRecordList(defaults) {
_super.apply(this, arguments);
}
GradientRecordList.itemType = TUTExamsLegacyCoreUIModel.GradientRecord;
return GradientRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.GradientRecordList = GradientRecordList;

});
define("TUTExamsLegacyCoreUI.model$MonthYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$MonthYearRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthYearRecordList = (function (_super) {
__extends(MonthYearRecordList, _super);
function MonthYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthYearRecordList.itemType = TUTExamsLegacyCoreUIModel.MonthYearRecord;
return MonthYearRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MonthYearRecordList = MonthYearRecordList;

});
define("TUTExamsLegacyCoreUI.model$MonthList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$MonthRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var MonthList = (function (_super) {
__extends(MonthList, _super);
function MonthList(defaults) {
_super.apply(this, arguments);
}
MonthList.itemType = OutSystemsUIModel.MonthRec;
return MonthList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.MonthList = MonthList;

});
define("TUTExamsLegacyCoreUI.model$CarouselItemsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$CarouselItemsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsList = (function (_super) {
__extends(CarouselItemsList, _super);
function CarouselItemsList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsList.itemType = OutSystemsUIModel.CarouselItemsRec;
return CarouselItemsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.CarouselItemsList = CarouselItemsList;

});
define("TUTExamsLegacyCoreUI.model$StaticMarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$StaticMarkerRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var StaticMarkerRecordList = (function (_super) {
__extends(StaticMarkerRecordList, _super);
function StaticMarkerRecordList(defaults) {
_super.apply(this, arguments);
}
StaticMarkerRecordList.itemType = TUTExamsLegacyCoreUIModel.StaticMarkerRecord;
return StaticMarkerRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.StaticMarkerRecordList = StaticMarkerRecordList;

});
define("TUTExamsLegacyCoreUI.model$DropdownOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TUTExamsLegacyCoreUI.model", "OutSystemsUI.model$DropdownOptionalConfigsRec", "TUTExamsLegacyCoreUI.referencesHealth", "TUTExamsLegacyCoreUI.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsList = (function (_super) {
__extends(DropdownOptionalConfigsList, _super);
function DropdownOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsList.itemType = OutSystemsUIModel.DropdownOptionalConfigsRec;
return DropdownOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.DropdownOptionalConfigsList = DropdownOptionalConfigsList;

});
define("TUTExamsLegacyCoreUI.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.model$ScrollbarStyleRecord"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = TUTExamsLegacyCoreUIModel.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
TUTExamsLegacyCoreUIModel.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("TUTExamsLegacyCoreUI.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var TUTExamsLegacyCoreUIModel = exports;
Object.defineProperty(TUTExamsLegacyCoreUIModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["622dbaf3-1d07-47ac-bb4d-056df314f2c4"];
}
});

TUTExamsLegacyCoreUIModel.staticEntities = {};
TUTExamsLegacyCoreUIModel.staticEntities.seriesType = {};
var getSeriesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["a9c663e8-6354-4f02-931c-636fc58b7d51"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "lineSpline", {
get: function () {
return getSeriesTypeRecord("3f7ae828-19cb-41e5-ae17-9532fe55db17");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "pie", {
get: function () {
return getSeriesTypeRecord("444a575c-b641-498a-9920-deba8125d6cd");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "column", {
get: function () {
return getSeriesTypeRecord("725167e0-349e-4d49-ab03-abb973474c3a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "area", {
get: function () {
return getSeriesTypeRecord("ae810189-6c25-4616-b3d7-9bf355ab45a9");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "line", {
get: function () {
return getSeriesTypeRecord("b8357127-bd9e-4388-ba14-414d253820a8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "areaSpline", {
get: function () {
return getSeriesTypeRecord("f5f641fb-62a9-4991-b1ef-0ad3e0c09eb2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.seriesType, "bar", {
get: function () {
return getSeriesTypeRecord("f9a89332-5bd2-4960-85f2-41f70df5566d");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.legendPosition = {};
var getLegendPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["aae17a97-3f0a-41cb-8937-e49d737a9771"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "bottom", {
get: function () {
return getLegendPositionRecord("03026d1b-9c13-4584-9295-671a1586c89a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "right", {
get: function () {
return getLegendPositionRecord("4e71bff0-a68c-4905-aa02-46ae2986e6fb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "center", {
get: function () {
return getLegendPositionRecord("5686b31a-ba9b-46ca-9282-2f767adc12a4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "bottomRight", {
get: function () {
return getLegendPositionRecord("6d4187a9-2b5a-45b6-809c-e3b2284f2d47");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "left", {
get: function () {
return getLegendPositionRecord("74b2b300-d6d2-4812-ba28-ddeae94869ca");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "top", {
get: function () {
return getLegendPositionRecord("9da3e0d2-6f98-455b-bea1-5661b75da917");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "topLeft", {
get: function () {
return getLegendPositionRecord("aeae77ad-7167-40a1-af0d-02b40615709c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "topRight", {
get: function () {
return getLegendPositionRecord("ec7543e7-5324-4ffe-8bbf-2c4a0f2dccbb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendPosition, "bottomLeft", {
get: function () {
return getLegendPositionRecord("f08c54cf-074d-4052-8438-7bfdf027eb8b");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.valuesType = {};
var getValuesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["d0562170-cf56-434a-85ef-b8d33f2023f2"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.valuesType, "decimal", {
get: function () {
return getValuesTypeRecord("3e27399e-2c5f-4ea0-9b43-57efda9fc39a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.valuesType, "text", {
get: function () {
return getValuesTypeRecord("649ea8ca-aea0-4b0a-9e14-7d7be348f570");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.valuesType, "datetime", {
get: function () {
return getValuesTypeRecord("ada8b21f-91d2-4353-b296-3d0f34e8f065");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.valuesType, "integer", {
get: function () {
return getValuesTypeRecord("dacb223d-1024-44f8-ae03-bbd06961a870");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.legendLayout = {};
var getLegendLayoutRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["f3006da5-223f-4057-894a-8966e01ba39f"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendLayout, "proximate", {
get: function () {
return getLegendLayoutRecord("3936b711-b22b-4e51-ac3a-a8dfae908d39");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendLayout, "horizontal", {
get: function () {
return getLegendLayoutRecord("39e35bd8-6ab1-475f-8e44-22ab6a1b0af8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.legendLayout, "vertical", {
get: function () {
return getLegendLayoutRecord("75c7fcee-0e1f-4392-b359-fa5646dd2236");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.stackingType = {};
var getStackingTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["f7a3d532-b80b-4cf8-a88a-1b138a432266"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.stackingType, "stacked", {
get: function () {
return getStackingTypeRecord("088f950f-4da9-4ff9-8a04-65a883f83712");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.stackingType, "stacked100Percent", {
get: function () {
return getStackingTypeRecord("1faf391e-0d35-4bf2-a4eb-23b864eb0827");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.stackingType, "noStacking", {
get: function () {
return getStackingTypeRecord("a63fa021-b305-434c-9ee1-ea028f9a1015");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.axisValuesType = {};
var getAxisValuesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["fd747d79-417d-4efa-8f89-2d79bb8de835"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.axisValuesType, "linear", {
get: function () {
return getAxisValuesTypeRecord("45d001ca-cc7c-464e-8526-72b015a94f39");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.axisValuesType, "datetime", {
get: function () {
return getAxisValuesTypeRecord("7691cdbd-3a83-4375-a5b9-851b2bd61767");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.axisValuesType, "logarithmic", {
get: function () {
return getAxisValuesTypeRecord("fe3080e5-4116-4dc1-bae7-3715e5612a4b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.axisValuesType, "category", {
get: function () {
return getAxisValuesTypeRecord("ff0aef46-a8c5-4078-b0a1-fee40a326514");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.browserProduct = {};
var getBrowserProductRecord = function (record) {
return OS.ApplicationInfo.getModules()["7de3f211-ab83-4d7e-991f-d768b7b6ef80"].staticEntities["1ae7965e-bf9f-42d4-a51e-54e07117b75d"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.browserProduct, "firefox", {
get: function () {
return getBrowserProductRecord("10baeea1-5926-4b5a-946d-5e96495ee69b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.browserProduct, "chromium", {
get: function () {
return getBrowserProductRecord("e6677230-aef7-484d-9113-3dd23ceadf43");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.marginSize = {};
var getMarginSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["7de3f211-ab83-4d7e-991f-d768b7b6ef80"].staticEntities["5b92726d-74f3-4474-8b11-5f1f776e1e16"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "one_cm", {
get: function () {
return getMarginSizeRecord("207460ac-8d90-4136-9950-d92c944cfedb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "oneTopBottomByOnePointTwentyFiveSides_in", {
get: function () {
return getMarginSizeRecord("2ffc2dbe-485c-44ab-8a72-eff090faf22f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "one_in", {
get: function () {
return getMarginSizeRecord("37ad7923-034c-45f0-a454-5fab41ae11a0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "twoPointFiveTopBottomByThreeSides_cm", {
get: function () {
return getMarginSizeRecord("46b4d879-572b-48f3-9ae0-3fdd9d4aad78");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "onePointFive_cm", {
get: function () {
return getMarginSizeRecord("a81d82cd-4b3e-46c6-b1bd-a24e94f412c0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "twoPointFive_cm", {
get: function () {
return getMarginSizeRecord("a837839b-d38d-4977-b05a-dbaee1cf6ea9");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.marginSize, "noMargin", {
get: function () {
return getMarginSizeRecord("c38dc081-74d9-43ed-b1d3-acceb9c2a356");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.paperSize = {};
var getPaperSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["7de3f211-ab83-4d7e-991f-d768b7b6ef80"].staticEntities["87c2e1a6-408e-425e-aee8-38c9e81fb59a"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "a5", {
get: function () {
return getPaperSizeRecord("16c58283-cd7d-4082-bf76-c3dea443086c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "landscapeExecutive", {
get: function () {
return getPaperSizeRecord("24ee53cf-0eac-40b5-a657-f5933b7aa2b2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "landscapeLetter", {
get: function () {
return getPaperSizeRecord("473a402c-d742-416d-838b-48564c6213ec");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "legal", {
get: function () {
return getPaperSizeRecord("5c531416-a2ab-4104-9f70-59fb6082a64e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "landscapeA4", {
get: function () {
return getPaperSizeRecord("7e8fbf7d-0847-40ee-9b05-9621a06ed9ee");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "letter", {
get: function () {
return getPaperSizeRecord("85748fee-ddf7-48cd-8cad-0954edc0401c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "executive", {
get: function () {
return getPaperSizeRecord("9eb0f073-aa2e-41ff-a644-4227a583f4ae");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "landscapeLegal", {
get: function () {
return getPaperSizeRecord("b571d5cc-0d7e-4fa6-8c7a-a9e1f68bd9ce");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "a4", {
get: function () {
return getPaperSizeRecord("bddefd8c-48cb-4e38-92d5-477cc122d63e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.paperSize, "landscapeA5", {
get: function () {
return getPaperSizeRecord("fb798577-33dc-4753-baa6-0db5e1c8e21f");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.gradient = {};
var getGradientRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["15f4b55e-c9e8-4f0d-a043-0093e17fa04d"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gradient, "linearHorizontal", {
get: function () {
return getGradientRecord("8d250673-5528-403b-9e7b-d1717a98219c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gradient, "radial", {
get: function () {
return getGradientRecord("b9ce4df8-c39e-4a3a-84d9-35dbc79e82fc");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gradient, "linearDiagonally", {
get: function () {
return getGradientRecord("cef16d35-677a-4002-8d53-7b385be0011d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gradient, "linearVertical", {
get: function () {
return getGradientRecord("f128b147-c173-4df8-a624-d01eab01c46c");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.month = {};
var getMonthRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "june", {
get: function () {
return getMonthRecord("02cb1fff-a143-48c1-8922-5b2c562e1939");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "march", {
get: function () {
return getMonthRecord("29858d6e-705a-4cfd-a9e2-f9dc6bda346c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "december", {
get: function () {
return getMonthRecord("5b0eff8b-b2df-4e9a-80a5-eac51617cdc3");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "february", {
get: function () {
return getMonthRecord("6b6caf1c-eadb-4b30-96ec-84b225feb1a5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "may", {
get: function () {
return getMonthRecord("76cd9430-f4f8-4b0d-8a72-ddcac3928aeb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "april", {
get: function () {
return getMonthRecord("7c425633-4e80-4f7a-a119-c21d82820511");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "november", {
get: function () {
return getMonthRecord("86e22632-bb44-42ad-8589-0b6aadda9dd4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "august", {
get: function () {
return getMonthRecord("896ff549-7e70-48af-b967-31ea68b73891");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "january", {
get: function () {
return getMonthRecord("8d3840f5-6ae6-4899-960d-3e215342e2e3");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "july", {
get: function () {
return getMonthRecord("ac483ea0-4423-404a-a61d-8d6bce0ee39e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "september", {
get: function () {
return getMonthRecord("c858ebfd-c9fe-49b6-bbfc-57c28c895b26");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.month, "october", {
get: function () {
return getMonthRecord("e01b8055-99c6-4096-bc7d-5f0c825b7692");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return getDatePickerLanguageRecord("0041af3b-505e-48b8-8d79-b0a00aeeb4de");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return getDatePickerLanguageRecord("05968754-a438-40c9-860d-0775c7618c80");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "czech", {
get: function () {
return getDatePickerLanguageRecord("0c6d79c7-6773-4d9e-a914-ad7246505aa8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return getDatePickerLanguageRecord("0e659962-b0fb-4486-9f33-997cf5a00f33");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return getDatePickerLanguageRecord("10fba89e-f9ea-46da-a114-849a4891c4dd");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return getDatePickerLanguageRecord("11a9c498-65e3-4074-bd4c-16266288a9e4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return getDatePickerLanguageRecord("186d2cd3-7b9d-464a-b31e-b4548b9a80c0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "polish", {
get: function () {
return getDatePickerLanguageRecord("198c5c59-d610-4e52-b4ed-9fb38c21b3b7");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return getDatePickerLanguageRecord("1e9dd8a1-ab24-4849-ab74-b65b2a2974a5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return getDatePickerLanguageRecord("1efa117c-f1b9-4ae7-94ad-814a752e4864");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "malay", {
get: function () {
return getDatePickerLanguageRecord("242628f3-22b6-4713-8118-7921abd00ad2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return getDatePickerLanguageRecord("286e49ad-5406-4f42-a9c4-bcc4adc64d17");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return getDatePickerLanguageRecord("2df37c1e-5431-4849-9f0b-405b43fed188");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "danish", {
get: function () {
return getDatePickerLanguageRecord("34689962-0ccc-46dc-bc43-e6bc7716784c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "english", {
get: function () {
return getDatePickerLanguageRecord("37430fa0-8882-4f69-afde-41c27de03a5f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return getDatePickerLanguageRecord("3854d57f-f8bd-4024-8664-6353d552d8f2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return getDatePickerLanguageRecord("459a4a75-fb85-40e0-96b2-f08df284da41");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "norwegianBokmal", {
get: function () {
return getDatePickerLanguageRecord("530131bd-1b82-495b-a9c5-710d8bc4a642");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return getDatePickerLanguageRecord("530ceb8f-1ff1-44a7-aed5-e0af45b941cb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return getDatePickerLanguageRecord("58eb18a6-11fe-4a8b-bb96-7ed1057b16f5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return getDatePickerLanguageRecord("5e341bb3-0fc7-4f59-a426-00dcd4b2fabf");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return getDatePickerLanguageRecord("62e038a6-8d72-4484-b278-a883b004b3f2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return getDatePickerLanguageRecord("6bb7b0e2-bad8-4f58-801b-4ca0e9e699a7");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return getDatePickerLanguageRecord("6f9fd262-32f0-4726-ab3e-5d7bb6916892");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return getDatePickerLanguageRecord("7b29c19f-82dd-4e0b-8f5b-9004ca7d24fc");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return getDatePickerLanguageRecord("7def49c8-f1a0-4600-ae56-53e9471634a2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return getDatePickerLanguageRecord("80601fbd-e190-49be-90dd-6964171d5292");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "korean", {
get: function () {
return getDatePickerLanguageRecord("82a53bc2-f8d7-4c5d-bb70-5651a4713880");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "thai", {
get: function () {
return getDatePickerLanguageRecord("84a8de9c-6f4d-4077-9391-98d66414bf4e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return getDatePickerLanguageRecord("872b0db9-d9b4-49d4-b2ae-028122cbd448");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return getDatePickerLanguageRecord("8c2fe645-d925-42ea-9819-4a1ac3a340e4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return getDatePickerLanguageRecord("930b417d-72aa-4b39-a3b9-3b9821bf1d4b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return getDatePickerLanguageRecord("992f2c99-b122-49f6-bc7b-75d242dcb9bb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return getDatePickerLanguageRecord("9d702f7b-360d-46bb-9b6e-0e020a5f6385");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "french", {
get: function () {
return getDatePickerLanguageRecord("9dffbcdd-25c4-44e2-9f6a-d19b9f758ad8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return getDatePickerLanguageRecord("9f260686-51cd-40d2-bf26-a09165b213ba");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "russian", {
get: function () {
return getDatePickerLanguageRecord("ad00c2b1-c380-4bf7-b5f4-173b40594bd5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return getDatePickerLanguageRecord("b2957404-0007-4b47-a798-dd114894c7e3");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return getDatePickerLanguageRecord("b3519d98-660c-43ed-aee9-bb76e32dcafb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return getDatePickerLanguageRecord("b4e4a5fb-10ef-4d66-84bd-96dddb9d3b3c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return getDatePickerLanguageRecord("b60ef392-7715-437f-a4a9-b89a2128e49c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return getDatePickerLanguageRecord("b6fa2f75-12b9-4973-9027-b4866be01621");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return getDatePickerLanguageRecord("b719cb40-621d-4610-b16f-f42caad493d4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "italian", {
get: function () {
return getDatePickerLanguageRecord("ba077ace-9423-401f-88fc-1fff8d7872a0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return getDatePickerLanguageRecord("bb85f008-2154-44ee-9199-9e0e19497c47");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return getDatePickerLanguageRecord("bce28cae-e6f9-4988-97a8-8b0e17ea6703");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return getDatePickerLanguageRecord("bd68a245-146e-45c9-8dc0-26419cbe5c85");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return getDatePickerLanguageRecord("c1e7d993-22fe-452a-9754-6a48ac03e6d4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return getDatePickerLanguageRecord("c356a48b-0411-4b54-b7a3-dd7fa4368645");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return getDatePickerLanguageRecord("c38dac5a-7528-4647-96e6-887c0c9da82e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "persian", {
get: function () {
return getDatePickerLanguageRecord("d1bf9a10-3760-41c7-94eb-e24707993416");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return getDatePickerLanguageRecord("d8f987cd-d08c-40b3-b19b-b60b508cf03d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "german", {
get: function () {
return getDatePickerLanguageRecord("da3038a7-779c-4599-b0b7-99557f688365");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return getDatePickerLanguageRecord("df311624-2b4a-410a-bf54-de447886e3a3");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return getDatePickerLanguageRecord("dfb449d3-ec70-458e-9f37-89e8f9c207fb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return getDatePickerLanguageRecord("f6d8b648-df67-4449-934a-bd03dff4c50c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return getDatePickerLanguageRecord("fad657c3-4b13-4163-8e21-84c60b6810ee");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return getDatePickerLanguageRecord("ffb560d6-c067-42e5-bdd8-0de808acff0a");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return getDatePickerTimeFormatRecord("48213c15-538b-4222-a3ea-d136e608a57d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("ce1a9924-35ee-4a25-87ae-81f2a97bdf20");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("e1aba689-db52-4dba-9eef-b5980b3e4fa0");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return getCarouselDirectionRecord("4b5575cd-7598-420a-97db-5088d4d86a4d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return getCarouselDirectionRecord("a05b6420-43c5-4660-9526-95e2052a45a8");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.booleanTypes, "true", {
get: function () {
return getBooleanTypesRecord("58ea7788-cac7-4f50-8ef1-ba8e1661b632");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.booleanTypes, "unset", {
get: function () {
return getBooleanTypesRecord("bf11a159-3707-4888-8e86-c3b0c78bc889");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.booleanTypes, "false", {
get: function () {
return getBooleanTypesRecord("df5af092-2604-4409-ae7d-b86d2bcef9fb");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.carouselNavigation, "dots", {
get: function () {
return getCarouselNavigationRecord("2ba3836f-3d61-4868-b949-fb01a4e0d441");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.carouselNavigation, "none", {
get: function () {
return getCarouselNavigationRecord("367fee69-dc95-4624-9ba5-da687d881886");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.carouselNavigation, "arrows", {
get: function () {
return getCarouselNavigationRecord("3ae78a75-4c85-4aaa-ba2d-12c24902a7cf");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.carouselNavigation, "both", {
get: function () {
return getCarouselNavigationRecord("59a3f653-ff1d-49a0-ad2f-dda725b1352b");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("2fc656af-35c9-4cc8-94f7-cd7970e5afe4"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("55758641-50ed-4a93-bb39-a86c02e8782c"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("570f21d0-bdbe-4bbe-a452-02e3376f69d8"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("87ec7c5b-52ec-4dae-82e3-f6f08edd3a2e"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("c59d1722-cbb1-453b-9a29-4fbb246756cd"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f06c120a-c368-4568-9216-42f7c8a60d8c"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f19cb895-a764-44e0-90e8-00bacb84e134"));
}
});

TUTExamsLegacyCoreUIModel.staticEntities.mapErrors = {};
var getMapErrorsRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["0ae015e4-c953-4e33-aec0-91674d05cbf5"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_CantChangeParamsStaticMap", {
get: function () {
return getMapErrorsRecord("09d03a9d-1fe9-47a1-9c96-ae495fc2ea1c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_ToolTypeAlreadyExists", {
get: function () {
return getMapErrorsRecord("0e40e3aa-77f3-4a91-bf51-8c9dc1db4202");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedGettingShapeRadius", {
get: function () {
return getMapErrorsRecord("0ef2906b-3c8a-459e-9c6a-12cf051eda08");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletShapeLocations", {
get: function () {
return getMapErrorsRecord("0f420495-ba64-4ee9-9dd7-45e95c205b30");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedSetDirections", {
get: function () {
return getMapErrorsRecord("1032db4b-ea57-4b0c-b144-4cbfb5194cc2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidMapId", {
get: function () {
return getMapErrorsRecord("1449960e-06aa-44f2-9af6-1d84e688ab0c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedGeocodingMarker", {
get: function () {
return getMapErrorsRecord("191ac9c8-e152-47b1-b7e8-b9168a13437e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedNoPluginDirections", {
get: function () {
return getMapErrorsRecord("1d180614-c899-4db7-a0f1-c4a539fcaa51");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetStaticMap", {
get: function () {
return getMapErrorsRecord("20021e6b-0a48-4dd9-888d-1f14c04beb0f");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_APIKeyDiffersFromPlacesToMaps", {
get: function () {
return getMapErrorsRecord("320ab836-3535-4abe-9e87-c767f9732b81");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_InvalidApiKeyStaticMap", {
get: function () {
return getMapErrorsRecord("44814882-6e55-4bc8-b1df-103bad3b1f7d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedGettingCenterCoordinates", {
get: function () {
return getMapErrorsRecord("497452b5-bb33-4474-9dee-3055e40f065c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMarker", {
get: function () {
return getMapErrorsRecord("4a79db0e-742c-40ba-b922-d0e24f35fe48");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyShape", {
get: function () {
return getMapErrorsRecord("52e4db88-8138-4067-b7e7-24850be42b1d");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_UnsupportedEventShape", {
get: function () {
return getMapErrorsRecord("5b68fb2b-52b5-4027-a92c-897aca15e60b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_UnsupportedEventMap", {
get: function () {
return getMapErrorsRecord("64571e58-b584-45fc-9eb5-414e0f0b17ec");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_UnsupportedEventDrawingTools", {
get: function () {
return getMapErrorsRecord("74dd6710-acd4-4d7e-938a-a5abf23b2651");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMap", {
get: function () {
return getMapErrorsRecord("7ead0618-070c-41d2-9d20-abb934968c46");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidCircleShapeCenter", {
get: function () {
return getMapErrorsRecord("84c1783e-1289-404d-a86e-586cfe03a7d2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyDrawingTools", {
get: function () {
return getMapErrorsRecord("891e6401-f79b-4209-9347-dd09e4c4ba72");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyHeatmapLayer", {
get: function () {
return getMapErrorsRecord("8c3bd246-dde0-4413-ab91-4468070ca5c0");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarker", {
get: function () {
return getMapErrorsRecord("913849da-ebf6-477b-a2b7-1ee326a24381");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidPolylineShapeLocations", {
get: function () {
return getMapErrorsRecord("92aa1053-dd58-44d2-8767-2fa31ba2f80c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedRemoveDirections", {
get: function () {
return getMapErrorsRecord("a60723a0-5616-4929-8294-3b3c20873a06");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidRectangleShapeBounds", {
get: function () {
return getMapErrorsRecord("a74fc048-d9a5-48d5-a513-4bf617ff41ba");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedGeocodingShapeLocations", {
get: function () {
return getMapErrorsRecord("a95a6dfb-02de-4610-9e8b-eaaafe1ca86c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedGettingShapePath", {
get: function () {
return getMapErrorsRecord("ac51ab48-0161-4f1c-8e04-80efdf6c1843");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyTools", {
get: function () {
return getMapErrorsRecord("ae1a5069-a717-4c71-a510-e347c127349e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_PolylineUnsupported", {
get: function () {
return getMapErrorsRecord("aeb54663-f0c2-4a07-b65f-92240783e73e");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedGettingShapeCenter", {
get: function () {
return getMapErrorsRecord("b20b246b-b6a8-415f-adab-ca62b8710a61");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetMap", {
get: function () {
return getMapErrorsRecord("b44edea5-2098-4096-a014-d4579b537ec7");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidDrawingToolsPosition", {
get: function () {
return getMapErrorsRecord("bcf0e129-79f2-4fd2-82c8-139848806911");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_UnsupportedEventMarker", {
get: function () {
return getMapErrorsRecord("c2e353b8-dd23-48c7-8da1-307721b9b6db");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedGettingCircleShape", {
get: function () {
return getMapErrorsRecord("c2f749ad-3086-481f-a520-c21be80de363");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarkerClusterer", {
get: function () {
return getMapErrorsRecord("c86a9e24-d224-4a77-847c-a7f14924a3f8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_NoPluginDirectionsNeeded", {
get: function () {
return getMapErrorsRecord("ca7ac0b9-0a8b-4f7b-9759-87d11aa633df");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidPolygonShapeLocations", {
get: function () {
return getMapErrorsRecord("d56e484a-e250-4c5a-8038-b4050c8c9814");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_InvalidApiKeyMap", {
get: function () {
return getMapErrorsRecord("d5f27ed6-0558-44b6-a454-7104c5474008");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedContainsLocation", {
get: function () {
return getMapErrorsRecord("d6e4c3f1-6b33-4ed8-b303-f1e74688446b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedGeocodingMap", {
get: function () {
return getMapErrorsRecord("dc339eb1-ac70-4fb9-a179-cedd489b8f1b");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "cFG_InvalidTravelMode", {
get: function () {
return getMapErrorsRecord("e4c42d6f-8178-4c8f-8d4f-dd4012f32ee9");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMap", {
get: function () {
return getMapErrorsRecord("e94cc952-b1b6-494f-908c-5b137906a8d2");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyFileLayer", {
get: function () {
return getMapErrorsRecord("efdb6b11-c418-4b00-9702-24a49da08ead");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapErrors, "aPI_FailedLoadingPlugin", {
get: function () {
return getMapErrorsRecord("ff3ea0fa-1945-46cc-8ffe-7876054be930");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.type = {};
var getTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["321464c3-cb26-412f-b60a-1c7140dc8c1b"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.type, "hybrid", {
get: function () {
return getTypeRecord("029187c2-5fe2-46af-b8d4-a583c7061bdb");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.type, "terrain", {
get: function () {
return getTypeRecord("0c4b34b6-05e3-400a-a07b-1818beec8b52");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.type, "roadmap", {
get: function () {
return getTypeRecord("68adf7a2-8657-4eb8-8c70-15837272cb12");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.type, "satellite", {
get: function () {
return getTypeRecord("b07cb01e-0e29-4968-b114-868e9deaf9c1");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.mapEventTriggered = {};
var getMapEventTriggeredRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["7cf2a964-5ef8-4901-abe6-e84cb6616a62"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapEventTriggered, "dragEnd", {
get: function () {
return getMapEventTriggeredRecord("1e4fc6d3-f736-48a8-9794-fc52e3e05a2a");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapEventTriggered, "rightClick", {
get: function () {
return getMapEventTriggeredRecord("22a3a8eb-3d4e-47b8-af22-237ad82eb9d8");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapEventTriggered, "doubleClick", {
get: function () {
return getMapEventTriggeredRecord("291ac09a-41ad-4041-97d9-539e7ea4216c");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapEventTriggered, "click", {
get: function () {
return getMapEventTriggeredRecord("91de1dbe-ad22-465a-a1e2-bc4a2ab18cee");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.mapEventTriggered, "zoomChanged", {
get: function () {
return getMapEventTriggeredRecord("ae939fd4-46b8-41d3-b746-32369402d31b");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.style = {};
var getStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["a0adb83b-e208-4039-bc92-91d01b8e2081"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.style, "silver", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("039b612a-9671-4660-8713-4227c9c536e7"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.style, "standard", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("46a675cf-0150-4fd0-9ac7-2c96f73da970"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.style, "dark", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("517fb120-6b81-478c-a75c-4c917ffcca47"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.style, "night", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("a13ac6f1-5b2f-4000-adbe-dce29adec7bd"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.style, "aubergine", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("ef4b6628-727d-4fac-848e-5307eab5f9c2"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.style, "retro", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("f46e0309-8397-48b0-a0e2-7f92e1f7965f"));
}
});

TUTExamsLegacyCoreUIModel.staticEntities.markerEventTriggered = {};
var getMarkerEventTriggeredRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["cf5812b2-bdc9-4eb2-8240-09f6367c6ad6"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.markerEventTriggered, "doubleClick", {
get: function () {
return getMarkerEventTriggeredRecord("7ddaed11-1a2e-43e6-bc9c-a0b6043034e6");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.markerEventTriggered, "rightClick", {
get: function () {
return getMarkerEventTriggeredRecord("b87052cc-b00f-4924-9c30-e8b8b36f2062");
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.markerEventTriggered, "dragEnd", {
get: function () {
return getMarkerEventTriggeredRecord("f9e91264-1aba-4202-a05b-1662779d618e");
}
});

TUTExamsLegacyCoreUIModel.staticEntities.zoom = {};
var getZoomRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["e4acf07c-b38a-4871-a7c2-4017eaabe95c"][record];
};
Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom13", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("0922ce32-4035-4463-a75a-d3f8b54f4f94"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom9", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("11f603b5-040e-4f8a-b083-79c5267c71b6"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom10_City", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("15bacab1-f45a-4fe2-ad76-baa770fdfeff"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom3", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("2bf601f1-4db3-4c49-9845-b932615a32f1"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom15_Streets", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("5499149d-d268-4120-a938-8cdad4846c48"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom20_Buildings", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("7a19665e-df15-4f8d-b5c9-d0727ee0c621"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom19", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("833f6b68-54dd-4abe-8610-4603e82b5426"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom7", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("8dbf8113-5ad5-416b-a567-5bc6d084be7a"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom4", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("8f578193-3014-4472-b852-0c41c470ce8e"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom16", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("9aec5bf4-d8cc-46cb-90ec-4f4cc0e91468"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom5_Continent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("9b1873f3-33f4-4346-8e3c-ed2023f0bf27"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom18", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("a73ab79e-3049-4e75-b45e-2a6bf0cd2341"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom11", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("b9786be0-7e13-421d-bfb5-2846dd6384e4"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom1_World", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("bf7ff033-06f7-4cc8-a42d-26349c212d9a"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom8", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("bfcf13bd-f6e4-495f-a514-a3f608fc8092"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom2", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("c617d3e9-ebcb-4dd3-bfa0-b7cf50a94489"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom6", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("d0f47b1a-0256-417c-8c9a-25ffd0e62bc2"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom17", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("e1a365bd-624a-4125-b484-afd05d80920b"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom12", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("ebab583b-bb56-4179-827a-2cb7c814e48d"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "zoom14", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("f31f4a8c-76d5-4e1e-872e-89e885e7999f"));
}
});

Object.defineProperty(TUTExamsLegacyCoreUIModel.staticEntities.zoom, "auto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("fb39ba58-7d90-4803-802f-b11efd3cbcc5"));
}
});

});
