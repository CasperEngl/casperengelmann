type AdminPageTitleProps = {
  title: string
  children?: React.ReactNode
}

function AdminPageTitle({ title, children }: AdminPageTitleProps) {
  return (
    <div className="space-x-4 pb-4 border-b border-white flex items-end justify-between">
      <h1 className="text-5xl font-bold leading-none -mb-1">{title}</h1>
      {children}
    </div>
  )
}

export default AdminPageTitle
