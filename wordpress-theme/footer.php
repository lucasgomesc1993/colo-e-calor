<footer class="site-footer bg-gradient-1" style="padding: 3rem 0; border-top: 1px solid hsl(var(--color-border));">
    <div class="container text-center">
        <div class="mb-6">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <?php
                if ( has_custom_logo() ) {
                    the_custom_logo();
                } else {
                    ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-colo-calor.png" 
                         alt="Método Colo & Calor" 
                         style="height: 4rem; width: auto;">
                    <?php
                }
                ?>
            </div>
            <p style="color: hsl(var(--color-muted-foreground));">
                Transformando a experiência da amamentação com conhecimento, suporte e carinho.
            </p>
        </div>

        <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 1.5rem;">
            <a href="<?php echo esc_url( get_theme_mod( 'instagram_url', 'https://www.instagram.com/coloecalorconsultoria' ) ); ?>" 
               target="_blank" 
               rel="noopener noreferrer"
               class="social-link"
               aria-label="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="<?php echo esc_url( get_theme_mod( 'youtube_url', 'https://www.youtube.com/@coloecalorconsultoria' ) ); ?>" 
               target="_blank" 
               rel="noopener noreferrer"
               class="social-link"
               aria-label="YouTube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="mailto:<?php echo esc_attr( get_theme_mod( 'email_contact', 'metodocoloecalor@gmail.com' ) ); ?>"
               class="social-link"
               aria-label="Email">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="<?php echo colo_calor_get_whatsapp(); ?>" 
               target="_blank" 
               rel="noopener noreferrer"
               class="social-link"
               aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>

        <div style="border-top: 1px solid hsl(var(--color-border)); padding-top: 1.5rem;">
            <p style="color: hsl(var(--color-muted-foreground));">
                © <?php echo date('Y'); ?> Método Colo & Calor. Todos os direitos reservados.
            </p>
        </div>
    </div>
</footer>

<style>
.social-link {
    width: 3rem;
    height: 3rem;
    background: hsl(var(--color-primary) / 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(var(--color-primary));
    transition: var(--transition-smooth);
    font-size: 1.25rem;
}

.social-link:hover {
    background: hsl(var(--color-primary));
    color: white;
}
</style>

<?php wp_footer(); ?>
</body>
</html>
