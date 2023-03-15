import { useRef } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Chart } from "react-chartjs-2";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getChartInfo, loadChart } from "@/utils/chart-api";
import { options } from "@/utils/chart-options";
import { ChartsType } from "@/utils/chart.types";
import { chartDatasets } from "@/utils/chart-data";
import { useChartQuery } from "@/hooks/useChartQuery";
import LinkContainer from "@/components/link-container";

interface Props {
  chartData: ChartsType[];
  colorFilteredByQueryWithBar: string[];
  colorFilteredByQueryWithArea: string[];
}

loadChart();

const HomePage: NextPage<Props> = () => {
  const router = useRouter();
  const {
    chartData,
    colorFilteredByQueryWithArea,
    colorFilteredByQueryWithBar,
  } = useChartQuery(router.query as { name: string });
  const chartRef = useRef<ChartJSOrUndefined<"bar" | "line", string[]>>(null);
  const locations = [...new Set(chartData.map((chart) => chart.id))];
  const data = chartDatasets(
    chartData,
    colorFilteredByQueryWithArea,
    colorFilteredByQueryWithBar,
  );

  const clickHandler = (e: any) => {
    if (chartRef.current) {
      const points = chartRef.current.getElementsAtEventForMode(
        e,
        "index",
        { intersect: true },
        true,
      );
      if (points.length > 0) {
        const routingName = chartData[points[0].index].id;
        const routingNumber =
          locations.findIndex((location) => location === routingName) + 1;
        router.push(`/?name=${routingName}&nameId=${routingNumber}`);
      }
    }
    return;
  };

  return (
    <div className="container">
      <Chart
        ref={chartRef}
        type="line"
        options={options}
        data={data}
        onClick={clickHandler}
      />
      <LinkContainer locations={locations} />
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["charts"], getChartInfo);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
