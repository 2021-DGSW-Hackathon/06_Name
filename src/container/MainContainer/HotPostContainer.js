import ImageSlider from "components/ImageSlider/ImageSlider";
import Login from "components/Login/Login";
import Profile from "components/Profile/Profile";
import { useHistory } from "react-router-dom";

const HotPostContainer = () => {
  const token = sessionStorage.getItem('authorization');
  const history = useHistory();
  return (
    <>
      <ImageSlider />
      {token ? (
        <Profile />
      ) : <Login />}
    </>
  );
};

export default HotPostContainer;
