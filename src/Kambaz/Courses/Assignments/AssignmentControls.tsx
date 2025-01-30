import { FaPlus } from "react-icons/fa6";
import { Button, Form } from "react-bootstrap";
export default function ModulesControls() {
 return (
   <div id="wd-modules-controls" className="text-nowrap">
     <Form.Control id="wd-search-assignment"
             placeholder="Search..."
             type="search"
             className="mb-2"/>
     <Button size="lg" className="me-1 float-end" id="wd-add-assignment-group">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
   </div>
);}