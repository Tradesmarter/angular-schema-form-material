/*!
 * angular-schema-form-material
 * @version 1.0.0-alpha.2
 * @date Sun, 17 Mar 2019 12:13:56 GMT
 * @link https://github.com/json-schema-form/angular-schema-form-material
 * @license MIT
 * Copyright (c) 2014-2019 JSON Schema Form
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var path = '/material/default.html';
var html = "<md-input-container class=\"{{::form.htmlClass}}\" sf-messages sf-layout sf-material-class=\"md-input-has-value\" md-block>\n  <md-icon ng-show=\"::form.svgIconPosition === 'left'\" md-svg-icon=\"{{::form.svgIcon}}\"></md-icon>\n  <label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label>\n  <input sf-field-model\n         ng-show=\"::form.key\"\n         type=\"{{::form.type}}\"\n         step=\"any\"\n         sf-changed=\"form\"\n         placeholder=\"{{::form.placeholder}}\"\n         id=\"{{::form.key|sfCamelKey}}\"\n         ng-class=\"::form.fieldHtmlClass\"\n         sf-type-parser=\"form.schema\"\n         ng-disabled=\"::form.readonly\"\n         schema-validate=\"form\"\n         name=\"{{::form.key|sfCamelKey}}\"\n         aria-describedby=\"{{::form.key|sfCamelKey}}Status\" />\n  <md-icon class=\"right\" ng-show=\"::form.svgIconPosition === 'right'\" md-svg-icon=\"{{::form.svgIcon}}\"></md-icon>\n  <md-tooltip ng-if=\"::form.toolTip\" md-direction=\"{{::form.toolTipDirection}}\">{{::form.toolTip}}</md-tooltip>\n  <div class=\"md-hint\" ng-show=\"::form.hint\">{{::form.hint}}</div>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var path = '/material/checkbox.html';
var html = "<div class=\"checkbox schema-form-checkbox {{::form.htmlClass}}\" sf-messages>\n  <md-checkbox sf-field-model\n               sf-changed=\"form\"\n               ng-disabled=\"form.readonly\"\n               schema-validate=\"form\"\n               sf-material-class=\"md-checked\"\n               class=\"{{::form.fieldHtmlClass}}\"\n               name=\"{{::form.key|sfCamelKey}}\"\n               aria-label=\"{{::form.title}}\">\n    <span>{{::form.title}}</span>\n  </md-checkbox>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var path = '/material/submit.html';
var html = "<section class=\"schema-form-submit {{::form.htmlClass}}\" sf-messages>\n  <md-button class=\"md-raised {{ form.style || 'md-primary' }} {{::form.fieldHtmlClass}}\"\n             type=\"{{::form.type}}\"\n             ng-disabled=\"form.readonly\"\n             aria-label=\"{{::form.title}}\">\n    <md-tooltip ng-if=\"::form.tip\">{{::form.tip}}</md-tooltip>\n    {{::form.title}}\n  </md-button>\n</section>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(29);
__webpack_require__(28);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var path = '/material/actions.html';
var html = "<section layout=\"row\" class=\"btn-group schema-form-actions {{form.htmlClass}}\"></section>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var path = '/material/array.html';
var html = "<div  class=\"schema-form-array {{::form.htmlClass}}\"\n      sf-field-model=\"sf-new-array\"\n      sf-new-array>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label>\n  <md-list class=\"list-group\" sf-field-model ui-sortable=\"form.sortOptions\">\n    <md-list-item layout=\"row\" class=\"list-group-item\"\n             sf-field-model=\"ng-repeat\"\n             ng-repeat=\"item in modelArray track by $index\"\n             schema-form-array-items\n             class=\"{{::form.fieldHtmlClass}}\">\n      <md-button flex=\"none\" flex-order=\"2\"\n                 type=\"button\"\n                 ng-hide=\"form.readonly || form.remove === null\"\n                 ng-click=\"deleteFromArray($index)\"\n                 ng-disabled=\"form.schema.minItems >= modelArray.length\"\n                 class=\"md-icon-button\" aria-label=\"More\"\n                 style=\"position: relative; z-index: 20;\">\n        <md-icon>close</md-icon>\n      </md-button>\n    </md-list-item>\n  </md-list>\n  <div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\">\n    <div class=\"help-block\"\n         ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n         ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n\n    <md-button ng-hide=\"form.readonly || form.add === null\"\n            ng-click=\"appendToArray()\"\n            ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n            type=\"button\"\n            class=\"btn md-raised md-primary {{ form.style.add || 'btn-default' }} pull-right\">\n      <i class=\"glyphicon glyphicon-plus\"></i>\n      {{ form.add || 'Add'}}\n    </md-button>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var path = '/material/autocomplete.html';
var html = "<div class=\"form-group {{::form.htmlClass}} schema-form-select\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess(), 'has-feedback': form.feedback !== false}\"\n     sf-messages sf-layout>\n  <md-autocomplete flex\n    ng-disabled=\"form.readonly\"\n    ng-model=\"$$value$$\"\n    sf-autocomplete\n    sf-field-model=\"replaceAll\"\n    schema-validate=\"form\"\n    md-selected-item=\"$$value$$\"\n    md-search-text=\"searchText\"\n    md-selected-item-change=\"'todo';\"\n    md-items=\"item in evalExpr('this[\\''+form.optionFilter+'\\'](\\''+searchText+'\\')')\"\n    md-item-text=\"item.name\"\n    md-floating-label=\"{{::form.title}}\"\n    md-menu-class=\"autocomplete-custom-template\">\n    <md-item-template>\n      <span md-highlight-text=\"searchText\">{{item.name}}</span>\n    </md-item-template>\n    <md-not-found>\n      No matches found\n    </md-not-found>\n  </md-autocomplete>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var path = '/material/card-content.html';
var html = "<md-card-content class=\"schema-form-card-content {{form.htmlClass}}\" sf-layout>\n</md-card-content>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var path = '/material/card-title.html';
var html = "<md-card-title class=\"schema-form-card-title {{form.htmlClass}}\">\n  <md-card-title-text>\n    <span class=\"md-title\">{{::form.title}}</span>\n    <span class=\"md-subhead\">{{::form.description}}</span>\n  </md-card-title-text>\n</md-card-title>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var path = '/material/card.html';
var html = "<md-card class=\"schema-form-card {{::form.htmlClass}}\" sf-layout>\n</md-card>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var path = '/material/checkboxes.html';
var html = "<div sf-array=\"form\" sf-field-model\n     class=\"schema-form-checkboxes {{::form.htmlClass}}\"\n     sf-messages>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{::form.title}}</label>\n  <div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\" >\n    <md-checkbox ng-model=\"titleMapValues[$index]\"\n                 sf-changed=\"form\"\n                 ng-disabled=\"::form.readonly\"\n                 name=\"{{::form.key|sfCamelKey}}\"\n                 ng-true-value=\"true\"\n                 ng-false-value=\"false\"\n                 aria-label=\"{{::form.title}}\">\n      <span ng-bind-html=\"::form.titleMap[$index].name\"></span>\n    </md-checkbox>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var path = '/material/date.html';
var html = "<div class=\"schema-form-date {{::form.htmlClass}}\">\n  <label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label>\n  <md-datepicker sf-field-model\n                 sf-changed=\"form\"\n                 schema-validate=\"form\"\n                 sf-type-parser=\"form.schema\"\n                 id=\"{{::form.key|sfCamelKey}}\"\n                 ng-show=\"::form.key\"\n                 ng-class=\"::form.fieldHtmlClass\"\n                 ng-disabled=\"::form.readonly\"\n                 md-placeholder=\"Enter date\" sf-messages>\n  </md-datepicker>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var path = '/material/div.html';
var html = "<div class=\"{{::form.htmlClass}}\" sf-layout></div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var path = '/material/divider.html';
var html = "<md-divider></md-divider>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var path = '/material/fieldset.html';
var html = "<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex>\n  <legend ng-show=\"form.title\">{{ form.title }}</legend>\n</fieldset>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var path = '/material/help.html';
var html = "<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var path = '/material/menu.html';
var html = "<md-menu class=\"form-group schema-form-menu {{::form.htmlClass}}\" sf-layout>\n <md-button class=\"{{::form.buttonClass}}\" ng-click=\"$mdMenu.open($event)\" aria-label=\"{{::form.title}}\">\n   <span>{{::form.selected}}</span>\n   <md-icon>arrow_drop_down</md-icon>\n </md-button>\n <md-menu-content>\n   <md-menu-item ng-repeat=\"item in form.titleMap\">\n     <md-button ng-click=\"form.itemAction(item.value); selected = item;\">{{::item.name}}</md-button>\n   </md-menu-item>\n </md-menu-content>\n</md-menu>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var path = '/material/radio-buttons.html';
var html = "<div class=\"form-group schema-form-radiobuttons {{::form.htmlClass}}\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-layout sf-messages>\n  <div>\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  </div>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n    <md-input-container ng-repeat=\"item in form.titleMap\">\n      <md-button type=\"button\"\n                 class=\"group md-raised\"\n                 sf-field-model=\"replaceAll\"\n                 ng-model=\"$$value$$\"\n                 sf-changed=\"form\"\n                 class=\"radio {{::form.fieldHtmlClass}}\"\n                 ng-class=\"{'md-primary': ($$value$$ == item.value)}\"\n                 ng-disabled=\"form.readonly\"\n                 ng-model-options=\"form.ngModelOptions\"\n                 schema-validate=\"form\"\n                 ng-value=\"item.value\"\n                 ng-click=\"$$value$$ = item.value\"\n                 name=\"{{form.key.join('.')}}\">\n        <span ng-bind-html=\"item.name\"></span>\n      </md-button>\n    </md-input-container>\n  </section>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var path = '/material/radios-cards.html';
var html = "<div class=\"form-group schema-form-radios-cards {{::form.htmlClass}}\">\n  <label class=\"md-body-1\" ng-show=\"showTitle()\" aria-label=\"{{form.title}}\">{{::form.title}}</label>\n  <md-radio-group sf-field-model sf-changed=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join('.')}}\" sf-layout\n    sf-messages>\n    <div ng-init=\"isMouseOver = false\" ng-repeat=\"item in form.titleMap\" ng-mouseover=\"isMouseOver = true\"\n      ng-mouseleave=\"isMouseOver = false\" flex=\"33\" flex-gt-sm=\"25\" layout-align=\"center stretch\" layout=\"row\"\n      class=\"radio-buttons-card\" ng-style=\"{zIndex: isMouseOver ? 1 : 0}\">\n      <md-radio-button ng-value=\"item.value\"\n        md-colors=\"{borderColor: item.active ? form.cardActiveBorderColor : form.cardBorderColor, color: item.active ? form.cardActiveBorderColor : form.cardBorderColor, backgroundColor: form.cardBackgroundColor}\"\n        ng-class=\"{'md-whiteframe-17dp': item.active || isMouseOver}\">\n        <md-icon ng-show=\"::item.svgIcon\" md-svg-icon=\"{{::item.svgIcon}}\"></md-icon>\n        <div class=\"radio-card-label\" ng-bind-html=\"item.name\"></div>\n      </md-radio-button>\n    </div>\n  </md-radio-group>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var path = '/material/radios-inline.html';
var html = "<div class=\"form-group schema-form-radios-inline {{::form.htmlClass}}\" sf-layout sf-messages>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <md-radio-group layout=\"row\"\n                  sf-field-model=\"replaceAll\"\n                  ng-model=\"$$value$$\"\n                  class=\"{{::form.fieldHtmlClass}}\"\n                  ng-class=\"{ active: item.value === $$value$$ }\"\n                  sf-changed=\"form\"\n                  schema-validate=\"form\"\n                  ng-disabled=\"form.readonly\"\n                  name=\"{{form.key.join('.')}}\">\n    <md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\">\n      <span ng-bind-html=\"item.name\"></span>\n    </md-radio-button>\n  </md-radio-group>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var path = '/material/radios-multi-column.html';
var html = "<div class=\"form-group schema-form-radios {{::form.htmlClass}}\">\n  <label class=\"md-body-1\" ng-show=\"showTitle()\" aria-label=\"{{::form.title}}\">{{::form.title}}</label>\n  <br />\n  <br />\n  <md-radio-group sf-field-model sf-changed=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join('.')}}\" sf-layout sf-messages schema-validate=\"form\">\n    <div ng-repeat=\"item in form.titleMap\" flex layout=\"row\" layout-padding layout-align=\"start center\" class=\"radio-buttons-row\"\n    md-colors=\"{\n      borderColor: 'default-background-500-0.3',\n      color: item.recommended ? 'default-accent' : 'default-background-500',\n      borderLeftColor: item.recommended ? 'default-accent' : 'default-background-500-0.3'\n    }\" ng-class=\"{'md-whiteframe-10dp': item.recommended}\">\n    <md-radio-button flex ng-value=\"item.value\">\n      <div class=\"md-caption\">{{::item.actionText}}</div>\n      <div class=\"md-title\">{{::item.name}}</div>\n    </md-radio-button>\n    <div flex layout=\"column\" class=\"md-caption\">\n      <ul>\n        <li flex ng-repeat=\"description in item.descriptionList track by $index\">{{::description}}</li>\n      </ul>\n    </div>\n    <div flex=\"none\" ng-if=\"::item.recommended\" class=\"{{::form.badgeClass}} md-caption\" md-colors=\"{background: 'default-accent'}\">\n      {{::form.badgeText}}\n    </div>\n  </div>\n</md-radio-group>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var path = '/material/radios.html';
var html = "<div class=\"form-group schema-form-radios {{::form.htmlClass}}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\" aria-label=\"{{form.title}}\" layout=\"row\">{{form.title}}</label>\n  <div>\n    <md-radio-group sf-field-model\n                    sf-changed=\"form\"\n                    ng-disabled=\"form.readonly\"\n                    name=\"{{form.key.join('.')}}\"\n                    sf-layout sf-messages>\n      <md-radio-button ng-repeat=\"item in form.titleMap\"\n                       ng-value=\"item.value\"\n                       class=\"{{::form.fieldHtmlClass}}\"\n                       sf-field-model=\"ng-class\"\n                       ng-class=\"{ active: item.value === $$value$$ }\">\n        <span ng-bind-html=\"item.name\"></span>\n      </md-radio-button>\n    </md-radio-group>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var path = '/material/section.html';
var html = "<md-content class=\"schema-form-section {{::form.htmlClass}}\" sf-layout>\n</md-content>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var path = '/material/select.html';
var html = "<md-input-container\n    class=\"form-group {{::form.htmlClass}} schema-form-select\" sf-messages sf-layout>\n  <label ng-show=\"::showTitle()\">{{::form.title}}</label>\n  <md-select sf-field-model sf-changed=\"form\" schema-validate=\"form\">\n    <md-optgroup ng-repeat-start=\"(key, opt) in form.getOptions(form, evalExpr) | orderBy:'group' as optGroups\"\n                 ng-if=\"opt.group && opt.group != optGroups[key-1].group\"\n                 label=\"{{::opt.group}}\"\n                 aria-label=\"{{::opt.group}}\">\n      <md-option ng-repeat=\"(key, filtered) in form.getOptions(form, evalExpr) | filter: {group: opt.group} | orderBy:'name' as opts\"\n                 ng-value=\"::filtered.value\"\n                 aria-label=\"{{::filtered.name}}\">\n                 {{::filtered.name}}\n      </md-option>\n    </md-optgroup>\n    <md-option   ng-if=\"!opt.group\"\n                 ng-value=\"::opt.value\"\n                 ng-repeat-end>\n                 <md-icon ng-show=\"::opt.svgIcon\" md-svg-icon=\"{{::opt.svgIcon}}\"></md-icon>\n                 <span>{{::opt.name}}</span>\n               </md-option>\n  </md-select>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var path = '/material/switch.html';
var html = "<md-input-container class=\"schema-form-switch {{::form.htmlClass}}\">\n  <md-switch sf-field-model\n             sf-changed=\"form\"\n             sf-type-parser=\"form.schema\"\n             sf-messages\n             schema-validate=\"form\"\n             id=\"{{::form.key|sfCamelKey}}\"\n             aria-label=\"{{form.title}}\"\n             ng-show=\"::form.key\"\n             ng-class=\"form.fieldHtmlClass\"\n             ng-disabled=\"::form.readonly\">\n    <span  ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</span>\n  </md-switch>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var path = '/material/tabarray.html';
var html = "\n<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\"\n     class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || 'left'}} {{::form.htmlClass}}\">\n  <div ng-if=\"!form.tabType || form.tabType !== 'right'\"\n       ng-class=\"{'col-xs-3': !form.tabType || form.tabType === 'left'}\">\n    <ul class=\"nav nav-tabs\"\n        ng-class=\"{ 'tabs-left': !form.tabType || form.tabType === 'left'}\">\n      <li ng-repeat=\"item in modelArray track by $index\"\n          ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n          ng-class=\"{active: selected.tab === $index}\">\n          <a href=\"#\">{{interp(form.title,{'$index':$index, value: item}) || $index}}</a>\n      </li>\n      <li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\">\n        <a href=\"#\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          {{ form.add || 'Add'}}\n          </a>\n      </li>\n    </ul>\n  </div>\n\n  <div ng-class=\"{'col-xs-9': !form.tabType || form.tabType === 'left' || form.tabType === 'right'}\">\n    <div class=\"tab-content {{::form.fieldHtmlClass}}\">\n      <div class=\"tab-pane clearfix\"\n           ng-repeat=\"item in modelArray track by $index\"\n           ng-show=\"selected.tab === $index\"\n           ng-class=\"{active: selected.tab === $index}\">\n           <sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator>\n\n\n           <button ng-hide=\"form.readonly\"\n                   ng-click=\"selected.tab = deleteFromArray($index).length - 1\"\n                   type=\"button\"\n                   class=\"btn {{ form.style.remove || 'btn-default' }} pull-right\">\n             <i class=\"glyphicon glyphicon-trash\"></i>\n             {{ form.remove || 'Remove'}}\n           </button>\n      </div>\n    </div>\n  </div>\n\n  <div ng-if=\"form.tabType === 'right'\" class=\"col-xs-3\">\n    <ul class=\"nav nav-tabs tabs-right\">\n      <li ng-repeat=\"item in modelArray track by $index\"\n          ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n          ng-class=\"{active: selected.tab === $index}\">\n          <a href=\"#\">{{interp(form.title,{'$index':$index, value: item}) || $index}}</a>\n      </li>\n      <li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\">\n        <a href=\"#\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          {{ form.add || 'Add'}}\n          </a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var path = '/material/tabs.html';
var html = "<div sf-field-model class=\"schema-form-tabs {{::form.htmlClass}}\">\n  <md-tabs md-dynamic-height md-border-bottom md-selected=\"selected\" md-autoselect ng-init=\"selected = 0\"></md-tabs>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var path = '/material/textarea.html';
var html = "<md-input-container class=\"{{::form.htmlClass}} schema-form-textarea\" sf-messages sf-layout>\n  <label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label>\n  <textarea ng-class=\"::form.fieldHtmlClass\"\n            id=\"{{::form.key|sfCamelKey}}\"\n            sf-changed=\"form\"\n            ng-disabled=\"::form.readonly\"\n            sf-field-model\n            schema-validate=\"form\"\n            name=\"{{::form.key|sfCamelKey}}\"></textarea>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

angular.module('schemaForm').directive('sfMaterialClass', sfMaterialClassDirective);

sfMaterialClassDirective.$inject = [
  '$compile', '$timeout'
];

function sfMaterialClassDirective($compile, $timeout) {
    return {
        restrict : 'A',
        scope    : false,
        link     : function(scope, element, attrs, ngModel) {
            function reduceHelper(obj, i) {return obj[i]}

            var modelValue;
            try {
                modelValue = scope.form.key.reduce(reduceHelper, scope.model);
            } catch (e) {
                modelValue = undefined;
            }

            // Element class is not set in DOM if executed immediately.
            // I don't understand exactly why but it's probably related to other directive job.
            $timeout(function() {
                if (modelValue !== null && typeof modelValue !== 'undefined' && modelValue !== false) {
                    element.addClass(attrs.sfMaterialClass);
                }
            }, 0);
        }
    };
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_actions_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_actions_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__material_actions_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_array_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_array_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_array_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_checkbox_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_submit_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_submit_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_date_html__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_date_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_date_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_default_html__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_default_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_default_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_fieldset_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_help_html__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_help_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_help_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_radios_html__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_radios_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_radios_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_radios_multi_column_html__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_radios_multi_column_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_radios_multi_column_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_radios_cards_html__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_radios_cards_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_radios_cards_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_radios_inline_html__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_radios_inline_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_radios_inline_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_radio_buttons_html__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_radio_buttons_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_radio_buttons_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_section_html__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_section_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_section_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_card_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_card_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_card_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_card_content_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_card_content_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_card_content_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_card_title_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_card_title_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_card_title_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_select_html__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_select_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_select_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_menu_html__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_menu_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_switch_html__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_switch_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_switch_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_tabs_html__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_tabs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__material_tabs_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_tabarray_html__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_tabarray_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__material_tabarray_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_textarea_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_textarea_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__material_textarea_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__material_divider_html__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__material_divider_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__material_divider_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_div_html__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_div_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__material_div_html__);
// ngtemplate-loader embeds the html on build
































angular
  .module('schemaForm')
  .config(materialDecoratorConfig)
  .directive('sfmExternalOptions', sfmExternalOptionsDirective)
  .filter('sfCamelKey', sfCamelKeyFilter);

materialDecoratorConfig.$inject = [
  'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector'
];

function materialDecoratorConfig(
    schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
  var base = 'decorators/material/';

  var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions     = sfBuilderProvider.builders.ngModelOptions;
  var ngModel            = sfBuilderProvider.builders.ngModel;
  var sfField            = sfBuilderProvider.builders.sfField;
  var condition          = sfBuilderProvider.builders.condition;
  var array              = sfBuilderProvider.builders.array;
  var numeric            = sfBuilderProvider.builders.numeric;

  var sfLayout           = sfLayout;
  var sfMessagesNode     = sfMessagesNodeHandler();
  var sfMessages         = sfMessagesBuilder;
  var sfOptions          = sfOptionsBuilder;
  var mdAutocomplete     = mdAutocompleteBuilder;
  var mdSwitch           = mdSwitchBuilder;
  var mdDatepicker       = mdDatepickerBuilder;
  var mdTabs             = mdTabsBuilder;
  var textarea           = textareaBuilder;

  var core = [ sfField, ngModel, ngModelOptions, condition, sfLayout ];
  var defaults = core.concat(sfMessages);
  var arrays = core.concat(array);

  schemaFormProvider.defaults.string.unshift(dateDefault);

  decoratorsProvider.defineDecorator('materialDecorator', {
    actions: { template: __WEBPACK_IMPORTED_MODULE_0__material_actions_html___default.a, builder: [ sfField, simpleTransclusion, condition ] },
    array: { template: __WEBPACK_IMPORTED_MODULE_1__material_array_html___default.a, builder: arrays },
    autocomplete: { template: __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html___default.a, builder: defaults.concat(mdAutocomplete) },
    boolean: { template: __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default.a, builder: defaults },
    button: { template: __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default.a, builder: defaults },
    checkbox: { template: __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default.a, builder: defaults },
    checkboxes: { template: __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html___default.a, builder: arrays },
    date: { template: __WEBPACK_IMPORTED_MODULE_6__material_date_html___default.a, builder: defaults.concat(mdDatepicker) },
    'default': { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults },
    fieldset: { template: __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html___default.a, builder: [ sfField, simpleTransclusion, condition ] },
    help: { template: __WEBPACK_IMPORTED_MODULE_9__material_help_html___default.a, builder: defaults },
    // number: { template: defaultTemplate, builder: defaults.concat(numeric) },
    password: { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults },
    radios: { template: __WEBPACK_IMPORTED_MODULE_10__material_radios_html___default.a, builder: defaults },
    'radios-multi-column': { template: __WEBPACK_IMPORTED_MODULE_11__material_radios_multi_column_html___default.a, builder: defaults },
    'radios-cards': { template: __WEBPACK_IMPORTED_MODULE_12__material_radios_cards_html___default.a, builder: defaults },
    'radios-inline': { template: __WEBPACK_IMPORTED_MODULE_13__material_radios_inline_html___default.a, builder: defaults },
    radiobuttons: { template: __WEBPACK_IMPORTED_MODULE_14__material_radio_buttons_html___default.a, builder: defaults },
    section: { template: __WEBPACK_IMPORTED_MODULE_15__material_section_html___default.a, builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
    card: { template: __WEBPACK_IMPORTED_MODULE_16__material_card_html___default.a, builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
    'card-content': { template: __WEBPACK_IMPORTED_MODULE_17__material_card_content_html___default.a, builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
    'card-title': { template: __WEBPACK_IMPORTED_MODULE_18__material_card_title_html___default.a, builder: [ sfField, condition ] },
    select: { template: __WEBPACK_IMPORTED_MODULE_19__material_select_html___default.a, builder: defaults.concat(sfOptions) },
    menu: { template: __WEBPACK_IMPORTED_MODULE_20__material_menu_html___default.a, builder: defaults },
    submit: { template: __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default.a, builder: defaults },
    tabs: { template: __WEBPACK_IMPORTED_MODULE_22__material_tabs_html___default.a, builder: [ sfField, mdTabs, condition ] },
    tabarray: { template: __WEBPACK_IMPORTED_MODULE_23__material_tabarray_html___default.a, builder: arrays },
    textarea: { template: __WEBPACK_IMPORTED_MODULE_24__material_textarea_html___default.a, builder: defaults.concat(textarea) },
    'switch': { template: __WEBPACK_IMPORTED_MODULE_21__material_switch_html___default.a, builder: defaults.concat(mdSwitch) },
    divider: { template: __WEBPACK_IMPORTED_MODULE_25__material_divider_html___default.a, builder: defaults },
    div: { template: __WEBPACK_IMPORTED_MODULE_26__material_div_html___default.a, builder: [ sfField, simpleTransclusion, condition, sfLayout ] }
  });

  function sfLayout(args) {
    var layoutDiv = args.fieldFrag.querySelector('[sf-layout]');

    if (args.form.grid) {
      Object.getOwnPropertyNames(args.form.grid).forEach(function(property, idx, array) {
        layoutDiv.setAttribute(property, args.form.grid[property]);
      });
    };
  };

  function sfMessagesNodeHandler() {
    var html = '<div ng-show="ngModel.$invalid" ng-messages="{dummy: true}"><div ng-message="dummy" sf-message="form.description"></div></div>';

    // var html = '<div ng-show="ngModel.$invalid" ng-messages="ngModel.$error"><div ng-repeat="(key, value) in ngModel.$error" sf-message="form.description" ng-message="{{key}}" class="md-input-message-animation"></div></div>';
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  };

  function sfMessagesBuilder(args) {
    var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
    if (messagesDiv && sfMessagesNode) {
      var child = sfMessagesNode.cloneNode(true);
      messagesDiv.appendChild(child);
    }
  };

  function textareaBuilder(args) {
    var textareaFrag = args.fieldFrag.querySelector('textarea');
    var maxLength = args.form.maxlength || false;
    if (textareaFrag && maxLength) {
      textareaFrag.setAttribute('md-maxlength', maxLength);
    };
  };

  function mdAutocompleteBuilder(args) {
    var mdAutocompleteFrag = args.fieldFrag.querySelector('md-autocomplete');
    var minLength = args.form.minLength || 1;
    var maxLength = args.form.maxLength || false;
    var title = args.form.title || args.form.placeholder || args.form.key.slice(-1)[0];

    if (mdAutocompleteFrag) {
      if (args.form.onChange) {
        mdAutocompleteFrag.setAttribute('md-selected-item-change', 'args.form.onChange()');
        mdAutocompleteFrag.setAttribute('md-search-text-change', 'args.form.onChange(searchText)');
      };

      // mdAutocompleteFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      mdAutocompleteFrag.setAttribute('md-min-length', minLength);
      if (maxLength) {
        mdAutocompleteFrag.setAttribute('md-max-length', maxLength);
      };

      if (title) {
        mdAutocompleteFrag.setAttribute('md-floating-label', title);
      };
    };
  };

  function mdSwitchBuilder(args) {
    var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
    if (args.form.schema.titleMap) {
      mdSwitchFrag.setAttribute('ng-true-value', args.form.schema.titleMap.true);
      mdSwitchFrag.setAttribute('ng-false-value', args.form.schema.titleMap.false);
    };
  };

  function sfOptionsBuilder(args) {
    var mdSelectFrag = args.fieldFrag.querySelector('md-select');
    var enumTitleMap = [];
    var i;
    var mdSelectFrag;

    args.form.selectOptions = [];
    args.form.getOptions = getOptionsHandler;

    if (args.form.schema.links && (typeof args.form.schema.links) === 'object') {
      var link;
      var related = /({)([^}]*)(})/gm;
      var source = /{{([^}]*)}}/gm;
      var matched;

      for (i = 0; i < args.form.schema.links.length; i++) {
        link = args.form.schema.links[i];
        if (link.rel === 'options') {
          // TODO enable filter to allow processing results
          // args.form.optionSource = link.href.replace(related, '$1$1 model.$2 | _externalOptionUri $3$3');
          args.form.optionSource = link.href.replace(related, '$1$1 model.$2 $3$3');
        };
      };

      mdSelectFrag.setAttribute('sfm-external-options', args.form.optionSource);
    }
    else {
      args.form.selectOptions = sfOptionsProcessor(args.form);
    };
  };

  function mdDatepickerBuilder(args) {
    var mdDatepickerFrag = args.fieldFrag.querySelector('md-datepicker');
    if (mdDatepickerFrag) {
      if (args.form.onChange) {
        mdDatepickerFrag.setAttribute('ng-change', 'args.form.onChange(searchText)');
      }
      // mdDatepickerFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      var minDate = args.form.minimum || false;
      var maxDate = args.form.maximum || false;
      if (minDate) {
        mdDatepickerFrag.setAttribute('md-max-date', minDate);
      }
      if (maxDate) {
        mdDatepickerFrag.setAttribute('md-max-date', maxDate);
      }
    }
  };

  function mdTabsBuilder(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var mdTabsFrag = args.fieldFrag.querySelector('md-tabs');

      args.form.tabs.forEach(function(tab, index) {
        var evalExpr = '(evalExpr(' + args.path + '.tabs[' + index + ']' +
                       '.condition, { model: model, "arrayIndex": $index}))';
        var mdTab = document.createElement('md-tab');
        if(!!tab.condition) {
          mdTab.setAttribute('ng-if', evalExpr);
        };
        mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
        var mdTabBody = document.createElement('md-tab-body');
        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        mdTabBody.appendChild(childFrag);
        mdTab.appendChild(mdTabBody);
        mdTabsFrag.appendChild(mdTab);
      });
    }
  };

  /**
   * Material Datepicker
   */
  function dateDefault(name, schema, options) {
    if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'date';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };
};

function getOptionsHandler(form, evalExpr) {
  if (form.optionData) {
    return evalExpr(form.optionData);
  };

  if (form.selectOptions) {
    return form.selectOptions;
  };

  return [];
};

function sfOptionsProcessor(data) {
  var enumTitleMap = [];

  if (data.titleMap) {
    return data.titleMap;
  }
  else if (data.enum && data.enum.length) {
    for (i = 0; i < data.enum.length; i++) {
      if (data.enum[i] && data.enum[i].length) {
        enumTitleMap.push({ name: data.enum[i], value: data.enum[i] });
      };
    };
  };

  return enumTitleMap;
};

sfmExternalOptionsDirective.$inject = [ '$http' ];

function sfmExternalOptionsDirective($http) {
  var directive = {
    link: link,
    restrict: 'A'
  };

  return directive;

  function link(scope, element, attrs) {
    attrs.$observe('sfmExternalOptions', function(dataURI) {
      $http.get(dataURI)
        .then(function(response) {
          scope.form.selectOptions = sfOptionsProcessor(response.data);
        });
    });
  };
};

/**
 * sfCamelKey Filter
 */
function sfCamelKeyFilter() {
  return function(formKey) {
    if (!formKey) { return ''; };
    var part, i, key;
    key = formKey.slice();
    for (i = 0; i < key.length; i++) {
      part = key[i].toLowerCase().split('');
      if (i && part.length) { part[0] = part[0].toUpperCase(); };
      key[i] = part.join('');
    };
    return key.join('');
  };
};

/*
  TODO add default filter for autocomplete which allows form.optionFilter or 'autocompleteFilter' to override
  Something along the following lines...
  if ($injector.has('autocompleteFilter')) {
    result = $filter('autocomplete')(input);
  }
  else
  if ($injector.has(args.form.optionFilter + 'Filter')) {
    result = $filter(args.form.optionFilter)(input);
  }
  else {
    if (args.form.optionFilter) {
      mdAutocomplete.setAttribute('md-items',
        'item in evalExpr("this[\""+form.optionFilter+"\"](\""+searchText+"\")")');
    }
  }

  .filter('autocompleteMovieTest', function() {
    function autocompleteMovieTestFilter(array, input){
      var current = input;
      // You could also call multiple filters here using:
      // current = $filter('filterName')(input)
      if(typeof current === 'string') {
        current = current.replace(' ','-').toLowerCase();
      }
      current = (!current) ? '_undefined' : current;
      return current;
    }

    return externalOptionUriFilter;
  })
*/


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * It might be a bug, but currently input[type=number] does not add
 * a parser, so the model gets populated with a string. It does however stop non numbers so it
 * must have some preproccessing. Anyway, this adds parser before schema-validate hooks into it.
 * FIXME: this is still not a complete solution. Inputting a string in an input[type=number] results
 * in parsers never firing and ngModel value removed. So no validation from schema-validate either.
 */
angular.module('schemaForm').directive('sfTypeParser', function() {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var once = scope.$watch(attrs.sfTypeParser, function(schema) {
        if (!schema) {
          return;
        }

        var isNumber  = schema.type.indexOf('number') !== -1;
        var isInteger = schema.type.indexOf('integer') !== -1;
        var numberRE  = /^[0-9]*$/;
        // Use index of since type can be either an array with two values or a string.
        if (isNumber || isInteger) {
          // The timing here seems to work. i.e. we get in before schema-validate
          ngModel.$parsers.push(function(viewValue) {
            var value;
            if (isNumber) {
              value = parseFloat(viewValue);
            } else if (numberRE.test(viewValue)) {
              // We test the value to check that it's a valid integer, otherwise we can easily
              // get float -> integer parsing behind the scenes.
              value = parseInt(viewValue, 10);
            }
            // console.log('parser', numberRE.test(viewValue), viewValue, value)
            if (value === undefined || isNaN(value)) {
              //Let the validation fail. @FIXME: it fails with "required" for some reason.
              return viewValue;
            }
            return value;
          });
        }

        once();
      });
    }
  };
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34),__webpack_require__(32),__webpack_require__(35)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t(require("angular"),require("objectpath"),require("tv4")):e.schemaForm=t(e.angular,e.objectpath,e.tv4)}(this,function(e,t,r){var n=[];try{e.module("ngSanitize"),n.push("ngSanitize")}catch(i){}try{e.module("ui.sortable"),n.push("ui.sortable")}catch(i){}try{e.module("angularSpectrumColorpicker"),n.push("angularSpectrumColorpicker")}catch(i){}var o=e.module("schemaForm",n);return e.module("schemaForm").provider("sfPath",[function(){var r=window.ObjectPath||t,n={parse:r.parse};1===e.version.major&&e.version.minor<3?n.stringify=function(e){return Array.isArray(e)?e.join("."):e.toString()}:n.stringify=r.stringify,n.normalize=function(e,t){return n.stringify(Array.isArray(e)?e:n.parse(e),t)},this.parse=n.parse,this.stringify=n.stringify,this.normalize=n.normalize,this.$get=function(){return n}}]),e.module("schemaForm").provider("sfBuilder",["sfPathProvider",function(t){var r=/[A-Z]/g,n=function(e,t){return t=t||"_",e.replace(r,function(e,r){return(r?t:"")+e.toLowerCase()})},i=0,o={sfField:function(e){e.fieldFrag.firstChild.setAttribute("sf-field",i),e.lookup["f"+i]=e.form,i++},ngModel:function(e){if(e.form.key){var r=e.form.key;e.state.keyRedaction&&(r=r.slice(e.state.keyRedaction));var n;if(e.state.modelValue)n=e.state.modelValue;else{var i=t.stringify(r).replace(/"/g,"&quot;");n=e.state.modelName||"model",i&&(n+=("["!==i[0]?".":"")+i)}for(var o=e.fieldFrag.querySelectorAll("[sf-field-model]"),a=0;a<o.length;a++){var l=o[a],s=l.getAttribute("sf-field-model");if(s&&""!==s)if("replaceAll"===s)for(var u=l.attributes,c=0;c<u.length;c++)u[c].value&&-1!==u[c].value.indexOf("$$value")&&(u[c].value=u[c].value.replace(/\$\$value\$\$/g,n));else{var f=l.getAttribute(s);f&&f.indexOf("$$value$$")?l.setAttribute(s,f.replace(/\$\$value\$\$/g,n)):l.setAttribute(s,n)}else l.setAttribute("ng-model",n)}}},simpleTransclusion:function(e){var t=e.build(e.form.items,e.path+".items",e.state);e.fieldFrag.firstChild.appendChild(t)},ngModelOptions:function(e){e.form.ngModelOptions&&Object.keys(e.form.ngModelOptions).length>0&&e.fieldFrag.firstChild.setAttribute("ng-model-options",JSON.stringify(e.form.ngModelOptions))},transclusion:function(e){var t=e.fieldFrag.querySelectorAll("[sf-field-transclude]");if(t.length)for(var r=0;r<t.length;r++){var n=t[r],i=n.getAttribute("sf-field-transclude")||"items",o=e.form[i];if(o){var a=e.build(o,e.path+"."+i,e.state);n.appendChild(a)}}},condition:function(e){if(e.form.condition){var r="evalExpr("+e.path+'.condition, { model: model, "arrayIndex": $index})';if(e.form.key){var n=t.stringify(e.form.key);r="evalExpr("+e.path+'.condition,{ model: model, "arrayIndex": $index, "modelValue": model'+("["===n[0]?"":".")+n+"})"}for(var i=e.fieldFrag.children||e.fieldFrag.childNodes,o=0;o<i.length;o++){var a=i[o],l=a.getAttribute("ng-if");a.setAttribute("ng-if",l?"("+l+") || ("+r+")":r)}}},array:function(r){var n=r.fieldFrag.querySelector("[schema-form-array-items]");if(n){if(state=e.copy(r.state),state.keyRedaction=state.keyRedaction||0,state.keyRedaction+=r.form.key.length+1,r.form.schema&&r.form.schema.items&&r.form.schema.items.type&&-1===r.form.schema.items.type.indexOf("object")&&-1===r.form.schema.items.type.indexOf("array")){t.stringify(r.form.key).replace(/"/g,"&quot;")+"[$index]";state.modelValue="modelArray[$index]"}else state.modelName="item";state.arrayCompatFlag=!0;var i=r.build(r.form.items,r.path+".items",state);n.appendChild(i)}}};this.builders=o;var a=[o.sfField,o.ngModel,o.ngModelOptions,o.condition];this.stdBuilders=a,this.$get=["$templateCache","schemaFormDecorators","sfPath",function(e,t,r){var i=function(e,t){if(e.key){var n=t[r.stringify(e.key)];if(n){for(;n.firstChild;)n.removeChild(n.firstChild);return n}}},l=function(e,t,r,o,a,s,u){s=s||{},u=u||Object.create(null),a=a||"schemaForm.form";var c=document.createDocumentFragment();return e.reduce(function(e,c,f){if(!c.type)return e;var d=t[c.type]||t["default"];if(d.replace){var m;s.arrayCompatFlag=!1;var p=document.createElement("div"),h=r(c,d)||r(c,t["default"]);for(p.innerHTML=h,m=document.createDocumentFragment();p.childNodes.length>0;)m.appendChild(p.childNodes[0]);var v={fieldFrag:m,form:c,lookup:u,state:s,path:a+"["+f+"]",build:function(e,n,i){return l(e,t,r,o,n,i,u)}},y=c.builder||d.builder;"function"==typeof y?y(v):y.forEach(function(e){e(v)}),(i(c,o)||e).appendChild(m)}else{var g=document.createElement(n(t.__name,"-"));s.arrayCompatFlag?g.setAttribute("form","copyWithIndex($index)"):g.setAttribute("form",a+"["+f+"]"),(i(c,o)||e).appendChild(g)}return e},c),c};return{build:function(t,r,n,i){return l(t,r,function(t,r){return"template"===t.type?t.template:e.get(r.template)},n,void 0,void 0,i)},builder:o,stdBuilders:a,internalBuild:l}}]}]),e.module("schemaForm").provider("schemaFormDecorators",["$compileProvider","sfPathProvider",function(t,r){var n="",i={},o=function(e,t){"sfDecorator"===e&&(e=n);var r=i[e];return r[t.type]?r[t.type].template:r["default"].template},a=function(n){t.directive(n,["$parse","$compile","$http","$templateCache","$interpolate","$q","sfErrorMessage","sfPath","sfSelect",function(t,i,a,l,s,u,c,f,d){return{restrict:"AE",replace:!1,transclude:!1,scope:!0,require:"?^sfSchema",link:function(t,m,p,h){t.$on("schemaFormPropagateNgModelController",function(e,r){e.stopPropagation(),e.preventDefault(),t.ngModel=r}),t.showTitle=function(){return t.form&&t.form.notitle!==!0&&t.form.title},t.listToCheckboxValues=function(t){var r={};return e.forEach(t,function(e){r[e]=!0}),r},t.checkboxValuesToList=function(t){var r=[];return e.forEach(t,function(e,t){e&&r.push(t)}),r},t.buttonClick=function(r,n){e.isFunction(n.onClick)?n.onClick(r,n):e.isString(n.onClick)&&(h?h.evalInParentScope(n.onClick,{$event:r,form:n}):t.$eval(n.onClick,{$event:r,form:n}))},t.evalExpr=function(e,r){return h?h.evalInParentScope(e,r):t.$eval(e,r)},t.evalInScope=function(e,r){return e?t.$eval(e,r):void 0},t.interp=function(e,t){return e&&s(e)(t)},t.hasSuccess=function(){return t.ngModel?t.ngModel.$valid&&(!t.ngModel.$pristine||!t.ngModel.$isEmpty(t.ngModel.$modelValue)):!1},t.hasError=function(){return t.ngModel?t.ngModel.$invalid&&!t.ngModel.$pristine:!1},t.errorMessage=function(e){return c.interpolate(e&&e.code+""||"default",t.ngModel&&t.ngModel.$modelValue||"",t.ngModel&&t.ngModel.$viewValue||"",t.form,t.options&&t.options.validationMessage)};var v=t.$watch(p.form,function(s){if(s){s.ngModelOptions=s.ngModelOptions||{},t.form=s;var c;if("template"===s.type&&s.template)c=u.when(s.template);else{var p="template"===s.type?s.templateUrl:o(n,s);c=a.get(p,{cache:l}).then(function(e){return e.data})}c.then(function(n){if(s.key){var o=s.key?r.stringify(s.key).replace(/"/g,"&quot;"):"";n=n.replace(/\$\$value\$\$/g,"model"+("["!==o[0]?".":"")+o)}if(m.html(n),s.condition){var a='evalExpr(form.condition,{ model: model, "arrayIndex": arrayIndex})';s.key&&(a='evalExpr(form.condition,{ model: model, "arrayIndex": arrayIndex, "modelValue": model'+f.stringify(s.key)+"})"),e.forEach(m.children(),function(e){var t=e.getAttribute("ng-if");e.setAttribute("ng-if",t?"("+t+") || ("+a+")":a)})}i(m.contents())(t)}),s.key&&(t.$on("schemaForm.error."+s.key.join("."),function(e,r,n,i){(n===!0||n===!1)&&(i=n,n=void 0),t.ngModel&&r&&(t.ngModel.$setDirty?t.ngModel.$setDirty():(t.ngModel.$dirty=!0,t.ngModel.$pristine=!1),n&&(s.validationMessage||(s.validationMessage={}),s.validationMessage[r]=n),t.ngModel.$setValidity(r,i===!0),i===!0&&(t.ngModel.$validate(),t.$broadcast("schemaFormValidate")))}),t.$on("$destroy",function(){if(!t.externalDestructionInProgress){var e=s.destroyStrategy||t.options&&t.options.destroyStrategy||"remove";if(s.key&&"retain"!==e){var r=t.model;if(s.key.length>1&&(r=d(s.key.slice(0,s.key.length-1),r)),void 0===r)return;var n=s.schema&&s.schema.type||"";"empty"===e&&-1!==n.indexOf("string")?r[s.key.slice(-1)]="":"empty"===e&&-1!==n.indexOf("object")?r[s.key.slice(-1)]={}:"empty"===e&&-1!==n.indexOf("array")?r[s.key.slice(-1)]=[]:"null"===e?r[s.key.slice(-1)]=null:delete r[s.key.slice(-1)]}}})),v()}})}}}])},l=function(r,n,i){i=e.isDefined(i)?i:!1,t.directive("sf"+e.uppercase(r[0])+r.substr(1),function(){return{restrict:"EAC",scope:!0,replace:!0,transclude:i,template:'<sf-decorator form="form"></sf-decorator>',link:function(t,n,i){var o={items:"c",titleMap:"c",schema:"c"},a={type:r},l=!0;e.forEach(i,function(r,n){if("$"!==n[0]&&0!==n.indexOf("ng")&&"sfField"!==n){var s=function(r){e.isDefined(r)&&r!==a[n]&&(a[n]=r,l&&a.type&&(a.key||e.isUndefined(i.key))&&(t.form=a,l=!1))};"model"===n?t.$watch(r,function(e){e&&t.model!==e&&(t.model=e)}):"c"===o[n]?t.$watchCollection(r,s):i.$observe(n,s)}})}}})};this.createDecorator=function(t,r){i[t]={__name:t},e.forEach(r,function(e,r){i[t][r]={template:e,replace:!1,builder:[]}}),i[n]||(n=t),a(t)},this.defineDecorator=function(t,r){i[t]={__name:t},e.forEach(r,function(r,n){r.builder=r.builder||[],r.replace=e.isDefined(r.replace)?r.replace:!0,i[t][n]=r}),i[n]||(n=t),a(t)},this.createDirective=l,this.createDirectives=function(t){e.forEach(t,function(e,t){l(t,e)})},this.decorator=function(e){return e=e||n,i[e]},this.addMapping=function(e,t,r,n,o){i[e]&&(i[e][t]={template:r,builder:n,replace:!!o})},this.defineAddOn=function(e,t,r,n){i[e]&&(i[e][t]={template:r,builder:n,replace:!0})},this.$get=function(){return{decorator:function(e){return i[e]||i[n]},defaultDecorator:n}},a("sfDecorator")}]),e.module("schemaForm").provider("sfErrorMessage",function(){var t={"default":"Field does not validate",0:"Invalid type, expected {{schema.type}}",1:"No enum match for: {{viewValue}}",10:'Data does not match any schemas from "anyOf"',11:'Data does not match any schemas from "oneOf"',12:'Data is valid against more than one schema from "oneOf"',13:'Data matches schema from "not"',100:"Value is not a multiple of {{schema.multipleOf}}",101:"{{viewValue}} is less than the allowed minimum of {{schema.minimum}}",102:"{{viewValue}} is equal to the exclusive minimum {{schema.minimum}}",103:"{{viewValue}} is greater than the allowed maximum of {{schema.maximum}}",104:"{{viewValue}} is equal to the exclusive maximum {{schema.maximum}}",105:"Value is not a valid number",200:"String is too short ({{viewValue.length}} chars), minimum {{schema.minLength}}",201:"String is too long ({{viewValue.length}} chars), maximum {{schema.maxLength}}",202:"String does not match pattern: {{schema.pattern}}",300:"Too few properties defined, minimum {{schema.minProperties}}",301:"Too many properties defined, maximum {{schema.maxProperties}}",302:"Required",303:"Additional properties not allowed",304:"Dependency failed - key must exist",400:"Array is too short ({{value.length}}), minimum {{schema.minItems}}",401:"Array is too long ({{value.length}}), maximum {{schema.maxItems}}",402:"Array items are not unique",403:"Additional items not allowed",500:"Format validation failed",501:'Keyword failed: "{{title}}"',600:"Circular $refs",1e3:"Unknown property (not in schema)"};t.number=t[105],t.required=t[302],t.min=t[101],t.max=t[103],t.maxlength=t[201],t.minlength=t[200],t.pattern=t[202],this.setDefaultMessages=function(e){t=e},this.getDefaultMessages=function(){return t},this.setDefaultMessage=function(e,r){t[e]=r},this.$get=["$interpolate",function(r){var n={};return n.defaultMessages=t,n.interpolate=function(n,i,o,a,l){l=l||{};var s=a.validationMessage||{};0===n.indexOf("tv4-")&&(n=n.substring(4));var u=s["default"]||l["default"]||"";[s,l,t].some(function(t){return e.isString(t)||e.isFunction(t)?(u=t,!0):t&&t[n]?(u=t[n],!0):void 0});var c={error:n,value:i,viewValue:o,form:a,schema:a.schema,title:a.title||a.schema&&a.schema.title};return e.isFunction(u)?u(c):r(u)(c)},n}]}),e.module("schemaForm").provider("schemaForm",["sfPathProvider",function(t){var r=function(e){if(Array.isArray(e)&&2==e.length){if("null"===e[0])return e[1];if("null"===e[1])return e[0]}return e},n=function(e){var t=[];return e.forEach(function(e){t.push({name:e,value:e})}),t},i=function(t,r){if(!e.isArray(t)){var n=[];return r?e.forEach(r,function(e,r){n.push({name:t[e],value:e})}):e.forEach(t,function(e,t){n.push({name:e,value:t})}),n}return t},o=function(t,n,i){var o=h[r(n.type)];if(o)for(var a,l=0;l<o.length;l++)if(a=o[l](t,n,i))return a.schema["x-schema-form"]&&e.isObject(a.schema["x-schema-form"])&&(a=e.extend(a,a.schema["x-schema-form"])),a},a=function(t,r,n){n=n||{};var o=n.global&&n.global.formDefaults?e.copy(n.global.formDefaults):{};return n.global&&n.global.supressPropertyTitles===!0?o.title=r.title:o.title=r.title||t,r.description&&(o.description=r.description),(n.required===!0||r.required===!0)&&(o.required=!0),r.maxLength&&(o.maxlength=r.maxLength),r.minLength&&(o.minlength=r.minLength),(r.readOnly||r.readonly)&&(o.readonly=!0),r.minimum&&(o.minimum=r.minimum+(r.exclusiveMinimum?1:0)),r.maximum&&(o.maximum=r.maximum-(r.exclusiveMaximum?1:0)),r.validationMessage&&(o.validationMessage=r.validationMessage),r.enumNames&&(o.titleMap=i(r.enumNames,r["enum"])),o.schema=r,o.ngModelOptions=o.ngModelOptions||{},o},l=function(e,n,i){if("string"===r(n.type)&&!n["enum"]){var o=a(e,n,i);return o.key=i.path,o.type="text",i.lookup[t.stringify(i.path)]=o,o}},s=function(e,n,i){if("number"===r(n.type)){var o=a(e,n,i);return o.key=i.path,o.type="number",i.lookup[t.stringify(i.path)]=o,o}},u=function(e,n,i){if("integer"===r(n.type)){var o=a(e,n,i);return o.key=i.path,o.type="number",i.lookup[t.stringify(i.path)]=o,o}},c=function(e,n,i){if("boolean"===r(n.type)){var o=a(e,n,i);return o.key=i.path,o.type="checkbox",i.lookup[t.stringify(i.path)]=o,o}},f=function(e,i,o){if("string"===r(i.type)&&i["enum"]){var l=a(e,i,o);return l.key=o.path,l.type="select",l.titleMap||(l.titleMap=n(i["enum"])),o.lookup[t.stringify(o.path)]=l,l}},d=function(e,i,o){if("array"===r(i.type)&&i.items&&i.items["enum"]){var l=a(e,i,o);return l.key=o.path,l.type="checkboxes",l.titleMap||(l.titleMap=n(i.items["enum"])),o.lookup[t.stringify(o.path)]=l,l}},m=function(n,i,l){if("object"===r(i.type)){var s=a(n,i,l);return s.type="fieldset",s.items=[],l.lookup[t.stringify(l.path)]=s,e.forEach(i.properties,function(e,r){var n=l.path.slice();if(n.push(r),l.ignore[t.stringify(n)]!==!0){var a=i.required&&-1!==i.required.indexOf(r),u=o(r,e,{path:n,required:a||!1,lookup:l.lookup,ignore:l.ignore,global:l.global});u&&s.items.push(u)}}),s}},p=function(e,n,i){if("array"===r(n.type)){var l=a(e,n,i);l.type="array",l.key=i.path,i.lookup[t.stringify(i.path)]=l;var s=n.required&&-1!==n.required.indexOf(i.path[i.path.length-1]),u=i.path.slice();return u.push(""),l.items=[o(e,n.items,{path:u,required:s||!1,lookup:i.lookup,ignore:i.ignore,global:i.global})],l}},h={string:[f,l],object:[m],number:[s],integer:[u],"boolean":[c],array:[d,p]},v=function(e){return e};this.defaults=h,this.stdFormObj=a,this.defaultFormDefinition=o,this.postProcess=function(e){v=e},this.appendRule=function(e,t){h[e]||(h[e]=[]),h[e].push(t)},this.prependRule=function(e,t){h[e]||(h[e]=[]),h[e].unshift(t)},this.createStandardForm=a,this.$get=function(){var n={};return n.merge=function(r,o,a,l,s,u){o=o||["*"],l=l||{},s=s||r.readonly||r.readOnly;var c=n.defaults(r,a,l),f=o.indexOf("*");-1!==f&&(o=o.slice(0,f).concat(c.form).concat(o.slice(f+1)));var d=c.lookup;return v(o.map(function(o){if("string"==typeof o&&(o={key:o}),o.key&&"string"==typeof o.key&&(o.key=t.parse(o.key)),o.titleMap&&(o.titleMap=i(o.titleMap)),o.itemForm){o.items=[];var c=t.stringify(o.key),f=d[c];e.forEach(f.items,function(t){var r=e.copy(o.itemForm);r.key=t.key,o.items.push(r)})}if(o.key){var m=t.stringify(o.key);if(d[m]){var p=d[m];e.forEach(p,function(e,t){void 0===o[t]&&(o[t]=p[t])})}}return s===!0&&(o.readonly=!0),o.items&&(o.items=n.merge(r,o.items,a,l,o.readonly,u)),o.tabs&&e.forEach(o.tabs,function(e){e.items=n.merge(r,e.items,a,l,o.readonly,u)}),"checkbox"===o.type&&e.isUndefined(o.schema["default"])&&(o.schema["default"]=!1),u&&"template"===o.type&&!o.template&&o.templateUrl&&u.push(o),o}))},n.defaults=function(t,n,i){var a=[],l={};if(n=n||{},i=i||{},"object"!==r(t.type))throw new Error('Not implemented. Only type "object" allowed at root level of schema.');return e.forEach(t.properties,function(e,r){if(n[r]!==!0){var s=t.required&&-1!==t.required.indexOf(r),u=o(r,e,{path:[r],lookup:l,ignore:n,required:s,global:i});u&&a.push(u)}}),{form:a,lookup:l}},n.traverseSchema=function(t,r,n,i){i=e.isDefined(i)?i:!0,n=n||[];var o=function(t,r,n){if(r(t,n),e.forEach(t.properties,function(e,t){var i=n.slice();i.push(t),o(e,r,i)}),!i&&t.items){var a=n.slice();a.push(""),o(t.items,r,a)}};o(t,r,n||[])},n.traverseForm=function(t,r){r(t),e.forEach(t.items,function(e){n.traverseForm(e,r)}),t.tabs&&e.forEach(t.tabs,function(t){e.forEach(t.items,function(e){n.traverseForm(e,r)})})},n}}]),e.module("schemaForm").factory("sfSelect",["sfPath",function(e){var t=/^\d+$/;return function(r,n,i){n||(n=this);var o="string"==typeof r?e.parse(r):r;if("undefined"!=typeof i&&1===o.length)return n[o[0]]=i,n;"undefined"!=typeof i&&"undefined"==typeof n[o[0]]&&(n[o[0]]=o.length>2&&t.test(o[1])?[]:{});for(var a=n[o[0]],l=1;l<o.length;l++){if(""===o[l])return void 0;if("undefined"!=typeof i){if(l===o.length-1)return a[o[l]]=i,i;var s=a[o[l]];("undefined"==typeof s||null===s)&&(s=t.test(o[l+1])?[]:{},a[o[l]]=s),a=s}else a&&(a=a[o[l]])}return a}}]),e.module("schemaForm").factory("sfValidator",[function(){var t={};return t.validate=function(t,n){if(!t)return{valid:!0};var i=t.schema;if(!i)return{valid:!0};""===n&&(n=void 0),"number"===t.type&&null===n&&(n=void 0);var o={type:"object",properties:{}},a=t.key[t.key.length-1];o.properties[a]=i,t.required&&(o.required=[a]);var l={};return e.isDefined(n)&&(l[a]=n),r.validateResult(l,o)},t}]),e.module("schemaForm").directive("sfArray",["sfSelect","schemaForm","sfValidator","sfPath",function(t,r,n,i){var o=function(e){return function(t){t.key&&(t.key[t.key.indexOf("")]=e)}};return{restrict:"A",scope:!0,require:"?ngModel",link:function(a,l,s,u){var c={};a.validateArray=e.noop,u&&a.$emit("schemaFormPropagateNgModelController",u);var f=a.$watch(s.sfArray,function(l){if(l){var s=t(l.key,a.model),d=i.normalize(l.key);if(a.$watch("model"+("["!==d[0]?".":"")+d,function(e){s=a.modelArray=e}),e.isUndefined(s)&&(s=[],t(l.key,a.model,s)),a.modelArray=s,l.items){var m=l.items[0];l.items.length>1&&(m={type:"section",items:l.items.map(function(t){return t.ngModelOptions=l.ngModelOptions,e.isUndefined(t.readonly)&&(t.readonly=l.readonly),t})})}if(a.copyWithIndex=function(t){if(!c[t]&&m){var n=e.copy(m);n.arrayIndex=t,r.traverseForm(n,o(t)),c[t]=n}return c[t]},a.appendToArray=function(){var n=s.length,i=a.copyWithIndex(n);if(r.traverseForm(i,function(r){if(r.key){var n;e.isDefined(r["default"])&&(n=r["default"]),e.isDefined(r.schema)&&e.isDefined(r.schema["default"])&&(n=r.schema["default"]),e.isDefined(n)&&t(r.key,a.model,n)}}),n===s.length){var o,u=t("schema.items.type",l);"object"===u?o={}:"array"===u&&(o=[]),s.push(o)}return a.validateArray(),s},a.deleteFromArray=function(e){return s.splice(e,1),a.validateArray(),u&&u.$setDirty&&u.$setDirty(),s},l.titleMap||l.startEmpty===!0||0!==s.length||a.appendToArray(),l.titleMap&&l.titleMap.length>0){a.titleMapValues=[];var p=function(e){a.titleMapValues=[],e=e||[],l.titleMap.forEach(function(t){a.titleMapValues.push(-1!==e.indexOf(t.value))})};p(a.modelArray),a.$watchCollection("modelArray",p),a.$watchCollection("titleMapValues",function(e,t){if(e&&e!==t){for(var r=a.modelArray;r.length>0;)r.pop();l.titleMap.forEach(function(t,n){e[n]&&r.push(t.value)}),a.validateArray()}})}if(u){var h;a.validateArray=function(){var e=n.validate(l,a.modelArray.length>0?a.modelArray:void 0);Object.keys(u.$error).filter(function(e){return 0===e.indexOf("tv4-")}).forEach(function(e){u.$setValidity(e,!0)}),e.valid!==!1||!e.error||""!==e.error.dataPath&&e.error.dataPath!=="/"+l.key[l.key.length-1]||(u.$setViewValue(a.modelArray),h=e.error,u.$setValidity("tv4-"+e.error.code,!1))},a.$on("schemaFormValidate",a.validateArray),a.hasSuccess=function(){return a.options&&a.options.pristine&&a.options.pristine.success===!1?u.$valid&&!u.$pristine&&!u.$isEmpty(u.$modelValue):u.$valid&&(!u.$pristine||!u.$isEmpty(u.$modelValue))},a.hasError=function(){return a.options&&a.options.pristine&&a.options.pristine.errors===!1?u.$invalid&&!u.$pristine:u.$invalid},a.schemaError=function(){return h}}f()}})}}}]),e.module("schemaForm").directive("sfChanged",function(){return{require:"ngModel",restrict:"AC",scope:!1,link:function(t,r,n,i){var o=t.$eval(n.sfChanged);o&&o.onChange&&i.$viewChangeListeners.push(function(){e.isFunction(o.onChange)?o.onChange(i.$modelValue,o):t.evalExpr(o.onChange,{modelValue:i.$modelValue,form:o})})}}}),e.module("schemaForm").directive("sfField",["$parse","$compile","$http","$templateCache","$interpolate","$q","sfErrorMessage","sfPath","sfSelect",function(t,r,n,i,o,a,l,s,u){return{restrict:"AE",replace:!1,transclude:!1,scope:!0,require:"^sfSchema",link:{pre:function(e,t,r,n){e.$on("schemaFormPropagateNgModelController",function(t,r){t.stopPropagation(),t.preventDefault(),e.ngModel=r}),e.form=n.lookup["f"+r.sfField]},post:function(t,r,n,i){t.showTitle=function(){return t.form&&t.form.notitle!==!0&&t.form.title},t.listToCheckboxValues=function(t){var r={};return e.forEach(t,function(e){r[e]=!0}),r},t.checkboxValuesToList=function(t){var r=[];return e.forEach(t,function(e,t){e&&r.push(t)}),r},t.buttonClick=function(r,n){e.isFunction(n.onClick)?n.onClick(r,n):e.isString(n.onClick)&&(i?i.evalInParentScope(n.onClick,{$event:r,form:n}):t.$eval(n.onClick,{$event:r,form:n}))},t.evalExpr=function(e,r){return i?i.evalInParentScope(e,r):t.$eval(e,r)},t.evalInScope=function(e,r){return e?t.$eval(e,r):void 0},t.interp=function(e,t){return e&&o(e)(t)},t.hasSuccess=function(){return t.ngModel?t.options&&t.options.pristine&&t.options.pristine.success===!1?t.ngModel.$valid&&!t.ngModel.$pristine&&!t.ngModel.$isEmpty(t.ngModel.$modelValue):t.ngModel.$valid&&(!t.ngModel.$pristine||!t.ngModel.$isEmpty(t.ngModel.$modelValue)):!1},t.hasError=function(){return t.ngModel?t.options&&t.options.pristine&&t.options.pristine.errors===!1?t.ngModel.$invalid&&!t.ngModel.$pristine:t.ngModel.$invalid:!1},t.errorMessage=function(e){return l.interpolate(e&&e.code+""||"default",t.ngModel&&t.ngModel.$modelValue||"",t.ngModel&&t.ngModel.$viewValue||"",t.form,t.options&&t.options.validationMessage)};var a=t.form;a.key&&(t.$on("schemaForm.error."+a.key.join("."),function(e,r,n,i){(n===!0||n===!1)&&(i=n,n=void 0),t.ngModel&&r&&(t.ngModel.$setDirty?t.ngModel.$setDirty():(t.ngModel.$dirty=!0,t.ngModel.$pristine=!1),n&&(a.validationMessage||(a.validationMessage={}),a.validationMessage[r]=n),t.ngModel.$setValidity(r,i===!0),i===!0&&(t.ngModel.$validate(),t.$broadcast("schemaFormValidate")))}),t.$on("$destroy",function(){if(!t.externalDestructionInProgress){var e=a.destroyStrategy||t.options&&t.options.destroyStrategy||"remove";if(a.key&&"retain"!==e){var r=t.model;if(a.key.length>1&&(r=u(a.key.slice(0,a.key.length-1),r)),void 0===r)return;var n=a.schema&&a.schema.type||"";"empty"===e&&-1!==n.indexOf("string")?r[a.key.slice(-1)]="":"empty"===e&&-1!==n.indexOf("object")?r[a.key.slice(-1)]={}:"empty"===e&&-1!==n.indexOf("array")?r[a.key.slice(-1)]=[]:"null"===e?r[a.key.slice(-1)]=null:delete r[a.key.slice(-1)]}}}))}}}}]),e.module("schemaForm").directive("sfMessage",["$injector","sfErrorMessage",function(t,r){var n=t.has("$sanitize")?t.get("$sanitize"):function(e){return e};return{scope:!1,restrict:"EA",link:function(t,i,o){var a="";o.sfMessage&&t.$watch(o.sfMessage,function(e){e&&(a=n(e),u(!!t.ngModel))});var l,s=function(e){e!==l&&(i.html(e),l=e)},u=function(n){if(n)if(t.hasError()){var i=[];e.forEach(t.ngModel&&t.ngModel.$error,function(e,t){e&&i.push(t)}),i=i.filter(function(e){return"schemaForm"!==e});var o=i[0];s(o?r.interpolate(o,t.ngModel.$modelValue,t.ngModel.$viewValue,t.form,t.options&&t.options.validationMessage):a)}else s(a);else s(a)};u();var c=t.$watch("ngModel",function(e){e&&(e.$parsers.push(function(e){return u(!0),e}),e.$formatters.push(function(e){return u(!0),e}),c())});t.$watchCollection("ngModel.$error",function(){u(!!t.ngModel)})}}}]),e.module("schemaForm").directive("sfNewArray",["sfSelect","sfPath","schemaForm",function(t,r,n){return{scope:!1,link:function(i,o,a){i.min=0,i.modelArray=i.$eval(a.sfNewArray);var l=function(){i.modelArray=i.$eval(a.sfNewArray),(!(i.ngModel&&i.ngModel.$pristine&&i.firstDigest)||i.options&&i.options.validateOnRender===!0)&&i.validateField&&i.validateField()},s=function(){i.form&&i.form.onChange&&(e.isFunction(i.form.onChange)?i.form.onChange(i.modelArray,i.form):i.evalExpr(i.form.onChange,{modelValue:i.modelArray,form:i.form}))},u=function(){var e=i.modelArray;if(!e){var n=r.parse(a.sfNewArray);e=[],t(n,i,e),i.modelArray=e}return e},c=i.$watch("form",function(e){if(e){if(e.titleMap||e.startEmpty===!0||i.modelArray&&0!==i.modelArray.length||i.appendToArray(),i.form&&i.form.schema&&i.form.schema.uniqueItems===!0?(i.$watch(a.sfNewArray,l,!0),i.$watch([a.sfNewArray,a.sfNewArray+".length"],s)):i.$watchGroup?i.$watchGroup([a.sfNewArray,a.sfNewArray+".length"],function(){l(),s()}):(i.$watch(a.sfNewArray,function(){l(),s()}),i.$watch(a.sfNewArray+".length",function(){l(),s()})),e.titleMap&&e.titleMap.length>0){i.titleMapValues=[];var t=function(t){i.titleMapValues=[],t=t||[],e.titleMap.forEach(function(e){i.titleMapValues.push(-1!==t.indexOf(e.value))})};t(i.modelArray),i.$watchCollection("modelArray",t),i.$watchCollection("titleMapValues",function(t,r){if(t&&t!==r){for(var n=u();n.length>0;)n.pop();e.titleMap.forEach(function(e,r){t[r]&&n.push(e.value)}),i.validateField&&i.validateField()}})}c()}});i.appendToArray=function(){var r,o=u();if(i.form&&i.form.schema&&i.form.schema.items){var a=i.form.schema.items;a.type&&-1!==a.type.indexOf("object")?(r={},i.options&&i.options.setSchemaDefaults===!1||(r=e.isDefined(a["default"])?a["default"]:r,r&&n.traverseSchema(a,function(n,i){e.isDefined(n["default"])&&t(i,r,n["default"])}))):a.type&&-1!==a.type.indexOf("array")?(r=[],i.options&&i.options.setSchemaDefaults===!1||(r=a["default"]||r)):i.options&&i.options.setSchemaDefaults===!1||(r=a["default"]||r)}return o.push(r),o},i.deleteFromArray=function(e){var t=i.modelArray;return t&&t.splice(e,1),t};var f=function(e){return function(t){t.key&&(t.key[t.key.indexOf("")]=e)}},d={};i.copyWithIndex=function(t){var r=i.form;if(!d[t]){var o=r.items[0];if(r.items.length>1&&(o={type:"section",items:r.items.map(function(t){return t.ngModelOptions=r.ngModelOptions,e.isUndefined(t.readonly)&&(t.readonly=r.readonly),t})}),o){var a=e.copy(o);a.arrayIndex=t,n.traverseForm(a,f(t)),d[t]=a}}return d[t]}}}}]),e.module("schemaForm").directive("sfSchema",["$compile","$http","$templateCache","$q","schemaForm","schemaFormDecorators","sfSelect","sfPath","sfBuilder",function(t,r,n,i,o,a,l,s,u){return{scope:{schema:"=sfSchema",initialForm:"=sfForm",model:"=sfModel",options:"=sfOptions"},controller:["$scope",function(e){this.evalInParentScope=function(t,r){return e.$parent.$eval(t,r)};var t=this;e.lookup=function(e){return e&&(t.lookup=e),t.lookup}}],replace:!1,restrict:"A",transclude:!0,require:"?form",link:function(s,c,f,d,m){s.formCtrl=d;var p={};m(s,function(e){if(e.addClass("schema-form-ignore"),c.prepend(e),c[0].querySelectorAll){var t=c[0].querySelectorAll("[ng-model]");if(t)for(var r=0;r<t.length;r++){var n=t[r].getAttribute("ng-model");p[n.substring(n.indexOf(".")+1)]=!0}}});var h,v={},y=function(e,t){var a=[],l=o.merge(e,t,p,s.options,void 0,a);a.length>0?i.all(a.map(function(e){return r.get(e.templateUrl,{cache:n}).then(function(t){e.template=t.data})})).then(function(){g(e,t,l)}):g(e,t,l)},g=function(r,n,i){h&&(s.externalDestructionInProgress=!0,h.$destroy(),s.externalDestructionInProgress=!1),h=s.$new(),h.schemaForm={form:i,schema:r},c.children(":not(.schema-form-ignore)").remove();for(var d={},m=c[0].querySelectorAll("*[sf-insert-field]"),p=0;p<m.length;p++)d[m[p].getAttribute("sf-insert-field")]=m[p];var v=a.decorator(f.sfUseDecorator),y=Object.create(null);s.lookup(y),c[0].appendChild(u.build(i,v,d,y)),h.firstDigest=!0,setTimeout(function(){h.firstDigest=!1},0),t(c.children())(h),s.options&&s.options.setSchemaDefaults===!1||o.traverseSchema(r,function(t,r){if(e.isDefined(t["default"])){var n=l(r,s.model);e.isUndefined(n)&&l(r,s.model,t["default"])}}),s.$emit("sf-render-finished",c)},$=["*"];s.$watch(function(){var e=s.schema,t=s.initialForm||$;t&&e&&e.type&&(v.form!==t||v.schema!==e)&&Object.keys(e.properties).length>0&&(v.schema=e,v.form=t,y(e,t))}),s.$on("schemaFormRedraw",function(){var t=s.schema,r=s.initialForm?e.copy(s.initialForm):["*"];t&&y(t,r)}),s.$on("$destroy",function(){s.externalDestructionInProgress=!0}),s.evalExpr=function(e,t){return s.$parent.$eval(e,t)}}}}]),e.module("schemaForm").directive("schemaValidate",["sfValidator","$parse","sfSelect",function(t,r,n){return{restrict:"A",scope:!1,priority:500,require:"ngModel",link:function(r,i,o,a){r.$emit("schemaFormPropagateNgModelController",a);var l=null,s=r.$eval(o.schemaValidate);s.copyValueTo&&a.$viewChangeListeners.push(function(){var t=s.copyValueTo;e.forEach(t,function(e){n(e,r.model,a.$modelValue)})});var u=function(e){if(!s)return e;if(r.options&&r.options.tv4Validation===!1)return e;var n=t.validate(s,e);return Object.keys(a.$error).filter(function(e){return 0===e.indexOf("tv4-")}).forEach(function(e){a.$setValidity(e,!0)}),n.valid?e:(a.$setValidity("tv4-"+n.error.code,!1),l=n.error,a.$validators?e:void 0)};"function"==typeof s.ngModel&&s.ngModel(a),["$parsers","$viewChangeListeners","$formatters"].forEach(function(e){s[e]&&a[e]&&s[e].forEach(function(t){a[e].push(t)})}),["$validators","$asyncValidators"].forEach(function(t){s[t]&&a[t]&&e.forEach(s[t],function(e,r){a[t][r]=e})}),a.$parsers.push(u),a.$validators&&(a.$validators.schemaForm=function(){return!Object.keys(a.$error).some(function(e){return"schemaForm"!==e})});var c=s.schema;r.validateField=function(e){(void 0==e||a.$$parentForm.$name===e)&&(c&&-1!==c.type.indexOf("array")&&u(a.$modelValue),a.$setDirty?(a.$setDirty(),a.$setViewValue(a.$viewValue),a.$commitViewValue(),s.required&&a.$isEmpty(a.$modelValue)&&a.$setValidity("tv4-302",!1)):a.$setViewValue(a.$viewValue))},a.$formatters.push(function(e){return!a.$pristine||!r.firstDigest||r.options&&r.options.validateOnRender===!0?(u(a.$modelValue),e):e}),r.$on("schemaFormValidate",function(e,t){r.validateField(t)}),r.schemaError=function(){return l}}}}]),o});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33).ObjectPath;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

;!function(undefined) {

	var ObjectPath = {
		parse: function(str){
			if(typeof str !== 'string'){
				throw new TypeError('ObjectPath.parse must be passed a string');
			}

			var i = 0;
			var parts = [];
			var d, b, q, c;
			while (i < str.length){
				d = str.indexOf('.', i);
				b = str.indexOf('[', i);

				// we've reached the end
				if (d === -1 && b === -1){
					parts.push(str.slice(i, str.length));
					i = str.length;
				}

				// dots
				else if (b === -1 || (d !== -1 && d < b)) {
					parts.push(str.slice(i, d));
					i = d + 1;
				}

				// brackets
				else {
					if (b > i){
						parts.push(str.slice(i, b));
						i = b;
					}
					q = str.slice(b+1, b+2);
					if (q !== '"' && q !=='\'') {
						c = str.indexOf(']', b);
						if (c === -1) c = str.length;
						parts.push(str.slice(i + 1, c));
						i = (str.slice(c + 1, c + 2) === '.') ? c + 2 : c + 1;
					} else {
						c = str.indexOf(q+']', b);
						if (c === -1) c = str.length;
						while (str.slice(c - 1, c) === '\\' && b < str.length){
							b++;
							c = str.indexOf(q+']', b);
						}
						parts.push(str.slice(i + 2, c).replace(new RegExp('\\'+q,'g'), q));
						i = (str.slice(c + 2, c + 3) === '.') ? c + 3 : c + 2;
					}
				}
			}
			return parts;
		},

		// root === true : auto calculate root; must be dot-notation friendly
		// root String : the string to use as root
		stringify: function(arr, quote){

			if(!Array.isArray(arr))
				arr = [arr.toString()];

			quote = quote === '"' ? '"' : '\'';

			return arr.map(function(n){ return '[' + quote + (n.toString()).replace(new RegExp(quote, 'g'), '\\' + quote) + quote + ']'; }).join('');
		},

		normalize: function(data, quote){
			return ObjectPath.stringify(Array.isArray(data) ? data : ObjectPath.parse(data), quote);
		},

		// Angular
		registerModule: function(angular) {
			angular.module('ObjectPath', []).provider('ObjectPath', function(){
				this.parse = ObjectPath.parse;
				this.stringify = ObjectPath.stringify;
				this.normalize = ObjectPath.normalize;
				this.$get = function(){
					return ObjectPath;
				};
			});
		}
	};

	// AMD
	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return {ObjectPath: ObjectPath};
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// CommonJS
	else if (typeof exports === 'object') {
		exports.ObjectPath = ObjectPath;
	}

	// Browser global
	else {
		window.ObjectPath = ObjectPath;
	}
	
}();

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = angular;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = tv4;

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);