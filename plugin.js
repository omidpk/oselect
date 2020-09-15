(function($) {
	$.fn.oSelect = function() {
		
		var count = this.length;

		return this.each(function(){
			var el = $(this);
			let random = Math.floor(Math.random() * 999999999);
			el.addClass("o-select").attr("data-select","os-"+random);
			let container = '<div class="o-select-container" data-select="os-'+random+'"></div>';
			el.after(container);
			
			
			this.init = function(){
				return this.setStyle();
			};
			
			this.getOptions = function(){
				let options = el[0].options;
				let array = new Array();
				$.each(options,function(i,v){
					let color = $(v).attr("data-color");
					let bg = $(v).attr("data-bg");
					let selected = false;
					let value = '';
					
					
					if(!color)
						color = "#000";
					if(!bg)
						bg = "#fff";
					if(v.attributes.selected)
						selected = true;
					
					array.push({bg:bg,color:color,label:v.label,value:v.attributes.value.nodeValue,index:i,selected:selected});
				});
				return array;
			};
			this.setStyle = function(){
				let options = this.getOptions();
				let cnt = $(".o-select-container[data-select='os-"+random+"']")[0];
				let cntInner = '<ul class="o-select-list" data-select="os-'+random+'">';
				$.each(options,function(i,v){
					var cl = "";
					if(v.selected == true)
						cl = "selected";
					cntInner += '<li class="o-select-item '+cl+'" style="background-color:'+v.bg+';color:'+v.color+'">'+v.label+'</li>';
				});
				cntInner += '</ul>';
				cnt.innerHTML = cntInner;
			};
			return this.init();
		});
	};
})(jQuery);