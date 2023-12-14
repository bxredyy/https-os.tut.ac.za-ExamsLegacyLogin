define("TUTExamsLegacyPortal_CS.model$StudentBioDetail_RecordRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var StudentBioDetail_RecordRec = (function (_super) {
    __extends(StudentBioDetail_RecordRec, _super);
    function StudentBioDetail_RecordRec(defaults) {
    _super.apply(this, arguments);
    }
    StudentBioDetail_RecordRec.attributesToDeclare = function () {
    return [
    this.attr("StdNum", "stdNumAttr", "stdnum", false, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true), 
    this.attr("StdTitle", "stdTitleAttr", "StdTitle", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("StdInitials", "stdInitialsAttr", "StdInitials", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("StdSurname", "stdSurnameAttr", "StdSurname", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("StdNames", "stdNamesAttr", "StdNames", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("StdEmail", "stdEmailAttr", "StdEmail", false, false, OS.Types.Email, function () {
    return "";
    }, true), 
    this.attr("StdCellphone", "stdCellphoneAttr", "StdCellphone", false, false, OS.Types.Text, function () {
    return "";
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    StudentBioDetail_RecordRec.init();
    return StudentBioDetail_RecordRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.StudentBioDetail_RecordRec = StudentBioDetail_RecordRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$ERSelectedReport_recordRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var ERSelectedReport_recordRec = (function (_super) {
    __extends(ERSelectedReport_recordRec, _super);
    function ERSelectedReport_recordRec(defaults) {
    _super.apply(this, arguments);
    }
    ERSelectedReport_recordRec.attributesToDeclare = function () {
    return [
    this.attr("ReportRunId", "reportRunIdAttr", "ReportRunId", false, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true), 
    this.attr("ExamCycleId", "examCycleIdAttr", "ExamCycleId", false, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true), 
    this.attr("CaptureDate", "captureDateAttr", "CaptureDate", true, false, OS.Types.DateTime, function () {
    return OS.DataTypes.DateTime.defaultValue;
    }, true), 
    this.attr("CycleName", "cycleNameAttr", "CycleName", true, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("ReportIsLive", "reportIsLiveAttr", "ReportIsLive", true, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("CycleIsLive", "cycleIsLiveAttr", "CycleIsLive", true, false, OS.Types.Boolean, function () {
    return false;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    ERSelectedReport_recordRec.init();
    return ERSelectedReport_recordRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.ERSelectedReport_recordRec = ERSelectedReport_recordRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$TT_prt_SessionRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var TT_prt_SessionRec = (function (_super) {
    __extends(TT_prt_SessionRec, _super);
    function TT_prt_SessionRec(defaults) {
    _super.apply(this, arguments);
    }
    TT_prt_SessionRec.attributesToDeclare = function () {
    return [
    this.attr("SubjCode", "subjCodeAttr", "SubjCode", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("SubjDescript", "subjDescriptAttr", "SubjDescript", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("SubjType", "subjTypeAttr", "SubjType", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperNum", "paperNumAttr", "PaperNum", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("PaperDescript", "paperDescriptAttr", "PaperDescript", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperDuration", "paperDurationAttr", "PaperDuration", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("ExamGroup", "examGroupAttr", "ExamGroup", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperDate", "paperDateAttr", "PaperDate", false, false, OS.Types.Date, function () {
    return OS.DataTypes.DateTime.defaultValue;
    }, true), 
    this.attr("PaperTime", "paperTimeAttr", "PaperTime", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Venue", "venueAttr", "Venue", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("FloorNum", "floorNumAttr", "FloorNum", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("RoomNum", "roomNumAttr", "RoomNum", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Predicate", "predicateAttr", "Predicate", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("HasAdmission", "hasAdmissionAttr", "HasAdmission", false, false, OS.Types.Boolean, function () {
    return false;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    TT_prt_SessionRec.init();
    return TT_prt_SessionRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.TT_prt_SessionRec = TT_prt_SessionRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$GetStudentBioInfo_InRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var GetStudentBioInfo_InRec = (function (_super) {
    __extends(GetStudentBioInfo_InRec, _super);
    function GetStudentBioInfo_InRec(defaults) {
    _super.apply(this, arguments);
    }
    GetStudentBioInfo_InRec.attributesToDeclare = function () {
    return [
    this.attr("InStudentNumber", "inStudentNumberAttr", "InStudentNumber", false, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    GetStudentBioInfo_InRec.fromStructure = function (str) {
    return new GetStudentBioInfo_InRec(new GetStudentBioInfo_InRec.RecordClass({
    inStudentNumberAttr: OS.DataTypes.ImmutableBase.getData(str)
    }));
    };
    GetStudentBioInfo_InRec.init();
    return GetStudentBioInfo_InRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.GetStudentBioInfo_InRec = GetStudentBioInfo_InRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$TimteTableBio_recordRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var TimteTableBio_recordRec = (function (_super) {
    __extends(TimteTableBio_recordRec, _super);
    function TimteTableBio_recordRec(defaults) {
    _super.apply(this, arguments);
    }
    TimteTableBio_recordRec.attributesToDeclare = function () {
    return [
    this.attr("StdNum", "stdNumAttr", "StdNum", false, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true), 
    this.attr("SurnameInitials", "surnameInitialsAttr", "SurnameInitials", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("QualDescription", "qualDescriptionAttr", "QualDescription", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("OfferingType", "offeringTypeAttr", "OfferingType", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("ExaminationCentre", "examinationCentreAttr", "ExaminationCentre", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("QualificationCode", "qualificationCodeAttr", "QualificationCode", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("AddrLine1", "addrLine1Attr", "AddrLine1", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("AddrLine2", "addrLine2Attr", "AddrLine2", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("AddrLine3", "addrLine3Attr", "AddrLine3", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("AddrLine4", "addrLine4Attr", "AddrLine4", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PostalCode", "postalCodeAttr", "PostalCode", false, false, OS.Types.Text, function () {
    return "";
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    TimteTableBio_recordRec.init();
    return TimteTableBio_recordRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.TimteTableBio_recordRec = TimteTableBio_recordRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$ERResults_prt_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var ERResults_prt_ResultRec = (function (_super) {
    __extends(ERResults_prt_ResultRec, _super);
    function ERResults_prt_ResultRec(defaults) {
    _super.apply(this, arguments);
    }
    ERResults_prt_ResultRec.attributesToDeclare = function () {
    return [
    this.attr("Subject", "subjectAttr", "Subject", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("YearMark", "yearMarkAttr", "YearMark", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("HasAdmission", "hasAdmissionAttr", "HasAdmission", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("PaperMark", "paperMarkAttr", "PaperMark", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("FinalMark", "finalMarkAttr", "FinalMark", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Outcome", "outcomeAttr", "Outcome", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("FinBlockHeader", "finBlockHeaderAttr", "FinBlockHeader", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("FinBlockMessage", "finBlockMessageAttr", "FinBlockMessage", true, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Amount", "amountAttr", "Amount", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperDate", "paperDateAttr", "PaperDate", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperTime", "paperTimeAttr", "PaperTime", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperNum", "paperNumAttr", "PaperNum", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperDescript", "paperDescriptAttr", "PaperDescript", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("QualifySupp", "qualifySuppAttr", "QualifySupp", false, false, OS.Types.Boolean, function () {
    return false;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    ERResults_prt_ResultRec.init();
    return ERResults_prt_ResultRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultRec = ERResults_prt_ResultRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$TT_prt_SessionList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyPortal_CS.model$TT_prt_SessionRec"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var TT_prt_SessionList = (function (_super) {
    __extends(TT_prt_SessionList, _super);
    function TT_prt_SessionList(defaults) {
    _super.apply(this, arguments);
    }
    TT_prt_SessionList.itemType = TUTExamsLegacyPortal_CSModel.TT_prt_SessionRec;
    return TT_prt_SessionList;
    })(OS.DataTypes.GenericRecordList);
    TUTExamsLegacyPortal_CSModel.TT_prt_SessionList = TT_prt_SessionList;
    
    });
    define("TUTExamsLegacyPortal_CS.model$TT_prt_ExamTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyPortal_CS.model$TT_prt_SessionList"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var TT_prt_ExamTypeRec = (function (_super) {
    __extends(TT_prt_ExamTypeRec, _super);
    function TT_prt_ExamTypeRec(defaults) {
    _super.apply(this, arguments);
    }
    TT_prt_ExamTypeRec.attributesToDeclare = function () {
    return [
    this.attr("ExamType", "examTypeAttr", "ExamType", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Message", "messageAttr", "Message", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Sessions", "sessionsAttr", "Sessions", false, false, OS.Types.RecordList, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.TT_prt_SessionList());
    }, true, TUTExamsLegacyPortal_CSModel.TT_prt_SessionList)
    ].concat(_super.attributesToDeclare.call(this));
    };
    TT_prt_ExamTypeRec.init();
    return TT_prt_ExamTypeRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.TT_prt_ExamTypeRec = TT_prt_ExamTypeRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$ERResults_prt_ResultList", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyPortal_CS.model$ERResults_prt_ResultRec"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var ERResults_prt_ResultList = (function (_super) {
    __extends(ERResults_prt_ResultList, _super);
    function ERResults_prt_ResultList(defaults) {
    _super.apply(this, arguments);
    }
    ERResults_prt_ResultList.itemType = TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultRec;
    return ERResults_prt_ResultList;
    })(OS.DataTypes.GenericRecordList);
    TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultList = ERResults_prt_ResultList;
    
    });
    define("TUTExamsLegacyPortal_CS.model$ERResult_prt_ExamTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model", "TUTExamsLegacyPortal_CS.model$ERResults_prt_ResultList"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var ERResult_prt_ExamTypeRec = (function (_super) {
    __extends(ERResult_prt_ExamTypeRec, _super);
    function ERResult_prt_ExamTypeRec(defaults) {
    _super.apply(this, arguments);
    }
    ERResult_prt_ExamTypeRec.attributesToDeclare = function () {
    return [
    this.attr("ExamType", "examTypeAttr", "ExamType", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Message", "messageAttr", "Message", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("Results", "resultsAttr", "Results", false, false, OS.Types.RecordList, function () {
    return OS.DataTypes.ImmutableBase.getData(new TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultList());
    }, true, TUTExamsLegacyPortal_CSModel.ERResults_prt_ResultList)
    ].concat(_super.attributesToDeclare.call(this));
    };
    ERResult_prt_ExamTypeRec.init();
    return ERResult_prt_ExamTypeRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.ERResult_prt_ExamTypeRec = ERResult_prt_ExamTypeRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$ERResults_rawRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var ERResults_rawRec = (function (_super) {
    __extends(ERResults_rawRec, _super);
    function ERResults_rawRec(defaults) {
    _super.apply(this, arguments);
    }
    ERResults_rawRec.attributesToDeclare = function () {
    return [
    this.attr("StudentNumber", "studentNumberAttr", "StudentNumber", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true), 
    this.attr("SubjectCode", "subjectCodeAttr", "SubjectCode", true, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("ExamYear", "examYearAttr", "ExamYear", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("ExamMonth", "examMonthAttr", "ExamMonth", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("AttendCode", "attendCodeAttr", "AttendCode", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("ExamType", "examTypeAttr", "ExamType", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("YearMark", "yearMarkAttr", "YearMark", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("HasAdmission", "hasAdmissionAttr", "HasAdmission", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("PaperMark", "paperMarkAttr", "PaperMark", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("FinalMark", "finalMarkAttr", "FinalMark", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("ReasonCode", "reasonCodeAttr", "ReasonCode", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("ReasonDescript", "reasonDescriptAttr", "ReasonDescript", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("QualifySupp", "qualifySuppAttr", "QualifySupp", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("FinBlockCode", "finBlockCodeAttr", "FinBlockCode", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("FinBlockHeader", "finBlockHeaderAttr", "FinBlockHeader", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("FinBlockMessage", "finBlockMessageAttr", "FinBlockMessage", true, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("BlockResult", "blockResultAttr", "BlockResult", true, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("Amount", "amountAttr", "Amount", false, false, OS.Types.Decimal, function () {
    return OS.DataTypes.Decimal.defaultValue;
    }, true), 
    this.attr("PaperNum", "paperNumAttr", "PaperNum", false, false, OS.Types.Integer, function () {
    return 0;
    }, true), 
    this.attr("PaperDate", "paperDateAttr", "PaperDate", false, false, OS.Types.Date, function () {
    return OS.DataTypes.DateTime.defaultValue;
    }, true), 
    this.attr("PaperTime", "paperTimeAttr", "PaperTime", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("PaperDescript", "paperDescriptAttr", "PaperDescript", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("SubjectType", "subjectTypeAttr", "SubjectType", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("IsExamSubject", "isExamSubjectAttr", "IsExamSubject", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("IsExempted", "isExemptedAttr", "IsExempted", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("BlockYearMark", "blockYearMarkAttr", "BlockYearMark", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("BlockPaperMark", "blockPaperMarkAttr", "BlockPaperMark", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("BlockFinalMark", "blockFinalMarkAttr", "BlockFinalMark", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("InExamCycleCriteria", "inExamCycleCriteriaAttr", "InExamCycleCriteria", false, false, OS.Types.Boolean, function () {
    return false;
    }, true), 
    this.attr("SuppFirstPupDte", "suppFirstPupDteAttr", "SuppFirstPupDte", false, false, OS.Types.DateTime, function () {
    return OS.DataTypes.DateTime.defaultValue;
    }, true), 
    this.attr("FinalPupDte", "finalPupDteAttr", "FinalPupDte", false, false, OS.Types.DateTime, function () {
    return OS.DataTypes.DateTime.defaultValue;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    ERResults_rawRec.init();
    return ERResults_rawRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.ERResults_rawRec = ERResults_rawRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model$ReportRun_recordRec", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyPortal_CS.model"], function (exports, OutSystems, TUTExamsLegacyPortal_CSModel) {
    var OS = OutSystems.Internal;
    var ReportRun_recordRec = (function (_super) {
    __extends(ReportRun_recordRec, _super);
    function ReportRun_recordRec(defaults) {
    _super.apply(this, arguments);
    }
    ReportRun_recordRec.attributesToDeclare = function () {
    return [
    this.attr("ECId", "eCIdAttr", "ECId", false, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, true), 
    this.attr("ExamCycle", "examCycleAttr", "ExamCycle", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("GUID", "gUIDAttr", "GUID", false, false, OS.Types.Text, function () {
    return "";
    }, true), 
    this.attr("RRId", "rRIdAttr", "RRId", false, false, OS.Types.Text, function () {
    return "";
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    ReportRun_recordRec.init();
    return ReportRun_recordRec;
    })(OS.DataTypes.GenericRecord);
    TUTExamsLegacyPortal_CSModel.ReportRun_recordRec = ReportRun_recordRec;
    
    });
    define("TUTExamsLegacyPortal_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
    var OS = OutSystems.Internal;
    var TUTExamsLegacyPortal_CSModel = exports;
    });
    