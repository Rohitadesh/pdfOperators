import Image from "next/image"
import man from "../../public/pointman.png"
import { TextField ,Card,Button, Typography} from "@mui/material"
import FileUploaderSingle from "@/components/SingleFileUpload"
import Arrow from"../../public/arrow.png"
import remove from "../../public/Remove.png"
const Compress = () =>{



    return (
        <div className="w-full grid grid-cols-7">
        <div className="h-[32rem] w-full col-span-3 flex flex-row justify-end items-end   ">
            <Image src={man} alt="man" height={450}     />
        </div>
        <div className="h-[32rem] w-full col-span-4">
         
            <div className="h-[21rem]  w-full  flex justify-center items-center gap-12">
                <Card className="p-4 w-[38rem] h-[18rem] shadow-2xl rounded-2xl">
                    <FileUploaderSingle />
                </Card>
            </div>
            <div className="h-[11rem]  p-2  flex justify-center items-end w-full ">
                <Card className="rounded-full h-[8rem] w-[8rem] rounded-full shadow-xl bg-blue-300 flex flex-col justify-center items-center border ">
                    <Button variant="contained" className="border border-white h-[6rem] shadow-xl  text-sm rounded-full w-[6rem]" >
                        Compress PDF
                    </Button>
                </Card>
            </div>

        </div>
    </div>

    )
}

export default Compress