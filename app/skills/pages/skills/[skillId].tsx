import React, { Suspense } from 'react'
import Layout from 'app/layouts/AdminLayout'
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from 'blitz'
import getSkill from 'app/skills/queries/getSkill'
import deleteSkill from 'app/skills/mutations/deleteSkill'

export const Skill = () => {
  const router = useRouter()
  const skillId = useParam('skillId', 'number')
  const [skill] = useQuery(getSkill, { where: { id: skillId } })
  const [deleteSkillMutation] = useMutation(deleteSkill)

  return (
    <div className="space-y-4 flex flex-col">
      <h1 className="text-3xl">{skill.name}</h1>
      <pre>{JSON.stringify(skill, null, 2)}</pre>

      <div className="space-x-2 flex">
        <Link href="/skills">
          <a className="px-4 py-2 border-2 hover:bg-gray-50 rounded text-left">All</a>
        </Link>
        <Link href="/skills/new">
          <a className="px-4 py-2 border-2 hover:bg-gray-50 rounded text-left">New</a>
        </Link>
        <Link href="/skills/[skillId]/edit" as={`/skills/${skill.id}/edit`}>
          <a className="px-4 py-2 border-2 hover:bg-gray-50 rounded text-left">Edit</a>
        </Link>
        <button
          type="button"
          className="px-4 py-2 border-2 hover:bg-gray-50 rounded text-left"
          onClick={async () => {
            if (window.confirm('This will be deleted')) {
              await deleteSkillMutation({ where: { id: skill.id } })
              router.push('/skills')
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

const ShowSkillPage: BlitzPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Skill />
    </Suspense>
  )
}

ShowSkillPage.getLayout = (page) => <Layout title={'Skill'}>{page}</Layout>

export default ShowSkillPage
