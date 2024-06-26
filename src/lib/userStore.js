import { getDoc } from "firebase/firestore";
import { create } from "zustand";

export const  useUserStore= create((set)=>({
currentUser: null,
isLoading: true,
fetchUserInfo: async (uid)=>{   
if (!uid) return set({ currentUser:null, isLoading:false});
try {
const docRef= doc (db, "user", uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()){
    set({currentUser:docSnap.data(), isLoading:false});
} else{
    set({currentUser:null, isLoading:false})
} 

}

catch(err){
    console.log(err);
    return set({currentUser:null, isLoading:false})
}



}}))