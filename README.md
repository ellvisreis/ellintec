# Site institucional ELLINTEC

Site estático da **ELLINTEC** — a empresa — com o portfólio de produtos.

> A ELLINTEC é a casa de software. **Gestão e Treinamento NRs** é o primeiro
> produto dela, e tem repositório próprio.

## Estrutura

```
index.html                              página principal
produtos/gestao-treinamento-nrs.html    página do primeiro produto
css/estilo.css                          estilo (sem framework)
js/site.js                              menu do celular e ano do rodapé
img/logo.svg                            marca — provisória, ver abaixo
```

Sem build, sem dependência, sem framework. Abrir o `index.html` no navegador já
funciona.

## Rodar localmente

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Publicar de graça no GitHub Pages

1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: `main`, pasta `/ (root)` → Save

Fica em `https://ellvisreis.github.io/ellintec/` em poucos minutos, com HTTPS.

### Domínio próprio

Depois de registrar o `ellintec.com.br`:

1. Crie o arquivo `CNAME` na raiz com uma linha: `ellintec.com.br`
2. No registro.br, aponte para os IPs do GitHub Pages
3. Settings → Pages → Custom domain → marque **Enforce HTTPS**

## Pendências antes de publicar

Estão marcadas com `TODO` no `index.html`:

- [ ] **E-mail de contato** — hoje `contato@ellintec.com.br`, que ainda não existe
- [ ] **WhatsApp** — hoje um número fictício
- [ ] **CNPJ** no rodapé, quando a empresa estiver constituída
- [ ] **Logo definitiva** — a atual é a proposta B (monograma), ainda não escolhida
- [ ] Endereço, se quiser exibir

## Decisões de conteúdo

O texto evita número inventado: não há "X anos de mercado" nem "Y clientes
atendidos", porque não seria verdade hoje e é o tipo de coisa que desgasta a
marca quando alguém pergunta.

A imagem do produto é uma **representação da interface**, desenhada em HTML, e
não uma captura de tela real — captura mostraria nome e CPF de aluno.
