import Image from "next/image";

// TODO convert this with dynamic data from data.json

export default function Job() {
  return (
    // TODO only add border-l-main border-l-4 if posting has featured flag
    <div className="flex justify-between items-center bg-white p-6 mb-4 shadow-lg rounded-xl border-l-main border-l-4">
      {/* main front part grouping */}
      <div className="flex gap-4">
        <Image
          src="photosnap.svg"
          alt="Company"
          width={80}
          height={1}
          className="object-contain"
        />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 text-lg">
            <strong id="company" className="text-main/80">
              Photosnap
            </strong>
            <div className="flex items-center gap-2 text-white font-bold">
              <p className="py-0.5 px-2 rounded-xl text-[12px] bg-main">NEW!</p>
              <p className="py-0.5 px-2 rounded-xl text-[12px] bg-black">
                FEATURED
              </p>
            </div>
          </div>

          <h2 id="position" className="text-black font-bold text-lg">
            Senior Frontend Developer
          </h2>

          <div className="flex gap-3 text-sm font-semibold text-gray-400">
            <p>1d ago</p>·<p>Full Time</p>·<p>USA only</p>
          </div>
        </div>
      </div>

      {/* end part grouping */}
      <div className="flex gap-2 items-center text-sm font-semibold text-main">
        <div className="py-1 px-2 bg-page-bg" id="role">
          <span>Frontend</span>
        </div>
        <div className="py-1 px-2 bg-page-bg" id="level">
          <span>Senior</span>
        </div>
        {/* will be an array */}
        {/* extra div here to separate languages? */}
        <span className="py-1 px-2 bg-page-bg">HTML</span>
        <span className="py-1 px-2 bg-page-bg">CSS</span>
        <span className="py-1 px-2 bg-page-bg">JavaScript</span>
      </div>
    </div>
  );
}
