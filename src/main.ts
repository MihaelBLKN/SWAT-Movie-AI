import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import ChatView from './components/ChatView.vue'
import ChatMessage from './components/ChatMessage.vue'
import Button from './components/Buttons/Button.vue'

const createdApp = createApp(App)
createdApp.component('ChatMessage', ChatMessage)
createdApp.component('Button', Button)
createdApp.component('ChatView', ChatView)
createdApp.mount('#app')
