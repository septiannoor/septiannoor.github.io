modelfilestrs['text'] = hereDoc(function(){/*!
<script type="text/javascript">

 
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var simpleText = new function() {		
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function() {

		}
		
		this.init = function() {
			var $pageContents = $("#pageContents");
			$pageContents.html(x_addLineBreaks(x_currentPageXML.childNodes[0].nodeValue));
			// ignores superscript support data in xml as it will do it automatically with <sub> <sup> tags
			
			if (x_currentPageXML.getAttribute("textWidth") == "300") {
				$pageContents.addClass("width40");
			} else if (x_currentPageXML.getAttribute("textWidth") == "450") {
				$pageContents.addClass("width60");
			} else if (x_currentPageXML.getAttribute("textWidth") == "600") {
				$pageContents.addClass("width80");
			}
			
			// call this function in every model once everything's loaded
			x_pageLoaded();
		}
	}
	
	simpleText.init();
	
</script>



<div id="pageContents">
	
</div>

*/});