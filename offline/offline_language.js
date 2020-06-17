modelfilestrs['language'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	var language = new function() {
		var shiftDown = false, // variables to keep track of the state of Caps and Shift (Caps may be different from system Caps - no way around)
			capsOn = false,
			langStrings = new Object(),
			$charsHolder = $("#charsHolder"),
			$specChar = $charsHolder.find(".specChar:first"),
			$capsButton,
			$charsFooter = $("#charsFooter");
		
		this.init = function() {
			// get language strings for dialog text
			langStrings.on = x_getLangInfo(x_languageData.find("kbLanguage").find("dialog")[0], "on", "ON");
			langStrings.off = x_getLangInfo(x_languageData.find("kbLanguage").find("dialog")[0], "off", "OFF");
			langStrings.caps = x_getLangInfo(x_languageData.find("kbLanguage").find("dialog")[0], "caps", "Caps");
			
			$charsFooter.html("<p>" + x_getLangInfo(x_languageData.find("kbLanguage").find("dialog")[0], "instruction", "Use CAPS and SHIFT") + "</p>");
			$capsButton = $specChar.clone().removeClass("specChar").appendTo($charsFooter).html(langStrings.caps + ": <strong>" + langStrings.off + "</strong>");
			
			for (var i=0; i<x_specialChars.length; i++) {
				var $thisChar;
				if (i != 0) {
					$thisChar = $specChar.clone().appendTo($charsHolder);
				} else {
					$thisChar = $specChar;
				}
				$thisChar.html(x_specialChars[i].lower);
			}

			$(".specChar")
				.button()
				.click(function() {
					if (x_inputFocus != false) {
						var textArea = x_inputFocus;
						
						// Attempt at handling upper/lower case - SHIFT and CAPS LOCK
						// Short form of Boolean XOR [(A && !B) || (!A && B)]
						var specChar	= (shiftDown ? !capsOn : capsOn)
										? x_specialChars[$(this).index()].upper
										: x_specialChars[$(this).index()].lower;
						
						if (document.selection) {
							textArea.focus();
							var sel = document.selection.createRange();
							sel.text = specChar;
							textArea.focus();
						}
						else if (textArea.selectionStart || textArea.selectionStart === 0) {
							var startPos = textArea.selectionStart,
								endPos = textArea.selectionEnd,
								scrollTop = textArea.scrollTop;
							
							textArea.value = textArea.value.substring(0, startPos) + specChar + textArea.value.substring(endPos, textArea.value.length);
							textArea.focus();
							textArea.selectionStart = startPos + specChar.length;
							textArea.selectionEnd = startPos + specChar.length;
							textArea.scrollTop = scrollTop;
						}
						else {
							textArea.value += specChar;
							textArea.focus();
						}
					}
				});

			$capsButton
				.button()
				.click(function() {
					language.toggleCaps();
					language.toggleButtons(capsOn ? !shiftDown : shiftDown);
				});

			// Event handlers to deal with SHIFT key
			this.turnOnKeyEvents();
			
			$charsHolder.parent().on('dialogclose', function(e) {
				$(document).off('.language');
			});
		}
		
		this.turnOnKeyEvents = function() {
			// called from xenith.js when dialog reopened
			$(document).on('keyup.language keydown.language', language.keypressHandler);
		}
		
		this.keypressHandler = function(e) {
			if (shiftDown != e.shiftKey) {
				shiftDown = e.shiftKey;
				language.toggleButtons(capsOn ? !shiftDown : shiftDown); // Boolean XOR again
			}
			if (e.keyCode == 20) {
				if (e.type == "keyup") {
					language.toggleCaps();
				}
			}
		}
		
		this.toggleCaps = function() {
			capsOn = !capsOn;
			language.toggleButtons(capsOn ? !shiftDown : shiftDown); // Boolean XOR again
			$capsButton.find("span").html(langStrings.caps + ": <strong>" + (capsOn ? langStrings.on : langStrings.off) + "</strong>");
		}
		
		this.toggleButtons = function(uppercase) {
			$charsHolder.children().each(function () {
				var charIndex = $(this).index(),
					$char = $(this).find("span");
				
				$char.html(uppercase ? x_specialChars[charIndex].upper : x_specialChars[charIndex].lower);
			});
		}
		
	}
	
	language.init();
	
</script>


<div id="charsHolder">
	<button class="specChar"/>
</div>

<div id="charsFooter"></div>

*/});