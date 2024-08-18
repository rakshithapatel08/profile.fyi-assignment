import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const persistAtom = recoilPersist()

const cartItems = atom({
    key:"cartItems",
    default:[],
    // effects_UNSTABLE:[persistAtom]
})

export default cartItems