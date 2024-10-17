import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='container py-24 flex items-center justify-center'>
      <SignUp />
    </div>
  )
}
