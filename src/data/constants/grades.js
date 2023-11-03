import { StrictDict } from 'utils';

const EMAIL_HEADING = 'Email';
const TOTAL_COURSE_GRADE_HEADING = 'Total Grade (%)';
const USERNAME_HEADING = 'Username';

const GradeFormats = StrictDict({
  absolute: 'absolute',
  percent: 'percent',
});

const Headings = StrictDict({
  email: 'Email',
  totalGrade: 'Total Grade (%)',
  username: 'Username',
  enrollment_date: 'enrollment_date', 
  passing_date: 'passing_date', 
  certificate_assigned: 'certificate_assigned'
});

export {
  EMAIL_HEADING,
  TOTAL_COURSE_GRADE_HEADING,
  USERNAME_HEADING,
  GradeFormats,
  Headings,
};
