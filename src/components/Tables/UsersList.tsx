import Image from "next/image";
import { Users } from "@/types/Users";

const usersData: Users[] = [
  {
      "id": 5,
      "name": "Carlos Arturo Ramirez",
      "email": "admin@admin.com",
      "email_verified_at": null,
      "username": "admin@admin.com",
      "role_id": 1,
      "image": "avatar.png",
      "status": "A",
      "about": "Chevere",
      "created_at": null,
      "updated_at": "2024-02-22T13:54:21.000000Z"
  },
  {
      "id": 6,
      "name": "Mario Vega",
      "email": "agent@agent.com",
      "email_verified_at": null,
      "username": "agent@agent.com",
      "role_id": 2,
      "image": "avatar.png",
      "status": "A",
      "about": "Many things about Marito, he is a good guy",
      "created_at": null,
      "updated_at": "2020-11-22T20:17:05.000000Z"
  },
  {
      "id": 10,
      "name": "Joaco Marin",
      "email": "user@user.com",
      "email_verified_at": null,
      "username": "user@user.com",
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": "more chevere",
      "created_at": null,
      "updated_at": "2020-11-08T10:09:29.000000Z"
  },
  {
      "id": 11,
      "name": "Test User",
      "email": "test@example.com",
      "email_verified_at": "2023-10-22T12:23:02.000000Z",
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  },
  {
      "id": 12,
      "name": "Dr. Elvera Boyer DDS",
      "email": "graphql@test.com",
      "email_verified_at": null,
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  },
  {
      "id": 13,
      "name": "Kathryn Eichmann",
      "email": "hudson.marietta@bayer.info",
      "email_verified_at": null,
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  },
  {
      "id": 14,
      "name": "Mikel Jacobi",
      "email": "west.albin@schiller.net",
      "email_verified_at": null,
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  },
  {
      "id": 15,
      "name": "Trace Kuhn",
      "email": "lang.dayna@grant.com",
      "email_verified_at": null,
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  },
  {
      "id": 16,
      "name": "Mr. Jamison Strosin",
      "email": "modesto86@bauch.com",
      "email_verified_at": null,
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  },
  {
      "id": 17,
      "name": "Shawna Crona",
      "email": "tmann@spinka.com",
      "email_verified_at": null,
      "username": null,
      "role_id": 3,
      "image": "avatar.png",
      "status": "A",
      "about": null,
      "created_at": "2023-10-22T12:23:02.000000Z",
      "updated_at": "2023-10-22T12:23:02.000000Z"
  }
];

const UsersList = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          List of Users
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t 
                    border-stroke py-4.5 px-4 
                    dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">ID</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">About</p>
        </div>

        
      </div>

      {usersData.map((users, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center" >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={"http://localhost:8000/api/images/" + users.image}
                  width={30}
                  height={30}
                  alt="Users"
                /> 
              </div>
              <p className="text-sm text-black dark:text-white">
                {users.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {users.name}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${users.name}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{users.name}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${users.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
