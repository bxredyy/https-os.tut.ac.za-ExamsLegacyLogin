define("ExamsLegacy.Common.UserInfo.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model"], function (OutSystems, ExamsLegacyModel) {
    var OS = OutSystems.Internal;
    
    var GetUserNameFromServerDataActRec = (function (_super) {
    __extends(GetUserNameFromServerDataActRec, _super);
    function GetUserNameFromServerDataActRec(defaults) {
    _super.apply(this, arguments);
    }
    GetUserNameFromServerDataActRec.attributesToDeclare = function () {
    return [
    this.attr("UserName", "userNameOut", "UserName", true, false, OS.Types.Text, function () {
    return "";
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
    };
    GetUserNameFromServerDataActRec.fromStructure = function (str) {
    return new GetUserNameFromServerDataActRec(new GetUserNameFromServerDataActRec.RecordClass({
    userNameOut: OS.DataTypes.ImmutableBase.getData(str)
    }));
    };
    GetUserNameFromServerDataActRec.init();
    return GetUserNameFromServerDataActRec;
    })(OS.Model.DataSourceRecord);
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("GetUserNameFromServer", "getUserNameFromServerDataAct", "getUserNameFromServerDataAct", true, true, OS.Types.Record, function () {
    return OS.DataTypes.ImmutableBase.getData(new GetUserNameFromServerDataActRec());
    }, true, GetUserNameFromServerDataActRec)
    ].concat(_super.attributesToDeclare.call(this));
    };
    VariablesRecord.fromStructure = function (str) {
    return new VariablesRecord(new VariablesRecord.RecordClass({
    getUserNameFromServerDataAct: OS.DataTypes.ImmutableBase.getData(str)
    }));
    };
    VariablesRecord.init();
    return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function (_super) {
    __extends(WidgetsRecord, _super);
    function WidgetsRecord() {
    _super.apply(this, arguments);
    }
    WidgetsRecord.getWidgetsType = function () {
    return {};
    };
    
    return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function (_super) {
    __extends(Model, _super);
    function Model() {
    _super.apply(this, arguments);
    }
    Model.getVariablesRecordConstructor = function () {
    return VariablesRecord;
    };
    Model.getWidgetsRecordConstructor = function () {
    return WidgetsRecord;
    };
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    return false;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Common.UserInfo");
    });
    define("ExamsLegacy.Common.UserInfo.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.Common.UserInfo.mvc$model", "ExamsLegacy.Common.UserInfo.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_Common_UserInfo_mvc_model, ExamsLegacy_Common_UserInfo_mvc_controller, ExamsLegacyClientVariables, OSWidgets) {
        var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    
    
        var View = (function (_super) {
            __extends(View,_super);
            function View() {
                try {
                    this.initialize.apply(this, arguments);
                } catch (error) {
                    View.handleError(error);
                    throw error;
                }
            }
            View.prototype.initialize = function() {
                _super.apply(this, arguments);
            };
            View.displayName = "Common.UserInfo";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_Common_UserInfo_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_Common_UserInfo_mvc_controller;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "title", {
                get: function () {
                    return "";
                },
                enumerable: true,
                configurable: true
            });
            View.prototype.internalRender = function() {
                var model = this.model;
                var controller = this.controller;
                var idService = this.idService;
                var validationService = controller.validationService;
                var widgetsRecordProvider = this.widgetsRecordProvider;
                var callContext = controller.callContext();
                var $if = View.ifWidget;
                var $text = View.textWidget;
                var asPrimitiveValue = View.asPrimitiveValue;
                var getTranslation = View.getTranslation;
                var _this = this;
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "user-info",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "0"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())), false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Image, {
    extendedProperties: {
    alt: "",
    style: "height: 24px;"
    },
    gridProperties: {
    width: "24px"
    },
    image: OS.Navigation.VersionedURL.getVersionedUrl("img/ExamsLegacy.User.png"),
    style: "img-circle",
    type: /*Static*/ 0,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "margin-left-s",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Expression, {
    value: ExamsLegacyClientVariables.getUsername(),
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "margin-left-s",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    classes: "OSFillParent"
    },
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.clientLogout$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Icon, {
    icon: "sign-out",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "Icon3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Text, {
    style: "margin-left-s wcag-hide-text",
    text: ["Log out"],
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })))];
    }, function () {
    return [React.createElement(OSWidgets.Link, {
    enabled: true,
    gridProperties: {
    classes: "OSFillParent"
    },
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.clientLogin$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Icon, {
    icon: "sign-in",
    iconSize: /*FontSize*/ 0,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    name: "Icon4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.Text, {
    style: "margin-left-s",
    text: ["Login"],
    _idProps: {
    service: idService,
    uuid: "11"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))];
    })));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.Common.UserInfo.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "ExamsLegacy.Common.UserInfo.mvc$controller.OnInitialize.GetUsernameJS"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables, ExamsLegacy_Common_UserInfo_mvc_controller_OnInitialize_GetUsernameJS) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {
    getUsername$Action: function () {
    return controller.executeActionInsideJSNode(controller._getUsername$Action.bind(controller), controller.callContext(), function (actionResults) {
    return {};
    }, function () {
    return;
    }, "GetUsername");
    }
    };
    this.dataFetchDependenciesOriginal = {
    getUserNameFromServer$DataActRefresh: -1
    };
    this.dataFetchDependentsGraph = {
    getUserNameFromServer$DataActRefresh: []
    };
    this.shouldSendClientVarsToDataSources = true;
    }
    // Server Actions
    Controller.prototype.doLogout$ServerAction = function (callContext) {
    var controller = this.controller;
    return controller.callServerAction("DoLogout", "screenservices/ExamsLegacy/Common/UserInfo/ActionDoLogout", "8aHDGzSbCv1JiS3LscJ2zg", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
    var executeServerActionResult = new (controller.constructor.getVariableGroupType("ExamsLegacy.Common.UserInfo$ActionDoLogout"))();
    executeServerActionResult.redirectURLOut = OS.DataConversion.ServerDataConverter.from(outputs.RedirectURL, OS.Types.Text);
    return executeServerActionResult;
    });
    };
    Controller.registerVariableGroupType("ExamsLegacy.Common.UserInfo$ActionDoLogout", [{
    name: "RedirectURL",
    attrName: "redirectURLOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    Controller.prototype.user_GetUnifiedLoginUrl$ServerAction = function (originalUrlIn, toolNameIn, callContext) {
    var controller = this.controller;
    var inputs = {
    OriginalUrl: OS.DataConversion.ServerDataConverter.to(originalUrlIn, OS.Types.Text),
    ToolName: OS.DataConversion.ServerDataConverter.to(toolNameIn, OS.Types.Text)
    };
    return controller.callServerAction("User_GetUnifiedLoginUrl", "screenservices/ExamsLegacy/Common/UserInfo/ActionUser_GetUnifiedLoginUrl", "cttvMQpQoQ_vXqICRkdvyg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
    var executeServerActionResult = new (controller.constructor.getVariableGroupType("ExamsLegacy.Common.UserInfo$rssespaceusers_ActionUser_GetUnifiedLoginUrl"))();
    executeServerActionResult.urlOut = OS.DataConversion.ServerDataConverter.from(outputs.Url, OS.Types.Text);
    return executeServerActionResult;
    });
    };
    Controller.registerVariableGroupType("ExamsLegacy.Common.UserInfo$rssespaceusers_ActionUser_GetUnifiedLoginUrl", [{
    name: "Url",
    attrName: "urlOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    
    // Aggregates and Data Actions
    Controller.prototype.getUserNameFromServer$DataActRefresh = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var callContext = controller.callContext(callContext);
    return controller.callDataAction("DataActionGetUserNameFromServer", "screenservices/ExamsLegacy/Common/UserInfo/DataActionGetUserNameFromServer", "Fu_ofeWFbjl8T8sP4jQ2KQ", function (b) {
    model.variables.getUserNameFromServerDataAct.dataFetchStatusAttr = b;
    }, function (json) {
    model.variables.getUserNameFromServerDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserNameFromServerDataAct.constructor));
    }, undefined, undefined, undefined, callContext, ExamsLegacyClientVariables, false);
    };
    
    Controller.prototype.dataFetchActionNames = ["getUserNameFromServer$DataActRefresh"];
    // Client Actions
    Controller.prototype._clientLogout$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("ClientLogout");
    callContext = controller.callContext(callContext);
    var doLogoutVar = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: DoLogout
    model.flush();
    return controller.doLogout$ServerAction(callContext).then(function (value) {
    doLogoutVar.value = value;
    }).then(function () {
    // Found Logout URL
    if((((doLogoutVar.value.redirectURLOut) !== ("")))) {
    // Destination: /ExamsLegacy/
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(doLogoutVar.value.redirectURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    } else {
    // Destination: /ExamsLegacy/Login
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    }
    
    });
    });
    };
    Controller.prototype._clientLogin$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("ClientLogin");
    callContext = controller.callContext(callContext);
    var user_GetUnifiedLoginUrlVar = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: User_GetUnifiedLoginUrl
    model.flush();
    return controller.user_GetUnifiedLoginUrl$ServerAction(OS.BuiltinFunctions.getBookmarkableURL(), "", callContext).then(function (value) {
    user_GetUnifiedLoginUrlVar.value = value;
    }).then(function () {
    // Found Unified Login URL
    if((((user_GetUnifiedLoginUrlVar.value.urlOut) !== ("")))) {
    // Destination: /ExamsLegacy/
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(user_GetUnifiedLoginUrlVar.value.urlOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    } else {
    // Destination: /ExamsLegacy/Login
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    }
    
    });
    });
    };
    Controller.prototype._onInitialize$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnInitialize");
    callContext = controller.callContext(callContext);
    controller.safeExecuteJSNode(ExamsLegacy_Common_UserInfo_mvc_controller_OnInitialize_GetUsernameJS, "GetUsername", "OnInitialize", null, function ($parameters) {
    }, {
    GetUsername: controller.clientActionProxies.getUsername$Action
    }, {});
    };
    Controller.prototype._getUsername$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("GetUsername");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // No Username?
    return OS.Flow.executeSequence(function () {
    if((((ExamsLegacyClientVariables.getUsername() === "") && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier()))))) {
    // Refresh Query: GetUserNameFromServer
    var result = controller.getUserNameFromServer$DataActRefresh(callContext);
    model.flush();
    return result.then(function () {
    // Username = GetUserNameFromServer.UserName
    ExamsLegacyClientVariables.setUsername(model.variables.getUserNameFromServerDataAct.userNameOut);
    });
    }
    
    });
    });
    };
    
    Controller.prototype.clientLogout$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._clientLogout$Action, callContext);
    
    };
    Controller.prototype.clientLogin$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._clientLogin$Action, callContext);
    
    };
    Controller.prototype.onInitialize$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
    
    };
    Controller.prototype.getUsername$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._getUsername$Action, callContext);
    
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onInitialize$Action(callContext);
    
    };
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = null;
    Controller.prototype.handleError = function (ex) {
    return controller.handleError(ex);
    };
    Controller.checkPermissions = function () {
    };
    Controller.prototype.getDefaultTimeout = function () {
    return ExamsLegacyController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, ExamsLegacyLanguageResources);
    });
    define("ExamsLegacy.Common.UserInfo.mvc$controller.OnInitialize.GetUsernameJS", [], function () {
    return function ($actions, $roles, $public) {
    $actions.GetUsername();
    };
    });
    
    