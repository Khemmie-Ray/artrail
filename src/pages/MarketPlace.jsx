import otherBackground from "../assets/otherBackground.svg";
import Ellipse from "../assets/Ellipse.svg";
import ProductCard from '../components/ProductCard';

const MarketPlace = () => {
    return (
        <main className="bg-[#231D16] w-screen">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
                Marketplace
            </h1>
            <div className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover mt-4"
                style={{
                    backgroundImage: `url(${otherBackground})`,
                    backgroundSize: "100%",
                }}>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
                    Tokenizing Real-World Assets for
                    <br />Global Access and Trust
                </h1>
                <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-titiliumweb">
                    Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs on a
                    <br />Secure, Transparent Blockchain Marketplace
                </p>
            </div>
            <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white">
              Track
            </button>
          <ProductCard />
    </main>
  );
};

export default MarketPlace;
