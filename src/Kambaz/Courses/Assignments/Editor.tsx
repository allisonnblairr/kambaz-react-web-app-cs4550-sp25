import { FormGroup, FormLabel, FormControl, Form, Col, Row, Button } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <FormGroup className="mb-3 wd-name" controlId="wd-textarea">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl as="textarea" rows={3} value="A1 - ENV + HTML" className="custom-textarea wd-name"/>
        </FormGroup>
        <div className="textarea-wrapper p-3 border rounded-3 wd-description" style={{height: '100px'}}>
        The assignment is available online Submit a link to the landing page of ...
        </div>
        <div> 
        <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3} className="text-end wd-points"> Points </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="textarea" value={100} className="wd-points"/>
                        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} className="text-end wd-group"> Assignment Group </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} className="text-end wd-display-grade-as"> Display Grade as </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-display-grade-as" defaultValue="ASSIGNMENTS">
              <option value="Points">Points</option>
              <option value="Percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3} className="text-end wd-submission-type"> Submission Type </Form.Label>
                        <Col sm={9}>
                          <div className="textarea-wrapper p-3 border rounded-3" style={{height: '300px'}}>
                            <div className="mb-3">
                              <Form.Select id="wd-submission-type" className="mt-2">
                                <option value="Online">Online</option>
                              </Form.Select>
                            </div>
                            <div>
                              <label><strong>Online Entry Options</strong></label>
                              <div>
                                <Form.Check
                                  type="checkbox"
                                  label="Text Entry"
                                  id="wd-text-entry"
                                  className="mt-2"
                                />
                                <Form.Check
                                  type="checkbox"
                                  label="Website URL"
                                  id="wd-website-url"
                                  className="mt-2"
                                />
                                <Form.Check
                                  type="checkbox"
                                  label="Media Recordings"
                                  id="wd-media-recordings"
                                  className="mt-2"
                                />
                                <Form.Check
                                  type="checkbox"
                                  label="Student Annotation"
                                  id="wd-student-annotation"
                                  className="mt-2"
                                />
                                <Form.Check
                                  type="checkbox"
                                  label="File Upload"
                                  id="wd-file-upload"
                                  className="mt-2"
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3} className="text-end wd-assign-to"> Assign </Form.Label>
                        <Col sm={9}>
                          <div className="textarea-wrapper p-3 border rounded-3" style={{height: '220px'}}>
                            <div>
                              <label className="wd-assign-to"><strong>Assign to</strong></label>
                              <Form.Control type="textarea" value="Everyone" className="wd-assign-to"/>
                            </div>
                            <div>
                              <label className="wd-due-date"><strong>Due</strong></label>
                              <Form.Control type="date" value="10/20/2020" className="wd-due-date"/>
                            </div>
                            <div className="d-flex gap-5">
                              <div> 
                              <label className="wwd-available-from"><strong>Available From</strong></label>
                              <Form.Control type="date" value="10/20/2020" className="wwd-available-from"/>
                              </div>
                              <div> 
                              <label className="wd-available-until"><strong>Until</strong></label>
                              <Form.Control type="date" value="10/20/2020" className="wd-available-until"/>
                              </div>                             
                            </div>
                          </div>
                        </Col>
        </Form.Group>
        </div>
        <hr></hr>
        <div className="float-end d-flex">
        <Button variant="secondary" size="sm" className="me-1 float-end border-dark rounded-0" id="wd-cancel">
          Cancel
        </Button>
        <Button variant="danger" size="sm" className="me-1 float-end border-dark rounded-0" id="wd-save">
          Save
        </Button>
        </div>
      </div>
  );}
  