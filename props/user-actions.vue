<template>
  <ul>
    <li><a :href="`/edit-user/${ userId }`">Rename user</a></li>
    <li><a :href="`/delete-user/${ userId }`">Delete user</a></li>
  </ul>
</template>

<script>
  export default {
    props: {
      userId: {
        type: Number,
        required: true
      }
    }
  }
</script>
