import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Hyundai Verna",
    brand: "Hyundai",
    price:{display: "₹9.32-15.36L", computable:932_000},
    categoryName: "Sedan",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Hyundai_Verna_rqzuy4.webp",
    rating:4
  },
  {
    _id: uuid(),
    title: "BYD E6",
    brand: "BYD",
    price:{display: "₹29.15L", computable:2_915_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/BYD_E6_svodid.webp",
    rating:4
  },
  {
    _id: uuid(),
    title: "Tata Nexon EV",
    brand: "Tata",
    price:{display: "₹14.29-16.90L", computable:1_429_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/Nexon_EV_ghdkbw.webp",
    rating:4
  },
  {
    _id: uuid(),
    title: "BMW X5",
    brand: "BMW",
    price:{display: "₹76.50-92.90L", computable:7_650_000},
    categoryName: "Luxury",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/BMW_X5_i39qyy.webp",
    rating:5
  },
  {
    _id: uuid(),
    title: "Audi e-tron GT",
    brand: "Audi",
    price:{display: "₹1.79Cr", computable:17_900_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/e-tron_GT_volvij.webp",
    rating:4.8
  },
  {
    _id: uuid(),
    title: "Hyundai Kona Electric",
    brand: "Hyundai",
    price:{display: "₹23.79-23.97L", computable:2_379_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/Kon_Electric_jhdsne.webp",
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Mahindra E-Verito",
    brand: "Mahindra",
    price:{display: "₹10.15-10.49L", computable:1_015_000},
    categoryName: "EV",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/E-Verito_ns2dn0.webp",
    rating:3.8
  },
  {
    _id: uuid(),
    title: "Tata Tiago",
    brand: "Tata",
    price:{display: "₹5.22-7.67L", computable:522_000},
    categoryName: "Hatchback",
    src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Tata_Tiago_qluoly.webp",
    rating:4.3
  },
  {
  _id: uuid(),
  title: "Maruti Wagon R",
  brand: "Maruti",
  price:{display: "₹5.39-7.10L", computable:539_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Maruti_Wagon_R_bvn9aq.webp",
  rating:3.5
},
{
  _id: uuid(),
  title: "Hyundai i20",
  brand: "Hyundai",
  price:{display: "₹6.98-11.48L", computable:698_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Hyundai_I20_x1pk5h.webp",
  rating:4.3
},
{
  _id: uuid(),
  title: "Audi e-tron",
  brand: "Audi",
  price:{display: "₹1-1.18Cr",computable:10_000_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/e-tron_o7lfkw.webp",
  rating:4.7
},
{
  _id: uuid(),
  title: "Strom Motors R3",
  brand: "Strom Motors",
  price:{display: "₹4.50L", computable:450_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/SM_R3_wkpbby.webp",
  rating:3.6
},
{
  _id: uuid(),
  title: "Maruti Swift",
  brand: "Maruti",
  price:{display: "₹5.90-8.77L", computable:590_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Maruti_Swift_o21l87.webp",
  rating:4.6
},
{
  _id: uuid(),
  title: "Renault KWID",
  brand: "Renault",
  price:{display: "₹4.49L", computable:449_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Renault_KWID_r3xkuk.webp",
  rating:4
},
{
  _id: uuid(),
  title: "Maruti Baleno",
  brand: "Maruti",
  price:{display: "₹5.90-8.77L", computable:590_000},
  categoryName: "Hatchback",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647680715/Products/Maruti_Baleno_qgbrwj.webp",
  rating:4.4
},
{
  _id: uuid(),
  title: "Porche Taycan",
  brand: "Porsche",
  price:{display: "₹1.15-2.10Cr", computable:11_500_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/Taycan_kgqjnp.webp",
  rating:5
},
{
  _id: uuid(),
  title: "Jaguar I-pace",
  brand: "Jaguar",
  price:{display: "₹1.08-1.12Cr", computable:10_800_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/I-pace_ewpmcu.webp",
  rating:4.5
},
{
  _id: uuid(),
  title: "Skoda Rapid",
  brand: "Skoda",
  price:{display: "₹11.99-13.49L", computable:1_199_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Skoda_Rapid_bkbykf.webp",
  rating:3.9
},
{
  _id: uuid(),
  title: "Swift Dzire",
  brand: "Maruti",
  price:{display: "₹6.09-9.13L", computable:609_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Swift_Dzire_gzn4ct.webp",
  rating:3.4
},
{
  _id: uuid(),
  title: "Tata Tigor",
  brand: "Tata",
  price:{display: "₹5.82-8.44L", computable:582_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Tata_Tigor_Sedan_xguply.webp",
  rating:2.8
},
{
  _id: uuid(),
  title: "Renault Kiger",
  brand: "Renault",
  price:{display: "₹5.79-10.22L", computable:579_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Renault_Kiger_eszt2h.webp",
  rating:3.8
},
{
  _id: uuid(),
  title: "Mercedes-Benz EQC",
  brand: "Mercedes-Benz",
  price:{display: "₹1.06Cr",computable:10_600_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670820/Products/Benz_EQC_rmfcwv.webp",
  rating:5
},
{
  _id: uuid(),
  title: "Mahindra Thar",
  brand: "Mahindra",
  price:{display: "₹13.17-15.53L", computable:1_317_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Mahindra_Thar_y1r0yt.webp",
  rating:2.7
},
{
  _id: uuid(),
  title: "Mercedes-Benz GLS",
  brand: "Mercedes-Benz",
  price:{display: "₹1.13-2.47Cr",computable:11_300_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Benz_GLS_ret3i7.webp",
  rating:4.8
},
{
  _id: uuid(),
  title: "Volvo XC90",
  brand: "Volvo",
  price:{display: "₹90.90L-1.31Cr", computable:9_090_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Volvo_XC90_kgm9dj.webp",
  rating:1.9
},
{
  _id: uuid(),
  title: "Mahindra XUV700",
  brand: "Mahindra",
  price:{display: "₹12.95-23.79L", computable:1_295_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682481/Products/XUV700_ca00we.webp",
  rating:2.9
},
{
  _id: uuid(),
  title: "Mahindra Bolero",
  brand: "Mahindra",
  price:{display: "₹8.99-9.99L", computable:899_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682481/Products/Mahindra_Bolero_vfxazg.webp",
  rating:1.7
},
{
  _id: uuid(),
  title: "Toyota Fortuner",
  brand: "Toyota",
  price:{display: "₹31.39-43.43L", computable:3_139_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Toyota_Fortuner_nmovbm.webp",
  rating:4.5
},
{
  _id: uuid(),
  title: "Audi RS e-tron GT",
  brand: "Audi",
  price:{display: "₹2.04Cr", computable:20_400_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/RS_e-tron_GT_zdtywf.webp",
  rating:4.8
},
{
  _id: uuid(),
  title: "Tata Tigor-EV",
  brand: "Tata",
  price:{display: "₹11.99-13.14L", computable:1_199_000},
  categoryName: "EV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647670819/Products/TIGOR-EV_rrlnmq.webp",
  rating:1.8
},
{
  _id: uuid(),
  title: "Mahindra Scorpio",
  brand: "Mahindra",
  price:{display: "₹13.18-18.14L", computable:1_318_000},
  categoryName: "SUV",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647682482/Products/Mahindra_Scorpia_dv3tfq.webp",
  rating:3.8
},
{
  _id: uuid(),
  title: "Mercedes-Benz GLA",
  brand: "Mercedes-Benz",
  price:{display: "₹44.00-48.10L", computable:4_400_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Benz_GLA_dc6xx8.webp",
  rating:4.8
},
{
  _id: uuid(),
  title: "Honda City",
  brand: "Honda",
  price:{display: "₹9.29-9.99L", computable:929_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Honda_City_p3cy3i.webp",
  rating:5
},
{
  _id: uuid(),
  title: "Skoda Slavia",
  brand: "Skoda",
  price:{display: "₹10.69-17.79L", computable:1_069_000},
  categoryName: "Sedan",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647681867/Products/Skoda_Slavia_d53ayq.webp",
  rating:4.2
},
{
  _id: uuid(),
  title: "Audi A6",
  brand: "Audi",
  price:{display: "₹58.80-64.70L", computable:5_880_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/Audi_A6_wv81lo.webp",
  rating:3.8
},
{
  _id: uuid(),
  title: "BMW Z4",
  brand: "BMW",
  price:{display: "₹69.90-82.90L", computable:6_990_000},
  categoryName: "Luxury",
  src:"https://res.cloudinary.com/carsmart/image/upload/v1647683095/Products/BMW_Z4_xieevw.webp",
  rating:4.9
},

];
