import { ComponentPropsWithoutRef } from 'react'
export const ArrowUp = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70711 9.70711L12.7071 4.7071L15 7L16 6V0H10Z"
        fill="currentColor"
      />
      <path d="M1 2H6V4H3V13H12V10H14V15H1V2Z" fill="currentColor" />
    </svg>
  )
}
