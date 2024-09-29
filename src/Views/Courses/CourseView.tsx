import { Course } from '../../Models/Courses/Course';
import { FC } from 'react';
import { WidgetView } from '../../Components/Views/WidgetView';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { CourseViewMenuItem } from '../../Components/Menus/Courses/CourseViewMenuItem';

type CourseViewProps = {
  course: Course;
};

export const CourseView: FC<CourseViewProps> = ({ course }) => {
  return (
    <WidgetView sx={{ mt: 3 }} title={course.title} menu={<CourseViewMenuItem course={course} />}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'Max score'} value={course.maxScore} />
        <BaseInfoRowView name={'Min score'} value={course.minScore} />
        <BaseInfoRowView name={'Estimated time'} value={course.estimatedTime} />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};
