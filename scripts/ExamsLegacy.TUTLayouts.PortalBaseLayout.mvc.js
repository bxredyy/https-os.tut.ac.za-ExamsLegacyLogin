define("ExamsLegacy.TUTLayouts.PortalBaseLayout.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.controller", "OutSystemsUI.model", "OutSystemsUI.Interaction.Sidebar.mvc$model", "ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$model", "OutSystemsUI.Content.BlankSlate.mvc$model", "OutSystemsUI.Private.NetworkStatusChanged.mvc$model", "OutSystemsUI.controller$GetNetworkStatus", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SidebarOpen", "OutSystemsUI.controller$SidebarClose"], function (OutSystems, ExamsLegacyModel, OutSystemsUIController, OutSystemsUIModel, OutSystemsUI_Interaction_Sidebar_mvcModel, ExamsLegacy_TUTComponents_AdmStudentSelector_mvcModel, OutSystemsUI_Content_BlankSlate_mvcModel, OutSystemsUI_Private_NetworkStatusChanged_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("StudentNumber", "studentNumberVar", "StudentNumber", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, false), 
    this.attr("NetworkOnline", "networkOnlineVar", "NetworkOnline", true, false, OS.Types.Boolean, function () {
    return true;
    }, false), 
    this.attr("RRId", "rRIdVar", "RRId", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, false), 
    this.attr("ECGUID", "eCGUIDVar", "ECGUID", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("InStdNum", "inStdNumIn", "InStdNum", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, false), 
    this.attr("_inStdNumInDataFetchStatus", "_inStdNumInDataFetchStatus", "_inStdNumInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("InRefresh", "inRefreshIn", "InRefresh", true, false, OS.Types.DateTime, function () {
    return OS.DataTypes.DateTime.defaultValue;
    }, false), 
    this.attr("_inRefreshInDataFetchStatus", "_inRefreshInDataFetchStatus", "_inRefreshInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("InRRId", "inRRIdIn", "InRRId", true, false, OS.Types.LongInteger, function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }, false), 
    this.attr("_inRRIdInDataFetchStatus", "_inRRIdInDataFetchStatus", "_inRRIdInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("InGUID", "inGUIDIn", "InGUID", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_inGUIDInDataFetchStatus", "_inGUIDInDataFetchStatus", "_inGUIDInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false)
    ].concat(_super.attributesToDeclare.call(this));
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
    Model._hasValidationWidgetsValue = (((OutSystemsUI_Interaction_Sidebar_mvcModel.hasValidationWidgets || ExamsLegacy_TUTComponents_AdmStudentSelector_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_BlankSlate_mvcModel.hasValidationWidgets) || OutSystemsUI_Private_NetworkStatusChanged_mvcModel.hasValidationWidgets);
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("InStdNum" in inputs) {
    this.variables.inStdNumIn = inputs.InStdNum;
    if("_inStdNumInDataFetchStatus" in inputs) {
    this.variables._inStdNumInDataFetchStatus = inputs._inStdNumInDataFetchStatus;
    }
    
    }
    
    if("InRefresh" in inputs) {
    this.variables.inRefreshIn = inputs.InRefresh;
    if("_inRefreshInDataFetchStatus" in inputs) {
    this.variables._inRefreshInDataFetchStatus = inputs._inRefreshInDataFetchStatus;
    }
    
    }
    
    if("InRRId" in inputs) {
    this.variables.inRRIdIn = inputs.InRRId;
    if("_inRRIdInDataFetchStatus" in inputs) {
    this.variables._inRRIdInDataFetchStatus = inputs._inRRIdInDataFetchStatus;
    }
    
    }
    
    if("InGUID" in inputs) {
    this.variables.inGUIDIn = inputs.InGUID;
    if("_inGUIDInDataFetchStatus" in inputs) {
    this.variables._inGUIDInDataFetchStatus = inputs._inGUIDInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTLayouts.PortalBaseLayout");
    });
    define("ExamsLegacy.TUTLayouts.PortalBaseLayout.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTLayouts.PortalBaseLayout.mvc$model", "ExamsLegacy.TUTLayouts.PortalBaseLayout.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Interaction.Sidebar.mvc$view", "ExamsLegacy.TUTComponents.AdmStudentSelector.mvc$view", "OutSystemsUI.Content.BlankSlate.mvc$view", "OutSystemsUI.Private.NetworkStatusChanged.mvc$view", "OutSystemsUI.controller$GetNetworkStatus", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SidebarOpen", "OutSystemsUI.controller$SidebarClose"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIController, OutSystemsUIModel, React, OSView, ExamsLegacy_TUTLayouts_PortalBaseLayout_mvc_model, ExamsLegacy_TUTLayouts_PortalBaseLayout_mvc_controller, ExamsLegacyClientVariables, OSWidgets, OutSystemsUI_Interaction_Sidebar_mvc_view, ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_view, OutSystemsUI_Content_BlankSlate_mvc_view, OutSystemsUI_Private_NetworkStatusChanged_mvc_view) {
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
            View.displayName = "TUTLayouts.PortalBaseLayout";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [OutSystemsUI_Interaction_Sidebar_mvc_view, ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_view, OutSystemsUI_Content_BlankSlate_mvc_view, OutSystemsUI_Private_NetworkStatusChanged_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_PortalBaseLayout_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_PortalBaseLayout_mvc_controller;
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
    animate: true,
    visible: model.variables.networkOnlineVar,
    _idProps: {
    service: idService,
    name: "cContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "HideMeInPrint",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(ExamsLegacyClientVariables.getAdmMode(), false, this, function () {
    return [React.createElement(OutSystemsUI_Interaction_Sidebar_mvc_view, {
    inputs: {},
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
    name: "sbAdmin",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    header: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Container, {
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
    gridProperties: {
    classes: "ThemeGrid_Width11"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Text, {
    style: "heading5",
    text: ["Load Student"],
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    gridProperties: {
    classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "6"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Link, {
    enabled: true,
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.closeAdminSBOnClick$Action(controller.callContext(eventHandlerContext));
    
    ;
    },
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Icon, {
    icon: "remove",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))))];
    }),
    content: new PlaceholderContent(function () {
    return [React.createElement(ExamsLegacy_TUTComponents_AdmStudentSelector_mvc_view, {
    inputs: {
    InStdNum: model.variables.inStdNumIn,
    _inStdNumInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inStdNumInDataFetchStatus)
    },
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    },
    refresh$Action: function (outStudentNumberIn) {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.admStudentSelectorRefresh$Action(outStudentNumberIn, controller.callContext(eventHandlerContext));
    });
    ;
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    uuid: "9",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    })];
    })
    },
    _dependencies: [asPrimitiveValue(model.variables._inStdNumInDataFetchStatus), asPrimitiveValue(model.variables.inStdNumIn)]
    })];
    }, function () {
    return [];
    })), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.phMainArea,
    _idProps: {
    service: idService,
    name: "phMainArea"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: true,
    extendedProperties: {
    style: "margin-top: 20px;"
    },
    visible: !(model.variables.networkOnlineVar),
    _idProps: {
    service: idService,
    name: "cOfflineContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OutSystemsUI_Content_BlankSlate_mvc_view, {
    inputs: {},
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
    uuid: "12",
    alias: "3"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    placeholders: {
    icon: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Icon, {
    icon: "wifi",
    iconSize: /*Twotimes*/ 1,
    style: "icon",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "13"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }),
    content: new PlaceholderContent(function () {
    return ["No network connection!"];
    }),
    actions: new PlaceholderContent(function () {
    return [React.createElement(OSWidgets.Button, {
    enabled: true,
    isDefault: false,
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.networkErrorCheckAgainOnClick$Action(controller.callContext(eventHandlerContext));
    
    ;
    },
    style: "btn btn-primary",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "14"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Check Again")];
    })
    },
    _dependencies: []
    })), React.createElement(OutSystemsUI_Private_NetworkStatusChanged_mvc_view, {
    inputs: {},
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    },
    networkStatusChanged$Action: function (isOnlineIn) {
    var eventHandlerContext = callContext.clone();
    controller.networkStatusChanged$Action(isOnlineIn, controller.callContext(eventHandlerContext));
    
    ;
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    uuid: "15",
    alias: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTLayouts.PortalBaseLayout.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "OutSystemsUI.controller$GetNetworkStatus", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SidebarOpen", "OutSystemsUI.controller$SidebarClose"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIController, OutSystemsUIModel, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = true;
    }
    // Server Actions
    Controller.prototype.saGetPlatform$ServerAction = function (callContext) {
    var controller = this.controller;
    return controller.callServerAction("saGetPlatform", "screenservices/ExamsLegacy/TUTLayouts/PortalBaseLayout/ActionsaGetPlatform", "UefhUJHNFpRfbKhitvzwMA", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
    var executeServerActionResult = new (controller.constructor.getVariableGroupType("ExamsLegacy.TUTLayouts.PortalBaseLayout$rssespacetutexamslegacydefaults_cs_ActionsaGetPlatform"))();
    executeServerActionResult.platformOut = OS.DataConversion.ServerDataConverter.from(outputs.Platform, OS.Types.Text);
    return executeServerActionResult;
    });
    };
    Controller.registerVariableGroupType("ExamsLegacy.TUTLayouts.PortalBaseLayout$rssespacetutexamslegacydefaults_cs_ActionsaGetPlatform", [{
    name: "Platform",
    attrName: "platformOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._networkErrorCheckAgainOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("NetworkErrorCheckAgainOnClick");
    callContext = controller.callContext(callContext);
    var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
    // Execute Action: GetNetworkStatus
    getNetworkStatusVar.value = OutSystemsUIController.default.getNetworkStatus$Action(callContext);
    
    // NetworkOnline = GetNetworkStatus.IsOnline
    model.variables.networkOnlineVar = getNetworkStatusVar.value.isOnlineOut;
    if((getNetworkStatusVar.value.isOnlineOut)) {
    OS.FeedbackMessageService.showFeedbackMessage("You are connected again.", /*Success*/ 1);
    } else {
    OS.FeedbackMessageService.showFeedbackMessage("You are still offline.", /*Error*/ 3);
    }
    
    };
    Controller.prototype._networkStatusChanged$Action = function (isOnlineIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("NetworkStatusChanged");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ExamsLegacy.TUTLayouts.PortalBaseLayout.NetworkStatusChanged$vars"))());
    vars.value.isOnlineInLocal = isOnlineIn;
    // NetworkOnline = IsOnline
    model.variables.networkOnlineVar = vars.value.isOnlineInLocal;
    };
    Controller.registerVariableGroupType("ExamsLegacy.TUTLayouts.PortalBaseLayout.NetworkStatusChanged$vars", [{
    name: "IsOnline",
    attrName: "isOnlineInLocal",
    mandatory: true,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    var saGetPlatformVar = new OS.DataTypes.VariableHolder();
    var sidebarOpenVar = new OS.DataTypes.VariableHolder();
    var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: GetNetworkStatus
    getNetworkStatusVar.value = OutSystemsUIController.default.getNetworkStatus$Action(callContext);
    
    // NetworkOnline = GetNetworkStatus.IsOnline
    model.variables.networkOnlineVar = getNetworkStatusVar.value.isOnlineOut;
    return OS.Flow.executeSequence(function () {
    if(((ExamsLegacyClientVariables.getPlatform() === ""))) {
    // Execute Action: saGetPlatform
    model.flush();
    return controller.saGetPlatform$ServerAction(callContext).then(function (value) {
    saGetPlatformVar.value = value;
    }).then(function () {
    // Platform = saGetPlatform.Platform
    ExamsLegacyClientVariables.setPlatform(saGetPlatformVar.value.platformOut);
    });
    }
    
    }).then(function () {
    if((((ExamsLegacyClientVariables.getAdmSBStatus() === true) && (ExamsLegacyClientVariables.getAdmMode() === true)))) {
    // Execute Action: SidebarOpen
    sidebarOpenVar.value = OutSystemsUIController.default.sidebarOpen$Action(idService.getId("sbAdmin"), callContext);
    
    }
    
    });
    });
    };
    Controller.prototype._admStudentSelectorRefresh$Action = function (outStudentNumberIn, callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("AdmStudentSelectorRefresh");
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ExamsLegacy.TUTLayouts.PortalBaseLayout.AdmStudentSelectorRefresh$vars"))());
    vars.value.outStudentNumberInLocal = outStudentNumberIn;
    return OS.Flow.executeAsyncFlow(function () {
    return OS.Flow.executeSequence(function () {
    if((vars.value.outStudentNumberInLocal.gt(OS.BuiltinFunctions.integerToLongInteger(0)))) {
    // Execute Action: CloseAdminSBOnClick
    controller._closeAdminSBOnClick$Action(callContext);
    // Trigger Event: Refresh
    return controller.refresh$Action(callContext);
    }
    
    });
    });
    };
    Controller.registerVariableGroupType("ExamsLegacy.TUTLayouts.PortalBaseLayout.AdmStudentSelectorRefresh$vars", [{
    name: "OutStudentNumber",
    attrName: "outStudentNumberInLocal",
    mandatory: true,
    dataType: OS.Types.LongInteger,
    defaultValue: function () {
    return OS.DataTypes.LongInteger.defaultValue;
    }
    }]);
    Controller.prototype._closeAdminSBOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("CloseAdminSBOnClick");
    callContext = controller.callContext(callContext);
    var sidebarCloseVar = new OS.DataTypes.VariableHolder();
    // AdmSBStatus = False
    ExamsLegacyClientVariables.setAdmSBStatus(false);
    // Execute Action: SidebarClose
    sidebarCloseVar.value = OutSystemsUIController.default.sidebarClose$Action(idService.getId("sbAdmin"), callContext);
    
    };
    Controller.prototype._onParametersChanged$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnParametersChanged");
    callContext = controller.callContext(callContext);
    var sidebarOpenVar = new OS.DataTypes.VariableHolder();
    // InRefresh = NullDate
    model.variables.inRefreshIn = OS.BuiltinFunctions.nullDate();
    if((((ExamsLegacyClientVariables.getAdmSBStatus() === true) && (ExamsLegacyClientVariables.getAdmMode() === true)))) {
    // Execute Action: SidebarOpen
    sidebarOpenVar.value = OutSystemsUIController.default.sidebarOpen$Action(idService.getId("sbAdmin"), callContext);
    
    }
    
    };
    Controller.prototype._onInitialize$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnInitialize");
    callContext = controller.callContext(callContext);
    if(((model.variables.inStdNumIn.gt(OS.BuiltinFunctions.integerToLongInteger(0)) && model.variables.inStdNumIn.lt(OS.BuiltinFunctions.integerToLongInteger(999999999))))) {
    // StudentNumber = InStdNum
    model.variables.studentNumberVar = model.variables.inStdNumIn;
    // AdmStudentNumber = InStdNum
    ExamsLegacyClientVariables.setAdmStudentNumber(model.variables.inStdNumIn);
    }
    
    if((model.variables.inRRIdIn.gt(OS.BuiltinFunctions.integerToLongInteger(0)))) {
    // RRId = InRRId
    model.variables.rRIdVar = model.variables.inRRIdIn;
    // AdmRRId = InRRId
    ExamsLegacyClientVariables.setAdmRRId(model.variables.inRRIdIn);
    } else {
    // RRId = 0
    model.variables.rRIdVar = OS.BuiltinFunctions.integerToLongInteger(0);
    // AdmRRId = 0
    ExamsLegacyClientVariables.setAdmRRId(OS.BuiltinFunctions.integerToLongInteger(0));
    }
    
    if((((OS.BuiltinFunctions.length(OS.BuiltinFunctions.trim(model.variables.inGUIDIn)) > 0) && (OS.BuiltinFunctions.length(OS.BuiltinFunctions.trim(model.variables.inGUIDIn)) < 41)))) {
    // ECGUID = InGUID
    model.variables.eCGUIDVar = model.variables.inGUIDIn;
    // ECGUID = InGUID
    ExamsLegacyClientVariables.setECGUID(model.variables.inGUIDIn);
    // AdmECGUID = InGUID
    ExamsLegacyClientVariables.setAdmECGUID(model.variables.inGUIDIn);
    }
    
    };
    
    Controller.prototype.networkErrorCheckAgainOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._networkErrorCheckAgainOnClick$Action, callContext);
    
    };
    Controller.prototype.networkStatusChanged$Action = function (isOnlineIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._networkStatusChanged$Action, callContext, isOnlineIn);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
    };
    Controller.prototype.admStudentSelectorRefresh$Action = function (outStudentNumberIn, callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._admStudentSelectorRefresh$Action, callContext, outStudentNumberIn);
    
    };
    Controller.prototype.closeAdminSBOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._closeAdminSBOnClick$Action, callContext);
    
    };
    Controller.prototype.onParametersChanged$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
    
    };
    Controller.prototype.onInitialize$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
    
    };
    Controller.prototype.refresh$Action = function () {
    return Promise.resolve();
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onInitialize$Action(callContext);
    
    };
    Controller.prototype.onReadyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onReady$Action(callContext);
    
    };
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onParametersChanged$Action(callContext);
    
    };
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
    
    