import { useEffect } from "react"
import { scrollToTop } from "../../utilities/scrollToTop";
import { Banner, FreeTrial, Genre } from "../../components";
import StreamDevices from "../../components/home/StreamDevices/StreamDevices";
import CommonQuestions from "../../components/home/CommonQuestions/CommonQuestions";
import Subscription from "../../components/home/Subscription/Subscription";

const HomeScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div className="pg-home">
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
      <Subscription />
      <FreeTrial />
    </div>
  )
}

export default HomeScreen
