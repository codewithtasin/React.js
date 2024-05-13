// Loop Inside

const LoopInside = () => {
  const cities = [
    "Dhaka",
    "Sylhet",
    "Barisal",
    "Chittagong",
    "Rangpur",
    "Rajshahi",
  ];

  return (
    <div>
      {cities.map((city, index) => {
        return <li key={index.toString()}>{city}</li>;
      })}
    </div>
  );
};

export default LoopInside;
