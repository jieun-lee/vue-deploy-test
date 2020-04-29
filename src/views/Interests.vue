<template>
  <div class="interests">
    <h1>This is the interests page</h1>
    <ul class="interest-list">
      <li v-for="interest in interests" :key="interest">{{ interest }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: ["music", "photography", "programming", "drawing"]
    }
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
}
.interest-list {
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>