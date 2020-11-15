import { ProjectCreateInput } from '@prisma/client'
import React, { useState } from 'react'

type ProjectFormProps = {
  initialValues: ProjectCreateInput
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const ProjectForm = ({ initialValues, onSubmit }: ProjectFormProps) => {
  const [title, setTitle] = useState(initialValues.title)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        initialValues.title = title
        onSubmit(event)
      }}
    >
      <div>Put your form fields here. But for now, just click submit</div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        defaultValue={title}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <div>{title}</div>
      {/* <div>{JSON.stringify(initialValues)}</div> */}
      <button>Submit</button>
    </form>
  )
}

export default ProjectForm
