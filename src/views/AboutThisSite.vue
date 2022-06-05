<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p><button @click="fetchUsers">Fetch Users!</button></p>
    <p><button @click="removeUsers">Remove Users! (this.users = [])</button></p>

    <div v-for="user in users" v-bind:key="user.id">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutThisSite",
  mounted() {
    // this.fetchUsers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data;
        });
    },
    removeUsers() {
      this.users = [];
    },
  },
};
</script>
