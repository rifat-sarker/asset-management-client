import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";

const MyTeam = () => {
  const axiosSecure = useAxiosSecure();
  const { data: team = [] } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employees");
      // console.log(res.data);
      return res.data;
    },
  });

  const daysUntilBirthday = (dob) => {
    if (!dob) {
      return "N/A";
    }

    const [year, month, day] = dob.split("-").map(Number);
    const currentDate = new Date();
    const nextBirthday = new Date(currentDate.getFullYear(), month - 1, day);

    if (currentDate > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const timeDiff = nextBirthday - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (daysRemaining === 0) {
      return "Happy Birthday!";
    } else if (daysRemaining < 0) {
      return `Birthday occurred ${Math.abs(daysRemaining)} days ago.`;
    } else {
      return `Days until birthday: ${daysRemaining}`;
    }

    // return daysRemaining;
  };

  return (
    <div>
      <h1 className="text-4xl text-center my-12">Upcoming Events</h1>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Member Image</th>
              <th>Member Name</th>
              <th>Date of Birth</th>
              <th>Remaining Days</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member, idx) => (
              <tr key={member._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={member.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{member.name}</td>
                <td>{member.dob}</td>
                <td>{daysUntilBirthday(member.dob)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="my-12">
        <h2 className="text-4xl text-center my-16">Member List</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>#</th>
                <th>Member Image</th>
                <th>Member Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member, idx) => (
                <tr key={member._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={member.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{member.name}</td>
                  <td>{member.role || "employee"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyTeam;
