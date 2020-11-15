import React from 'react'
import { dynamic } from 'blitz'
import { BlogCreateInput } from '@prisma/client'
import MarkdownIt from 'markdown-it'

import 'react-markdown-editor-lite/lib/index.css'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'))

type BlogFormProps = {
  initialValues: BlogCreateInput
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const mdParser = new MarkdownIt(/* Markdown-it options */)

const BlogForm = ({ initialValues, onSubmit }: BlogFormProps) => {
  function handleEditorChange({ html }) {
    initialValues.content = html
  }

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
        <input type="hidden" name="content" value={initialValues.content} />
        <MdEditor
          style={{ height: '500px' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
      <button className="btn">Submit</button>
    </form>
  )
}

export default BlogForm
