# Tema WordPress - Colo e Calor

Tema personalizado para o Método Colo & Calor - Landing page de amamentação desenvolvido para replicar fielmente o design e funcionalidade da landing page original.

## 📋 Índice

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Personalização](#personalização)
- [Suporte](#suporte)

## ✨ Características

- ✅ **Design Fiel**: Replicação exata da landing page original
- 🎨 **Sistema de Cores HSL**: Paleta de cores customizável
- 📱 **Totalmente Responsivo**: Mobile-first design
- ⚡ **Performance Otimizada**: Código limpo e otimizado
- 🎯 **SEO Friendly**: Estrutura semântica HTML5
- 🔧 **WordPress Customizer**: Configurações fáceis no painel
- 🎬 **Suporte a Vídeos**: YouTube embeds otimizados
- 💬 **FAQ Accordion**: Perguntas frequentes interativas
- 🛡️ **Seguro**: Código sanitizado e validado

## 📦 Requisitos

- WordPress 5.0 ou superior
- PHP 7.4 ou superior
- MySQL 5.6 ou superior

## 🚀 Instalação

### Método 1: Upload via WordPress

1. Faça o download do tema
2. Acesse **Aparência → Temas** no painel do WordPress
3. Clique em **Adicionar novo → Enviar tema**
4. Selecione o arquivo ZIP do tema
5. Clique em **Instalar agora**
6. Ative o tema

### Método 2: Upload via FTP

1. Faça o upload da pasta `wordpress-theme` para `/wp-content/themes/`
2. Renomeie a pasta para `colo-calor`
3. Acesse **Aparência → Temas** no WordPress
4. Ative o tema "Colo e Calor"

## ⚙️ Configuração

### 1. Upload de Imagens

Copie as seguintes imagens para a pasta `assets/images/`:

- `logo-colo-calor.png` - Logo do método
- `camila-toniatti.jpg` - Foto da consultora (seção consultora)
- `camila-toniatti-2.jpg` - Foto da consultora (seção sobre)
- `low-production.jpg` - Imagem de baixa produção
- `long-feeding.jpg` - Imagem de bebê mamando
- `breastfeeding-pain.jpg` - Imagem de dor na amamentação

### 2. Configurar Logo

1. Acesse **Aparência → Personalizar → Identidade do site**
2. Faça upload do logo em **Logo do site**
3. Ajuste o tamanho conforme necessário

### 3. Criar Página Landing

1. Acesse **Páginas → Adicionar nova**
2. Dê um nome (ex: "Home" ou "Landing Page")
3. No painel direito, selecione o template **Landing Page**
4. Publique a página
5. Em **Configurações → Leitura**, defina esta página como página inicial

### 4. Configurar Customizador

Acesse **Aparência → Personalizar → Configurações Gerais**:

- **Número do WhatsApp**: Seu número com código do país (ex: 5511972360065)
- **URL do Vídeo Hero**: Link do YouTube embed (ex: https://www.youtube.com/embed/lrTpcHoqdLg)
- **URL do Vídeo de Depoimento**: Link do YouTube embed para depoimento
- **Link de Compra (CTA)**: URL para a página de checkout/compra
- **Instagram URL**: Link do Instagram
- **YouTube URL**: Link do canal no YouTube
- **Email de Contato**: Email para contato

## 📁 Estrutura de Arquivos

```
wordpress-theme/
├── style.css                    # Estilos principais e informações do tema
├── functions.php                # Funções e configurações do tema
├── header.php                   # Cabeçalho do site
├── footer.php                   # Rodapé do site
├── index.php                    # Template padrão
├── page-landing.php             # Template da landing page
├── README.md                    # Documentação
├── assets/
│   ├── js/
│   │   └── main.js             # JavaScript principal
│   └── images/                  # Pasta para imagens
└── template-parts/              # Seções da landing page
    ├── section-hero.php
    ├── section-testimonials.php
    ├── section-offer.php
    ├── section-pain-points.php
    ├── section-consultant.php
    ├── section-method.php
    ├── section-bonus.php
    ├── section-success-story.php
    ├── section-target-audience.php
    ├── section-pricing.php
    ├── section-guarantee.php
    ├── section-about.php
    ├── section-faq.php
    └── section-final-cta.php
```

## 🎨 Personalização

### Paleta de Cores

As cores estão definidas em variáveis CSS no arquivo `style.css`:

```css
:root {
  --color-primary: 340 75% 55%;        /* Rosa vibrante */
  --color-primary-glow: 340 85% 65%;   /* Rosa brilhante */
  --color-secondary: 270 50% 70%;      /* Roxo suave */
  --color-background: 30 40% 98%;      /* Bege claro */
  --color-accent: 270 60% 92%;         /* Lavanda */
}
```

### Editar Conteúdo

O conteúdo está organizado em seções individuais dentro da pasta `template-parts/`. Cada arquivo representa uma seção da landing page:

- **Hero**: Vídeo de apresentação e CTA principal
- **Testimonials**: Depoimentos de clientes
- **Offer**: O que está incluído no método
- **Pain Points**: Problemas que o método resolve
- **Consultant**: Apresentação da consultora
- **Method**: Módulos do método
- **Bonus**: Bônus exclusivos
- **Success Story**: Depoimento em vídeo
- **Target Audience**: Para quem é o método
- **Pricing**: Preços e oferta
- **Guarantee**: Garantia de 7 dias
- **About**: Sobre a consultora
- **FAQ**: Perguntas frequentes
- **Final CTA**: Chamada final para ação

## 🔌 Plugins Recomendados

Para funcionalidade completa, considere instalar:

- **Contact Form 7**: Formulários de contato
- **Yoast SEO**: Otimização para mecanismos de busca
- **WP Rocket**: Cache e otimização de performance
- **UpdraftPlus**: Backup do site
- **Wordfence Security**: Segurança

## 📱 Responsividade

O tema é totalmente responsivo e foi testado em:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1919px)
- ✅ Tablet (768px - 1365px)
- ✅ Mobile (320px - 767px)

## 🎯 Otimizações de Performance

- Código minificado
- Lazy loading de imagens e vídeos
- CSS otimizado
- JavaScript modular
- Fontes do sistema (sem web fonts externas)

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o tema:

- Email: metodocoloecalor@gmail.com
- WhatsApp: +55 11 97236-0065
- Instagram: @coloecalorconsultoria

## 📄 Licença

Este tema é licenciado sob GNU General Public License v2 ou posterior.

## 🔄 Atualizações

**Versão 1.0.0** - Lançamento inicial
- Replicação completa da landing page
- 16 seções funcionais
- Sistema de customização integrado
- Otimização de performance
- Design 100% responsivo

---

Desenvolvido com ❤️ para o Método Colo & Calor
