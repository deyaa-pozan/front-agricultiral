import StatusCard from "../../components/StatusCard";
import ChartLine from "../../components/ChartLine";
import PageVisitsCard from "../../components/PageVisitsCard";
import TrafficCard from "../../components/TrafficCard";
import Analysis from "../../components/Analysis";
import React from "react";
import { getAnalysis } from "./api";
import { useQuery } from "react-query";

export default function Dashboard() {
  const { isLoading, error, data, isFetching } = useQuery(
    ["dashboardData"],
    () => getAnalysis(),
    { keepPreviousData: true }
  );

  return (
    <>
      {data && (
        <>
          <Analysis sensor={data[0]} node={data[1]} user={data[2]} />
          <div className="px-3 md:px-8 h-auto">
            <div className="container mx-auto max-w-full">
              <div className="grid grid-cols-1 xl:grid-cols-5">
                <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                  <PageVisitsCard sensors={data[3]} />
                </div>
                <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                  <TrafficCard nodes={data[4]} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
