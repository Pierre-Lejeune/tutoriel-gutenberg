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

function register_backoffice_theme_style($hook="") {
	wp_enqueue_style( 'backoffice-style', get_template_directory_uri() . '/dist/style-back-style.css' );
}
add_action( 'admin_enqueue_scripts', 'register_backoffice_theme_style', 100 );


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

function register_query_render(){
	register_block_type('tutoriel-gutenberg/query', array(
        'render_callback' => 'render_custom_query',
		'attributes' => array(
			'page_id' => array(
				'type' => 'number',
				'default' => 0
			)
		)
    ));
}

add_action('init', 'register_query_render');

function render_custom_query($attributes) {
	$page_id = isset($attributes['page_id']) ? intval($attributes['page_id']) : 0;
	$block = '<div class="wp-block-tutoriel-gutenberg-query">';
	if($page_id) $block .= '<h2><a href="'.get_the_permalink( $page_id ).'" target="_blank">'.get_the_title($page_id).'</a></h2>';
	else $block .= "<p>Merci de sélectionner une page depuis les paramètres de ce bloc (en back-office)</p>";
	$block .= '</div>';
	return $block;
}