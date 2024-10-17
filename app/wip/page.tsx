import Link from "next/link";

import { ArrowLeftIcon, Construction } from "lucide-react";

export default function Page() {
    return (
        <div className='grow px-4 sm:px-6 sm:py-24 flex items-center justify-center lg:px-8'>
            <div className='mx-auto max-w-max'>
                <main className='flex flex-col'>
                    <div className="flex items-center gap-4 max-w-3xl">
                        <Construction className="size-24 flex w-max" />
                        <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                            <h1 className='text-3xl font-bold tracking-tight sm:text-5xl flex flex-col max-w-xl'>
                                Sorry, this page is under construction
                            </h1>
                            <p className='mt-1 text-base text-muted-foreground'>
                                Thanks for your patience, and visit another page.
                            </p>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                            <Link
                                href='/'
                                className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
                            >
                                <ArrowLeftIcon className='h-5 w-5' />
                                <span>Go back home</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}