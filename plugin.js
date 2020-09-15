(function($) {
	$.fn.oSelect = function() {
		let random = Math.floor(Math.random() * 999999999);
		this.addClass("oselect").attr("data-select","os-"+random);
		
		
		this.after(container);
		this.init = function(){
			let options = this.get();
		};
		this.get = function(){
			let options = this[0].options;
			return options;
		};
		return this.init();
	};
})(jQuery);