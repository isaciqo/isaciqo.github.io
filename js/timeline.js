const timelineData = [
  {
    company: "PagoNxt - A Santander company",
    title: "IT Analyst Jr | Backend Developer",
    description: "PagoNxt is a payments fintech company from the Santander group, owner of Getnet and Super Digital, together  they operate in the financial market and operate in the payments and acquiring segment, in 2022 they were responsible for processing more than 90 billion in payments.\n\n Software Engineer specializing in API development and maintenance, designing high-performance systems handling 10M+ daily requests for global clients like Amazon and Shopee.",
    startDate: "Dezember 2022",
    endDate: "current",
    stack: [
      "JavaScript", "TypeScript", "Node.js",
      "Express.js", "REST APIs", "MongoDB", "Azure", "Jest",
      "CI/CD", "Docker", "GitHub", "RabbitMQ"
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh9xRSMPjrN2LdY3P0ZtRWeYCfbtPYPnXXQ&s"
  },
  {
    company: "Alubar",
    title: "Product Engineer ",
    description: "The largest aluminum cable producer in Latin America, supplying 63% of Brazil’s transmission cables and powering critical infrastructure projects across the region. \n As product engineer, I spearheaded data-driven and technology innovations in aluminum cable manufacturing, leveraging AI and software solutions to reduce waste and optimize pricing strategies.",
    startDate: "March 2021",
    endDate: "Dezember 2022",
    stack: ["Node.js", "Express", "MongoDB", "Docker", "CI/CD", "Postman", "SQL", "Web Scraping", "Power BI", "PMBOK"],
    logo: "https://www.alubar.net.br/img/site/landpage/icons/logo-nova.svg"
  },
  {
    company: "Equatorial Energy",
    title: "Backend Developer internship ",
    description: "As a intern, I designed and implemented automation solutions to streamline data analysis and decision-making processes, while enhancing team collaboration through clear communication and problem-solving leadership.",
    startDate: "October 2019",
    endDate: "March 2021",
    stack: ["Node.js", "Express", "SQL", "Web Scraping", "Power BI", "Java", "KPI-driven decision-making"],
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

