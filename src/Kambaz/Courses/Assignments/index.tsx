import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Link } from "react-router";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
    return (
      <div>
      <AssignmentControls/><br/>
      <ListGroup className="rounded-0" id="wd-assignment-group">
        <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons /></div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-assignment p-3 d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <BsGripVertical className="fs-3" />
              <LuNotebookPen className="wd-green ms-2 fs-3" />
            </div>
            <div className="flex-grow-1">
              <Link id="wd-assignment-link" to="/Kambaz/Courses/1234/Assignments/123" className="d-block text-start">
              A1 - ENV + HTML
              </Link>
              <div className="text-start mx-auto">
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until </strong>
                May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 
                100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-3 gap-2">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
          </ListGroup.Item>
            <ListGroup.Item className="wd-assignment p-3 d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <BsGripVertical className="fs-3" />
              <LuNotebookPen className="wd-green ms-2 fs-3" />
            </div>
            <div className="flex-grow-1">
              <Link id="wd-assignment-link" to="/Kambaz/Courses/1234/Assignments/123" className="d-block text-start">
                A2 - CSS + BOOTSTRAP
              </Link>
              <div className="text-start mx-auto">
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until </strong>
                May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 
                100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-3 gap-2">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment p-3 d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <BsGripVertical className="fs-3" />
              <LuNotebookPen className="wd-green ms-2 fs-3" />
            </div>
            <div className="flex-grow-1">
              <Link id="wd-assignment-link" to="/Kambaz/Courses/1234/Assignments/123" className="d-block text-start">
              A3 - JAVASCRIPT + REACT 
              </Link>
              <div className="text-start mx-auto">
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until </strong>
                May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 
                100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-3 gap-2">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
          </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
      </div>
  );}
