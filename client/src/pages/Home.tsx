/**
 * Design: Caderno de Presença — editorial digital contemporâneo, carvão, marfim e argila.
 * Esta página usa ritmo vertical, assimetria discreta e microinterações suaves para transformar
 * a proposta do Projeto Offline em uma experiência de leitura e convite.
 */
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Menu, X } from "lucide-react";

const experiences = [
  {
    number: "01",
    verb: "FAZER",
    title: "Mãos & matéria",
    text: "Cerâmica fria, pintura, bordado, colagem e criação de jóias.",
    note: "criar sem pressa.",
    image: "/assets/images/photo-01.jpeg",
  },
  {
    number: "02",
    verb: "RESPIRAR",
    title: "Corpo & silêncio",
    text: "Yoga, meditação, silent concert e práticas que ativam os sentidos.",
    note: "o corpo sabe.",
    image: "/assets/images/photo-02.jpeg",
  },
  {
    number: "03",
    verb: "DEGUSTAR",
    title: "Sabores & aromas",
    text: "Chás, degustações, perfumes florais e velas aromáticas.",
    note: "sentir com tudo.",
    image: "/assets/images/photo-03.jpeg",
  },
  {
    number: "04",
    verb: "COMPARTILHAR",
    title: "Cultura & brincadeira",
    text: "Clubes de livros e discos, jogos, conversas e brincadeiras.",
    note: "boa companhia conta.",
    image: "/assets/images/photo-04.jpeg",
  },
];

const galleryImages = [
  { src: "/assets/images/photo-05.jpeg", alt: "Momento offline 1", caption: "Processo criativo" },
  { src: "/assets/images/photo-06.jpeg", alt: "Momento offline 2", caption: "Cuidado e conexão" },
  { src: "/assets/images/photo-07.jpeg", alt: "Momento offline 3", caption: "Presença e afeto" },
  { src: "/assets/images/photo-08.jpeg", alt: "Momento offline 4", caption: "Detalhes artesanais" },
  { src: "/assets/images/photo-09.jpeg", alt: "Momento offline 5", caption: "Sabores compartilhados" },
  { src: "/assets/images/photo-10.jpeg", alt: "Momento offline 6", caption: "Encontros com calma" },
];

const steps = [
  ["01", "CHEGAR", "encontrar um lugar bonito, acolhedor e pronto para receber."],
  ["02", "EXPERIMENTAR", "aprender uma técnica, ativar os sentidos e fazer com as mãos."],
  ["03", "COMPARTILHAR", "trocar histórias, sabores, ideias e risadas em boa companhia."],
  ["04", "LEVAR", "voltar para casa com uma criação, uma memória e mais presença."],
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
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Voltar ao início">
          <span className="wordmark-mark" aria-hidden="true"><i /></span>
          <span>Projeto<br /><em>Off.Line</em></span>
        </button>
        <nav className={menuOpen ? "header-nav is-open" : "header-nav"} aria-label="Navegação principal">
          {menuItems.map((item, index) => (
            <button key={item} onClick={() => scrollTo(["ideia", "experiencias", "galeria", "acontece", "viver"][index])}>
              <span>0{index + 1}</span>{item}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-side-label">presença é o nosso ponto de encontro</div>
          <div className="hero-copy reveal">
            <p className="eyebrow">PROJETO OFF.LINE <span>✦</span> encontros presenciais</p>
            <h1>A vida real<br />é o nosso <em>moodboard.</em></h1>
            <p className="hero-lede">Um convite para desacelerar, criar com as mãos e estar inteiro em boa companhia.</p>
            <button className="text-link" onClick={() => scrollTo("ideia")}>entra nessa <ArrowDown size={15} /></button>
          </div>
          <div className="hero-bottom-note"><span>cuidado, criação & presença</span><span>SC / BR — 2026</span></div>
        </section>

        <div className="rule" />

        <section id="ideia" className="intro section-pad split-section">
          <div className="section-kicker"><span>01</span><span>/ a ideia</span></div>
          <div className="section-content">
            <p className="eyebrow accent">OFFLINE, BUT FULLY PRESENT</p>
            <h2>Aqui, a gente desacelera.</h2>
            <p className="body-copy">E se a gente desse um pause de verdade? O Projeto Off.Line é uma curadoria de experiências presenciais de cuidado, bem-estar e criação.</p>
            <p className="body-copy">Encontros pensados para reconectar com a natureza, com o corpo — e conhecer pessoas no caminho.</p>
            <div className="intro-image-frame">
              <img src="/assets/images/photo-11.jpeg" alt="Vivência offline e desaceleração" className="intro-image" />
            </div>
            <p className="pull-quote">“sair da tela<br />para entrar<br />na experiência.”</p>
          </div>
        </section>

        <section className="manifesto section-pad dark-inset">
          <div className="manifesto-top"><span>o manifesto off.line</span><span>✦</span></div>
          <h2>Não é sobre fazer mais.<br /><em>É sobre sentir mais.</em></h2>
          <div className="manifesto-grid">
            {["Desacelerar sem culpa.", "Criar com as mãos.", "Respirar fora do algoritmo.", "Estar presente em boa companhia."].map((item, i) => (
              <div className="manifesto-item" key={item}><span>0{i + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
          <p className="manifesto-signature">o presente é o nosso lugar favorito.</p>
        </section>

        <section id="experiencias" className="experiences section-pad">
          <div className="section-kicker"><span>02</span><span>/ experiências</span></div>
          <div className="section-content wide-content">
            <p className="eyebrow accent">QUATRO JEITOS DE ESTAR PRESENTE</p>
            <h2>Escolhe o seu <em>mood.</em></h2>
            <div className="experience-list">
              {experiences.map((experience) => (
                <article className="experience-row" key={experience.number}>
                  <span className="experience-number">{experience.number}</span>
                  <div className="experience-thumb-wrap">
                    <img src={experience.image} alt={experience.title} className="experience-thumb" />
                  </div>
                  <div><p className="experience-verb">{experience.verb}</p><h3>{experience.title}</h3></div>
                  <p className="experience-text">{experience.text}</p>
                  <span className="experience-note">{experience.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="gallery-section section-pad dark-inset">
          <div className="section-kicker"><span>03</span><span>/ registros visuais</span></div>
          <div className="section-content wide-content">
            <p className="eyebrow accent">MEMÓRIAS DO PRESENTE</p>
            <h2>Como é viver<br /><em>o Projeto Off.Line.</em></h2>
            <p className="process-intro">Pequenos recortes de momentos sem telas, mãos em movimento e conexões verdadeiras.</p>
            <div className="gallery-grid">
              {galleryImages.map((img, idx) => (
                <div className="gallery-item" key={idx}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <span className="gallery-caption">{img.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="acontece" className="process section-pad">
          <div className="section-kicker"><span>04</span><span>/ a experiência</span></div>
          <div className="section-content wide-content">
            <p className="eyebrow accent">DO PRIMEIRO RESPIRO AO ÚLTIMO ABRAÇO</p>
            <h2>Um encontro<br /><em>acontece assim:</em></h2>
            <p className="process-intro">Cada detalhe é pensado para tirar a pressa de cena e colocar a presença no centro.</p>
            <div className="step-grid">
              {steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <p className="process-end">um convite para ficar no agora.</p>
          </div>
        </section>

        <section className="places section-pad split-section dark-inset">
          <div className="section-kicker"><span>05</span><span>/ lugar é experiência</span></div>
          <div className="section-content place-content">
            <p className="eyebrow accent">CHEGUE, RESPIRE, FIQUE</p>
            <h2>O cenário<br />também <em>participa.</em></h2>
            <p className="body-copy">Florestas, rooftops, praias, casas acolhedoras e mesas preparadas com intenção. Aqui, o ambiente não é pano de fundo: ele também convida a desacelerar.</p>
            <div className="places-image-duo">
              <img src="/assets/images/photo-12.jpeg" alt="Cenário do encontro" className="place-img" />
              <img src="/assets/images/photo-13.jpeg" alt="Espaço acolhedor" className="place-img" />
            </div>
            <p className="pull-quote small">bonito o suficiente<br />para lembrar.</p>
          </div>
        </section>

        <section id="viver" className="join section-pad">
          <div className="join-stamp">✦<br /><span>vem do<br />seu jeito</span></div>
          <div className="join-copy"><p className="eyebrow">PRÓXIMO CAPÍTULO</p><h2>Quer viver<br /><em>algo real?</em></h2><p>Deixa seu contato. A gente te avisa quando o próximo encontro estiver tomando forma.</p></div>
          {sent ? <div className="success-message"><Check size={30} /><strong>te esperamos do lado de fora da tela.</strong><span>Seu interesse foi registrado nesta demonstração.</span></div> : <form className="interest-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            <label>seu nome<input required placeholder="como você gosta de ser chamado(a)?" /></label>
            <label>seu e-mail<input required type="email" placeholder="seu@email.com" /></label>
            <label>o que você quer viver?<textarea rows={3} placeholder="uma oficina, um silêncio, uma mesa cheia..." /></label>
            <button type="submit" className="form-submit">quero ficar por perto <ArrowUpRight size={17} /></button>
          </form>}
        </section>
      </main>

      <footer className="site-footer"><span>PROJETO OFF.LINE</span><span>cuidado, criação & presença.</span><span>nos vemos do lado de fora da tela. <b>♥</b></span></footer>
    </div>
  );
}
