<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://sharpice.top/">
        <img src="/favicon.ico" />
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{ $t('navbar.language') }}
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" @click="SwitchLanguage('zh_cn')">中文</a>
          <a class="navbar-item" @click="SwitchLanguage('en_us')">English</a>
        </div>
      </div>
      <a style="padding: 0; display: flex; align-items: center;">
        <Switch />
      </a>
    </div>
  </nav>
  <a class="navbar-item" @click="UseCookieTips()">Test</a>
</template>

<style lang="scss">
#DefaultPage {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#DefaultPage .notification.is-link.is-light {
  border-radius: 5px;
  padding-top: 3px;
}
</style>

<script>
import { Switch } from "vue-dark-switch"; // 引入vue-dark-switch
import Cookies from 'js-cookie' // 引入 js-cookie
export default {
  components: {
    Switch, // 注册vue-dark-switch的Switch
  },
  methods: {
    SwitchLanguage(locale) {
      this.$i18n.locale = locale
    },
    UseCookieTips() {
      if (Cookies.get('UseCookie') != "false" && Cookies.get('UseCookie') != "true") {
        this.$swal.fire({
          title: this.$i18n.t('tips.cookie'),
          showDenyButton: true,
          allowEscapeKey: false,
          allowOutsideClick: false,
          confirmButtonText: this.$i18n.t('tips.accept'),
          denyButtonText: this.$i18n.t('tips.do_not_accept'),
        }).then((result) => {
          if (result.isConfirmed) {
            Cookies.set('UseCookie', 'true', { expires: 365 });
          } else if (result.isDenied) {
            Cookies.set('UseCookie', 'false', { expires: 365 });
          }
        })
      }
    },
  }
};
</script>
