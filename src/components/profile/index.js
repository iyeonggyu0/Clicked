const ProfileComponents = (props) => {
  const FakeData = {
    id: 8,
    name: "이영규",
    age: 18,

    line: "on",
    hobby: "노는거",
    friendCall: 1,
    spicy: 2,
    time: 3,
    IE: "I",
    TF: "F",
    JP: "P",
  };
  return (
    <>
      {/* {props.dataState.line}
      {props.dataState.hobby}
      {props.dataState.friendCall}
      {props.dataState.spicy}
      {props.dataState.time}
      {props.dataState.IE}
      {props.dataState.TF}
      {props.dataState.JP} */}
      {FakeData.name}
      {FakeData.age}
      {FakeData.line}
      {FakeData.hobby}
      {FakeData.friendCall}
      {FakeData.spicy}
      {FakeData.time}
      {FakeData.IE}
      {FakeData.TF}
      {FakeData.JP}
      {FakeData.id <= 16 ? "남" : "여"}
    </>
  );
};
export default ProfileComponents;
