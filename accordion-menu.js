jQuery(document).ready(function() {
	appendClasses();
});

function appendClasses() {
	//level 0
	jQuery('li.widget_pages ul').addClass('accordion-menu');
	var widgetTitle0 = jQuery('li.widget_pages').attr('id');
	jQuery('li.widget_pages ul').attr('id', 'accordion-menu-' + widgetTitle0 + '-level0');
	//level 1
	jQuery('li.widget_pages ul ul').addClass('accordion-menu');
	var widgetTitle1 = jQuery('li.widget_pages').attr('id');
	jQuery('li.widget_pages ul ul').attr('id', 'accordion-menu-' + widgetTitle1 + '-level1');
	//level 2
	jQuery('li.widget_pages ul ul ul').addClass('accordion-menu');
	var widgetTitle2 = jQuery('li.widget_pages').attr('id');
	jQuery('li.widget_pages ul ul ul').attr('id', 'accordion-menu-' + widgetTitle2 + '-level2');
	//initialize
	initMenus();
}

function initMenus() {
	jQuery('ul.accordion-menu ul').hide();
	jQuery(".current_page_item ul:first").slideDown('normal');
	jQuery(".current_page_item").parents("ul, li").map(function () { 
		jQuery(this).slideDown('normal');
	});
	jQuery('ul.accordion-menu li a').click(function() {
		var checkElement = jQuery(this).next();
		var parent = this.parentNode.parentNode.id;
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			if(jQuery('#' + parent).hasClass('collapsible')) {
				jQuery('#' + parent + ' ul:visible').slideUp('normal');
			}
			return false;
		}
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			jQuery('#' + parent + ' ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
			return false;
		}
	});
}