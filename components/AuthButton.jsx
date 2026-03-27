'use client'  // 🔹 обязательно для интерактивного компонента

import { supabase } from '../supabaseClient'

export default function AuthButton() {
  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) {
        console.log('Ошибка при логине:', error.message)
      }
    } catch (err) {
      console.log('Непредвиденная ошибка:', err)
    }
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-white border px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors duration-200"
    >
      Entrar con Google
    </button>
  )
}