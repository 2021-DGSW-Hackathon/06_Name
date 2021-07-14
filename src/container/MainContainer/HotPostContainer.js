import ImageSlider from "components/ImageSlider/ImageSlider";
import Login from "components/Login/Login";
import Profile from "components/Profile/Profile";

const HotPostContainer = () => {
  const token = sessionStorage.getItem("authorization");
  return (
    <>
      <ImageSlider />
      {token ? <Profile /> : <Login />}
    </>
  );
};

export default HotPostContainer;
