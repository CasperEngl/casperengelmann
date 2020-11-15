import { Ctx, NotFoundError } from 'blitz'
import db, { FindFirstSkillArgs } from 'db'

type GetSkillInput = Pick<FindFirstSkillArgs, 'where'>

export default async function getSkill({ where }: GetSkillInput, ctx: Ctx) {
  ctx.session.authorize()

  const skill = await db.skill.findFirst({ where })

  if (!skill) throw new NotFoundError()

  return skill
}
