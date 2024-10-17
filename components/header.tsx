import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { Menu, SquarePen } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b bg-background/40 dark:bg-background-20 py-4 backdrop-blur-md shadow-sm'>
      <nav className='container flex max-w-none items-center justify-between'>
        <Sheet>
          <SheetTrigger className='sm:hidden'>
            <Menu className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent side='left'>
            <ul className='flex flex-col gap-3 text-sm'>
              <li className='font-serif text-2xl font-semibold'>
                <SheetClose asChild>
                  <Link href='/'>Serif</Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        <ul className='hidden items-center gap-14 text-sm font-medium sm:flex'>
          <li className='font-serif text-xl font-semibold'>
            <Link href='/'>Serif</Link>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <ThemeToggle />

          <Button size='sm' className='flex items-center' variant='default' asChild>
            <Link href='/write'><SquarePen className='w-4 h-4 mr-2' />Write</Link>
          </Button>

          <SignedOut>
            <SignInButton mode='modal'>
              <Button size='sm' className='text-white bg-green-800 hover:bg-green-800/80'>Sign in</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
