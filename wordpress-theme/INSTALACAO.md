# 📦 Guia de Instalação - Tema Colo e Calor

## Passo a Passo Completo

### 1️⃣ Preparação dos Arquivos

1. **Copie as imagens** da pasta `src/assets/` para `wordpress-theme/assets/images/`:
   - `logo-colo-calor.png`
   - `camila-toniatti.jpg`
   - `camila-toniatti-2.jpg`
   - `low-production.jpg`
   - `long-feeding.jpg`
   - `breastfeeding-pain.jpg`

2. **Comprima a pasta** `wordpress-theme` em um arquivo ZIP:
   - Selecione a pasta `wordpress-theme`
   - Clique com botão direito → "Enviar para" → "Pasta compactada"
   - Ou use: `zip -r colo-calor.zip wordpress-theme/`

### 2️⃣ Upload para WordPress

#### Opção A: Via Painel Admin (Recomendado)

1. Acesse seu site WordPress
2. Vá em **Aparência → Temas**
3. Clique em **Adicionar novo**
4. Clique em **Enviar tema**
5. Clique em **Escolher arquivo** e selecione o ZIP
6. Clique em **Instalar agora**
7. Após instalação, clique em **Ativar**

#### Opção B: Via FTP

1. Conecte-se ao seu servidor via FTP (FileZilla, WinSCP, etc.)
2. Navegue até `/wp-content/themes/`
3. Faça upload da pasta `wordpress-theme`
4. Renomeie para `colo-calor`
5. No WordPress, vá em **Aparência → Temas**
6. Ative o tema "Colo e Calor"

### 3️⃣ Criar e Configurar a Landing Page

1. **Criar Nova Página**:
   - Vá em **Páginas → Adicionar nova**
   - Título: "Home" ou "Landing Page"
   - No painel direito, em "Atributos de página"
   - Selecione o modelo: **Landing Page**
   - Clique em **Publicar**

2. **Definir como Página Inicial**:
   - Vá em **Configurações → Leitura**
   - Marque "Uma página estática"
   - Selecione a página criada em "Página inicial"
   - Clique em **Salvar alterações**

### 4️⃣ Configurar o Customizador

Vá em **Aparência → Personalizar → Configurações Gerais**:

#### Logo do Site
- **Aparência → Personalizar → Identidade do site**
- Faça upload do logo `logo-colo-calor.png`

#### Configurações Gerais

**WhatsApp**:
```
5511972360065
```

**URL do Vídeo Hero**:
```
https://www.youtube.com/embed/lrTpcHoqdLg
```

**URL do Vídeo de Depoimento**:
```
https://www.youtube.com/embed/CLEub2Z__0s
```

**Link de Compra (CTA)**:
```
https://seu-link-de-checkout.com
```
*Substitua pelo link real da sua página de checkout/compra*

**Instagram URL**:
```
https://www.instagram.com/coloecalorconsultoria
```

**YouTube URL**:
```
https://www.youtube.com/@coloecalorconsultoria
```

**Email de Contato**:
```
metodocoloecalor@gmail.com
```

Clique em **Publicar** para salvar todas as alterações.

### 5️⃣ Verificar Permalinks

1. Vá em **Configurações → Links permanentes**
2. Selecione **Nome do post**
3. Clique em **Salvar alterações**

### 6️⃣ Plugins Recomendados (Opcional)

Instale estes plugins para funcionalidade adicional:

1. **Yoast SEO** - Otimização para mecanismos de busca
2. **WP Rocket** ou **W3 Total Cache** - Performance e cache
3. **Contact Form 7** - Formulários de contato
4. **UpdraftPlus** - Backup automático
5. **Wordfence Security** - Segurança

### 7️⃣ Otimizações Finais

#### Cache
1. Se usar WP Rocket:
   - Ative "Minify CSS files"
   - Ative "Minify JavaScript files"
   - Ative "LazyLoad for images"

#### SEO Básico
1. Vá em **Yoast SEO → Geral**
2. Configure título e descrição do site
3. Adicione metadados nas páginas

#### Performance
1. Otimize imagens (use TinyPNG ou similar antes de fazer upload)
2. Use formato WebP para imagens quando possível
3. Ative compressão GZIP no servidor

### 8️⃣ Teste Final

Acesse seu site e verifique:

- ✅ Logo aparece corretamente
- ✅ Vídeo do Hero carrega
- ✅ Todas as seções estão visíveis
- ✅ Botões CTAs funcionam
- ✅ Links de redes sociais funcionam
- ✅ FAQ expande/contrai corretamente
- ✅ Responsividade no mobile

### 📱 Teste de Responsividade

Teste em diferentes dispositivos:

1. **Desktop**: Navegador normal
2. **Tablet**: F12 → Modo responsivo → iPad
3. **Mobile**: F12 → Modo responsivo → iPhone

Ou use ferramentas online:
- https://www.responsinator.com/
- https://www.browserstack.com/

## 🔧 Solução de Problemas

### Imagens não aparecem
- Verifique se as imagens foram copiadas para `/assets/images/`
- Verifique permissões de arquivos (644 para arquivos, 755 para pastas)

### Vídeos não carregam
- Verifique se as URLs estão no formato embed: `/embed/VIDEO_ID`
- Teste diretamente no navegador

### Estilo não aplica
- Limpe o cache do navegador (Ctrl + F5)
- Limpe o cache do WordPress
- Verifique se o arquivo `style.css` foi carregado corretamente

### Página em branco
- Ative o modo debug: Adicione em `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```
- Verifique logs em `/wp-content/debug.log`

## 📞 Suporte

Se tiver problemas durante a instalação:

- Email: metodocoloecalor@gmail.com
- WhatsApp: +55 11 97236-0065

## ✅ Checklist de Instalação

- [ ] Tema instalado e ativado
- [ ] Imagens copiadas para assets/images/
- [ ] Logo configurado
- [ ] Página landing criada
- [ ] Página definida como inicial
- [ ] Customizador configurado (WhatsApp, vídeos, CTA)
- [ ] Redes sociais configuradas
- [ ] Permalinks configurados
- [ ] Plugins instalados (opcional)
- [ ] Site testado em desktop
- [ ] Site testado em mobile
- [ ] CTAs testados
- [ ] Vídeos testados

---

🎉 **Parabéns!** Seu tema está instalado e pronto para uso!
