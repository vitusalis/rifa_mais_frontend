<template>
  <nav>
    <div class="links">
      <ul>
        <li>
          <a class="link" href="#!" title="Telefone">(21)91234-5678</a>
        </li>
        <li>
          <i class="far fa-envelope fa-md link"></i>
        </li>

        <li>
          <i class="fab fa-whatsapp fa-md link"></i>
        </li>
        <li>
          <i class="fab fa-instagram fa-md link"></i>
        </li>
      </ul>
    </div>
    <div class="navigation">
      <div class="logo">
        <img class="logo-img" src="../assets/rifa5.png" alt="logo" title="logo" />

        <b-button variant="outline-light" class="toggle" @click="toggle('div#menu')">
          <i class="fas fa-bars"></i>
        </b-button>
      </div>
      <div class="menu hidden" id="menu">
        <div class="left">
          <router-link class="link" to="/">Início</router-link>
          <router-link class="link" to="/sorteios">Nossas Rifas</router-link>
          <a class="link" href="#!">Parcerias</a>
        </div>
        <div class="right">
          <a class="link" href="#!">Informações</a>
          <a class="link" href="#!">Fale conosco</a>
        </div>
        <div class="menu-contact">
          <div class="icons">
            <i class="far fa-envelope fa-lg"></i>

            <i class="fab fa-whatsapp fa-lg"></i>

            <i class="fab fa-instagram fa-lg"></i>
          </div>
          <a href="#!" title="Telefone">(21)91234-5678</a>
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
      console.log(el.classList);
    }
  }
};
</script>

<style lang="scss" scoped>
$side-padding: 30px;

@media screen and (max-width: 1000px) {
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
        .logo-img {
          max-width: 70vw;
        }
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
        &.hidden {
          width: 0;
        }
        &.visible {
          width: 100%;
          // if this setting is active whenever there is an overflow when the menu is collapsed
          .menu-contact {
            transform: translateX(-50%);
          }
        }
        .menu-contact {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-bottom: 70px;
          display: flex;
          flex-direction: column;
          .icons {
            i {
              margin: 20px;
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
@media screen and (min-width: 1001px) {
  nav {
    .toggle,
    .menu-contact {
      display: none;
    }
    .navigation {
      position: relative;
      flex-direction: row;
      padding: 40px $side-padding;
      .logo-img {
        position: absolute;
        max-height: 100px;
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
  display: flex;
  flex-direction: column;

  .links {
    text-align: right;
    width: 100%;
    padding: 10px $side-padding 5px;
    border-bottom: 1px solid #1b1b1b;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    ul {
      li {
        display: inline;
        margin: 0 10px;
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
    display: flex;
    align-items: center;
    .link {
      color: inherit;

      transition: transform 0.2s ease;
      &:hover {
        text-decoration: none;
      }
    }
    .menu {
      display: flex;
    }
  }
}
</style>