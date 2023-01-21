import { createApp } from 'vue' // 引入 Vue
import { createI18n } from 'vue-i18n' // 引入 Vue-i18n

// 引入 Vue Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import 'bulma/css/bulma.min.css' // 引入bulma

// 引入语言
import en_us from './locale/en_us.json'
import zh_cn from './locale/zh_cn.json'

// 引入 DefaultPage 模板
import DefaultPage from './template/DefaultPage/DefaultPage.vue'

// 设置 Vue-i18n
const i18n = new createI18n({
    locale: 'en_us',
    messages: {
        zh_cn,
        en_us
    }
})

// 设置和挂载 DefaultPage页面
createApp(DefaultPage)
    .use(i18n)
    .use(VueSweetalert2)
    .mount('#DefaultPage')
