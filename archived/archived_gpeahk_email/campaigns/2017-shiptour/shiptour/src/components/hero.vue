<template>
  <div class="main">
    <div class="hero">
      <div class="hero--header">
        <div class="background--wrapper">
          <div v-bind:class="{scared: shipMove}"></div>
        </div>
        <div class="hero--title" v-visible="rendered" v-bind:class="sloganClass">
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/tagline_hk.png">
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/plasticfreenow.png">
        </div>

      </div>
      <!-- header -->
      <div class="hero--inner z-d-2">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="z-d-1 ship__hk">
              <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/ship1_s.jpg" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="text">
              <h1>與「彩虹勇士號」<br/>一起行動</h1>
              <div class="divider"></div>
              <p>沒有人喜歡充滿垃圾的沙灘。但遠至北極、近在香港，不論西貢、南ㄚ島等港人休憩的海灘都逃不了「膠浪」的侵襲。</p>
              <p>綠色和平船艦「彩虹勇士號」即將航行到香港海域多個地點進行海洋塑膠污染調查。早前，她於地中海啟航，展開一系列「實地見證」塑膠污染的調查與公眾活動。「彩虹勇士號」航行所經之地－保加利亞、希臘、意大利、西班牙，是你我心目中美麗的地中海國度，卻都無法抵擋塑膠污染的破壞。</p>
              <p>拒絕塑膠污染，立即要求企業善盡減塑之責，還給香港美麗海岸！</p>
              <p class="btn__center">
                <button class="z-d-2 cta cta__green" v-scroll-to="'#enform'">立即聯署</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- hero -->
    <div class="ship" ref="ship" v-visible="shipPass" v-bind:class="{anted: shipPass, animated: shipPass, fadeIn: shipPass}">
      <div class="container">
        <div class="row wrapper">
          <div class="col-12 col-md-6">
            <div class="ship--intro">
              <div class="text d1">
                <p>「彩虹勇士號」代表綠色和平以行動帶來改變的精神。</p>
                <p>今年聖誕和新年期間，綠色和平船艦「彩虹勇士號」訪港，展開一系列「實地見證」塑膠污染的海洋調查與公眾開放日，讓市民登船參觀這艘傳奇船艦。</p>
                <!--
                <p><strong style="color: #559f0c;">由於反應熱烈，網上報名已經額滿，但六場公眾開放日均會預留一定名額予公眾即場報名，以先到先得形式發放，歡迎參觀！</strong></p>
                -->
                <br/>
                <p><strong style="color: #559f0c;">「彩虹勇士號」公眾開放日已經完滿結束，多謝各位參與！我們將繼續<a href="#" style="font-size: 1.6rem; "v-scroll-to="'#enform'">推動快餐業「夠鐘走塑」，希望大家聯署支持</a>！</strong></p>
              </div>
              <div class="divider"></div>
              <div class="row" style="color: #777;">
                <div class="col-6">
                  <div class="date d2">
                    <p>
                      <i class="material-icons">date_range</i>
                    </p>
                    <p>
                      2017年12月23日（六）
                      <br/> 2017年12月24日（日）
                      <br/> 2017年12月30日（六）
                      <br/> 2017年12月31日（日）
                      <br/> 2018年1月20日（六）
                      <br/> 2018年1月21日（日）
                    </p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="location d2">
                    <p>
                      <i class="material-icons">directions_boat</i>
                    </p>
                    <p>中環二號碼頭<br/>Central Pier No. II<br/>往珀麗灣渡輪碼頭側</p>
                    <p>10:00 am - 3:30 pm</p>
                  </div>
                </div>
              </div>
              <!--
              <p class="btn__center d3">
                <button v-on:click="frameOpen" class="z-d-1 cta cta__green">我要報名</button>
              </p>
              -->
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="ship--img d0">
              <img class="z-d-1" src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/GP0STP7VI_Web_size_with_credit_line.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ship -->
    <div class="volunteer" ref="volunteer" v-visible="volunteerPass" v-bind:class="{animated: volunteerPass, anted: volunteerPass, fadeIn: volunteerPass}">
      <div class="container">
        <div class="row wrapper">
          <div class="col-12 col-md-6">
            <div class="volunteer--img d0">
              <img class="z-d-1" src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/GP02B1P_Web_size_with_credit_line.jpg" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="volunteer--intro d1">
              <h1>你是否願意<br/>加入義工行列</h1>
              <div class="divider"></div>
              <div class="text d2">
                <p>充滿熱誠、關心環境的你，這次「彩虹勇士號」訪港是非常難得的機會。</p>
                <p>加入義工行列，結識一班志同道合、熱心公益的義工夥伴，和綠色和平一起迎接船員與船長，透過創新、有趣的方式，介紹「彩虹勇士號」與塑膠專案！</p>
                <p class="btn__center">
                  <a href="https://act.greenpeace.org/ea-action/action?ea.client.id=1853&ea.campaign.id=65494" target="_blank">
                    <button class="z-d-1 cta cta__green">成為義工</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- volunteer -->
    <!--
    <transition name="fade">
      <div class="embed--overlay" v-show="frameShow">
        <div class='embed--container'>
          <a class="frame--close" @click="frameClose">
            <i class="material-icons">clear</i>
          </a>
          <div class="frame--loading" v-if="!frameLoaded">
            <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
          </div>
          <iframe id="iframe" v-bind:src="frameSrc" width="100%" height="100%" style='border:0' scrolling="yes">
          </iframe>
        </div>
      </div>
    </transition>
    -->
    <!-- frame -->
  </div>
</template>
<script>
export default {
  name: "hero",
  data() {
    return {
      top: 0,
      left: 0,
      shipPass: false,
      volunteerPass: false,
      rendered: false,
      shipMove: false,
      sloganClass: "",
      frameShow: false,
      frameSrc: "",
      frameLoaded: false,
    };
  },
  methods: {
    toggleRender: function() {
      this.shipMove = true;
      setTimeout(() => {
        this.rendered = true;
        this.sloganClass = "animated fadeIn";
      }, 800);
    },
    handleResize: function(event) { },
    handleScroll: function(event) {
      var left = window.pageXOffset || document.documentElement.scrollLeft;
      var top = window.pageYOffset || document.documentElement.scrollTop;
      this.top = top;
      this.left = left;
    },
    frameOpen: function() {
      this.frameShow = true;
      var mybody = document.getElementsByTagName("BODY")[0];
      mybody.classList.add("modal__active");
      this.frameSrc = "https://bo.eventionapp.com/greenpeace?s=if";
    },
    frameClose: function() {
      this.frameShow = false;
      var mybody = document.getElementsByTagName("BODY")[0];
      mybody.classList.remove("modal__active");
    },
    volunteerOpen: function() {
      this.frameShow = true;
      var mybody = document.getElementsByTagName("BODY")[0];
      mybody.classList.add("modal__active");
      this.frameSrc =
        "https://docs.google.com/forms/d/e/1FAIpQLSdL9Ej7JHOJl77AguX63es3ZnRcjWGuFEsw_XE0JRDY64KITQ/viewform?embedded=true";
    }
  },
  watch: {
    top: function(val) {
      var scrolling = val + window.innerHeight;
      if (scrolling > this.$refs.ship.offsetTop + 150) {
        this.shipPass = true;
      } else {
        this.shipPass = false;
      }
      if (scrolling > this.$refs.volunteer.offsetTop + 150) {
        this.volunteerPass = true;
      } else {
        this.volunteerPass = false;
      }
    },
    frameSrc: function(val) {
      var iframe = document.getElementById('iframe');
      iframe.onload = function() {
        this.frameLoaded = true;
      };
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    setTimeout(() => {
      this.toggleRender();
    }, 500);
  },
  mounted: function() { },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.hero--header {
  padding-top: 20rem;
  margin-bottom: -15rem;
  padding-bottom: 20rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  color: #fff;
  .background--wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/rw3_hg1ok.jpg");
      backface-visibility: hidden;
      transform: scale(1, 1);
      transition: transform ease-in-out 1s, background 0s linear 0s, opacity 0.7s linear;
      opacity: 0;
      &.scared {
        transform: scale(1.2, 1.2);
        opacity: 1;
      }
    }
  }
  .hero--title {
    position: relative;
    z-index: 1;
    img {
      margin: 0 auto;
      display: block;
    }
    img:first-child {
      width: 90%;
      max-width: 1000px;
    }
    img:last-child {
      width: 90%;
      max-width: 800px;
    }
  }
}

.hero--inner {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  padding: 2rem;
  .ship__hk {
    margin-bottom: 2rem;
  }
  .text {
    height: 100%;
    h1 {
      text-align: center;
    }
    .divider {
      width: 30px;
      margin: 2rem auto;
    }
  }
}

// hero
.ship {
  padding-top: 60px;
  .wrapper {
    @media (max-width: 575px) {
      flex-flow: column-reverse;
      .ship--img {
        margin-bottom: 2rem;
      }
    }
  }
  .container {
    overflow: hidden;
    .line {
      height: 100%;
      width: 1px;
      background-color: #559f0c;
      transform: translate(0, -50%);
    }
    .ship--intro {
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-self: center;
      text-align: justify;
      h1 {
        text-align: center;
      }
      .date,
      .location {
        text-align: center;
        line-height: 2;
      }
    }
    .ship--img {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .cta {
      margin-top: 2rem;
    }
  }
}

// ship
.volunteer {
  padding: 60px 0;
  .container {
    overflow: hidden;
    .line {
      height: 100%;
      width: 1px;
      background-color: #559f0c;
      transform: translate(0, -50%);
    }
    .volunteer--intro {
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-self: center;
      text-align: justify;
      h1 {
        text-align: center;
      }
      .cta {
        margin-top: 2rem;
      }
    }
    .volunteer--img {
      display: flex;
      align-items: center;
      height: 100%;
      img {
        position: relative;
        width: 100%;
      }
    }
  }
  @media (max-width: 575px) {
    .volunteer--img {
      margin-bottom: 3rem;
    }
  }
}

.embed--overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: hidden;
  .frame--close {
    position: fixed;
    top: 15px;
    right: 30px;
    color: #000;
    z-index: 999999;
    cursor: pointer;
    padding: 5px;
    background-color: #fff;
    border-radius: 50%;
    line-height: 0;
  }
}

.embed--container {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;

  /* important:  dimensions or positioning here! */
}

.embed--container iframe,
.embed--container object,
.embed--container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
}

.frame--loading {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
