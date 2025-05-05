import "./Moon.css";
import animation from "../assets/video.mp4";
import { useRecoilValue } from "recoil";
import { currentPageAtom } from "../state";

export default function Moon() {
  const currentPage = useRecoilValue(currentPageAtom);

  return (
    <video
      autoPlay
      loop
      id="moon-background"
      className={currentPage}
      src={animation}
    />
  );
}
