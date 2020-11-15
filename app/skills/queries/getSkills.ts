import { Ctx } from 'blitz'
import db, { FindManySkillArgs } from 'db'

type GetSkillsInput = Pick<FindManySkillArgs, 'where' | 'orderBy' | 'skip' | 'take'>

export default async function getSkills(
  { where, orderBy, skip = 0, take }: GetSkillsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const skills = await db.skill.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.skill.count()
  const hasMore = typeof take === 'number' ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    skills,
    nextPage,
    hasMore,
    count,
  }
}
