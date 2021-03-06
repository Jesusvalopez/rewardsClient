import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import PointsExchange from "../Points/PointsExchange";
import { Wheel } from "react-custom-roulette";
import { getWheelData, rollWheel } from "../../actions/wheelFortune";
import { updateUserCommuneAction } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentLoader from "react-content-loader";
import Select from "react-select";
import ReactLoading from "react-loading";
import { getMyCouponsCount } from "../../actions/coupons";
import WinModal from "./WinModal";

const WheelFortune = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //const [mustSpin, setMustSpin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [commune, setCommune] = useState(null);
  const [exchangingPrize, setExchangingPrize] = useState(false);
  const [updatingCommune, setUpdatingCommune] = useState(false);
  const tokensCount = useSelector((state) => state.tokensCount);

  const wheelWinner = useSelector((state) => state.wheelData.winner);
  const wheelFinished = useSelector((state) => state.wheelData.finished);
  const wheelStart = useSelector((state) => state.wheelData.start);
  const mustSpin = useSelector((state) => state.wheelData.start);
  const message = useSelector((state) => state.wheelData.message);

  const wheelData = useSelector((state) => state.wheelData.wheel);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getWheelData());
    console.log(user);
    if (!user.result.commune) {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    if (message) {
      setUpdatingCommune(false);
      notifyError(message);
    }
  }, [message]);

  useEffect(() => {
    console.log(wheelWinner);
    if (wheelWinner || wheelWinner === 0) {
      if (updatingCommune) {
        setUpdatingCommune(false);
      }
    }
  }, [wheelStart]);

  useEffect(() => {
    if (wheelFinished) {
      setExchangingPrize(false);
      setShowWinModal(true);
      // notifySuccess("Premio canjeado");
      dispatch({ type: "WHEEL_FINISHED", payload: false });
    }
  }, [wheelFinished]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 10,
    },
  };

  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const updateUserCommune = () => {
    if (!commune) {
      notifyError("Selecciona una comuna");
      return false;
    }
    setUpdatingCommune(true);
    setShowModal(false);
    dispatch(rollWheel(commune));
  };

  const comunas = [
    "Santiago",
    "Cerrillos",
    "Cerro Navia",
    "Conchal??",
    "El Bosque",
    "Estaci??n Central",
    "Huechuraba",
    "Independencia",
    "La Cisterna",
    "La Florida",
    "La Granja",
    "La Pintana",
    "La Reina",
    "Las Condes",
    "Lo Barnechea",
    "Lo Espejo",
    "Lo Prado",
    "Macul",
    "Maip??",
    "??u??oa",
    "Pedro Aguirre Cerda",
    "Pe??alol??n",
    "Providencia",
    "Pudahuel",
    "Quilicura",
    "Quinta Normal",
    "Recoleta",
    "Renca",

    "San Joaqu??n",
    "San Miguel",
    "San Ram??n",
    "Vitacura",
    "Puente Alto",
    "Pirque",
    "San Jos?? de Maipo",
    "Colina",
    "Lampa",
    "Tiltil",
    "San Bernardo",
    "Buin",
    "Calera de Tango",
    "Paine",
    "Melipilla",
    "Alhu??",
    "Curacav??",
    "Mar??a Pinto",
    "San Pedro",
    "Talagante",
    "El Monte",
    "Isla de Maipo",
    "Padre Hurtado",
    "Pe??aflor",
  ];

  const options = comunas.map((comuna) => {
    return { value: comuna, label: comuna };
  });

  const WheelLoader = () => (
    <ContentLoader height={300}>
      <circle cx="50%" cy="50%" r="50%" />
    </ContentLoader>
  );

  const wheelStopSpinning = () => {
    setExchangingPrize(true);
    dispatch(getMyCouponsCount());
    dispatch({ type: "WHEEL_FINISHED", payload: true });
  };

  return (
    <>
      {showWinModal ? <WinModal></WinModal> : null}
      <ToastContainer />
      {exchangingPrize ? (
        <div className="fixed h-full w-full flex flex-col items-center justify-center bg-opacity-50 bg-gray-700 z-50">
          <ReactLoading
            type="spin"
            color="rgba(247, 198, 0)"
            height={"10%"}
            width={"80px"}
          />
          <div className="mt-5 text-white">Canjeando premio...</div>
        </div>
      ) : null}
      {updatingCommune ? (
        <div className="fixed h-full w-full flex flex-col items-center justify-center bg-opacity-50 bg-gray-700 z-50">
          <ReactLoading
            type="spin"
            color="rgba(247, 198, 0)"
            height={"10%"}
            width={"80px"}
          />
          <div className="mt-5 text-white">Actualizando comuna...</div>
        </div>
      ) : null}
      {showModal && wheelData.length > 0 ? (
        <>
          <div className="m-10 md:m-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-150">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Selecciona tu comuna
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Select
                    options={options}
                    placeholder="Comuna"
                    onChange={(e) => setCommune(e.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="btn btn-primary font-bold  transition-all duration-150"
                    type="button"
                    onClick={() => {
                      updateUserCommune();
                    }}
                  >
                    Girar la ruleta
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <Navbar transparent />
      <main className="profile-page">
        <section className="h-screen py-16 ">
          <div className="container mx-auto px-4 flex flex-col xl:flex-row">
            <Sidebar></Sidebar>
            {/* Componente central de puntos*/}
            <div className="items-center z-0 order-0 sm:order-1 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-0 p-8 text-center">
              {wheelData.length > 0 ? (
                <>
                  <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={wheelWinner}
                    data={wheelData}
                    backgroundColors={["#f7b026", "#e4831b"]}
                    textColors={["#000000", "#000000"]}
                    innerRadius={0}
                    innerBorderColor={"black"}
                    innerBorderWidth={10}
                    outerBorderWidth={10}
                    className="bg-black"
                    fontSize={22}
                    textDistance={52}
                    radiusLineWidth={3}
                    perpendicularText={false}
                    onStopSpinning={() => {
                      wheelStopSpinning();
                    }}
                  />
                  {tokensCount > 0 ? (
                    <></>
                  ) : (
                    <p className="pt-5 font-bold">Ya giraste la ruleta.</p>
                  )}
                </>
              ) : (
                <WheelLoader></WheelLoader>
              )}
            </div>

            <PointsExchange></PointsExchange>
          </div>
        </section>
      </main>
    </>
  );
};

export default WheelFortune;
