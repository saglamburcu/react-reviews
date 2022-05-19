function Person({ id, name, job, image, text }) {

  return (
    <div className="person">
      <img src={image} alt={id} />
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
    </div>
  )
};

export default Person;