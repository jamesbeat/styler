/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'chat': '&#xe600;',
			'email': '&#xe601;',
			'textsms': '&#xe602;',
			'add': '&#xe069;',
			'add_box': '&#xe06a;',
			'add_circle': '&#xe06b;',
			'add_circle_outline': '&#xe06c;',
			'archive': '&#xe06d;',
			'backspace': '&#xe06e;',
			'content_cut': '&#xe603;',
			'content_paste': '&#xe604;',
			'mail': '&#xe605;',
			'text_format': '&#xe606;',
			'attach_file': '&#xe0c0;',
			'border_color': '&#xe0c5;',
			'format_align_justify': '&#xe607;',
			'format_color_fill': '&#xe608;',
			'format_color_text': '&#xe609;',
			'format_line_spacing': '&#xe60a;',
			'format_list_bulleted': '&#xe60b;',
			'format_list_numbered': '&#xe60c;',
			'format_paint': '&#xe60d;',
			'insert_drive_file': '&#xe60e;',
			'insert_invitation': '&#xe60f;',
			'insert_link': '&#xe610;',
			'insert_photo': '&#xe611;',
			'mode_comment': '&#xe612;',
			'mode_edit': '&#xe613;',
			'vertical_align_bottom': '&#xe0f2;',
			'photo_library': '&#xe614;',
			'picture_as_pdf': '&#xe615;',
			'wb_cloudy': '&#xe616;',
			'photo_size_select_actual': '&#xe617;',
			'local_movies': '&#xe618;',
			'local_offer': '&#xe619;',
			'local_see': '&#xe61a;',
			'pin_drop': '&#xe61b;',
			'place': '&#xe61c;',
			'apps': '&#xe61d;',
			'arrow_back': '&#xe61e;',
			'arrow_drop_up': '&#xe61f;',
			'arrow_forward': '&#xe620;',
			'cancel': '&#xe621;',
			'check': '&#xe622;',
			'chevron_left': '&#xe623;',
			'chevron_right': '&#xe624;',
			'close': '&#xe625;',
			'expand_less': '&#xe626;',
			'expand_more': '&#xe627;',
			'menu': '&#xe628;',
			'keyboard_control': '&#xe629;',
			'more_vert': '&#xe62a;',
			'refresh': '&#xe62b;',
			'unfold_less': '&#xe62c;',
			'unfold_more': '&#xe62d;',
			'person': '&#xe62e;',
			'poll': '&#xe62f;',
			'public': '&#xe630;',
			'school': '&#xe631;',
			'share': '&#xe632;',
			'check_box': '&#xe633;',
			'check_box_outline_blank': '&#xe634;',
			'radio_button_unchecked': '&#xe635;',
			'radio_button_checked': '&#xe636;',
			'star': '&#xe637;',
			'star_half': '&#xe638;',
			'star_outline': '&#xe639;',
			'autorenew': '&#xe63a;',
			'backup': '&#xe63b;',
			'build': '&#xe63c;',
			'cached': '&#xe63d;',
			'check_circle': '&#xe63e;',
			'code': '&#xe63f;',
			'delete': '&#xe640;',
			'description': '&#xe641;',
			'done': '&#xe642;',
			'extension': '&#xe643;',
			'face': '&#xe644;',
			'favorite': '&#xe645;',
			'favorite_outline': '&#xe646;',
			'feedback': '&#xe647;',
			'find_in_page': '&#xe648;',
			'get_app': '&#xe649;',
			'grade': '&#xe64a;',
			'group_work': '&#xe64b;',
			'help': '&#xe64c;',
			'highlight_remove': '&#xe64d;',
			'home': '&#xe64e;',
			'https': '&#xe64f;',
			'info': '&#xe650;',
			'info_outline': '&#xe651;',
			'input': '&#xe652;',
			'label': '&#xe653;',
			'label_outline': '&#xe654;',
			'list': '&#xe655;',
			'lock': '&#xe656;',
			'lock_open': '&#xe657;',
			'lock_outline': '&#xe658;',
			'note_add': '&#xe659;',
			'open_in_browser': '&#xe65a;',
			'open_in_new': '&#xe65b;',
			'open_with': '&#xe65c;',
			'pageview': '&#xe65d;',
			'perm_identity': '&#xe65e;',
			'print': '&#xe65f;',
			'question_answer': '&#xe660;',
			'report_problem': '&#xe661;',
			'room': '&#xe662;',
			'schedule': '&#xe663;',
			'search': '&#xe664;',
			'settings': '&#xe665;',
			'settings_applications': '&#xe666;',
			'spellcheck': '&#xe667;',
			'stars': '&#xe668;',
			'subject': '&#xe669;',
			'swap_horiz': '&#xe66a;',
			'swap_vert': '&#xe66b;',
			'swap_vertical_circle': '&#xe66c;',
			'system_update_alt': '&#xe66d;',
			'theaters': '&#xe66e;',
			'thumb_down': '&#xe66f;',
			'thumb_up': '&#xe670;',
			'today': '&#xe671;',
			'turned_in': '&#xe672;',
			'turned_in_not': '&#xe673;',
			'verified_user': '&#xe674;',
			'visibility': '&#xe675;',
			'visibility_off': '&#xe676;',
			'help_outline': '&#xe677;',
			'reorder': '&#xe678;',
			'zoom_in': '&#xe679;',
			'zoom_out': '&#xe67a;',
			'play_for_work': '&#xe67b;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());