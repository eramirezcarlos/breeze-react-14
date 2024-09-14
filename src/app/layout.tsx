import '@/app/global.css'

export const metadata = {
    title: 'Laravel',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className="antialiased">
                {children}
            </body>
        </html>
    )
}

/*
import '@/app/global.css'

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: 'Laravel',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
*/

// import '@/app/global.css'

// export const metadata = {
//     title: 'Laravel',
// }
// const RootLayout = ({ children }) => {
//     return (
//         <html lang="en">
//             <body className="antialiased">{children}</body>
//         </html>
//     )
// }

// export default RootLayout
