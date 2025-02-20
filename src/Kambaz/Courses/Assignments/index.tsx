import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Link } from "react-router";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import * as db from "../../Database";
import { useParams } from "react-router";


export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div>
      <AssignmentControls/><br/>
      <ul id="wd-assignments" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons />
        </div>
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <li key={assignment._id} className="wd-assignment p-3 d-flex align-items-center list-group-item ps-1">
              <div className="d-flex align-items-center me-3">
                <BsGripVertical className="fs-3" />
                <LuNotebookPen className="wd-green ms-2 fs-3" />
              </div>
              <div className="flex-grow-1">
                <Link
                  id="wd-assignment-link"
                  to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                  className="d-block text-start"
                >
                  {assignment.title}
                </Link>
                <div className="text-start mx-auto">
                  <span className="text-danger">Multiple Modules</span> | 
                  <strong> Not available until </strong> {assignment.from || "TBD"} |  
                  <strong> Due </strong> {assignment.due || "TBD"} |  
                  {assignment.pts} pts
                </div>
              </div>
              <div className="d-flex align-items-center ms-3 gap-2">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
