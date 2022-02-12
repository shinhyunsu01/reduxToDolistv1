import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
/*
function Detail() {
  const id = useParams();

  return <h1>Detail</h1>;
}*/

const Detail = ({ toDo }) => {
  const params = useParams();
  const One = toDo.find((one) => parseInt(one.id) === parseInt(params.id));

  return (
    <>
      <h1>{One?.text}</h1>
      <h5>Created at: {One?.id}</h5>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDo: state };
};

export default connect(mapStateToProps)(Detail);
