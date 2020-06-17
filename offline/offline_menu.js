modelfilestrs['menu'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var menu = new function() {
		
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			if (x_params.menuImage != undefined && x_params.menuImage != "" && x_params.navigation != "Linear" && x_params.menuImageProperties == "Full Screen") {
				this.setUpBg();
			}
			
			if (x_params.pageTick == undefined || x_params.pageTick == "true") {
				$("#menuItems .menuItem").each(function(i) {
					if (x_pageInfo[i+1].built) $(this).find('i').removeClass('notvisited');
				});
			}
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function() {
			
		}
		
		this.init = function() {
			var numOffset = 0;
			if (x_params.navigation != "Linear" && x_params.navigation != "Historic") { // 1st page is menu page - ignore this when making page list
				numOffset = 1;
			}
			
			var $menuItems = $("#menuItems"),
				$menuItem = $menuItems.find(".menuItem:first"),
				i;
			
			for (i=0; i<x_pages.length-numOffset; i++) {
				var $thisItem;
				if (i != 0) {
					$thisItem = $menuItem.clone().appendTo($menuItems);
				} else {
					$thisItem = $menuItem;
				}
				var pageNum = x_params.tocNumbers == "false" ? "" : (i+1) + ") ";
				$thisItem.html(pageNum + x_pages[i+numOffset].getAttribute("name"));
				$thisItem.append(' <i class="fa fa-x-tick-circle notvisited" aria-hidden="true"></i>');
			}
			
			$("#menuItems .menuItem")
				.button()
				.click(function() {
					$this = $(this);
					$this.removeClass("ui-state-focus");
					$this.removeClass("ui-state-hover");
					x_changePage($this.index() + numOffset);
				});
			
			if (x_params.navigation != "Linear" && x_params.navigation != "Historic" && x_params.navigation != "LinearWithHistoric") { // 1st page is menu page
				
				if (x_params.menuImage != undefined && x_params.menuImage != "") {
				
					x_checkMediaExists(x_evalURL(x_params.menuImage), function(mediaExists) {
						if (mediaExists) {
							
							if (x_params.menuImageProperties != "Full Screen") { // use panel
								
								$("#menuHolder .right").append('<img class="panel centre" />');
								
								$("#menuHolder .right img")
									.one("load", function() {
										x_pageLoaded();
									})
									.attr({
										"id":"pageImg",
										"src":x_evalURL(x_params.menuImage)
									})
									.each(function() { // called if loaded from cache as in some browsers load won't automatically trigger
										if (this.complete) {
											$(this).trigger("load");
										}
									});
								
							} else { // bg image
								menu.setUpBg(true);
								x_pageLoaded();
							}
						} else {
							menu.noImg();
						}
					});
					
				} else {
					menu.noImg();
				}
				
			} else { // menu is in dialog
				$("#menuHolder").removeClass("splitScreen");
				this.showCurrent();
			}
			
			$("#screenReaderInfo").html(x_getLangInfo(x_languageData.find("toc")[0], "htmlDescription", "Use the tab key to select a page. Press space to go to that page."));
		}
		
		this.noImg = function() {
			$("#menuHolder").removeClass("splitScreen");
			if (x_browserInfo.mobile == false) {
				$("#menuItems").width("70%");
			}
			x_pageLoaded();
		}
		
		// function called from xenith every time menu in popup appears - highlights current page in list and pages visited
		this.showCurrent = function() {
			$("#menuItems").find(".current").removeClass("current");
			var $thisItem = $("#menuItems .menuItem:eq(" + x_currentPage + ")")
								.addClass("current")
								.focus();
			if ($thisItem.position().top != $thisItem.parents("#x_menu").scrollTop()) {
				$thisItem.parents("#x_menu").scrollTop($thisItem.position().top - parseInt($thisItem.css("margin-bottom")));
			}

			if (x_params.pageTick == undefined || x_params.pageTick == "true") {
				$("#menuItems .menuItem").each(function(i) {
					if (x_pageInfo[i].built) $(this).find('i').removeClass('notvisited');
				});
			}
		}
		
		// function sets up full screen bg image
		this.setUpBg = function(firstLoad) {
			x_checkMediaExists(x_evalURL(x_params.menuImage), function(mediaExists) {
				if (mediaExists) {
					$("#x_mainBg").hide();
					
					var $pageBg = $('<img id="pageBg' + x_currentPage + '" class="pageBg"/>');
					$pageBg
						.hide()
						.one("load", function() {
							$(this).fadeIn();
							if (firstLoad == true) {
								x_pageLoaded();
							}
						})
						.attr("src", x_evalURL(x_params.menuImage))
						.each(function() { // called if loaded from cache as in some browsers load won't automatically trigger
							if (this.complete) {
								$(this).trigger("load");
							}
						});
					
					$x_background.prepend($pageBg);
				}
			});
		}
	}
	
	menu.init();
	
</script>

<div id="menuHolder" class="splitScreen">
	
	<div class="left">
		
		<div id="screenReaderInfo" class="ui-helper-hidden-accessible"></div>
		
		<fieldset id="menuItems">
			<button class="menuItem"/>
		</fieldset>
	</div>
	
	<div class="right">
	</div>
	
</div>
*/});