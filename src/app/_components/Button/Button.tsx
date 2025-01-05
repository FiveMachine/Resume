'use client'
import { DownloadIcon } from 'lucide-react'
import { cn } from '../../../lib/utils'
import styles from './Button.module.scss'
export const Button = () => {
  const handleDownLoad = () => {
    const link = document.createElement('a')
    link.href = '/huevo-resume.pdf'
    link.download = 'huevo-resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <button
      onClick={handleDownLoad}
      className={cn(
        styles.button,
        'flex flex-1 items-center justify-center border-2 border-foreground  hover:border-neutral-700 dark:hover:border-neutral-400 gap-3 text-foreground dark:hover:bg-neutral-400 dark:hover:text-black',
      )}
    >
      Download CV
      <DownloadIcon size={15} className="" />
    </button>
  )
}
{
  /**onClick={() => window.open('/huevo-resume.pdf', '_blank')} */
}
