
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata = {
    // title: 'Laravel - Dashboard',
    title: "TailAdmin | Next.js E-commerce Dashboard Template",
    description: "This is Home Blog page for TailAdmin Next.js",  
}

const Dashboard = () => {
    return (
        <>
        <ECommerce />
        </>
    )
}

export default Dashboard
        
        {/*  
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You're logged in laravel new!
                    </div>
                </div>
            </div>
        </div>
        */}
