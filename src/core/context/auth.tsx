import { create } from "zustand";
import { verificarLogin } from "../../module/autenticacion/service/autenticacionService";
interface AuthStore {
  user: any | null;
  loading: boolean;
  verificarAuth: () => Promise<void>;
}
export const useAuthStore  = create<AuthStore>((set)=>({
    loading:false,
    user:null,

    verificarAuth : async ()=>{
        try {
            console.log('verificando login');
            
            const response = await verificarLogin()
            console.log(response);
               set({ user: response, loading: false })
        } catch (error) {
            
        }

    }

}))