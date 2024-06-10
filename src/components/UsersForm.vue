<!-- src/components/FormComponent.vue -->
<template>
  <div class="container mt-4">
    <h2>Agregar Usuarios</h2>
    <form @submit.prevent="addUser" class="border rounded-4 p-3">
      <div class="form-group mb-4">
        <label for="name">Nombre</label>
        <input type="text" v-model="name" class="form-control" id="name" placeholder="Escribe el nombre" required>
      </div>
      <div class="form-group mb-4">
        <label for="email">Correo Electrónico</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="Escribe el correo electrónico"
          required>
      </div>
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
  </div>
</template>

<script>
import { addUser } from '../firebaseConfig';

export default {
  name: 'UsersForm',
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    async addUser() {
      if (this.name.trim() === '' || this.email.trim() === '') return;
      try {
        const newUser = {
          name: this.name,
          email: this.email
        };
        await addUser(newUser);
        this.name = '';
        this.email = '';
      } catch (error) {
        console.error('Error agregando un usuario:', error);
      }
    }
  }
};
</script>