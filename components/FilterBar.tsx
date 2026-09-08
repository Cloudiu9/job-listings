import Tag from "./Tag";

export default function FilterBar() {
  return (
    <div className="absolute items-center left-10 right-10 p-3 top-23.5 shadow-lg bg-white rounded-md flex gap-3 flex-wrap font-bold text-main">
      <Tag tag="Frontend" close={true} />
      <Tag tag="HTML" close={true} />
      <Tag tag="CSS" close={true} />
      <Tag tag="JavaScript" close={true} />

      <span className="ml-auto cursor-pointer hover:underline">Clear</span>
    </div>
  );
}
