var Core = {};
var _cache = {};

Core.config = {
};

Core.init = function() {
	$(window).ready(function() {
		for (var sc in shortcut) {
			_cache.launcherTemp = {
				"shortcut": shortcut[sc][0],				"name": shortcut[sc][1],
				"icon": shortcut[sc][2],
				"background": shortcut[sc][4],
			};
			$('.task-window').append(FormatModel(launcherTemp, _cache.launcherTemp));
		}
	});
	$(document).on('click', '.task-window li', function() {
		Core.taskwindow($(this));
	});
};

Core.taskwindow = function(obj) {
	$('.window-container').remove(); // close open window
	if( obj.children('b').hasClass('focus')) { // if program gets closed
		$('.task-window li b').removeClass('focus'); // remove all focus
	}
	else { // if program gets opened
		$('.task-window li b').removeClass('focus'); // remove old focus
		var sc = obj.attr('shortcut'); //find out which program is invoked

		_cache.windowTemp = {
			"num": shortcut[sc][0],
			"url": shortcut[sc][3]
		};
		$('#desk').append(FormatModel(windowTemp, _cache.windowTemp));
		obj.children('b').addClass('focus'); // add new focus
	}
};
var FormatModel = function(str, model) {
	for (var k in model) {
		var re = new RegExp("{" + k + "}", "g");
		str = str.replace(re, model[k]);
	}
	return str;
}
$().ready(function() {
	Core.init();
});
