import React from 'react';

// const jokeData = [
//   {
//     id: 1,
//     title: "This is joke one",
//     punchLine: "This is the punchline for joke1"
//   },
//   {
//     id: 2,
//     title: "This is joke 2",
//     punchLine: "This is the punchline for joke2"
//   },
//   {
//     id: 3,
//     title: "This is joke 3",
//     punchLine: "This is the punchline for joke3"
//   },
//   {
//     id: 4,
//     title: "This is joke 4",
//     punchLine: "This is the punchline for joke4"
//   },
// ];

// function Card(props) {
//   const [togglePunch, setTogglePunch] = React.useState(false);
//   function handleClick() {
//     setTogglePunch(prevState => !prevState);
//   }
//   return <div>
//     <p>{props.title}</p>
//     <p>{togglePunch && props.punchLine}</p>
//     <button onClick={handleClick}>Click me</button>
//   </div>;
// }

function Practice() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }


  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName} />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName} />
        <input
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={formData.email} />
        <textarea
          placeholder="comment"
          onChange={handleChange}
          name="comment"
          value={formData.comment}
        />
        <input
          type="checkbox"
          id="isFriendly"
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </form>
    </div>
  );
}

export default Practice;