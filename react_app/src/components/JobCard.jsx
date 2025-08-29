export default function JobCard({ title, location,rate, type }) {
  return (
    <div className="border rounded-2xl shadow-md bg-white hover:shadow-xl transition flex flex-col">
      <div className="p-8 flex-1">

        
        <h3 className=" mb-3 text-xl font-semibold text-blue-700">{title}</h3>

        <span className="mr-4 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {type}
        </span>
        <br />
           <label htmlFor="" className="mt-3"> Location :
            <p className="text-gray-600 inline-block mt-3">{location}</p>
            </label>
            <br />

        <label htmlFor="" className="mt-3">Hourly rate:<p className= "mt-3 inline-block text-gray-600 ml-15">{rate}</p> </label> 
        <br />

        
      </div>

      
      <div className="bg-blue-700 px-6 py-3 flex justify-end rounded-2xl ">
        <button className="border border-white text-white px-5 py-1.5 rounded-full text-sm hover:bg-blue-950 transition">
          APPLY NOW
        </button>
      </div>
    </div>

  );
}
