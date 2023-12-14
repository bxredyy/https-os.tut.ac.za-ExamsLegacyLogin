define("TUTExamsLegacyCoreUI.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
    var OS = OutSystems.Internal;
    var ClientVariables = (function (_super) {
    var clientVarsService;
    function ClientVariables() {
    clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
    }
    ClientVariables.prototype.getLastURL = function () {
    return clientVarsService.getVariable("LastURL", "TUTExamsLegacyCoreUI", OS.Types.Text);
    };
    ClientVariables.prototype.setLastURL = function (value) {
    return clientVarsService.setVariable("LastURL", "TUTExamsLegacyCoreUI", OS.Types.Text, value);
    };
    ClientVariables.prototype.getUsername = function () {
    return clientVarsService.getVariable("Username", "TUTExamsLegacyCoreUI", OS.Types.Text);
    };
    ClientVariables.prototype.setUsername = function (value) {
    return clientVarsService.setVariable("Username", "TUTExamsLegacyCoreUI", OS.Types.Text, value);
    };
    ClientVariables.prototype.serialize = function () {
    return {
    LastURL: OS.DataConversion.ServerDataConverter.to(this.getLastURL(), OS.Types.Text),
    Username: OS.DataConversion.ServerDataConverter.to(this.getUsername(), OS.Types.Text)
    };
    };
    return ClientVariables;
    })();
    return new ClientVariables();
    });
    