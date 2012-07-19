(function($) { // secure $ jQuery alias
	/*******************************************************************************************/
// jquery.classbysize.js - rev 5
// Copyright (c) 2012, Larry (http://larionov.biz)
// Liscensed under the BSD License (BSD-LICENSE.txt)
// http://www.opensource.org/licenses/bsd-license.php
// @created: 2011-01-18
// @modified: 2012-07-19
	/*******************************************************************************************/

	/**
	 * @param {jQuery|DOMElement} element
	 * @param {Array|Object} config
	 * @constructor
	 */
	$.ClassBySize = function(element, config) {
		var self = this;

		this.element = $(element);
		this.config = config && config.rules instanceof Array? config: (config instanceof Array? {rules: config}: {rules: []});

		if (!this.element.size() || !this.config.rules.length) {
			return;
		}

		this.applyTo = this.config.applyTo? $(this.config.applyTo): this.element;
		for (var i = 0, len = this.config.rules.length; i < len; i++) {
			this.config.rules[i].applyTo = this.config.rules[i].applyTo? $(this.config.rules[i].applyTo): this.applyTo;
		}

		$(window).resize(function() {
			self.resize.call(self);
		});

		this.resize();
	};
	$.ClassBySize.prototype.resize = function() {
		var w = $.browser.opera && this.element.prop('innerWidth')? this.element.prop('innerWidth'): this.element.width(),
			h = $.browser.opera && this.element.prop('innerHeight')? this.element.prop('innerHeight'): this.element.height();

		for (var i = 0, len = this.config.rules.length; i < len; i++) {
			var rule = this.config.rules[i];

			if (!rule.className) {
				continue;
			}

			var minW = rule.minWidth || w,
				maxW = rule.maxWidth || (w + 1),
				minH = rule.minHeight || h,
				maxH = rule.maxHeight || (h + 1),
				action = (w >= minW && w < maxW && h >= minH && h < maxH)? 'addClass': 'removeClass';

			rule.applyTo[action](rule.className);
		}
	};
	$.fn.ClassBySize = function(config) {
		return this.each(function(i, element) {
			new $.ClassBySize(element, config);
		});
	};
})(jQuery);
