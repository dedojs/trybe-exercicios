const data = [
    {
      thumbnail:
        "data:image/jpeg;base64,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",
      title: "Fundamentos | Bloco 01",
      level: 5,
      projectFinished: true
    },
    {
      thumbnail: "https://miro.medium.com/max/1125/1*dDNpLKu_oTLzStsDTnkJ-g.png",
      title: "Fundamentos | Bloco 02",
      level: 5,
      projectFinished: true
    },
    {
      thumbnail:
        "https://programadoresbrasil.com.br/wp-content/uploads/2020/02/Introduction-to-HTML-and-CSS-for-Beginners-Hafiza-Rabbia-Shafiq.jpg",
      title: "Fundamentos | Bloco 03",
      level: 5,
      projectFinished: true
    },
    {
      thumbnail:
        "https://marcas-logos.net/wp-content/uploads/2020/11/JavaScript-logo.png",
      title: "Fundamentos | Bloco 04",
      level: 5,
      projectFinished: true
    },
    {
      thumbnail: "https://i.morioh.com/5014339ce7.png",
      title: "Fundamentos | Bloco 05",
      level: 4,
      projectFinished: true
    },
    {
      thumbnail:
        "https://www.chiefofdesign.com.br/wp-content/uploads/2017/11/flexbox-css.png",
      title: "Fundamentos | Bloco 06",
      level: 5,
      projectFinished: true
    },
    {
      thumbnail:
        "data:image/png;base64,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",
      title: "Fundamentos | Bloco 07",
      level: 4,
      projectFinished: true
    },
    {
      thumbnail:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--dxVoGYVo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/kbhojsffbglub5o38s92.png",
      title: "Fundamentos | Bloco 08",
      level: 5,
      projectFinished: true
    },
    {
      thumbnail:
        "https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/08/teste-de-performance-javascript.png",
      title: "Fundamentos | Bloco 09",
      level: 4,
      projectFinished: true
    },
    {
      thumbnail: "https://auditeste.com.br/wp-content/uploads/2021/02/react.jpg",
      title: "Desenvolvimento Front-end | Bloco 10",
      level: 4,
      projectFinished: false
    },
    {
      thumbnail: "https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png",
      title: "Desenvolvimento Front-end | Bloco 11",
      level: 5,
      projectFinished: false
    }
  ];
  
  export default data;


