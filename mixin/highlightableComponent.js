export default {
  data () {
    return {
      isHighlighted: false
    }
  },
  mounted () {
    this.$el.addEventListener('click', this.handleHighlightToggle)
  },
  destroyed () {
    this.$el.removeEventListener('click', this.handleHighlightToggle)
  },
  methods: {
    handleHighlightToggle () {
      this.isHighlighted = !this.isHighlighted
      this.$el.style.background = this.isHighlighted ? 'red' : 'none'
    }
  }
}
