export default {
  functional: true,
  render (createElement, context) {
    return [
      createElement('dt', context.props.term),
      createElement('dd', context.props.description)
    ]
  },
  props: {
    term: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
