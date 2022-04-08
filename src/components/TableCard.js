import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "../assets/img/team-1-800x800.jpg";
import Team2 from "../assets/img/team-2-800x800.jpg";
import Team3 from "../assets/img/team-3-800x800.jpg";
import Team4 from "../assets/img/team-4-470x470.png";
import React, { useState } from "react";
import Modal from "./Modal";

export default function CardTable() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Card Table</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Project
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Budget
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Users
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Argon Design System
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $2,500 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                  pending
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image src={Team1} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team2} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team3} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team4} rounded alt="..." />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <button
                    onClick={() => setShowModal(true)}
                    class="bg-red-400 hover:bg-grey text-grey-darkest font-bold py-2 px-1 mx-1 rounded inline-flex items-center"
                  >
                    <svg
                      class="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                  </button>
                  <button class="bg-red-400 hover:bg-grey text-grey-darkest font-bold py-2 px-1 mx-1 rounded inline-flex items-center">
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                  </button>
                  <button class="bg-red-400 hover:bg-grey text-grey-darkest font-bold py-2 px-1 mx-1 rounded inline-flex items-center">
                    <svg
                      class="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                  </button>
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Black Dashboard Sketch
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $1,800 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{" "}
                  completed
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image src={Team1} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team2} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team3} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team4} rounded alt="..." />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="green" value="100" />
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  React Material Dashboard
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $4,400 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i> on
                  schedule
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image src={Team1} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team2} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team3} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team4} rounded alt="..." />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="teal" value="90" />
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  React Material Dashboard
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $2,200 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{" "}
                  completed
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image src={Team1} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team2} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team3} rounded alt="..." />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image src={Team4} rounded alt="..." />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="green" value="100" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          <Form />
        </Modal>
      ) : null}
    </Card>
  );
}

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p class="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            City
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            State
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
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
            for="grid-zip"
          >
            Zip
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 mt-6 md:mb-0">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
