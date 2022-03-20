const compose = (...filters) =>  (state, data)=> filters.reduce((acc, curr)=> curr(state,acc), data);

const categoryFilter = ({category}, data)=>
  category.length === 0
    ? data
    : data.filter((prod) => category.includes(prod.categoryName));

const priceFilter = ({filterPrice}, data) =>
filterPrice ? data.filter((prod) => prod.price.computable >= filterPrice) : data;

const ratingFilter = ({rating}, data) =>
  rating ? data.filter((prod) => prod.rating >= rating) : data;

const sortProducts = ({sortBy}, data) =>
  sortBy
    ? sortBy === "LOW_TO_HIGH"
      ? [...data].sort((a, b) => a.price.computable - b.price.computable)
      : [...data].sort((a, b) => b.price.computable - a.price.computable)
    : data;

    export {compose, categoryFilter, priceFilter,ratingFilter,sortProducts};