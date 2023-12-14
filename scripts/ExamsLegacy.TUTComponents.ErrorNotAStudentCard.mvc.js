define("ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.Interaction.Animate.mvc$model"], function (OutSystems, ExamsLegacyModel, OutSystemsUI_Interaction_Animate_mvcModel) {
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
    }, true), 
    this.attr("IsAdmin", "isAdminOut", "IsAdmin", true, false, OS.Types.Boolean, function () {
    return false;
    }, true)
    ].concat(_super.attributesToDeclare.call(this));
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
    Model._hasValidationWidgetsValue = undefined;
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    if((Model._hasValidationWidgetsValue === undefined)) {
    Model._hasValidationWidgetsValue = OutSystemsUI_Interaction_Animate_mvcModel.hasValidationWidgets;
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTComponents.ErrorNotAStudentCard");
    });
    define("ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$model", "ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$controller", "ExamsLegacy.clientVariables", "OutSystemsUI.Interaction.Animate.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, React, OSView, ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_model, ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_controller, ExamsLegacyClientVariables, OutSystemsUI_Interaction_Animate_mvc_view, OSWidgets) {
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
            View.displayName = "TUTComponents.ErrorNotAStudentCard";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Interaction_Animate_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTComponents_ErrorNotAStudentCard_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_Interaction_Animate_mvc_view, {
    inputs: {
    AnimationType: ExamsLegacyModel.staticEntities.animationType.fadeIn
    },
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    uuid: "0",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    content: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-top: 10px; padding: 8px;"
    },
    style: "DropShadow",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "padding: 5px;"
    },
    style: "CenterCenterOuter",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "margin-bottom: 10px;"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "The Exams Portal can only be used by TUT Students."), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "You logged in with the user ", React.createElement(OSWidgets.Expression, {
    extendedProperties: {
    style: "font-weight: bold;"
    },
    gridProperties: {
    marginLeft: "0px"
    },
    value: model.variables.getUserNameFromServerDataAct.userNameOut,
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserNameFromServerDataAct.dataFetchStatusAttr)
    }), " which is not a recognised student account. Please log in with a valid student account to proceed."))), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "align-items: flex-end; display: flex; height: 100%; text-align: right;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    style: "text-align: center;"
    },
    gridProperties: {
    classes: "OSInline",
    width: "100%"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Button, {
    enabled: true,
    gridProperties: {
    classes: "ThemeGrid_Width4"
    },
    isDefault: false,
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.clientLogout$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    style: "btn btn-primary btn-small",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Login"), React.createElement(OSWidgets.Button, {
    enabled: model.variables.getUserNameFromServerDataAct.isAdminOut,
    gridProperties: {
    classes: "ThemeGrid_MarginGutter"
    },
    isDefault: false,
    onClick: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.loadAStudentOnClick$Action(controller.callContext(eventHandlerContext));
    });
    ;
    },
    style: "btn btn-primary btn-small",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserNameFromServerDataAct.dataFetchStatusAttr)
    }, "Load a Student"))))];
    })
    },
    _dependencies: [asPrimitiveValue(model.variables.getUserNameFromServerDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getUserNameFromServerDataAct.isAdminOut), asPrimitiveValue(model.variables.getUserNameFromServerDataAct.userNameOut)]
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTComponents.ErrorNotAStudentCard.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {
    getUserNameFromServer$DataActRefresh: 0
    };
    this.dataFetchDependentsGraph = {
    getUserNameFromServer$DataActRefresh: []
    };
    this.shouldSendClientVarsToDataSources = true;
    }
    // Server Actions
    Controller.prototype.doLogout$ServerAction = function (callContext) {
    var controller = this.controller;
    return controller.callServerAction("DoLogout", "screenservices/ExamsLegacy/TUTComponents/ErrorNotAStudentCard/ActionDoLogout", "8aHDGzSbCv1JiS3LscJ2zg", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
    var executeServerActionResult = new (controller.constructor.getVariableGroupType("ExamsLegacy.TUTComponents.ErrorNotAStudentCard$ActionDoLogout"))();
    executeServerActionResult.redirectURLOut = OS.DataConversion.ServerDataConverter.from(outputs.RedirectURL, OS.Types.Text);
    return executeServerActionResult;
    });
    };
    Controller.registerVariableGroupType("ExamsLegacy.TUTComponents.ErrorNotAStudentCard$ActionDoLogout", [{
    name: "RedirectURL",
    attrName: "redirectURLOut",
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
    return controller.callDataAction("DataActionGetUserNameFromServer", "screenservices/ExamsLegacy/TUTComponents/ErrorNotAStudentCard/DataActionGetUserNameFromServer", "zPMTF0_dwhPuROAVVVaJwA", function (b) {
    model.variables.getUserNameFromServerDataAct.dataFetchStatusAttr = b;
    }, function (json) {
    model.variables.getUserNameFromServerDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserNameFromServerDataAct.constructor));
    }, undefined, undefined, undefined, callContext, ExamsLegacyClientVariables, false);
    };
    
    Controller.prototype.dataFetchActionNames = ["getUserNameFromServer$DataActRefresh"];
    // Client Actions
    Controller.prototype._loadAStudentOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("LoadAStudentOnClick");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    return OS.Flow.executeSequence(function () {
    if((model.variables.getUserNameFromServerDataAct.isAdminOut)) {
    // AdmSBStatus = True
    ExamsLegacyClientVariables.setAdmSBStatus(true);
    // Trigger Event: LoadStudent
    return controller.loadStudent$Action(callContext);
    }
    
    });
    });
    };
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
    // Destination: /ExamsLegacy/Login
    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ExamsLegacy", "Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
    });
    });
    };
    
    Controller.prototype.loadAStudentOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._loadAStudentOnClick$Action, callContext);
    
    };
    Controller.prototype.clientLogout$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._clientLogout$Action, callContext);
    
    };
    Controller.prototype.loadStudent$Action = function () {
    return Promise.resolve();
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = null;
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
    
    