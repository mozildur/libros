document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }
  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  });
  const frases = [
    "Despierta tu mente, transforma tu vida. 🧠✨",
    "Un milagro a la vez, sin prisa pero con paz. 🌈",
    "Explorar el Curso puede ser divertido. 😄",
    "No busques la luz afuera, ya brillas dentro. 💡"
  ];
  document.getElementById('random-phrase').textContent = frases[Math.floor(Math.random() * frases.length)];
  const testimonios = [
    { t: "Estos libros me cambiaron la vida. Gracias MoZ por tu claridad.", n: "Carla Gómez – CDMX" },
    { t: "Nunca pensé que Un Curso de Milagros pudiera ser tan divertido.", n: "Luis Mendoza – Bogotá" },
    { t: "Leer a MoZ es como hablar con un amigo sabio y buena onda.", n: "Andrea Silva – Lima" },
    { t: "La forma en que explica es única. ¡Recomendadísimo!", n: "José Pérez – Monterrey" },
    { t: "Pensé que sería denso... pero terminé riéndome y aprendiendo mucho.", n: "Mariela Torres – Buenos Aires" }
  ];
  const testEl = document.getElementById('testimonial');
  const randTest = testimonios[Math.floor(Math.random() * testimonios.length)];
  testEl.innerHTML = `"${randTest.t}"<span>– ${randTest.n}</span>`;
  const libros = [
    { t: "Explorando Un Curso de Milagros", i: "https://m.media-amazon.com/images/I/81jSGdbQRPL._SL1500_.jpg", d: "Una guía clara, cercana y llena de humor para estudiantes del Curso.", e: "https://a.co/d/jcTICwa" },
    { t: "No soy especial", i: "https://m.media-amazon.com/images/I/818v1ZZXBYL._SL1500_.jpg", d: "Reflexiones directas para desinflar el ego con amor y firmeza.", e: "https://a.co/d/7RT3PUt" },
    { t: "Conversaciones con MoZ", i: "https://m.media-amazon.com/images/I/816BucajEkL._SL1500_.jpg", d: "90 preguntas reales sobre el Curso, respondidas con profundidad y calidez.", e: "https://a.co/d/i7JFLJr" },
    { t: "Finanzas en Paz", i: "https://m.media-amazon.com/images/I/71St4zevGZL._SL1500_.jpg", d: "Una nueva forma de ver el dinero con conciencia, abundancia y paz.", e: "https://a.co/d/bL7TeUB" },
    { t: "Las Parábolas de Jesús", i: "https://m.media-amazon.com/images/I/71efrxZuoTL._SL1500_.jpg", d: "Una mirada luminosa y moderna a las parábolas desde el Curso.", e: "https://a.co/d/b5WxK1f" },
    { t: "Devocionario de Un Curso de Milagros", i: "https://m.media-amazon.com/images/I/81DOcJp16gL._SL1500_.jpg", d: "Oraciones, afirmaciones y reflexiones para acompañar tu práctica diaria.", e: "https://a.co/d/46fFmYT" },
    { t: "Cartas de Jesús a Platón: Diálogos sobre el alma, la verdad y el amor eterno", i: "https://m.media-amazon.com/images/I/71MIZKzV1LL._SL1500_.jpg", d: "Un diálogo ficticio entre Jesús y Platón que explora el perdón, la verdad eterna y el amor desde perspectivas mística y filosófica.", e: "https://a.co/d/fksOJbU" },
    { t: "Oratoria para espirituales: Técnicas, humor y alma para comunicar desde lo profundo", i: "https://m.media-amazon.com/images/I/61IOamwMlRL._SL1500_.jpg", d: "Consejos prácticos y divertidos para hablar con autenticidad y profundidad en cualquier escenario.", e: "https://a.co/d/e3WZp7D" },
    { t: "Primero Tu Paz: Dictados para la paz interior", i: "https://m.media-amazon.com/images/I/51LzJkhnEhL._SL1500_.jpg", d: "Dictados breves para cultivar tu paz interior en el día a día.", e: "https://a.co/d/hVLkdM3" }
  ];
  const galEl = document.getElementById('book-gallery');
  galEl.innerHTML = '';
  libros.forEach(b => {
    const card = document.createElement('figure');
    card.className = 'book';
    card.innerHTML = `
      <img src="${b.i}" alt="${b.t}" loading="lazy">
      <figcaption>
        <h3>${b.t}</h3>
        <p>${b.d}</p>
        <a href="${b.e}" target="_blank" class="cta">Comprar</a>
        <div class="share">
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(b.e)}" target="_blank">Facebook</a>
          <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(b.t + ' ' + b.e)}" target="_blank">Whatsapp</a>
        </div>
      </figcaption>
    `;
    galEl.appendChild(card);
  });
});
