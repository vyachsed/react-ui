import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FileInput, FileItem, fullWidthPositionMixin, halfWidthPositionMixin } from '@admiral-ds/react-ui';
import type { FileAttributeProps, FileInputProps, InputStatus, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';

export const FileInputBaseTemplate = ({
  dimension = 'xl',
  width = '480px',
  ...props
}: FileInputProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const accept = ['image/*', '.pdf', 'application/json'];
  const maxFilesNumber = 3;

  const handlePreviewIconClick = (file: File) => {
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus('error');
    } else {
      setStatus(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
            filesLayoutCssMixin={dimension === 'xl' ? halfWidthPositionMixin : fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <FileInput
        dimension={dimension}
        disabled={props.disabled}
        width={width}
        title={dimension === 'xl' ? `Загрузите не более 3-х файлов типа ${accept.join(', ')}` : 'Добавьте файлы'}
        ref={inputRef}
        onInput={handleChange}
        accept={accept.join(', ')}
        files={fileList}
        status={status}
      >
        {renderFileList()}
      </FileInput>
    </ThemeProvider>
  );
};
