import React from 'react'
import { SkillCreateInput } from '@prisma/client'

import dayjs from 'dayjs'

type SkillFormProps = {
  initialValues: SkillCreateInput
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const SkillForm = ({ initialValues, onSubmit }: SkillFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
      className="space-y-12"
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="space-y-2">
          <div>Name</div>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input w-full bg-gray-800 border-gray-700 focus:border-gray-700"
            defaultValue={initialValues.name}
          />
        </label>
        <label htmlFor="fill" className="space-y-2">
          <div>Fill</div>
          <input
            type="text"
            name="fill"
            id="fill"
            className="form-input w-full bg-gray-800 border-gray-700 focus:border-gray-700"
            defaultValue={initialValues.fill}
          />
        </label>
        <label htmlFor="stroke" className="space-y-2">
          <div>Stroke</div>
          <input
            type="text"
            name="stroke"
            id="stroke"
            className="form-input w-full bg-gray-800 border-gray-700 focus:border-gray-700"
            defaultValue={initialValues.stroke}
          />
        </label>
        <label htmlFor="query" className="space-y-2">
          <div>Search query</div>
          <input
            type="text"
            name="query"
            id="query"
            className="form-input w-full bg-gray-800 border-gray-700 focus:border-gray-700"
            defaultValue={initialValues.query}
          />
        </label>
        <label htmlFor="fromDate" className="space-y-2">
          <div>From Date</div>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            className="form-input w-full bg-gray-800 border-gray-700 focus:border-gray-700"
            defaultValue={dayjs(initialValues.fromDate).format('YYYY-MM-DD')}
          />
        </label>
      </div>
      <button className="btn">Submit</button>
    </form>
  )
}

export default SkillForm
