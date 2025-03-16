import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await newRequest.get("/users?new=true");
        const { data } = res.data;
        setUsers(data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.photo ||
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.display_name}</span>
                <span className="widgetSmUserTitle">{user.role}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
