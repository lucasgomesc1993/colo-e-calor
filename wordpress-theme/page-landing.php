<?php
/*
Template Name: Landing Page
*/
?>
<?php get_header(); ?>

<main class="landing-page-content">
    <?php
    // Array com a ordem das seções
    $sections = array(
        'hero',
        'testimonials',
        'offer',
        'pain-points',
        'consultant',
        'method',
        'bonus',
        'success-story',
        'target-audience',
        'pricing',
        'guarantee',
        'about',
        'faq',
        'final-cta'
    );

    // Incluir cada seção na ordem especificada
    foreach ($sections as $section) {
        get_template_part('template-parts/section', $section);
    }
    ?>
</main>

<?php get_footer(); ?>
