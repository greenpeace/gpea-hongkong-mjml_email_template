<template>
  <div class="appfooter">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-7">
          <p>綠色和平存在，因為脆弱的地球需要改變、需要行動。
            <br>但保護地球的使命不能僅靠綠色和平來完成，唯有結合你的力量，才能夠讓地球變得更綠色、更和平。 </p>
          <p>© GREENPEACE 2019</p>
        </div>
        <div class="col-12 col-md-12 col-lg-5">
          <div class="footer--links text-right">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="http://www.greenpeace.org/hk/"
                >首頁</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://act.greenpeace.org/page/4663/donate/1?ref=shiptour_footer_donate"
                >支持我們</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.greenpeace.org/hk/about/privacy/"
                >私隱政策與個人資料收集聲明</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center toTop">
        <a
          href="#"
          v-scroll-to="'#app'"
        ><i class="material-icons">keyboard_arrow_up</i></a>
      </div>
    </div>
    <!-- container -->
  </div>
</template>

<script>
export default {
  name: "appfooter",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.appfooter {
  background-color: #fff;
  padding: 4rem 0;
  p {
    font-size: 1.4rem;
  }
  .footer--links ul {
    list-style: none;
    padding: 0;
    li a {
      font-size: 1.4rem;
      color: #0a0a0a;
    }
  }
  .toTop {
    padding: 2rem 0;
  }
}
</style>

