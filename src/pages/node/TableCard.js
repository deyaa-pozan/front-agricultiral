import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "../../assets/img/team-1-800x800.jpg";
import Team2 from "../../assets/img/team-2-800x800.jpg";
import Team3 from "../../assets/img/team-3-800x800.jpg";
import Team4 from "../../assets/img/team-4-470x470.png";
import React, { useState } from "react";
import Modal from "../../components/Modal";
import { getAllNodes, addNode, deleteNode, addSensorforNode } from "./api";
import { useQuery } from "react-query";
import ReactDeleteRow from "react-delete-row";
import axios from "api/axios";

export default function CardTable() {
  const [showModal, setShowModal] = useState(false);
  const [showModalSensor, setShowModalSensor] = useState(false);

  // const [record, setRecord] = useState([]);
  const [node, setNode] = useState(false);
  const { isLoading, error, data, isFetching } = useQuery(
    ["nodeData"],
    () => getAllNodes(),
    { keepPreviousData: true }
  );

  return (
    <>
      <Card>
        <CardHeader color="purple" contentPosition="none">
          <div className="flex items-center justify-between  ">
            <h2 className="text-white text-2xl ">Node Table</h2>

            <button
              onClick={() => {
                setShowModal(true);
                setNode("");
              }}
              class="bg-transparent  hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-white hover:border-transparent rounded bg-blue-500 grow  text-grey-darkest  mx-1  inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 fill-blue-500 hover:fill-cyan-700"
                // fill="#ffffff"

                x="0"
                y="0"
                enableBackground="new 0 0 16 16"
                version="1.1"
                viewBox="0 0 16 16"
                xmlSpace="preserve"
              >
                <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
                <path d="M9 4L7 4 7 7 4 7 4 9 7 9 7 12 9 12 9 9 12 9 12 7 9 7z"></path>
              </svg>
              ADD NODE
            </button>
          </div>
        </CardHeader>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Name
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Attribute1
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Attribute2
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    state
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading && ""}

                {error && ""}
                {isFetching && ""}

                {data &&
                  data.Items.map((item) => {
                    return (
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.name}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          Attribute
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                          Attribute
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.GSI1PK != "node" ? "used" : "not used"}
                        </th>
                        <th className="flex border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          <button
                            onClick={() => {
                              setShowModalSensor(true);
                              setNode(item);
                            }}
                            class="bg-blue-500 hover:bg-blue-700  text-grey-darkest font-bold py-2 px-1 mx-1 rounded inline-flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              class="w-5 h-5"
                              enableBackground="new 0 0 16 16"
                              version="1.1"
                              viewBox="0 0 16 16"
                              xmlSpace="preserve"
                            >
                              <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
                              <path d="M9 4L7 4 7 7 4 7 4 9 7 9 7 12 9 12 9 9 12 9 12 7 9 7z"></path>
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              setShowModal(true);
                              setNode(item);
                            }}
                            class="bg-green-500 hover:bg-green-700  text-grey-darkest font-bold py-2 px-1 mx-1 rounded inline-flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              x="0"
                              y="0"
                              enableBackground="new 0 0 330 330"
                              version="1.1"
                              viewBox="0 0 330 330"
                              xmlSpace="preserve"
                            >
                              <g>
                                <path d="M75 180v60c0 8.284 6.716 15 15 15h60a15 15 0 0010.606-4.394l164.999-165c5.858-5.858 5.858-15.355 0-21.213l-60-60a14.997 14.997 0 00-21.211.001l-165 165A14.994 14.994 0 0075 180zm30 6.213l150-150L293.787 75l-150 150H105v-38.787z"></path>
                                <path d="M315 150.001c-8.284 0-15 6.716-15 15V300H30V30h135c8.284 0 15-6.716 15-15s-6.716-15-15-15H15C6.716 0 0 6.716 0 15v300c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15V165.001c0-8.285-6.716-15-15-15z"></path>
                              </g>
                            </svg>
                          </button>
                          <ReactDeleteRow
                            key={item.SK}
                            data={item}
                            deleteElement={
                              <button
                                onClick={() => deleteNode(item.SK)}
                                class="bg-red-400 hover:bg-red-500 text-grey-darkest font-bold py-2 px-1 mx-1 rounded inline-flex items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-5 h-5"
                                  x="0"
                                  y="0"
                                  enableBackground="new 0 0 348.333 348.334"
                                  version="1.1"
                                  viewBox="0 0 348.333 348.334"
                                  xmlSpace="preserve"
                                >
                                  <path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"></path>
                                </svg>
                              </button>
                            }
                            onDelete={(item) => {
                              return window.confirm(
                                `Are you sure you want to delete "${item.name}"?`
                              );
                            }}
                          ></ReactDeleteRow>
                        </th>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </CardBody>
        {showModal ? (
          <Modal setShowModal={setShowModal}>
            <Form item={node} setNode={setNode} setShowModal={setShowModal} />
          </Modal>
        ) : null}

        {showModalSensor ? (
          <Modal setShowModal={setShowModalSensor}>
            <ScoreModale
              nodeId={node.SK}

              setShowModalSensor={setShowModalSensor}
            />
          </Modal>
        ) : null}
      </Card>
    </>
  );
}

const Form = (props) => {
  const [item, setItem] = useState(props.item);
  const changeAttr = (attr) => {
    setItem({ ...item, ...attr });
  };

  return (
    <form
      class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        addNode(item);
        props.setShowModal(false);
      }}
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Node Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="Node-Name"
            type="text"
            name="name"
            onChange={(e) => changeAttr({ name: e.target.value })}
            value={item.name}
            placeholder="Node Name"
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Attribute1"
          >
            Attribute1
          </label>
          <input
            onChange={(e) => changeAttr({ attribute1: e.target.value })}
            value={item.attribute1}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="Attribute1"
            name="attribute1"
            type="text"
            placeholder="Attribute1"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Attribute2"
          >
            Attribute2
          </label>
          <input
            onChange={(e) => changeAttr({ attribute2: e.target.value })}
            value={item.attribute2}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="Attribute2"
            type="text"
            name="attribute2"
            placeholder="Attribute2"
          />
          <p class="text-gray-600 text-xs italic">
            {/* Make it as long and as crazy as you'd like */}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Attribute3"
          >
            Attribute3
          </label>
          <input
            onChange={(e) => changeAttr({ attribute3: e.target.value })}
            value={item.attribute3}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="Attribute3"
            name="attribute3"
            type="text"
            placeholder="Attribute3"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Attribute4"
          >
            Attribute4
          </label>
          <div class="relative">
            <select
              onChange={(e) => changeAttr({ attribute4: e.target.value })}
              value={item.attribute4}
              name="attribute4"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Attribute4"
            >
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Attribute5"
          >
            Attribute5
          </label>
          <input
            onChange={(e) => changeAttr({ attribute5: e.target.value })}
            value={item.attribute5}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="Attribute5"
            name="attribute5"
            type="text"
            placeholder="Attribute5"
          />
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="mb-3 w-[50%]">
          <label
            for="formFile"
            class="form-label inline-block mb-2 text-gray-700"
          ></label>
          <input
            class="form-control
            
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            name="img"
            id="formFile"
            onChange={(e) => changeAttr({ img: e.target.files[0] })}

          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 mt-6 md:mb-0">
          <button
            // onClick={()=>props.setShowModal(false)}
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const ScoreModale = (props) => {
  // const [BODY, setItem] = useState(props.item);
  const { isLoading, error, data, isFetching } = useQuery(
    ["sensorNotSet"],
    () => fetchData(),
    { keepPreviousData: true }
  );

  const fetchData = () => {
    return axios.get(`/api/getSensorsNotSet`).then((res) => {
      return res.data.message;
    });
  };

  return (
    <>
      {/* {isLoading && <Spinner />}
      {error && <Spinner />}
      {isFetching && <Spinner />} */}

      <div class="flex   justify-between grid-cols-1 gap-4 m-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 2xl:gap-4 2xl:grid-cols-3 ">
        {data &&
          data.Items.map((item) => {
            return (
              <>
                <div class="flex items-center justify-center flex-col bg-blacky p-4 m-5  rounded-lg w-[90%] space-y-6">
                  <img
                    class="rounded-full border-gray-100 shadow-sm w-24 h-24"
                    src={item.img}
                    alt="user image"
                  />
                  <h1 class="text-gray-50 font-semibold">{item.name}</h1>

                  <button 
                  onClick={()=>{
                    addSensorforNode({...item,nodeId:props.nodeId});
                    props.setShowModalSensor(false)
                  }}
                  class="px-8 py-1 border-2  bg-yellowy rounded-full text-gray-50 font-semibold">
                    Add
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
