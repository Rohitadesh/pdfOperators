import { Card, Icon, Typography } from "@mui/material"
import { FaFileWord } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { useRouter } from "next/router";
import { CiLink } from "react-icons/ci";
import Link from "next/link";
const Dashboard = () =>{
    const route = useRouter()
    const convertToPDF=[{id:1,title:"Doc to PDF",icon:<FaFileWord />},{id:2,title:"JPG to PDF",icon:<FaFileImage />},{id:3,icon:<FaFileImage />,title:"PNG to PDF"},{id:4,icon:<FaFileImage />,title:"JPEG to PDF"}]
    const pdfTools=[{id:1,title:"PDF MERGE",icon:<FaFileWord />,path:'/PdfMerge'},{id:2,title:"Compress PDF",icon:<FaFileImage />,path:"/"},{id:3,icon:<FaFileImage />,title:"Delete PDF Pages",path:"/"},{id:4,icon:<FaFileImage />,title:"Split PDF",path:"/"}]
    return(
        <main
      className="h-[33rem] w-full border border-green-700  flex flex-row justify-center items-center gap-12"
    >
    <Card className="h-[20rem] w-[28rem] border border-black flex flex-col">
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

    </Card>

    <Card className="h-[20rem] w-[28rem] border  flex flex-col bg-[#F9F3E3]">
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

    </Card>
   
        
       </main>
    )
}

export default Dashboard