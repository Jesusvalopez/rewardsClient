import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Coupon from "./Coupon/Coupon";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { getMyCoupons } from "../../actions/coupons";
import { useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ContentLoader from "react-content-loader";
const Coupons = () => {
  const coupons = useSelector((state) => state.coupons.activeCoupons);
  const usedCoupons = useSelector((state) => state.coupons.usedCoupons);
  const expiredCoupons = useSelector((state) => state.coupons.expiredCoupons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCoupons("active"));
    // dispatch(getMyPoints());
  }, [dispatch]);

  const fetchOtherCoupons = (index) => {
    switch (index) {
      case 0: {
        break;
      }
      case 1: {
        dispatch(getMyCoupons("used"));
        break;
      }
      case 2: {
        dispatch(getMyCoupons("expired"));
        break;
      }
    }
  };

  const CouponsLoader = () => (
    <ContentLoader width={"100%"} height={300}>
      <rect x="1%" y="1%" rx="5" ry="5" width="48%" height="42%" />
      <rect x="51%" y="1%" rx="5" ry="5" width="50%" height="42%" />
      <rect x="1%" y="48%" rx="5" ry="5" width="48%" height="42%" />
      <rect x="51%" y="48%" rx="5" ry="5" width="50%" height="42%" />
    </ContentLoader>
  );

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="h-screen relative py-16 ">
          <div className="container mx-auto px-4 flex flex-col xl:flex-row">
            <Sidebar />
            <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-0 px-6">
              <div className="flex flex-wrap pt-5">
                <div className="w-full xl:w-9/12 px-4">
                  <p className="text-lg font-bold">Mis cupones</p>
                  <p>
                    Puedes canjearlos en{" "}
                    <a className="text-blue-400" href="https://sticks.cl">
                      {" "}
                      www.sticks.cl
                    </a>
                    . Si tu cupón es de un producto, asegurate de haberlo
                    agregado al carrito.
                  </p>
                </div>
              </div>
              <Tabs
                className="m-4"
                onSelect={(index) => fetchOtherCoupons(index)}
              >
                <TabList>
                  <Tab>Activos</Tab>
                  <Tab>Usados</Tab>
                  <Tab>Expirados</Tab>
                </TabList>

                <TabPanel>
                  <div className="grid md:grid-cols-2 mt-2">
                    {coupons ? (
                      coupons.length > 0 ? (
                        coupons.map((coupon) => (
                          <Coupon key={coupon._id} coupon={coupon}></Coupon>
                        ))
                      ) : coupons.length == 0 ? (
                        <div className="text-center col-span-2 mt-10 text-xl text-gray-500">
                          No tienes cupones disponibles en este momento
                        </div>
                      ) : null
                    ) : (
                      <div className="col-span-2">
                        <CouponsLoader></CouponsLoader>
                      </div>
                    )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid md:grid-cols-2 mt-2">
                    {usedCoupons ? (
                      usedCoupons.length > 0 ? (
                        usedCoupons.map((coupon) => (
                          <Coupon key={coupon._id} coupon={coupon}></Coupon>
                        ))
                      ) : usedCoupons.length == 0 ? (
                        <div className="text-center col-span-2 mt-10 text-xl text-gray-500">
                          No tienes cupones usados
                        </div>
                      ) : null
                    ) : (
                      <div className="col-span-2">
                        <CouponsLoader></CouponsLoader>
                      </div>
                    )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid md:grid-cols-2 mt-2">
                    {expiredCoupons ? (
                      expiredCoupons.length > 0 ? (
                        expiredCoupons.map((coupon) => (
                          <Coupon key={coupon._id} coupon={coupon}></Coupon>
                        ))
                      ) : expiredCoupons.length == 0 ? (
                        <div className="text-center col-span-2 mt-10 text-xl text-gray-500">
                          No tienes cupones expirados
                        </div>
                      ) : null
                    ) : (
                      <div className="col-span-2">
                        <CouponsLoader></CouponsLoader>
                      </div>
                    )}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <div className="h-2/3 relative flex flex-col min-w-0 break-words bg-white xl:w-3/5 mb-6 shadow-xl rounded-lg mt-0 m-5">
              <div className=" m-5">
                <div className="col-span-2 text-center text-xl font-bold mb-2">
                  ¿Cómo usar tus cupones?
                </div>
                <div className="text-center text-sm font-medium text-gray-500 px-5 mb-4">
                  <p className="font-bold text-black">En nuestro local:</p>
                  Indícanos tu correo electrónico durante la compra y el cupón
                  se aplicará automáticamente.
                </div>
                <div className="text-center text-sm font-medium text-gray-500 px-5 mb-4">
                  <p className="font-bold text-black">
                    En{" "}
                    <a
                      href="https://sticks.cl"
                      className="hover:opacity-70  text-blue-400"
                    >
                      www.sticks.cl
                    </a>
                    :
                  </p>
                  Ingresa el código del cupón (8 dígitos) en el campo 'cupón' al
                  momento de pagar. Si tu cupón es de un producto, asegurate de
                  haberlo agregado al carrito.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coupons;
