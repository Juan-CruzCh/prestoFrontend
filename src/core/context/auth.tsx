import { create } from "zustand";
import { verificarLogin } from "../../module/autenticacion/service/autenticacionService";
import type { UsuarioPerfilI } from "../../module/usuario/interface/usuario";
interface AuthStore {
    usuario: UsuarioPerfilI | null;
    loading: boolean;
    isAutenticacion: boolean;
    verificarAuth: () => Promise<void>;
}
export const useAuthStore = create<AuthStore>((set) => ({
    loading: false,
    usuario: {
        apellidoMaterno: '',
        apellidoPaterno: '',
        ci: '',
        direccion: '',
        nombre: '',
        rol: '',
        usuario: ''
    },
    isAutenticacion: false,
    verificarAuth: async () => {
        try {
            const url = window.location.pathname

            if (url != '/') {
                const response = await verificarLogin()
                if (response) {
                    set({ usuario: response, isAutenticacion: true })
                }
            }


        } catch (error) {
            set({ usuario: null, isAutenticacion: false })
        }

    }

}))