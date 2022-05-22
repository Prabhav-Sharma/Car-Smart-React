const cartCalc = (cart, interestRate, EMITenure) => {
  const cartMRP = cart.reduce(
    (acc, curr) => acc + curr.price.computable * curr.qty,
    0
  );

  const EMICalc = () => {
    const monthlyInterestRatio = interestRate / 100 / 12;
    const top = Math.pow(1 + monthlyInterestRatio, EMITenure);
    const bottom = top - 1;
    const sp = top / bottom;
    const emi = cartMRP * monthlyInterestRatio * sp;
    return emi;
  };

  const cartDiscount = Math.floor(cartMRP * 0.012);

  const downPayment = Math.floor((cartMRP - cartDiscount) * 0.01);

  const principalAmount = cartMRP - downPayment - cartDiscount;

  const cartEMI = Math.floor(EMICalc());

  const totalInterest = Math.floor(cartEMI * EMITenure - principalAmount);

  const finalAmount = Math.floor(cartEMI * EMITenure + downPayment);

  return {
    cartMRP: cartMRP.toLocaleString(),
    cartDiscount: cartDiscount.toLocaleString(),
    downPayment,
    cartEMI: cartEMI.toLocaleString(),
    totalInterest: totalInterest.toLocaleString(),
    finalAmount: finalAmount.toLocaleString(),
  };
};

export { cartCalc };
