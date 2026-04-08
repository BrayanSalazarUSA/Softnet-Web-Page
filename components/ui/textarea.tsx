import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border border-primary/15 bg-white/[0.03] px-3 py-2 text-base shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-[color,box-shadow,border-color,background-color] outline-none focus-visible:ring-[3px] hover:border-primary/25 hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
