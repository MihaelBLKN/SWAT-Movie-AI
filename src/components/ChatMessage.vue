<template>
  <div class="message">
    <div class="userInfo">
      <img :src="imageSource" width="30" />
    </div>

    <div class="content">
      <h1>{{ displayName }}</h1>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: false,
      default: 'User',
    },
  },
  computed: {
    imageSource() {
      return this.sender === 'AI' ? '/OpenAI.svg' : '/User.svg'
    },
    displayName() {
      return this.sender === 'AI' ? 'SwatInfoAI ChatBot' : 'You'
    },
  },
}
</script>

<style scoped>
.message {
  display: grid;
  grid-template-columns: 0.5fr 5fr;
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(25deg, rgb(20, 21, 31), rgb(15, 15, 26));
}

img {
  filter: brightness(1) invert(1);
}

.userInfo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 1.2em;
}

p {
  font-size: 0.88em;
}
</style>
