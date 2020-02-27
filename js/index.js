particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 200,
        density: {
          enable: false,
          value_area: 800
        }
      },
      color: {
        value: "#fbf820"
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          opacity_min: 0,
          sync: true
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#fbf820",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 100,
          size: 10,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 150
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#020202",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover"
    }
  }
);
