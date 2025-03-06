import { Link } from "react-router-dom";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { productRows } from "../../dummyData";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">
                <EditIcon className="productListIcon" />
              </button>
            </Link>

            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlineIcon className="productListIcon" />
            </button>
          </>
        );
      },
    },
  ];

  /// all product list will be here
  return (
    <div className="productList">
      <div className="productListTitleContainer">
        <h1 className="productListTitle">Products List</h1>
        <Link to="/new_product">
          <button className="productListAddButton">
            {" "}
            <AddIcon /> Add New
          </button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[2]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
