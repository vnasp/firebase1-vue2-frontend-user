<!-- src/components/ListComponent.vue -->
<template>
  <div class="container mt-4">
    <h2>Lista de Usuarios</h2>
    <ul class="list-group border rounded-4 p-3">
      <li v-for="user in users" :key="user.id" class="list-group-item d-flex flex-row justify-content-between align-items-center border-0">
        <h5 class="text-capitalize">{{ user.name }}</h5>
        <p class="m-0">{{ user.email }}</p>
        <button @click="deleteUser(user.id)" class="btn btn-danger">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers, deleteUser } from '../firebaseConfig';

export default {
  name: 'UsersList',
  data() {
    return {
      users: []
    };
  },
  created() {
    getUsers((users) => {
      this.users = users;
    });
  },
  methods: {
    async deleteUser(id) {
      try {
        await deleteUser(id);
      } catch (error) {
        console.error('Error eliminando un usuario:', error);
      }
    }
  }
};
</script>