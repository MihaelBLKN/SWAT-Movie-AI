<template>
  <button class="TertiaryButton">{{ label }}</button>
</template>

<script>
export default {
  name: 'TertiaryButton',
  props: {
    label: {
      type: String,
      required: true,
    },

    redirectPage: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.TertiaryButton {
  padding: 0.25rem 2rem 0.25rem 2rem;
  border-style: solid;
  border-color: var(200, 200, 200);
  border-width: 0.05rem;
  border-radius: 4px;
  color: var(--text-color);
  background: transparent;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;
}

.TertiaryButton:hover {
  background-color: white;
  color: black;
  cursor: pointer;
  transform: translateY(-0.25rem);
  box-shadow: white 0px 7px 5px 0px;
  transition: all 0.2s ease-in;
}

.TertiaryButton:active {
  transform: translateY(0);
  box-shadow: none;
  color: white;
  background-color: rgb(162, 154, 204);
  border-color: rgb(162, 154, 204);
  box-shadow: rgb(162, 154, 204) 0px 0px 5px 0px;
  transition: all 0.1s ease-out;
}
</style>
