declare interface Window {
  // extend the window
  mySiteList:{
    name: string
    url: string
    icon: string
  }[]
}

// declare module 'element-plus/dist/locale/zh-cn.mjs'

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
