import React from 'react'

export type BaseTemplateProps = {
  children: React.ReactNode
}

function Base({ children }: BaseTemplateProps) {
  return <>{children}</>
}

export default Base
