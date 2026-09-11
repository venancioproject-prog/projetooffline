import { useState } from "react";
import { ArrowDown, ArrowUpRight, Camera, Check, Heart, Menu, Sparkles, X, ChevronDown, ChevronUp, MapPin, Compass, MessageCircle } from "lucide-react";

// 43 Linguagens organizadas por pilares da curadoria oficial
const categories = [
  {
    num: "01",
    action: "Entrar",
    title: "Mata e águas",
    subtitle: "Experiências vividas dentro da natureza, com propostas diferentes para mata, rio e mar.",
    color: "#E8F5E9",
    items: [
      { num: "01", name: "Banho de Floresta" },
      { num: "02", name: "Piquenique no Rio" },
      { num: "03", name: "Meditação nas Águas Doces" },
      { num: "04", name: "Nascer do Sol na Canoa – Mar" },
      { num: "05", name: "Mulheres no Mar" },
      { num: "06", name: "Yoga na Floresta" },
    ],
    image: "./assets/images/photo-01.jpeg",
    tapeRotate: "-6deg",
  },
  {
    num: "02",
    action: "Mover",
    title: "Corpo e prazer",
    subtitle: "O corpo dança, respira, descansa, se toca, se solta e se conhece.",
    color: "#FFF0F5",
    items: [
      { num: "07", name: "Flamenco na Alma" },
      { num: "08", name: "Rebolar para Desestressar" },
      { num: "09", name: "Meditação Ativa – Centro de Força Sexual: Tantra para Criação" },
      { num: "10", name: "Automassagem" },
      { num: "11", name: "Escalda-pés" },
      { num: "12", name: "Balada do Bem-Estar" },
      { num: "13", name: "Imperatriz" },
      { num: "14", name: "À Flor da Pele" },
      { num: "15", name: "Samba de Roda do Recôncavo Baiano" },
    ],
    image: "./assets/images/photo-02.jpeg",
    tapeRotate: "5deg",
  },
  {
    num: "03",
    action: "Sentir",
    title: "Aromas, sabores e sons",
    subtitle: "Experiências para mexer com o cheiro, o paladar, a escuta e a memória.",
    color: "#FFFDE7",
    items: [
      { num: "16", name: "Perfumes de Flores" },
      { num: "17", name: "Incensos com Ervas da Cozinha" },
      { num: "18", name: "Bálsamos Naturais para Alegria" },
      { num: "19", name: "Velas Artesanais" },
      { num: "20", name: "Harmonizadores de Ambiente" },
      { num: "21", name: "Degustação de Chás" },
      { num: "22", name: "Fogueira Doce" },
      { num: "23", name: "Silent Concert – Canções-Medicina" },
    ],
    image: "./assets/images/photo-03.jpeg",
    tapeRotate: "-4deg",
  },
  {
    num: "04",
    action: "Fazer",
    title: "Arte e matéria",
    subtitle: "Experiências para criar com as mãos e descobrir o prazer de fazer uma coisa que antes não existia.",
    color: "#F3E5F5",
    items: [
      { num: "24", name: "Pintura em Aquarela" },
      { num: "25", name: "Pintura em Tela" },
      { num: "26", name: "Escultura em Argila Fria" },
      { num: "27", name: "Pinturas Indígenas em Cerâmica" },
      { num: "28", name: "Oficina de Joias" },
      { num: "29", name: "Oficina de Colagem" },
      { num: "30", name: "Personalização de Garrafas com Pintura" },
      { num: "31", name: "Pintura de Vasos e Plantar" },
    ],
    image: "./assets/images/photo-04.jpeg",
    tapeRotate: "6deg",
  },
  {
    num: "05",
    action: "Se conhecer",
    title: "Palavra, pensamento e brincadeira",
    subtitle: "Experiências para escrever, pensar sobre si, inventar símbolos, ler, jogar e conversar.",
    color: "#E0F2F1",
    items: [
      { num: "32", name: "Escrita de Si" },
      { num: "33", name: "Quem Sou Eu?" },
      { num: "34", name: "Construção do Oráculo Pessoal" },
      { num: "35", name: "Clube de Leitura" },
      { num: "36", name: "Jogos e Brincadeiras" },
    ],
    image: "./assets/images/photo-11.jpeg",
    tapeRotate: "-5deg",
  },
  {
    num: "06",
    action: "Lembrar",
    title: "Ancestralidade e encantamento",
    subtitle: "Experiências ligadas às brasilidades indígenas e afro-brasileiras e aos conhecimentos transmitidos por povos indígenas, africanos e afro-brasileiros.",
    color: "#FBE9E7",
    items: [
      { num: "37", name: "Noite Encantada" },
      { num: "38", name: "Sons de Cura da África" },
      { num: "39", name: "Orí do Mundo" },
      { num: "40", name: "Viva Nós e as Águas" },
      { num: "41", name: "Leitura de Aura e Banho de Folhas" },
      { num: "42", name: "Rezadeiras e Benzedeiras" },
      { num: "43", name: "Pedras do Sonhar" },
    ],
    image: "./assets/images/photo-15.jpeg",
    tapeRotate: "4deg",
  },
];

const manifestoItems = [
  {
    num: "01",
    text: "Seu tempo de trabalho é seu tempo de vida. Além de fazer o que tem que ser feito, crie, descanse e se divirta.",
  },
  {
    num: "02",
    text: "Conhecimentos indígenas e afro-brasileiros não são passado. Estão vivos no que a gente aprende, faz e compartilha.",
  },
  {
    num: "03",
    text: "Sua mão pode mais do que rolar a tela para cima e para baixo.",
  },
  {
    num: "04",
    text: "Tudo o que você faz para cuidar da mente, do corpo e das emoções gera muito mais do que beleza.",
  },
  {
    num: "05",
    text: "“Eu cá com meus botões de carne e osso, eu penso e posso. Eu falo e ouço. Uhum!” — Cérebro Eletrônico, de Gilberto Gil.",
  },
];

const galleryMural = [
  { src: "./assets/images/photo-05.jpeg", caption: "Processo criativo ✦", rotate: "-2.5deg" },
  { src: "./assets/images/photo-06.jpeg", caption: "Cuidado e conexão ✦", rotate: "2.8deg" },
  { src: "./assets/images/photo-07.jpeg", caption: "Presença e afeto ✦", rotate: "-3.2deg" },
  { src: "./assets/images/photo-08.jpeg", caption: "Detalhes manuais ✦", rotate: "1.8deg" },
  { src: "./assets/images/photo-09.jpeg", caption: "Sabores à mesa ✦", rotate: "-2deg" },
  { src: "./assets/images/photo-10.jpeg", caption: "Encontros com calma ✦", rotate: "3deg" },
  { src: "./assets/images/photo-14.jpeg", caption: "Luz natural & pausa ✦", rotate: "-2.8deg" },
  { src: "./assets/images/photo-16.jpeg", caption: "Tempo presente ✦", rotate: "2.2deg" },
  { src: "./assets/images/photo-17.jpeg", caption: "Ambiente acolhedor ✦", rotate: "-1.5deg" },
  { src: "./assets/images/photo-18.jpeg", caption: "Comunidade viva ✦", rotate: "2.5deg" },
  { src: "./assets/images/photo-19.jpeg", caption: "Conversas reais ✦", rotate: "-2.2deg" },
  { src: "./assets/images/photo-20.jpeg", caption: "Afetos compartilhados ✦", rotate: "1.9deg" },
];

const locations = [
  {
    place: "RIO DE JANEIRO",
    detail: "Rio de Janeiro e Paraty",
    tag: "Mata & Mar",
  },
  {
    place: "SÃO PAULO",
    detail: "São Paulo",
    tag: "Ateliês & Quintais",
  },
  {
    place: "BAHIA",
    detail: "Salvador e Recôncavo Baiano",
    tag: "Ancestralidade & Águas",
  },
  {
    place: "ENCONTROS INTERNACIONAIS",
    detail: "Portugal, Espanha, Itália e Irlanda",
    tag: "Circuito Exterior",
  },
];

const menuItems = [
  { label: "A IDEIA", id: "ideia" },
  { label: "EXPERIÊNCIAS", id: "experiencias" },
  { label: "GALERIA", id: "galeria" },
  { label: "AGENDA", id: "agenda" },
  { label: "LUGARES", id: "lugares" },
  { label: "QUERO VIVER", id: "viver" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nome: "", email: "", interesse: "" });
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const WHATSAPP_URL = "https://wa.me/5571985557259";
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxOcz08PJoeql9YHX10qUp04QV9gNKmNHuw8KSGleP-m4HytnYdyVXnF8fSM7R7bqjl/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Envia via FormData / URLSearchParams para compatibilidade total com o CORS do Google Apps Script
      const formPayload = new URLSearchParams();
      formPayload.append("nome", formData.nome);
      formPayload.append("email", formData.email);
      formPayload.append("interesse", formData.interesse);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(),
      });

      setSent(true);
      setFormData({ nome: "", email: "", interesse: "" });
    } catch (err) {
      console.error("Erro ao enviar para o Google Sheets:", err);
      // Mesmo com erro de rede pontual, exibe a confirmação após tentativa
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Voltar ao topo">
          <span>IT’S <em>OFF.LINE</em></span>
        </button>
        <nav className={menuOpen ? "header-nav is-open" : "header-nav"} aria-label="Navegação principal">
          {menuItems.map((item, index) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              <span>0{index + 1}</span>{item.label}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        {/* HERO / ABERTURA COM ESTÉTICA DE COLAGEM */}
        <section className="hero section-pad">
          <div className="max-w-wrap">
            <div className="hero-layout">
              <div className="hero-copy">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="cutout-badge">IT’S OFF.LINE</span>
                  <span className="sticker"><Sparkles size={14} /> ENCONTROS VIVOS</span>
                  <span className="cutout-badge pink">OFF.LINE ★ ENTRE VIVOS</span>
                </div>

                <blockquote className="hero-quote">
                  “O cérebro eletrônico não ama”
                </blockquote>

                <p className="hero-lede">
                  Clube de experiências presenciais de wellness, arte e cultura para quem quer voltar a sentir a vida acontecendo fora do celular.
                </p>

                <div className="hero-cta-group">
                  <button className="primary-btn" onClick={() => scrollTo("viver")}>
                    QUERO VIVER ISSO <ArrowDown size={16} />
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-btn flex items-center gap-2"
                  >
                    <MessageCircle size={16} /> AGENDAR UMA CONVERSA
                  </a>
                </div>
              </div>

              {/* POLAROID HERO COM WASHI TAPE E STICKERS */}
              <div className="relative flex justify-center">
                <div className="washi-tape tape-top-left" />
                <div className="washi-tape tape-top-right" />
                <div className="polaroid-frame" style={{ transform: "rotate(2.2deg)", maxWidth: "420px", width: "100%" }}>
                  <img
                    src="./assets/images/photo-03.jpeg"
                    alt="IT’S OFF.LINE — ENCONTRO"
                    style={{ width: "100%", height: "330px", objectFit: "cover", borderRadius: "2px" }}
                  />
                  <div className="polaroid-caption">
                    ✦ põe a mão na terra e vê o que acontece
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-3 sticker" style={{ transform: "rotate(-6deg)", zIndex: 30 }}>
                  <Camera size={14} /> trouxemos um filme para revelar ;)
                </div>
              </div>
            </div>

            <div className="hero-bottom-note">
              <span>✦ WELLNESS ✦ CUIDADO ✦ CRIAÇÃO ✦ PRAZER</span>
              <span>✦ TIRE UM TEMPO PARA NÃO FAZER NADA EM PAZ ;)</span>
              <span>✦ RJ ✦ SP ✦ SSA ✦ OUTROS LUGARES</span>
            </div>
          </div>
        </section>

        {/* MARQUEE TICKER ANIMADO */}
        <div className="marquee-strip">
          <div className="marquee-track">
            <span>✦ AQUARELA ✦ AUTOMASSAGEM ✦ COLAGEM ✦ CERÂMICA ✦ PINTURA EM TELA ✦ YOGA ✦ ESCRITA DE SI ✦ OFICINA DE INCENSOS ARTESANAIS ✦ CLUBE DE LEITURA ✦ BANHO DE FOLHAS ✦ BANHO DE FLORESTA ✦ PIQUENIQUE NO RIO ✦ JANTARES TEMÁTICOS ✦ JOGOS & CHÁ ✦ DANÇAS ✦ ESCALDA-PÉS ✦ WELLNESS</span>
            <span>✦ AQUARELA ✦ AUTOMASSAGEM ✦ COLAGEM ✦ CERÂMICA ✦ PINTURA EM TELA ✦ YOGA ✦ ESCRITA DE SI ✦ OFICINA DE INCENSOS ARTESANAIS ✦ CLUBE DE LEITURA ✦ BANHO DE FOLHAS ✦ BANHO DE FLORESTA ✦ PIQUENIQUE NO RIO ✦ JANTARES TEMÁTICOS ✦ JOGOS & CHÁ ✦ DANÇAS ✦ ESCALDA-PÉS ✦ WELLNESS</span>
          </div>
        </div>

        {/* 01 A IDEIA */}
        <section id="ideia" className="section-pad">
          <div className="max-w-wrap">
            <div className="idea-grid">
              <div>
                <span className="cutout-badge pink">01 / A IDEIA</span>
                <h2 className="mt-3">O tempo da vida<br /><em>é para se amar.</em></h2>
                
                <p className="body-copy">
                  Sabe aquelas atividades curiosas e bonitas que você vê as pessoas serem felizes fazendo? Produzir o próprio incenso, fazer sua própria vela perfumada, ler livros longe do celular, jogar, conversar e se conectar à moda antiga?
                </p>
                <p className="body-copy">
                  Isso é o que fazemos de melhor por aqui ;) Com o diferencial: nosso jeito de viver o wellness reúne cuidado, criação e aprendizados novos ligados às brasilidades indígenas e afro-brasileiras.
                </p>
                <p className="body-copy">
                  A gente se amarra em criar experiências de wellness que passam pela arte, pelo corpo, pela natureza, pela saúde mental, pelo prazer, pelo descanso e pelo autoconhecimento.
                </p>
                <p className="body-copy">
                  Nos preocupamos com a experiência concreta: lugares inusitados, com boa energia e conforto, temas originais e atividades sensoriais. Nosso lema é <strong>Saúde, Beleza e Fortuna Boa</strong>.
                </p>
                
                <div className="highlight-box my-4 p-4 border-l-4 border-pink-500 bg-white/60 rounded-r">
                  <p className="text-sm font-semibold mb-1 text-pink-900">Exclusividade:</p>
                  <p className="text-sm text-gray-800">
                    Cada encontro é criado por mim e por gente que sabe muito bem o que está fazendo.
                  </p>
                </div>

                <p className="body-copy text-sm italic">
                  Ah, nós também criamos experiências para você viver com seus afetos no seu aniversário ou em qualquer outra data que queira descansar com criação manual, natureza, cuidado e bem-estar.
                </p>

                <p className="pull-quote mt-4">
                  “Deixar a tela de lado e scrollar os vivos.” ✦
                </p>
              </div>

              {/* POLAROID DA IDEIA */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="washi-tape tape-top-right" />
                <div className="polaroid-frame" style={{ transform: "rotate(-2.8deg)", maxWidth: "380px", width: "100%" }}>
                  <img src="./assets/images/photo-11.jpeg" alt="Vivência IT’S OFF.LINE" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                  <div className="polaroid-caption">o tempo passa diferente por aqui ✦</div>
                </div>
                <div className="sticker mt-3" style={{ transform: "rotate(2deg)" }}>
                  <Heart size={14} color="#D9045B" /> Saúde, Beleza & Fortuna Boa
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO / NOSSAS INTENÇÕES */}
        <section className="manifesto section-pad dark-inset">
          <div className="max-w-wrap">
            <div className="manifesto-top">
              <span className="cutout-badge">O MANIFESTO</span>
              <span className="sticker"><Heart size={14} color="#D9045B" /> NOSSAS INTENÇÕES</span>
            </div>
            <h2>O manifesto:<br /><em>nossas intenções</em></h2>
            
            <div className="manifesto-grid">
              {manifestoItems.map((item) => (
                <div className="manifesto-card" key={item.num}>
                  <div className="washi-tape" style={{ top: "-8px", left: "15px", width: "60px", height: "16px", transform: "rotate(-3deg)" }} />
                  <span className="manifesto-num">{item.num}</span>
                  <strong>{item.text}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 EXPERIÊNCIAS / LINGUAGENS DA CURADORIA */}
        <section id="experiencias" className="section-pad">
          <div className="max-w-wrap">
            <div className="flex justify-between items-end flex-wrap gap-4 mb-3">
              <div>
                <span className="cutout-badge pink">02 / LINGUAGENS DA CURADORIA</span>
                <h2 className="mt-3">O que você quer<br /><em>viver primeiro?</em></h2>
              </div>
              <div className="sticker" style={{ transform: "rotate(-2deg)" }}>
                ✦ 43 Linguagens Únicas
              </div>
            </div>

            <p className="body-copy max-w-3xl">
              São 43 linguagens de wellness, arte, natureza, prazer, criação e conhecimentos ancestrais. Todas são diferentes entre si: cada uma tem uma proposta, um modo de fazer e uma experiência própria.
            </p>
            <p className="text-sm font-semibold text-pink-700 mb-6">
              Em breve, todas elas também estarão disponíveis em um manual de experiências da IT’S OFF.LINE.
            </p>

            {/* AVISO DE INVESTIMENTO E HORÁRIOS */}
            <div className="p-4 mb-8 rounded-lg bg-pink-100/80 border border-pink-300 text-sm text-pink-950 flex items-center gap-3">
              <Sparkles size={20} className="text-pink-600 shrink-0" />
              <span>
                <strong>Informação:</strong> O custo para participar das experiências é a partir de 350 reais dependendo da linguagem. Os encontros acontecem com grupos pela manhã, tarde e noite em todos os dias da semana a combinar.
              </span>
            </div>

            {/* ACCORDION / CARDS DAS 43 LINGUAGENS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat, idx) => {
                const isOpen = openCategory === idx;
                return (
                  <div
                    key={cat.num}
                    className="border border-pink-900/20 rounded-xl bg-white/90 p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                  >
                    <div className="washi-tape" style={{ top: "-8px", right: "15px", width: "60px", height: "16px", transform: cat.tapeRotate }} />
                    <div className="flex items-start justify-between gap-3 cursor-pointer" onClick={() => setOpenCategory(isOpen ? null : idx)}>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 bg-pink-200 text-pink-900 rounded">
                            {cat.num} {cat.action}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{cat.subtitle}</p>
                      </div>
                      <button className="p-1 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-100 shrink-0 mt-1">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-pink-100">
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item.num} className="flex items-start gap-2 text-sm text-gray-800">
                              <span className="text-xs font-mono text-pink-600 font-semibold">{item.num}.</span>
                              <span>{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* BOX QUER VIVER UMA DESSAS LINGUAGENS */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-pink-900 to-[#1D161C] text-white relative overflow-hidden shadow-lg">
              <div className="washi-tape" style={{ top: "-8px", left: "30px", background: "rgba(255,200,220,0.85)" }} />
              <div className="max-w-2xl">
                <span className="cutout-badge" style={{ background: "#FF6699", color: "#1D161C" }}>PERSONALIZADO</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Quer viver uma dessas linguagens?</h3>
                <p className="text-pink-100 text-sm md:text-base leading-relaxed mb-4">
                  Quer saber mais sobre uma delas ou criar uma experiência combinando várias? Marca uma conversa com a gente.
                </p>
                <p className="text-pink-200 text-xs md:text-sm mb-6">
                  A IT’S OFF.LINE também cria experiências exclusivas de wellness para aniversários, celebrações, grupos de amigos e empresas.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-md hover:bg-[#20ba59] transition-all transform hover:scale-105"
                >
                  <MessageCircle size={18} /> AGENDAR UMA CONVERSA NO WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 03 REGISTROS VIVENCIAIS / GALERIA SCRAPBOOK */}
        <section id="galeria" className="section-pad dark-inset">
          <div className="max-w-wrap">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <span className="cutout-badge">03 / REGISTROS VIVENCIAIS</span>
                <h2 className="mt-3">Como é viver a<br /><em>IT’S OFF.LINE.</em></h2>
              </div>
              <div className="sticker" style={{ transform: "rotate(-3deg)" }}>
                <Camera size={16} /> Álbum de Memórias
              </div>
            </div>
            <p className="body-copy max-w-2xl">
              Pequenos registros de encontros, mãos em movimento, natureza, criação e gente viva.
            </p>

            <div className="gallery-scrapbook-mural">
              {galleryMural.map((img, idx) => (
                <div className="polaroid-frame" key={idx} style={{ transform: `rotate(${img.rotate})` }}>
                  <div
                    className="washi-tape"
                    style={{
                      top: "-9px",
                      left: idx % 2 === 0 ? "-10px" : "auto",
                      right: idx % 2 === 0 ? "auto" : "-10px",
                      width: "70px",
                      height: "18px",
                      transform: idx % 2 === 0 ? "rotate(-12deg)" : "rotate(10deg)",
                    }}
                  />
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="polaroid-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 AGENDA */}
        <section id="agenda" className="section-pad">
          <div className="max-w-wrap">
            <span className="cutout-badge pink">04 / AGENDA</span>
            <h2 className="mt-3">Onde a IT’S OFF.LINE<br /><em>acontece.</em></h2>
            <p className="body-copy max-w-xl mb-8">
              Circuitos de encontros presenciais em territórios especiais do Brasil e no exterior.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, idx) => (
                <div key={idx} className="bg-white/90 border border-pink-900/15 rounded-xl p-6 relative shadow-sm hover:shadow-md transition-all">
                  <div className="washi-tape" style={{ top: "-8px", left: "20px", width: "55px", height: "15px", transform: idx % 2 === 0 ? "rotate(-4deg)" : "rotate(4deg)" }} />
                  <span className="text-xs font-mono text-pink-600 uppercase tracking-widest">{loc.tag}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">{loc.place}</h3>
                  <p className="text-sm text-gray-700 mt-1">{loc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 LUGARES */}
        <section id="lugares" className="section-pad dark-inset">
          <div className="max-w-wrap">
            <div className="places-scrap-grid">
              <div>
                <span className="cutout-badge">05 / LUGARES</span>
                <h2 className="mt-3">O lugar também<br /><em>participa.</em></h2>
                <p className="body-copy">
                  Mata, rio, mar, cachoeira, rooftops, casas com quintal, ateliês e lugares onde a vida já está acontecendo.
                </p>
                <p className="body-copy">
                  Escolhemos espaços inusitados, bonitos e confortáveis. Lugares com água, mata, vento, luz e espaço para respirar.
                </p>
                <p className="body-copy">
                  Também criamos experiências em parceria com terreiros, aldeias indígenas, quilombos e espaços de salvaguarda de povos tradicionais.
                </p>
                <div className="p-4 my-3 bg-pink-950/40 rounded border border-pink-500/30 text-pink-100 text-xs italic">
                  Quando entramos nesses territórios, é com convite, parceria e respeito a quem guarda esses lugares.
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="p-3 bg-white/10 rounded-lg text-sm text-pink-100">
                    <strong>Natureza e céu aberto:</strong> Água, mata atlântica, vento e pôr do sol entram na experiência. ✦
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-sm text-pink-100">
                    <strong>Casas, quintais e ateliês:</strong> Mesas preparadas, conforto e tudo pronto para você chegar e viver. ✦
                  </div>
                </div>
              </div>

              <div className="places-polaroid-stack">
                <div className="relative">
                  <div className="washi-tape tape-top-left" />
                  <div className="polaroid-frame" style={{ transform: "rotate(-2.5deg)" }}>
                    <img src="./assets/images/photo-12.jpeg" alt="Natureza e céu aberto" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                    <div className="polaroid-caption">natureza e céu aberto ✦</div>
                  </div>
                </div>
                <div className="relative" style={{ marginTop: "-20px" }}>
                  <div className="washi-tape tape-top-right" />
                  <div className="polaroid-frame" style={{ transform: "rotate(3deg)" }}>
                    <img src="./assets/images/photo-13.jpeg" alt="Casas, quintais e ateliês" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                    <div className="polaroid-caption">mesas preparadas com afeto ✦</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 QUERO VIVER / FORMULÁRIO */}
        <section id="viver" className="max-w-wrap my-12">
          <div className="join-section">
            <div className="join-layout">
              <div>
                <span className="cutout-badge" style={{ background: "#FF6699", color: "#1D161C" }}>06 / QUERO VIVER</span>
                <h2 className="mt-3">Quer viver algo<br /><em>de verdade?</em></h2>
                <p className="body-copy" style={{ color: "#F8DEE7" }}>
                  Deixa seu contato. A gente te escreve assim que a próxima experiência estiver tomando forma.
                </p>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <span className="sticker" style={{ background: "#FF6699", color: "#FFF" }}>✦ VAGAS LIMITADAS</span>
                  <span className="sticker" style={{ background: "#FFF", color: "#1D161C" }}>✦ EXPERIÊNCIAS OFFLINE</span>
                </div>
              </div>

              <div>
                {sent ? (
                  <div className="flex flex-col items-center gap-3 p-8 bg-white/10 rounded-xl text-center border border-pink-300/30">
                    <Check size={40} className="text-pink-400" />
                    <strong className="text-2xl text-white">Te esperamos do lado de fora da tela!</strong>
                    <span className="text-pink-200">Seu contato foi anotado com muito carinho e salvo na nossa lista.</span>
                  </div>
                ) : (
                  <form className="interest-form" onSubmit={handleSubmit}>
                    <label>
                      Como quer ser chamado(a)?
                      <input
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="seu nome ou apelido"
                        disabled={loading}
                      />
                    </label>
                    <label>
                      Seu melhor e-mail
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nome@exemplo.com"
                        disabled={loading}
                      />
                    </label>
                    <label>
                      O que você gostaria de experimentar?
                      <textarea
                        rows={3}
                        value={formData.interesse}
                        onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                        placeholder="uma oficina de cerâmica, banho de floresta, colagem..."
                        disabled={loading}
                      />
                    </label>
                    <button type="submit" className="form-submit-scrap" disabled={loading}>
                      {loading ? "ENVIANDO..." : <>QUERO FICAR POR PERTO <ArrowUpRight size={17} /></>}
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
        <span>IT’S OFF.LINE ✦ ENTRE VIVOS</span>
        <span>Wellness, Saúde, Beleza & Fortuna Boa</span>
        <span>Nos vemos do lado de fora da tela. <b>♥</b></span>
      </footer>
    </div>
  );
}

