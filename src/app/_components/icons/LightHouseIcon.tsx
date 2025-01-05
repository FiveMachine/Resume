import { ComponentPropsWithoutRef } from 'react'

export const LightHouseIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      fill="currentColor"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lighthouse</title>
      <path d="m12 0 5.5 3.5v5H20v3h-2.25l2 12.5H4.25l2-12.5H4v-3h2.5V3.53zm2.94 13.25-6.22 2.26L8 20.04l7.5-2.75zM12 3.56 9.5 5.17V8.5h5V5.15z" />
    </svg>
  )
}
