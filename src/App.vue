<template>
  <div id="app" class="d-flex flex-col flex-lg-row">
    <UsersForm />
    <UsersList />
  </div>
</template>

<script>
import UsersForm from './components/UsersForm.vue';
import UsersList from './components/UsersList.vue';

export default {
  name: 'App',
  components: {
    UsersForm,
    UsersList
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
