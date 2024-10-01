import { FC } from 'react';
import { ImageUploadWidget } from '../../Components/Views/ImageUploadWidget';

type CreateCoursePreviewImageViewProps = {
  previewImage: string | null;
  setPreviewImage: (previewImage: string | null) => void;
};

export const CreateCoursePreviewImageView: FC<CreateCoursePreviewImageViewProps> = (props) => {
  const { previewImage, setPreviewImage } = props;

  return (
    <ImageUploadWidget
      file={previewImage}
      setFile={setPreviewImage}
      testId={'create-course-preview'}
      width={540}
      height={300}
    />
  );
};
