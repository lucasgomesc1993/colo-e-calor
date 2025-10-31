<section class="bonus-section section bg-gradient-2">
    <div class="container">
        <div class="max-w-5xl">
            <div class="text-center mb-16">
                <h2 style="margin-bottom: 1.5rem;">
                    Bônus Exclusivos
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--color-muted-foreground));">
                    Conteúdos extras para potencializar seus resultados
                </p>
            </div>

            <div class="grid grid-3 mb-12">
                <?php
                $bonuses = array(
                    array('icon' => 'fa-video', 'title' => 'Bônus 1 - Vídeo aula', 'description' => 'Como tratar fissuras mamarias em casa'),
                    array('icon' => 'fa-video', 'title' => 'Bônus 2 - Mini vídeo', 'description' => 'Como facilitar a introdução alimentar do seu bebê através da amamentação'),
                    array('icon' => 'fa-file-alt', 'title' => 'Bônus 3 - Técnicas', 'description' => 'para aumentar sua produção'),
                    array('icon' => 'fa-book-open', 'title' => 'Bônus 4 - Check list', 'description' => 'da mamada sem dor, para imprimir e deixar ao lado da poltrona'),
                    array('icon' => 'fa-video', 'title' => 'Bônus 5 - Vídeo aula', 'description' => 'Seu Bebê não ganha peso? Saiba identificar as possíveis causas'),
                    array('icon' => 'fa-heart', 'title' => 'Bônus 6 - Check list', 'description' => 'Conheça os 7 alimentos indispensáveis na sua dieta que irão turbinar seu leite')
                );

                foreach ($bonuses as $bonus) :
                ?>
                <div class="card">
                    <div class="icon-wrapper" style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(var(--color-primary)), hsl(var(--color-secondary))); border-radius: var(--radius-2xl); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                        <i class="fas <?php echo esc_attr($bonus['icon']); ?>" style="color: white; font-size: 2rem;"></i>
                    </div>
                    
                    <h3 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--color-foreground)); margin-bottom: 1rem;">
                        <?php echo esc_html($bonus['title']); ?>
                    </h3>
                    
                    <p style="color: hsl(var(--color-muted-foreground)); line-height: 1.75; margin: 0;">
                        <?php echo esc_html($bonus['description']); ?>
                    </p>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center">
                <a href="<?php echo colo_calor_get_cta_link(); ?>" class="btn" style="font-size: 1.125rem; padding: 1.5rem 2rem; display: inline-flex; align-items: center; justify-content: center;">
                    Quero todos os bônus!
                </a>
            </div>
        </div>
    </div>
</section>
