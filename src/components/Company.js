import "./Company.css";

function Company(props) {
  console.log(props);
  return (
    <div class="container">
      {props.company ? (
        <>
          <h1>{props.company.name}</h1>
          <span>ID: {props.company.id}</span>
          <br />
          <span>FUNDS: {props.company.funds}</span>
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
}

export default Company;
