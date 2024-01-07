particlesJS('particles-js', {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: "image",
        image: {
          src: './assets/img/twitch.png',
          width: 100,
          height: 100
        }
      },
      size: {
        value: 30,
        random: true
      },
      opacity: {
        value: 0.5,
        random: true
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
});
