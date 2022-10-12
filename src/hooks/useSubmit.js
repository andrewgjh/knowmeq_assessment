import { useState } from "react";

const createPromise = () => {
  let resolver;
  return [
    new Promise((resolve, reject) => {
      resolver = resolve;
    }),
    resolver,
  ];
};

const useSubmit = () => {
  const [open, setOpen] = useState(false);
  const [resolver, setResolver] = useState({ resolver: null });
  const [label, setLabel] = useState("");

  const confirmSubmit = async text => {
    setLabel(text);
    setOpen(true);
    const [promise, resolve] = await createPromise();
    setResolver({ resolve });
    return promise;
  };

  const btnClick = async status => {
    setOpen(false);
    resolver.resolve(status);
  };

  const PopUpConfirm = () => (
    <div className="popup-confirmation">
      <p>{label}</p>
      <button className="btn" onClick={() => btnClick(false)}>
        Cancel
      </button>
      <button className="btn agree" onClick={() => btnClick(true)}>
        Agree
      </button>
    </div>
  );

  return [open, confirmSubmit, PopUpConfirm];
};

export default useSubmit;
