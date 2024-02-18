'use client'

import Link from 'next/link'

import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <>
                    <Link
                        href="/panel"
                        className="ml-4 text-sm text-gray-700 underline">
                        Panel Admon
                    </Link>

                    {/* <DropdownUser /> */}
                </>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-gray-700 underline">
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700 underline">
                        Register
                    </Link>

                    <Link
                        href="/panel"
                        className="ml-4 text-sm text-gray-700 underline">
                        Panel Admon
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
