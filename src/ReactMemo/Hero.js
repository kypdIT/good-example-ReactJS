import React from "react";
import PropTypes from "prop-types";

// reactMemo la 1 HOC khong phai la Hook
// Khong nhat thiet dung o moi component, chi dung o cac component duoc xem la nang

// Moi lan render lai component App thi se render lai component <Hero /> trong App
// Nhung neu xai Memo cho component Hero thi NEU props cua Hero ko thay doi thi se khong render lai Hero
// khi render thang App

// Nhung Vidu chu tao co 1 ham su dung trong Hero nhung cai ham nay nos khong lam thay doi Prop
// thi no van se rerender lai Hero vi... o day no taoj ra luon 1 object Hero moi chu khong phai chi tao ra
// mot prop moi vi vay no lai rerender lai Hero
// giai quyet bang UseCallback va useMeno

Hero.propTypes = {
  name: PropTypes.string,
};

Hero.defaultProps = {
  name: "",
};

function Hero(props) {
  const { name } = props;
  console.log("Hero render", name);
  return <div>Hero Name: {name}</div>;
}

export default React.memo(Hero);
