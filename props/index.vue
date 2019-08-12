<template>
  <div>
    <UserDetails
      :firstName="activeUser.firstName"
      :lastName="activeUser.lastName"
    />
    <UserActions
      :userId="activeUser.id"
    />
  </div>
</template>

<script>
  import UserDetails from './user-details.vue'
  import UserActions from './user-actions.vue'

  export default {
    components: {
      UserDetails,
      UserActions
    },

    data () {
      return {
        activeUser: {
          id: 42,
          firstName: 'Riki',
          lastName: 'Fridrich'
        }
      }
    }
  }
</script>
