;(function($, window, document, undefined) {

  'use strict';

  var pluginName = 'pluginName';
  
  var defaults = {};

  var Plugin = function(element, options) {
    this._element = element;
    this._options = $.extend({}, defaults, options, $(element).data());
    this._init();
  };

  Plugin.prototype._init = function() {
    console.log('Hello world');
  };

  var pluginSetup = function(options) {
    $.extend(defaults, options);
  };

  var pluginHandler = function(options) {
    return this.each(function() {
      if (!$(this).data('plugin_' + pluginName)) {
        $(this).data('plugin_' + pluginName, new Plugin(this, options));
      }
    });
  };

  $[pluginName] = pluginSetup;
  $.fn[pluginName] = pluginHandler;
  $.fn[pluginName].defaults = defaults;

}(jQuery, window, document));
