const HotJobCard = ({ job }) => {
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    status,
    title,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
  } = job;

  return (
    <div className="card bg-[#121212] shadow-xl border p-3 flex flex-col justify-between ">
      <div>
        <div className="flex justify-around">
          <figure>
            <img className="w-24 h-24" src={company_logo} />
          </figure>
          <div className="space-y-2">
            <h2 className="font-bold text-2xl text-[#FF1493]">{company}</h2>
            <p>{location}</p>
          </div>
        </div>

        <div className="px-3 py-6 flex flex-col gap-2">
          <h2 className="card-title">{title}</h2>
          <div className="flex space-x-3 opacity-70 text-emerald-200">
            <h3>{jobType}</h3>
            <h3>{applicationDeadline}</h3>
          </div>
          <p>{description}</p>
          <div>
            {requirements.map((option, index) => (
              <h2 className="badge badge-outline" key={index}>
                {option}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <div className=" font-semibold text-[#FFD700] flex justify-between mt-4 items-center">
        <h2 className="text-xl">{`${salaryRange.min} - ${salaryRange.max} /${salaryRange.currency}`}</h2>

        <button
          className=" btn bg-blue-600 text-white text-xl px-6
           "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default HotJobCard;
