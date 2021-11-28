<template>
  <nav>
    <b-button
      variant="outline-light"
      class="toggle absolute"
      @click="toggle('div#menu')"
      id="toggle"
    >
      <i class="fas fa-bars"></i>
    </b-button>
    <div class="links">
      <ul>
        <!-- <li>
          <a href="https://wa.me/5521912345678" target="_blank" title="Ligar">21 92134-5678</a>
        </li>-->

        <li>
          <a href="https://wa.me/5521912345678" title="Nova conversa">
            <i class="fab fa-whatsapp fa-md link"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rifamais/" target="_blank" title="Instagram">
            <i class="fab fa-instagram fa-md link"></i>
          </a>
        </li>

        <li>
          <a href="mailto:rifamais@gmail.com" target="_blank" title="Enviar email">
            <i class="far fa-envelope fa-md link"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="navigation">
      <div class="logo">
        <router-link to="/" tag="a" class="logo-link">
          <img src="../assets/Original on Transparent.png" alt="logo" class="img" />
        </router-link>
      </div>
      <div class="menu hidden" id="menu">
        <div class="right">
          <router-link class="link menu-action" to="/">Início</router-link>
          <router-link class="link menu-action" to="/sorteios">Nossas Rifas</router-link>
          <router-link class="link menu-action" to="/about">Quem somos</router-link>
          <!-- <router-link class="link menu-action" to="/iniciativas">Iniciativas</router-link> -->
          <router-link class="link menu-action" to="/info">Como funciona?</router-link>
        </div>
        <div class="menu-contact">
          <div class="icons">
            <a href="https://wa.me/5521912345678" title="Nova conversa">
              <i class="fab fa-whatsapp fa-md link"></i>
            </a>

            <a href="https://www.instagram.com/rifamais/" target="_blank" title="Instagram">
              <i class="fab fa-instagram fa-md link"></i>
            </a>
            <a href="mailto:rifamais@gmail.com" target="_blank" title="Enviar email">
              <i class="far fa-envelope fa-md link"></i>
            </a>
          </div>
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
      const btn = document.querySelector("button#toggle");
      if (el.classList.contains("hidden")) {
        el.classList.replace("hidden", "visible");

        btn.classList.replace("absolute", "fixed");
      } else {
        el.classList.replace("visible", "hidden");
        btn.classList.replace("fixed", "absolute");
      }
    }
  },
  mounted() {
    const menuItems = document.querySelectorAll("a.menu-action");
    menuItems.forEach(link => {
      link.addEventListener("click", () => {
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
nav {
  .navigation {
    position: relative;
    .logo {
      .img {
      }
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
          transform: scale(1.3);
          padding: 0 5px;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px $side-padding;
    .logo {
      flex: 1;
      .logo-link {
        .img {
          width: 100%;
          max-width: 200px;
          height: auto;
        }
      }
    }
    .link {
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }
    .menu {
      .link {
        font-size: 1.3em;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  nav {
    .toggle {
      top: 50px;
      right: 20px;
      z-index: 2;
      &.absolute {
        position: absolute;
      }
      &.fixed {
        position: fixed;
      }
    }
    min-height: 20vh;
    position: relative;
    display: flex;
    justify-content: center;
    .links {
      display: none;
    }

    .navigation {
      .menu {
        flex-direction: column;
        background-color: #000;
        position: fixed;
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
            text-align: center;
            a {
              margin: 10px;
              padding: 0;
              color: inherit;
            }
          }
        }
      }

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
    .links {
    }
    .navigation {
      .menu {
        flex: 2;
        text-align: right;
        .link {
          padding: 15px;
        }
      }
    }
  }
}
</style>