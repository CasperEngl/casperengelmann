import React, { Suspense, useEffect } from 'react'
import { Link, usePaginatedQuery, useRouter, BlitzPage, useMutation } from 'blitz'

import cn from 'classnames'

import Layout from 'app/layouts/AdminLayout'
import getSkills from 'app/skills/queries/getSkills'
import deleteSkill from 'app/skills/mutations/deleteSkill'
import AdminPageTitle from 'app/components/AdminPageTitle'

const ITEMS_PER_PAGE = 10

export const SkillsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ skills, hasMore }] = usePaginatedQuery(
    getSkills,
    {
      orderBy: { id: 'asc' },
      skip: ITEMS_PER_PAGE * page,
      take: ITEMS_PER_PAGE,
    },
    {
      refetchInterval: 2000,
    }
  )
  const [deleteSkillMutation] = useMutation(deleteSkill)

  const goToPreviousPage = () => {
    if (page > 0) {
      router.push({ query: { page: page - 1 } })
    }
  }
  const goToNextPage = () => {
    if (hasMore) {
      router.push({ query: { page: page + 1 } })
    }
  }

  function handleArrowKeys(event) {
    switch (event.key) {
      case 'ArrowDown':
        goToPreviousPage()
        break
      case 'ArrowLeft':
        goToPreviousPage()
        break
      case 'ArrowUp':
        goToNextPage()
        break
      case 'ArrowRight':
        goToNextPage()
        break

      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKeys)

    return () => window.removeEventListener('keydown', handleArrowKeys)
  })

  return (
    <div className="space-y-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Fill</th>
            <th className="px-4 py-3 text-left">Stroke</th>
            <th className="px-4 py-3 text-left">Search query</th>
            <th className="px-4 py-3 text-left">From Date</th>
            <th className="px-4 py-3 text-left">Controls</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill.id} className={index % 2 === 0 ? 'bg-gray-800' : ''}>
              <td className="px-4 py-2 border text-xl">{skill.name}</td>
              <td className="px-4 py-2 border text-xl">{skill.fill}</td>
              <td className="px-4 py-2 border text-xl">{skill.stroke}</td>
              <td className="px-4 py-2 border text-xl">{skill.query}</td>
              <td className="px-4 py-2 border text-xl">{skill.fromDate.toLocaleDateString()}</td>
              <td className="px-4 py-2 border flex flex-col">
                <Link href="/skills/[skillId]/edit" as={`/skills/${skill.id}/edit`}>
                  <button className="font-bold text-teal-500 hover:text-teal-600">Edit</button>
                </Link>
                <button
                  className="font-bold text-red-500 hover:text-red-600"
                  onClick={async () => {
                    if (window.confirm('This will be deleted')) {
                      await deleteSkillMutation({ where: { id: skill.id } })
                      router.push('/skills')
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="space-x-2">
        <button
          className={cn('btn', {
            'bg-gray-500 hover:bg-gray-500 cursor-not-allowed': page === 0,
            'hover:bg-gray-700': page !== 0,
          })}
          disabled={page === 0}
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          className={cn('btn', {
            'bg-gray-500 hover:bg-gray-500 cursor-not-allowed': !hasMore,
            'hover:bg-gray-700': hasMore,
          })}
          disabled={!hasMore}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

const SkillsPage: BlitzPage = () => {
  return (
    <div className="space-y-4">
      <Suspense fallback={<div>Loading...</div>}>
        <AdminPageTitle title="Skills">
          <Link href="/skills/new">
            <a className="btn">Create New Skill</a>
          </Link>
        </AdminPageTitle>
        <SkillsList />
      </Suspense>
    </div>
  )
}

SkillsPage.getLayout = (page) => <Layout title={'Skills'}>{page}</Layout>

export default SkillsPage
