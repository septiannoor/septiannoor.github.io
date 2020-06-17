langxmlstr = hereDoc(function(){/*!
<language name="English">

  <noPages label="This project does not contain any pages."/>

  <nextButton label="Next" description="Next Page Button"/>
  
  <backButton label="Back" description="Previous Page Button"/>
  
  <tocButton label="Contents" description="Table of Contents Button"/>
  
  <helpButton label="Help" description="Help Button"/>

  <mediaButton label="Media" description="Media Button"/>
  
  <homeButton label="Home" description="Home Button"/>
  
  <pageHelp name="Page Help" description="Page Help" toClose="Press Space to close help"/>
  
  <glossaryButton label="Glossary" description="Glossary Button"/>
  
  <continueButton label="Continue" description="Continue Button"/>
  
  <progressBar label="COMPLETE"/>
  
  <footerTools hide="Hide footer tools" show="Show footer tools"/>
  
  <toc label="Table of Contents" description="Table of contents. Use the arrow keys to select a page. Press space to go to that page." htmlDescription="Use the tab key to select a page. Press space to go to that page.">
	  <contentsList label="" description=""/>
	  <closeButton label="" description="Close Table of Contents"/>
	  <gotoPageButton label="Go to Page" description="Go to Page Button"/>
  </toc>
  
  <mediaWindow label="Media Viewer"/>
  
  <glossary label="Glossary" description="A list of words and their definitions.">
	  <closeButton label="" description="Close Glossary"/>
  </glossary>
  
  <kbLanguage label="Special Characters" description="A list of buttons which add special characters to text areas">
	  <closeButton label="" description="Close Special Characters"/>
	  <dialog instruction="Use CAPS and SHIFT" on="ON" off="OFF" caps="Caps"/>
  </kbLanguage>
  
  <textToSpeech label="null" description="Text to Speech"/>
  
  <errorProject label="The project data has not loaded."/>
  
  <errorPage label="No template is currently available for this page type."/>
  
  <errorBrowser label="Your browser does not fully support this page type."/>
  
  <errorEmbed label="You have embedded an XOT project preview. You must make the project public and embed the public facing URL."/>
  
  <pageDeprecatedCeased label="This page has been deprecated as the service has ceased."/>
  
  <errorQuestions noQ="No questions have been added" noA="No answer options have been added" />
  
  <errorFlash label="You need to install the Flash Player to view this content." description="Get the Flash Player"/>
  
  <authorSupport label="Author Support is ON: text shown in red will not appear in live projects."/>
  
  <hiddenPage label="This page will be hidden in live projects" hidden="This page is currently hidden in live projects" shown="This page is currently shown in live projects" until="Hide until" from="Hide from"/>
  
  <hiddenSection label="This section will be hidden in live projects" hidden="This section is currently hidden in live projects" shown="This section is currently shown in live projects" until="Hide until" from="Hide from"/>
  
  <tick label="Tick"/>
  
  <cross label="Cross"/>

  <themes label="--Colour Schemes--" description="Colour Scheme Options">
    <item>default</item>
    <item>blue</item>
    <item>green</item>
    <item>red</item>
    <item>orange</item>
    <item>purple</item>
    <item>grey</item>
    <item>high contrast 1</item>
    <item>high contrast 2</item>
  </themes>
 
  <sizes label="--Screen Size--" description="Screen Size Options">
	<item>Default</item>
	<item>large</item>
	<item>larger</item>
	<item>Full Screen</item>
	<item>fill window</item>
  </sizes>
  
  <fonts label="--Text Font--" description="Typeface Options">
	  <item>default</item>
  </fonts>
  
  <textSizes label="--Text Size--" description="Text Size Options">
	  <item>default</item>
	  <item>small</item>
	  <item>medium</item>
	  <item>large</item>
	  <item>larger</item>
  </textSizes>
  
  <volumeControl label="Vol:" description="Volume Control"/>
  <volumeControlSlider label="" description="Volume Control Slider"/>
  
  <vocab>
	  <page>Page</page>
	  <of>of</of>
  </vocab>
  
  <soundController>
	<stopButton label="Stop Audio" description="Stop Audio Button"/>
	<playButton label="Play Audio" description="Play Audio Button"/>
	<pauseButton label="Pause Audio" description="Pause Audio Button"/>
	<rwndButton label="Rewind Audio" description="Rewind Audio Button"/>
	<ffwdButton label="Forward Audio" description="Forward Audio Button"/>
	<loader label="Loading: "/>
  </soundController>
  
  <movieController>
	<stopButton label="Reset Movie" description="Stop Movie Button"/>
	<playButton label="Play Movie" description="Play Movie Button"/>
	<pauseButton label="Pause Movie" description="Pause Movie Button"/>
	<rwndButton label="Rewind Movie" description="Rewind Movie Button"/>
	<ffwdButton label="Forward Movie" description="Forward Movie Button"/>
	<loader label="Loading: "/>
  </movieController>
  
  <mediaElementControls video="Video" audio="Audio">
	<stopButton label="Stop" description="Stop Media Button"/>
	<playPauseButton label="Play/Pause" description="Play/Pause Media Button"/>
	<muteButton label="Mute Toggle" description="Toggle Mute Button"/>
	<fullscreenButton label="Fullscreen" description="Fullscreen Movie Button"/>
	<captionsButton label="Captions/Subtitles" description="Show/Hide Captions Button"/>
  </mediaElementControls>
  
  <interactions>
	  <button name="Button"/>
	  <radioButton selected="selected. Use the arrow keys to choose from the options"/>
	  <checkBox selected="selected" deselected="deselected"/>
	  <comboBox name="ComboBox" options="Options." selected="selected." selectedOptions="selected. Use the arrow keys to select" />
	  <hotSpot name="HotSpot" toSelect="Hot Spot. Press Space to select." selected="Hot Spot Selected"/>
	  <hotObject name="HotObject" toSelect="Press Space to select." selected="Hot Object Selected"/>
	  <textEntry name="Text Entry Box" selected="Text entry box selected"/>
	  <targetArea name="Target Area" description="Drop zone for" toSelect="Press space to drop the selected item."/>
	  <draggableItem name="Draggable Item" selected="Item Selected" toSelect="Press space to select" deSelected="No item selected." />
	  <moreInfoItem toSelect="Press space to select" selected="Selected" moreInfo="Press space to learn more" />
  </interactions>
  
  <fetchResults label="Fetching results..."/>
  <errorResults label="There was an error loading the results"/>
  <loadError label="Error loading"/>
  <noResults label="No results returned"/>

	<rssDLAuthor label="Created by:"/>
	<rssDLLicense label="License:"/>
	<rssDLModDate label="Last modified:"/>
  
  <timer>
	  <remaining name="Time remaining"/>
	  <timeUp name="Time up"/>
	  <seconds name="seconds"/>
  </timer>

  <colourChanger label="Accessibility Options" description="Change the colours." tooltip="Accessibility Options">
	  <closeButton label="" description="Close Accessibility Options"/>
	  <selectTxt label="Please select from the options below"/>
	  <adviceTxt label="Need more advice? Visit the &lt;a target=&apos;_blank&apos; href=&apos;https://xot.xerte.org.uk/play.php?template_id=151&apos;&gt;Xerte Online Toolkits guide to accessibility&lt;/a&gt;."/>
	  <off label="Default"/>
	  <noBg label="Remove Background Images"/>
	  <invert label="Invert"/>
	  <blackYellow label="Black on Yellow"/>
  </colourChanger>
  
  <screenReaderInfo label="Screen Reader Information" newWindow="This link will open in a new window" thisWindow="This link will open in this window" dialog="This button will open a dialog window">
	  <tabNav description="This page contains a tabbed panel where the selection of a tab changes the information presented. To select a tab: Click Enter twice (Jaws) or click Shift-Enter (NVDA)."/>
	  <accNav description="This page contains an accordion panel where the selection of a tab changes the information presented. To select a tab click Enter or Space."  click="Click to reveal information"/>
	  <buttonNav description="This page contains a series of buttons where each one reveals some related information." click="Click to reveal information"/>
	  <slideshow description="This page contains a slideshow where clicking the next and previous buttons changes the information presented."/>
	  <audioSlideshow description="This page displays content in synch with an audio files. New content is added to the page as the audio plays."/>
	  <videoSynch description="This page displays content in synch with a video. New content is added to the page as the video plays."/>
	  <list description="This page contains a series of links where each one reveals some related information." click="Click to reveal information"/>
	  <modelAnswerResults selected="Text selected"/>
	  <mcq description="This page contains a multiple choice question. Use the tab and up/down arrow keys to explore possible answers and click Space to select your answer."/>
	  <quiz description="This page contains a series of multiple choice questions. Use the tab and up/down arrow keys to explore possible answers and click Space to select your answer."/>
  </screenReaderInfo>
  
  <authorVars label="View variable data">
	<item>Name</item>
	<item>Fixed Value</item>
	<item>Random</item>
	<item>Min</item>
	<item>Max</item>
	<item>Step</item>
	<item>DP</item>
	<item>SF</item>
	<item>Trailing Zeros</item>
	<item>Exclude</item>
	<item>Default</item>
	<item>Value</item>
  </authorVars>
  
  <authorVarsInfo>
	  <error unable="Unable to calculate" invalid="Invalid value" none="No variable data"/>
	  <info undef="References an undefined variable" minMax="min > max" valueMin="value &lt; min" valueMax="value > max" exclude="{n} is excluded" circular="Circular variable reference" none="All possible values are excluded or fall outside the min &amp; max range" none2="{n} attempts have not returned an accepted value" attempts="{n} attempts to calculate a valid value" default="Fallback to default value"/>
  </authorVarsInfo>
  
  <submitBtnLabel label="Submit"/>
  <submitConfirmMsg label="Your answers have been submitted"/>
  <closeBtnLabel label="Close"/>
  
  <search title="Search" searchBtn="Search" goBtn="Go" newBtn="New Search" resultTitle="Results" matchTitle1="Matches" matchTitle2="Best matches" matchTitle3="Partial matches" showMatch="Show partial matches" noMatch1="No pages or sections match your selection." noMatch2="No pages or sections completely match your criteria. Partial matches are listed below." />
  <print printBtn="Print page"/>

</language>
*/});