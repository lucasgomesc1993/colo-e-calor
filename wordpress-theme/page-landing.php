<?php
/**
 * Template Name: Landing Page
 * Template Post Type: page
 * Description: Template para a landing page do Método Colo & Calor
 *
 * @package Colo_Calor
 */

get_header();
?>

<main class="landing-page-content" style="padding-top: 5rem;">
    <?php
    // Hero Section
    include( get_template_directory() . '/template-parts/section-hero.php' );
    
    // Testimonials Section
    include( get_template_directory() . '/template-parts/section-testimonials.php' );
    
    // Offer Section
    include( get_template_directory() . '/template-parts/section-offer.php' );
    
    // Pain Points Section
    include( get_template_directory() . '/template-parts/section-pain-points.php' );
    
    // Consultant Section
    include( get_template_directory() . '/template-parts/section-consultant.php' );
    
    // Method Section
    include( get_template_directory() . '/template-parts/section-method.php' );
    
    // Bonus Section
    include( get_template_directory() . '/template-parts/section-bonus.php' );
    
    // Success Story Section
    include( get_template_directory() . '/template-parts/section-success-story.php' );
    
    // Target Audience Section
    include( get_template_directory() . '/template-parts/section-target-audience.php' );
    
    // Pricing Section
    include( get_template_directory() . '/template-parts/section-pricing.php' );
    
    // Guarantee Section
    include( get_template_directory() . '/template-parts/section-guarantee.php' );
    
    // About Section
    include( get_template_directory() . '/template-parts/section-about.php' );
    
    // FAQ Section
    include( get_template_directory() . '/template-parts/section-faq.php' );
    
    // Final CTA Section
    include( get_template_directory() . '/template-parts/section-final-cta.php' );
    ?>
</main>

<?php get_footer(); ?>
