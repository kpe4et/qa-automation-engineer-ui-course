import { Course } from '../../Models/Courses/Course';
import { FC } from 'react';
import { WidgetView } from '../../Components/Views/WidgetView';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { CourseViewMenuItem } from '../../Components/Menus/Courses/CourseViewMenuItem';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { CoursePreviewImage } from '../../Components/Images/CoursePreviewImage';

type CourseViewProps = {
  course: Course;
};

export const CourseView: FC<CourseViewProps> = ({ course }) => {
  return (
    <WidgetView testId={'course'} title={course.title} menu={<CourseViewMenuItem course={course} />}>
      {course.previewImage && <CoursePreviewImage image={course.previewImage} testId={'course-preview-image'} />}
      <WidgetInfoRowsView>
        <BaseInfoRowView
          testId={'course-max-score'}
          icon={<KeyboardDoubleArrowUpIcon />}
          name={'Max score'}
          value={course.maxScore}
        />
        <BaseInfoRowView
          testId={'course-min-score'}
          icon={<KeyboardDoubleArrowDownIcon />}
          name={'Min score'}
          value={course.minScore}
        />
        <BaseInfoRowView
          testId={'course-estimated-time'}
          icon={<AccessTimeOutlinedIcon />}
          name={'Estimated time'}
          value={course.estimatedTime}
        />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};
