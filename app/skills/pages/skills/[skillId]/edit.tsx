import React, { Suspense } from 'react'
import Layout from 'app/layouts/AdminLayout'
import { useRouter, useQuery, useMutation, useParam, BlitzPage } from 'blitz'
import getSkill from 'app/skills/queries/getSkill'
import updateSkill from 'app/skills/mutations/updateSkill'
import SkillForm from 'app/skills/components/SkillForm'
import dayjs from 'dayjs'

export const EditSkill = () => {
  const router = useRouter()
  const skillId = useParam('skillId', 'number')
  const [skill, { mutate }] = useQuery(getSkill, { where: { id: skillId } })
  const [updateSkillMutation] = useMutation(updateSkill)

  return (
    <div className="space-y-4">
      <h1 className="text-5xl pb-4 border-b border-white">
        Edit{' '}
        <span
          className="font-bold"
          style={{
            color: skill.fill,
            WebkitTextStroke: `1px ${skill.stroke}`,
          }}
        >
          {skill.name}
        </span>
      </h1>

      <SkillForm
        initialValues={skill}
        onSubmit={async (event) => {
          try {
            const data = new FormData(event.currentTarget)

            const updated = await updateSkillMutation({
              where: { id: skill.id },
              data: {
                name: data.get('name') as string,
                fill: (data.get('fill') as string).toUpperCase(),
                stroke: (data.get('stroke') as string).toUpperCase(),
                query: data.get('query') as string,
                fromDate: dayjs(data.get('fromDate')?.toString()).toDate(),
              },
            })

            await mutate(updated)

            router.back()
          } catch (error) {
            console.log(error)
            alert('Error creating skill ' + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditSkillPage: BlitzPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSkill />
      </Suspense>
    </>
  )
}

EditSkillPage.getLayout = (page) => <Layout title={'Edit Skill'}>{page}</Layout>

export default EditSkillPage
