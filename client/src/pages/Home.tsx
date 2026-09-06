import { useState } from "react";
import { ArrowDown, ArrowUpRight, Camera, Check, Heart, Menu, Sparkles, X } from "lucide-react";

const experiences = [
  {
    number: "01",
    verb: "FAZER",
    title: "Mãos & matéria",
    text: "Cerâmica fria, pintura, bordado, colagem e criação de jóias com afeto.",
    note: "criar sem pressa.",
    image: "./assets/images/photo-01.jpeg",
    tapeRotate: "-8deg",
  },
  {
    number: "02",
    verb: "RESPIRAR",
    title: "Corpo & silêncio",
    text: "Yoga, meditação, silent concert e práticas que ativam os sentidos reais.",
    note: "o corpo sabe.",
    image: "./assets/images/photo-02.jpeg",
    tapeRotate: "6deg",
  },
  {
    number: "03",
    verb: "DEGUSTAR",
    title: "Sabores & aromas",
    text: "Chás aromáticos, degustações botânicas, perfumes florais e velas.",
    note: "sentir com tudo.",
    image: "./assets/images/photo-03.jpeg",
    tapeRotate: "-5deg",
  },
  {
    number: "04",
    verb: "COMPARTILHAR",
    title: "Cultura & brincadeira",
    text: "Clubes de livros e discos, jogos manuais, conversas e boas risadas.",
    note: "boa companhia conta.",
    image: "./assets/images/photo-04.jpeg",
    tapeRotate: "7deg",
  },
];

const galleryMural = [
  { src: "./assets/images/photo-05.jpeg", caption: "Processo criativo ✦", rotate: "-2deg" },
  { src: "./assets/images/photo-06.jpeg", caption: "Cuidado e conexão ✦", rotate: "3deg" },
  { src: "./assets/images/photo-07.jpeg", caption: "Presença e afeto ✦", rotate: "-3.5deg" },
  { src: "./assets/images/photo-08.jpeg", caption: "Detalhes manuais ✦", rotate: "2deg" },
  { src: "./assets/images/photo-09.jpeg", caption: "Sabores à mesa ✦", rotate: "-1.5deg" },
  { src: "./assets/images/photo-10.jpeg", rotate: "2.5deg", caption: "Encontros com calma ✦" },
  { src: "./assets/images/photo-14.jpeg", rotate: "-3deg", caption: "Luz natural & pausa ✦" },
  { src: "./assets/images/photo-15.jpeg", rotate: "1.8deg", caption: "Mãos na massa ✦" },
  { src: "./assets/images/photo-16.jpeg", rotate: "-2.2deg", caption: "Tempo presente ✦" },
  { src: "./assets/images/photo-17.jpeg", rotate: "3.2deg", caption: "Ambiente acolhedor ✦" },
  { src: "./assets/images/photo-18.jpeg", rotate: "-1.8deg", caption: "Comunidade viva ✦" },
  { src: "./assets/images/photo-19.jpeg", rotate: "2deg", caption: "Conversas reais ✦" },
];

const steps = [
  { num: "01", title: "CHEGAR", text: "Encontrar um lugar bonito, acolhedor e pronto para te receber com calma." },
  { num: "02", title: "EXPERIMENTAR", text: "Aprender uma técnica, ativar os sentidos e colocar a imaginação nas mãos." },
  { num: "03", title: "COMPARTILHAR", text: "Trocar histórias, sabores, ideias e risadas em boa companhia." },
  { num: "04", title: "LEVAR", text: "Voltar para casa com uma criação, uma memória e muita presença." },
];

const menuItems = ["a ideia", "experiências", "galeria", "como acontece", "quero viver"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Voltar ao início">
          <span>Projeto <em>Off.Line</em></span>
        </button>
        <nav className={menuOpen ? "header-nav is-open" : "header-nav"} aria-label="Navegação principal">
          {menuItems.map((item, index) => (
            <button key={item} onClick={() => scrollTo(["ideia", "experiencias", "galeria", "acontece", "viver"][index])}>
              <span>0{index + 1}</span>{item}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        {/* HERO COM ESTÉTICA DE COLAGEM */}
        <section className="hero section-pad">
          <div className="max-w-wrap">
            <div className="hero-layout">
              <div className="hero-copy">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="cutout-badge">PROJETO OFF.LINE</span>
                  <span className="sticker"><Sparkles size={14} /> encontros presenciais</span>
                </div>

                <h1>A vida real<br />é o nosso <em>moodboard.</em></h1>
                <p className="hero-lede">Um convite para desacelerar, criar com as mãos e estar por inteiro em boa companhia.</p>

                <div className="hero-cta-group">
                  <button className="primary-btn" onClick={() => scrollTo("ideia")}>
                    entra nessa <ArrowDown size={16} />
                  </button>
                  <div className="stamp-seal">
                    <span>SC / BR</span>
                    <span>2026</span>
                    <span>★ OFFLINE ★</span>
                  </div>
                </div>
              </div>

              {/* POLAROID HERO COM WASHI TAPE E STICKERS */}
              <div className="relative flex justify-center">
                <div className="washi-tape tape-top-left" />
                <div className="washi-tape tape-top-right" />
                <div className="polaroid-frame" style={{ transform: "rotate(2.5deg)", maxWidth: "420px", width: "100%" }}>
                  <img src="./assets/images/photo-03.jpeg" alt="Projeto Offline Encontro" style={{ width: "100%", height: "340px", objectFit: "cover", borderRadius: "2px" }} />
                  <div className="polaroid-caption">✦ presença é o nosso ponto de encontro</div>
                </div>
                <div className="absolute -bottom-4 -left-3 sticker" style={{ transform: "rotate(-6deg)", zIndex: 30 }}>
                  <Camera size={14} /> filme analógico
                </div>
              </div>
            </div>

            <div className="hero-bottom-note">
              <span>✦ Cuidado, criação & presença</span>
              <span>✦ Menos algoritmo, mais afeto</span>
              <span>✦ Edição 2026</span>
            </div>
          </div>
        </section>

        {/* MARQUEE STRIP ANIMADO */}
        <div className="marquee-strip">
          <div className="marquee-track">
            <span>✦ MENOS TELA, MAIS PRESENÇA</span>
            <span>✦ COLAGEM, CERÂMICA & CHÁ</span>
            <span>✦ DESACELERE SEM CULPA</span>
            <span>✦ A VIDA REAL É O NOSSO MOODBOARD</span>
            <span>✦ SAIR DO ALGORITMO</span>
            <span>✦ MENOS TELA, MAIS PRESENÇA</span>
            <span>✦ COLAGEM, CERÂMICA & CHÁ</span>
            <span>✦ DESACELERE SEM CULPA</span>
          </div>
        </div>

        {/* SEÇÃO 01: A IDEIA */}
        <section id="ideia" className="section-pad">
          <div className="max-w-wrap">
            <div className="idea-grid">
              <div>
                <span className="cutout-badge pink">01 / A IDEIA</span>
                <h2 className="mt-3">Aqui, a gente<br /><em>desacelera.</em></h2>
                <p className="body-copy">E se a gente desse um pause de verdade? O <strong>Projeto Off.Line</strong> é uma curadoria de experiências presenciais de cuidado, bem-estar e criação manual.</p>
                <p className="body-copy">Encontros pensados para reconectar com a natureza, com o corpo, com a sensibilidade e conhecer pessoas incríveis no caminho.</p>
                <p className="pull-quote">“sair da tela para entrar na experiência viva.”</p>
              </div>

              {/* POLAROID DA IDEIA */}
              <div className="relative flex justify-center">
                <div className="washi-tape tape-top-right" />
                <div className="polaroid-frame" style={{ transform: "rotate(-3deg)", maxWidth: "380px", width: "100%" }}>
                  <img src="./assets/images/photo-11.jpeg" alt="Vivência offline" style={{ width: "100%", height: "280px", objectFit: "cover" }} />
                  <div className="polaroid-caption">o tempo passa diferente por aqui ✦</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* SEÇÃO MANIFESTO */}
        <section className="manifesto section-pad dark-inset">
          <div className="max-w-wrap">
            <div className="manifesto-top">
              <span className="cutout-badge">O MANIFESTO</span>
              <span className="sticker"><Heart size={14} color="#D9045B" /> nossas intenções</span>
            </div>
            <h2>Não é sobre fazer mais.<br /><em>É sobre sentir mais.</em></h2>
            
            <div className="manifesto-grid">
              {[
                { n: "01", text: "Desacelerar sem culpa." },
                { n: "02", text: "Criar livremente com as mãos." },
                { n: "03", text: "Respirar fora do algoritmo." },
                { n: "04", text: "Estar presente em boa companhia." },
              ].map((item) => (
                <div className="manifesto-card" key={item.n}>
                  <div className="washi-tape" style={{ top: "-8px", left: "15px", width: "60px", height: "16px", transform: "rotate(-3deg)" }} />
                  <span className="manifesto-num">{item.n}</span>
                  <strong>{item.text}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 02: EXPERIÊNCIAS */}
        <section id="experiencias" className="section-pad">
          <div className="max-w-wrap">
            <span className="cutout-badge pink">02 / EXPERIÊNCIAS</span>
            <h2 className="mt-3">Escolhe o seu <em>mood.</em></h2>
            <p className="body-copy max-w-xl">Quatro formatos de encontros criados para desacelerar o ritmo e ativar a presença.</p>

            <div className="experience-grid">
              {experiences.map((exp) => (
                <div className="experience-scrap-card" key={exp.number}>
                  <div className="washi-tape" style={{ top: "-8px", right: "12px", width: "65px", height: "18px", transform: `rotate(${exp.tapeRotate})` }} />
                  <div className="scrap-img-box">
                    <img src={exp.image} alt={exp.title} />
                  </div>
                  <div className="experience-body">
                    <span className="experience-verb-tag">{exp.number} ✦ {exp.verb}</span>
                    <h3>{exp.title}</h3>
                    <p>{exp.text}</p>
                    <span className="note">{exp.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 03: MURAL SCRAPBOOK DE FOTOS */}
        <section id="galeria" className="section-pad dark-inset">
          <div className="max-w-wrap">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <span className="cutout-badge">03 / REGISTROS VIVENCIAIS</span>
                <h2 className="mt-3">Como é viver o<br /><em>Projeto Off.Line.</em></h2>
              </div>
              <div className="sticker" style={{ transform: "rotate(-3deg)" }}>
                <Camera size={16} /> Álbum de Memórias Reais
              </div>
            </div>
            <p className="body-copy max-w-2xl">Pequenos recortes analógicos de momentos sem telas, mãos em movimento e conexões verdadeiras da nossa comunidade.</p>

            <div className="gallery-scrapbook-mural">
              {galleryMural.map((img, idx) => (
                <div className="polaroid-frame" key={idx} style={{ transform: `rotate(${img.rotate})` }}>
                  <div className="washi-tape" style={{ top: "-9px", left: idx % 2 === 0 ? "-10px" : "auto", right: idx % 2 === 0 ? "auto" : "-10px", width: "70px", height: "18px", transform: idx % 2 === 0 ? "rotate(-12deg)" : "rotate(10deg)" }} />
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="polaroid-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 04: COMO ACONTECE */}
        <section id="acontece" className="section-pad">
          <div className="max-w-wrap">
            <span className="cutout-badge pink">04 / A EXPERIÊNCIA</span>
            <h2 className="mt-3">Um encontro <em>acontece assim:</em></h2>
            <p className="body-copy max-w-xl">Cada etapa é desenhada para afastar a pressa e colocar o afeto no centro.</p>

            <div className="step-grid">
              {steps.map((step) => (
                <div className="step-card" key={step.num}>
                  <span className="step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 05: CENÁRIOS */}
        <section className="section-pad dark-inset">
          <div className="max-w-wrap">
            <div className="places-scrap-grid">
              <div>
                <span className="cutout-badge">05 / CENÁRIO É PRESENÇA</span>
                <h2 className="mt-3">O lugar também<br /><em>participa.</em></h2>
                <p className="body-copy">Rooftops com vista para o pôr do sol, casas acolhedoras com quintal, mesas preparadas com cerâmicas, chás e carinho.</p>
                <p className="body-copy">O espaço não é mero pano de fundo: ele acolhe e convida a respirar fundo.</p>
                <p className="pull-quote">“bonito o bastante para virar lembrança.”</p>
              </div>

              <div className="places-polaroid-stack">
                <div className="relative">
                  <div className="washi-tape tape-top-left" />
                  <div className="polaroid-frame" style={{ transform: "rotate(-2.5deg)" }}>
                    <img src="./assets/images/photo-12.jpeg" alt="Rooftop e céu aberto" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                    <div className="polaroid-caption">ao ar livre sob o entardecer ✦</div>
                  </div>
                </div>
                <div className="relative" style={{ marginTop: "-20px" }}>
                  <div className="washi-tape tape-top-right" />
                  <div className="polaroid-frame" style={{ transform: "rotate(3deg)" }}>
                    <img src="./assets/images/photo-13.jpeg" alt="Espaço acolhedor" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                    <div className="polaroid-caption">mesas preparadas com intenção ✦</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 06: FORMULÁRIO DE CONVITE */}
        <section id="viver" className="max-w-wrap">
          <div className="join-section">
            <div className="join-layout">
              <div>
                <span className="cutout-badge" style={{ background: "#FF6699", color: "#1D161C" }}>PRÓXIMO CAPÍTULO</span>
                <h2 className="mt-3">Quer viver algo<br /><em>de verdade?</em></h2>
                <p className="body-copy" style={{ color: "#F8DEE7" }}>Deixa seu contato. A gente te escreve assim que a próxima mesa e oficina estiverem tomando forma.</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="sticker" style={{ background: "#FF6699", color: "#FFF" }}>✦ Vagas Limitadas</span>
                  <span className="sticker" style={{ background: "#FFF", color: "#1D161C" }}>✦ 100% Offline</span>
                </div>
              </div>

              <div>
                {sent ? (
                  <div className="flex flex-col items-center gap-3 p-8 bg-white/10 rounded-xl text-center border border-pink-300/30">
                    <Check size={40} className="text-pink-400" />
                    <strong className="text-2xl text-white">Te esperamos do lado de fora da tela!</strong>
                    <span className="text-pink-200">Seu contato foi anotado com muito carinho.</span>
                  </div>
                ) : (
                  <form className="interest-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <label>
                      Como quer ser chamado(a)?
                      <input required placeholder="seu nome ou apelido" />
                    </label>
                    <label>
                      Seu melhor e-mail
                      <input required type="email" placeholder="nome@exemplo.com" />
                    </label>
                    <label>
                      O que você gostaria de experimentar?
                      <textarea rows={3} placeholder="uma oficina de cerâmica, clube do livro, silêncio..." />
                    </label>
                    <button type="submit" className="form-submit-scrap">
                      quero ficar por perto <ArrowUpRight size={17} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer max-w-wrap">
        <span>PROJETO OFF.LINE ✦ 2026</span>
        <span>Cuidado, criação & presença</span>
        <span>Nos vemos do lado de fora da tela <b>♥</b></span>
      </footer>
    </div>
  );
}
