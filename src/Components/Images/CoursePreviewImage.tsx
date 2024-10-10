import { FC } from 'react';

type CoursePreviewImageProps = {
  image: string;
  testId: string;
};

export const CoursePreviewImage: FC<CoursePreviewImageProps> = ({ image }) => {
  return (
    <img src={image} alt={'Preview Image'} style={{ marginTop: 16, width: '100%', height: 300, borderRadius: 3 }} />
  );
};
