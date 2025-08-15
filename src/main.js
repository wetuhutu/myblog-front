import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'  // 导入全局CSS
import { createPinia } from 'pinia'  // 导入 Pinia 状态管理库
import router from './routers/router'  // 导入路由配置


createApp(App)
.use(createPinia())
.use(router)  // 使用路由
.mount('#app')  // 创建 Vue 应用并挂载到 #app 元素上


