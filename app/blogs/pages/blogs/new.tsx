import React from 'react'
import Layout from 'app/layouts/AdminLayout'
import { useRouter, useMutation, BlitzPage } from 'blitz'
import createBlog from 'app/blogs/mutations/createBlog'
import BlogForm from 'app/blogs/components/BlogForm'
import AdminPageTitle from 'app/components/AdminPageTitle'

const NewBlogPage: BlitzPage = () => {
  const router = useRouter()
  const [createBlogMutation] = useMutation(createBlog)

  return (
    <div className="space-y-8">
      <AdminPageTitle title="Create new blog"></AdminPageTitle>

      <BlogForm
        initialValues={{
          name: '',
          content: '',
        }}
        onSubmit={async (event) => {
          try {
            const data = new FormData(event.currentTarget)

            const blog = await createBlogMutation({
              data: {
                name: data.get('name') as string,
                content: data.get('content') as string,
              },
            })
            alert('Success!' + JSON.stringify(blog))
            router.push('/blogs/[blogId]', `/blogs/${blog.id}`)
          } catch (error) {
            alert('Error creating blog ' + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

NewBlogPage.getLayout = (page) => <Layout title={'Create New Blog'}>{page}</Layout>

export default NewBlogPage
