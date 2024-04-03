'use client'
import React, { useEffect, useState, StrictMode } from 'react'
import Image from 'next/image'
import { UserData } from '@/types/UserData'
import apiService from '@/services/apiServices'
import UsersList from '@/components/Tables/UsersList'

interface ListUsersProps {
    userData: UserData;
}




// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {

    const [userData, setUsers] = useState<UserData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.fetchData<UserData[]>('/users')
                setUsers(data)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }
    
        fetchData()
    }, [])
    
    
    return (
        <div className="py-12">
            {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You're logged in!
                    </div>
                </div>
            </div> */}
            <UsersList userData={userData} />

        </div>
    )
}

export default Dashboard

