<template>
  <div>
    <h1>Source</h1>
    <div>
      <textarea v-model="markdownContent" cols="30" rows="10"></textarea>
    </div>

    <h1>Escaped</h1>
    <div><pre>{{ transpiledContent }}</pre></div>

    <h1>Raw</h1>
    <div v-html="transpiledContent" />

  </div>
</template>

<script>
  import Remark from 'remark'
  import RemarkHtml from 'remark-html'

  export default {
    data () {
      return {
        markdownContent: 'This **content** _can_ contain [Markdown](https://www.markdownguide.org/cheat-sheet#basic-syntax).',
        transpiledContent: ''
      }
    },
    methods: {
      transpileContent () {
        Remark()
          .use(RemarkHtml)
          .process(this.markdownContent, (error, file) => {
            this.transpiledContent = file.contents
          })
      }
    },
    watch: {
      markdownContent () {
        this.transpileContent()
      }
    },

    mounted () {
      this.transpileContent()
    }
  }
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: monospace;
    font-size: 1.5em;
  }
</style>
