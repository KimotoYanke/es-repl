<template>
  <div class="codemirrorroot">
    <codemirror v-model="code" :options="cmOption" class="input"></codemirror>
    <codemirror :value="evaled" :options="readOnlyCmOption" class="output"></codemirror>
  </div>
</template>

<script>
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/theme/monokai.css'
  const cmOption = {
    tabSize: 4,
    styleActiveLine: true,
    lineNumbers: true,
    lineWrapping: false,
    line: true,
    mode: 'text/javascript',
    theme: 'monokai'
  }
  export default {
    data() {
      return {
        code: 'const A = 10\nA',
        cmOption,
        readOnlyCmOption: Object.assign({
          readOnly: true
        }, cmOption),
        evaled: ''
      }
    },
    methods: {
      evalCode () {
        let e = ''
        try {
          e = eval(this.code).toString()
        } catch (_) {
          return
        }
        this.evaled = e
      }
    },
    mounted () {
      this.evalCode()
    },
    watch: {
      code () {
        this.evalCode()
      }
    },
    components: {
    }
  }
</script>

<style>
.input, .output {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.codemirrorroot {
  display: flex;
  flex-direction: row;
}

.CodeMirror {
  height: 100%;
}
</style>
