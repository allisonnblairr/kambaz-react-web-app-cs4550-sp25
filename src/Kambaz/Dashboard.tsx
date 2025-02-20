import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const imgSources = ["/images/reactjs.jpg", "/images/racket.jpg", "/images/java.jpg", "/images/c.jpg", "/images/ui.jpg", "/images/r.jpg", "/images/statistics.jpg", "/images/python.jpg" ]
  const courses = db.courses;
  return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses.map((course, i : number) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src={imgSources[i]} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      );}
