const compareReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT_1":
        return { ...state, product1: action.prod};
      case "ADD_PRODUCT_2":
        return { ...state, product2: action.prod};
      default:
        console.log(action.type);
        return { state };
    }
  };

  const initialState ={
    product1: {
        _id: "1P",
        title: "Hyundai Verna",
        brand: "Hyundai",
        price:{display: "₹9.32-15.36L", computable:932_000},
        categoryName: "Sedan",
        src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Hyundai_Verna_rqzuy4.webp",
        rating:4,
        specs:{
          mileage:"25.0 kmpl",
          engine:"1497 cc",
          BHP:118.35,
          transmission:"Manual/Automatic",
          seats:5,
          serviceCost:"₹ 3,967/yr"
        }
      },
    product2: {
        _id: "8P",
        title: "Tata Tiago",
        brand: "Tata",
        price:{display: "₹5.22-7.67L", computable:522_000},
        categoryName: "Hatchback",
        src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Tata_Tiago_qluoly.webp",
        rating:4.3,
        specs:{
       mileage:"26.49 kmpl",
       engine:"1199 cc",
       BHP:84.82,
       transmission:"Manual/Automatic",
       seats:5,
       serviceCost:"₹ 4,448/yr"
     }
      }
  }

  export {compareReducer , initialState};