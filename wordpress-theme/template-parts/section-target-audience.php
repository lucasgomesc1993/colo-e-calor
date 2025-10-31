<section class="target-audience-section section bg-gradient-1">
    <div class="container">
        <div class="max-w-5xl">
            <div class="text-center mb-16">
                <h2 style="margin-bottom: 1.5rem;">
                    Para quem é o Método Colo & Calor
                </h2>
            </div>

            <div class="grid grid-2" style="gap: 2rem;">
                <?php
                $audience = array(
                    array(
                        'icon' => 'fa-users',
                        'title' => 'Gestantes',
                        'description' => 'Que buscam um plano claro, objetivo e emocionalmente seguro para se prepararem para amamentar'
                    ),
                    array(
                        'icon' => 'fa-heart',
                        'title' => 'Mamães',
                        'description' => 'Que buscam técnicas aplicáveis para aprimorar a mamada, melhorar a pega e corrigir problemas'
                    ),
                    array(
                        'icon' => 'fa-exclamation-circle',
                        'title' => 'Quem enfrenta desafios',
                        'description' => 'Dores, fissuras, baixa produção ou insegurança'
                    ),
                    array(
                        'icon' => 'fa-magic',
                        'title' => 'Quem permite vivenciar',
                        'description' => 'Uma experiência positiva desde a primeira mamada'
                    )
                );

                foreach ($audience as $item) :
                ?>
                <div class="card">
                    <div class="icon-wrapper" style="width: 4rem; height: 4rem; background: hsl(var(--color-primary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                        <i class="fas <?php echo esc_attr($item['icon']); ?>" style="color: hsl(var(--color-primary)); font-size: 2rem;"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: hsl(var(--color-foreground));">
                        <?php echo esc_html($item['title']); ?>
                    </h3>
                    <p style="color: hsl(var(--color-muted-foreground)); line-height: 1.75; font-size: 1.125rem; margin: 0;">
                        <?php echo esc_html($item['description']); ?>
                    </p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
