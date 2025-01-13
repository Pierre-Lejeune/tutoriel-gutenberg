<?php 


add_editor_style( '/dist/style-style.css' );

function register_theme_style() {
	wp_enqueue_style( 'style', get_template_directory_uri() . '/dist/style-style.css' );
}
add_action( 'wp_enqueue_scripts', 'register_theme_style' );

function register_theme_script() {
	wp_enqueue_script( 'script', get_template_directory_uri() . '/dist/script.js', array('jquery', 'wp-blocks', 'wp-dom'), false, true );
}
add_action( 'enqueue_block_editor_assets', 'register_theme_script' );
