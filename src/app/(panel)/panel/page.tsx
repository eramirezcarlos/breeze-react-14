import ECommerce from '@/components/Dashboard/E-commerce'
import { Metadata } from 'next'

export const metadata = {
    title: 'Real Estate Dashboard',
    description: 'Administration and Maintenance modulefor the Website',
}

const Dashboard = () => {
    return (
        <>
            <ECommerce />
        </>
    )
}

export default Dashboard
