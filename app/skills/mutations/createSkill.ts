import { Ctx } from 'blitz'
import db, { SkillCreateArgs } from 'db'

type CreateSkillInput = Pick<SkillCreateArgs, 'data'>
export default async function createSkill({ data }: CreateSkillInput, ctx: Ctx) {
  ctx.session.authorize('admin')

  const skill = await db.skill.create({ data })

  return skill
}
