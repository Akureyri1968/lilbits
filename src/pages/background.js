import image from './images/background.jpg';


function BackgroundImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 600,
        width: 600,
      }}
    >
    
    </div>
  );
}

export default BackgroundImage;