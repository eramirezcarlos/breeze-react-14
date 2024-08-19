'use client'

import React, { useEffect, useState } from 'react'
import ApiService from '@/services/ApiService'
import UsersList from '@/components/Tables/UsersList'
import User from '@/types/User'
import  UserData  from '@/types/UserData'

interface DashboardProps {
    initialUserData?: User[];
}

const Dashboard: React.FC<DashboardProps> = ({ initialUserData = [] }) => {
    const [userData, setUserData] = useState<User[]>(initialUserData)

    useEffect(() => {
        // Fetch user data if not provided as props
        if (initialUserData.length === 0) {
            const fetchUsers = async () => {
                try {
                    const users = await ApiService.getUsers();
                    setUserData(users);
                } catch (error) {
                    console.error('Error fetching users:', error);
                }
            };
            fetchUsers();
        }
    }, [initialUserData]);
   
    return (
        <div className="py-12">
            {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You're logged in!
                    </div>
                </div>
            </div> */}
            {/* <UsersList userData={userData} /> */}
        </div>
    )
}

export default Dashboard