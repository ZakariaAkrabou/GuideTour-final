import { useEffect, useState } from 'react';
import { MdPersonSearch, MdEditSquare, MdDeleteForever } from "react-icons/md";
import AddUser from '../Modals/AddUser';
import UpdateUser from '../Modals/UpdateUser';
import DeleteUser from '../Modals/DeleteUser';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuides } from '../features/userSlices';



export default function Guides() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lastClicked, setLastClicked] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guides)

  console.log(guides);


  useEffect(() => {
    dispatch(fetchGuides());
  }, [dispatch]);

  const handleEdit = (userId) => {
    setSelectedUserId(userId);
    setModalUpdate(true);
  };

  const handleDeleteModalOpen = (userId) => {
    setSelectedUserId(userId);
    setModalDelete(true);
  };

  const handleItemsPerPageChange = (e) => {
    setCurrentPage(1);
    setItemsPerPage(parseInt(e.target.value));
  };

  const filteredUsers = guides.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = guides ? Math.min(indexOfFirstItem + itemsPerPage, guides.length) : 0;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    if (currentItems.length === itemsPerPage) {
      setCurrentPage(currentPage + 1);
      setLastClicked('next');
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setLastClicked('previous');
    }
  };
  return (
    <div className='bg-[#FAF8F8] h-[480px] m-3 shadow-md rounded-md relative'>
      <div className='flex justify-between p-2 items-center'>
        <h1 className="text-2xl font-bold text-[#6499E9]">Guides</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <MdPersonSearch size={20} className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black' />
            <input
            className='rounded-lg pl-8 w-[200px] lg:w-[300px]'
            type="text"
            placeholder='Search by First Name..'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>
          <button onClick={() => setModalOpen(true)} className='font-bold text-white rounded-lg bg-[#6499E9] pl-8 pr-8 shadow-blue-500 shadow-md'>
            Add
          </button>
          {modalOpen && <AddUser closeModal={() => setModalOpen(false)} />}
        </div>
      </div>
       {filteredUsers.length === 0 ? (
      <p className="text-center text-gray-500 mt-4">No Guide Is found.</p>
    ) : (
      <div className="rounded-[16px] overflow-hidden m-2">
        <table className="w-full">
          <thead>
            <tr className='bg-[#FFFFFF] text-left'>
              <td>
                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
              </td>
              <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Full Name</th>
              <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Bio</th>
              <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Specialization</th>
              <th className="py-1  font-bold text-[16px] text-[#2E5D9F]">Identity</th>
              <th className="py-1  font-bold text-[16px] text-[#2E5D9F]">certificate</th>
              <th className="py-1  font-bold text-[16px] text-[#2E5D9F]">Profile</th>
              <th className="py-1 p-2  font-bold text-[16px] text-[#2E5D9F]">Status</th>
              <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, index) => (
              <tr key={index} className='bg-white border-b border-t text-left'>
                <td>
                  <button
                    className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 ${selectedUserId === user.user_id ? 'bg-black border-black' : ''}`}
                    onClick={() => setSelectedUserId(selectedUserId === user.user_id ? null : user.user_id)}
                  ></button>
                </td>
                <td className="py-1.5">{user.firstName} {user.lastName}</td>
                <td className="py-1.5">{user.bio}</td>
                <td className="py-1.5">{user.specialization}</td>
                <td className="py-1.5 ">
              <img src={`http://localhost:4000/${user.identity}`} alt="identity" className="w-10 h-10 object-cover rounded-full" />
               </td>                
               <td className="py-1.5">
              <img src={`http://localhost:4000/${user.certificate}`} alt="certificate" className="w-10 h-10 object-cover rounded-full" />
               </td>                
               <td className="py-1.5">
              <img src={`http://localhost:4000/${user.profile_picture}`} alt="profile" className="w-10 h-10 object-cover rounded-full" />
               </td>                 
               <td className={` flex justify-center mt-3.5  ${user.status === 'approved' ? 'bg-green-600 rounded-2xl' : user.status === 'pending' ? 'bg-gray-400 rounded-2xl' : user.status === 'rejected' ? 'bg-red-600 rounded-2xl' : ''}`}>{user.status}</td>                
               <td className='relative pl-2'>
                  <button onClick={() => handleEdit(user._id)} className='text-lg text-blue-600 pr-2'><MdEditSquare /></button>
                  <button onClick={() => handleDeleteModalOpen(user._id)} className='text-xl text-red-600'><MdDeleteForever /></button>
                  {selectedUserId === user._id && modalUpdate && <UpdateUser closeModal={() => setModalUpdate(false)} userId={user._id} />}
                  {modalDelete && <DeleteUser closeModal={() => setModalDelete(false)} userId={selectedUserId} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      <div className="flex items-center absolute bottom-0 right-2">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2 text-gray-500">Items per page:</label>
          <select id="itemsPerPage" className='text-gray-600 bg-transparent cursor-pointer font-normal underline' onChange={handleItemsPerPageChange} value={itemsPerPage}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="text-gray-500 ml-3 mr-2">
          {guides && `${indexOfFirstItem + 1} - ${Math.min(indexOfLastItem, guides.length)} of ${guides.length}`}
        </div>
        <div className="flex text-2xl space-x-4">
          {guides && guides.length > itemsPerPage && (
            <>
              <button
                onClick={goToPreviousPage}
                className={` ${lastClicked === 'first' ? 'text-black' : 'text-gray-400'}`}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={goToNextPage}
                className={` ${lastClicked === 'last' ? 'text-black' : 'text-gray-400'}`}
                disabled={indexOfLastItem === guides.length}
              >
                <IoIosArrowForward />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
