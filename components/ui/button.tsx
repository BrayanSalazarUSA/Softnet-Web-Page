import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[999px] border text-sm font-semibold tracking-[-0.02em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'border-[#111827] bg-[#111827] text-white shadow-[0_10px_28px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:border-[#0B0D12] hover:bg-[#0B0D12] hover:shadow-[0_16px_34px_rgba(15,23,42,0.22)]',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border-black/10 bg-white text-[#111827] shadow-[0_8px_20px_rgba(15,23,42,0.05)] backdrop-blur-md hover:-translate-y-0.5 hover:border-black/16 hover:bg-[#F8FAFC] hover:text-[#0B0D12] dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'border-white/10 bg-[#0B0D12] text-white shadow-[0_16px_38px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:border-primary/28 hover:bg-[#111827]',
        ghost:
          'border-transparent bg-transparent hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-2.5 has-[>svg]:px-4',
        sm: 'h-9 gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-12 px-6 has-[>svg]:px-5',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
