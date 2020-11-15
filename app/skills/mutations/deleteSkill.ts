import { Ctx } from 'blitz'
import db, { SkillDeleteArgs } from 'db'

type DeleteSkillInput = Pick<SkillDeleteArgs, 'where'>

export default async function deleteSkill({ where }: DeleteSkillInput, ctx: Ctx) {
  ctx.session.authorize('admin')

  const skill = await db.skill.delete({ where })

  return skill
}
