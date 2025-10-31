<section class="method-section section bg-gradient-2">
    <div class="container">
        <div class="max-w-5xl">
            <div class="text-center mb-16">
                <h2 style="margin-bottom: 1.5rem;">
                    O que você vai encontrar dentro do Método Colo & Calor
                </h2>
            </div>

            <div class="grid grid-4 mb-12">
                <?php
                $modules = array(
                    array('number' => 'Módulo 1', 'title' => 'Antes de tudo: Amamentação começa na mente'),
                    array('number' => 'Módulo 2', 'title' => 'Ambiente: Preparando o ambiente e o enxoval para amamentar com leveza'),
                    array('number' => 'Módulo 3', 'title' => 'Golden Hour: O início que define tudo'),
                    array('number' => 'Módulo 4', 'title' => 'Mitos: Quebrando mitos que te impedem de amamentar com confiança'),
                    array('number' => 'Módulo 5', 'title' => 'A pega perfeita: Massagens, posições e técnicas de encaixe'),
                    array('number' => 'Módulo 6', 'title' => 'Acoplagem: O segredo que muda tudo'),
                    array('number' => 'Módulo 7', 'title' => 'Desacoplar: Desacoplando sem dor e corrigindo erros'),
                    array('number' => 'Módulo 8', 'title' => 'Pós-mamada: Cuidados após amamentar - Hora da soneca')
                );

                foreach ($modules as $module) :
                    // Separar o título em duas partes: antes e depois dos dois pontos
                    $title_parts = explode(':', $module['title'], 2);
                    $bold_part = $title_parts[0];
                    $normal_part = isset($title_parts[1]) ? ':' . $title_parts[1] : '';
                ?>
                <div class="card" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center;">
                    <div class="icon-wrapper" style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(var(--color-primary)), hsl(var(--color-secondary))); border-radius: var(--radius-2xl); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                        <i class="fas fa-book-open" style="color: white; font-size: 2rem;"></i>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <span style="display: inline-block; padding: 0.25rem 0.75rem; background: hsl(var(--color-primary) / 0.1); color: hsl(var(--color-primary)); font-size: 0.75rem; font-weight: 700; border-radius: 9999px;">
                            <?php echo esc_html($module['number']); ?>
                        </span>
                        <h3 style="color: hsl(var(--color-foreground)); font-size: 1rem; line-height: 1.4; margin: 0; font-weight: normal;">
                            <strong style="font-weight: 700;"><?php echo esc_html($bold_part); ?></strong><?php echo esc_html($normal_part); ?>
                        </h3>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div style="background: linear-gradient(to bottom right, hsl(var(--color-secondary) / 0.1), hsl(var(--color-primary) / 0.1)); border-radius: var(--radius-3xl); padding: 2rem; border: 2px solid hsl(var(--color-secondary) / 0.2);">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--color-foreground)); margin-bottom: 1.5rem; text-align: center;">
                    Vídeos Especiais
                </h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="card" style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: hsl(var(--color-secondary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-video" style="color: hsl(var(--color-secondary)); font-size: 1.5rem;"></i>
                        </div>
                        <p style="color: hsl(var(--color-foreground)); font-weight: normal; font-size: 1.125rem; margin: 0;">
                            Técnicas para aumentar sua produção
                        </p>
                    </div>

                    <div class="card" style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: hsl(var(--color-secondary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fas fa-video" style="color: hsl(var(--color-secondary)); font-size: 1.5rem;"></i>
                        </div>
                        <p style="color: hsl(var(--color-foreground)); font-weight: normal; font-size: 1.125rem; margin: 0;">
                            Como tratar fissuras mamárias em casa
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
