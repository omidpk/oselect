(function($) {
	$.fn.oSelect = function() {
		let random = Math.floor(Math.random() * 999999999);
		
		this.addClass("oSelect").attr("data-select","os-"+random);
		let container = '<div class="oSelect-container" data-select="os-'+random+'"></div>';
		this.after(container);
		
		
		this.init = function(){
			return this.setStyle();
		};
		this.getOptions = function(){
			let options = this[0].options;
			let array = new Array();
			$.each(options,function(i,v){
				let color = $(v).attr("data-color");
				let bg = $(v).attr("data-bg");
				let value= '';
				if(!color)
					color = "#000";
				if(!bg)
					bg = "#fff";
				array.push({bg:bg,color:color,label:v.label,value:v.attributes.value.nodeValue,index:i});
			});
			return array;
		};
		this.setStyle = function(){
			let options = this.getOptions();
			let cnt = $(".oSelect-container[data-select='os-"+random+"']")[0];
			let cntInner = '<ul class="oSelect-list" data-select="os-'+random+'">';
			$.each(options,function(i,v){
				console.log(v);
				cntInner += '<li style="background-color:'+v.bg+';color:'+v.color+'">'+v.label+'</li>';
			});
			
			cntInner += '</ul>';
			cnt.innerHTML = cntInner;
		};
		return this.init();
	};
})(jQuery);