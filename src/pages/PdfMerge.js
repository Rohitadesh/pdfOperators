import Image from "next/image"
import man from "../../public/pointman.png"
import { TextField ,Card,Button} from "@mui/material"
import FileUploaderSingle from "@/components/SingleFileUpload"
import Arrow from"../../public/arrow.png"
const PdfMerge = () =>{



    return(
        <div className="w-full grid grid-cols-7">
            <div className="h-[32rem] w-full col-span-3 flex flex-row justify-end items-end   ">
                <Image src={man} alt="man" height={450}     />

            </div>
            <div className="h-[32rem] w-full col-span-4">
                <div className="h-[5rem] w-full flex flex-row   justify-center items-center">
                    <Card className="p-2 shadow-xl">
                        <TextField label="Start Page" name="Start" />
                    </Card>
                    {/* <Card> */}
                        {/* <TextField label="End Page" name="End" /> */}
                    {/* </Card> */}
                </div>
                <div className="h-[21rem]  w-full  flex justify-center items-center gap-12">
                    <Card className="p-4 w-[18rem] h-[18rem] shadow-2xl rounded-2xl">
                        <FileUploaderSingle />
                    </Card>
                    <Card className="p-4 w-[18rem] h-[18rem] shadow-2xl rounded-2xl">
                        <FileUploaderSingle />
                    </Card>
                </div>
                <div className="h-[6rem] p-2  flex justify-center items-center w-full ">
                    <Card className="rounded-full h-[6rem] w-[6rem] rounded-full shadow-xl bg-blue-300 flex flex-col justify-center items-center border ">
                        <Button variant="contained" className="border border-white h-[5rem] shadow-xl  text-sm rounded-full w-[5rem]" >
                            MERGE FILE
                        </Button>

                    </Card>
                </div>

            </div>
        </div>
    )
}


export default PdfMerge