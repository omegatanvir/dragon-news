import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="flex bg-[#F3F3F3] p-4 mb-8">
        <button className="btn bg-[#D72050] text-white rounded-none">Latest</button>
        <Marquee pauseOnHover={true} >
          <h2>
            Match Highlights: Germany vs Spain — as it happened ! Match Germany vs Spain as as it happened ! Match Germany vs Spain as it happened !
          </h2>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
