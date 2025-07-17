import { cn } from '@/lib/utils'

type WrapperProps = {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'aside'
}
export default function Wrapper({
  children,
  className,
  as: Component = 'div',
}: WrapperProps) {
  return (
    <Component className={cn('max-w-6xl mx-auto', className)}>
      {children}
    </Component>
  )
}
