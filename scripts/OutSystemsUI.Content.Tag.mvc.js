define("OutSystemsUI.Content.Tag.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
    var OS = OutSystems.Internal;
    
    
    var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
    _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
    return [
    this.attr("Color", "colorIn", "Color", true, false, OS.Types.Text, function () {
    return OutSystemsUIModel.staticEntities.color.primary;
    }, false), 
    this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("Size", "sizeIn", "Size", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("Shape", "shapeIn", "Shape", true, false, OS.Types.Text, function () {
    return OutSystemsUIModel.staticEntities.shape.rounded;
    }, false), 
    this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("IsLight", "isLightIn", "IsLight", true, false, OS.Types.Boolean, function () {
    return false;
    }, false), 
    this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", true, false, OS.Types.Integer, function () {
    return /*Fetched*/ 1;
    }, false), 
    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.Types.Text, function () {
    return "";
    }, false), 
    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
    if("Color" in inputs) {
    this.variables.colorIn = inputs.Color;
    if("_colorInDataFetchStatus" in inputs) {
    this.variables._colorInDataFetchStatus = inputs._colorInDataFetchStatus;
    }
    
    }
    
    if("Size" in inputs) {
    this.variables.sizeIn = inputs.Size;
    if("_sizeInDataFetchStatus" in inputs) {
    this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
    }
    
    }
    
    if("Shape" in inputs) {
    this.variables.shapeIn = inputs.Shape;
    if("_shapeInDataFetchStatus" in inputs) {
    this.variables._shapeInDataFetchStatus = inputs._shapeInDataFetchStatus;
    }
    
    }
    
    if("IsLight" in inputs) {
    this.variables.isLightIn = inputs.IsLight;
    if("_isLightInDataFetchStatus" in inputs) {
    this.variables._isLightInDataFetchStatus = inputs._isLightInDataFetchStatus;
    }
    
    }
    
    if("ExtendedClass" in inputs) {
    this.variables.extendedClassIn = inputs.ExtendedClass;
    if("_extendedClassInDataFetchStatus" in inputs) {
    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
    }
    
    }
    
    };
    return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Content.Tag");
    });
    define("OutSystemsUI.Content.Tag.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.Tag.mvc$model", "OutSystemsUI.Content.Tag.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_Tag_mvc_model, OutSystemsUI_Content_Tag_mvc_controller, OSWidgets) {
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
            View.displayName = "Content.Tag";
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
                    return OutSystemsUI_Content_Tag_mvc_model;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "controllerFactory", {
                get: function () {
                    return OutSystemsUI_Content_Tag_mvc_controller;
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
    
                return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
    align: /*Default*/ 0,
    content: _this.props.placeholders.tag,
    gridProperties: {
    classes: "OSInline"
    },
    style: model.getCachedValue(idService.getId("Tag.Style"), function () {
    return (((((("tag" + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" tag-" + model.variables.sizeIn)) : (""))) + " ") + "border-radius-") + model.variables.shapeIn) + ((model.variables.isLightIn) ? ((((((" " + "background-") + model.variables.colorIn) + "-lightest text-") + model.variables.colorIn) + "-darker")) : (((" " + "background-") + model.variables.colorIn)))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
    }, function () {
    return model.variables.sizeIn;
    }, function () {
    return model.variables.shapeIn;
    }, function () {
    return model.variables.isLightIn;
    }, function () {
    return model.variables.colorIn;
    }, function () {
    return model.variables.extendedClassIn;
    }),
    _idProps: {
    service: idService,
    name: "Tag"
    },
    _widgetRecordProvider: widgetsRecordProvider,
    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
    }));
            };
            return View;
        })(OSView.BaseView.BaseWebBlock);
        
        return View;
    });
    define("OutSystemsUI.Content.Tag.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.Tag.mvc$translationsResources"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_Tag_mvc_TranslationsResources) {
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
    Controller.prototype.translationResources = OutSystemsUI_Content_Tag_mvc_TranslationsResources;
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
    return OutSystemsUIController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
    });
    
    define("OutSystemsUI.Content.Tag.mvc$translationsResources", ["exports"], function (exports) {
    return {};
    });
    