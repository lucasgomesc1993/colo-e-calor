<section class="method-section section bg-gradient-2">
    <div class="container">
        <div class="max-w-5xl">
            <div class="text-center mb-16">
                <h2 style="margin-bottom: 1.5rem;">
                    O que você vai encontrar dentro do Método Colo & Calor
                </h2>
            </div>

            <?php
            $modules = array(
                array('number' => 'Módulo 1', 'title' => 'Antes de tudo: a amamentação começa na sua mente', 'icon' => 'fas fa-brain'),
                array('number' => 'Módulo 2', 'title' => 'Preparando o ambiente e o enxoval para amamentar com leveza', 'icon' => 'fas fa-home'),
                array('number' => 'Módulo 3', 'title' => 'Golden Hour: iniciação a amamentação e cuidados práticos', 'icon' => 'fas fa-baby'),
                array('number' => 'Módulo 4', 'title' => 'Quebrando os mitos que te impedem de amamentar com confiança', 'icon' => 'fas fa-ban'),
                array('number' => 'Módulo 5', 'title' => 'A pega perfeita começa com o preparo da mama e o posicionamento certo', 'icon' => 'fas fa-hands-helping'),
                array('number' => 'Módulo 6', 'title' => 'Lapidando a mamada', 'icon' => 'fas fa-sync'),
                array('number' => 'Módulo 7', 'title' => 'Finalizando a mamada: desacoplando o bebê e corrigindo problemas', 'icon' => 'fas fa-check-circle'),
                array('number' => 'Módulo 8', 'title' => 'Pós mamada: hora da soneca', 'icon' => 'fas fa-moon')
            );
            ?>

            <div class="grid grid-4" style="gap: 1.5rem;">
                <?php foreach ($modules as $module): ?>
                <div class="module-card" style="text-align: center;">
                    <div class="icon-wrapper">
                        <i class="<?php echo esc_attr($module['icon']); ?>" style="color: white; font-size: 2rem;"></i>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <span class="number-tag">
                            <?php echo esc_html($module['number']); ?>
                        </span>
                        <h3 style="margin: 0; line-height: 1.4; font-weight: normal;">
                            <?php echo esc_html($module['title']); ?>
                        </h3>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div style="margin-bottom: 3rem;"></div>

            <div style="background: linear-gradient(to bottom right, hsl(var(--color-secondary) / 0.1), hsl(var(--color-primary) / 0.1)); border-radius: var(--radius-3xl); padding: 2rem; border: 2px solid hsl(var(--color-secondary) / 0.2);">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--color-foreground)); margin-bottom: 1.5rem; text-align: center; margin-top: 0;">
                    Vídeos Especiais
                </h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: hsl(var(--color-secondary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-video" style="color: hsl(var(--color-secondary)); font-size: 1.5rem;"></i>
                        </div>
                        <p style="color: hsl(var(--color-foreground)); font-weight: normal; font-size: 1.125rem; margin: 0; line-height: 1.6;">
                            Amamentação de gêmeos
                        </p>
                    </div>

                    <div class="card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: hsl(var(--color-secondary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-video" style="color: hsl(var(--color-secondary)); font-size: 1.5rem;"></i>
                        </div>
                        <p style="color: hsl(var(--color-foreground)); font-weight: normal; font-size: 1.125rem; margin: 0; line-height: 1.6;">
                            Salto desenvolvimento 1º mês x volume de leite
                        </p>
                    </div>

                    <div class="card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: hsl(var(--color-secondary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-video" style="color: hsl(var(--color-secondary)); font-size: 1.5rem;"></i>
                        </div>
                        <p style="color: hsl(var(--color-foreground)); font-weight: normal; font-size: 1.125rem; margin: 0; line-height: 1.6;">
                            Amamentação x prótese mamária e/ou redução de mama
                        </p>
                    </div>

                    <div class="card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: hsl(var(--color-secondary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-video" style="color: hsl(var(--color-secondary)); font-size: 1.5rem;"></i>
                        </div>
                        <p style="color: hsl(var(--color-foreground)); font-weight: normal; font-size: 1.125rem; margin: 0; line-height: 1.6;">
                            Causas das dores nas mamadas que não cessam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.method-section .card:hover > div:first-child {
    transform: scale(1.1);
}
</style>
