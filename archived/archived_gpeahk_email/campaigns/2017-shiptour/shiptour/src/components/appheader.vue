<template>
    <header>
      <div class="z-d-1 appheader">
    <div class="container">
      <nav class="navbar navbar-expand-md">
        <div class="site-logo">
        <router-link to="/" tag="a">
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/gpea-hk-logo-vertical.png" alt="">
        </router-link>
      </div>
      <!-- logo -->
        <button class="navbar-toggler" @click="expanded =! expanded">
          <span v-if="!expanded" class="navbar-toggler-icon"></span>
          <span v-else>&times;</span>
        </button>
        <!-- toggler -->
        <div class="collapse navbar-collapse" :class="{show: expanded}">
          <ul class="navbar-nav ml-auto">
            <!--
            <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link shiptour-link">主頁</a>
          </router-link>
          <router-link to="/beach" tag="li" class="nav-item" active-class="active">
            <a class="nav-link shiptour-link">直擊膠災</a>
          </router-link>
          -->
          <router-link to="/fastfood" tag="li" class="nav-item" active-class="active">
            <a class="nav-link shiptour-link">聯署走塑</a>
          </router-link>
          <router-link to="/research" tag="li" class="nav-item" active-class="active">
            <a class="nav-link shiptour-link">研究工作</a>
          </router-link>
          </ul>
          <a class="btn btn-empty ml-md-3" v-scroll-to="'#enform'" @click="expanded = false">立即聯署</a>
          <div class="social">
            <a class="fb--share" href="https://www.facebook.com/sharer/sharer.php?u=http://act.gp/2lkrnph" target="">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path fill="#FFF" d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"></path>
                </svg>
            </a>
            <a class="ws--share" href="whatsapp://send?text=為咗減少塑膠污染而努力，香港，夠鐘走塑！一齊聯署要求企業帶頭走塑啦👉 http://act.gp/2Ccyb2O" title="WhatsApp">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.241 11.241 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292zm0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.345 9.345 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4 5.183 0 9.397 4.22 9.397 9.4 0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055-.158-.295 0-.445.15-.584.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297.266-.664.287-1.24.22-1.363-.07-.123-.26-.203-.54-.357z"></path>
                </svg>
            </a>
        </div>
        <!-- social -->
        </div>
        <!-- navbar -->
      </nav>
    </div>
    </div>
  </header>
</template>

<script>
// initialise
export default {
  name: "appheader",
  props: ["drawer"],
  data() {
    return {
      expanded: false
    };
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      this.expanded = false;
    }
  }
};
</script>

<style lang="scss">
.appheader {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border-bottom: solid 1px #eee;
  .site-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 130px;
    padding: 0.5rem 1rem;
    img {
      width: 100%;
      height: auto;
      pointer-events: none;
    }
  }
  .navbar-toggler {
    span {
      font-size: 2rem;
    }
  }
  .collapse {
    &.show {
      text-align: center;
      padding: 1rem 0 2rem;
      .shiptour-link {
        font-size: 1.6rem;
        padding: 2rem 0;
      }
    }
  }
  .nav-item {
    .shiptour-link {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
      font-size: 1.4rem;
      color: #0a0a0a;
    }
    &.active {
      .nav-link {
        color: #559f0c;
        font-weight: bold;
      }
    }
  }
  .btn {
    font-size: 1.6rem;
    border: 1px solid #559f0c;
    cursor: pointer;
    &:hover {
      background-color: #559f0c;
      color: #fff !important;
    }
  }

  .social {
    display: none;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575px) {
      width: 50%;
      margin: 4rem auto 0;
      display: flex;
      justify-content: center;
      a {
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .fb--share {
        // background-color: rgba(#3b5998, 0.9);
        svg {
          width: 30px;
          path {
            fill: rgba(#3b5998, 0.9);
          }
        }
      }
      .ws--share {
        // background-color: rgba(#25d366, 0.9);
        svg {
          width: 30px;
          path {
            fill: rgba(#25d366, 0.9);
          }
        }
      }
    }
  }
}
</style>
