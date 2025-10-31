<section class="faq-section section bg-gradient-2">
    <div class="container">
        <div class="max-w-4xl">
            <div class="text-center mb-16">
                <h2 style="margin-bottom: 1.5rem;">
                    Perguntas Frequentes
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--color-muted-foreground));">
                    Tire suas dúvidas sobre o método
                </p>
            </div>

            <div class="faq-accordion" style="display: flex; flex-direction: column; gap: 1rem;">
                <?php
                $faqs = array(
                    array(
                        'question' => 'Quando posso começar o curso?',
                        'answer' => 'Imediatamente. Mesmo durante a gestação, você já pode iniciar hoje mesmo.'
                    ),
                    array(
                        'question' => 'E se meu bebê já tiver nascido, ainda vale a pena fazer?',
                        'answer' => 'Sim! O Método Colo & Calor foi criado para ajudar em qualquer fase da amamentação — seja enfrentando dor, pega incorreta, baixa produção ou insegurança nas mamadas.'
                    ),
                    array(
                        'question' => 'Em quanto tempo verei resultados?',
                        'answer' => 'Os resultados podem aparecer logo nas primeiras aulas. As técnicas são práticas, diretas e já trouxeram alívio para muitas mães em poucos dias — algumas sentiram diferença já na primeira mamada.'
                    ),
                    array(
                        'question' => 'Por quanto tempo terei acesso?',
                        'answer' => 'Você terá acesso ao treinamento por 12 meses.'
                    )
                );

                foreach ($faqs as $index => $faq) :
                ?>
                <div class="faq-item" style="background: hsl(var(--color-card)); border-radius: var(--radius-2xl); padding: 0; box-shadow: var(--shadow-soft); border: 1px solid hsl(var(--color-border)); transition: var(--transition-smooth);">
                    <button class="faq-trigger" style="width: 100%; font-size: 1.125rem; font-weight: 600; color: hsl(var(--color-foreground)); cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 2rem; text-align: left; background: none; border: none;">
                        <span><?php echo esc_html($faq['question']); ?></span>
                        <i class="fas fa-chevron-down" style="color: hsl(var(--color-primary)); transition: transform 0.3s ease;"></i>
                    </button>
                    <div class="faq-content" style="overflow: hidden; max-height: 0; transition: max-height 0.3s ease;">
                        <div style="padding: 0 2rem 2rem; border-top: 1px solid hsl(var(--color-border));">
                            <p style="color: hsl(var(--color-muted-foreground)); line-height: 1.75; margin: 0; padding-top: 1rem;">
                                <?php echo esc_html($faq['answer']); ?>
                            </p>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<style>
.faq-item:hover {
    box-shadow: 0 20px 60px -10px hsl(var(--color-primary) / 0.2);
}

.faq-item.active .faq-trigger i {
    transform: rotate(180deg);
}

.faq-trigger:focus {
    outline: none;
}
</style>