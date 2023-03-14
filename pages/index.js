import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../component/back/Account'


const Home = () => {
  const session =  useSession() 
  const supabase = useSupabaseClient()
 
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth 
        providers={['google', 'facebook']}
        supabaseClient={supabase} appearance={{ theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: 'orange',
              brandAccent: 'darkred',
            },
          },
        }, }} theme="default" />
      ) : (
        <Account session={session}/>
      )}
    </div>
  )
}

export default Home