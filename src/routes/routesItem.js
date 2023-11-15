import { v4 } from "uuid"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSink,
  faChartLine,
  faTable,
  faBed,
  faClipboard,
  faChild,
  faCouch,
  faChair,
  faHospital,
} from "@fortawesome/free-solid-svg-icons"
import HomePage from "../pages/HomePage"

export const routesItem = [
  {
    id: v4(),
    title: "Statistics",
    path: "/",
    element: <HomePage />,
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    id: v4(),
    title: "КУХНИ",
    path: "/kitchen",
    element: <div>kitchen</div>,
    icon: <FontAwesomeIcon icon={faSink} />,
  },
  {
    id: v4(),
    title: "ГОСТИННЫЕ",
    path: "/living-room",
    element: <div>living room</div>,
    icon: <FontAwesomeIcon icon={faTable} />,
  },
  {
    id: v4(),
    title: "СПАЛЬНИ",
    path: "/bedroom",
    element: <div>bedroom</div>,
    icon: <FontAwesomeIcon icon={faBed} />,
  },
  {
    id: v4(),
    title: "ПРИХОЖИЕ",
    path: "/hallway",
    element: <div>hallway</div>,
    icon: <FontAwesomeIcon icon={faHospital} />,
  },
  {
    id: v4(),
    title: "ШКАФЫ-КУПЕ",
    path: "/closet",
    element: <div>ШКАФЫ-КУПЕ</div>,
    icon: <FontAwesomeIcon icon={faClipboard} />,
  },
  {
    id: v4(),
    title: "ДЕТСКИЕ",
    path: "/children",
    element: <div>ДЕТСКИЕ</div>,
    icon: <FontAwesomeIcon icon={faChild} />,
  },
  {
    id: v4(),
    title: "ДИВАНЫ",
    path: "/sofa",
    element: <div>ДИВАНЫ</div>,
    icon: <FontAwesomeIcon icon={faCouch} />,
  },
  {
    id: v4(),
    title: "СТОЛЫ И СТУЛЬЯ",
    path: "/table-and-chairs",
    element: <div>СТОЛЫ И СТУЛЬЯ</div>,
    icon: <FontAwesomeIcon icon={faChair} />,
  },
  {
    id: v4(),
    title: "Login",
    path: "/login",
    element: <div>login</div>,
  },
]
