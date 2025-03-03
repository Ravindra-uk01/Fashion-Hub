import "./user.css";

const User = () => {

  // call for all users here
  return (
    <div className="user"> 
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer"> 
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" 
             alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Username:</span>
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Full Name:</span>
              <span className="userShowInfoTitle">Anna Becker</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Email:</span>
              <span className="userShowInfoTitle"> annabeck99@gmail.com </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Phone:</span>
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Address:</span>
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"> 
          <span className="userUpdateTitle" >Edit</span>
          <form>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="abcd@gmail.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" /> 
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="New York | USA" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" 
                alt="" className="userUpdateImg" />
                <label htmlFor="file"><i className="userUpdateIcon fas fa-user-edit"></i></label>
                <input type="file" id="file" style={{display: "none"}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User