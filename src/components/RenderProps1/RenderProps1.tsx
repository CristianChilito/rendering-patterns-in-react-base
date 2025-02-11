import React from "react";

type ChildComponentProps = {
  render:(name:string)=>JSX.Element;
};
export const ChildComponent: React.FC<ChildComponentProps> = ({render}) => {
  const name ="CDCcode"
  return (
    <div className="cdc">
      {render(name)}
    </div>
  );
};
export const ParentComponent = () => {
  return (
   
    <ChildComponent render={(name)=><p>hello, {name} !</p>} />
  );
};
