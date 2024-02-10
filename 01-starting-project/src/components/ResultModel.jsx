import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { result, targetTime },
  ref
) {
  // useImperativeHandle(first prop must be the ref by forwardref, second prop should be a function which contains all the properties that need to be exposed )
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
