const sr = ScrollReveal({
  distance: "50px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  ".flowL",
  {
    origin: "left",
    interval: 50,
  }
  );
  sr.reveal(
    ".flowR, rowMain2",
    {
      origin: "right",
      interval: 50,
    }
    );

    sr.reveal(
      ".flowT, .rowMain, .doble-contenido, .tituloPrincipal, .carousel-container, .containerMain, .listFlow, .flow, .banner2, .article-wrapper",
      {
        origin: "top",
        interval: 50,
      }
      );

