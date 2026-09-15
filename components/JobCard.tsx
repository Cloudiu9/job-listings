import Image from "next/image";
import Tag from "./Tag";
import { Job } from "@/type/Job";
import { motion } from "motion/react";
import JobPosition from "./JobPosition";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      initial={{ x: `100%`, opacity: 0 }}
      animate={{ x: `0%`, opacity: 1 }}
      exit={{ x: `-100%`, opacity: 0, transition: { duration: 0.3 } }}
      layout={"preserve-aspect"}
      className="flex flex-col md:flex-row md:justify-between md:items-center bg-white py-8 px-8 mt-12 md:mt-0 md:p-6 mb-12 md:mx-12 md:mb-4 shadow-lg rounded-xl border-l-main border-l-4 relative"
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
            <strong className="text-main/80">{job.company}</strong>
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

          <JobPosition key={job.id} job={job} />

          <div className="flex gap-2 text-xs font-semibold text-gray-400">
            <p>{job.postedAt}</p>·<p>{job.contract}</p>·<p>{job.location}</p>
          </div>
        </div>
      </div>
      {/* mobile divider */}
      <hr className="md:hidden my-3 w-full" />

      {/* end part grouping */}
      <div className="flex flex-wrap flex-1 md:justify-end md:ml-6 gap-2 items-center font-bold text-main ">
        <Tag tag={job.role} />
        <Tag tag={job.level} />

        {job.tools.map((tool, idx) => (
          <Tag key={idx} tag={tool} />
        ))}

        {job.languages.map((language, idx) => (
          <Tag key={idx} tag={language} />
        ))}
      </div>
    </motion.div>
  );
}
