<template>
  <repl></repl>
</template>

<script>
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/theme/monokai.css'

  import repl from './components/Repl.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      repl
    }
  }
</script>

<style>
</style>
