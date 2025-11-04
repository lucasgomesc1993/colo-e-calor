<section class="hero-section" style="position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; background: linear-gradient(to bottom right, hsl(var(--color-background)), hsl(var(--color-accent) / 0.2), hsl(var(--color-background)));">
    <div style="position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, hsl(var(--color-primary-glow) / 0.1), transparent 50%);"></div>
    
    <div class="container" style="position: relative; z-index: 10; padding: 3rem 1rem;">
        <div class="max-w-6xl" style="margin: 0 auto;">
            <div class="text-center animate-fade-in" style="margin-bottom: 3rem;">
                <h1 class="text-gradient" style="font-size: clamp(1.875rem, 5vw, 3rem); font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2;">
                    Pare de sofrer calada: descubra como amamentar sem dor e criar uma conexão poderosa com seu bebê desde o primeiro instante
                </h1>
                <p style="font-size: clamp(1rem, 2vw, 1.125rem); color: hsl(var(--color-muted-foreground)); max-width: 48rem; margin: 0 auto 2rem;">
                    Assista ao vídeo e descubra os 8 passos para uma amamentação de sucesso.
                </p>
            </div>

            <div style="position: relative; max-width: 56rem; margin: 0 auto 3rem;">
                <div style="position: absolute; inset: 0; background: linear-gradient(to right, hsl(var(--color-primary)), hsl(var(--color-secondary))); border-radius: 2rem; filter: blur(40px); opacity: 0.3; transition: opacity 0.5s;"></div>
                <div style="position: relative; aspect-ratio: 16/9; background: hsl(var(--color-card)); border-radius: 2rem; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid hsl(var(--color-border));">
                    <iframe
                        style="width: 100%; height: 100%;"
                        src="<?php echo esc_url( get_theme_mod( 'hero_video_url', 'https://www.youtube.com/embed/lrTpcHoqdLg' ) ); ?>"
                        title="Vídeo de Apresentação"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <div class="text-center">
                <a href="<?php echo colo_calor_get_cta_link(); ?>" class="btn btn-hero" style="display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(to right, hsl(var(--color-primary)), hsl(var(--color-secondary)));">
                    Quero começar agora!
                </a>
            </div>
        </div>
    </div>
</section>
