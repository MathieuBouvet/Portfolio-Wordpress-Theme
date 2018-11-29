<?php
	
	class ThemeLoader {

		public function __construct(){

			add_action('wp_enqueue_scripts',array($this, 'loadParentStyle'));
			add_action('wp_enqueue_scripts', array($this, 'loadHomepageAssets'));
			add_action('wp_enqueue_scripts', array($this, 'loadDrawingsArchiveAssets'));
		}

		public function loadParentStyle(){
			wp_enqueue_style('parent-style', get_template_directory_uri()."/style.css");
		}

		public function loadHomepageAssets(){
			if(is_front_page()){
				wp_enqueue_style('homepage', get_stylesheet_directory_uri()."/assets/css/homepage.css");
				// Load the dark colorscheme.
				if ( 'dark' === get_theme_mod( 'colorscheme', 'light' ) || is_customize_preview() ) {
					wp_enqueue_style( 'MBNC-colors-dark', get_stylesheet_directory_uri().'/assets/css/theme.dark.css');
				}

				wp_register_script('diapositives', get_stylesheet_directory_uri()."/assets/scripts/diapo.js",array('jquery'));
				wp_register_script('infinite-scroll', get_stylesheet_directory_uri()."/assets/scripts/lib/infinitescroll.min.js",array('jquery'));

				wp_enqueue_script('homepage', get_stylesheet_directory_uri()."/assets/scripts/homepage.js",array('jquery','diapositives','infinite-scroll'));
			}
		}
		public function loadDrawingsArchiveAssets(){
			if(is_post_type_archive(MBPortfolioPlugin::CPT_NAME) && !is_front_page()){
				wp_enqueue_style('drawings-archive', get_stylesheet_directory_uri()."./assets/css/drawings-archive.css");

				wp_register_script('infinite-scroll', get_stylesheet_directory_uri()."/assets/scripts/lib/infinitescroll.min.js",array('jquery'));

				wp_enqueue_script('gallery', get_stylesheet_directory_uri()."/assets/scripts/gallery.js",array('jquery','infinite-scroll'));
			}
		}
	}
?>