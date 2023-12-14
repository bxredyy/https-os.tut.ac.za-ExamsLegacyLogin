define("TUTScreenTimer.controller", ["exports", "OutSystems/ClientRuntime/Main", "TUTScreenTimer.model"], function (exports, OutSystems, TUTScreenTimerModel) {
    var OS = OutSystems.Internal;
    var TUTScreenTimerController = exports;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    }
    Controller.prototype.clientActionProxies = {};
    Controller.prototype.roles = {};
    Controller.prototype.defaultTimeout = 10;
    Controller.prototype.getDefaultTimeout = function () {
    return TUTScreenTimerController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseModuleController);
    TUTScreenTimerController.default = new Controller(null, "TUTScreenTimer");
    });
    