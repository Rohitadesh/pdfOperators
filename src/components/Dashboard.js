import { Card, Icon, Typography } from "@mui/material"
import { FaFileWord } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
const Dashboard = () =>{

    const convertToPDF=[{id:1,title:"Doc to PDF",icon:<FaFileWord />},{id:2,title:"JPG to PDF",icon:<FaFileImage />},{id:3,icon:<FaFileImage />,title:"PNG to PDF"},{id:4,icon:<FaFileImage />,title:"JPEG to PDF"}]

    return(
        <main
      className="h-[33rem] w-full border border-green-700  flex flex-row justify-center items-center gap-12"
    >
    <Card className="h-[17em] w-[28rem] border border-black flex flex-col">
        <div className="p-2  text-center">
            <Typography>CONVERT TO PDF</Typography>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-12  flex-wrap">
            {
                convertToPDF.map((e,i)=>{

                    return(
                        <Card key={i} className="h-[4rem] w-[10rem] border border-black flex flex-col justify-center items-center">
                            <Typography className="text-xl">{e.icon}</Typography>
                            <Typography>{e.title}</Typography>
                        </Card>
                    )
                })
            }
        </div>

    </Card>

    <Card className="h-[17em] w-[28rem] border border-black flex flex-col">
        <div className="p-2  text-center">
            <Typography>PDF TOOLS</Typography>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-12  flex-wrap">
            {
                convertToPDF.map((e,i)=>{

                    return(
                        <Card key={i} className="h-[4rem] w-[10rem] border border-black flex flex-col justify-center items-center">
                            <Typography className="text-xl">{e.icon}</Typography>
                            <Typography>{e.title}</Typography>
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