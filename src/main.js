import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'  // 导入全局CSS
import { createPinia } from 'pinia'  // 导入 Pinia 状态管理库

createApp(App).use(createPinia()).mount('#app')  // 创建 Vue 应用并挂载到 #app 元素上


