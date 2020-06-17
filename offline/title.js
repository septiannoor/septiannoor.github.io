modelfilestrs['title'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var title = new function() {
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function() {
			if (x_params.responsive == "true" && x_fillWindow == true) {
				this.responsiveTitle();
			} else {
				$(".titlePageTxt").css("font-size", x_currentPageXML.getAttribute("size") + "pt");
			}
		}
		
		this.init = function() {
			var $pageContents = $("#pageContents");
			if (x_currentPageXML.childNodes[0] != undefined && x_currentPageXML.childNodes[0].nodeValue != "" && x_currentPageXML.childNodes[0].nodeValue != undefined) {
				$pageContents.html(x_currentPageXML.childNodes[0].nodeValue);
			}
			
			if (x_params.responsive == "true" && x_params.displayMode != "default" && !$.isArray(x_params.displayMode)) {
				this.responsiveTitle();
			} else {
				$(".titlePageTxt").css("font-size", x_currentPageXML.getAttribute("size") + "pt");
			}
			
			if (x_currentPageXML.getAttribute("titleTextColour") != undefined) {
				$pageContents.css("color", x_currentPageXML.getAttribute("titleTextColour").replace("0x","#"));
			}
			
			if (x_currentPageXML.getAttribute("titleHAlign") != undefined) {
				$pageContents.addClass(x_currentPageXML.getAttribute("titleHAlign") + "Align");
			} else {
				$pageContents.addClass("centerAlign");
			}
			
			var titleAlign = x_currentPageXML.getAttribute("titleVAlign");
			if (x_browserInfo.mobile == true) {
				$pageContents.css({
					"position"		:"inherit",
					"margin-left"	:0
				});
			} else {
				if (titleAlign == 200 || titleAlign == undefined) { // middle
					$pageContents.css({
						"top"			:"50%",
						"margin-top"	:0 - Math.round($pageContents.height() / 2)
					})
				} else if (titleAlign == 400) { // bottom
					$pageContents.css({
						"top"			:"100%",
						"margin-top"	:0 - $pageContents.height()
					})
				}
			}
			
			x_pageLoaded();
		}
		
		this.responsiveTitle = function() {
			if (window.innerWidth >= 768 && x_fillWindow == true) {
				$(".titlePageTxt").css("font-size", "");
			} else {
				$(".titlePageTxt").css("font-size", x_currentPageXML.getAttribute("size") + "pt");
			}
		}
	}
	
	title.init();
	
</script>


<div id="pageContents" class="titlePageTxt">

</div>

*/});