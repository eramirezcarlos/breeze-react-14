'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

//const PanelLayout = ({ children, header }) => {
const PanelLayout = ({ children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    // if (!user) {
    //     return <Loading />
    // }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* <Navigation user={user} /> */}

            <h3>nuevo </h3>

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header> */}

            <main>{children}</main>
        </div>
    )
}

export default PanelLayout
