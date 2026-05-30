import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/sessionSlice.js";

export default function UserSwitcher() {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.polls.users));
  return (
    <Select
      size="large"
      placeholder="Choose a user"
      onChange={(id) => dispatch(login(id))}
      options={users.map((u) => ({ value: u.id, label: u.name }))}
      className="user-select"
    />
  );
}
