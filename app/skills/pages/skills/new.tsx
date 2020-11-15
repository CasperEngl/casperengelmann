import React, { Suspense } from 'react'
import Layout from 'app/layouts/AdminLayout'
import { Link, useRouter, useMutation, BlitzPage } from 'blitz'
import createSkill from 'app/skills/mutations/createSkill'
import SkillForm from 'app/skills/components/SkillForm'
import dayjs from 'dayjs'

const NewSkill: BlitzPage = () => {
  const router = useRouter()
  const [createSkillMutation] = useMutation(createSkill)

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Create New Skill</h1>

      <SkillForm
        initialValues={{
          name: '',
          fill: '',
          stroke: '',
          fromDate: new Date().toISOString(),
        }}
        onSubmit={async (event) => {
          try {
            const data = new FormData(event.currentTarget)

            const skill = await createSkillMutation({
              data: {
                name: data.get('name') as string,
                fill: data.get('fill') as string,
                stroke: data.get('stroke') as string,
                fromDate: dayjs(data.get('fromDate')?.toString()).toDate(),
              },
            })

            router.push('/skills/[skillId]', `/skills/${skill.id}`)
          } catch (error) {
            alert('Error creating skill ' + JSON.stringify(error, null, 2))
          }
        }}
      />
      <div className="space-x-2 flex">
        <Link href="/skills">
          <a className="px-4 py-2 border-2 hover:bg-gray-50 rounded text-left">
            Go back to all skills
          </a>
        </Link>
      </div>
    </div>
  )
}

const NewSkillPage: BlitzPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NewSkill />
      </Suspense>

      <div>
        <Link href="/skills">
          <a>View all skills</a>
        </Link>
      </div>
    </>
  )
}

NewSkillPage.getLayout = (page) => <Layout title={'Create New Skill'}>{page}</Layout>

export default NewSkillPage
