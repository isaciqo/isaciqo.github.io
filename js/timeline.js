const timelineData = [
  {
    company: "Trustly",
    title: "Software Engineer",
    description: "Global fintech and payments company.\n\nBackend engineering for the Backoffice team, working on merchant-facing and internal platforms supporting payment operations. Refactored the Merchant Portal report-generation architecture, delivered critical-priority security remediation across merchant authentication flows, decoupled the Consumer Portal frontend from the server for independent deployments, contributed to the MVP architecture of an internal messaging and email platform, and introduced automation and AI-assisted engineering practices.",
    startDate: "May 2026",
    endDate: "Present",
    stack: [
      "Java", "Spring Boot", "Golang", "Node.js", "TypeScript",
      "MongoDB", "PostgreSQL", "MySQL", "RabbitMQ", "AWS", "Docker", "Microservices"
    ],
    logo: "https://www.google.com/s2/favicons?domain=trustly.com&sz=128"
  },
  {
    company: "PagoNxt - A Santander company",
    title: "Software Engineer",
    description: "Global fintech platform processing more than $90B in annual transactions.\n\nBuilt and maintained backend APIs and integrations in Golang and Node.js for high-volume payment clients and enterprise customers, developed asynchronous processing pipelines with RabbitMQ and event-driven architecture, and investigated complex production and integration issues across distributed services and multiple data stores.",
    startDate: "December 2022",
    endDate: "May 2026",
    stack: [
      "Golang", "Node.js", "TypeScript", "MongoDB",
      "MySQL", "RabbitMQ", "Docker", "AWS"
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh9xRSMPjrN2LdY3P0ZtRWeYCfbtPYPnXXQ&s"
  },
  {
    company: "Alubar",
    title: "Product Engineer",
    description: "Developed backend systems and API integrations for process automation, built data extraction and automation solutions interacting with web-based systems, and optimized data workflows and databases. Collaborated with business and technical stakeholders to translate operational problems into software solutions.",
    startDate: "March 2021",
    endDate: "December 2022",
    stack: ["Node.js", "PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Automation"],
    logo: "https://www.alubar.net.br/img/site/landpage/icons/logo-nova.svg"
  },
  {
    company: "Equatorial Energia",
    title: "Software Engineering Intern",
    description: "Developed monitoring dashboards and automation solutions, supported system architecture design and technical documentation, and contributed to improvements of legacy processes in an Agile environment.",
    startDate: "October 2019",
    endDate: "March 2021",
    stack: ["Node.js", "SQL", "Java", "Power BI", "Automation", "Agile"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Equatorial-logo.svg/673px-Equatorial-logo.svg.png"
  }
];

// Espera até que todo o conteúdo HTML da página esteja carregado
window.addEventListener("DOMContentLoaded", () => {
  // Seleciona o elemento com id="timeline", onde os itens serão inseridos
  const timeline = document.getElementById("timeline");

  // Itera sobre cada item de dados da timeline
  timelineData.forEach((item, index) => {
    // Define se o item vai ficar à esquerda ou à direita, alternando com base no índice
    const side = index % 2 === 0 ? "left" : "right";

    // Define o lado oposto ao do card para posicionar a bolinha com a data/logo
    const dateSide = side === "left" ? "right" : "left";

    // Cria o container principal do item da timeline e aplica a classe de alinhamento
    const container = document.createElement("div");
    container.className = `timeline-item ${side}`;

    // Cria o elemento visual da bolinha com a imagem (logo da empresa)
    const dateCircle = document.createElement("div");
    dateCircle.className = `timeline-img date-${dateSide}`; // aplica a classe do lado oposto

    // Cria e configura a imagem do logo da empresa
    const img = document.createElement("img");
    img.src = item.logo;
    img.alt = item.company;

    // Adiciona a imagem dentro da bolinha
    dateCircle.appendChild(img);

    // Cria o container do conteúdo textual (cargo, empresa, datas, descrição)
    const content = document.createElement("div");
    content.className = "timeline-content";
    const descriptionHTML = item.description.replace(/\n/g, "<br>");

    // Insere o conteúdo HTML no card
    content.innerHTML = `
      <h3>${item.title}</h3>
      <h4><em><strong>${item.company}</strong></em></h4>
      <p>${descriptionHTML}</p>
    `;

    // Cria o elemento para a data e posiciona do lado oposto ao conteúdo
    const dateText = document.createElement("div");
    dateText.className = `timeline-date-text date-${dateSide}`;
    dateText.textContent = `${item.startDate} - ${item.endDate}`;


    // Cria um container para a lista de tecnologias utilizadas (stack)
    const stackContainer = document.createElement("div");
    stackContainer.className = "stack";

    // Para cada tecnologia no array `stack`, cria e adiciona um <span>
    item.stack.forEach(tech => {
      const span = document.createElement("span");
      span.textContent = tech;
      stackContainer.appendChild(span);
    });

    // Adiciona o container da stack ao conteúdo
    content.appendChild(stackContainer);

    // Adiciona a bolinha de data/logo e o conteúdo ao container principal do item
    container.appendChild(dateCircle);
    container.appendChild(content);
    container.appendChild(dateText); // <- adiciona aqui

    // Finalmente, adiciona o item à timeline no DOM
    timeline.appendChild(container);
  });

  // Seleciona todos os itens da timeline para animar quando entrarem na tela
  const items = document.querySelectorAll('.timeline-item');

  // Cria um observer para aplicar animação quando o item entrar na viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe "show" para animar a aparição
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 }); // Quando 10% do item aparecer, ativa o observer

  // Observa cada item individualmente
  items.forEach(item => observer.observe(item));
});

