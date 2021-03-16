import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { formatedValue } from "../../helpers/formats";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { getMyPoints } from "../../actions/points";
const PointsHistory = () => {
  const points = useSelector((state) => state.points.points);
  const pointsTotal = useSelector((state) => state.points.pointsTotal);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const fetchMoreData = () => {
    setPage(page + 1);
    dispatch(getMyPoints(page + 1));
  };

  //con use effect al cambiar los puntos reinicia el page
  useEffect(() => {
    setPage(0);
  }, [pointsTotal]);

  return (
    <>
      <InfiniteScroll
        dataLength={points.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={""}
        height={400}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {points.length > 0
          ? points.map((point) => (
              <div
                key={point._id}
                className="flex justify-center px-5 py-2 border-b border-gray-300 "
              >
                <div
                  className={
                    point.value > 0
                      ? "text-green-500 m-2  font-bold w-20"
                      : "text-red-500 m-2  font-bold w-20"
                  }
                >
                  {formatedValue(point.value)}
                </div>
                <div className="flex-1 m-2 font-bold">{point.description}</div>
                <div className="m-2">
                  {moment(point.createdAt).format("DD/MM/YYYY")}
                </div>
              </div>
            ))
          : null}
      </InfiniteScroll>
    </>
  );
};

export default PointsHistory;
