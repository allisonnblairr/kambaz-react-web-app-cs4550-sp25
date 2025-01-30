import { Container, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Link } from "react-router";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
    return (
      <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentControlButtons /></div>
          <ListGroup className="wd-lessons rounded-0">
          <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <LuNotebookPen className="wd-green me-2 fs-3"/>
            <Link id="wd-assignment-link" to="/Kambaz/Courses/1234/Assignments/123">A1 - ENV + HTML </Link>
            <div className="me-2" id="wd-assignment-list-item-description"> Multiple Modules | <strong>Not available until </strong>
                  May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 
                  100 pts
                  </div>
            <LessonControlButtons /></ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <LuNotebookPen className="wd-green me-2 fs-3"/>
            <Link id="wd-assignment-link" to="/Kambaz/Courses/1234/Assignments/123">A2 - CSS + BOOTSTRAP </Link>
            <div id="wd-assignment-list-item-description"> Multiple Modules | <strong>Not available until </strong>
                  May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 
                  100 pts
                  </div>
            <LessonControlButtons /></ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <LuNotebookPen className="wd-green me-2 fs-3"/>
            <Container className="wd-assignment-container">
            <Link id="wd-assignment-link" to="/Kambaz/Courses/1234/Assignments/123">A3 - JAVASCRIPT + REACT </Link> <br />
             Multiple Modules | <strong>Not available until </strong> 
                  May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 
                  100 pts
             </Container>
            <LessonControlButtons /></ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
      </div>
  );}
