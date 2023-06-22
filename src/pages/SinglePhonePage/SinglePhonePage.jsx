import React from "react";
import SinglePhoneInfo from "../../components/SinglePhoneInfo";
import Header from "../../components/Header";
import SinglePhoneDescr from "../../components/SinglePhoneDescr";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPhones } from "../../redux/slices/phonesSlice";
import "./style.scss";

export default function SinglePhonePage() {
  const { phones, status } = useSelector((state) => state.phones);
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhones(id));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (status === "loading") {
    return "loading";
  }

  const { name, imageUrl, price, stars, RAM, memory, camera } = phones[0];
  console.log(name);
  return (
    <>
      <Header />
      <div className="container-single">
        <SinglePhoneInfo
          imageUrl={imageUrl}
          name={name}
          price={price}
          stars={stars}
          id={id}
        />
        <SinglePhoneDescr
          name={name}
          RAM={RAM}
          memory={memory}
          camera={camera}
        />

        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <button style={{marginBottom:'40px'}}>Повернутися на головну</button>
        </Link>
      </div>
    </>
  );
}
