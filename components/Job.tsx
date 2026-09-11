import data from "../data.json";
import JobList from "./JobList";

export default async function Jobs() {
  return (
    <div className="md:p-4">
      <JobList data={data} />
    </div>
  );
}
