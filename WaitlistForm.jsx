import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }])

    if (error) {
      console.log(error)
      setMessage('Ошибка')
    } else {
      setMessage('¡Gracias! Te avisaremos.')
      setEmail('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button className="bg-yellow-500 px-4 py-2 rounded">
        Unirse
      </button>
      {message && <p>{message}</p>}
    </form>
  )
}