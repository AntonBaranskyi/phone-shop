import React from "react";
import "./listStyles.scss";
import ListItem from "../PhoneListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhones } from "../../redux/slices/phonesSlice";
import Skeleton from "../Skeleton";
import { SearchContext } from "../../pages/HomePage";

export default function PhoneList() {
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  React.useEffect(() => {
    dispatch(fetchPhones());
  }, []);
  const { phones, status } = useSelector((state) => state.phones);
  const skeletonContent = [...new Array(8)].map((_) => <Skeleton />);
  return (
    <div className="content">
      <div className="wrapper">
        {status === "loading"
          ? skeletonContent
          : phones &&
            phones
              .filter((obj) => {
                return obj.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              })
              .map((item) => {
                return <ListItem key={item.id} {...item} />;
              })}
      </div>
    </div>
  );
}
