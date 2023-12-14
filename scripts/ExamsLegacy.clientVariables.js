define("ExamsLegacy.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
    var OS = OutSystems.Internal;
    var ClientVariables = (function (_super) {
    var clientVarsService;
    function ClientVariables() {
    clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
    }
    ClientVariables.prototype.getLastURL = function () {
    return clientVarsService.getVariable("LastURL", "ExamsLegacy", OS.Types.Text);
    };
    ClientVariables.prototype.setLastURL = function (value) {
    return clientVarsService.setVariable("LastURL", "ExamsLegacy", OS.Types.Text, value);
    };
    ClientVariables.prototype.getAdmMode = function () {
    return clientVarsService.getVariable("AdmMode", "ExamsLegacy", OS.Types.Boolean, false);
    };
    ClientVariables.prototype.setAdmMode = function (value) {
    return clientVarsService.setVariable("AdmMode", "ExamsLegacy", OS.Types.Boolean, value);
    };
    ClientVariables.prototype.getAdmType = function () {
    return clientVarsService.getVariable("AdmType", "ExamsLegacy", OS.Types.Text);
    };
    ClientVariables.prototype.setAdmType = function (value) {
    return clientVarsService.setVariable("AdmType", "ExamsLegacy", OS.Types.Text, value);
    };
    ClientVariables.prototype.getPlatform = function () {
    return clientVarsService.getVariable("Platform", "ExamsLegacy", OS.Types.Text);
    };
    ClientVariables.prototype.setPlatform = function (value) {
    return clientVarsService.setVariable("Platform", "ExamsLegacy", OS.Types.Text, value);
    };
    ClientVariables.prototype.getUsername = function () {
    return clientVarsService.getVariable("Username", "ExamsLegacy", OS.Types.Text);
    };
    ClientVariables.prototype.setUsername = function (value) {
    return clientVarsService.setVariable("Username", "ExamsLegacy", OS.Types.Text, value);
    };
    ClientVariables.prototype.getAdmTestCaching = function () {
    return clientVarsService.getVariable("AdmTestCaching", "ExamsLegacy", OS.Types.Boolean);
    };
    ClientVariables.prototype.setAdmTestCaching = function (value) {
    return clientVarsService.setVariable("AdmTestCaching", "ExamsLegacy", OS.Types.Boolean, value);
    };
    ClientVariables.prototype.getAdmRefreshTimeStamp = function () {
    return clientVarsService.getVariable("AdmRefreshTimeStamp", "ExamsLegacy", OS.Types.DateTime);
    };
    ClientVariables.prototype.setAdmRefreshTimeStamp = function (value) {
    return clientVarsService.setVariable("AdmRefreshTimeStamp", "ExamsLegacy", OS.Types.DateTime, value);
    };
    ClientVariables.prototype.getAdmECGUID = function () {
    return clientVarsService.getVariable("AdmECGUID", "ExamsLegacy", OS.Types.Text);
    };
    ClientVariables.prototype.setAdmECGUID = function (value) {
    return clientVarsService.setVariable("AdmECGUID", "ExamsLegacy", OS.Types.Text, value);
    };
    ClientVariables.prototype.getHaveMultipleExams = function () {
    return clientVarsService.getVariable("HaveMultipleExams", "ExamsLegacy", OS.Types.Boolean, false);
    };
    ClientVariables.prototype.setHaveMultipleExams = function (value) {
    return clientVarsService.setVariable("HaveMultipleExams", "ExamsLegacy", OS.Types.Boolean, value);
    };
    ClientVariables.prototype.getAdmRRId = function () {
    return clientVarsService.getVariable("AdmRRId", "ExamsLegacy", OS.Types.LongInteger);
    };
    ClientVariables.prototype.setAdmRRId = function (value) {
    return clientVarsService.setVariable("AdmRRId", "ExamsLegacy", OS.Types.LongInteger, value);
    };
    ClientVariables.prototype.getAdmStudentNumber = function () {
    return clientVarsService.getVariable("AdmStudentNumber", "ExamsLegacy", OS.Types.LongInteger);
    };
    ClientVariables.prototype.setAdmStudentNumber = function (value) {
    return clientVarsService.setVariable("AdmStudentNumber", "ExamsLegacy", OS.Types.LongInteger, value);
    };
    ClientVariables.prototype.getECGUID = function () {
    return clientVarsService.getVariable("ECGUID", "ExamsLegacy", OS.Types.Text);
    };
    ClientVariables.prototype.setECGUID = function (value) {
    return clientVarsService.setVariable("ECGUID", "ExamsLegacy", OS.Types.Text, value);
    };
    ClientVariables.prototype.getAdmSBStatus = function () {
    return clientVarsService.getVariable("AdmSBStatus", "ExamsLegacy", OS.Types.Boolean);
    };
    ClientVariables.prototype.setAdmSBStatus = function (value) {
    return clientVarsService.setVariable("AdmSBStatus", "ExamsLegacy", OS.Types.Boolean, value);
    };
    ClientVariables.prototype.serialize = function () {
    return {
    LastURL: OS.DataConversion.ServerDataConverter.to(this.getLastURL(), OS.Types.Text),
    AdmMode: OS.DataConversion.ServerDataConverter.to(this.getAdmMode(), OS.Types.Boolean),
    AdmType: OS.DataConversion.ServerDataConverter.to(this.getAdmType(), OS.Types.Text),
    Platform: OS.DataConversion.ServerDataConverter.to(this.getPlatform(), OS.Types.Text),
    Username: OS.DataConversion.ServerDataConverter.to(this.getUsername(), OS.Types.Text),
    AdmTestCaching: OS.DataConversion.ServerDataConverter.to(this.getAdmTestCaching(), OS.Types.Boolean),
    AdmRefreshTimeStamp: OS.DataConversion.ServerDataConverter.to(this.getAdmRefreshTimeStamp(), OS.Types.DateTime),
    AdmECGUID: OS.DataConversion.ServerDataConverter.to(this.getAdmECGUID(), OS.Types.Text),
    HaveMultipleExams: OS.DataConversion.ServerDataConverter.to(this.getHaveMultipleExams(), OS.Types.Boolean),
    AdmRRId: OS.DataConversion.ServerDataConverter.to(this.getAdmRRId(), OS.Types.LongInteger),
    AdmStudentNumber: OS.DataConversion.ServerDataConverter.to(this.getAdmStudentNumber(), OS.Types.LongInteger),
    ECGUID: OS.DataConversion.ServerDataConverter.to(this.getECGUID(), OS.Types.Text),
    AdmSBStatus: OS.DataConversion.ServerDataConverter.to(this.getAdmSBStatus(), OS.Types.Boolean)
    };
    };
    return ClientVariables;
    })();
    return new ClientVariables();
    });
    