import React from "react";
import SinglePhoneInfo from "../../components/SinglePhoneInfo";
import SinglePhoneDescr from "../../components/SinglePhoneDescr";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhones } from "../../redux/slices/phonesSlice";

export default function SinglePhonePage() {
  const { phones, status } = useSelector((state) => state.phones);
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhones(id));
  }, [id]);

  if (status === "loading") {
    return "loading";
  }

  const { name, imageUrl, price, stars, RAM, memory, camera } = phones[0];
  console.log(name);
  return (
    <>
      <SinglePhoneInfo
        imageUrl={imageUrl}
        name={name}
        price={price}
        stars={stars}
      />
      <SinglePhoneDescr name={name} RAM={RAM} memory={memory} camera={camera} />
    </>
  );
}