<template>
  <div class="research">
    <div class="btn-floating">
      <div class="toggle">
        <img
          @click="showMenu =! showMenu"
          class="rw"
          src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/rainbow-warrior.svg"
          alt=""
        >
        <fade-transition :duration="400">
          <ul
            class="dropdown-menu"
            v-show="showMenu"
          >
            <li><a
                v-scroll-to="'#unit'"
                @click="showMenu = false"
                href="#"
              >調研部門</a></li>
            <li><a
                v-scroll-to="'#team'"
                @click="showMenu = false"
                href="#"
              >團隊專訪</a></li>
            <li><a
                v-scroll-to="'#flow'"
                @click="showMenu = false"
                href="#"
              >研究過程</a></li>
            <li><a
                v-scroll-to="'#faq'"
                @click="showMenu = false"
                href="#"
              >塑膠知識</a></li>
            <li><strong style="color: #559f0c;"><a
                  @click="showLogbook = false"
                  href="https://act.greenpeace.org/page/4663/donate/1?ref=2017-shiptour_research"
                  target="_blank"
                >支持我們</a></strong></li>
          </ul>
        </fade-transition>
      </div>
    </div>
    <div class="header fdb-block">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="da-2 col col-md-10 col-lg-8 text"
            :class="{animated: rendered, fadeInUp: rendered}"
            v-visible="rendered"
          >
            <h1>彩虹勇士號<br />海洋塑膠污染研究</h1>
            <div class="divider"></div>
            <div class="text">
              <p>你花5分鐘飲完的那杯凍飲，丟棄的那個膠杯、飲管、杯蓋，丟在回收桶後，最終真的有被回收嗎？</p>
              <p>香港每日丟棄2,183公噸塑膠，飲管、膠杯、發泡膠盒是海岸最常見的垃圾，奈何塑膠回收率只有11%，可見大部分塑膠垃圾有可能落入堆填區或自然環境中。</p>
              <p>要真正了解塑膠污染問題，唯有實地研究！<strong>2018年1月，彩虹勇士號會航行至多個海岸，由科學家及綠色和平合作實地打撈塑膠垃圾及採樣。</strong>想了解香港海域塑膠污染調查研究嗎？加入我們，一起揭露塑膠污染真相！</p>
            </div>
            <p class="logbook--icon text-center">
              <i
                class="material-icons"
                @click="showLogbook =! showLogbook"
              >my_location</i>
            </p>
          </div>
          <div class="expand__more">
            <i
              class="material-icons"
              v-scroll-to="'#unit'"
            >expand_more</i>
          </div>
        </div>
      </div>
    </div>
    <!-- -->
    <fade-transition>
      <div
        class="logbook"
        v-if="showLogbook"
      >
        <div class="logbook--inner z-d-1">
          <span
            class="logbook__close"
            @click="showLogbook = false"
          >
            <i class="material-icons">remove_circle</i>
          </span>
          <div class="logbook--map">
            <h2 class="text-center">海洋塑膠垃圾<br />採樣路線圖</h2>
            <div class="map-responsive">
              <div
                class="frame--loading"
                v-visible="!frameLoaded"
              >
                <svg
                  class="spinner"
                  width="65px"
                  height="65px"
                  viewBox="0 0 66 66"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    class="path"
                    fill="none"
                    stroke-width="6"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                  ></circle>
                </svg>
              </div>
              <lazy-component>
                <iframe
                  v-visible="frameLoaded"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1e3Om4ik87zc14epFtcU1D4hHGdvmr08J&ll=22.28861,114.15668&t=h&z=9&output=embed"
                  width="640"
                  height="400"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  frameborder="0"
                  style="border:0"
                ></iframe>
              </lazy-component>
            </div>
          </div>
          <p class="options">
            <a
              class="btn btn-shadow"
              href="https://act.greenpeace.org/page/4663/donate/1?ref=2017-shiptour_research"
              target="_blank"
            >支持我們</a>
            <a
              class="btn btn-white btn-shadow ml-4"
              @click.prevent="showLogbook = false"
              v-scroll-to="'#unit'"
            >了解更多</a>
          </p>
        </div>
      </div>
    </fade-transition>
    <!-- path -->
    <div
      class="unit"
      id="unit"
    >
      <div class="container">
        <div class="row wrapper align-items-center">
          <div class="col-12 col-md-6">
            <h2>綠色和平調研部門<br />（Research Unit）</h2>
            <p class="text-h3">調研部門（RU）像是綠色和平的科研資料庫，部門內的每位研究員都有科學研究的背景，為各個項目提供專業意見，確保綠色和平的公信力。除了做桌面資料搜集，研究員亦會需要設計問卷調查、採樣化驗、或是與科學家或教授合作做研究。</p>
          </div>
          <div class="col-12 col-md-6 m-auto m-md-0 ml-md-auto">
            <div class="z-d-1 unit--img__right">
              <img
                src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/GP0STQZMD_Web_size_with_credit_line.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row wrapper align-items-center">
          <div class="col-12 col-md-6 m-auto m-md-0 ml-md-auto">
            <div class="z-d-1 unit--img__left">
              <img
                src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/GP0STQWHJ_Web_size_with_credit_line.jpg"
                alt=""
              >
            </div>
          </div>
          <div class="col-12 col-md-6 ml-auto">
            <h2>彩虹勇士號<br />海洋塑膠污染研究</h2>
            <p>一艘船的科研航行需要非常多的部門和人協力才可以實現，而行前也需要非常多的準備工作。RU研究員主要負責與科學家訂立科研目標及計劃、採樣地點及方法、規劃航行路線及準備相關法律文件等。</p>
            <collapse-transition>
              <div
                v-show="readmore"
                mode="in-out"
              >
                <p>當彩虹勇士號來到香港時，RU研究員和其他部門的同事需要根據之前達成的共識協力規劃每天的詳細工作時間表和分工，例如每天有多少人需要在船上，和每小時各人的具體工作。在航行 過程中，RU研究員也會在船上處理一切科學研究相關的工作，確保事情按計劃發生。航行結束後，RU研究員還會繼續與科學家團隊緊密合作，將研究結果寫成專業報告，讓公眾全面理解海洋塑膠污染。
                </p>
              </div>
            </collapse-transition>
            <p class="mt-4 text-center">
              <a
                v-if="!readmore"
                class="z-d-1 btn"
                @click="readmore = true"
              >了解更多</a>
            </p>
          </div>
        </div>
        <!-- row -->
        <div class="row wrapper align-items-center">
          <div class="col-12 col-md-6">
            <h2>與科學研究部門<br />（Science Unit）緊密合作</h2>
            <p class="text-h3">科學研究部門（SU）駐紮在英國的Exter大學，擁有獨立實驗室，定期就不同議題進行檢測實驗，例如檢驗微塑膠產品、在衣物上檢測出有害化學物等。RU 和 SU 兩者關係密切，一般香港的 RU 研究員會為香港的項目把關，當要進行檢測時，就會與 SU 合作，一起進行專業的科研工作。</p>
          </div>
          <div class="col-12 col-md-6 m-auto m-md-0 ml-md-auto">
            <div class="z-d-1 unit--img__right">
              <img
                src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/GP0STQ6O1_Web_size_with_credit_line.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
    </div>
    <!-- unit -->
    <section class="section-cta-1 fdb-block">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <div class="fdb-box br-0">
              <div class="box--bg">
              </div>
              <h1>揭露塑膠污染真相</h1>
              <p class="text-h3">
                唯有透過實地研究，我們才能知道環境真相。
                <br />還原香港乾淨海岸，見證海洋塑膠污染，啟航，請你與我們同行！</p>
              <p class="mt-4">
                <a
                  class="btn"
                  href="https://act.greenpeace.org/page/4663/donate/1?ref=2017-shiptour_research"
                  target="_blank"
                >支持我們</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- call to action -->
    <div
      class="team"
      id="team"
      v-show="showTeam"
    >
      <div class="container">
        <div class="title">
          <h1>研究團隊專訪</h1>
          <div class="text">
            <p>彩虹勇士號的航行需要14人，包括船長，大副，二副，三副，工程師，無線電操作員，甲板長，水手，船醫，廚師等等。為了進行是次研究，綠色和平與香港教育大學霍年亨博士合作，組成10人的科學團隊，由霍年亨博士作指導採樣程序及決策、2位科學協調人員負責與科學團隊和船員的溝通工作、7位香港教育大學的科研助手和學生負責取樣，還有攝影師負責紀錄科學研究的過程。</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="members row align-items-end">
          <div
            class="member text-center col-12 col-lg-4"
            v-for="(member, i) in members"
            :key="i"
          >
            <div
              class="name"
              v-html="member.name"
            ></div>
            <div
              class="member--img"
              :class="member.class"
              v-html="member.img"
            ></div>
            <button
              class="btn"
              @click="member.show =! member.show"
            >了解更多</button>
            <fade-transition>
              <div
                class="dialog"
                v-show="member.show"
              >
                <div class="dialog--inner">
                  <span
                    class="dialog__close"
                    @click="member.show = false"
                  >
                    <i class="material-icons">remove_circle</i>
                  </span>
                  <div
                    class="about"
                    v-html="member.about"
                  ></div>
                </div>
              </div>
            </fade-transition>
          </div>
        </div>
      </div>
    </div>
    <!-- team -->
    <div
      class="flow"
      id="flow"
    >
      <div class="container">
        <!--
        <div class="procedure">
          <div class="row justify-content-center">
            <div class="text-center col-12 col-lg-10">
              <img
                class="graphic z-d-1"
                src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/procedures.png"
                alt=""
              >
            </div>
            <div class="text-center col-12 col-lg-10">
              <img
                class="graphic z-d-1"
                src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/types.png"
                alt=""
              >
            </div>
            <div class="text-center col-12 col-lg-10">
              <img
                class="graphic z-d-1"
                src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/body.png"
                alt=""
              >
            </div>
          </div>
        </div>
        -->
        <lazy-component>
          <iframe
            style="border:none;width:100%;height:738px;"
            src="//e.issuu.com/embed.html#1191242/68403093"
            allowfullscreen
          ></iframe>
        </lazy-component>
      </div>
    </div>
    <!-- flow -->
    <div
      class="faq"
      id="faq"
    >
      <div class="container">
        <h1>更多塑膠小知識</h1>
        <div class="faq--section">
          <ol>
            <li
              class="z-d-0"
              v-for="(ask,i) in faq"
              :key="i"
            >
              <div
                class="q"
                v-on:click="expand(ask)"
              ><span>{{i+1}}</span>{{ask.question}}</div>
              <collapse-transition>
                <div
                  class="a"
                  v-show="ask.selected"
                  v-html="ask.ans"
                ></div>
              </collapse-transition>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <!-- faq -->
    <div class="reference">
      <div class="container">
        <h1>參考資料</h1>
        <p
          v-show="!showReference"
          class="showReference text-center"
        ><i
            v-b-toggle.reference
            class="material-icons"
            @click="showReference =! showReference"
          >arrow_drop_down</i></p>
        <b-collapse id="reference">
          <ol
            v-show="showReference"
            class="reference--list"
            id="reference"
          >
            <li
              v-for="(reference,i) in references"
              :key="i"
              :id='"ref-" + (i+1)'
            >
              <mark>{{reference}}</mark>
            </li>
          </ol>
        </b-collapse>
        <p
          v-show="showReference"
          class="showReference text-center"
        ><i
            v-b-toggle.reference
            class="material-icons"
            @click="showReference =! showReference"
          >arrow_drop_up</i></p>
      </div>
    </div>
    <!-- reference -->
  </div>
  <!-- research -->
</template>
<script>
import { FadeTransition, CollapseTransition } from "vue2-transitions";
export default {
  name: "research",
  components: {
    FadeTransition,
    CollapseTransition
  },
  data() {
    return {
      top: 0,
      left: 0,
      rendered: false,
      frameLoaded: false,
      visible: false,
      showMenu: false,
      showLogbook: false,
      showFlow: true,
      showTeam: true,
      showReference: false,
      readmore: false,
      procedures: [
        "把船速減慢至2節（2 knots）",
        "紀錄海水鹽度、時間、地點、天氣情況",
        "妥善保存樣本，在實驗室仔細點算塑膠碎片，按五大類型作初步分類",
        "利用FTIR-傅立葉紅外線光譜儀分析各種碎片的塑膠成分",
        "把Manta Net繫於彩虹勇士號兩旁並放入海中,再採集樣本"
      ],
      types: [
        {
          name: "聚酯纖維 Polyester",
          floating: true,
          source: "衣服"
        },
        {
          name: "聚對苯二甲酸乙酯 (PET) Polyethylene terephthalate",
          floating: true,
          source: "膠樽，食物容器"
        },
        {
          name: "塑化聚氯乙烯 (PVC) Polyvinyl chloride",
          floating: true,
          source: "塑膠水管，塑膠地板，洗澡浴簾"
        },
        {
          name: "聚苯乙烯 / 發泡膠 (PS) Polystyrene",
          floating: true,
          source: "發泡膠，膠杯，即棄餐具"
        },
        {
          name: "HDPE",
          floating: false,
          source: "膠袋, 洗滌劑容器, 化妝品容器, 藥品容器， 繩索, 魚網"
        },
        {
          name: "LDPE",
          floating: false,
          source: "食物包裝紙，膠袋，化妝品容器, 食品容器"
        },
        {
          name: "PP",
          floating: false,
          source: "塑膠樽蓋，吸管"
        },
        {
          name: "PS",
          floating: false,
          source: "發泡膠，膠杯，即棄餐具"
        }
      ],
      faq: [
        {
          id: "faq1",
          number: 1,
          selected: false,
          question: "Manta Net是什麼？",
          ans: `<p>Manta Net是一個模仿鬼蝠魟設計的拖網，有長1米木製的雙翼和大小為16厘米 x 87厘米的網口，拖網末端還帶著一個孔徑為0.333毫米的採集網。這設計令Manta Net可以在水面上拖行，收集水面上的塑膠微粒或碎片，從而計算海洋表面塑膠碎片在固定時間和空間下的分佈比例。</p>
          <p><img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/mantanet_v2.jpg" alt=""></p>
          `
        },
        {
          id: "faq2",
          number: 2,
          selected: false,
          question: "Manta Net 可以撈多大的塑膠呢？",
          ans: `<p>Manta net 雖然可以撈起細小的塑膠碎片，但是無法撈起小於0.333毫米的膠微粒或是從合成衣物上掉下的微纖維。</p>`
        },
        {
          id: "faq3",
          number: 3,
          selected: false,
          question: "如果不小心撈了海洋生物，綠色和平會怎樣處理？",
          ans: `<p>當我們把 Manta net 拿回到船上之後會立刻仔細檢示有沒有收集到海洋生物如魚類，如有我們妥善地把它們送回大海中。</p>`
        },
        {
          id: "faq4",
          number: 4,
          selected: false,
          question:
            "除了在水面上拖行manta net 取得塑膠碎片樣本外，你們還會紀錄什麼資料？",
          ans: `<p>在拖網的過程中，我們會同時記錄海水的鹽度(salinity)，打撈到的大型塑膠垃圾，GPS 座標，採樣的時間和天氣情況。</p>
          <div class="row justify-content-center">
                  <div class="col-3">
                    <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/s.svg" alt="">
                  </div>
                  <div class="col-3">
                    <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/time.svg" alt="">
                  </div>
                  <div class="col-3">
                    <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/pos.svg" alt="">
                  </div>
                  <div class="col-3">
                    <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/weather.svg" alt="">
                  </div>
                </div>
          `
        },
        {
          id: "faq5",
          number: 5,
          selected: false,
          question: "大型塑膠垃圾打撈後會怎樣進行分析？",
          ans: `<p>我們會用人手把大型塑膠垃圾按下表分類</p>
<table class="table">
  <thead>
    <tr>
      <th scope="col">垃圾類別</th>
      <th scope="col">包裝紙語言</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1) 食品包裝 (糖果, 薯片, 啫喱等等)</td>
      <td>1) 繁體中文字</td>
    </tr>
    <tr>
      <td>2) 飲品樽蓋 (塑膠)</td>
      <td>2) 簡體中文字</td>
    </tr>
    <tr>
      <td>3) 飲品樽蓋 (金屬)</td>
      <td>2) 其他</td>
    </tr>
    <tr>
      <td>4) 飲品樽 (塑膠)</td>
      <td></td>
    </tr>
    <tr>
      <td>5) 飲品樽 (金屬)</td>
      <td></td>
    </tr>
    <tr>
      <td>6) 飲品罐</td>
      <td></td>
    </tr>
    <tr>
      <td>7) 膠袋</td>
      <td></td>
    </tr>
    <tr>
      <td>8) 紙袋</td>
      <td></td>
    </tr>
    <tr>
      <td>9) 六罐裝飲品膠環</td>
      <td></td>
    </tr>
    <tr>
      <td>10) 其它塑膠/發泡膠包裝</td>
      <td></td>
    </tr>
    <tr>
      <td>11) 其它塑膠樽(洗潔精,漂白水等等)</td>
      <td></td>
    </tr>
    <tr>
      <td>12) 香煙包裝</td>
      <td></td>
    </tr>
    <tr>
      <td>13) 打火機</td>
      <td></td>
    </tr>
  </tbody>
</table>
<p>由香港教育大學霍教授提供</p>
            `
        },
        {
          id: "faq6",
          number: 6,
          selected: false,
          question: "塑膠從那裡來的?",
          ans: `<p>各類型的塑膠垃圾，主要來自陸地和海洋。城市的塑膠垃圾從海岸，或隨著去水渠、河流飄流，最後落入海洋；而各類型的水上活動，海岸船隻活動等等都有機會讓塑膠垃圾直接進入海洋。</p>
              <p>塑膠因陽光照射而碎裂成細小的塑膠碎片，即使破碎得再小，依然很難分解掉，變成微塑膠。它們隨水漂流，直到被打撈起，或者被海洋生物或雀鳥誤食後進入了食物鏈，形成另一種污染。</p>
            `
        },
        {
          id: "faq7",
          number: 7,
          selected: false,
          question: "海洋中到底有多少塑膠？",
          ans: `<p>海洋中的塑膠垃圾雖然沒有一個確切的統計數字，但根據量化理論模型推斷，有多於5.25兆件、重達268,940噸的塑膠碎片在海洋中飄流，而這個數字並不包括沉積在海床和沙灘上的塑膠。</p>
            `
        },
        {
          id: "faq8",
          number: 8,
          selected: false,
          question: "海洋生物進食微塑膠後會怎樣？",
          ans: `<p>海洋生物會以不同的途徑攝取微塑膠：蠔和青口等海洋生物過濾海水進食；螃蟹以鼓動腮部然後把食物送進口中；魚類則以口部進食。浮游生物可能因其無選擇性的濾食而攝取了微塑膠；而選擇性覓食的物種，如魚類，則會因進食了受到污染的獵物，或是誤食微塑膠；某些物種更可能主動地吞食微塑膠 。其中值得關注的是，微塑膠和毒素會經由食物鏈轉移或累積。</p>
          <p><img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/chain_m.jpg" alt=""></p>
            `
        }
      ],
      members: [
        {
          class: "fok",
          name: `<h2>霍年亨博士</h2><span>（香港教育大學科學與環境學系助理教授）</span>`,
          img: `<div>
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/drfok.jpg" alt="">
          </div>
          `,
          show: false,
          about: `
          <h2>霍年亨博士</h2><span>（香港教育大學科學與環境學系助理教授）</span>
          <div class="divider"></div>
          <p>「從事環境研究的人需要很有耐性，面對重覆的工序必須「捱得悶」，但霍博士希望透過研究去尋找真相和實證，把本身未被關注的環境議題呈現出來。」</p>
                  <p>霍年亨博士早期的研究主要集中於水文學，在研究河流沉積物的過程當中，他意識到河流的固體廢物及塑膠污染問題嚴重，因此埋下了研究海洋垃圾的契機。後來，他從學術文章得悉人造纖維會在洗衣的過程流入海洋，從此便開始研究香港以及內地的微塑膠污染情況。是次與綠色和平合作，相信亦能令更多人了解並關注微塑膠污染問題。</p>
                  <p>霍博士認為社會正朝著一個正確的方向去處理微塑膠的污染，近年不同環保團體的努力，亦令社會大眾對微塑膠有更深的認知。他盼望大眾可以意識到自己也是環境的一部份，在關注微塑膠的污染問題時，不應只以人類為中心，同時亦應考慮到微塑膠對生態環境的影響，對其他環保議題亦然。雖然現階段難以化解微塑膠為環境帶來的危機，但大眾應避免使用磨沙產品，盡量「走塑」，拒絕即棄文化。同時，亦應反思並拒絕社會上的消費文化，在購物時考慮自己的實際需要；而生產商亦應採用更耐用的物料，不應鼓吹大眾使用壽命較短的消費品。</p>
                  <p>在政策層面上，霍博士深信若有關部門落實委聘顧問研究海洋含有微膠粒的情況，並立法管制含微膠珠的產品，定必是個好開始。</p>
          `
        },
        {
          class: "mollyandchun",
          name: `<h2>Molly</h2><span>（科學協調人員 / 綠色和平研究員）</span><br/><span>&</span><br/><h2>Chun</h2><span>（科學協調人員 / 綠色和平研究員）</span>`,
          img: `<div>
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/molly.jpg" alt="">
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/chun.jpg" alt="">
          </div>
          `,
          show: false,
          about: `
          <h2>Molly</h2><span>（科學協調人員 / 綠色和平研究員)</span><p>&</p><h2>Chun</h2><span>(科學協調人員 / 綠色和平研究員)</span>
          <div class="divider"></div>
          <p>「很多人會說海洋塑膠問題是"out of sight, out of mind"，但看不到，不等於問題不存在。到底會不會有一天，人類擁有所有的便利、科技、知識，但卻被塑膠淹沒了可以居住和休憩的地方？」</p>
                  <p>Molly和Chun認為塑膠污染是一個很嚴重的問題，但是不做科研的人卻未能了解污染的嚴重性 。今次彩虹勇士號來港進行實地研究，就是希望將問題呈現公眾眼前。</p>
                  <p>Molly在攻讀博士學位時，曾花6年時間到南極研究磷蝦生長。當時，Molly聽到了身邊很多在做海洋塑膠研究的朋友說，海龜、鯊魚、鳥、鯨魚，很多都因為誤食塑膠或者被其纏繞而死。</p>
                  <p>Chun是一個熱愛大自然的潛水教練，在學時在香港海域 ，由其是位於香港最北的小島東坪洲潛水研究石珊瑚生長。「香港雖然是一個繁忙的都市，但是四週的海是平靜美好的，水平面以下的世界更是一般香港人想像不了的，有如穿過了隨意門到了精緻的海底花園。但是不論在荒島還是在秘境，總會碰到塑膠垃圾 ，膠樽、膠袋通通浮在海面上或卡在石縫中，看到真的會心痛啊！」</p>
          `
        },
        {
          class: "chingyee",
          name: `<h2>Ching Yee</h2><span>（香港教育大學的科研助手）</span>`,
          img: `<div>
          <img src="https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/chingyee.jpg" alt="">
          </div>
          `,
          show: false,
          about: `
          <h2>Ching Yee</h2><span>（香港教育大學的科研助手）</span>
          <div class="divider"></div>
          <p>「投身海洋保育行業，是我的夢想，未來的旅程可能很漫長，但這段路的起點其實從綠色和平開始。」</p>
                  <p>去年，我成為了綠色和平香港辦公室的暑期實習生，當時是微塑膠項目的發展初期。那時我在實習報告寫了「即使環保可稱得上是普世價值，但科學實證仍然是引起大眾關注的重要一環」。這個想法源於當時我們發佈外國有關魚類及海洋生物吞食微塑膠的文獻研究，亦引用香港海域的微塑膠研究結果，提出人類可能因此進食了體內含有微塑膠的海產，讓大眾知道微塑膠正威脅我們的海洋生態，甚至食物鏈。可是，當時不少人著眼於香港的海產是否都含有微塑膠、微塑膠對人體有何害處等質疑，但基於學術上並未有相關的研究，我們只能作出推斷。</p>
                  <p>本以為塑膠對生態的威脅以及於生物中找到微塑膠已構成足夠的理由令大眾「走塑」，原來還需要更深入的科學實證去把環境議題呈現出來，才能進一步推動「走塑」。於是，我便於畢業論文研究香港烏頭吞食微塑膠的情況，嘗試透過環境研究尋求證據。當時我的腦海裡有一個矛盾，固然不希望自己在生物體內找出膠，但同時我又想找到香港海鮮含有微塑膠的證據，從而令大眾進一步正視塑膠危機。其實，微塑膠對生態做成的威脅是毋庸置疑的，無論為了人類的健康，還是單純為了海洋生態，我們都應該盡量「走塑」，在日常生活上也應多為環境著想。</p>
                  <p>而透過其他了解前線保育工作的經驗，我亦意識到從尋找科學實證，把值得關注的環境議題呈現出來，再把議題帶入社會討論和得到共識的重要性。希望是次與綠色和平的合作可以達致這個效果，同時亦希望進一步提昇自己的能力，未來可以繼續為保育海洋和環境出一分力。</p>
          `
        }
      ],
      references: [
        "Hong Kong Environmental Protection Department. (2016). Monitoring of Solid Waste in Hong Kong 2015. Hong Kong. Retrieved from https://www.wastereduction.gov.hk/sites/default/files/msw2015.pdf",
        "Yeung, P., Lam, A., Kwok, M., Leung, S., & Lee, S. (2016). Coastal Watch- Turning the Tide Against Marine Litter. WWF-Hong Kong. Retrieved from https://coastalwatch.hk/?wpdmdl=8099",
        "Hong Kong Environmental Protection Department. (2016). Monitoring of Solid Waste in Hong Kong 2015. Hong Kong. Retrieved from https://www.wastereduction.gov.hk/sites/default/files/msw2015.pdf",
        "Hong Kong Environmental Protection Department. (2016). Monitoring of Solid Waste in Hong Kong 2015. Hong Kong. Retrieved from https://www.wastereduction.gov.hk/sites/default/files/msw2015.pdf",
        "Miller, K., Santillo, D., & Johnston, P. (2016). Plastics in Seafood – full technical review of the occurrence, fate and effects of microplastics in fish and shellfish. Greenpeace, (July), 1–47.",
        "Life without Plastic. (2014). Plastics Summary. Retrieved from https://www.lifewithoutplastic.com/store/common_plastics_no_1_to_no_7#.WiDNjVWWaUm",
        "Li, W. C., Tse, H. F., & Fok, L. (2016). Plastic waste in the marine environment: A review of sources, occurrence and effects. Science of the Total Environment, 566–567, 333–349. http://doi.org/10.1016/j.scitotenv.2016.05.084",
        "Moore, C. J. (2008). Synthetic polymers in the marine environment: A rapidly increasing, long-term threat. Environmental Research, 108(2), 131–139. http://doi.org/10.1016/j.envres.2008.07.025",
        "Li, W. C., Tse, H. F., & Fok, L. (2016). Plastic waste in the marine environment: A review of sources, occurrence and effects. Science of the Total Environment, 566–567, 333–349. http://doi.org/10.1016/j.scitotenv.2016.05.084",
        "Eriksen, M., Lebreton, L. C. M., Carson, H. S., Thiel, M., Moore, C. J., Borerro, J. C., …Reisser, J. (2014). Plastic Pollution in the World’s Oceans: More than 5 Trillion Plastic Pieces Weighing over 250,000 Tons Afloat at Sea. PLoS ONE, 9(12). http://doi.org/10.1371/journal.pone.0111913",
        "Lusher, A. L., McHugh, M., & Thompson, R. C. (2013). Occurrence of microplastics in the gastrointestinal tract of pelagic and demersal fish from the English Channel. Marine Pollution Bulletin, 67(1–2), 94–99. http://doi.org/10.1016/j.marpolbul.2012.11.028",
        "Lusher, A. L., O’Donnell, C., Officer, R., & O’Connor, I. (2016). Microplastic interactions with North Atlantic mesopelagic fish. ICES Journal of Marine Science, 73(4), 1214–1225. http://doi.org/10.1093/icesjms/fsv241"
      ]
    };
  },
  methods: {
    toggleRender: function() {
      this.rendered = true;
      setTimeout(() => {
        this.showLogbook = true;
      }, 1000);
      setTimeout(() => {
        this.frameLoaded = true;
      }, 2000);
    },
    handleScroll: function(event) {
      var left = window.pageXOffset || document.documentElement.scrollLeft;
      var top = window.pageYOffset || document.documentElement.scrollTop;
      this.top = top;
      this.left = left;
    },
    expand(e) {
      this.faq.forEach(function(item) {
        item.selected = false;
      });
      e.selected = true;
    }
  },
  watch: {
    showLogbook: function(val) {
      var mybody = document.getElementsByTagName("BODY")[0];
      if (val) {
        mybody.classList.add("modal__active");
      } else {
        mybody.classList.remove("modal__active");
      }
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  mounted: function() {
    setTimeout(() => {
      this.toggleRender();
    }, 500);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss">
$ocean: #0077be;
$dg: #005f67;
.btn-floating {
  @media (max-width: 576px) {
    display: inline-block;
  }
  position: fixed;
  display: none;
  z-index: 100;
  right: 15px;
  bottom: 15px;
  width: 56px;
  height: 56px;
  transition: 0.3s;
  cursor: pointer;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  .toggle {
    position: relative;
    .dropdown-menu {
      position: absolute;
      min-width: 120px;
      display: inline-block;
      top: auto;
      left: auto;
      right: 0;
      bottom: calc(100% + 10px);
      li {
        padding: 1rem 3rem;
        margin-bottom: 1rem;
        font-size: 1.4rem;
        text-align: center;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .rw {
    line-height: 56px;
    width: inherit;
    height: inherit;
    display: inline-block;
    text-align: center;
    transform-origin: 50% 0;
    animation: swinging 3.5s ease-in-out forwards infinite;
  }
}

.research {
  .section-cta-1 {
    padding: 10rem 0;
    background-image: url("https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/research/F9669_m.JPG");
    background-position: center;
    background-repeat: no-repeat;
    .fdb-box {
      background-color: rgba(255, 255, 255, 0.85);
      color: #0a0a0a;
      position: relative;
      padding: 50px 20px;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
      .box--bg {
        position: absolute;
        filter: blur(10px); /* Firefox 35+, eventually all */
      }
      h1 {
        margin-bottom: 2rem;
        font-weight: bold;
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
  .btn {
    font-size: 1.6rem;
    padding: 8px 30px;
    margin-top: 2rem;
  }
  .header.fdb-block {
    position: relative;
    background-image: url("https://secured-static.greenpeace.org/hk/Global/hk/code/2017/shiptour/images/bg1b_l.jpg");
    background-position: center bottom;
    padding: 15rem 0 15rem;
    @media (max-width: 576px) {
      min-height: 100vh;
      padding: 10rem 0 10rem;
    }
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
    .text {
      position: relative;
      z-index: 1;
      color: #fff;
      text-align: center;
      h1 {
        margin-bottom: 2rem;
      }
      .divider {
        background-color: #fff;
        margin: 2rem auto;
        width: 30px;
      }
    }
    .logbook--icon {
      margin-top: 6rem;
      i {
        position: relative;
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          content: "";
          width: 3rem;
          height: 3rem;
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          opacity: 0;
          -webkit-animation: sdb 3s infinite;
          animation: sdb 3s infinite;
          box-sizing: border-box;
        }
      }
    }
    .expand__more {
      position: absolute;
      z-index: 1;
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0);
      i {
        color: #fff;
      }
    }
  }
  .logbook {
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: 900;
    background-color: rgba(30, 43, 43, 0.9);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .logbook--inner {
      position: relative;
      padding: 1rem;
      background-color: #fff;
      border-radius: 4px;
      .logbook__close {
        position: absolute;
        z-index: 1;
        top: 15px;
        right: 15px;
        i {
          color: #eee;
        }
      }
      .logbook--map {
        position: relative;
        h2 {
          z-index: 1;
          font-size: 2rem;
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translate(-50%, 0);
          color: #fff;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 5px 10px;
        }
        .frame--loading {
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .map-responsive {
          overflow: hidden;
          height: 0;
          width: 90vw;
          max-width: 600px;
          padding-bottom: 80vh;
          margin-bottom: -50px;
          position: relative;
          -webkit-overflow-scrolling: touch;
          iframe,
          object,
          embed {
            margin-top: -50px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
      .options {
        display: flex;
        position: relative;
        z-index: 1;
        justify-content: space-around;
        margin: 1rem 0 0 0;
        .btn {
          font-size: 1.6rem;
          letter-spacing: 2px;
          margin: 0;
          padding: 10px 30px;
          width: 100%;
        }
        span {
          border: 1px solid #559f0c;
          border-radius: 4px;
          line-height: 4;
          padding: 1rem 2rem;
          cursor: pointer;
        }
      }
    }
  }
  .unit {
    padding: 60px 0;
    background-color: #fff;
    h2 {
      text-align: center;
      position: relative;
      font-size: 2rem;
      color: #559f0c;
      padding: 2rem 0;
      margin-bottom: 2rem;
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: #559f0c;
        height: 1px;
      }
    }
    .row {
      padding: 3rem 0;
    }
    .wrapper {
      @media (max-width: 576px) {
        &:nth-child(odd) {
          flex-flow: column-reverse;
        }
      }
    }
    .btn {
      color: #fff;
    }
    img {
      width: 100%;
    }
    .unit--img__left {
      position: relative;
      padding: 0.5rem;
      margin-bottom: 2rem;
    }
    .unit--img__right {
      position: relative;
      padding: 0.5rem;
      margin-bottom: 2rem;
    }
  }
  .team {
    padding: 60px 0;
    background-color: #fff;
    h1 {
      text-align: center;
      font-weight: bold;
      color: #559f0c;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid #559f0c;
      border-bottom: 1px solid #559f0c;
      margin-bottom: 3rem;
    }
    .divider {
      width: 30px;
    }
    .members {
      .member {
        padding: 1rem;
        @media (max-width: 576px) {
          padding: 3rem 1rem 3rem;
          border-bottom: 1px solid #eee;
          &:last-child {
            border: none;
          }
        }
      }
      .divider {
        margin: 2rem 0;
        width: 20px;
        height: 3px;
      }
      .dialog {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: auto;
        z-index: 10;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        .dialog--inner {
          width: calc(100% - 30px);
          max-width: 600px;
          max-height: 90%;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          background-color: #fff;
          box-sizing: border-box;
          overflow-y: auto;
          padding: 30px 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          text-align: left;
        }
        .dialog__close {
          position: absolute;
          top: 30px;
          right: 15px;
        }
      }
    }
    .name {
      h2 {
        letter-spacing: 1px;
        font-weight: bold;
      }
      span {
        font-size: 1.2rem;
      }
    }
    .member--img {
      div {
        height: 180px;
        img {
          border-radius: 50%;
          width: 180px;
          padding: 1rem;
          &:nth-child(1) {
            left: 0;
          }
          &:nth-child(2) {
            left: 50%;
          }
        }
      }
    }
    .btn {
      background-color: #fff;
      color: #0a0a0a;
      border-width: 1px;
    }
    .mollyandchun {
      div {
        position: relative;
        max-width: 400px;
        margin: 0 auto;
        img {
          position: absolute;
        }
      }
    }
    .about {
      h2 {
        font-weight: bold;
      }
      span {
        font-size: 1.2rem;
      }
      .divider {
        background-color: transparent;
        width: 20px;
        margin: 2rem 0;
        height: 1px;
      }
    }
  }
  .flow {
    .container {
      padding: 0;
      max-width: 1920px;
    }
    h1 {
      text-align: center;
      font-weight: bold;
      color: #559f0c;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid #559f0c;
      border-bottom: 1px solid #559f0c;
      margin-bottom: 3rem;
    }
    .procedure {
      .graphic {
        max-width: 1000px;
        margin: 2rem auto;
      }
    }
  }
  .faq {
    padding: 60px 0;
    background-color: #fff;
    h1 {
      text-align: center;
      font-weight: bold;
      color: #559f0c;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid #559f0c;
      border-bottom: 1px solid #559f0c;
      margin-bottom: 3rem;
    }
    ol {
      width: 90%;
      max-width: 700px;
      margin: 0 auto;
      list-style: none;
      li {
        margin-bottom: 1rem;
        flex: 1;
        border: 1px solid #eee;
        .q {
          padding: 2rem 0 2rem 5rem;
          position: relative;
          background-color: rgba(37, 110, 110, 0.1);
          cursor: pointer;
          &:hover,
          :active {
            border-right: 5px solid rgba(1, 89, 92, 09);
          }
          &.active {
            background-color: #dcdcdc;
          }
          span {
            position: absolute;
            top: 0;
            left: 0;
            width: 30px;
            height: 30px;
            background-color: rgba(1, 89, 92, 1);
            color: #fff;
            font-size: 13px;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .a {
          padding: 2rem 1rem 2rem 3rem;
          background-color: #fff;
        }
      }
    }
  }
  .reference {
    padding: 30px 0 60px;
    background-color: #fff;
    h1 {
      text-align: center;
      font-weight: bold;
      color: #559f0c;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid #559f0c;
      border-bottom: 1px solid #559f0c;
      margin-bottom: 3rem;
    }
    ol {
      width: 90%;
      max-width: 700px;
      margin: 0 auto;
      list-style-type: decimal;
      list-style-position: outside;
      li {
        font-size: 14px;
        display: list-item;
        text-align: -webkit-match-parent;
        margin-bottom: 1rem;
        position: relative;
        mark {
          background-color: transparent;
          font-size: 13px;
          color: #666;
          line-height: 1;
          margin-left: 2rem;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
