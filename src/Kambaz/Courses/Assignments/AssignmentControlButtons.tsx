import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <Button size="sm" className="me-1 float-end" id="wd-collapse-all">
      40% of Total
     </Button>
      <FaPlus className="fs-4"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
     );}