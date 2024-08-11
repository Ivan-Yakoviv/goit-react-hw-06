import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const id = useId();

  return (
    <div className={s.searchBox}>
      <label htmlFor={id} className={s.searchLabel}>
        Find contacts by name
      </label>
      <input
        className={s.search}
        id={id}
        type="text"
        placeholder="Enter name"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
