import React, { ChangeEvent, useRef, useState, HTMLAttributes } from 'react'
import axios from 'axios'
import Dragger from './dragger'
import UploadList from './uploadList'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
export interface UploadProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'onError' | 'onProgress'> {
  /**
    * 上传的服务器路径
  */
  action: string;
  /**
    * 默认展示的文件列表
  */
  defaultFileList?: UploadFile[];
  /**
    * 上传之前的回调
  */
  beforUpload?: (file: File) => boolean | Promise<File>;
  /**
    * 上传进度条的回调
  */
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**
    * 上传成功的回调
  */
  onSuccess?: (data: any, file: UploadFile) => void;
  /**
    * 上传失败的回调
  */
  onError?: (err: any, file: UploadFile) => void;
  /**
    * 上传过程中change的回调
  */
  onChange?: (file: UploadFile) => void;
  /**
    * 删除上传文件的回调
  */
  onRemove?: (file: UploadFile) => void;
  /**
    * 请求的头部信息
  */
  headers?: { [key: string]: any };
  /**
    * 上传参数的名称
  */
  name?: string;
  /**
    * 是否额外携带数据
  */
  data?: { [key: string]: any }
  /**
    * 是否携带cookie
  */
  withCredentials?: boolean;
  /**
    * 接受的文件类型 类似input标签type='file'
  */
  accept?: string;
  /**
    * 是否支持文件夹上传
  */
  multiple?: boolean;
  /**
    * 是否支持拖拽上传
  */
  drag?: boolean;
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
    ...restProps
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforUpload) {
        post(file)
      } else {
        const result = beforUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e: any) => {
        const percentage = Math.round((e.loaded * 100) / e.total) || 0
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' })
          if (onProgress) {
            onProgress(percentage, _file)
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, { status: 'success', response: resp.data })
      if (onSuccess) {
        onSuccess(resp.data, _file)
      }
      if (onChange) {
        onChange(_file)
      }
    }).catch(err => {
      updateFileList(_file, { status: 'error', error: err })
      if (onError) {
        onError(err, _file)
      }
      if (onChange) {
        onChange(_file)
      }
    })
  }
  return (
    <div className='vship-upload' {...restProps}>
      <div
        className='vship-upload-input'
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {
          drag ?
            <Dragger onFile={(files) => { uploadFiles(files) }}>
              {children}
            </Dragger> : children
        }
        <input
          type="file"
          className='vship=file-input'
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList
      fileList={fileList}
      onRemove={handleRemove}
      >

      </UploadList>
    </div>
  )
}

export default Upload