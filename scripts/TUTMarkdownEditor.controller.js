define("TUTMarkdownEditor.controller$MarkdownEditor_Blur", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_Blur.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_Blur_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_Blur$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Blur$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_Blur_JavaScript1JS, "JavaScript1", "MarkdownEditor_Blur", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Blur$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_Blur$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_Blur$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_Blur.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.blur($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_Focus", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_Focus.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_Focus_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_Focus$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Focus$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_Focus_JavaScript1JS, "JavaScript1", "MarkdownEditor_Focus", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Focus$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_Focus$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_Focus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_Focus.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.focus($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetDefaultConfig", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.model$MarkdownConfigRec"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_GetDefaultConfig$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetDefaultConfig$outVars"))());
    return outVars.value;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetDefaultConfig$outVars", [{
    name: "DefaultConfig",
    attrName: "defaultConfigOut",
    mandatory: false,
    dataType: OS.Types.Record,
    defaultValue: function () {
    return new TUTMarkdownEditorModel.MarkdownConfigRec();
    },
    complexType: TUTMarkdownEditorModel.MarkdownConfigRec
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_GetDefaultConfig$Action = function () {
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_GetDefaultConfig$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    DefaultConfig: actionResults.defaultConfigOut
    };
    });
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetEmptyToolbar", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_GetEmptyToolbar$Action = function (callContext) {
    callContext = controller.callContext(callContext);
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetEmptyToolbar$outVars"))());
    // EmptyToolbar = "-"
    outVars.value.emptyToolbarOut = "-";
    return outVars.value;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetEmptyToolbar$outVars", [{
    name: "EmptyToolbar",
    attrName: "emptyToolbarOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_GetEmptyToolbar$Action = function () {
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_GetEmptyToolbar$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    EmptyToolbar: OS.DataConversion.JSNodeParamConverter.to(actionResults.emptyToolbarOut, OS.Types.Text)
    };
    });
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetFileForLanguage", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_GetFileForLanguage$Action = function (languageIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetFileForLanguage$vars"))());
    vars.value.languageInLocal = languageIn;
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetFileForLanguage$outVars"))());
    // Language = ToLower
    vars.value.languageInLocal = OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(vars.value.languageInLocal));
    if((((vars.value.languageInLocal === "de") || (vars.value.languageInLocal === "de-de")))) {
    // Url = Scripts.toastui_lang_dede.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_dede.js");
    } else {
    if(((vars.value.languageInLocal === "es") || (vars.value.languageInLocal === "es-es"))) {
    // Url = Scripts.toastui_lang_eses.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_eses.js");
    } else {
    if(((vars.value.languageInLocal === "fr") || (vars.value.languageInLocal === "fr-fr"))) {
    // Url = Scripts.toastui_lang_frfr.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_frfr.js");
    } else {
    if(((vars.value.languageInLocal === "it") || (vars.value.languageInLocal === "it-it"))) {
    // Url = Scripts.toastui_lang_itit.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_itit.js");
    } else {
    if(((vars.value.languageInLocal === "ja") || (vars.value.languageInLocal === "ja-jp"))) {
    // Url = Scripts.toastui_lang_jajp.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_jajp.js");
    } else {
    if(((vars.value.languageInLocal === "ko") || (vars.value.languageInLocal === "ko-kr"))) {
    // Url = Scripts.toastui_lang_kokr.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_kokr.js");
    } else {
    if((vars.value.languageInLocal === "ar")) {
    // Url = Scripts.toastui_lang_ar.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_ar.js");
    } else {
    if(((vars.value.languageInLocal === "cs") || (vars.value.languageInLocal === "cs-cz"))) {
    // Url = Scripts.toastui_lang_cscz.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_cscz.js");
    } else {
    if(((vars.value.languageInLocal === "fi") || (vars.value.languageInLocal === "fi-fi"))) {
    // Url = Scripts.toastui_lang_fifi.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_fifi.js");
    } else {
    if(((vars.value.languageInLocal === "gl") || (vars.value.languageInLocal === "gl-es"))) {
    // Url = Scripts.toastui_lang_gles.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_gles.js");
    } else {
    if(((vars.value.languageInLocal === "nb") || (vars.value.languageInLocal === "nb-no"))) {
    // Url = Scripts.toastui_lang_nbno.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_nbno.js");
    } else {
    if(((vars.value.languageInLocal === "nl") || (vars.value.languageInLocal === "nl-nl"))) {
    // Url = Scripts.toastui_lang_nlnl.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_nlnl.js");
    } else {
    if(((vars.value.languageInLocal === "nl") || (vars.value.languageInLocal === "nl-nl"))) {
    // Url = Scripts.toastui_lang_nlnl.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_nlnl.js");
    } else {
    if(((vars.value.languageInLocal === "pl") || (vars.value.languageInLocal === "pl-pl"))) {
    // Url = Scripts.toastui_lang_plpl.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_plpl.js");
    } else {
    if(((vars.value.languageInLocal === "ru") || (vars.value.languageInLocal === "ru-ru"))) {
    // Url = Scripts.toastui_lang_ruru.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_ruru.js");
    } else {
    if(((vars.value.languageInLocal === "sv") || (vars.value.languageInLocal === "sv-se"))) {
    // Url = Scripts.toastui_lang_svse.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_svse.js");
    } else {
    if(((vars.value.languageInLocal === "tr") || (vars.value.languageInLocal === "tr-tr"))) {
    // Url = Scripts.toastui_lang_trtr.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_trtr.js");
    } else {
    if(((vars.value.languageInLocal === "uk") || (vars.value.languageInLocal === "uk-ua"))) {
    // Url = Scripts.toastui_lang_ukua.URL
    outVars.value.urlOut = OS.Navigation.VersionedURL.getVersionedUrl("scripts/TUTMarkdownEditor.toastui_lang_ukua.js");
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }
    
    return outVars.value;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetFileForLanguage$vars", [{
    name: "Language",
    attrName: "languageInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetFileForLanguage$outVars", [{
    name: "Url",
    attrName: "urlOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_GetFileForLanguage$Action = function (languageIn) {
    languageIn = (languageIn === undefined) ? "" : languageIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_GetFileForLanguage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    Url: OS.DataConversion.JSNodeParamConverter.to(actionResults.urlOut, OS.Types.Text)
    };
    });
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetHtml", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_GetHtml.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_GetHtml_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_GetHtml$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetHtml$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    var javaScript1JSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetHtml$outVars"))());
    javaScript1JSResult.value = controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_GetHtml_JavaScript1JS, "JavaScript1", "MarkdownEditor_GetHtml", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
    Html: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetHtml$javaScript1JSResult"))();
    jsNodeResult.htmlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Html, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // Html
    // Html = JavaScript1.Html
    outVars.value.htmlOut = javaScript1JSResult.value.htmlOut;
    return outVars.value;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetHtml$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetHtml$javaScript1JSResult", [{
    name: "Html",
    attrName: "htmlOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetHtml$outVars", [{
    name: "Html",
    attrName: "htmlOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_GetHtml$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_GetHtml$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    Html: OS.DataConversion.JSNodeParamConverter.to(actionResults.htmlOut, OS.Types.Text)
    };
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetHtml.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    // MarkdownEditor_GetHtml()
    if (MarkdownEditorPluginFactory) {
        $parameters.Html = MarkdownEditorPluginFactory.getHtml($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetMarkdown", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_GetMarkdown.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_GetMarkdown_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_GetMarkdown$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetMarkdown$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    var javaScript1JSResult = new OS.DataTypes.VariableHolder();
    var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetMarkdown$outVars"))());
    javaScript1JSResult.value = controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_GetMarkdown_JavaScript1JS, "JavaScript1", "MarkdownEditor_GetMarkdown", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
    Markdown: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
    }, function ($parameters) {
    var jsNodeResult = new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetMarkdown$javaScript1JSResult"))();
    jsNodeResult.markdownOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Markdown, OS.Types.Text);
    return jsNodeResult;
    }, {}, {});
    // Html
    // Markdown = JavaScript1.Markdown
    outVars.value.markdownOut = javaScript1JSResult.value.markdownOut;
    return outVars.value;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetMarkdown$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetMarkdown$javaScript1JSResult", [{
    name: "Markdown",
    attrName: "markdownOut",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_GetMarkdown$outVars", [{
    name: "Markdown",
    attrName: "markdownOut",
    mandatory: false,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_GetMarkdown$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_GetMarkdown$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {
    Markdown: OS.DataConversion.JSNodeParamConverter.to(actionResults.markdownOut, OS.Types.Text)
    };
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_GetMarkdown.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    // MarkdownEditor_GetMarkdown()
    if (MarkdownEditorPluginFactory) {
        $parameters.Markdown = MarkdownEditorPluginFactory.getMarkdown($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_Hide", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_Hide.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_Hide_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_Hide$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Hide$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_Hide_JavaScript1JS, "JavaScript1", "MarkdownEditor_Hide", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Hide$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_Hide$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_Hide$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_Hide.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.hide($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_LoadLanguageScript", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_GetFileForLanguage"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_LoadLanguageScript$Action = function (languageIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_LoadLanguageScript$vars"))());
    vars.value.languageInLocal = languageIn;
    var markdownEditor_GetFileForLanguageVar = new OS.DataTypes.VariableHolder();
    return OS.Flow.executeAsyncFlow(function () {
    return OS.Flow.executeSequence(function () {
    if((((vars.value.languageInLocal) !== ("")))) {
    // Execute Action: MarkdownEditor_GetFileForLanguage
    markdownEditor_GetFileForLanguageVar.value = TUTMarkdownEditorController.default.markdownEditor_GetFileForLanguage$Action(vars.value.languageInLocal, callContext);
    
    return OS.Flow.executeSequence(function () {
    if((((markdownEditor_GetFileForLanguageVar.value.urlOut) !== ("")))) {
    // Execute Action: RequireScript
    return OS.SystemActions.requireScript(markdownEditor_GetFileForLanguageVar.value.urlOut, callContext);
    }
    
    });
    }
    
    });
    }).then(function () {
    return ;
    });
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_LoadLanguageScript$vars", [{
    name: "Language",
    attrName: "languageInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_LoadLanguageScript$Action = function (languageIn) {
    languageIn = (languageIn === undefined) ? "" : languageIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_LoadLanguageScript$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_MoveCursorToEnd", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_MoveCursorToEnd.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_MoveCursorToEnd_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_MoveCursorToEnd$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_MoveCursorToEnd$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_MoveCursorToEnd_JavaScript1JS, "JavaScript1", "MarkdownEditor_MoveCursorToEnd", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_MoveCursorToEnd$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_MoveCursorToEnd$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_MoveCursorToEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_MoveCursorToEnd.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.moveCursorToEnd($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_MoveCursorToStart", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_MoveCursorToStart.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_MoveCursorToStart_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_MoveCursorToStart$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_MoveCursorToStart$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_MoveCursorToStart_JavaScript1JS, "JavaScript1", "MarkdownEditor_MoveCursorToStart", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_MoveCursorToStart$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_MoveCursorToStart$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_MoveCursorToStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_MoveCursorToStart.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.moveCursorToStart($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_Reset", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_Reset.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_Reset_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_Reset$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Reset$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_Reset_JavaScript1JS, "JavaScript1", "MarkdownEditor_Reset", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Reset$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_Reset$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_Reset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_Reset.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.reset($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_SetHtml", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_SetHtml.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_SetHtml_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_SetHtml$Action = function (widgetIdIn, htmlIn, cursorToEndIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_SetHtml$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    vars.value.htmlInLocal = htmlIn;
    vars.value.cursorToEndInLocal = cursorToEndIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_SetHtml_JavaScript1JS, "JavaScript1", "MarkdownEditor_SetHtml", {
    CursorToEnd: OS.DataConversion.JSNodeParamConverter.to(vars.value.cursorToEndInLocal, OS.Types.Boolean),
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
    Html: OS.DataConversion.JSNodeParamConverter.to(vars.value.htmlInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_SetHtml$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Html",
    attrName: "htmlInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "CursorToEnd",
    attrName: "cursorToEndInLocal",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return true;
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_SetHtml$Action = function (widgetIdIn, htmlIn, cursorToEndIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    htmlIn = (htmlIn === undefined) ? "" : htmlIn;
    cursorToEndIn = (cursorToEndIn === undefined) ? true : cursorToEndIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_SetHtml$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(htmlIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cursorToEndIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_SetHtml.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    // MarkdownEditor_SetHtml()
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.setHtml($parameters.WidgetId, $parameters.Html, $parameters.CursorToEnd);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_SetMarkdown", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_SetMarkdown.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_SetMarkdown_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_SetMarkdown$Action = function (widgetIdIn, markdownIn, cursorToEndIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_SetMarkdown$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    vars.value.markdownInLocal = markdownIn;
    vars.value.cursorToEndInLocal = cursorToEndIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_SetMarkdown_JavaScript1JS, "JavaScript1", "MarkdownEditor_SetMarkdown", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
    CursorToEnd: OS.DataConversion.JSNodeParamConverter.to(vars.value.cursorToEndInLocal, OS.Types.Boolean),
    Markdown: OS.DataConversion.JSNodeParamConverter.to(vars.value.markdownInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_SetMarkdown$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "Markdown",
    attrName: "markdownInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }, {
    name: "CursorToEnd",
    attrName: "cursorToEndInLocal",
    mandatory: false,
    dataType: OS.Types.Boolean,
    defaultValue: function () {
    return true;
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_SetMarkdown$Action = function (widgetIdIn, markdownIn, cursorToEndIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    markdownIn = (markdownIn === undefined) ? "" : markdownIn;
    cursorToEndIn = (cursorToEndIn === undefined) ? true : cursorToEndIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_SetMarkdown$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(markdownIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cursorToEndIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_SetMarkdown.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    // MarkdownEditor_SetMarkdown()
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.setMarkdown($parameters.WidgetId, $parameters.Markdown, $parameters.CursorToEnd);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller$MarkdownEditor_Show", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model", "TUTMarkdownEditor.controller", "TUTMarkdownEditor.controller$MarkdownEditor_Show.JavaScript1JS"], function (exports, OutSystems, TUTMarkdownEditorModel, TUTMarkdownEditorController, TUTMarkdownEditor_controller_MarkdownEditor_Show_JavaScript1JS) {
    var OS = OutSystems.Internal;
    TUTMarkdownEditorController.default.markdownEditor_Show$Action = function (widgetIdIn, callContext) {
    callContext = controller.callContext(callContext);
    var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Show$vars"))());
    vars.value.widgetIdInLocal = widgetIdIn;
    controller.safeExecuteJSNode(TUTMarkdownEditor_controller_MarkdownEditor_Show_JavaScript1JS, "JavaScript1", "MarkdownEditor_Show", {
    WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
    }, function ($parameters) {
    }, {}, {});
    return ;
    };
    var controller = TUTMarkdownEditorController.default;
    TUTMarkdownEditorController.default.constructor.registerVariableGroupType("TUTMarkdownEditor.MarkdownEditor_Show$vars", [{
    name: "WidgetId",
    attrName: "widgetIdInLocal",
    mandatory: true,
    dataType: OS.Types.Text,
    defaultValue: function () {
    return "";
    }
    }]);
    TUTMarkdownEditorController.default.clientActionProxies.markdownEditor_Show$Action = function (widgetIdIn) {
    widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
    return controller.executeActionInsideJSNode(TUTMarkdownEditorController.default.markdownEditor_Show$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
    return {};
    });
    };
    });
    define("TUTMarkdownEditor.controller$MarkdownEditor_Show.JavaScript1JS", [], function () {
    return function ($parameters, $actions, $roles, $public) {
    if (MarkdownEditorPluginFactory) {
        MarkdownEditorPluginFactory.show($parameters.WidgetId);
    }
    
    };
    });
    
    define("TUTMarkdownEditor.controller", ["exports", "OutSystems/ClientRuntime/Main", "TUTMarkdownEditor.model"], function (exports, OutSystems, TUTMarkdownEditorModel) {
    var OS = OutSystems.Internal;
    var TUTMarkdownEditorController = exports;
    var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
    _super.apply(this, arguments);
    }
    Controller.prototype.clientActionProxies = {};
    Controller.prototype.roles = {};
    Controller.prototype.defaultTimeout = 10;
    Controller.prototype.getDefaultTimeout = function () {
    return TUTMarkdownEditorController.default.defaultTimeout;
    };
    return Controller;
    })(OS.Controller.BaseModuleController);
    TUTMarkdownEditorController.default = new Controller(null, "TUTMarkdownEditor");
    });
    