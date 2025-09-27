import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, updateProfile } from "./userSlice";

function UserComponent() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Info</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Logged In: {user.loggedIn ? "Yes" : "No"}</p>

      <button onClick={() => dispatch(login({ name: "홍감자", email: "potato@test.com" }))}>
        Login as Alice
      </button>

      <button onClick={() => dispatch(updateProfile({ name: "홍토마토" }))}>
        Update Name to Bob
      </button>

      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

export default UserComponent;