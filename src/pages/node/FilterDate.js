import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CsvDownload from 'react-json-to-csv'
import { useQuery } from "react-query";
import { getAllNodes, getReadingsBetweenTwoDates } from "./api";



export default function App() {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection"
        }
    ]);


let dataMoc = [
        {
            "Bettery": "88%",
            "Luxes": "0 Ohms",
            "SoilMoisture": "0",
            "Pressure": "94175.070 Pa",
            "Anemometer": "0 km/h",
            "SK": "2022-05-21T18:39:03.985518961Z",
            "Pluviometer": "0 mm/min",
            "ATemprature": "26.010 °C",
            "PK": "node_pns1",
            "RHumidity": "28.526 RH%",
            "WindDirection": "W ↑",
            "Bytlength": 102
        },
        {
            "Bettery": "87%",
            "Luxes": "0 Ohms",
            "SoilMoisture": "0",
            "Pressure": "94174.742 Pa",
            "Anemometer": "0 km/h",
            "SK": "2022-05-21T18:38:04.001138409Z",
            "Pluviometer": "0 mm/min",
            "ATemprature": "26.000 °C",
            "PK": "node_pns1",
            "RHumidity": "28.587 RH%",
            "WindDirection": "W ↑",
            "Bytlength": 102
        },
        {
            "Bettery": "88%",
            "Luxes": "0 Ohms",
            "SoilMoisture": "0",
            "Pressure": "94173.984 Pa",
            "Anemometer": "0 km/h",
            "SK": "2022-05-21T18:37:03.995112925Z",
            "Pluviometer": "0 mm/min",
            "ATemprature": "25.990 °C",
            "PK": "node_pns1",
            "RHumidity": "28.463 RH%",
            "WindDirection": "W ↑",
            "Bytlength": 102
        }
    ]
    const { isLoading, error, data, isFetching } = useQuery(
        ["CSV"],
        () => getReadingsBetweenTwoDates(),
        { keepPreviousData: true }
      );
    return (
        <div className="App">
            <h1>react-date-range Example</h1>
            <DateRange
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <CsvDownload
                data={dataMoc}
                filename="good_data.csv"
                style={{ //pass other props, like styles
                    boxShadow: "inset 0px 1px 0px 0px #e184f3",
                    background: "linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
                    backgroundColor: "#c123de",
                    borderRadius: "6px",
                    border: "1px solid #a511c0",
                    display: "inline-block",
                    cursor: "pointer", "color": "#ffffff",
                    fontSize: "15px",
                    fontWeight: "bold",
                    padding: "6px 24px",
                    textDecoration: "none",
                    textShadow: "0px 1px 0px #9b14b3"
                }}
            >
                Good Data ✨
            </CsvDownload>

        </div>
    );
}