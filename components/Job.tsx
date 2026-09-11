import data from "../data.json";
import JobList from "./JobList";

export default async function Job() {
  return (
    <div className="md:p-4">
      <JobList data={data} />
    </div>
  );
}
