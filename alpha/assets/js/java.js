//  Windows XP "effect" by Marco Folio
//  Link: http://www.marcofolio.net/webdesign/nostalgia_dragging_the_windows_xp_error_dialog.html


// Time for the interval to duplicate the dialog
var DUPLICATIONTIME = 100;

$(document).ready(function()
{
   
   
   // Handle for the intervalID
   var intervalId;
   
   // Make the dialog draggable
   $("#errordialog").draggable({
      handle : '.topbar , .closebutton', // Only the heading is draggable
      start: function(event, ui) {
         // Create an interval when the user starts dragging the window
         intervalId = setInterval("duplicateWindow()", DUPLICATIONTIME);
      },
      stop: function(event, ui) {
         // Clear the interval when the user stopped dragging
         clearInterval(intervalId)
      }
   });
});

var windowCount = 0;
var errorDialogZIndex = 1;
function duplicateWindow() {
	// Clone the error dialog and append it to the Windows XP screen
	var clone = $("#errordialog").clone().appendTo('#windowsxp');

	// Bring the dragging error dialog up front by changing the Z-index
	errorDialogZIndex++;
	$("#errordialog").css('z-index', errorDialogZIndex);

	// Check if the maximum window count has been reached
	windowCount++;
	if(windowCount == MAXWINDOWCOUNT) {
		$(".mco").fadeIn(250);
	}
}