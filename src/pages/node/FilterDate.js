import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CsvDownload from 'react-json-to-csv'
import { useQuery } from "react-query";
import { getAllNodes, getReadingsBetweenTwoDates } from "./api";



export default function App(props) {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const [data, setData] = useState([]);
    const [complate, setComplate] = useState(false);
    const [err, setErr] = useState('');


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
    // const { isLoading, error, data, isFetching } = useQuery(
    //     ["CSV"],
    //     () => getReadingsBetweenTwoDates(),
    //     { keepPreviousData: true }
    // );
    const filter = async () => {
        setComplate(false)
        let response = await getReadingsBetweenTwoDates(props.nodeId, state)
        if (response.length != 0) {
            console.log(response);
            setData(response)
            setComplate(true)
            setErr('')

        } else {
            console.log('There are no any data');
            setErr('There are no any data')
        }

    }
    return (
        <div className="App   flex flex-col container justify-center">
            <DateRange
                onChange={item => {
                    setComplate(false)
                    setState([item.selection])

                }}

                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <div className="text-red-500 text-xl text-center ">{err ? err : null}</div>
            {complate ? null : <button className="bg-blue-500 px-6 py-2 rounded-md cursor-pointer font-bold" onClick={filter}>get data</button>}
            {data && complate && (<CsvDownload
                data={data}
                filename="good_data.csv"
                style={{ //pass other props, like styles
                    background: "#2296f3",
                    backgroundColor: "#2296f3",
                    borderRadius: "6px",
                    display: "inline-block",
                    cursor: "pointer", "color": "#ffffff",
                    fontSize: "15px",
                    fontWeight: "bold",
                    padding: "6px 24px",
                    textDecoration: "none",
                    textShadow: "0px 1px 0px #9b14b3"
                }}
            >
                Download
            </CsvDownload>)}




        </div>
    );
}