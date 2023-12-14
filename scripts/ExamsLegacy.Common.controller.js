define("ExamsLegacy.Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.clientVariables", "ExamsLegacy.controller$ServerAction.User_GetUnifiedLoginUrl"], function (exports, OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyClientVariables) {
    var OS = OutSystems.Internal;
    var ExamsLegacy_CommonController = exports;
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
    var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
    var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
    var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
    var user_GetUnifiedLoginUrlVar = new OS.DataTypes.VariableHolder();
    OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
    if(OS.ErrorHandling.ignoreError(ex, callContext)) {
    return OS.ErrorHandling.IGNORED_ERROR_RESULT;
    }
    
    return OS.Flow.tryCatch(function () {
    OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
    // Handle Error: SecurityException
    if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
    securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
    return OS.Flow.executeAsyncFlow(function () {
    return OS.Flow.executeSequence(function () {
    if((((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
    // Destination: /ExamsLegacy/InvalidPermissions
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    } else {
    // Execute Action: User_GetUnifiedLoginUrl
    return controller.user_GetUnifiedLoginUrl$ServerAction(OS.BuiltinFunctions.getBookmarkableURL(), "", callContext).then(function (value) {
    user_GetUnifiedLoginUrlVar.value = value;
    }).then(function () {
    // Found Unified Login URL
    if((((user_GetUnifiedLoginUrlVar.value.urlOut) !== ("")))) {
    // Destination: /ExamsLegacy/
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(user_GetUnifiedLoginUrlVar.value.urlOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    } else {
    // LastRequest
    // LastURL = GetBookmarkableURL
    ExamsLegacyClientVariables.setLastURL(OS.BuiltinFunctions.getBookmarkableURL());
    // Destination: /ExamsLegacy/Login
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    }
    
    });
    }
    
    });
    });
    }
    
    // Handle Error: CommunicationException
    if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
    OS.Logger.error(null, ex);
    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
    return OS.Flow.executeAsyncFlow(function () {
    OS.FeedbackMessageService.showFeedbackMessage(communicationExceptionVar.value.exceptionMessageAttr, /*Error*/ 3);
    return OS.Flow.returnAsync();
    
    });
    }
    
    // Handle Error: AllExceptions
    if(!(OS.Exceptions.isSystem(ex))) {
    OS.Logger.error(null, ex);
    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
    return OS.Flow.executeAsyncFlow(function () {
    OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
    return OS.Flow.returnAsync();
    
    });
    }
    
    throw ex;
    }, function (unhandledEx) {
    OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
    if(!(OS.ErrorHandling.ignoreError(unhandledEx, callContext))) {
    OS.ErrorHandling.handleError(unhandledEx, callContext);
    return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;
    
    }
    
    return OS.ErrorHandling.IGNORED_ERROR_RESULT;
    
    });
    
    
    };
    Controller.prototype.user_GetUnifiedLoginUrl$ServerAction = function (originalUrlIn, toolNameIn, callContext) {
    var controller = this.controller;
    var inputs = {
    OriginalUrl: OS.DataConversion.ServerDataConverter.to(originalUrlIn, OS.Types.Text),
    ToolName: OS.DataConversion.ServerDataConverter.to(toolNameIn, OS.Types.Text)
    };
    return controller.callServerAction("User_GetUnifiedLoginUrl", "screenservices/ExamsLegacy/ActionUser_GetUnifiedLoginUrl", "cttvMQpQoQ_vXqICRkdvyg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
    var executeServerActionResult = new (controller.constructor.getVariableGroupType("ExamsLegacy.Common$rssespaceusers_ActionUser_GetUnifiedLoginUrl"))();
    executeServerActionResult.urlOut = OS.DataConversion.ServerDataConverter.from(outputs.Url, OS.Types.Text);
    return executeServerActionResult;
    });
    };
    Controller.registerVariableGroupType("ExamsLegacy.Common$rssespaceusers_ActionUser_GetUnifiedLoginUrl", [{
    name: "Url",
    attrName: "urlOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    return Controller;
    })(OS.Controller.BaseController);
    ExamsLegacy_CommonController.default = new Controller();
    });
    
    