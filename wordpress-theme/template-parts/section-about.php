<section class="about-section section bg-gradient-1">
    <div class="container">
        <div class="max-w-6xl">
            <div class="text-center mb-16">
                <h2 style="margin-bottom: 1.5rem;">
                    Conheça sua consultora
                </h2>
            </div>

            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;">
                <div style="position: relative; order: 2;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(to bottom right, hsl(var(--color-primary) / 0.2), hsl(var(--color-secondary) / 0.2)); border-radius: var(--radius-3xl); filter: blur(40px);"></div>
                    <div style="position: relative; aspect-ratio: 1/1; background: linear-gradient(to bottom right, hsl(var(--color-primary) / 0.1), hsl(var(--color-secondary) / 0.1)); border-radius: var(--radius-3xl); overflow: hidden;">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/camila-toniatti-2.jpg" 
                             alt="Camila Toniatti" 
                             style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>

                <div style="order: 1;">
                    <h3 style="font-size: 1.875rem; color: hsl(var(--color-primary)); font-weight: 700; margin-bottom: 1.5rem;">
                        Camila Toniatti
                    </h3>
                    <p style="font-size: 1.125rem; color: hsl(var(--color-muted-foreground)); font-weight: 600; margin-bottom: 1.5rem;">
                        Consultora de Amamentação
                    </p>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                        <p style="color: hsl(var(--color-foreground)); line-height: 1.75; margin: 0;">
                            Sou mãe de duas lindas meninas e passei por dificuldades na amamentação. Essa experiência me fez entender os desafios das mães e me motivou a me tornar consultora de amamentação em 2020. Desenvolvi os 8 passos para uma amamentação de sucesso, ajudando mães a amamentar sem dor e com confiança.
                        </p>
                        <p style="color: hsl(var(--color-foreground)); line-height: 1.75; margin: 0;">
                            Sou idealizadora do evento Bem Gestar, preparatório para gestantes em Mogi das Cruzes, já na 7ª edição. Também sou coautora do livro CONHE'SER VOCÊ, onde compartilho minha experiência na amamentação.
                        </p>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: hsl(var(--color-card)); border-radius: var(--radius-xl); border: 1px solid hsl(var(--color-border));">
                            <div style="width: 3rem; height: 3rem; background: hsl(var(--color-primary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <i class="fas fa-award" style="color: hsl(var(--color-primary)); font-size: 1.5rem;"></i>
                            </div>
                            <p style="color: hsl(var(--color-foreground)); font-weight: 500; margin: 0;">
                                Consultora de amamentação desde 2020
                            </p>
                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: hsl(var(--color-card)); border-radius: var(--radius-xl); border: 1px solid hsl(var(--color-border));">
                            <div style="width: 3rem; height: 3rem; background: hsl(var(--color-primary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <i class="fas fa-users" style="color: hsl(var(--color-primary)); font-size: 1.5rem;"></i>
                            </div>
                            <p style="color: hsl(var(--color-foreground)); font-weight: 500; margin: 0;">
                                Idealizadora do evento Bem Gestar
                            </p>
                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: hsl(var(--color-card)); border-radius: var(--radius-xl); border: 1px solid hsl(var(--color-border));">
                            <div style="width: 3rem; height: 3rem; background: hsl(var(--color-primary) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <i class="fas fa-book-open" style="color: hsl(var(--color-primary)); font-size: 1.5rem;"></i>
                            </div>
                            <p style="color: hsl(var(--color-foreground)); font-weight: 500; margin: 0;">
                                Coautora do livro CONHE'SER VOCÊ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
@media (min-width: 768px) {
    .about-section .max-w-6xl > div[style*='grid'] {
        grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .about-section .max-w-6xl > div[style*='grid'] > div:nth-child(1) {
        order: 1 !important;
    }
    
    .about-section .max-w-6xl > div[style*='grid'] > div:nth-child(2) {
        order: 2 !important;
    }
}
</style>
