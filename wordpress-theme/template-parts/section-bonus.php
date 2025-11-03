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
                    array('icon' => 'fa-file-alt', 'title' => 'Bônus #1', 'description' => 'Checklist para mamada sem dor (para imprimir e deixar do lado da poltrona)'),
                    array('icon' => 'fa-video', 'title' => 'Bônus #2', 'description' => 'Mini vídeo: "o que fazer se o bebê rejeitar o peito nas primeiras mamadas"'),
                    array('icon' => 'fa-book-open', 'title' => 'Bônus #3', 'description' => 'Ebook: 7 alimentos para turbinar sua produção'),
                    array('icon' => 'fa-video', 'title' => 'Bônus #4', 'description' => 'Mini vídeo: como a introdução alimentar pode ser influenciada pela amamentação'),
                    array('icon' => 'fa-book-open', 'title' => 'Bônus #5', 'description' => 'Ebook: tratando fissuras em casa')
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
