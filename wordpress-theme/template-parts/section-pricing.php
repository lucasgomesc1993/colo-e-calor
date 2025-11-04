<section class="pricing-section section" style="background: linear-gradient(to bottom right, hsl(var(--color-primary) / 0.1), hsl(var(--color-background)), hsl(var(--color-secondary) / 0.1)); position: relative; overflow: hidden; padding: 6rem 0;">
    <div style="position: absolute; inset: 0; background: radial-gradient(circle at 70% 30%, hsl(var(--color-secondary) / 0.1), transparent 60%);"></div>
    
    <div class="container" style="position: relative; z-index: 10;">
        <div class="max-w-4xl">
            <div class="text-center mb-16">
                <h2 style="font-size: clamp(2.25rem, 4vw, 3rem); font-weight: 700; margin-bottom: 1.5rem; color: hsl(var(--color-foreground));">
                    Veja tudo que você vai levar:
                </h2>
            </div>

            <div style="background: hsl(var(--color-card)); border-radius: 2rem; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 2px solid hsl(var(--color-primary) / 0.2);">
                <?php
                $items = array(
                    array('name' => 'Método Colo & Calor', 'value' => 'R$ 597,00'),
                    array('name' => 'o que fazer se seu bebê rejeitar o peito nas primeiras mamadas', 'value' => 'R$ 198,00'),
                    array('name' => 'Tratando fissuras em casa', 'value' => 'R$ 57,00'),
                    array('name' => 'Facilitando introdução alimentar durante a amamentação', 'value' => 'R$ 27,00'),
                    array('name' => 'Check List 7 Alimentos essenciais', 'value' => 'R$ 9,00'),
                    array('name' => 'Check List Mamada sem dor', 'value' => 'R$ 9,00')
                );
                ?>

                <div style="margin-bottom: 2rem;">
                    <?php foreach ($items as $index => $item) : ?>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid hsl(var(--color-border)); <?php echo $index === count($items) - 1 ? 'border-bottom: none; margin-bottom: 0;' : ''; ?>">
                        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                            <i class="fas fa-check-circle" style="color: hsl(var(--color-primary)); font-size: 1.25rem; flex-shrink: 0; margin-top: 0.25rem;"></i>
                            <p style="color: hsl(var(--color-foreground)); font-weight: 500; margin: 0; line-height: 1.5; font-size: 1rem;">
                                <?php echo esc_html($item['name']); ?>
                            </p>
                        </div>
                        <p style="color: hsl(var(--color-muted-foreground)); font-weight: 600; white-space: nowrap; margin: 0; line-height: 1.5; font-size: 1rem;">
                            <?php echo esc_html($item['value']); ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>

                <div style="border-top: 2px solid hsl(var(--color-primary) / 0.2); padding-top: 1rem; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--color-foreground));">Valor Total:</span>
                        <span style="font-size: 1.875rem; font-weight: 700; color: hsl(var(--color-muted-foreground)); text-decoration: line-through;">R$ 897,00</span>
                    </div>
                </div>

                <div style="background: hsl(var(--color-accent) / 0.3); border-radius: 1rem; padding: 1rem; margin-bottom: 2rem;">
                    <p style="color: hsl(var(--color-foreground)); line-height: 1.625; text-align: center; margin: 0; font-size: 1rem;">
                        Esse seria o valor total de cada produto vendido separadamente, e que facilmente poderia custar muito mais, visto que é o <strong style="color: hsl(var(--color-primary)); font-weight: 700;">MÉTODO</strong> que vai garantir uma experiência perfeita para você e seu bebê.
                    </p>
                </div>

                <div class="text-center mb-8">
                    <div style="display: inline-block; background: hsl(var(--color-secondary) / 0.2); color: hsl(var(--color-secondary)); padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 700; font-size: 1.125rem; margin-bottom: 1.5rem;">
                        🔥 Oferta Especial
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <div style="font-size: 3rem; font-weight: 700; color: hsl(var(--color-primary)); margin-bottom: 0.5rem;">R$ 497,00</div>
                        <p style="font-size: 1.5rem; color: hsl(var(--color-foreground)); font-weight: 600; margin: 0;">ou 12x de R$ 52,93</p>
                    </div>
                </div>

                <a href="<?php echo colo_calor_get_cta_link(); ?>" class="btn btn-large btn-full" style="font-size: clamp(1rem, 2vw, 1.125rem); padding: 1.5rem clamp(1.5rem, 4vw, 2rem); display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(to right, hsl(var(--color-primary)), hsl(var(--color-secondary))); border-radius: 9999px; font-weight: 700; width: 100%;">
                    Sim! Eu quero amamentar sem dor e sem complemento!
                </a>

                <p class="text-center" style="color: hsl(var(--color-muted-foreground)); font-size: 0.875rem; margin-top: 1.5rem;">
                    🔒 Pagamento 100% seguro | Ambiente protegido
                </p>
            </div>
        </div>
    </div>
</section>
