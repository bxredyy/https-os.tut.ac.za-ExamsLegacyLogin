define("ExamsLegacy.MainFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.Common.controller", "ExamsLegacy.clientVariables"], function (exports, OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacy_CommonController, ExamsLegacyClientVariables) {
    var OS = OutSystems.Internal;
    var ExamsLegacy_MainFlowController = exports;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    }
    Controller.prototype.getDefaultTimeout = function () {
    return ExamsLegacyController.default.defaultTimeout;
    };
    Controller.prototype.handleError = function (ex, callContext) {
    var controller = this.controller;
    OS.Logger.trace("MainFlow", OS.Exceptions.getMessage(ex), ex.name);
    return ExamsLegacy_CommonController.default.handleError(ex, callContext);
    
    
    };
    return Controller;
    })(OS.Controller.BaseController);
    ExamsLegacy_MainFlowController.default = new Controller();
    });
    
    