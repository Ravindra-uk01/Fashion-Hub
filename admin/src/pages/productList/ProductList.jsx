import { Link } from "react-router-dom";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../reducers/productReducer";
import ConfirmationModal from "../../components/modals/ConfirmationModal";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const [productId, setProductId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
    setModalVisible(false);
  };

  const handleDeleteForm = (id) => {
    setProductId(id);
    setModalVisible(true);
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "product",
      headerName: "Product",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 160 },
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
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">
                <EditIcon className="productListIcon" />
              </button>
            </Link>

            <button
              className="productListDelete"
              onClick={() => handleDeleteForm(params.id)}
            >
              <DeleteOutlineIcon className="productListIcon" />
            </button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // console.log("products is ", products);

  return (
    <>
      <ConfirmationModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this product?"
        confirmText="Delete"
        cancelText="Cancel"
      />
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
          rows={products}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[2]}
          getRowId={(row) => row._id}
          // checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default ProductList;
