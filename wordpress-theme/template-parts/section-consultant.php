<section class="consultant-section section bg-gradient-1">
    <div class="container">
        <div class="max-w-5xl">
            <div style="position: relative; overflow: hidden; background: hsl(var(--color-card)); border-radius: var(--radius-3xl); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid hsl(var(--color-border) / 0.5);">
                <div style="position: absolute; inset: 0; background: linear-gradient(to bottom right, hsl(var(--color-primary) / 0.05), transparent, hsl(var(--color-secondary) / 0.05));"></div>
                
                <div class="consultant-grid" style="position: relative; display: grid; grid-template-columns: 1fr; gap: 2rem; padding: 2rem; align-items: center;">
                    <div style="margin: 0 auto;">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/camila-toniatti.jpg" 
                             alt="Camila Toniatti - Consultora de Amamentação" 
                             style="width: 12rem; height: 12rem; border-radius: var(--radius-3xl); object-fit: cover; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border: 4px solid hsl(var(--color-background));">
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: inline-block;">
                            <span style="padding: 0.5rem 1rem; border-radius: 9999px; background: hsl(var(--color-primary) / 0.1); color: hsl(var(--color-primary)); font-size: 0.875rem; font-weight: 600;">
                                Consultora de Amamentação
                            </span>
                        </div>
                        
                        <p style="font-size: clamp(1.125rem, 2vw, 1.25rem); color: hsl(var(--color-foreground)); line-height: 1.75; margin: 0;">
                            Me chamo <span style="font-weight: 700; color: hsl(var(--color-primary));">Camila Toniatti</span> e após anos de aplicação deste Método na prática, ajudando mais de <span style="font-weight: 700; color: hsl(var(--color-primary));">600 mulheres</span> a salvar sua amamentação, estou convicta que este passo a passo também vai ajudar Você!!!
                        </p>

                        <div style="display: flex; flex-wrap: wrap; gap: 1rem; padding-top: 0.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: hsl(var(--color-primary));" class="animate-pulse"></div>
                                <span style="font-size: 0.875rem; color: hsl(var(--color-muted-foreground));">+600 mulheres atendidas</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: hsl(var(--color-primary));" class="animate-pulse"></div>
                                <span style="font-size: 0.875rem; color: hsl(var(--color-muted-foreground));">Anos de experiência</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
@media (min-width: 768px) {
    .consultant-grid {
        grid-template-columns: 300px 1fr !important;
        padding: 3rem !important;
    }
    
    .consultant-grid > div:first-child {
        margin: 0 !important;
    }
    
    .consultant-grid img {
        width: 16rem !important;
        height: 16rem !important;
    }
}
</style>
