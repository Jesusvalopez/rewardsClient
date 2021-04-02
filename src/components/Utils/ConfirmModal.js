import React from "react";

const ConfirmModal = ({
  textAcceptButton,
  textCancelButton,
  uppetText,
  bodyText,
  confirmCouponToExchange,
}) => {
  return (
    <>
      <div className="m-10 md:m-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-150">
        <div className="relative w-11/12 md:w-1/4 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold">{uppetText}</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">{bodyText}</div>
            {/*footer*/}
            <div className="flex justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="btn font-bold  transition-all duration-150 "
                type="button"
                onClick={() => {}}
              >
                {textCancelButton}
              </button>
              <button
                className="btn btn-primary font-bold  transition-all duration-150 w-1/2 md:w-1/4"
                type="button"
                onClick={() => {
                  confirmCouponToExchange();
                }}
              >
                {textAcceptButton}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ConfirmModal;
