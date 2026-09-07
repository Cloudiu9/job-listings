import Image from "next/image";
import data from "../data.json";

export default async function Job() {
  return (
    <div className="md:p-4">
      {data.map((job, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row md:justify-between md:items-center bg-white py-8 px-8 md:p-6 mt-4 mb-12 md:mb-4 shadow-lg rounded-xl border-l-main border-l-4 relative"
        >
          {/* main front part grouping */}
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={job.logo}
              alt={job.company}
              width={80}
              height={1}
              className="object-contain absolute -top-8 md:static w-15 md:w-17"
            />
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 text-lg">
                <strong id="company" className="text-main/80">
                  {job.company}
                </strong>
                <div className="flex items-center gap-2 text-white font-bold">
                  {job.new && (
                    <p className="py-0.5 px-2 rounded-xl text-[12px] bg-main">
                      NEW!
                    </p>
                  )}
                  {job.featured && (
                    <p className="py-0.5 px-2 rounded-xl text-[12px] bg-black">
                      FEATURED
                    </p>
                  )}
                </div>
              </div>

              <h2
                id="position"
                className="text-black font-bold text-lg hover:cursor-pointer hover:text-main"
              >
                {job.position}
              </h2>

              <div className="flex gap-3 text-sm font-semibold text-gray-400">
                <p>{job.postedAt}</p>·<p>{job.contract}</p>·
                <p>{job.location}</p>
              </div>
            </div>
          </div>
          {/* mobile divider */}
          <hr className="md:hidden my-3 w-full" />

          {/* end part grouping */}
          <div className="flex flex-wrap gap-2 items-center text-sm font-bold text-main ">
            <div
              className="py-1 px-2 bg-page-bg hover:text-white hover:cursor-pointer hover:bg-main"
              id="role"
            >
              <span>{job.role}</span>
            </div>
            <div
              className="py-1 px-2 bg-page-bg hover:text-white hover:cursor-pointer hover:bg-main"
              id="level"
            >
              <span>{job.level}</span>
            </div>

            {job.languages.map((language, idx) => (
              <span
                key={idx}
                className="py-1 px-2 bg-page-bg hover:text-white hover:cursor-pointer hover:bg-main"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
