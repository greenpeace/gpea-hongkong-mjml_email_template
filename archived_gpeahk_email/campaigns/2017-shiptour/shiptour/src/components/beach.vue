<template>
  <div class="plastic">
    <div class="hero">
      <div class="hero--header">
        <div class="hero--inner">
          <div class="title">
            <h1>你想不想改變這一切</h1>
          </div>
          <div class="divider"></div>
          <div class="actions">
            <div class="hero--ctn">
              <button class="z-d-1 cta cta__green" v-scroll-to="'#enform'">即刻加入改變</button>
            </div>
            <div class="hero--ctn">
              <button class="z-d-1 cta" v-scroll-to="'#ourwork'">了解更多詳情</button>
            </div>
          </div>
        </div>
        <!-- title -->
      </div>
      <div class="campaigns">
        <div class="container">
          <div class="campaign--list">
            <carousel :perPage="1" :perPageCustom="[[768, 3], [1200, 3]]" :minSwipeDistance="10">
              <slide v-for="slide in truth" :key="slide.key">
                <div class="truth--img">
                  <img :src="slide.img" alt="">
                </div>
                <span class="truth--text">{{slide.intro}}</span>
              </slide>
            </carousel>
          </div>
          <!-- campaign list -->
        </div>
      </div>
      <!-- campaigns -->
      <div class="works" id="ourwork">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="z-d-0 perspective">
                <h2>實地調查</h2>
                <span>揭露污染真相</span>
              </div>
              <div class="z-d-1 item--list">
                <div class="item" v-for="research in researches">
                  <div class="item--img">
                    <img :src="research.img" alt="">
                  </div>
                  <div class="text">
                    <p>{{ research.title }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="perspective">
                <h2>群眾力量</h2>
                <span>向企業施壓</span>
              </div>
              <div class="z-d-1 item--list">
                <div class="item" v-for="mobilization in mobilizations">
                  <div class="item--img">
                    <img :src="mobilization.img" alt="">
                  </div>
                  <div class="text">
                    <p>{{ mobilization.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--works -->
    </div>
    <!-- container -->
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "beach",
  data() {
    return {
      showResearch: false,
      showMobilizations: false,
      truth: [
        {
          key: 1,
          number: "01",
          intro: "全球每年1,270萬噸塑膠垃圾流入海洋",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/GP0STR1T3_ss.jpg"
        },
        {
          key: 2,
          number: "02",
          intro: "香港多處海岸，從南ㄚ島到西貢，無一倖免",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/r12_ss.jpg"
        },
        {
          key: 3,
          numer: "03",
          intro: "每3隻海龜就有1隻吃過塑膠垃圾",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/GP0STPYWJ_ss.jpg"
        },
        {
          key: 4,
          intro: "微塑膠污染海鮮，危害食物鏈",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/GP0STPX0B_ss.jpg"
        },
        {
          key: 5,
          intro: "在香港，十年之內塑膠垃圾急升25%",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/IMAG6843_ss.jpg"
        },
        {
          key: 6,
          intro: "快餐業濫用即棄塑膠，製造大量垃圾",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/IMG_9421_ss.JPG"
        }
      ],
      researches: [
        {
          title: "發表報告，揭露全球超過170種海鮮含有微塑膠",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/seafood_ss.JPG"
        },
        {
          title: "實地調查，發現超過200件化妝品含微塑膠",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/microbeads-pr_s.jpg"
        },
        {
          title: "實地調查，全港麥當勞每日午餐時段，派出超過20萬件即棄塑膠製品",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/mcds-plastic.JPG"
        },
        {
          title: "實地調查，香港海域微塑膠和即棄塑膠污染現況",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/plastic-beach.jpg"
        }
      ],
      mobilizations: [
        {
          title: "公眾聯署促使LG、Kosé、Estée Lauder和Amway公布淘汰微塑膠的承諾",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/petitions-microbeads.jpg"
        },
        {
          title: "超過7,000名公眾聯署促使屈臣氏、759阿信屋承諾淘汰微塑膠",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/corporate-microbeads.jpg"
        },
        {
          title: "麥當勞初步回應超過11,000位市民聯署要求停止濫派即棄塑膠",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/mcds-change.JPG"
        },
        {
          title: "要求快餐業停派即棄塑膠，鼓勵市民走塑，有待你一起發聲！",
          img:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/plastic-fastfood.jpg"
        }
      ]
    };
  },
  methods: {
    emit: function() {
      this.$emit("modalOpen", true);
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
<style lang="scss" scoped>
.hero--header {
  position: relative;
  padding-top: 15rem;
  margin-bottom: -20rem;
  padding-bottom: 30rem;
  background-image: url("https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/r14_l.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a0a0a;
    opacity: 0.5;
  }
}

.hero--inner {
  position: relative;
  text-align: center;
  z-index: 1;
  .title {
    h1 {
      font-size: 4rem;
      font-weight: bold;
      color: #fff;
    }
  }
  .divider {
    width: 30px;
    background-color: #fff;
  }
  .actions {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .cta {
      width: 100%;
      text-align: center;
      padding: 10px 30px;
      border: none;
    }
  }
}

.works {
  padding: 60px 0;
  .perspective {
    text-align: center;
    border: 1px solid #559f0c;
    color: #559f0c;
    padding: 1rem;
    margin: 2rem auto;
    background-color: #fff;
    cursor: pointer;
    h2 {
      font-size: 4rem;
    }
  }
  .item--list {
    .item {
      position: relative;
      background-color: #fff;
      display: flex;
      &:nth-child(even) {
        flex-flow: row-reverse;
      }
      .item--img {
        width: 50%;
        img {
          z-index: 1;
        }
      }
      .text {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
      }
    }
  }
}

.campaigns {
  .campaign--list {
  }
}
.VueCarousel {
  .VueCarousel-wrapper {
    .VueCarousel-inner {
      .VueCarousel-slide {
        padding: 0 10px;
        cursor: -webkit-grabbing;
        text-align: center;
        border: none;
        img {
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
