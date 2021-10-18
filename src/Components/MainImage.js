import boxImg from '/images/boxDesk.svg';
import womanImg from '/images/womanDesk.svg';
import bgImg from '/images/bgMob.svg';

const MainImage = () => {
  return (
    <div className="imageContainer">
      <h1>Image goes here</h1>
      <img className="box-img" src="{/images/boxDesk.svg}" alt="" />
      <img className="woman-img" src="{/images/womanDesk.svg}" alt="" />
      <img className="bg-img" src="{/images/bgMob.svg}" alt="" />
    </div>
  );
};

export default MainImage;
