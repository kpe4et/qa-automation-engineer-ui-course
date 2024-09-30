import { MoreVert } from '@mui/icons-material';
import { FC, Fragment, useState } from 'react';
import { BaseMenu } from '../BaseMenu';
import { BaseMenuItem } from '../BaseMenuItem';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Course } from '../../../Models/Courses/Course';
import { ConfirmDeleteCourseModal } from '../../Modals/ConfirmDeleteCourseModal';
import { useDispatch } from 'react-redux';
import { deleteCourse, setCourse } from '../../../Redux/Courses/CoursesSlice';
import { useAppNavigationService } from '../../../Services/HookServices/AppNavigationServiceHook';
import { AppRoutes } from '../../../Services/Constants/Routing';

type CourseViewMenuItemProps = {
  course: Course;
};

export const CourseViewMenuItem: FC<CourseViewMenuItemProps> = (props) => {
  const { course } = props;
  const dispatch = useDispatch();
  const { onNavigate } = useAppNavigationService();
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const [confirmDeleteCourseModal, setConfirmDeleteCourseModal] = useState(false);

  const onClose = () => setMenu(null);

  const onEdit = () => {
    onClose();
    dispatch(setCourse(course));
    onNavigate(AppRoutes.CreateCourse, { courseId: course.id });
  };

  const onDelete = () => {
    onClose();
    setConfirmDeleteCourseModal(true);
  };

  const onConfirmDelete = () => {
    dispatch(deleteCourse({ courseId: course.id }));
  };

  return (
    <Fragment>
      <BaseMenu testId={'course-view'} menu={menu} setMenu={setMenu} icon={<MoreVert fontSize={'small'} />}>
        <BaseMenuItem testId={'course-view-edit'} label={'Edit'} icon={<EditOutlinedIcon />} onClick={onEdit} />
        <BaseMenuItem
          testId={'course-view-delete'}
          label={'Delete'}
          icon={<DeleteOutlineOutlinedIcon />}
          onClick={onDelete}
        />
      </BaseMenu>
      <ConfirmDeleteCourseModal
        modal={confirmDeleteCourseModal}
        setModal={setConfirmDeleteCourseModal}
        onConfirm={onConfirmDelete}
      />
    </Fragment>
  );
};
