import { BaseToolbarView } from '../../Components/Toolbar/BaseToolbarView';
import CheckIcon from '@mui/icons-material/Check';
import { FC, useMemo } from 'react';
import { Course } from '../../Models/Courses/Course';

type CreateCourseToolbarViewProps = {
  title: string;
  course: Course;
  onCreateCourse: () => void;
};

export const CreateCourseToolbarView: FC<CreateCourseToolbarViewProps> = (props) => {
  const { title, course, onCreateCourse } = props;

  const isSaveDisabled = useMemo(
    () =>
      course.title === '' ||
      course.minScore === 0 ||
      course.maxScore === 0 ||
      course.description === '' ||
      course.previewImage === null ||
      course.estimatedTime === '',
    [course]
  );

  return (
    <BaseToolbarView
      testId={'create-course'}
      title={title}
      actions={[{ testId: 'create-course', icon: <CheckIcon />, onClick: onCreateCourse, disabled: isSaveDisabled }]}
    />
  );
};
