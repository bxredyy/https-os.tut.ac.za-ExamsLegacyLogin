define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model"], function (OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("ViewerObj", "viewerObjVar", "ViewerObj", true, false, OS.Types.Object, function () {
    return null;
    }, false), 
    this.attr("Markdown", "markdownIn", "Markdown", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_markdownInDataFetchStatus", "_markdownInDataFetchStatus", "_markdownInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("Height", "heightIn", "Height", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    Object.defineProperty(Model, "hasValidationWidgets", {
    enumerable: true,
    configurable: true,
    get: function () {
    return false;
    }
    });
    
    Model.prototype.setInputs = function (inputs) {
    if("Markdown" in inputs) {
    this.variables.markdownIn = inputs.Markdown;
    if("_markdownInDataFetchStatus" in inputs) {
    this.variables._markdownInDataFetchStatus = inputs._markdownInDataFetchStatus;
    }
    
    }
    
    if("Height" in inputs) {
    this.variables.heightIn = inputs.Height;
    if("_heightInDataFetchStatus" in inputs) {
    this.variables._heightInDataFetchStatus = inputs._heightInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MarkdownEditorFlow.MarkdownViewer");
    });
    define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "react", "OutSystems/ReactView/Main", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$model", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, React, OSView, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_model, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_controller, OSWidgets) {
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
            View.displayName = "MarkdownEditorFlow.MarkdownViewer";
            View.getCssDependencies = function() {
                return ["css/OutSystemsReactWidgets.css"];
            };
            View.getJsDependencies = function() {
                return ["scripts/TUTMarkdownEditor.codemirror_min.js", "scripts/TUTMarkdownEditor.toastuieditorall_min.js"];
            };
            View.getBlocks = function() {
                return [];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
    return [];
    }, function () {
    return [React.createElement(OSWidgets.Container, {
    align: /*Default*/ 0,
    animate: false,
    visible: true,
    _idProps: {
    service: idService,
    name: "Viewer"
    },
    _widgetRecordProvider: widgetsRecordProvider
    })];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.languageResources", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$controller.OnParametersChanged.JavaScript1JS", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$controller.OnReady.JavaScript1JS"], function (OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditorLanguageResources, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_controller_OnParametersChanged_JavaScript1JS, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OutSystems.Internal;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    var controller = this.controller;
    this.clientActionProxies = {};
    this.dataFetchDependenciesOriginal = {};
    this.dataFetchDependentsGraph = {};
    this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions
    
    // Aggregates and Data Actions
    
    Controller.prototype.dataFetchActionNames = [];
    // Client Actions
    Controller.prototype._onParametersChanged$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnParametersChanged");
    callContext = controller.callContext(callContext);
    if((((model.variables.viewerObjVar) !== (OS.BuiltinFunctions.nullObject())))) {
    controller.safeExecuteJSNode(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_controller_OnParametersChanged_JavaScript1JS, "JavaScript1", "OnParametersChanged", {
    ViewerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.viewerObjVar, OS.Types.Object),
    Markdown: OS.DataConversion.JSNodeParamConverter.to(model.variables.markdownIn, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    }
    
    };
    Controller.prototype._onReady$Action = function (callContext) {
    var model = this.model;
    var controller = this.controller;
    var idService = this.idService;
    controller.ensureControllerAlive("OnReady");
    callContext = controller.callContext(callContext);
    var javaScript1JSResult = new OS.DataTypes.VariableHolder();
    javaScript1JSResult.value = controller.safeExecuteJSNode(TUTMarkdownEditor_MarkdownEditorFlow_MarkdownViewer_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
    Height: OS.DataConversion.JSNodeParamConverter.to(model.variables.heightIn, OS.Types.Text),
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Viewer"), OS.Types.Text),
    Markdown: OS.DataConversion.JSNodeParamConverter.to(model.variables.markdownIn, OS.Types.Text),
    ViewerObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.OnReady$javaScript1JSResult"))();
    jsNodeResult.viewerObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ViewerObj, OS.Types.Object);
    return jsNodeResult;
    }, {}, {});
    // ViewerObj = JavaScript1.ViewerObj
    model.variables.viewerObjVar = javaScript1JSResult.value.viewerObjOut;
    };
    Controller.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.OnReady$javaScript1JSResult", [{
    name: "ViewerObj",
    attrName: "viewerObjOut",
    mandatory: true,
    dataType: OS.Types.Object,
    defaultValue: function () {
    return null;
    }
    }]);
    
    Controller.prototype.onParametersChanged$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
    
    };
    Controller.prototype.onReady$Action = function (callContext) {
    var controller = this.controller;
    return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    
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
    return TUTMarkdownEditorController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, TUTMarkdownEditorLanguageResources);
    });
    define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$controller.OnParametersChanged.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.ViewerObj.setMarkdown($parameters.Markdown);
    };
    });
    define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownViewer.mvc$controller.OnReady.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    var element = document.getElementById($parameters.WidgetId);
    if (element) {
        var options = {
            el: element,
            initialValue: $parameters.Markdown,
            viewer: true
        };
        
        if ($parameters.Height) {
            options.height = $parameters.Height;
        }
    
        var viewer = new toastui.Editor.factory(options);
    
        $parameters.ViewerObj = viewer;
    }
    };
    });
    
    