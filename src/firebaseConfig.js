import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, deleteDoc, collection, doc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDMn-G0X2rSd5W7tVI7WPjM_6oQFTeju0",
  authDomain: "fir-1-vue2.firebaseapp.com",
  projectId: "fir-1-vue2",
  storageBucket: "fir-1-vue2.appspot.com",
  messagingSenderId: "224444301842",
  appId: "1:224444301842:web:3a7c7288c199a2d5a00ecb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Agregar usuario
const addUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), user);
    return docRef.id;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Eliminar usuario
const deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, 'users', id));
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Borrar usuario
const getUsers = (callback) => {
  const usersCol = collection(db, 'users');
  onSnapshot(usersCol, (snapshot) => {
    const users = [];
    snapshot.forEach((doc) => {
      const user = doc.data();
      user.id = doc.id;
      users.push(user);
    });
    callback(users);
  });
};

export { addUser, deleteUser, getUsers };