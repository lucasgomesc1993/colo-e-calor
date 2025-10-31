<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <?php
        if ( has_custom_logo() ) {
            the_custom_logo();
        } else {
            ?>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-colo-calor.png" 
                     alt="Método Colo & Calor - 8 passos para uma amamentação de sucesso" 
                     class="site-logo">
            </a>
            <?php
        }
        ?>
    </div>
</header>
