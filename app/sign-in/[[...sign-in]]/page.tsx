import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
      <div className='container flex items-center justify-center'>
        <SignIn forceRedirectUrl='/' />
      </div>
  )
}
