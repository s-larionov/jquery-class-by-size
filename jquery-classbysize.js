(function($) { // secure $ jQuery alias
/*******************************************************************************************/
// jquery.classbysize.js - rev 5
// Copyright (c) 2012, Larry (http://larionov.biz)
// Liscensed under the BSD License (BSD-LICENSE.txt)
// http://www.opensource.org/licenses/bsd-license.php
// @created: 2011-01-18
// @modified: 2012-07-19
/*******************************************************************************************/

$.ClassBySize = function(element, config) {
	var self = this;

	this.config = config instanceof Array? config: [];
	for (var i = 0, len = this.config.length; i < len; i++) {
		this.config[i].applyTo = this.config[i].applyTo? $(this.config[i].applyTo): this.element;
	}

	this.element = $(element);

	$(window).resize(function() {
		self.resize.call(self);
	});

	this.resize();
};
$.ClassBySize.prototype.resize = function() {
	var w = $.browser.opera && this.element.prop('innerWidth')? this.element.prop('innerWidth'): this.element.width(),
		h = $.browser.opera && this.element.prop('innerHeight')? this.element.prop('innerHeight'): this.element.height();

	for (var i = 0, len = this.config.length; i < len; i++) {
		var minW = this.config[i].minWidth || w,
			maxW = this.config[i].maxWidth || (w + 1),
			minH = this.config[i].minHeight || h,
			maxH = this.config[i].maxHeight || (h + 1),
			action = (w >= minW && w < maxW && h >= minH && h < maxH)? 'addClass': 'removeClass';

		this.config[i].applyTo[action](this.config[i].className);
	}
};
$.fn.ClassBySize = function(config) {
	return this.each(function(i, element) {
		new $.ClassBySize(element, config);
	});
};
})(jQuery);
