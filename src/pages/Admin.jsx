import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllCountsAPI } from '../../Service/allAPIs';

function Admin() {
  const [allData, setAllData] = useState({ usersCount: 0, postCount: 0, userList: [] });
  const [allUsers, setAllUsers] = useState([]);

  const getAllCounts = async () => {
    try {
      const result = await getAllCountsAPI();
      if (result.status === 200) {
        const { usersCount, postCount, userList } = result.data;
        setAllData({ usersCount, postCount, userList });
        setAllUsers(userList); // Setting user data
      } else {
        console.log(result.response.data);
      }
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  useEffect(() => {
    getAllCounts();
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: 'auto', backgroundColor: '#0E0F0F' }} className='w-100'>
        <div style={{ height: 'auto' }} className='bg-black shadow rounded container m-auto'>
          <h4 className='text-white text-center text-capitalize '>
            Admin<span className='text-success'> Dashboard</span>
          </h4>
          <div className='m-5 container-fluid '>
            <div className='row'>
              <div className='col-lg-3'></div>
              
                  <div className='col-lg-3 btn rounded m-2 h-100 btn-outline-success shadow '>
                    <h4>TOTAL USERS<i class="fa-solid fa-users ms-2"></i></h4>
                    <hr className='text-success' />
                    <h3 className='text-white'>{allData.usersCount}</h3>
                  </div>
                  <div className='col-lg-3 btn rounded m-2 h-100 btn-outline-success shadow '>
                    <h4>TOTAL POST<i class="fa-solid fa-heart ms-2"></i></h4>
                    <hr className='text-success' />
                    <h3 className='text-white'>{allData.postCount}</h3>
                  </div>
                  <div className='col-lg-3'></div>

                
              
          
            </div>
            
          </div>
          <div className="row m-4">
              
          <h4 className='text-white text-center text-capitalize '>
            Users<span className='text-success'> Details</span>
          </h4>
              <table className='table-dark  table-active table-responsive mb-4'>
                  <thead>
                    <tr className='border'>
                      <th>   Email</th>
                      <th>   Username</th>
                      <th>   Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((user, index) => (
                      <tr key={index} className='border'>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
 