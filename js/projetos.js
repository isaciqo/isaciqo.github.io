const projetos = [
    {
        nome: "TableRise",
        descricao: "A platform designed to help junior developers gain experience while offering a dynamic and intuitive environment for RPG lovers to manage and enjoy their campaigns. TableRise provides essential tools for running simple to complex RPG games with friends, aiming for a cozy and immersive experience.",
        imagem: "https://avatars.githubusercontent.com/u/133263521?s=200&v=4",
        tags: ["Node.js", "Docker", "TypeScript", "JavaScript", "MongoDB", "Redis", "React", "Socket.io"],
        link: "https://tablerise.com",
        repo: "https://github.com/TableRise"
      },
      {
        nome: "MeetSync",
        descricao: "A collaborative scheduling platform that helps friends organize meetings. Each participant selects their available dates, and the system automatically recommends the best possible day for everyone using smart conflict resolution.",
        imagem: "images/image.png",
        tags: ["JavaScript", "Docker", "MongoDB", "Node.js", "Jest", "HTML", "CSS"],
        link: "https://meetsync.com",
        repo: "https://github.com/exemplo/meetsync"
      },
      {
        nome: "QuickStartJS",
        descricao: "A JavaScript boilerplate library that scaffolds a complete backend project with MongoDB integration, basic CRUD operations, and a user authentication system — ready for fast development.",
        imagem: "https://media.licdn.com/dms/image/v2/C4D12AQHPFl469SfYqg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1632476202463?e=1755129600&v=beta&t=Y6A1NdLz5C7xHe6peEvyGADWb23kD_l1OFZZeDkZxRQ",
        tags: ["JavaScript", "MongoDB", "Express", "CRUD", "Auth", "Boilerplate", "Node.js"],
        link: "https://quickstartjs.dev",
        repo: "https://github.com/exemplo/quickstartjs"
      }
  ];
  
  const container = document.getElementById("projects");
  
  projetos.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
  
    card.innerHTML = `
      <img src="${proj.imagem}" alt="${proj.nome}">
      <div class="project-content">
        <h2>${proj.nome}</h2>
        <p>${proj.descricao}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-buttons">
        <a href="${proj.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> VISIT</a>
        <a href="${proj.repo}" target="_blank"><i class="fa-brands fa-github"></i> SOURCE</a>
      </div>
    `;
  
    container.appendChild(card);
  });
  