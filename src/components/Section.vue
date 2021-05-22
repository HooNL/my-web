<template>
  <article class="text-center bg-info">
      <h1>{{naam}}</h1>
      <p>{{msg}}</p>
      <strong>{{adad}}</strong>
  </article>
</template>

<script>
export default {
    name: 'Section',

    props: {
        naam: {
            type: String,
            require: true,
        },
        msg: {
            type: String,
            require: false
        },
        adad: {
            type: Number,
            require: false
        }
    }
}
</script>

<style scoped>
article{
    padding: 80px;
}
h1 {
    font-size: 50px;
}
p {
    padding: 50px;
    font-size: 28px;
    font-family: monospace;
}
strong {
    font-size: 40px;
}
</style>