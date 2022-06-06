<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>
      <button id="fetch-user-button" @click="fetchUsers">Fetch Users!</button>
    </p>
    <p>
      <button id="remove-user-button" @click="removeUsers">
        Remove Users! (this.users = [])
      </button>
    </p>

    <div v-for="user in users" v-bind:key="user.id">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>

    <div class="button">
      <button data-testid="sample-message-button" @click="toggleSampleMessage">
        toggleSampleMessage
      </button>
    </div>
    <div data-testid="sample-message">
      {{ sampleMessage }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutThisSite",
  mounted() {
    this.fetchUsers();
  },
  data() {
    return {
      sampleMessage: "",
      users: [],
    };
  },
  methods: {
    toggleSampleMessage() {
      if (this.sampleMessage === "") {
        this.sampleMessage = "Hello, AboutThisSiteWorld!";
      } else {
        this.sampleMessage = "";
      }
    },
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
