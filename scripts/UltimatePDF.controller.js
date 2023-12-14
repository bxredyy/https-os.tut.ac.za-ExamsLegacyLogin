define("UltimatePDF.controller$CustomMarginSize", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.customMarginSize$Action = function (marginTopIn, marginRightIn, marginBottomIn, marginLeftIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.CustomMarginSize$vars"))());
    vars.value.marginTopInLocal = marginTopIn;
    vars.value.marginRightInLocal = marginRightIn;
    vars.value.marginBottomInLocal = marginBottomIn;
    vars.value.marginLeftInLocal = marginLeftIn;
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.CustomMarginSize$outVars"))());
    // MarginSizeId = TextToIdentifier
    outVars.value.marginSizeIdOut = OS.BuiltinFunctions.textToIdentifier(((((((OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(vars.value.marginTopInLocal, 2)) + "x") + OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(vars.value.marginRightInLocal, 2))) + "x") + OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(vars.value.marginBottomInLocal, 2))) + "x") + OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(vars.value.marginLeftInLocal, 2))));
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.CustomMarginSize$vars", [{
    name: "MarginTop",
    attrName: "marginTopInLocal",
    mandatory: true,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "MarginRight",
    attrName: "marginRightInLocal",
    mandatory: true,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "MarginBottom",
    attrName: "marginBottomInLocal",
    mandatory: true,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "MarginLeft",
    attrName: "marginLeftInLocal",
    mandatory: true,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.CustomMarginSize$outVars", [{
    name: "MarginSizeId",
    attrName: "marginSizeIdOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.customMarginSize$Action = function (marginTopIn, marginRightIn, marginBottomIn, marginLeftIn) {
    marginTopIn = (marginTopIn === undefined) ? OS.DataTypes.Decimal.defaultValue : marginTopIn;
    marginRightIn = (marginRightIn === undefined) ? OS.DataTypes.Decimal.defaultValue : marginRightIn;
    marginBottomIn = (marginBottomIn === undefined) ? OS.DataTypes.Decimal.defaultValue : marginBottomIn;
    marginLeftIn = (marginLeftIn === undefined) ? OS.DataTypes.Decimal.defaultValue : marginLeftIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.customMarginSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(marginTopIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(marginRightIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(marginBottomIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(marginLeftIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    MarginSizeId: actionResults.marginSizeIdOut
    };
    });
    };
    });
    
    define("UltimatePDF.controller$CustomPaperSize", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.customPaperSize$Action = function (widthIn, heightIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.CustomPaperSize$vars"))());
    vars.value.widthInLocal = widthIn;
    vars.value.heightInLocal = heightIn;
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.CustomPaperSize$outVars"))());
    // PaperSizeId = TextToIdentifier
    outVars.value.paperSizeIdOut = OS.BuiltinFunctions.textToIdentifier(((OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(vars.value.widthInLocal, 2)) + "x") + OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(vars.value.heightInLocal, 2))));
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.CustomPaperSize$vars", [{
    name: "Width",
    attrName: "widthInLocal",
    mandatory: true,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "Height",
    attrName: "heightInLocal",
    mandatory: true,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.CustomPaperSize$outVars", [{
    name: "PaperSizeId",
    attrName: "paperSizeIdOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.customPaperSize$Action = function (widthIn, heightIn) {
    widthIn = (widthIn === undefined) ? OS.DataTypes.Decimal.defaultValue : widthIn;
    heightIn = (heightIn === undefined) ? OS.DataTypes.Decimal.defaultValue : heightIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.customPaperSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    PaperSizeId: actionResults.paperSizeIdOut
    };
    });
    };
    });
    
    define("UltimatePDF.controller$IsReadyForCapture", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$IsReadyForCapture.IsReadyJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_IsReadyForCapture_IsReadyJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.isReadyForCapture$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    controller.safeExecuteJSNode(UltimatePDF_controller_IsReadyForCapture_IsReadyJS, "IsReady", "IsReadyForCapture", null, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.clientActionProxies.isReadyForCapture$Action = function () {
    return controller.executeActionInsideJSNode(UltimatePDFController.default.isReadyForCapture$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("UltimatePDF.controller$IsReadyForCapture.IsReadyJS", [], function () {
    return function ($actions, $roles, $public) {
    document.documentElement.classList.remove("ultimate-pdf-is-not-ready");
    };
    });
    
    define("UltimatePDF.controller$OnApplicationReady_UltimatePDF", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_InitializeRuntime"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.onApplicationReady_UltimatePDF$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: ScreenToPDF_InitializeRuntime
    return UltimatePDFController.default.screenToPDF_InitializeRuntime$Action(callContext);
    }).then(function () {
    return ;
    });
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.clientActionProxies.onApplicationReady_UltimatePDF$Action = function () {
    return controller.executeActionInsideJSNode(UltimatePDFController.default.onApplicationReady_UltimatePDF$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    
    define("UltimatePDF.controller$ParseMarginSize", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.parseMarginSize$Action = function (marginSizeIdIn, defaultMarginSizeIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ParseMarginSize$vars"))());
    vars.value.marginSizeIdInLocal = marginSizeIdIn;
    vars.value.defaultMarginSizeIdInLocal = defaultMarginSizeIdIn;
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ParseMarginSize$outVars"))());
    if(((vars.value.marginSizeIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
    // Use default
    // MarginSizeId = DefaultMarginSizeId
    vars.value.marginSizeIdInLocal = vars.value.defaultMarginSizeIdInLocal;
    }
    
    // ParseText = MarginSizeId
    vars.value.parseTextVar = vars.value.marginSizeIdInLocal;
    // SeparatorIndex = Index
    vars.value.separatorIndexVar = OS.BuiltinFunctions.index(vars.value.parseTextVar, "x", 0, false, false);
    if(((vars.value.separatorIndexVar >= 0))) {
    // MarginTopPart
    // MarginTopPart = Substr
    vars.value.marginTopPartVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, 0, vars.value.separatorIndexVar);
    // ParseText = Substr
    vars.value.parseTextVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, (vars.value.separatorIndexVar + 1), OS.BuiltinFunctions.length(vars.value.parseTextVar));
    // SeparatorIndex = Index
    vars.value.separatorIndexVar = OS.BuiltinFunctions.index(vars.value.parseTextVar, "x", 0, false, false);
    if(((vars.value.separatorIndexVar >= 0))) {
    // MarginRightPart
    // MarginRightPart = Substr
    vars.value.marginRightPartVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, 0, vars.value.separatorIndexVar);
    // ParseText = Substr
    vars.value.parseTextVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, (vars.value.separatorIndexVar + 1), OS.BuiltinFunctions.length(vars.value.parseTextVar));
    // SeparatorIndex = Index
    vars.value.separatorIndexVar = OS.BuiltinFunctions.index(vars.value.parseTextVar, "x", 0, false, false);
    if(((vars.value.separatorIndexVar >= 0))) {
    // MarginBottomPart, MarginLeftPart
    // MarginBottomPart = Substr
    vars.value.marginBottomPartVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, 0, vars.value.separatorIndexVar);
    // MarginLeftPart = Substr
    vars.value.marginLeftPartVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, (vars.value.separatorIndexVar + 1), OS.BuiltinFunctions.length(vars.value.parseTextVar));
    // Valid?
    if(((((((((OS.BuiltinFunctions.textToDecimalValidate(vars.value.marginTopPartVar) && OS.BuiltinFunctions.textToDecimalValidate(vars.value.marginRightPartVar)) && OS.BuiltinFunctions.textToDecimalValidate(vars.value.marginBottomPartVar)) && OS.BuiltinFunctions.textToDecimalValidate(vars.value.marginLeftPartVar)) && OS.BuiltinFunctions.textToDecimal(vars.value.marginTopPartVar).gte(OS.BuiltinFunctions.integerToDecimal(0))) && OS.BuiltinFunctions.textToDecimal(vars.value.marginRightPartVar).gte(OS.BuiltinFunctions.integerToDecimal(0))) && OS.BuiltinFunctions.textToDecimal(vars.value.marginBottomPartVar).gte(OS.BuiltinFunctions.integerToDecimal(0))) && OS.BuiltinFunctions.textToDecimal(vars.value.marginLeftPartVar).gte(OS.BuiltinFunctions.integerToDecimal(0))))) {
    // MarginTop = TextToDecimal
    outVars.value.marginTopOut = OS.BuiltinFunctions.textToDecimal(vars.value.marginTopPartVar);
    // MarginRight = TextToDecimal
    outVars.value.marginRightOut = OS.BuiltinFunctions.textToDecimal(vars.value.marginRightPartVar);
    // MarginBottom = TextToDecimal
    outVars.value.marginBottomOut = OS.BuiltinFunctions.textToDecimal(vars.value.marginBottomPartVar);
    // MarginLeft = TextToDecimal
    outVars.value.marginLeftOut = OS.BuiltinFunctions.textToDecimal(vars.value.marginLeftPartVar);
    } else {
    // Raise Error: InvalidMarginSize
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.InvalidMarginSize", ("Invalid margin size: " + vars.value.marginSizeIdInLocal));
    }
    
    } else {
    // Raise Error: InvalidMarginSize
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.InvalidMarginSize", ("Invalid margin size: " + vars.value.marginSizeIdInLocal));
    }
    
    } else {
    // Raise Error: InvalidMarginSize
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.InvalidMarginSize", ("Invalid margin size: " + vars.value.marginSizeIdInLocal));
    }
    
    } else {
    // Raise Error: InvalidMarginSize
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.InvalidMarginSize", ("Invalid margin size: " + vars.value.marginSizeIdInLocal));
    }
    
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ParseMarginSize$vars", [{
    name: "MarginSizeId",
    attrName: "marginSizeIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "DefaultMarginSizeId",
    attrName: "defaultMarginSizeIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "ParseText",
    attrName: "parseTextVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "SeparatorIndex",
    attrName: "separatorIndexVar",
    mandatory: false,
    dataType: OS.Types.Integer,
    defaultValue: function () {
    return 0;
    }
    }, {
    name: "MarginTopPart",
    attrName: "marginTopPartVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "MarginRightPart",
    attrName: "marginRightPartVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "MarginBottomPart",
    attrName: "marginBottomPartVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "MarginLeftPart",
    attrName: "marginLeftPartVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ParseMarginSize$outVars", [{
    name: "MarginTop",
    attrName: "marginTopOut",
    mandatory: false,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "MarginRight",
    attrName: "marginRightOut",
    mandatory: false,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "MarginBottom",
    attrName: "marginBottomOut",
    mandatory: false,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "MarginLeft",
    attrName: "marginLeftOut",
    mandatory: false,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }]);
    UltimatePDFController.default.clientActionProxies.parseMarginSize$Action = function (marginSizeIdIn, defaultMarginSizeIdIn) {
    marginSizeIdIn = (marginSizeIdIn === undefined) ? "" : marginSizeIdIn;
    defaultMarginSizeIdIn = (defaultMarginSizeIdIn === undefined) ? "" : defaultMarginSizeIdIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.parseMarginSize$Action.bind(controller, marginSizeIdIn, defaultMarginSizeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    MarginTop: OS.DataConversion.JSNodeParamConverter.to(actionResults.marginTopOut, OS.Types.Decimal),
    MarginRight: OS.DataConversion.JSNodeParamConverter.to(actionResults.marginRightOut, OS.Types.Decimal),
    MarginBottom: OS.DataConversion.JSNodeParamConverter.to(actionResults.marginBottomOut, OS.Types.Decimal),
    MarginLeft: OS.DataConversion.JSNodeParamConverter.to(actionResults.marginLeftOut, OS.Types.Decimal)
    };
    });
    };
    });
    
    define("UltimatePDF.controller$ParsePaperSize", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.parsePaperSize$Action = function (paperSizeIdIn, defaultPaperSizeIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ParsePaperSize$vars"))());
    vars.value.paperSizeIdInLocal = paperSizeIdIn;
    vars.value.defaultPaperSizeIdInLocal = defaultPaperSizeIdIn;
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ParsePaperSize$outVars"))());
    if(((vars.value.paperSizeIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
    // Use default
    // PaperSizeId = DefaultPaperSizeId
    vars.value.paperSizeIdInLocal = vars.value.defaultPaperSizeIdInLocal;
    }
    
    // ParseText = PaperSizeId
    vars.value.parseTextVar = vars.value.paperSizeIdInLocal;
    // SeparatorIndex = Index
    vars.value.separatorIndexVar = OS.BuiltinFunctions.index(vars.value.parseTextVar, "x", 0, false, false);
    if(((vars.value.separatorIndexVar >= 0))) {
    // WidthPart, HeightPart
    // WidthPart = Substr
    vars.value.widthPartVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, 0, vars.value.separatorIndexVar);
    // HeightPart = Substr
    vars.value.heightPartVar = OS.BuiltinFunctions.substr(vars.value.parseTextVar, (vars.value.separatorIndexVar + 1), OS.BuiltinFunctions.length(vars.value.parseTextVar));
    // Valid?
    if(((((OS.BuiltinFunctions.textToDecimalValidate(vars.value.widthPartVar) && OS.BuiltinFunctions.textToDecimalValidate(vars.value.heightPartVar)) && OS.BuiltinFunctions.textToDecimal(vars.value.widthPartVar).gt(OS.BuiltinFunctions.integerToDecimal(0))) && OS.BuiltinFunctions.textToDecimal(vars.value.heightPartVar).gt(OS.BuiltinFunctions.integerToDecimal(0))))) {
    // Width = TextToDecimal
    outVars.value.widthOut = OS.BuiltinFunctions.textToDecimal(vars.value.widthPartVar);
    // Height = TextToDecimal
    outVars.value.heightOut = OS.BuiltinFunctions.textToDecimal(vars.value.heightPartVar);
    } else {
    // Raise Error: InvalidPaperSize
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.InvalidPaperSize", ("Invalid paper size: " + vars.value.paperSizeIdInLocal));
    }
    
    } else {
    // Raise Error: InvalidPaperSize
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.InvalidPaperSize", ("Invalid paper size: " + vars.value.paperSizeIdInLocal));
    }
    
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ParsePaperSize$vars", [{
    name: "PaperSizeId",
    attrName: "paperSizeIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "DefaultPaperSizeId",
    attrName: "defaultPaperSizeIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "ParseText",
    attrName: "parseTextVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "SeparatorIndex",
    attrName: "separatorIndexVar",
    mandatory: false,
    dataType: OS.Types.Integer,
    defaultValue: function () {
    return 0;
    }
    }, {
    name: "WidthPart",
    attrName: "widthPartVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "HeightPart",
    attrName: "heightPartVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ParsePaperSize$outVars", [{
    name: "Width",
    attrName: "widthOut",
    mandatory: false,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }, {
    name: "Height",
    attrName: "heightOut",
    mandatory: false,
    dataType: OS.Types.Decimal,
    defaultValue: function () {
    return OS.DataTypes.Decimal.defaultValue;
    }
    }]);
    UltimatePDFController.default.clientActionProxies.parsePaperSize$Action = function (paperSizeIdIn, defaultPaperSizeIdIn) {
    paperSizeIdIn = (paperSizeIdIn === undefined) ? "" : paperSizeIdIn;
    defaultPaperSizeIdIn = (defaultPaperSizeIdIn === undefined) ? "" : defaultPaperSizeIdIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.parsePaperSize$Action.bind(controller, paperSizeIdIn, defaultPaperSizeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    Width: OS.DataConversion.JSNodeParamConverter.to(actionResults.widthOut, OS.Types.Decimal),
    Height: OS.DataConversion.JSNodeParamConverter.to(actionResults.heightOut, OS.Types.Decimal)
    };
    });
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_EncodeQueryParameters", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_EncodeQueryParameters.EncodeJS", "UltimatePDF.model$QueryParameterList"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_EncodeQueryParameters_EncodeJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_EncodeQueryParameters$Action = function (queryParametersListIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_EncodeQueryParameters$vars"))());
    vars.value.queryParametersListInLocal = queryParametersListIn.clone();
    var encodeJSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_EncodeQueryParameters$outVars"))());
    // Foreach QueryParametersList
    callContext.iterationContext.registerIterationStart(vars.value.queryParametersListInLocal);
    try {var queryParametersListIterator = callContext.iterationContext.getIterator(vars.value.queryParametersListInLocal);
    var queryParametersListIndex = 0;
    while (((queryParametersListIndex < vars.value.queryParametersListInLocal.length))) {
    queryParametersListIterator.currentRowNumber = queryParametersListIndex;
    encodeJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_EncodeQueryParameters_EncodeJS, "Encode", "ScreenToPDF_EncodeQueryParameters", {
    Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.queryParametersListInLocal.getItem(queryParametersListIndex.valueOf()).valueAttr, OS.Types.Text),
    Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.queryParametersListInLocal.getItem(queryParametersListIndex.valueOf()).nameAttr, OS.Types.Text),
    EncodedName: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
    EncodedValue: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_EncodeQueryParameters$encodeJSResult"))();
    jsNodeResult.encodedNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EncodedName, OS.Types.Text);
    jsNodeResult.encodedValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EncodedValue, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // QueryParameters = QueryParameters + If + Encode.EncodedName + "=" + Encode.EncodedValue
    outVars.value.queryParametersOut = ((((outVars.value.queryParametersOut + ((((outVars.value.queryParametersOut) !== (""))) ? ("&") : (""))) + encodeJSResult.value.encodedNameOut) + "=") + encodeJSResult.value.encodedValueOut);
    queryParametersListIndex++;
    }
    
    } finally {
    callContext.iterationContext.registerIterationEnd(vars.value.queryParametersListInLocal);
    }
    
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_EncodeQueryParameters$vars", [{
    name: "QueryParametersList",
    attrName: "queryParametersListInLocal",
    mandatory: true,
    dataType: OS.Types.RecordList,
    defaultValue: function () {
    return new UltimatePDFModel.QueryParameterList();
    },
    complexType: UltimatePDFModel.QueryParameterList
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_EncodeQueryParameters$encodeJSResult", [{
    name: "EncodedName",
    attrName: "encodedNameOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "EncodedValue",
    attrName: "encodedValueOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_EncodeQueryParameters$outVars", [{
    name: "QueryParameters",
    attrName: "queryParametersOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_EncodeQueryParameters$Action = function (queryParametersListIn) {
    queryParametersListIn = (queryParametersListIn === undefined) ? new UltimatePDFModel.QueryParameterList() : queryParametersListIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_EncodeQueryParameters$Action.bind(controller, queryParametersListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    QueryParameters: OS.DataConversion.JSNodeParamConverter.to(actionResults.queryParametersOut, OS.Types.Text)
    };
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_EncodeQueryParameters.EncodeJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.EncodedName = window.encodeURIComponent($parameters.Name);
    $parameters.EncodedValue = window.encodeURIComponent($parameters.Value);
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_GetRestURL", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_GetRestURL.BuildURLJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_GetRestURL_BuildURLJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_GetRestURL$Action = function (moduleIn, screenIn, queryParametersIn, filenameIn, localeIn, timezoneIn, openInBrowserIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetRestURL$vars"))());
    vars.value.moduleInLocal = moduleIn;
    vars.value.screenInLocal = screenIn;
    vars.value.queryParametersInLocal = queryParametersIn;
    vars.value.filenameInLocal = filenameIn;
    vars.value.localeInLocal = localeIn;
    vars.value.timezoneInLocal = timezoneIn;
    vars.value.openInBrowserInLocal = openInBrowserIn;
    var buildURLJSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetRestURL$outVars"))());
    buildURLJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_GetRestURL_BuildURLJS, "BuildURL", "ScreenToPDF_GetRestURL", {
    Locale: OS.DataConversion.JSNodeParamConverter.to(vars.value.localeInLocal, OS.Types.Text),
    QueryParameters: OS.DataConversion.JSNodeParamConverter.to(vars.value.queryParametersInLocal, OS.Types.Text),
    OwnerModule: OS.DataConversion.JSNodeParamConverter.to(vars.value.ownerModuleVar, OS.Types.Text),
    OpenInBrowser: OS.DataConversion.JSNodeParamConverter.to(vars.value.openInBrowserInLocal, OS.Types.Boolean),
    Timezone: OS.DataConversion.JSNodeParamConverter.to(vars.value.timezoneInLocal, OS.Types.Text),
    Module: OS.DataConversion.JSNodeParamConverter.to(vars.value.moduleInLocal, OS.Types.Text),
    Filename: OS.DataConversion.JSNodeParamConverter.to(vars.value.filenameInLocal, OS.Types.Text),
    Screen: OS.DataConversion.JSNodeParamConverter.to(vars.value.screenInLocal, OS.Types.Text),
    URL: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetRestURL$buildURLJSResult"))();
    jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // URL = BuildURL.URL
    outVars.value.uRLOut = buildURLJSResult.value.uRLOut;
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetRestURL$vars", [{
    name: "Module",
    attrName: "moduleInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Screen",
    attrName: "screenInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "QueryParameters",
    attrName: "queryParametersInLocal",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Filename",
    attrName: "filenameInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Locale",
    attrName: "localeInLocal",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Timezone",
    attrName: "timezoneInLocal",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "OpenInBrowser",
    attrName: "openInBrowserInLocal",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }, {
    name: "OwnerModule",
    attrName: "ownerModuleVar",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "UltimatePDF";
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetRestURL$buildURLJSResult", [{
    name: "URL",
    attrName: "uRLOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetRestURL$outVars", [{
    name: "URL",
    attrName: "uRLOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_GetRestURL$Action = function (moduleIn, screenIn, queryParametersIn, filenameIn, localeIn, timezoneIn, openInBrowserIn) {
    moduleIn = (moduleIn === undefined) ? "" : moduleIn;
    screenIn = (screenIn === undefined) ? "" : screenIn;
    queryParametersIn = (queryParametersIn === undefined) ? "" : queryParametersIn;
    filenameIn = (filenameIn === undefined) ? "" : filenameIn;
    localeIn = (localeIn === undefined) ? "" : localeIn;
    timezoneIn = (timezoneIn === undefined) ? "" : timezoneIn;
    openInBrowserIn = (openInBrowserIn === undefined) ? false : openInBrowserIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_GetRestURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(moduleIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(screenIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(queryParametersIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(localeIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(timezoneIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(openInBrowserIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.Types.Text)
    };
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_GetRestURL.BuildURLJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.URL = "/" + $parameters.OwnerModule +
                      "/rest/pdf" +
                      "/" + $parameters.Module +
                      ($parameters.Screen? "/" + $parameters.Screen : "") + "?" +
                      "$filename=" + window.encodeURIComponent($parameters.Filename) +
                      "&$inline=" + ($parameters.OpenInBrowser? "true" : "false") +
                      ($parameters.Locale? "&$locale=" + window.encodeURIComponent($parameters.Locale) : "") +
                      ($parameters.Timezone? "&$timezone=" + window.encodeURIComponent($parameters.Timezone) : "") +
                      ($parameters.QueryParameters? "&" + $parameters.QueryParameters : "");
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_GetTimezone", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_GetTimezone.GetTimezoneJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_GetTimezone_GetTimezoneJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_GetTimezone$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    var getTimezoneJSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetTimezone$outVars"))());
    getTimezoneJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_GetTimezone_GetTimezoneJS, "GetTimezone", "ScreenToPDF_GetTimezone", {
    Timezone: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetTimezone$getTimezoneJSResult"))();
    jsNodeResult.timezoneOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Timezone, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // Timezone = GetTimezone.Timezone
    outVars.value.timezoneOut = getTimezoneJSResult.value.timezoneOut;
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetTimezone$getTimezoneJSResult", [{
    name: "Timezone",
    attrName: "timezoneOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetTimezone$outVars", [{
    name: "Timezone",
    attrName: "timezoneOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_GetTimezone$Action = function () {
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_GetTimezone$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    Timezone: OS.DataConversion.JSNodeParamConverter.to(actionResults.timezoneOut, OS.Types.Text)
    };
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_GetTimezone.GetTimezoneJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.Timezone = window.Intl.DateTimeFormat().resolvedOptions().timeZone;
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_GetURL", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_GetRestURL", "UltimatePDF.controller$ScreenToPDF_GetTimezone"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_GetURL$Action = function (moduleIn, screenIn, queryParametersIn, filenameIn, openInBrowserIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetURL$vars"))());
    vars.value.moduleInLocal = moduleIn;
    vars.value.screenInLocal = screenIn;
    vars.value.queryParametersInLocal = queryParametersIn;
    vars.value.filenameInLocal = filenameIn;
    vars.value.openInBrowserInLocal = openInBrowserIn;
    var screenToPDF_GetRestURLVar = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_GetURL$outVars"))());
    // Execute Action: ScreenToPDF_GetRestURL
    screenToPDF_GetRestURLVar.value = UltimatePDFController.default.screenToPDF_GetRestURL$Action(vars.value.moduleInLocal, vars.value.screenInLocal, vars.value.queryParametersInLocal, vars.value.filenameInLocal, OS.BuiltinFunctions.getCurrentLocale(), UltimatePDFController.default.screenToPDF_GetTimezone$Action(callContext).timezoneOut, vars.value.openInBrowserInLocal, callContext);
    
    // URL = ScreenToPDF_GetRestURL.URL
    outVars.value.uRLOut = screenToPDF_GetRestURLVar.value.uRLOut;
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetURL$vars", [{
    name: "Module",
    attrName: "moduleInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Screen",
    attrName: "screenInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "QueryParameters",
    attrName: "queryParametersInLocal",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Filename",
    attrName: "filenameInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "OpenInBrowser",
    attrName: "openInBrowserInLocal",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_GetURL$outVars", [{
    name: "URL",
    attrName: "uRLOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_GetURL$Action = function (moduleIn, screenIn, queryParametersIn, filenameIn, openInBrowserIn) {
    moduleIn = (moduleIn === undefined) ? "" : moduleIn;
    screenIn = (screenIn === undefined) ? "" : screenIn;
    queryParametersIn = (queryParametersIn === undefined) ? "" : queryParametersIn;
    filenameIn = (filenameIn === undefined) ? "" : filenameIn;
    openInBrowserIn = (openInBrowserIn === undefined) ? false : openInBrowserIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_GetURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(moduleIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(screenIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(queryParametersIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(openInBrowserIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.Types.Text)
    };
    });
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_HasExecutedOnInitialize", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_HasExecutedOnInitialize.CheckExecutedOnInitializeJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_HasExecutedOnInitialize_CheckExecutedOnInitializeJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_HasExecutedOnInitialize$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    var checkExecutedOnInitializeJSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_HasExecutedOnInitialize$outVars"))());
    checkExecutedOnInitializeJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_HasExecutedOnInitialize_CheckExecutedOnInitializeJS, "CheckExecutedOnInitialize", "ScreenToPDF_HasExecutedOnInitialize", {
    HasExecutedOnInitialize: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_HasExecutedOnInitialize$checkExecutedOnInitializeJSResult"))();
    jsNodeResult.hasExecutedOnInitializeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasExecutedOnInitialize, OS.Types.Boolean);
    return jsNodeResult;
    }, {}, {});
    // HasExecutedOnInitialize = CheckExecutedOnInitialize.HasExecutedOnInitialize
    outVars.value.hasExecutedOnInitializeOut = checkExecutedOnInitializeJSResult.value.hasExecutedOnInitializeOut;
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_HasExecutedOnInitialize$checkExecutedOnInitializeJSResult", [{
    name: "HasExecutedOnInitialize",
    attrName: "hasExecutedOnInitializeOut",
    mandatory: true,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_HasExecutedOnInitialize$outVars", [{
    name: "HasExecutedOnInitialize",
    attrName: "hasExecutedOnInitializeOut",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_HasExecutedOnInitialize$Action = function () {
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_HasExecutedOnInitialize$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    HasExecutedOnInitialize: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasExecutedOnInitializeOut, OS.Types.Boolean)
    };
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_HasExecutedOnInitialize.CheckExecutedOnInitializeJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.HasExecutedOnInitialize = window.UltimatePDF && window.UltimatePDF.runtime && window.UltimatePDF.runtime.screenInitialized? true : false;
    
    if ($parameters.HasExecutedOnInitialize) {
        // Reset it for next screen
        window.UltimatePDF.runtime.screenInitialized = false;
    }
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_InitializeRuntime", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_InitializeRuntime.RuntimeJS", "UltimatePDF.controller$ScreenToPDF_InitializeRuntime.HasRuntimeJS", "UltimatePDF.controller$ScreenToPDF_InitializeRuntime.WaitForRuntimeJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_InitializeRuntime_RuntimeJS, UltimatePDF_controller_ScreenToPDF_InitializeRuntime_HasRuntimeJS, UltimatePDF_controller_ScreenToPDF_InitializeRuntime_WaitForRuntimeJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_InitializeRuntime$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    var hasRuntimeJSResult = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    hasRuntimeJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_InitializeRuntime_HasRuntimeJS, "HasRuntime", "ScreenToPDF_InitializeRuntime", {
    HasRuntime: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_InitializeRuntime$hasRuntimeJSResult"))();
    jsNodeResult.hasRuntimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasRuntime, OS.Types.Boolean);
    return jsNodeResult;
    }, {}, {});
    return OS.Flow.executeSequence(function () {
    if((!(hasRuntimeJSResult.value.hasRuntimeOut))) {
    return controller.safeExecuteAsyncJSNode(UltimatePDF_controller_ScreenToPDF_InitializeRuntime_RuntimeJS, "Runtime", "ScreenToPDF_InitializeRuntime", null, function ($parameters) {
    }, {
    SetCurrentLocale: OS.SystemActions.setCurrentLocale
    }, {});
    } else {
    return controller.safeExecuteAsyncJSNode(UltimatePDF_controller_ScreenToPDF_InitializeRuntime_WaitForRuntimeJS, "WaitForRuntime", "ScreenToPDF_InitializeRuntime", null, function ($parameters) {
    }, {}, {});
    }
    
    });
    }).then(function () {
    return ;
    });
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_InitializeRuntime$hasRuntimeJSResult", [{
    name: "HasRuntime",
    attrName: "hasRuntimeOut",
    mandatory: true,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_InitializeRuntime$Action = function () {
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_InitializeRuntime$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_InitializeRuntime.RuntimeJS", [], function () {
    return function ($actions, $roles, $public) {
    return new Promise(function ($resolve, $reject) {
    window.UltimatePDF = window.UltimatePDF || {};
    window.UltimatePDF.runtime = {};
    window.UltimatePDF.runtime.initialized = new Promise(function(resolve, reject) {
    
    
        window.require(["OutSystems/ClientRuntime/Navigation", "OutSystems/ClientRuntime/Controller", "OutSystems/ClientRuntime/Application", "OutSystems/ClientRuntime/ApplicationInfo"], function(Navigation, Controller, Application, ApplicationInfo) {
            var BaseViewController = Controller.BaseViewController;
    
    
            // Prevent the runtime from being loaded after the application is ready,
            // because it would be too late to intercept navigations
            if (Application.default.isReady) {
                return reject("OnApplicationReady_UltimatePDF action must be invoked during the OnApplicationReady event of the module");
            }
    
    
            // In case the user opens the application directly on the screen using
            // ScreenToPDF, it might be possible that the screen OnInitialize
            // executes before the OnApplicationReady.
            // In that case, it's too late to intercept navigations, but we can
            // use the current screen information.
            var navigatingToLocation = window.location;
            var navigatingFromActiveScreen = BaseViewController.activeScreen;
    
    
    
            // Intercepts navigations and stores the location and active screen
            var onBeforeNavigate = Navigation.onBeforeNavigate;
            Navigation.onBeforeNavigate = function(nextLocation, isBackNavigation) {
                // Update the navigation variables
                navigatingToLocation = nextLocation;
                navigatingFromActiveScreen = BaseViewController.activeScreen;
                
                return onBeforeNavigate.call(this, nextLocation, isBackNavigation);
            };
    
    
    
            // Expose runtime functions to retrieve the location and restore the active screen
            window.UltimatePDF.runtime.getLocation = function() {
                var location = navigatingToLocation;
                if (navigatingFromActiveScreen) {
                    navigatingFromActiveScreen.setAsActiveScreen();
                }
    
                navigatingToLocation = null;
                navigatingFromActiveScreen = null;
                
                // Make sure pathname includes the module name
                if (ApplicationInfo.getBasePath() == "/") {
                    location.pathname = "/" + ApplicationInfo.getHomeModuleName() + location.pathname;
                }
    
                return location;
            };
    
    
            window.UltimatePDF.runtime.setLocale = function(locale) {
                $actions.SetCurrentLocale(locale);
            };
    
            resolve();
    
    
        });
    
    
    });
    
    
    window.UltimatePDF.runtime.initialized.then($resolve).catch($reject);
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_InitializeRuntime.HasRuntimeJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.HasRuntime = window.UltimatePDF && window.UltimatePDF.runtime? true : false;
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_InitializeRuntime.WaitForRuntimeJS", [], function () {
    return function ($actions, $roles, $public) {
    return new Promise(function ($resolve, $reject) {
    window.UltimatePDF.runtime.initialized.then($resolve).catch($reject);
    });
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_OnInitialize", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_OnInitialize.GetLocationInfoJS", "UltimatePDF.controller$ScreenToPDF_OnInitialize.GoToURLJS", "UltimatePDF.controller$ScreenToPDF_OnInitialize.FailedRuntimeInitializationJS", "UltimatePDF.controller$ScreenToPDF_OnInitialize.InitializedJS", "UltimatePDF.controller$ScreenToPDF_GetURL", "UltimatePDF.controller$ScreenToPDF_InitializeRuntime", "UltimatePDF.controller$ScreenToPDF_ShouldRender"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_OnInitialize_GetLocationInfoJS, UltimatePDF_controller_ScreenToPDF_OnInitialize_GoToURLJS, UltimatePDF_controller_ScreenToPDF_OnInitialize_FailedRuntimeInitializationJS, UltimatePDF_controller_ScreenToPDF_OnInitialize_InitializedJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_OnInitialize$Action = function (filenameIn, openInBrowserIn, previewIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_OnInitialize$vars"))());
    vars.value.filenameInLocal = filenameIn;
    vars.value.openInBrowserInLocal = openInBrowserIn;
    vars.value.previewInLocal = previewIn;
    var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
    var screenToPDF_GetURLVar = new OS.DataTypes.VariableHolder();
    var screenToPDF_ShouldRenderVar = new OS.DataTypes.VariableHolder();
    var getLocationInfoJSResult = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    // Execute Action: ScreenToPDF_InitializeRuntime
    return UltimatePDFController.default.screenToPDF_InitializeRuntime$Action(callContext).then(function () {
    // Execute Action: ScreenToPDF_ShouldRender
    screenToPDF_ShouldRenderVar.value = UltimatePDFController.default.screenToPDF_ShouldRender$Action(vars.value.previewInLocal, callContext);
    
    }).then(function () {
    return OS.Flow.executeSequence(function () {
    if((!(screenToPDF_ShouldRenderVar.value.renderContentOut))) {
    getLocationInfoJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_OnInitialize_GetLocationInfoJS, "GetLocationInfo", "ScreenToPDF_OnInitialize", {
    Module: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
    Screen: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
    QueryParameters: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_OnInitialize$getLocationInfoJSResult"))();
    jsNodeResult.moduleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Module, OS.Types.Text);
    jsNodeResult.screenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Screen, OS.Types.Text);
    jsNodeResult.queryParametersOut = OS.DataConversion.JSNodeParamConverter.from($parameters.QueryParameters, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // Execute Action: ScreenToPDF_GetURL
    screenToPDF_GetURLVar.value = UltimatePDFController.default.screenToPDF_GetURL$Action(getLocationInfoJSResult.value.moduleOut, getLocationInfoJSResult.value.screenOut, getLocationInfoJSResult.value.queryParametersOut, vars.value.filenameInLocal, vars.value.openInBrowserInLocal, callContext);
    
    return controller.safeExecuteAsyncJSNode(UltimatePDF_controller_ScreenToPDF_OnInitialize_GoToURLJS, "GoToURL", "ScreenToPDF_OnInitialize", {
    Module: OS.DataConversion.JSNodeParamConverter.to(getLocationInfoJSResult.value.moduleOut, OS.Types.Text),
    URL: OS.DataConversion.JSNodeParamConverter.to(screenToPDF_GetURLVar.value.uRLOut, OS.Types.Text),
    Screen: OS.DataConversion.JSNodeParamConverter.to(getLocationInfoJSResult.value.screenOut, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    } else {
    controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_OnInitialize_InitializedJS, "Initialized", "ScreenToPDF_OnInitialize", null, function ($parameters) {
    }, {}, {});
    }
    
    });
    });
    }).catch(function (ex) {
    OS.Logger.trace("ScreenToPDF_OnInitialize.ScreenToPDF_OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
    // Handle Error: AllExceptions
    if(!(OS.Exceptions.isSystem(ex))) {
    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
    return OS.Flow.executeAsyncFlow(function () {
    controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_OnInitialize_FailedRuntimeInitializationJS, "FailedRuntimeInitialization", "ScreenToPDF_OnInitialize", null, function ($parameters) {
    }, {}, {});
    // Raise Error: OnApplicationReadyMissing
    throw new OS.Exceptions.Exceptions.UserException("UltimatePDF.OnApplicationReadyMissing", allExceptionsVar.value.exceptionMessageAttr);
    });
    }
    
    throw ex;
    }).then(function () {
    return ;
    });
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_OnInitialize$vars", [{
    name: "Filename",
    attrName: "filenameInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "OpenInBrowser",
    attrName: "openInBrowserInLocal",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }, {
    name: "Preview",
    attrName: "previewInLocal",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_OnInitialize$getLocationInfoJSResult", [{
    name: "Module",
    attrName: "moduleOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Screen",
    attrName: "screenOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "QueryParameters",
    attrName: "queryParametersOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_OnInitialize$Action = function (filenameIn, openInBrowserIn, previewIn) {
    filenameIn = (filenameIn === undefined) ? "" : filenameIn;
    openInBrowserIn = (openInBrowserIn === undefined) ? false : openInBrowserIn;
    previewIn = (previewIn === undefined) ? false : previewIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_OnInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(openInBrowserIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(previewIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_OnInitialize.GetLocationInfoJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    var location = window.UltimatePDF.runtime.getLocation();
    
    var paths = location.pathname.substr(1).split("/");
    $parameters.Module = paths[0];
    $parameters.Screen = paths[1];
    
    if (location.search) {
        $parameters.QueryParameters = location.search.substr(1);
    }
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_OnInitialize.GoToURLJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    return new Promise(function ($resolve, $reject) {
    window.require(["OutSystems/ReactView/Router"], function(Router) {
        var routes = Router.getRouteInfos();
    
    
        // Find the view module name for the current screen
        var pathname = "/" + $parameters.Module + ($parameters.Screen? "/" + $parameters.Screen : "");
        var viewModuleName;
    
        for (var i = 0; i < routes.length; i++) {
            if (routes[i].pathname == pathname) {
                viewModuleName = routes[i].lazyComponentInfo.viewModuleName;
                break;
            }
        }
    
    
        // Waits for all dependencies of the screen to be loaded,
        // prevents an error in Firefox due to script loads being
        // aborted when navigating away
        window.require([viewModuleName], function() {
            window.location = $parameters.URL;
        });
    
    
    });
    
    
    
    
    // Never resolve to prevent the screen from rendering in the browser
    if (false) {
        $resolve();
    }
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_OnInitialize.FailedRuntimeInitializationJS", [], function () {
    return function ($actions, $roles, $public) {
    window.UltimatePDF.runtime.screenInitialized = true;
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_OnInitialize.InitializedJS", [], function () {
    return function ($actions, $roles, $public) {
    window.UltimatePDF.runtime.screenInitialized = true;
    };
    });
    
    define("UltimatePDF.controller$ScreenToPDF_ShouldRender", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$ScreenToPDF_ShouldRender.CheckUserAgentJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_ScreenToPDF_ShouldRender_CheckUserAgentJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.screenToPDF_ShouldRender$Action = function (previewIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_ShouldRender$vars"))());
    vars.value.previewInLocal = previewIn;
    var checkUserAgentJSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_ShouldRender$outVars"))());
    checkUserAgentJSResult.value = controller.safeExecuteJSNode(UltimatePDF_controller_ScreenToPDF_ShouldRender_CheckUserAgentJS, "CheckUserAgent", "ScreenToPDF_ShouldRender", {
    IsUserAgentUltimatePDF: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("UltimatePDF.ScreenToPDF_ShouldRender$checkUserAgentJSResult"))();
    jsNodeResult.isUserAgentUltimatePDFOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsUserAgentUltimatePDF, OS.Types.Boolean);
    return jsNodeResult;
    }, {}, {});
    // RenderContent = CheckUserAgent.IsUserAgentUltimatePDF or Preview
    outVars.value.renderContentOut = (checkUserAgentJSResult.value.isUserAgentUltimatePDFOut || vars.value.previewInLocal);
    return outVars.value;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_ShouldRender$vars", [{
    name: "Preview",
    attrName: "previewInLocal",
    mandatory: true,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_ShouldRender$checkUserAgentJSResult", [{
    name: "IsUserAgentUltimatePDF",
    attrName: "isUserAgentUltimatePDFOut",
    mandatory: true,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.constructor.registerVariableGroupType("UltimatePDF.ScreenToPDF_ShouldRender$outVars", [{
    name: "RenderContent",
    attrName: "renderContentOut",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return false;
    }
    }]);
    UltimatePDFController.default.clientActionProxies.screenToPDF_ShouldRender$Action = function (previewIn) {
    previewIn = (previewIn === undefined) ? false : previewIn;
    return controller.executeActionInsideJSNode(UltimatePDFController.default.screenToPDF_ShouldRender$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(previewIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    RenderContent: OS.DataConversion.JSNodeParamConverter.to(actionResults.renderContentOut, OS.Types.Boolean)
    };
    });
    };
    });
    define("UltimatePDF.controller$ScreenToPDF_ShouldRender.CheckUserAgentJS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    $parameters.IsUserAgentUltimatePDF = window.navigator.userAgent.includes("UltimatePDF/");
    };
    });
    
    define("UltimatePDF.controller$WaitUntilReadyBeforeCapturing", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model", "UltimatePDF.controller", "UltimatePDF.controller$WaitUntilReadyBeforeCapturing.NotReadyJS"], function (exports, OutSystems, UltimatePDFModel, UltimatePDFController, UltimatePDF_controller_WaitUntilReadyBeforeCapturing_NotReadyJS) {
    var OS = OutSystems.Internal;
    UltimatePDFController.default.waitUntilReadyBeforeCapturing$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    controller.safeExecuteJSNode(UltimatePDF_controller_WaitUntilReadyBeforeCapturing_NotReadyJS, "NotReady", "WaitUntilReadyBeforeCapturing", null, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = UltimatePDFController.default;
    UltimatePDFController.default.clientActionProxies.waitUntilReadyBeforeCapturing$Action = function () {
    return controller.executeActionInsideJSNode(UltimatePDFController.default.waitUntilReadyBeforeCapturing$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("UltimatePDF.controller$WaitUntilReadyBeforeCapturing.NotReadyJS", [], function () {
    return function ($actions, $roles, $public) {
    document.documentElement.classList.add("ultimate-pdf-is-not-ready");
    };
    });
    
    define("UltimatePDF.controller", ["exports", "OutSystems/ClientRuntime/Main", "UltimatePDF.model"], function (exports, OutSystems, UltimatePDFModel) {
    var OS = OutSystems.Internal;
    var UltimatePDFController = exports;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    }
    Controller.prototype.clientActionProxies = {};
    Controller.prototype.roles = {};
    Controller.prototype.defaultTimeout = 10;
    Controller.prototype.getDefaultTimeout = function () {
    return UltimatePDFController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseModuleController);
    UltimatePDFController.default = new Controller(null, "UltimatePDF");
    });
    