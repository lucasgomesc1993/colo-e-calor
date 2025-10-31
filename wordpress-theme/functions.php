<?php
/**
 * Colo e Calor Theme Functions
 *
 * @package Colo_Calor
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Setup do Tema
 */
function colo_calor_setup() {
    // Adiciona suporte a título dinâmico
    add_theme_support( 'title-tag' );
    
    // Adiciona suporte a imagens destacadas
    add_theme_support( 'post-thumbnails' );
    
    // Adiciona suporte a HTML5
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );
    
    // Adiciona suporte a logo personalizado
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}
add_action( 'after_setup_theme', 'colo_calor_setup' );

/**
 * Enfileira scripts e estilos
 */
function colo_calor_scripts() {
    // Estilo principal do tema
    wp_enqueue_style( 'colo-calor-style', get_stylesheet_uri(), array(), '1.0.0' );
    
    // JavaScript principal
    wp_enqueue_script( 'colo-calor-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
    
    // Font Awesome para ícones
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0' );
}
add_action( 'wp_enqueue_scripts', 'colo_calor_scripts' );

/**
 * Registra áreas de widgets
 */
function colo_calor_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'colo-calor' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here.', 'colo-calor' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'colo_calor_widgets_init' );

/**
 * Customizer - Opções do tema
 */
function colo_calor_customize_register( $wp_customize ) {
    // Seção de configurações gerais
    $wp_customize->add_section( 'colo_calor_general', array(
        'title'    => __( 'Configurações Gerais', 'colo-calor' ),
        'priority' => 30,
    ) );
    
    // WhatsApp
    $wp_customize->add_setting( 'whatsapp_number', array(
        'default'           => '5511972360065',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    
    $wp_customize->add_control( 'whatsapp_number', array(
        'label'    => __( 'Número do WhatsApp', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'text',
    ) );
    
    // URL do vídeo do Hero
    $wp_customize->add_setting( 'hero_video_url', array(
        'default'           => 'https://www.youtube.com/embed/lrTpcHoqdLg',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    
    $wp_customize->add_control( 'hero_video_url', array(
        'label'    => __( 'URL do Vídeo Hero', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'url',
    ) );
    
    // URL do vídeo de depoimento
    $wp_customize->add_setting( 'testimonial_video_url', array(
        'default'           => 'https://www.youtube.com/embed/CLEub2Z__0s',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    
    $wp_customize->add_control( 'testimonial_video_url', array(
        'label'    => __( 'URL do Vídeo de Depoimento', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'url',
    ) );
    
    // Link de compra/CTA
    $wp_customize->add_setting( 'cta_link', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    
    $wp_customize->add_control( 'cta_link', array(
        'label'    => __( 'Link de Compra (CTA)', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'url',
    ) );
    
    // Instagram
    $wp_customize->add_setting( 'instagram_url', array(
        'default'           => 'https://www.instagram.com/coloecalorconsultoria',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    
    $wp_customize->add_control( 'instagram_url', array(
        'label'    => __( 'Instagram URL', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'url',
    ) );
    
    // YouTube
    $wp_customize->add_setting( 'youtube_url', array(
        'default'           => 'https://www.youtube.com/@coloecalorconsultoria',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    
    $wp_customize->add_control( 'youtube_url', array(
        'label'    => __( 'YouTube URL', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'url',
    ) );
    
    // Email
    $wp_customize->add_setting( 'email_contact', array(
        'default'           => 'metodocoloecalor@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ) );
    
    $wp_customize->add_control( 'email_contact', array(
        'label'    => __( 'Email de Contato', 'colo-calor' ),
        'section'  => 'colo_calor_general',
        'type'     => 'email',
    ) );
}
add_action( 'customize_register', 'colo_calor_customize_register' );

/**
 * Adiciona classes customizadas ao body
 */
function colo_calor_body_classes( $classes ) {
    if ( is_page_template( 'page-landing.php' ) ) {
        $classes[] = 'landing-page';
    }
    return $classes;
}
add_filter( 'body_class', 'colo_calor_body_classes' );

/**
 * Helper function para obter link de CTA
 */
function colo_calor_get_cta_link() {
    $cta_link = get_theme_mod( 'cta_link', '#' );
    return esc_url( $cta_link );
}

/**
 * Helper function para obter número do WhatsApp
 */
function colo_calor_get_whatsapp() {
    $whatsapp = get_theme_mod( 'whatsapp_number', '5511972360065' );
    return 'https://wa.me/' . preg_replace('/[^0-9]/', '', $whatsapp);
}
?>
