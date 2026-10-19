
import { FormEvent, ReactNode, useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "code"
  | "window"
  | "layers"
  | "server"
  | "database"
  | "tools"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "menu"
  | "close"
  | "check";

const GITHUB_URL = "https://github.com/yaracachipinho-coder";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/yara-cachipinho-638b6840a/";
const EMAIL = "yaracachipinho@gmail.com";

const navigation = [
  ["Início", "#inicio"],
  ["Sobre mim", "#sobre"],
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Competências", "#competencias"],
  ["Contacto", "#contacto"],
];

const services = [
  {
    icon: "window" as IconName,
    title: "Desenvolvimento de websites",
    text: "Páginas modernas, responsivas e pensadas para apresentar a tua marca com clareza.",
  },
  {
    icon: "code" as IconName,
    title: "Portfólios profissionais",
    text: "Experiências digitais pessoais que valorizam o teu percurso, trabalho e identidade.",
  },
  {
    icon: "layers" as IconName,
    title: "Aplicações web",
    text: "Interfaces funcionais e intuitivas, adaptadas às necessidades de cada projeto.",
  },
  {
    icon: "server" as IconName,
    title: "Sistemas e API REST",
    text: "Estruturas no servidor com Java e Spring Boot, organizadas para crescer com segurança.",
  },
  {
    icon: "database" as IconName,
    title: "Bases de dados",
    text: "Modelação e integração de dados para aplicações consistentes e bem estruturadas.",
  },
  {
    icon: "tools" as IconName,
    title: "Manutenção de aplicações",
    text: "Ajustes, melhorias e evolução de aplicações existentes com atenção ao detalhe.",
  },
];

const skills = [
  {
    number: "01",
    title: "Desenvolvimento no servidor",
    items: [
      "Java",
      "Spring Boot",
      "API REST",
      "JPA",
      "Hibernate",
      "Spring Security",
    ],
  },
  {
    number: "02",
    title: "Interface",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "03",
    title: "Bases de dados",
    items: ["SQL", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Ferramentas",
    items: ["Git", "GitHub", "Maven", "VS Code", "Postman"],
  },
];

const steps = [
  [
    "01",
    "Compreender",
    "Conversamos para perceber a necessidade, o contexto e os objetivos.",
  ],
  [
    "02",
    "Planear",
    "Organizo a solução, as prioridades e a estrutura necessária.",
  ],
  [
    "03",
    "Desenvolver",
    "Construo e testo cada parte com cuidado e consistência.",
  ],
  [
    "04",
    "Entregar",
    "Apresento a solução e identifico oportunidades de melhoria.",
  ],
];

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    window: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3-9 5 9 5 9-5-9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    tools: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L20 16.4a2.4 2.4 0 0 1-3.4 3.4L8.9 12.1" />
        <path d="m5 13-3 3 4 4 3-3M3.5 15.5l5-5" />
      </>
    ),
    external: (
      <>
        <path d="M15 3h6v6M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4a5.8 5.8 0 0 0-1.5-4 5.4 5.4 0 0 0-.2-4S17.9-1.4 15 1.1a13.4 13.4 0 0 0-7 0C5.1-1.4 3.9-.9 3.9-.9a5.4 5.4 0 0 0-.2 4 5.8 5.8 0 0 0-1.5 4c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4.2-2" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v6M8 7v.01M12 17v-6M16 17v-3.5a2.5 2.5 0 0 0-5 0" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      >
        {paths[name]}
      </g>
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoAvailable, setPhotoAvailable] = useState(true);
  const [formStatus, setFormStatus] = useState<
    "idle" | "checking" | "ready"
  >("idle");
  const [formError, setFormError] = useState("");

  const currentYear = new Date().getFullYear();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setFormError("");
    setFormStatus("checking");

    const dados = new FormData(form);

    const contacto = {
      nome: String(dados.get("name") ?? "").trim(),
      email: String(dados.get("email") ?? "").trim(),
      assunto: String(dados.get("service") ?? "").trim(),
      mensagem: String(dados.get("message") ?? "").trim(),
    };

    try {
      const resposta = await fetch(
        "http://localhost:8080/api/contactos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contacto),
        }
      );

      if (!resposta.ok) {
        const detalhe = await resposta.text();

        throw new Error(
          detalhe || `Erro do servidor: ${resposta.status}`
        );
      }

      form.reset();
      setFormStatus("ready");
    } catch (erro) {
      console.error("Erro ao enviar contacto:", erro);

      setFormStatus("idle");
      setFormError(
        "Não foi possível enviar a mensagem. Verifica se o backend está a funcionar e tenta novamente."
      );
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.01 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));

    const revealFallback = window.setTimeout(() => {
      document
        .querySelectorAll(".reveal")
        .forEach((element) => element.classList.add("visible"));
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(revealFallback);
    };
  }, []);

  useEffect(() => {
    if (formStatus !== "ready") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setFormStatus("idle");
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [formStatus]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="Yara Kailany — Início"
          >
            YARA KAILANY
          </a>

          <nav
            className={`main-nav ${menuOpen ? "open" : ""}`}
            aria-label="Navegação principal"
          >
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              className="button button-small button-dark nav-cta"
              href="#contacto"
              onClick={() => setMenuOpen(false)}
            >
              Vamos conversar
            </a>
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                DESENVOLVEDORA JAVA, WEB E DE SISTEMAS
              </p>

              <h1>
                Transformo ideias em <em>soluções digitais.</em>
              </h1>

              <p className="hero-description">
                Saudações, sou Yara Kailany, estudante de Engenharia
                Informática e desenvolvedora focada na criação de
                aplicações web, sistemas backend e soluções digitais
                úteis para pessoas e empresas.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">
                  Ver os meus projetos <Icon name="arrow" />
                </a>

                <a className="button button-secondary" href="#contacto">
                  Solicitar um projeto
                </a>
              </div>

              <div className="hero-note">
                <span className="status-dot" />
                Disponível para colaborações e novos projetos
              </div>
            </div>

            <div className="portrait-wrap reveal">
              <div className="portrait">
                {photoAvailable && (
                  <img
                    className="portrait-photo"
                    alt="Fotografia de Yara Kailany"
                    onError={() => setPhotoAvailable(false)}
                    src="/yara-kailany.png"
                    loading="lazy"
                  />
                )}

              

                <div className="availability-card">
                  <div>
                    <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
                    <p>
                      Vamos transformar a tua ideia numa solução digital.
                    </p>
                  </div>

                  <a
                    href="#contacto"
                    aria-label="Ir para a secção de contacto"
                  >
                    <Icon name="arrow" size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-strip" aria-label="Tecnologias">
          <div className="container technology-list">
            {[
              "Java",
              "Spring Boot",
              "JavaScript",
              "React",
              "PostgreSQL",
              "Git/GitHub",
            ].map((technology, index) => (
              <span key={technology}>
                {index > 0 && <i aria-hidden="true" />}
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="container about-grid">
            <div>
              <SectionHeading
                eyebrow="SOBRE MIM"
                title="Tecnologia com propósito."
              />
            </div>

            <div className="about-content reveal">
              <p className="large-copy">
                Estou a desenvolver as minhas competências em Engenharia
                Informática através do estudo e da criação de projetos
                práticos.
              </p>

              <p>
                Interesso-me pelo desenvolvimento de sistemas com Java
                e Spring Boot, pelo desenvolvimento web e pela criação
                de soluções que resolvem problemas reais.
              </p>

              <div className="about-values">
                <span>Curiosidade</span>
                <span>Clareza</span>
                <span>Evolução</span>
              </div>
            </div>

            <div className="about-visual reveal" aria-hidden="true">
              <div className="visual-code">
                <span>01</span>
                <span>pensar</span>
                <span>criar</span>
                <span>melhorar</span>
              </div>

              <div className="visual-circle">YK</div>
            </div>
          </div>
        </section>

        <section className="section services section-muted" id="servicos">
          <div className="container">
            <SectionHeading
              eyebrow="SERVIÇOS"
              title="Como posso ajudar?"
              text="Soluções digitais desenvolvidas com atenção à estrutura, à experiência e aos objetivos de cada projeto."
            />

            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  className="service-card reveal"
                  key={service.title}
                >
                  <div className="card-topline">
                    <span className="service-icon">
                      <Icon name={service.icon} size={24} />
                    </span>

                    <span className="card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projetos">
          <div className="container">
            <div className="projects-heading">
              <SectionHeading
                eyebrow="PROJETOS"
                title="Projetos que estou a desenvolver."
                text="Uma seleção de trabalhos em construção, criada para aplicar conhecimentos e resolver necessidades concretas."
              />

              <p className="editable-note reveal">
                As imagens, ligações e detalhes podem ser atualizados à medida que cada projeto evolui.
              </p>
            </div>

            <div className="project-list">
              <article className="project-card reveal">
                <div className="project-image project-image-one">
                  <img
                    className="project-screenshot project-main-screenshot"
                    src="/images/ecrãprincipal.png"
                    alt="Dashboard do sistema de agendamento de reuniões"
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <span className="project-index">PROJETO 01</span>

                  <h3>Sistema de Agendamento de Reuniões</h3>

                  <p>
                    Aplicação web desenvolvida para organizar reuniões,
                    gerir informações dos encontros e facilitar a
                    organização entre participantes. O projeto integra
                    um backend em Java com Spring Boot e uma interface web.
                  </p>

                  <div className="tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>React</span>
                    <span>API REST</span>
                  </div>

                  <div className="project-links">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" />
                      GitHub
                    </a>

                    <span className="link-disabled">
                      <Icon name="external" />
                      Demonstração — por adicionar
                    </span>
                  </div>
                </div>
              </article>

              <article className="project-card project-reverse reveal">
                <div className="project-image project-image-two">
                  <img
                    className="project-screenshot"
                    src="/images/organizador.png"
                    alt="Captura de ecrã do sistema de gestão e organização de tarefas."
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <span className="project-index">PROJETO 02</span>

                  <h3>Sistema de Gestão e Organização de Tarefas</h3>

                  <p>
                    Aplicação desenvolvida com Java e Spring Boot para
                    organizar tarefas pessoais, académicas e profissionais.
                    Inclui organização por categorias, prioridades e estados,
                    com funcionalidades de histórico e notificações.
                  </p>

                  <div className="tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>PostgreSQL</span>
                    <span>API REST</span>
                  </div>

                  <div className="project-links">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" />
                      GitHub
                    </a>

                    <span className="link-disabled">
                      <Icon name="external" />
                      Demonstração — por adicionar
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section skills section-dark" id="competencias">
          <div className="container">
            <SectionHeading
              eyebrow="COMPETÊNCIAS"
              title="Uma base técnica em constante evolução."
              text="Tecnologias e ferramentas que utilizo nos estudos e no desenvolvimento de projetos práticos."
            />

            <div className="skills-grid">
              {skills.map((group) => (
                <article
                  className="skill-group reveal"
                  key={group.title}
                >
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>

                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="processo">
          <div className="container">
            <SectionHeading
              eyebrow="PROCESSO DE TRABALHO"
              title="Da ideia à solução, passo a passo."
            />

            <div className="process-grid">
              {steps.map(([number, title, text]) => (
                <article className="process-step reveal" key={number}>
                  <span className="step-number">{number}</span>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact section-muted" id="contacto">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeading
                eyebrow="CONTACTO"
                title="Vamos conversar sobre o teu projeto."
                text="Conta-me a tua ideia e vamos explorar como a transformar numa solução digital."
              />

              <div className="contact-links reveal">
                <a href={`mailto:${EMAIL}`}>
                  <Icon name="mail" />
                  {EMAIL}
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir perfil de LinkedIn"
                >
                  <Icon name="linkedin" />
                  LinkedIn
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir perfil de GitHub"
                >
                  <Icon name="github" />
                  GitHub
                </a>
              </div>
            </div>

            <form
              className="contact-form reveal"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <label>
                  Nome completo
                  <input
                    name="name"
                    placeholder="O teu nome"
                    required
                    type="text"
                  />
                </label>

                <label>
                  Endereço de email
                  <input
                    name="email"
                    placeholder="nome@exemplo.com"
                    required
                    type="email"
                  />
                </label>
              </div>

              <label>
                Tipo de serviço
                <select defaultValue="" name="service" required>
                  <option disabled value="">
                    Seleciona uma opção
                  </option>
                  <option>Desenvolvimento de website</option>
                  <option>Portfólio profissional</option>
                  <option>Aplicação web</option>
                  <option>Sistema e API REST</option>
                  <option>Outro serviço</option>
                </select>
              </label>

              <label>
                Descrição do projeto
                <textarea
                  name="message"
                  placeholder="Fala-me brevemente sobre a tua ideia, objetivo e necessidades."
                  required
                  rows={5}
                />
              </label>

              {formError && (
                <p className="form-message error" role="alert">
                  {formError}
                </p>
              )}

              {formStatus === "ready" && (
                <p className="form-message success" role="status">
                  <Icon name="check" />
                  Mensagem enviada com sucesso! Obrigada pelo contacto.
                </p>
              )}

              <button
                className="button button-primary submit-button"
                disabled={formStatus === "checking"}
                type="submit"
              >
                {formStatus === "checking"
                  ? "A enviar..."
                  : "Enviar mensagem"}

                <Icon name="arrow" />
              </button>

              <p className="form-footnote">
                Os teus dados serão utilizados para responder ao teu pedido.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div>
            <a className="brand footer-brand" href="#inicio">
              YARA KAILANY
            </a>

            <p>
              Desenvolvimento web e software pensado para necessidades reais.
            </p>
          </div>

          <div className="footer-nav">
            {navigation.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {currentYear} Yara Kailany</span>
          <span>Desenvolvido com intenção e cuidado.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
