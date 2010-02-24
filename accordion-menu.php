<?php
	/**
	 * @package Accordion-Menu
	 * @author Bruce Drummond
	 * @version 1.0
	 */
	/*
	Plugin Name: Accordion Menu
	Plugin URI: http://www.bruzed.com/accordion-menu/
	Description: This plugin enables a simple jquery accordion menu for your Pages widget.
	Author: Bruce Drummond
	Version: 1.0
	Author URI: http://www.bruzed.com/
	*/

	function accordion_menu_init(){  
		wp_enqueue_script('jquery-accordion', '/wp-content/plugins/accordion-menu/accordion-menu.js', array('jquery'));
	}

	add_action('init', 'accordion_menu_init');

?>
