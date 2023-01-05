import "./index.css";
import qrcode from "../public/image-qr-code.png";

function App() {
  return (
    <div className="flex justify-center items-center h-screen font-outfit">
      <div className="w-[320px] h-[497px] bg-white p-4 rounded-[20px] shadow-xl">
        <img src={qrcode} alt="qrcode" className="rounded-[10px]" />
        <div className="mt-6 text-center">
          <h1 className="font-bold text-[22px] leading-7 text-[#1F314F]">
            Improve your front-end skills by building projects
          </h1>
          <p className="w-[250px] font-normal text-[15px] leading-[19px] tracking-[0.1875px] text-[#7D889E] m-4 mb-0">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
