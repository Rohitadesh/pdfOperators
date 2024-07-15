import { Card, Icon, Typography,Button, Box } from "@mui/material"
import { FaFileWord } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { useRouter } from "next/router";
import { CiLink } from "react-icons/ci";
import Link from "next/link";
import Image  from "next/image";
import file from "../../public/file.png"
import merge from "../../public/pdf.png"
import compress from "../../public/pdf.png"
import deletePages from "../../public/Remove.png";
import { useState } from "react";
const Dashboard = () =>{
    const route = useRouter()
    const[open,setOpen] = useState(false)
    const convertToPDF=[{id:1,title:"Doc to PDF",icon:<FaFileWord />},{id:2,title:"JPG to PDF",icon:<FaFileImage />},{id:3,icon:<FaFileImage />,title:"PNG to PDF"},{id:4,icon:<FaFileImage />,title:"JPEG to PDF"}]
    const pdfTools=[{id:1,img:merge,title:"PDF Merge",icon:<FaFileWord />,path:'/PdfMerge'},{id:2,title:"Compress ",img:compress,icon:<FaFileImage />,path:"/compress"},{id:3,icon:<FaFileImage />,title:"Delete  Pages",img:deletePages,path:"/RemovePages"},{id:4,icon:<FaFileImage />,img:merge,title:"Split PDF",path:"/"}]
    return(
        <main
      className="h-[33rem] w-full  flex flex-row justify-center items-center "
    > <Box className="h-[22rem] w-[28rem]   flex flex-row flex-wrap justify-center items-center gap-8">
                    {
                        convertToPDF.map((e,i)=>{

                            return(
                                <div key={i} className="flex flex-col justify-center items-center" onClick={()=>route.push(`${e.path}`)}>
                                    <Card className="h-[8rem]   w-[9rem] border   flex flex-col justify-center items-center">
                                    <Card className="shadow-2xl rounded-full h-[6rem] w-[6rem] rounded-full shadow-xl bg-blue-300 flex flex-col justify-center items-center border ">
                                            <Button variant="contained" className="border  border-white h-[4rem] shadow-xl  text-sm rounded-full w-[4rem]" >
                                                <Image src={file} height={50} width={250} alt="Data Process"  />
                                            </Button>
                                        </Card>

                                    </Card>
                                    <Typography className="text-md">{e.title}</Typography>
                                </div>
                            )
                        })
                    }
                </Box>
                <Card className="rounded-full h-[8rem] w-[8rem] rounded-full shadow-xl bg-blue-300 flex flex-col justify-center items-center border ">
                    <Card className="border  bg-blue-500 border-white h-[7rem] shadow-xl  text-sm rounded-full w-[7rem]" >
                        <Image src={file} height={200} width={250} alt="Data Process"  />
                    </Card>
                </Card>
                <Box className="h-[22rem] w-[28rem]   flex flex-row flex-wrap justify-center items-center gap-8">
                    {
                        pdfTools.map((e,i)=>{

                            return(
                                <div key={i} className="flex flex-col justify-center items-center" onClick={()=>route.push(`${e.path}`)}>
                                    <Card className="h-[8rem] w-[9rem] border   flex flex-col justify-center items-center">
                                    <Card className="shadow-2xl rounded-full h-[6rem] w-[6rem] rounded-full shadow-xl bg-blue-300 flex flex-col justify-center items-center border ">
                                            <Button variant="contained" className="border  border-white h-[4rem] shadow-xl  text-sm rounded-full w-[4rem]" >
                                                <Image src={e.img} height={50} width={250} alt="Data Process"  />
                                            </Button>
                                        </Card>

                                    </Card>
                                    <Typography className="text-md">{e.title}</Typography>
                                </div>
                            )
                        })
                    }
                </Box>
    {/* <Card className="h-[20rem] w-[28rem] border border-black flex flex-col">
        <div className="p-2  text-center">
            <Typography>CONVERT TO PDF</Typography>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-12  flex-wrap">
            {
                convertToPDF.map((e,i)=>{

                    return(
                        <Card key={i}  className=" 
                        h-[6.5rem] w-[10rem]  border flex flex-col justify-center gap-2 items-center">
                            <Typography className="text-xl">{e.icon}</Typography>
                            <Typography>{e.title}</Typography>
                            <Link href={"/"}>Link</Link>
                        </Card>
                    )
                })
            }
        </div>

    </Card> */}

    {/* <Card className="h-[20rem] w-[28rem] border  flex flex-col bg-[#F9F3E3]">
        <div className="p-2  text-center">
            <Typography>PDF TOOLS</Typography>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-12  flex-wrap">
            {
                pdfTools.map((e,i)=>{

                    return(
                        <Card key={i} className="h-[6.5rem] w-[10rem] border  flex flex-col justify-center gap-2 items-center">
                            <Typography className="text-xl">{e.icon}</Typography>
                            <Typography>{e.title}</Typography>
                            <Link className="text-2xl" href={e.path}><CiLink /></Link>
                        </Card>
                    )
                })
            }
        </div>

    </Card> */}
   
        
       </main>
    )
}

export default Dashboard