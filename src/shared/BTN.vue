<template>
  <article>
      <button :style="{backgroundColor:bg, color: color, fontSize: size}">
          {{txt}}
      </button>
  </article>
</template>

<script>
export default {
    name: 'BTN',
    props: {
        bg: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: true
        },
        txt: {
            type: String,
            require: true
        },
        size: {
            type: String,
            require: false
        }
    }
}
</script>

<style scoped>
    button {
        border-radius: 7px;
        padding: 10px 15px;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    
</style>