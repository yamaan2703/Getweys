// import { getDatabase, ref, onValue } from 'firebase/database';
// import { create } from 'zustand';
// import { app } from './FirebaseConfig';

// let db = getDatabase(app);

// export const useUserStore = create((set) => ({
//   currentUser: null,
//   isLoading: true,
//   fetchUserInfo: async (uid) => {
//     if (!uid) return set({ currentUser: null, isLoading: false });
//     try {
//       const reference = ref(db, `users/${uid}`);
//       onValue(reference, (snapshot) => {
//         const userData = snapshot.val();
//         if (userData) {
//           set({ currentUser: userData, isLoading: false });
//         } else {
//           set({ currentUser: null, isLoading: false });
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching user info:", error);
//       set({ currentUser: null, isLoading: false });
//     }
//   }
// }));
