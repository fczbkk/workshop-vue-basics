<template>
  <div>
    <p>
    <input
      ref="myFile"
      type="file"
      accept="image/*"
      @change="handleFile"
    />
    </p>
    <p>
      Uploaded image size:
      {{ imageWidth }} x {{ imageHeight }}
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imageWidth: 0,
        imageHeight: 0
      }
    },
    methods: {
      handleFile () {
        const fileData = this.$refs.myFile.files[0]
        const reader = new FileReader()
        reader.onload = (event) => {
          const dummyImage = new Image()
          dummyImage.onload = () => {
            this.imageWidth = dummyImage.width
            this.imageHeight = dummyImage.height
          }
          dummyImage.src = event.target.result
        }
        reader.readAsDataURL(fileData)
      }
    }
  }
</script>

<style scoped>

</style>
