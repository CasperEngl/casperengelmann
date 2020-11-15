import { Ctx } from 'blitz'
import db, { SkillUpdateArgs } from 'db'

type UpdateSkillInput = Pick<SkillUpdateArgs, 'where' | 'data'>

export default async function updateSkill({ where, data }: UpdateSkillInput, ctx: Ctx) {
  ctx.session.authorize('admin')

  const skill = await db.skill.update({ where, data })

  return skill
}
