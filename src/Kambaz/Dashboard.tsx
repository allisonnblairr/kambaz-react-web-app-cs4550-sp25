import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/public/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1235/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/racket.jpg" width={200} />
            <div>
              <h5> CS1235 Fundies I </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science I </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1236/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/java.jpg" width={200} />
            <div>
              <h5> CS1236 Fundies II </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science II </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1237/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/c.jpg" width={200} />
            <div>
              <h5> CS1237 Computer Systems </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Systems </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1238/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/r.jpg" width={200} />
            <div>
              <h5> IS1238 Information Science </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Information Science </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1239/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/ui.jpg" width={200} />
            <div>
              <h5> CS1239 Human Computer Interaction </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Human Centered Computing </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1240/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/statistics.jpg" width={200} />
            <div>
              <h5> IS1240 Empirical Research Methods </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Conducting Empirical Research </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1241/Home"
              className="wd-dashboard-course-link" >
            <img src="/public/images/python.jpg" width={200} />
            <div>
              <h5> DS1241 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Data Science </p>
              <button> Go </button>
            </div>
        </Link>
        </div>
      </div>
    </div>
);}
