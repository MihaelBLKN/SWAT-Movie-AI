<template>
  <header class="mainHeader">
    <div class="holder">
      <div class="cover"></div>
      <div class="item">
        <Button label="ChatBot" />
        <Button label="Technical Info" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.mainHeader {
  position: sticky;
  bottom: 0;
  top: 0;
  z-index: 99;
  display: flex;
  width: 100%;
}

.mainHeader .holder {
  position: relative;
  display: flex;
  width: 100%;
  margin: 1rem 0rem 1rem 0rem;
  padding: 1rem;
  border-width: 0.05rem;
  border-style: solid;
  border-color: rgb(23, 23, 36);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  box-shadow: rgb(18, 18, 29) 0px 0px 5px 5px;
}

.mainHeader .holder .cover {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
  filter: blur(7px);
  background-color: #0b0b13;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%2304040f' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.mainHeader .holder .item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
