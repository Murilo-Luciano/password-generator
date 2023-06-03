import InitialButton from "./InitialButton";
import PasswordDisplayContainer from "./PasswordDisplayContainer";
import PasswordOptionsContainer from "./PasswordOptionsContainer";

export default (props: {
  initialState: boolean;
  strengthLevel: { color: string; interjection: string };
}) => {
  return (
    <div>
      {props.initialState ? (
        <InitialButton />
      ) : (
        // @todo: use context
        <PasswordDisplayContainer strengthLevel={props.strengthLevel} />
      )}

      {/* @todo: use context */}
      {/* @todo: concluir css do PasswordOptionsContainer*/}
      <PasswordOptionsContainer
        initialState={props.initialState}
        strengthLevel={props.strengthLevel}
      />
    </div>
  );
};
