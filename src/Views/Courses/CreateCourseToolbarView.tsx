import { BaseToolbarView } from '../../Components/Toolbar/BaseToolbarView';
import CheckIcon from '@mui/icons-material/Check';
import { FC, useMemo } from 'react';
import { Course } from '../../Models/Courses/Course';

type CreateCourseToolbarViewProps = {
  course: Course;
  onCreateCourse: () => void;
};

export const CreateCourseToolbarView: FC<CreateCourseToolbarViewProps> = (props) => {
  const { course, onCreateCourse } = props;

  const isSaveDisabled = useMemo(
    () =>
      course.title === '' ||
      course.minScore === 0 ||
      course.maxScore === 0 ||
      course.description === '' ||
      course.estimatedTime === '',
    [course]
  );

  return (
    <BaseToolbarView
      title={'Create course'}
      actions={[{ icon: <CheckIcon />, onClick: onCreateCourse, disabled: isSaveDisabled }]}
    />
  );
};
