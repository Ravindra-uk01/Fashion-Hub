import { useState } from "react";
import { userRows } from "../../dummyData";
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id} >
            <button className="userListEdit">
              <EditIcon className="userListIcon" />
            </button>
            </Link>
            <button className="userListDelete" onClick={()=>handleDelete(params.row.id)}>
              <DeleteOutlineIcon className="userListIcon" />
            </button>
          </>
        );
      },
    }

  ];

  return (
    <div className='userList' >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[1]}
        // checkboxSelection
        disableSelectionOnClick
    
      />
    </div>
  )
}

export default UserList