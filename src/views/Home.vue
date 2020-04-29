<template>
  <div class="home">
    <h1>This is the home page</h1>
    <button @click="onButtonClick()">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  methods: {
    onButtonClick() {
      alert(this.message);
    }
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
}
</style>