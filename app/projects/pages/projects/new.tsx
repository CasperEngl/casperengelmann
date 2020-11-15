import React from 'react'
import Layout from 'app/layouts/FrontendLayout'
import { Link, useRouter, useMutation, BlitzPage } from 'blitz'
import createProject from 'app/projects/mutations/createProject'
import ProjectForm from 'app/projects/components/ProjectForm'

const NewProjectPage: BlitzPage = () => {
  const router = useRouter()
  const [createProjectMutation] = useMutation(createProject)

  return (
    <div>
      <h1>Create New Project</h1>

      <ProjectForm
        initialValues={{
          title: '',
          category: '',
          description: '',
          link: '',
          image: '',
        }}
        onSubmit={async (event) => {
          try {
            const data = new FormData(event.currentTarget)

            const project = await createProjectMutation({
              data: {
                title: data.get('title') as string,
                category: data.get('category') as string,
                description: data.get('description') as string,
                link: data.get('link') as string,
                image: data.get('image') as string,
              },
            })

            router.push('/projects/[projectId]', `/projects/${project.id}`)
          } catch (error) {
            alert('Error creating project ' + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </p>
    </div>
  )
}

NewProjectPage.getLayout = (page) => <Layout title={'Create New Project'}>{page}</Layout>

export default NewProjectPage
