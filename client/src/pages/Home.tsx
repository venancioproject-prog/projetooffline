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
  { src: "./assets/images/photo-12.jpeg", caption: "Encontros com calma ✦", rotate: "-3.5deg", floatDelay: "0s", offset: "translateY(12px)" },
  { src: "./assets/images/photo-07.jpeg", caption: "Processo criativo ✦", rotate: "2.8deg", floatDelay: "1.2s", offset: "translateY(-14px)" },
  { src: "./assets/images/photo-08.jpeg", caption: "Luz natural & pausa ✦", rotate: "-2.2deg", floatDelay: "2.4s", offset: "translateY(8px)" },
  { src: "./assets/images/photo-09.jpeg", caption: "Afetos compartilhados ✦", rotate: "3.5deg", floatDelay: "0.8s", offset: "translateY(-8px)" },
  { src: "./assets/images/photo-10.jpeg", caption: "Cuidado e conexão ✦", rotate: "-4deg", floatDelay: "1.8s", offset: "translateY(16px)" },
  { src: "./assets/images/photo-14.jpeg", caption: "Sabores à mesa ✦", rotate: "2deg", floatDelay: "3s", offset: "translateY(-12px)" },
  { src: "./assets/images/photo-16.jpeg", caption: "Presença e afeto ✦", rotate: "-3deg", floatDelay: "1.5s", offset: "translateY(10px)" },
  { src: "./assets/images/photo-17.jpeg", caption: "Detalhes manuais ✦", rotate: "4.2deg", floatDelay: "2.2s", offset: "translateY(-15px)" },
  { src: "./assets/images/photo-18.jpeg", caption: "Ambiente acolhedor ✦", rotate: "-2.5deg", floatDelay: "0.5s", offset: "translateY(14px)" },
  { src: "./assets/images/photo-19.jpeg", caption: "Conversas reais ✦", rotate: "3deg", floatDelay: "2.7s", offset: "translateY(-6px)" },
  { src: "./assets/images/photo-20.jpeg", caption: "Comunidade viva ✦", rotate: "-3.8deg", floatDelay: "1.9s", offset: "translateY(12px)" },
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
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    interesse: "",
    aceiteComunidade: true,
  });
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaNum1, setCaptchaNum1] = useState(() => Math.floor(Math.random() * 8) + 2);
  const [captchaNum2, setCaptchaNum2] = useState(() => Math.floor(Math.random() * 8) + 1);
  const [errors, setErrors] = useState<{ email?: string; telefone?: string; captcha?: string; aceite?: string }>({});
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  // Gera novos números para o captcha
  const refreshCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 2);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaValue("");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const WHATSAPP_URL = "https://wa.me/5571985557259";
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHOAozLP4-lzNoSouV8bT1IqL8WiPNgFeRihFh6UNLWCX8uorqIwBr1pumwJWLyKAj/exec";

  // Formatação automática do telefone brasileiro (ex: (11) 98765-4321)
  const formatPhone = (val: string) => {
    const raw = val.replace(/\D/g, "").slice(0, 11);
    if (raw.length <= 2) return raw;
    if (raw.length <= 6) return `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    if (raw.length <= 10) return `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`;
    return `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, telefone: formatted });
    if (errors.telefone) setErrors({ ...errors, telefone: undefined });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
    if (errors.email) setErrors({ ...errors, email: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação estrita de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    // Validação de telefone (mínimo 10 dígitos)
    const phoneDigits = formData.telefone.replace(/\D/g, "");

    const newErrors: { email?: string; telefone?: string; captcha?: string; aceite?: string } = {};

    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Por favor, digite um e-mail válido (ex: seu@email.com).";
    }

    if (phoneDigits.length < 10) {
      newErrors.telefone = "Digite um telefone válido com DDD (mínimo 10 dígitos).";
    }

    // Validação de Captcha
    if (parseInt(captchaValue, 10) !== captchaNum1 + captchaNum2) {
      newErrors.captcha = "Resposta incorreta do desafio de segurança. Tente novamente.";
    }

    // Validação de Aceite
    if (!formData.aceiteComunidade) {
      newErrors.aceite = "É necessário aceitar os termos para receber nossas novidades e experiências.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append("nome", formData.nome.trim());
      params.append("email", formData.email.trim());
      params.append("telefone", formData.telefone.trim());
      params.append("cidade", formData.cidade.trim());
      params.append("interesse", formData.interesse.trim());
      params.append("aceiteLGPD", formData.aceiteComunidade ? "Sim" : "Não");

      const targetUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      // Cria iframe oculto para envio nativo
      const iframeName = "gscript_submit_frame";
      let iframe = document.getElementById(iframeName) as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = iframeName;
        iframe.name = iframeName;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = targetUrl;
      form.target = iframeName;
      form.style.display = "none";

      const fields: Record<string, string> = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: formData.telefone.trim(),
        cidade: formData.cidade.trim(),
        interesse: formData.interesse.trim(),
        aceiteLGPD: formData.aceiteComunidade ? "Sim" : "Não",
      };

      for (const key in fields) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();

      // Dispara beacon fetch
      fetch(targetUrl, { mode: "no-cors" }).catch(() => {});

      setTimeout(() => {
        if (form.parentNode) form.parentNode.removeChild(form);
      }, 1500);

      setSent(true);
      setFormData({ nome: "", email: "", telefone: "", cidade: "", interesse: "", aceiteComunidade: true });
      setErrors({});
    } catch (err) {
      console.error("Erro ao enviar:", err);
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

                <h1>“O cérebro eletrônico<br /><em>não ama.”</em></h1>

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
                <div className="absolute -top-4 -right-4 sticker" style={{ transform: "rotate(6deg)", zIndex: 30 }}>
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
                
                <div className="highlight-box my-6 p-3 sm:p-4 border-l-4 border-pink-500 bg-white/95 rounded-2xl shadow-sm">
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img 
                      src="./assets/images/yeye.jpg" 
                      alt="YéYè - Criadora do IT’S OFF.LINE" 
                      className="w-full h-56 sm:h-72 md:h-80 object-cover object-[center_20%]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="text-center px-2 pb-2">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-pink-700 flex items-center justify-center gap-1.5">
                      <Sparkles size={14} className="text-pink-600" /> EXCLUSIVIDADE
                    </p>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal max-w-lg mx-auto">
                      Cada encontro é criado por mim, <strong className="text-pink-950 font-bold">YéYè</strong>, e por gente que sabe muito bem o que está fazendo.
                    </p>
                  </div>
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
                  <img src="./assets/images/photo-13.jpeg" alt="Vivência IT’S OFF.LINE" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
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

            {/* ACCORDION / CARDS DAS 43 LINGUAGENS (com items-start para não esticar o vizinho) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {categories.map((cat, idx) => {
                const isOpen = openCategory === idx;
                return (
                  <div
                    key={cat.num}
                    className="border border-pink-900/20 rounded-xl bg-white/90 p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden self-start"
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

            <div className="gallery-scatter-table">
              {galleryMural.map((img, idx) => (
                <div
                  className="polaroid-frame scatter-polaroid"
                  key={idx}
                  style={{
                    transform: `rotate(${img.rotate}) ${img.offset}`,
                    animationDelay: img.floatDelay,
                  }}
                >
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
                <div className="p-4 my-4 bg-pink-900 text-white rounded-lg border-l-4 border-pink-500 text-sm font-medium leading-relaxed shadow-sm">
                  Quando entramos nesses territórios, é com convite, parceria e respeito a quem guarda esses lugares.
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="p-4 bg-white border border-pink-900/15 rounded-lg text-sm text-gray-900 shadow-sm">
                    <strong className="text-pink-700 font-bold block mb-1">Natureza e céu aberto</strong>
                    Água, mata atlântica, vento e pôr do sol entram na experiência. ✦
                  </div>
                  <div className="p-4 bg-white border border-pink-900/15 rounded-lg text-sm text-gray-900 shadow-sm">
                    <strong className="text-pink-700 font-bold block mb-1">Casas, quintais e ateliês</strong>
                    Mesas preparadas, conforto e tudo pronto para você chegar e viver. ✦
                  </div>
                </div>
              </div>

              <div className="places-polaroid-stack flex flex-col items-center">
                <div className="relative w-full max-w-[340px]">
                  <div className="washi-tape tape-top-left" />
                  <div className="polaroid-frame" style={{ transform: "rotate(-2.5deg)" }}>
                    <img
                      src="./assets/images/photo-06.jpeg"
                      alt="Natureza e céu aberto"
                      style={{ width: "100%", height: "290px", objectFit: "cover", objectPosition: "center 85%", borderRadius: "2px" }}
                    />
                    <div className="polaroid-caption">natureza e céu aberto ✦</div>
                  </div>
                </div>
                <div className="relative w-full max-w-[340px]" style={{ marginTop: "-25px" }}>
                  <div className="washi-tape tape-top-right" />
                  <div className="polaroid-frame" style={{ transform: "rotate(3deg)" }}>
                    <img
                      src="./assets/images/photo-11.jpeg"
                      alt="Casas, quintais e ateliês"
                      style={{ width: "100%", height: "270px", objectFit: "cover", borderRadius: "2px" }}
                    />
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
                  <form className="interest-form" onSubmit={handleSubmit} noValidate>
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
                        onChange={handleEmailChange}
                        placeholder="nome@exemplo.com"
                        disabled={loading}
                        className={errors.email ? "border-red-500 bg-red-50/50" : ""}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-600 font-bold mt-1 block">
                          ⚠️ {errors.email}
                        </span>
                      )}
                    </label>

                    <label>
                      Seu WhatsApp / Telefone com DDD
                      <input
                        required
                        type="tel"
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        placeholder="(DDD) 99999-9999"
                        maxLength={15}
                        disabled={loading}
                        className={errors.telefone ? "border-red-500 bg-red-50/50" : ""}
                      />
                      {errors.telefone && (
                        <span className="text-xs text-red-600 font-bold mt-1 block">
                          ⚠️ {errors.telefone}
                        </span>
                      )}
                    </label>

                    <label>
                      De qual cidade você é?
                      <input
                        required
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        placeholder="Ex: Rio de Janeiro, Salvador, São Paulo..."
                        disabled={loading}
                      />
                    </label>

                    <label>
                      O que você gostaria de experimentar?
                      <textarea
                        rows={2}
                        value={formData.interesse}
                        onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                        placeholder="uma oficina de cerâmica, banho de floresta, colagem..."
                        disabled={loading}
                      />
                    </label>

                    {/* CAPTCHA / DESAFIO DE SEGURANÇA */}
                    <div className="bg-white/10 p-3 rounded-lg border border-pink-300/30">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-pink-200 uppercase tracking-wider flex items-center gap-1">
                          🔒 Desafio de Segurança: Quanto é {captchaNum1} + {captchaNum2}?
                        </span>
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          className="text-xs text-pink-300 hover:text-white underline"
                          title="Trocar números"
                        >
                          trocar
                        </button>
                      </div>
                      <input
                        type="number"
                        value={captchaValue}
                        onChange={(e) => {
                          setCaptchaValue(e.target.value);
                          if (errors.captcha) setErrors({ ...errors, captcha: undefined });
                        }}
                        placeholder="Digite o resultado da soma"
                        required
                        className={errors.captcha ? "border-red-500 bg-red-50/50" : ""}
                      />
                      {errors.captcha && (
                        <span className="text-xs text-red-600 font-bold mt-1 block">
                          ⚠️ {errors.captcha}
                        </span>
                      )}
                    </div>

                    {/* CHECKBOX DE CONSENTIMENTO LGPD (Caixa à direita) */}
                    <div className="space-y-1">
                      <label className="optin-checkbox-label">
                        <span>
                          Concordo em receber convites, novidades e comunicações exclusivas da <strong>IT’S OFF.LINE</strong> e declaro que li a{" "}
                          <button
                            type="button"
                            onClick={() => setShowPrivacyModal(true)}
                            className="underline text-pink-300 hover:text-white font-semibold"
                          >
                            Política de Privacidade (LGPD)
                          </button>.
                        </span>
                        <input
                          type="checkbox"
                          checked={formData.aceiteComunidade}
                          onChange={(e) => {
                            setFormData({ ...formData, aceiteComunidade: e.target.checked });
                            if (errors.aceite) setErrors({ ...errors, aceite: undefined });
                          }}
                        />
                      </label>
                      {errors.aceite && (
                        <span className="text-xs text-red-600 font-bold block">
                          ⚠️ {errors.aceite}
                        </span>
                      )}
                    </div>

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

      {/* FOOTER COM LINK DE POLÍTICA DE PRIVACIDADE */}
      <footer className="site-footer max-w-wrap">
        <span>IT’S OFF.LINE ✦ ENTRE VIVOS</span>
        <button
          onClick={() => setShowPrivacyModal(true)}
          className="text-xs text-pink-800 hover:text-pink-950 underline cursor-pointer"
        >
          Política de Privacidade & LGPD
        </button>
        <span>Nos vemos do lado de fora da tela. <b>♥</b></span>
      </footer>

      {/* MODAL DE POLÍTICA DE PRIVACIDADE (LGPD) */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FFF8FA] text-[#1D161C] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-pink-900/20 relative">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-pink-100 transition"
              aria-label="Fechar política"
            >
              <X size={22} />
            </button>

            <span className="cutout-badge mb-3 inline-block">LGPD & PRIVACIDADE</span>
            <h3 className="text-2xl font-bold font-serif mb-4">Política de Privacidade — IT’S OFF.LINE</h3>
            
            <div className="text-xs md:text-sm text-gray-800 space-y-3 leading-relaxed">
              <p>
                A <strong>IT’S OFF.LINE</strong> preza pelo respeito à sua privacidade e pela proteção dos seus dados pessoais, em conformidade integral com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong>.
              </p>

              <h4 className="font-bold text-pink-900 text-sm mt-3">1. Quais dados coletamos?</h4>
              <p>
                Coletamos apenas os dados fornecidos voluntariamente por você em nosso formulário: <em>Nome</em>, <em>E-mail</em>, <em>Telefone/WhatsApp</em>, <em>Cidade</em> e <em>Interesses em nossas experiências</em>.
              </p>

              <h4 className="font-bold text-pink-900 text-sm mt-3">2. Para que finalidade usamos seus dados?</h4>
              <p>
                Seus dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Enviar convites, datas da agenda e abertura de vagas para as experiências na sua região;</li>
                <li>Responder a dúvidas ou solicitações enviadas por você;</li>
                <li>Entrar em contato via WhatsApp ou e-mail sobre novos encontros e oficinas.</li>
              </ul>

              <h4 className="font-bold text-pink-900 text-sm mt-3">3. Compartilhamento e Segurança</h4>
              <p>
                Nós <strong>não vendemos, não alugamos e não compartilhamos</strong> seus dados pessoais com terceiros ou empresas de publicidade. Seus dados são armazenados em ambiente seguro com acesso restrito à curadoria da IT’S OFF.LINE.
              </p>

              <h4 className="font-bold text-pink-900 text-sm mt-3">4. Seus Direitos</h4>
              <p>
                Você tem o direito de solicitar a qualquer momento a confirmação, atualização ou exclusão definitiva dos seus dados da nossa lista de contatos. Para isso, basta nos enviar uma mensagem pelo WhatsApp oficial ou por e-mail.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-pink-200 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-6 py-2.5 bg-pink-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-pink-800 transition"
              >
                Entendido e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

