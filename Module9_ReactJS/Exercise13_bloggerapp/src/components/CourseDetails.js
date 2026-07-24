import React from 'react';

const courses = [
  { id: 1, name: 'Full Stack Java', duration: '3 Months' },
  { id: 2, name: 'React JS', duration: '1 Month' },
  { id: 3, name: 'Spring Boot', duration: '2 Months' }
];

function CourseDetails() {
  return (
    <div className="details-box">
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong> — {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;