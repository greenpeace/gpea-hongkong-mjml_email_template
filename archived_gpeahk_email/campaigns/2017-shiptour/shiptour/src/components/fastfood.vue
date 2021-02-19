<template>
  <div class="ff">
    <div class="header">
      <div class="title">
        <h1>各大快餐品牌<br />你們能幫幫忙嗎？</h1>
        <div class="divider"></div>
        <p>幫地球減塑，不論本地或國際連鎖快餐店，都應淘汰使用一時、污染一世的即棄塑膠製品。</p>
        <p>香港人經常光顧的快餐店，包括<strong>大家樂、大快活、肯德基、麥當勞、美心快餐、Pacific Coffee、星巴克、吉野家</strong>，都應善盡企業社會責任，實踐減塑。</p>
        <p><strong
            style="cursor: pointer;"
            v-scroll-to="'#card'"
          >點擊查閱</strong>各大快餐店的表現 ，立即聯署，綠色和平會把你的簽名交給快餐企業負責人，傳遞你的訴求！</p>
        <p class="btn__center">
          <button
            class="z-d-1 cta cta__green"
            v-scroll-to="'#enform'"
          >立即聯署</button>
        </p>
      </div>
    </div>
    <!-- header -->
    <div class="container">
      <div class="vs">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5">
            <div class="board z-d-1">
              <div
                class="i"
                v-for="industry in industries"
                v-bind:key="industry.name"
              >
                <router-link
                  :to="`/fastfood/${industry.name}`"
                  v-scroll-to="{
     el: '#card',
     offset: -70
 }"
                  tag="a"
                  active-class="active"
                >
                  <img
                    :src="industry.logo"
                    alt=""
                  >
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7">
            <div
              class="z-d-1 card"
              id="card"
            >
              <div
                class="title"
                v-bind:id="selected.name"
              >
                <h2>{{ selected.title }}</h2>
              </div>
              <div
                class="logo"
                v-show="selected.name != 'industry' "
              >
                <img
                  v-bind:src="selected.logo"
                  alt=""
                >
              </div>
              <div
                class="intro row"
                v-show="selected.name != 'industry' "
              >
                <div class="score col-12 col-md-5">
                  <h3>{{selected.score}}</h3>
                </div>
                <div class="col-12 col-md-7">
                  <div
                    class="ranking"
                    v-html="selected.ranking"
                  ></div>
                </div>
              </div>
              <div class="info">
                <div
                  v-if="selected.expanded"
                  class="usage"
                  v-html="selected.usage"
                ></div>
                <div class="text-center">
                  <i
                    v-if="!selected.expanded"
                    @click="selected.expanded =! selected.expanded"
                    class="material-icons"
                  >keyboard_arrow_down</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
    </div>
  </div>
  <!-- ff -->
</template>
<script>
export default {
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  name: "fastfood",
  props: ["name"],
  data() {
    return {
      // survey: survey,
      loading: false,
      selected: null,
      error: null,
      industries: {
        cafedecoral: {
          name: "cafedecoral",
          title: "大家樂 Café de Coral",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/cafedecoral-logo.png",
          score: "C-",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>C</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>D</span></li>
                <li>減廢倡議 <span>C</span></li>
              </ul>
          `,
          description: `<p>大家樂快餐在港約有150間分店。其所屬的大家樂集團，旗下還有一粥麵、Oliver's Super Sandwiches等快餐業務，一共超過200間分店。集團雖表示致力減少包裝廢物，但沒有清楚說明減塑方案。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-check"><i class="material-icons">check</i> 有公開減塑政策</li>
          <li class="material-close"><i class="material-icons">close</i> 有堂食分店仍全數使用即棄餐具</li>
          <li class="material-check"><i class="material-icons">check</i> 研究於2018年起為堂食逐步減少提供塑膠餐具</li>
          </ul>`
        },
        fairwood: {
          name: "fairwood",
          title: "大快活 Fairwood",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/fairwood-logo.png",
          score: "E+",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>E</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>E</span></li>
                <li>減廢倡議 <span>E</span></li>
              </ul>
          `,
          description: `<p>全港有超過100間分店的大快活快餐，只提到會尋找更環保的包裝物料，並沒有明確的減塑方案。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-close"><i class="material-icons">close</i> 沒有公開資料顯示減塑措施及政策</li>
          <li class="material-check"><i class="material-icons">check</i> 堂食大部分用可重用餐具</li>
          <li class="material-close"><i class="material-icons">close</i> 沒有任何公開資料顯示其減塑政策</li>
          </ul>`
        },
        kfc: {
          name: "kfc",
          title: "肯德基 KFC",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/kfc-logo.png",
          score: "E",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>E</span></li>
                <li>實際措施與執行情況 <span>E</span></li>
                <li>長遠減塑計劃 <span>E</span></li>
                <li>減廢倡議 <span>E</span></li>
              </ul>
          `,
          description: `<p>香港肯德基在港約有70間分店，與美心快餐、香港星巴克同屬怡和集團。但該快餐品牌及其集團均沒有任何減塑措施。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-close"><i class="material-icons">close</i> 沒有公開資料顯示減塑措施及政策</li>
          <li class="material-close"><i class="material-icons">close</i> 全線分店的堂食及外賣均使用即棄餐具</li>
          <li class="material-close"><i class="material-icons">close</i> 沒有任何公開資料顯示其減塑政策</li>
          </ul>`
        },
        mcdonalds: {
          name: "mcdonalds",
          title: "麥當勞 McDonald's",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/mcds-logo.png",
          score: "C-",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>D</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>C</span></li>
                <li>減廢倡議 <span>C</span></li>
              </ul>
          `,
          description: `<p>目前約有240間分店的麥當勞正推行「向飲管Say No」、不會主動提供膠袋予購買單杯飲品的顧客，並在McCafé使用可重用餐具。至於公眾與我們的訴求，包括立即淘汰即棄塑膠餐具（包括發泡膠）、為顧客提供環保可重用餐具，以及推出措施鼓勵顧客自攜餐具，則有待麥當勞總部進一步的回覆。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-close"><i class="material-icons">close</i> 無透露即棄塑膠使用量的資訊</li>
          <li class="material-close"><i class="material-icons">close</i> 全線分店的堂食及外賣均使用即棄餐具</li>
          <li class="material-check"><i class="material-icons">check</i> 將「塑膠購物袋收費」用於推動社會減廢</li>
          </ul>`
        },
        maximsmx: {
          name: "maximsmx",
          title: "美心快餐 Maxim's MX",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/maximsmx-logo.png",
          score: "C",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>C</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>C</span></li>
                <li>減廢倡議 <span>C</span></li>
              </ul>
          `,
          description: `<p>美心快餐約有50間分店，與香港星巴克、香港肯德基同屬怡和集團。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-check"><i class="material-icons">check</i> 有記錄即棄塑膠的使用量</li>
          <li class="material-close"><i class="material-icons">close</i> 有堂食分店仍全數使用即棄餐具</li>
          <li class="material-check"><i class="material-icons">check</i> 於2018年1月前完全淘汰發泡膠容器</li>
          </ul>`
        },
        pacificcoffee: {
          name: "pacificcoffee",
          title: "Pacific Coffee",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/pacificcoffee-logo.png",
          score: "C-",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>C</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>D</span></li>
                <li>減廢倡議 <span>C</span></li>
              </ul>
          `,
          description: `<p>Pacific Coffee在香港約有100間分店。Pacific Coffee提供折扣優惠，鼓勵顧客自攜環保杯、回收杯蓋，但沒有解決其他即棄塑膠餐具所造成的問題。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-check"><i class="material-icons">check</i> 有公開減塑政策</li>
          <li class="material-close"><i class="material-icons">close</i> 有堂食分店仍全數使用即棄餐具</li>
          <li class="material-check"><i class="material-icons">check</i> 於2018年1月起不再主動向外賣顧客提供塑膠刀叉</li>
          </ul>`
        },
        starbucks: {
          name: "starbucks",
          title: "星巴克 Starbucks",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/starbucks-logo.png",
          score: "D",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>D</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>E</span></li>
                <li>減廢倡議 <span>C</span></li>
              </ul>
          `,
          description: `<p>香港星巴克有超過150間分店，除了提供折扣優惠予自攜環保杯的顧客，未有其他減塑措施。香港星巴克與美心快餐、香港肯德基同屬怡和集團。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-close"><i class="material-icons">close</i> 無透露即棄塑膠使用量的資訊</li>
          <li class="material-close"><i class="material-icons">close</i> 有堂食分店仍全數使用即棄餐具</li>
          <li class="material-check"><i class="material-icons">check</i> 有措施鼓勵顧客自攜餐具</li>
          </ul>`
        },
        yoshinoya: {
          name: "yoshinoya",
          title: "吉野家 Yoshinoya",
          logo:
            "https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/yoshinoya-logo.png",
          score: "E+",
          expanded: false,
          ranking: `
              <ul>
                <li>記錄與資訊公開程度 <span>E</span></li>
                <li>實際措施與執行情況 <span>D</span></li>
                <li>長遠減塑計劃 <span>E</span></li>
                <li>減廢倡議 <span>D</span></li>
              </ul>
          `,
          description: `<p>吉野家在香港有超過50間分店，並沒有實行任何減塑措施。</p>`,
          usage: `<ul class="usage-list">
          <li class="material-close"><i class="material-icons">close</i> 沒有公開資料顯示減塑措施及政策</li>
          <li class="material-check"><i class="material-icons">check</i> 堂食大部分用可重用餐具</li>
          <li class="material-close"><i class="material-icons">close</i> 沒有任何公開資料顯示其減塑政策</li>
          </ul>`
        },
        industry: {
          name: "industry",
          title: "所有快餐店都要走塑",
          logo: "",
          score: "",
          expanded: true,
          ranking: "",
          description: "",
          usage: `<strong><p>點擊查閱香港8大快餐連鎖店的減塑成績表</p></strong><p><p><strong>十年之間香港塑膠垃圾急升25%</strong>。為了快捷便利，快餐連鎖店每日都派出大量不必要的即棄塑膠製品，包括難以分解的膠杯、膠袋、膠樽等等。很多時候不是我們不想減塑，而是在消費時缺乏選擇，無意間製造大量塑膠垃圾，迫使海洋生物喝下「塑膠濃湯」。</p>
            <p>早前，有<strong>超過15,000位市民聯署，要求快餐龍頭麥當勞帶頭減塑</strong>，堂食提供大家可重用的餐具選擇、外賣讓市民自攜容器盛裝，並全面淘汰發泡膠。我們需要更多企業加入減塑行列，才可望有效降低塑膠垃圾量，讓海洋無膠浪、陸地無膠山。</p>
            `
        }
      }
    };
  },
  methods: {
    fetchData() {
      this.selected = this.industries[this.$route.params.name];
    },
    emit: function() {
      this.$emit("modalOpen", true);
    }
  },
  components: {}
};
</script>

<style lang="scss">
.ff {
  .header {
    position: relative;
    padding-top: 15rem;
    margin-bottom: -15rem;
    padding-bottom: 15rem;
    background-image: url("https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/pc-dec-b.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    .title {
      position: relative;
      z-index: 1;
      width: 90%;
      max-width: 800px;
      margin: 0 auto;
      h1 {
        margin-bottom: 2rem;
        color: #fff;
      }
      p {
        color: #fff;
      }
      .divider {
        background-color: #fff;
        width: 80px;
      }
      .cta {
        margin-top: 2rem;
      }
    }
    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0a0a0a;
      opacity: 0.7;
    }
  }

  .vs {
    padding: 3rem 0;
    position: relative;
    .board {
      background-color: #fff;
      padding: 1rem;
      border: 1px solid #eee;
      border-radius: 4px;
      max-width: 500px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .i {
        padding: 1rem;
        width: 33%;
        display: flex;
        flex-wrap: wrap;
        img {
          transition: all 0.2s ease-out;
          &:hover {
            transform: scale(1.1);
          }
        }
        a.active {
          img {
          }
        }
      }
    }
    .card {
      max-width: 600px;
      margin: 0 auto;
      padding: 4rem 1rem;
      h2 {
        text-align: center;
        letter-spacing: 0px;
        margin-bottom: 2rem;
      }
      .logo {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        img {
          width: 40vw;
          max-width: 150px;
        }
      }
      .intro {
        .score {
          display: flex;
          justify-content: center;
          align-items: center;
          h3 {
            text-align: center;
            font-size: 10rem;
            color: #005c42;
            font-weight: bold;
          }
        }
        .ranking {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          text-align: center;
          li {
            list-style: none;
            font-size: 1.6rem;
            span {
              font-size: 1.8rem;
              font-weight: bold;
              color: #f03e3e;
              margin-left: 10px;
            }
          }
        }
      }
      .usage {
        .usage-list {
          list-style: none;
          text-align: center;
          li {
            line-height: 2;
            font-weight: bold;
            .material-icons {
              font-size: 2rem;
              font-weight: bold;
            }
            &.material-close {
              color: #f03e3e;
            }
            &.material-check {
              color: #37b24d;
            }
          }
        }
      }
    }
  }
}
</style>

