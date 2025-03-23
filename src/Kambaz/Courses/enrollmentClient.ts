import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  await axios.post(`${ENROLLMENTS_API}`, { userId, courseId });
};

export const unenrollUserFromCourse = async (
  userId: string,
  courseId: string
) => {
  await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
};

export const fetchEnrollmentsForUser = async (userId: string) => {
  const { data } = await axios.get(
    `${REMOTE_SERVER}/api/users/${userId}/courses`
  );
  return data;
};
