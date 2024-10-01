import Box from '@mui/material/Box';
import { ReduxState } from '../../Redux/ReduxState';
import { connect } from 'react-redux';
import { Course } from '../../Models/Courses/Course';
import { FC } from 'react';
import { CourseView } from './CourseView';
import { EmptyView } from '../../Components/Views/EmptyView';
import { Grid2 } from '@mui/material';

type CoursesListViewProps = {
  courses: Course[];
};

const CoursesListView: FC<CoursesListViewProps> = ({ courses }) => {
  return (
    <Box>
      {courses.length === 0 && (
        <EmptyView
          testId={'courses-list'}
          containerSx={{ mt: 6 }}
          title={'There is no results'}
          description={'Results from the load test pipeline will be displayed here'}
        />
      )}
      <Grid2 sx={{ mt: 3 }} container spacing={2}>
        {courses.map((course, index) => (
          <Grid2 key={index} size={{ md: 6, xs: 12 }}>
            <CourseView course={course} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

const getState = (state: ReduxState) => {
  const user = state.users.user;
  return {
    courses: state.courses.courses.filter((course) => course.userId === user?.id)
  };
};
export default connect(getState)(CoursesListView);
