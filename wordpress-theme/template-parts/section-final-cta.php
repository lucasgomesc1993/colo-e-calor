<section class="final-cta-section section" style="background: linear-gradient(to bottom right, hsl(var(--color-primary) / 0.2), hsl(var(--color-background)), hsl(var(--color-secondary) / 0.2)); position: relative; overflow: hidden;">
    <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, hsl(var(--color-primary-glow) / 0.15), transparent 70%);"></div>
    
    <div class="container" style="position: relative; z-index: 10;">
        <div class="max-w-4xl">
            <div class="text-center mb-12">
                <h2 class="text-gradient" style="font-size: clamp(2rem, 5vw, 3.75rem); margin-bottom: 1.5rem; line-height: 1.2;">
                    Chegou sua hora de amamentar sem dor e com confiança!
                </h2>
                <p style="font-size: 1.5rem; color: hsl(var(--color-muted-foreground)); margin-bottom: 2rem;">
                    Junte-se a mais de 600 mães que transformaram a experiência da amamentação
                </p>
            </div>

            <div style="background: hsl(var(--color-card)); border-radius: var(--radius-3xl); padding: 3rem; box-shadow: var(--shadow-soft); border: 2px solid hsl(var(--color-primary) / 0.2);">
                <div class="text-center mb-8">
                    <div style="font-size: 3.75rem; font-weight: 700; color: hsl(var(--color-primary)); margin-bottom: 0.5rem;">R$ 497,00</div>
                    <p style="font-size: 1.5rem; color: hsl(var(--color-foreground)); font-weight: 600; margin-bottom: 1.5rem;">ou 12x de R$ 52,93</p>
                    
                    <div class="cta-benefits" style="display: flex; flex-direction: column; gap: 1rem; align-items: center; margin-bottom: 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-check-circle" style="color: hsl(var(--color-primary)); font-size: 1.25rem;"></i>
                            <span style="color: hsl(var(--color-foreground)); font-weight: 500;">Acesso imediato</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-check-circle" style="color: hsl(var(--color-primary)); font-size: 1.25rem;"></i>
                            <span style="color: hsl(var(--color-foreground)); font-weight: 500;">Garantia de 7 dias</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-check-circle" style="color: hsl(var(--color-primary)); font-size: 1.25rem;"></i>
                            <span style="color: hsl(var(--color-foreground)); font-weight: 500;">Suporte completo</span>
                        </div>
                    </div>
                </div>

                <a href="<?php echo colo_calor_get_cta_link(); ?>" class="btn btn-large btn-full" style="background: linear-gradient(to right, hsl(var(--color-primary)), hsl(var(--color-secondary)));">
                    Sim! Eu quero amamentar sem dor e sem complemento!
                </a>
            </div>
        </div>
    </div>
</section>

<style>
@media (min-width: 640px) {
    .cta-benefits {
        flex-direction: row !important;
        justify-content: center;
    }
}
</style>
