define("ExamsLegacy.TUTLayouts.MobileLayout.mvc$model", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "OutSystemsUI.controller", "OutSystemsUI.model", "ExamsLegacy.TUTComponents.DevWarning.mvc$model", "OutSystemsUI.Private.PullToRefresh.mvc$model", "OutSystemsUI.controller$LayoutDestroy", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$AddFavicon"], function (OutSystems, ExamsLegacyModel, OutSystemsUIController, OutSystemsUIModel, ExamsLegacy_TUTComponents_DevWarning_mvcModel, OutSystemsUI_Private_PullToRefresh_mvcModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("HideHeaderOnScroll", "hideHeaderOnScrollIn", "HideHeaderOnScroll", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("MenuBehavior", "menuBehaviorIn", "MenuBehavior", true, false, OS.Types.Text, function () {
    return ExamsLegacyModel.staticEntities.sideMenuBehavior.overlay;
    }, false), 
    this.attr("_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Model._hasValidationWidgetsValue = (ExamsLegacy_TUTComponents_DevWarning_mvcModel.hasValidationWidgets || OutSystemsUI_Private_PullToRefresh_mvcModel.hasValidationWidgets);
    }
    
    return Model._hasValidationWidgetsValue;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("EnableAccessibilityFeatures" in inputs) {
    this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
    if("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
    this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
    }
    
    }
    
    if("ExtendedClass" in inputs) {
    this.variables.extendedClassIn = inputs.ExtendedClass;
    if("_extendedClassInDataFetchStatus" in inputs) {
    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
    }
    
    }
    
    if("HideHeaderOnScroll" in inputs) {
    this.variables.hideHeaderOnScrollIn = inputs.HideHeaderOnScroll;
    if("_hideHeaderOnScrollInDataFetchStatus" in inputs) {
    this.variables._hideHeaderOnScrollInDataFetchStatus = inputs._hideHeaderOnScrollInDataFetchStatus;
    }
    
    }
    
    if("UsePullToRefresh" in inputs) {
    this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
    if("_usePullToRefreshInDataFetchStatus" in inputs) {
    this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
    }
    
    }
    
    if("MenuBehavior" in inputs) {
    this.variables.menuBehaviorIn = inputs.MenuBehavior;
    if("_menuBehaviorInDataFetchStatus" in inputs) {
    this.variables._menuBehaviorInDataFetchStatus = inputs._menuBehaviorInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "TUTLayouts.MobileLayout");
    });
    define("ExamsLegacy.TUTLayouts.MobileLayout.mvc$view", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "OutSystems/ReactView/Main", "ExamsLegacy.TUTLayouts.MobileLayout.mvc$model", "ExamsLegacy.TUTLayouts.MobileLayout.mvc$controller", "ExamsLegacy.clientVariables", "OutSystems/ReactWidgets/Main", "ExamsLegacy.TUTComponents.DevWarning.mvc$view", "OutSystemsUI.Private.PullToRefresh.mvc$view", "OutSystemsUI.controller$LayoutDestroy", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$AddFavicon"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIController, OutSystemsUIModel, React, OSView, ExamsLegacy_TUTLayouts_MobileLayout_mvc_model, ExamsLegacy_TUTLayouts_MobileLayout_mvc_controller, ExamsLegacyClientVariables, OSWidgets, ExamsLegacy_TUTComponents_DevWarning_mvc_view, OutSystemsUI_Private_PullToRefresh_mvc_view) {
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
            View.displayName = "TUTLayouts.MobileLayout";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return ["scripts/OutSystemsUI.OutSystemsUI.js"];
            };
            View.getBlocks = function() {
                return [ExamsLegacy_TUTComponents_DevWarning_mvc_view, OutSystemsUI_Private_PullToRefresh_mvc_view];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_MobileLayout_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return ExamsLegacy_TUTLayouts_MobileLayout_mvc_controller;
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
    style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function () {
    return (((("layout layout-side layout-native ios-bounce " + ((!(model.variables.hideHeaderOnScrollIn)) ? ("") : ("hide-header-on-scroll "))) + model.variables.menuBehaviorIn) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
    }, function () {
    return model.variables.hideHeaderOnScrollIn;
    }, function () {
    return model.variables.menuBehaviorIn;
    }, function () {
    return model.variables.extendedClassIn;
    }, function () {
    return model.variables.enableAccessibilityFeaturesIn;
    }),
    visible: true,
    _idProps: {
    service: idService,
    name: "LayoutWrapper"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideHeaderOnScrollInDataFetchStatus, model.variables._menuBehaviorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus)
    }, React.createElement(OSWidgets.Link, {
    enabled: true,
    extendedProperties: {
    "aria-label": "Skip to Content (Press Enter)",
    "data-showskipcontent": model.getCachedValue(idService.getId("sO44OGMubEqRcSFmfbzofg.data-showskipcontent"), function () {
    return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
    }, function () {
    return model.variables.enableAccessibilityFeaturesIn;
    })
    },
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
    
    ;
    },
    style: "skip-nav",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.AdvancedHtml, {
    extendedProperties: {
    role: "complementary",
    className: "aside-navigation"
    },
    tag: "aside",
    _idProps: {
    service: idService,
    uuid: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.navigation,
    _idProps: {
    service: idService,
    name: "Navigation"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "main",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "4"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, $if(model.variables.hideHeaderOnScrollIn, false, this, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    "aria-hidden": "true"
    },
    style: "sticky-observer",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "5"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }, function () {
    return [];
    }), React.createElement(OSWidgets.AdvancedHtml, {
    extendedProperties: {
    role: "banner",
    className: "header"
    },
    tag: "header",
    _idProps: {
    service: idService,
    name: "Header2"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Link, {
    enabled: true,
    extendedProperties: {
    "aria-label": "Skip to Content (Press Enter)",
    "data-showskipcontent": model.getCachedValue(idService.getId("1kluCODyoEyNZT8s_4HGcg.data-showskipcontent"), function () {
    return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
    }, function () {
    return model.variables.enableAccessibilityFeaturesIn;
    })
    },
    onClick: function () {
    var eventHandlerContext = callContext.clone();
    controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
    
    ;
    },
    style: "skip-nav",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "7"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "header-top",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "8"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "header-content display-flex",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "9"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "display-flex align-items-center full-width",
    visible: true,
    _idProps: {
    service: idService,
    uuid: "10"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.headerLeft,
    style: "header-left",
    _idProps: {
    service: idService,
    name: "HeaderLeft"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), React.createElement(OSWidgets.AdvancedHtml, {
    extendedProperties: {
    className: "header-title"
    },
    tag: "h1",
    _idProps: {
    service: idService,
    uuid: "12"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.title,
    gridProperties: {
    classes: "OSInline"
    },
    _idProps: {
    service: idService,
    name: "Title"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.headerRight,
    style: "header-right",
    _idProps: {
    service: idService,
    name: "HeaderRight"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })))), React.createElement(ExamsLegacy_TUTComponents_DevWarning_mvc_view, {
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
    uuid: "15",
    alias: "1"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    }), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.headerContent,
    style: "header-top-content ph",
    _idProps: {
    service: idService,
    name: "HeaderContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }), $if(model.variables.usePullToRefreshIn, false, this, function () {
    return [React.createElement(OutSystemsUI_Private_PullToRefresh_mvc_view, {
    inputs: {},
    events: {
    _handleError: function (ex) {
    controller.handleError(ex);
    },
    onContentPull$Action: function () {
    return Promise.resolve().then(function () {
    var eventHandlerContext = callContext.clone();
    return controller.actionHandler_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
    });
    ;
    }
    },
    _validationProps: {
    validationService: validationService
    },
    _idProps: {
    service: idService,
    uuid: "17",
    alias: "2"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    _dependencies: []
    })];
    }, function () {
    return [];
    })), React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    style: "content",
    visible: true,
    _idProps: {
    service: idService,
    name: "Content"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    extendedProperties: {
    role: "main"
    },
    style: "main-content ThemeGrid_Container",
    visible: true,
    _idProps: {
    service: idService,
    name: "MainContentWrapper"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.mainContent,
    style: "content-middle",
    _idProps: {
    service: idService,
    name: "MainContent"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })), React.createElement(OSWidgets.AdvancedHtml, {
    extendedProperties: {
    role: "contentinfo",
    className: "content-bottom"
    },
    tag: "footer",
    _idProps: {
    service: idService,
    uuid: "21"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }, React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.bottom,
    style: "footer ph",
    _idProps: {
    service: idService,
    name: "Bottom"
    },
    _widgetRecordProvider: widgetsRecordProvider
    }))))));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("ExamsLegacy.TUTLayouts.MobileLayout.mvc$controller", ["OutSystems/ClientRuntime/Main", "ExamsLegacy.model", "ExamsLegacy.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "ExamsLegacy.languageResources", "ExamsLegacy.clientVariables", "OutSystemsUI.controller$LayoutDestroy", "ExamsLegacy.referencesHealth", "ExamsLegacy.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$AddFavicon"], function (OutSystems, ExamsLegacyModel, ExamsLegacyController, OutSystemsUIController, OutSystemsUIModel, ExamsLegacyLanguageResources, ExamsLegacyClientVariables) {
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
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._onDestroy$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnDestroy");
    callContext = controller.callContext(callContext);
    // Execute Action: LayoutDestroy
    OutSystemsUIController.default.layoutDestroy$Action(callContext);
    };
    Controller.prototype._skipToContentOnClick$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("SkipToContentOnClick");
    callContext = controller.callContext(callContext);
    var skipToContentVar = new OS.DataTypes.VariableHolder();
    // Execute Action: SkipToContent
    skipToContentVar.value = OutSystemsUIController.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);
    
    };
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    var setLangVar = new OS.DataTypes.VariableHolder();
    var addFaviconVar = new OS.DataTypes.VariableHolder();
    // Execute Action: LayoutReady
    OutSystemsUIController.default.layoutReady$Action(callContext);
    // Execute Action: SetLang
    setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);
    
    // Execute Action: AddFavicon
    addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.png", callContext);
    
    };
    Controller.prototype._actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("ActionHandler_OnPullToRefreshTrigger");
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Trigger Event: OnPullToRefresh
    return controller.onPullToRefresh$Action(callContext);
    });
    };
    
    Controller.prototype.onDestroy$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
    
    };
    Controller.prototype.skipToContentOnClick$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
    };
    Controller.prototype.actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);
    
    };
    Controller.prototype.onPullToRefresh$Action = function () {
    return Promise.resolve();
    };
    
    // Event Handler Actions
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onReady$Action(callContext);
    
    };
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = function (callContext) {
    var controller = this.controller;
    var model = this.model;
    var idService = this.idService;
    
    return controller.onDestroy$Action(callContext);
    
    };
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
    
    