define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$model", ["OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model"], function (OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [].concat(_super.attributesToDeclare.call(this));
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
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "MarkdownEditorFlow.MarkdownCSS");
    });
    define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$view", ["OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "react", "OutSystems/ReactView/Main", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$model", "TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$controller"], function (OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, React, OSView, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_model, TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_controller) {
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
            View.displayName = "MarkdownEditorFlow.MarkdownCSS";
            View.getCssDependencies = function() {
                return ["css/TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.css"];
            };
            View.getJsDependencies = function() {
                return [];
            };
            View.getBlocks = function() {
                return [];
            };
            Object.defineProperty(View.prototype, "modelFactory", {
                get: function () {
                    return TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return TUTMarkdownEditor_MarkdownEditorFlow_MarkdownCSS_mvc_controller;
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
    return [];
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("TUTMarkdownEditor.MarkdownEditorFlow.MarkdownCSS.mvc$controller", ["OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.languageResources"], function (OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditorLanguageResources) {
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
    return TUTMarkdownEditorController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, TUTMarkdownEditorLanguageResources);
    });
    
    