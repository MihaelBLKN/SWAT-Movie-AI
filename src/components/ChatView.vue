<template>
  <div class="preview">
    <div class="card">
      <div class="topBar">
        <div class="item leftEnd">
          <p>SwatInfoAI</p>
        </div>

        <div class="item">
          <p>Ovo je chat u kojem će se pojavljivat poruke.</p>
        </div>

        <div class="misc-item">
          <img src="/Vercel.svg" alt="Vercel" />
          <img src="/OpenAI.svg" class="oa" alt="OpenAI" />
        </div>
      </div>

      <div class="chat">
        <div class="content" style="overflow-y: auto; max-height: 100%">
          <ChatMessage
            v-for="(message, index) in messages"
            :key="index"
            :message="message.text"
            :sender="message.sender"
          />
        </div>
      </div>

      <div class="form">
        <input type="text" v-model="userInput" />
        <button @click="RequestOutput(userInput)">Pošalji</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const messages = ref<{ text: string; sender: string }[]>([])
const userInput = ref('')
async function RequestOutput(input: string): Promise<void> {
  messages.value.push({
    text: input,
    sender: 'User',
  })

  try {
    const response = await axios.get(
      `https://swat-info-ai-open-ai-backend.vercel.app/getOutput?input=${input}`,
    )

    messages.value.push({
      text: response.data,
      sender: 'AI',
    })
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<style scoped>
.preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

img {
  width: 50px;
  padding: 0;
  margin: 0;
  filter: brightness(0) invert(1);
  position: absolute;
}

.oa {
  width: 25px !important;
}

.misc-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
}

.misc-item > :nth-child(2) {
  margin-left: 15%;
}

.item {
  height: 100%;
  padding: 0.7rem;
  background: linear-gradient(45deg, rgb(22, 23, 34), rgb(20, 24, 41));
  transition: all 0.5s ease;
}

.item p {
  font-weight: 600;
  font-size: 0.85em;
  text-shadow: rgb(72, 72, 99) 0px 0px 5px;
}

.item > * {
  pointer-events: none;
}

.item:hover {
  transform: scale(1.15) rotateY(10deg);
  box-shadow: rgb(44, 44, 61) 0px 0px 5px 2px;
  transition: all 0.5s ease;
}

.leftEnd {
  border-top-left-radius: 18px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 20rem 25rem 20rem 25rem;
  background: rgb(9, 11, 19);
  border-radius: 20px;
  border-style: solid;
  border-width: 0.15rem;
  border-color: rgb(20, 21, 31);
  backdrop-filter: blur(12px);
  box-shadow: rgb(9, 11, 19);
  position: relative;
  box-shadow: rgb(15, 15, 24) 0px 0px 20px 12px;
}

.topBar {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-style: solid;
  border-color: rgb(20, 21, 31);
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 0.15rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background: rgb(13, 14, 20);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.form {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  position: absolute;
  top: 88%;
  left: 30%;
  z-index: 5;
}

.form input {
  width: 100%;
  background: var(--color-background);
  border-style: solid;
  border-width: 0.05rem;
  border-color: rgb(51, 51, 73);
  border-radius: 10px;
}

.form {
  background: rgb(10, 10, 15);
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 10px;
  border-style: solid;
  border-width: 0.05rem;
  border-color: rgb(51, 51, 73);
  backdrop-filter: blur(10px);
}

.form button {
  color: white;
  border-radius: 5px;
  border-style: solid;
  border-color: rgb(51, 51, 73);
  border-width: 0.05rem;
  background: var(--color-background);
  padding: 0rem 1.25rem 0rem 1.25rem;
}

.form input {
  color: white;
  padding: 0.25rem 1rem 0.25rem 1rem;
}

.form button:hover {
  background: white;
  color: black;
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.25rem;
  margin: 4rem 1rem 0rem 1rem;
}

.content {
  scrollbar-width: thin;
}

@media screen and (min-width: 541px) and (max-width: 800px) {
  .card {
    margin: 0;
  }
}

@media screen and (max-width: 540px) {
  .card {
    margin: 0;
    width: 100%;
    height: 500vh;
    transform: scale(0.45);
    margin-top: -10rem;
  }

  .preview {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
