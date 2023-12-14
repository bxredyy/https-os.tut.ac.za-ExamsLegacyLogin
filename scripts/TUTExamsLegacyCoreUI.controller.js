define("TUTExamsLegacyCoreUI.controller$ServerAction.User_GetUnifiedLoginUrl", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model", "TUTExamsLegacyCoreUI.controller"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel, TUTExamsLegacyCoreUIController) {
    var OS = OutSystems.Internal;
    TUTExamsLegacyCoreUIController.default.user_GetUnifiedLoginUrl$ServerAction = function (originalUrlIn, toolNameIn, callContext) {
    var controller = this.controller;
    var inputs = {
    OriginalUrl: OS.DataConversion.ServerDataConverter.to(originalUrlIn, OS.Types.Text),
    ToolName: OS.DataConversion.ServerDataConverter.to(toolNameIn, OS.Types.Text)
    };
    return controller.callServerAction("User_GetUnifiedLoginUrl", "screenservices/TUTExamsLegacyCoreUI/ActionUser_GetUnifiedLoginUrl", "cttvMQpQoQ_vXqICRkdvyg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
    var executeServerActionResult = new (controller.constructor.getVariableGroupType("TUTExamsLegacyCoreUI$rssespaceusers_ActionUser_GetUnifiedLoginUrl"))();
    executeServerActionResult.urlOut = OS.DataConversion.ServerDataConverter.from(outputs.Url, OS.Types.Text);
    return executeServerActionResult;
    });
    };
    TUTExamsLegacyCoreUIController.default.constructor.registerVariableGroupType("TUTExamsLegacyCoreUI$rssespaceusers_ActionUser_GetUnifiedLoginUrl", [{
    name: "Url",
    attrName: "urlOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    });
    define("TUTExamsLegacyCoreUI.controller", ["exports", "OutSystems/ClientRuntime/Main", "TUTExamsLegacyCoreUI.model"], function (exports, OutSystems, TUTExamsLegacyCoreUIModel) {
    var OS = OutSystems.Internal;
    var TUTExamsLegacyCoreUIController = exports;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    }
    Controller.prototype.clientActionProxies = {};
    Controller.prototype.roles = {};
    Controller.prototype.defaultTimeout = 10;
    Controller.prototype.getDefaultTimeout = function () {
    return TUTExamsLegacyCoreUIController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseModuleController);
    TUTExamsLegacyCoreUIController.default = new Controller(null, "TUTExamsLegacyCoreUI");
    });
    