<?php
	
	class ThemeLoader {

		public function __construct(){

			add_action('wp_enqueue_scripts',array($this, 'loadParentStyle'));
		}

		public function loadParentStyle(){
			wp_enqueue_style('parent-style', get_template_directory_uri()."/style.css");
		}
	}
?>