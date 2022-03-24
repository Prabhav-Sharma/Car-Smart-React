import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
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
  {
    _id: "2P",
    title: "BYD E6",
    brand: "BYD",
    price:{display: "₹29.15L", computable:2_915_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/BYD_E6_svodid.webp",
    rating:4,
    specs:{
      mileage:"520 km",
      engine:"71.7 kWh",
      BHP:93.87,
      transmission:"Automatic",
      seats:5,
      serviceCost:"₹ 2,469/yr"
    }
  },
  {
    _id: "3P",
    title: "Tata Nexon EV",
    brand: "Tata",
    price:{display: "₹14.29-16.90L", computable:1_429_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/Nexon_EV_ghdkbw.webp",
    rating:4,
     specs:{
    mileage:"312 Km",
    engine:"30.2KWH",
    BHP:127.0,
    transmission:"Automatic",
    seats:5,
    serviceCost:"₹ 3,454/yr"
  }
},
  {
    _id: "4P",
    title: "BMW X5",
    brand: "BMW",
    price:{display: "₹76.50-92.90L", computable:7_650_000},
    categoryName: "Luxury",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/BMW_X5_i39qyy.webp",
    rating:5,
    specs:{
   mileage:"13.38 kmpl",
   engine:"2998 cc",
   BHP:335.26,
   transmission:"Automatic",
   seats:5,
   serviceCost:"₹ 14,454/yr"
 }
  },
  {
    _id: "5P",
    title: "Audi e-tron GT",
    brand: "Audi",
    price:{display: "₹1.79Cr", computable:17_900_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/e-tron_GT_volvij.webp",
    rating:4.8,
    specs:{
   mileage:"388 Km",
   engine:"95 kWh",
   BHP:390.0,
   transmission:"Automatic",
   seats:5,
   serviceCost:"₹ 20,454/yr"
 }
  },
  {
    _id: "6P",
    title: "Hyundai Kona Electric",
    brand: "Hyundai",
    price:{display: "₹23.79-23.97L", computable:2_379_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/Kon_Electric_jhdsne.webp",
    rating:4.5,
    specs:{
   mileage:"452 Km",
   engine:"39.2 kwH",
   BHP:54.14,
   transmission:"Automatic",
   seats:5,
   serviceCost:"₹ 2,787/yr"
 }
  },
  {
    _id: "7P",
    title: "Mahindra E-Verito",
    brand: "Mahindra",
    price:{display: "₹10.15-10.49L", computable:1_015_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/E-Verito_ns2dn0.webp",
    rating:3.8,
    specs:{
   mileage:"140 km",
   engine:"18.55 kWh ",
   BHP:41.57,
   transmission:"Automatic",
   seats:5,
   serviceCost:"₹ 3,684/yr"
 }
  },
  {
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
  },
  {
  _id: "9P",
  title: "Maruti Wagon R",
  brand: "Maruti",
  price:{display: "₹5.39-7.10L", computable:539_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Maruti_Wagon_R_bvn9aq.webp",
  rating:3.5,
  specs:{
 mileage:"34.05 kmpl",
 engine:"1197 cc",
 BHP:88.5,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 4,689/yr"
}
},
{
  _id: "10P",
  title: "Hyundai i20",
  brand: "Hyundai",
  price:{display: "₹6.98-11.48L", computable:698_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Hyundai_I20_x1pk5h.webp",
  rating:4.3,
  specs:{
 mileage:"25.0 kmpl",
 engine:"1493 cc",
 BHP:118.36,
 transmission:"Automatic/Manual",
 seats:5,
 serviceCost:"₹ 2,882/yr"
}
},
{
  _id: "11P",
  title: "Audi e-tron",
  brand: "Audi",
  price:{display: "₹1-1.18Cr",computable:10_000_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/e-tron_o7lfkw.webp",
  rating:4.7,
  specs:{
 mileage:"359 km",
 engine:"71 kWh ",
 BHP:41.57,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 3,684/yr"
}
},
{
  _id: "12P",
  title: "Strom Motors R3",
  brand: "Strom Motors",
  price:{display: "₹4.50L", computable:450_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/SM_R3_wkpbby.webp",
  rating:3.6,
  specs:{
 mileage:"140 km",
 engine:"18.55 kWh ",
 BHP:408,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 14,684/yr"
}
},
{
  _id: "13P",
  title: "Maruti Swift",
  brand: "Maruti",
  price:{display: "₹5.90-8.77L", computable:590_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Maruti_Swift_o21l87.webp",
  rating:4.6,
  specs:{
 mileage:"23.76 kmpl",
 engine:"1197 cc",
 BHP:88.5,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 4,703/yr"
}
},
{
  _id: "14P",
  title: "Renault KWID",
  brand: "Renault",
  price:{display: "₹4.49L", computable:449_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Renault_KWID_r3xkuk.webp",
  rating:4,
  specs:{
 mileage:"22.25 kmpl",
 engine:"999 cc",
 BHP:67.06,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 2,125/yr"
}
},
{
  _id: "15P",
  title: "Maruti Baleno",
  brand: "Maruti",
  price:{display: "₹5.90-8.77L", computable:590_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Maruti_Baleno_qgbrwj.webp",
  rating:4.4,
  specs:{
 mileage:"22.94 kmpl",
 engine:"1197 cc ",
 BHP:88.5,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 7,532/yr"
}
},
{
  _id: "16P",
  title: "Porche Taycan",
  brand: "Porsche",
  price:{display: "₹1.15-2.10Cr", computable:11_500_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/Taycan_kgqjnp.webp",
  rating:5,
  specs:{
 mileage:"456 km",
 engine:"93.4 kWh ",
 BHP:616.87,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 25,477/yr"
}
},
{
  _id: "17P",
  title: "Jaguar I-pace",
  brand: "Jaguar",
  price:{display: "₹1.08-1.12Cr", computable:10_800_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/I-pace_ewpmcu.webp",
  rating:4.5,
  specs:{
 mileage:"470 km",
 engine:"90 kWh ",
 BHP:394.26,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 30,475/yr"
}
},
{
  _id: "18P",
  title: "Skoda Rapid",
  brand: "Skoda",
  price:{display: "₹11.99-13.49L", computable:1_199_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Skoda_Rapid_bkbykf.webp",
  rating:3.9,
  specs:{
 mileage:"18.97 kmpl",
 engine:"999 cc",
 BHP:108.62,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 8,684/yr"
}
},
{
  _id: "19P",
  title: "Maruti Dzire",
  brand: "Maruti",
  price:{display: "₹6.09-9.13L", computable:609_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Swift_Dzire_gzn4ct.webp",
  rating:3.4,
  specs:{
 mileage:"31.12 kmpl",
 engine:"18.55 kWh ",
 BHP:88.5,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 3,546/yr"
}
},
{
  _id: "20P",
  title: "Tata Tigor",
  brand: "Tata",
  price:{display: "₹5.82-8.44L", computable:582_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Tata_Tigor_Sedan_xguply.webp",
  rating:2.8,
  specs:{
 mileage:"20.3 kmpl",
 engine:"1199 cc",
 BHP:84.82,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 2,852/yr"
}
},
{
  _id: "21P",
  title: "Renault Kiger",
  brand: "Renault",
  price:{display: "₹5.79-10.22L", computable:579_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Renault_Kiger_eszt2h.webp",
  rating:3.8,
  specs:{
 mileage:"20.53 kmpl",
 engine:"1999 cc",
 BHP:98.63,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 3,684/yr"
}
},
{
  _id: "22P",
  title: "Mercedes-Benz EQC",
  brand: "Mercedes-Benz",
  price:{display: "₹1.06Cr",computable:10_600_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/Benz_EQC_rmfcwv.webp",
  rating:5,
  specs:{
 mileage:"471 Km",
 engine:"80 kWh ",
 BHP:345.98,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 36,415/yr"
}
},
{
  _id: "23P",
  title: "Mahindra Thar",
  brand: "Mahindra",
  price:{display: "₹13.17-15.53L", computable:1_317_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Mahindra_Thar_y1r0yt.webp",
  rating:2.7,
  specs:{
 mileage:"15.2 kmpl",
 engine:"2184 cc",
 BHP:150.0,
 transmission:"Automatic/Manual",
 seats:4,
 serviceCost:"₹ 9,784/yr"
}
},
{
  _id: "24P",
  title: "Mercedes-Benz GLS",
  brand: "Mercedes-Benz",
  price:{display: "₹1.13-2.47Cr",computable:11_300_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Benz_GLS_ret3i7.webp",
  rating:4.8,
  specs:{
 mileage:"8 kmpl",
 engine:"3982 cc",
 BHP:549.81,
 transmission:"Automatic",
 seats:7,
 serviceCost:"₹ 28,984/yr"
}
},
{
  _id: "25P",
  title: "Volvo XC90",
  brand: "Volvo",
  price:{display: "₹90.90L-1.31Cr", computable:9_090_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Volvo_XC90_kgm9dj.webp",
  rating:1.9,
  specs:{
 mileage:"36.0 kmpl",
 engine:"1969 cc",
 BHP:400.0,
 transmission:"Automatic",
 seats:7,
 serviceCost:"₹ 32,684/yr"
}
},
{
  _id: "26P",
  title: "Mahindra XUV700",
  brand: "Mahindra",
  price:{display: "₹12.95-23.79L", computable:1_295_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682481/Products/XUV700_ca00we.webp",
  rating:2.9,
  specs:{
 mileage:"16.50 kmpl",
 engine:"2198 cc",
 BHP:197.13,
 transmission:"Automatic/Manual",
 seats:7,
 serviceCost:"₹ 6,848/yr"
}
},
{
  _id: "27P",
  title: "Mahindra Bolero",
  brand: "Mahindra",
  price:{display: "₹8.99-9.99L", computable:899_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682481/Products/Mahindra_Bolero_vfxazg.webp",
  rating:1.7,
  specs:{
 mileage:"16.0 kmpl",
 engine:"1498 cc",
 BHP:74.96,
 transmission:"Manual",
 seats:7,
 serviceCost:"₹ 6,985/yr"
}
},
{
  _id: "28P",
  title: "Toyota Fortuner",
  brand: "Toyota",
  price:{display: "₹31.39-43.43L", computable:3_139_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Toyota_Fortuner_nmovbm.webp",
  rating:4.5,
  specs:{
 mileage:"10 kmpl",
 engine:"2755 cc",
 BHP:201.15,
 transmission:"Automatic/Manual",
 seats:7,
 serviceCost:"₹ 6,344/yr"
}
},
{
  _id: "29P",
  title: "Audi RS e-tron GT",
  brand: "Audi",
  price:{display: "₹2.04Cr", computable:20_400_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/RS_e-tron_GT_zdtywf.webp",
  rating:4.8,
  specs:{
 mileage:"472 km",
 engine:"93.4 kWh",
 BHP:475,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 14,265/yr"
}
},
{
  _id: "30P",
  title: "Tata Tigor-EV",
  brand: "Tata",
  price:{display: "₹11.99-13.14L", computable:1_199_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/TIGOR-EV_rrlnmq.webp",
  rating:1.8,
  specs:{
 mileage:"306 km",
 engine:"26 kWh ",
 BHP:73.75,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 4,446/yr"
}
},
{
  _id: "31P",
  title: "Mahindra Scorpio",
  brand: "Mahindra",
  price:{display: "₹13.18-18.14L", computable:1_318_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Mahindra_Scorpia_dv3tfq.webp",
  rating:3.8,
  specs:{
 mileage:"14 kmpl",
 engine:"2179 cc",
 BHP:140,
 transmission:"Manual",
 seats:9,
 serviceCost:"₹ 3,794/yr"
}
},
{
  _id: "32P",
  title: "Mercedes-Benz GLA",
  brand: "Mercedes-Benz",
  price:{display: "₹44.00-48.10L", computable:4_400_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Benz_GLA_dc6xx8.webp",
  rating:4.8,
  specs:{
 mileage:"13.7 kmpl",
 engine:"1950 cc",
 BHP:187.74,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 13,684/yr"
}
},
{
  _id: "33P",
  title: "Honda City",
  brand: "Honda",
  price:{display: "₹9.29-9.99L", computable:929_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Honda_City_p3cy3i.webp",
  rating:5,
  specs:{
 mileage:"24.1 kmpl",
 engine:"1498 cc",
 BHP:119.35,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 12,229/yr"
}
},
{
  _id: "34P",
  title: "Skoda Slavia",
  brand: "Skoda",
  price:{display: "₹10.69-17.79L", computable:1_069_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Skoda_Slavia_d53ayq.webp",
  rating:4.2,
  specs:{
 mileage:"19.47 kmpl",
 engine:"1498 cc",
 BHP:147.52,
 transmission:"Manual/Automatic",
 seats:5,
 serviceCost:"₹ 9,684/yr"
}
},
{
  _id: "35P",
  title: "Audi A6",
  brand: "Audi",
  price:{display: "₹58.80-64.70L", computable:5_880_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Audi_A6_wv81lo.webp",
  rating:3.8,
  specs:{
 mileage:"14.11 kmpl",
 engine:"1984 cc",
 BHP:241.3,
 transmission:"Automatic",
 seats:5,
 serviceCost:"₹ 28,984/yr"
}
},
{
  _id: "36P",
  title: "BMW Z4",
  brand: "BMW",
  price:{display: "₹69.90-82.90L", computable:6_990_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/BMW_Z4_xieevw.webp",
  rating:4.9,
  specs:{
 mileage:"14.37 kmpl",
 engine:"2998 cc",
 BHP:335,
 transmission:"Automatic",
 seats:2,
 serviceCost:"₹ 30,656/yr"
}
},

];
