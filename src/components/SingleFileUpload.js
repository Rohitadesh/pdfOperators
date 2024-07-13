// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// import { IMAGE_BASE_URL } from 'src/constants/ApiConstant'

// ** Third Party Imports
import Image from 'next/image'
import upload from "../../public/upload.png"
import { useDropzone } from 'react-dropzone'

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const FileUploaderSingle = props => {
  // ** State
  const [files, setFiles] = useState([])

  // ** Hook
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    onDrop: acceptedFiles => {
      console.log(acceptedFiles.map(file => Object.assign(file)))
      props?.onImageUpload(acceptedFiles.map(file => Object.assign(file)))
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const img = files.map(file => (
    <img
      key={file.name}
      alt={file.name}
      className='single-file-image'
      src={URL.createObjectURL(file)}
      style={{ maxHeight: '300px', maxWidth: '300px', objectFit: 'contain' }}
    />
  ))

  return (
    <Box class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                {/* <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg> */}
                <Image src={upload} alt="upload" height={100} width={100} />
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">PDF </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </Box> 
 
  )
}

export default FileUploaderSingle
