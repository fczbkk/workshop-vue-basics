<template>
  <div>
    <my-box title="User info">
      <my-user
        :first-name="firstName"
        :last-name="lastName"
      />
    </my-box>
    <my-box title="Selected article">
      <my-article
        :title="title"
        :description="description"
      />
    </my-box>
  </div>
</template>

<script>
  import MyBox from './box.vue'
  import MyUser from './user.vue'
  import MyArticle from './article.vue'
  export default {
    components: {
      MyBox,
      MyUser,
      MyArticle
    },
    data () {
      return {
        firstName: 'Riki',
        lastName: 'Fridrich',
        title: 'Funny t-shirt',
        description: 'This t-shirt has some funny image printed on it.'
      }
    }
  }
</script>

<style scoped>

</style>
