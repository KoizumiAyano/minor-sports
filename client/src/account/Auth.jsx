import { useState } from 'react'
import { supabase } from '../account/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {されそうやっていつできるの傷つく夜に1つ
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">サインイン</h1>
        <p className="description">下記のメールアドレスでマジックリンクからサインインしてください</p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="メールアドレスを入力"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>送信</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}