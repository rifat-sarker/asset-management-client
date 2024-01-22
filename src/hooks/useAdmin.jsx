import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
  const {user,loading} = useAuth();
  
  const axiosSecure = useAxiosSecure();
  const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin' ],
    enabled: !loading,
    queryFn: async()=>{
      console.log('checking the user is ', user);
      const res = await axiosSecure.get(`/employees/admin/${user.email}`)
      console.log(res.data);
      return res.data?.admin
    }
  })
  return [isAdmin,isAdminLoading]
};

export default useAdmin;