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


function init_page_meta(){
	register_meta( 'post', 'visible', array(
		'show_in_rest' => true,
		'object_subtype' => 'page',
		'auth_callback' => function() {
			return current_user_can( 'edit_posts' );
		},
		'type' => 'boolean',
		'single' => true,
		'sanitize_callback' => 'sanitize_page_visibilty'
	) );
}
add_action( "init", 'init_page_meta' );


function sanitize_page_visibility($value) {
	return boolval($value);
} 