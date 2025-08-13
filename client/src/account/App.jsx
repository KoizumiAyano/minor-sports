import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './Auth'
import Account from './Account'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function AppWrapper() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />} />
        {/* 他に必要ならルート追加 */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppWrapper
