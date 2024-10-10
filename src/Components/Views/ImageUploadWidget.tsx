import Button from '@mui/material/Button';
import { Grid2, Paper, styled } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { ChangeEvent, FC } from 'react';
import Typography from '@mui/material/Typography';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { EmptyView } from './EmptyView';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const ImageContainer = styled(Paper)({
  padding: '16px',
  height: '100%',
  display: 'flex',
  justifyContent: 'center'
});

const PreviewImage = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: 3
});

const ButtonContainer = styled(Paper)({
  padding: '16px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
});

type ImageUploadWidgetProps = {
  file: string | null;
  setFile: (file: string | null) => void;
  width: number;
  height: number;
  testId: string;
};

export const ImageUploadWidget: FC<ImageUploadWidgetProps> = (props) => {
  const { file, setFile, width, height, testId } = props;

  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setFile(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const onRemoveFile = () => setFile(null);

  return (
    <Grid2 sx={{ mt: 3 }} container spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }} height={height + 40}>
        <ImageContainer>
          {file ? (
            <PreviewImage
              id={`${testId}-image-upload-widget-preview-image`}
              data-testid={`${testId}-image-upload-widget-preview-image`}
              src={file}
              alt="Image Preview"
            />
          ) : (
            <EmptyView
              title={'No image selected'}
              description={'Preview of selected image will be displayed here'}
              testId={testId}
            />
          )}
        </ImageContainer>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} height={height + 40}>
        <ButtonContainer>
          <AddPhotoAlternateOutlinedIcon data-testid={`${testId}-image-upload-widget-info-icon`} fontSize={'large'} />
          <Typography sx={{ mt: 2 }} variant={'body1'} data-testid={`${testId}-image-upload-widget-info-title-text`}>
            Tap on &#34;Upload image&#34; button to select file
          </Typography>
          <Typography variant={'caption'} data-testid={`${testId}-image-upload-widget-info-description-text`}>
            Recommended file size {width}X{height}
          </Typography>
          <Button
            data-testid={`${testId}-image-upload-widget-upload-button`}
            sx={{ mt: 3 }}
            component="label"
            variant="outlined"
            startIcon={<CloudUploadOutlinedIcon />}>
            Upload image
            <VisuallyHiddenInput
              id={`${testId}-image-upload-widget-input`}
              data-testid={`${testId}-image-upload-widget-input`}
              type="file"
              onChange={onUploadFile}
              multiple={false}
              accept={'image/png, image/jpeg'}
            />
          </Button>
          {file && (
            <Button
              data-testid={`${testId}-image-upload-widget-remove-button`}
              sx={{ mt: 3 }}
              color={'error'}
              variant={'outlined'}
              startIcon={<DeleteOutlineOutlinedIcon />}
              onClick={onRemoveFile}>
              Remove image
            </Button>
          )}
        </ButtonContainer>
      </Grid2>
    </Grid2>
  );
};
