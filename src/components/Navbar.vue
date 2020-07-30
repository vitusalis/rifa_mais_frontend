<template>
  <nav>
    <div class="links">
      <ul>
        <li>
          <a href="https://wa.me/5521980066366" target="_blank" title="Ligar">21 98006-6366</a>
        </li>
        <li>
          <a href="mailto:rifaquesoma@gmail.com" target="_blank" title="Enviar email">
            <i class="far fa-envelope fa-md link"></i>
          </a>
        </li>

        <li>
          <a href="https://wa.me/5521980066366" title="Nova conversa">
            <i class="fab fa-whatsapp fa-md link"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rifaquesoma/" target="_blank" title="Instagram">
            <i class="fab fa-instagram fa-md link"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="navigation">
      <div class="logo">
        <router-link to="/" tag="a">
          <img class="logo-img" src="../assets/Original on Transparent.png" alt="logo" />
        </router-link>

        <b-button variant="outline-light" class="toggle" @click="toggle('div#menu')">
          <i class="fas fa-bars"></i>
        </b-button>
      </div>
      <div class="menu hidden" id="menu">
        <div class="left">
          <router-link class="link menu-action" to="/">Início</router-link>
          <router-link class="link menu-action" to="/sorteios">Nossas Rifas</router-link>
        </div>
        <div class="right">
          <router-link class="link menu-action" to="/iniciativas">Iniciativas</router-link>
          <router-link class="link menu-action" to="/info">Como funciona?</router-link>
        </div>
        <div class="menu-contact">
          <div class="icons">
            <a href="mailto:rifaquesoma@gmail.com" target="_blank" title="Enviar email">
              <i class="far fa-envelope fa-md link"></i>
            </a>

            <a href="https://wa.me/5521980066366" title="Nova conversa">
              <i class="fab fa-whatsapp fa-md link"></i>
            </a>

            <a href="https://www.instagram.com/rifaquesoma/" target="_blank" title="Instagram">
              <i class="fab fa-instagram fa-md link"></i>
            </a>
          </div>
          <a href="https://wa.me/5521980066366" target="_blank" title="Ligar">21 98006-6366</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggle(id) {
      const el = document.querySelector(id);
      if (el.classList.contains("hidden"))
        el.classList.replace("hidden", "visible");
      else el.classList.replace("visible", "hidden");
    }
  },
  mounted() {
    const menuItems = document.querySelectorAll("a.menu-action");
    menuItems.forEach(link => {
      link.addEventListener("click", () => {
        console.log("click");
        this.toggle("div#menu");
      });
    });
  }
};
</script>

<style lang="scss" scoped>
$side-padding: 30px;
ul {
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 768px) {
  nav {
    min-height: 15vh;
    position: relative;
    display: flex;
    justify-content: center;
    .links {
      display: none;
    }

    .navigation {
      flex-direction: column;
      text-align: center;
      width: 100%;

      .logo {
        position: relative;
        width: 100%;

        .toggle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 15px;
          z-index: 2;
          transition: right 0.3s ease;
        }
      }

      .menu {
        flex-direction: column;
        background-color: #000;
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 1;
        padding: 25% 0 0;
        transition: width 0.3s ease;
        a {
          &:hover {
            text-decoration: underline;
          }
        }
        &.hidden {
          width: 0;
        }
        &.visible {
          width: 100%;
          // if this setting is active whenever there is an overflow when the menu is collapsed
          .menu-contact {
            transform: translateX(-50%);
            a {
              color: #fff;
            }
          }
        }
        .menu-contact {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 70vh;
          margin-bottom: 15vh;
          display: flex;
          flex-direction: column;
          .icons {
            a {
              margin: 10px;
              padding: 0;
              color: inherit;
            }
          }
        }
      }
      .left,
      .right {
        display: flex;
        flex-direction: column;
      }
      a {
        padding: 8px;
        font-size: 1.5em;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (min-width: 769px) {
  nav {
    min-height: 20vh;
    .toggle,
    .menu-contact {
      display: none;
    }
    .navigation {
      position: relative;
      flex-direction: row;
      padding: 50px $side-padding;
      .logo-img {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
      }
      .menu {
        width: 100%;

        flex-direction: row;
        justify-content: space-between;
      }
      .right {
        text-align: right;
      }
      .link {
        padding: 15px;
      }
    }
  }
}

nav {
  .navigation {
    .logo-img {
      max-height: 120px;
    }
  }
  .links {
    text-align: right;
    padding: 5px $side-padding;
    border-bottom: 1px solid #1b1b1b;
    color: #fff;
    ul {
      li {
        display: inline;
        margin: 0 10px;
        color: inherit;
        a {
          color: inherit;
        }
        .link {
          text-transform: capitalize;
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .navigation {
    .link {
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }
    .menu {
      display: flex;
      .link {
        font-size: 1.3em;
      }
    }
  }
}
</style>