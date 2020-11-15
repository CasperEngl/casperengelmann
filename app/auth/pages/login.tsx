import React from 'react'
import { useRouter, BlitzPage } from 'blitz'
import Layout from 'app/layouts/AdminLayout'
import { LoginForm } from 'app/auth/components/LoginForm'
import AdminPageTitle from 'app/components/AdminPageTitle'

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className="space-y-4">
      <AdminPageTitle title="Login"></AdminPageTitle>
      <LoginForm onSuccess={() => router.push('/')} />
    </div>
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
