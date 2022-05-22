import React from "react";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";

function order() {
  const {
    userDataState: { orders },
  } = useUserData();

  return <div>order</div>;
}

export default order;
