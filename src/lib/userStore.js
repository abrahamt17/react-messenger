import { getDoc, doc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase"; // Adjust the import path as needed

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    console.log(`fetchUserInfo called with uid: ${uid}`);
    if (!uid) {
      set({ currentUser: null, isLoading: false });
      return;
    }

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.error('Error fetching user info:', err);
      set({ currentUser: null, isLoading: false });
    }
  },
}));
