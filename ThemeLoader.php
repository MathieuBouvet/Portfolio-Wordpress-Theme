<?php
	
	class ThemeLoader {

		public function __construct(){

			add_action('wp_enqueue_scripts',array($this, 'loadParentStyle'));
			add_action('wp_enqueue_scripts', array($this, 'loadHomepageAssets'));
		}

		public function loadParentStyle(){
			wp_enqueue_style('parent-style', get_template_directory_uri()."/style.css");
		}

		public function loadHomepageAssets(){
			if(is_front_page()){
				wp_enqueue_style('homepage', get_stylesheet_directory_uri()."/assets/css/homepage.css");
			}
		}
	}
?>