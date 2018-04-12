<template>
  <div class="codemirror">
    <codemirror v-model="code" :options="cmOption"></codemirror>
  </div>
</template>

<script>
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/theme/monokai.css'
  export default {
    data() {
      return {
        code: 'const A = 10',
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          lineWrapping: false,
          line: true,
          mode: 'text/javascript',
          theme: 'monokai'
        }
      }
    }
  }
</script>

<style>
</style>
