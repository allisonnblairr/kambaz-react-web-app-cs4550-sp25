/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as enrollmentClient from './enrollmentClient';
import * as accountClient from '../../Account/client';
import * as courseClient from '../client';
import { setEnrollments } from '../reducer';

const Enrollments = () => {
  const [displayCourses, setDisplayCourses] = useState<any[]>([]);
  const { courseId } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolledCourses, setEnrolledCourses] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchCourses = async (fetchAll: boolean = showAllCourses) => {
    try {
      const courses = fetchAll 
        ? await courseClient.fetchAllCourses()
        : await accountClient.findMyCourses();
      setDisplayCourses(courses);
      const enrollments = await enrollmentClient.fetchAllEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const checkEnrollment = async () => {
    try {
      const enrollments = await accountClient.findMyEnrollments();
      const enrolledMap: Record<string, boolean> = {};

      enrollments.forEach((enrollment: { course: string }) => {
        enrolledMap[enrollment.course] = true;
      });

      setEnrolledCourses(enrolledMap);
    } catch (error) {
      console.error("Error checking enrollments:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    checkEnrollment();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, currentUser._id, showAllCourses]);

  const toggleCoursesView = async () => {
    const newShowAllCourses = !showAllCourses;
    setShowAllCourses(newShowAllCourses);
    await fetchCourses(newShowAllCourses);
  };
  
  const handleEnrollUnenroll = async (courseId: string) => {
    try {
      if (enrolledCourses[courseId]) {
        await enrollmentClient.unenrollUserFromCourse(currentUser._id, courseId);
      } else {
        await enrollmentClient.enrollUserInCourse(currentUser._id, courseId);
      }
      
      setEnrolledCourses((prev) => ({
        ...prev,
        [courseId]: !prev[courseId],
      }));
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  const handleBackToDashboard = () => {
    navigate('/Kambaz/Dashboard', { state: { refresh: true } });
  };

  return (
    <div>
      <h1>Enrollments</h1>
      <Card>
        <Card.Body>
          <Button variant="secondary" onClick={handleBackToDashboard} className="ms-2 me-3">
            Go Back to Dashboard
          </Button>
          <Button variant="primary" onClick={toggleCoursesView} className="me-3">
            {showAllCourses ? "Show My Enrollments" : "Show All Enrollments"}
          </Button>
        </Card.Body>
      </Card>

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayCourses.map((course) => (
            <Col key={course._id} className="wd-enrollment-courses" style={{ width: "300px" }}>
              <Card>
                <Card.Img src={`${course.image}`} variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description}
                  </Card.Text>
                  <Button 
                    onClick={() => handleEnrollUnenroll(course._id)} 
                    variant={enrolledCourses[course._id] ? 'danger' : 'success'}
                  >
                    {enrolledCourses[course._id] ? 'Unenroll' : 'Enroll'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Enrollments;
