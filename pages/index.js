import Headers from "../components/Headers"
import Secondcomp from "../components/Secondcomp"
import ThirdCompo from "../components/ThirdCompo"
import SectionFour from "../components/SectionFour"
import FIfthSection from "../components/FIfthSection"
import SixCompo from "../components/SixCompo"
import FooterLast from "../components/FooterLast"
import PopDesk from "../components/PopDesk"
import PopUpMB from "../components/PopUpMB"

export default function Home() {
  return (
    <div>
      <Headers></Headers>
      <Secondcomp></Secondcomp>
    
      <ThirdCompo></ThirdCompo>
      <SectionFour></SectionFour>
      <FIfthSection></FIfthSection>
      <SixCompo></SixCompo>
      <FooterLast></FooterLast>
      <PopDesk />
      <PopUpMB />

    </div>
  );
}
