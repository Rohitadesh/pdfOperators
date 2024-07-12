import Image from "next/image"
import man from "../../public/man.png"
import { TextField ,Card,Button} from "@mui/material"
import FileUploaderSingle from "@/components/SingleFileUpload"
const PdfMerge = () =>{



    return(
        <div className="w-full border border-green-700 grid grid-cols-7">
            <div className="h-[32rem] w-full col-span-2 border border-green-700 flex flex-row   justify-end items-center">
                <Image src={man} alt="man"  width={500} className="border border-black"  />
            </div>
            <div className="h-[32rem] w-full col-span-5 border border-red-500">
                <div className="h-[5rem] w-full border border-black flex flex-row  gap-32 justify-center items-center">
                    {/* <Card className="p-2"> */}
                        <TextField label="Start Page" name="Start" />
                    {/* </Card> */}
                    {/* <Card> */}
                        {/* <TextField label="End Page" name="End" /> */}
                    {/* </Card> */}
                </div>
                <div className="h-[21rem] bg-gray-100 w-full border border-black  flex justify-center items-center gap-12">
                    <Card className="p-4 w-[18rem] h-[18rem]">
                        <FileUploaderSingle />
                    </Card>
                    <Card className="p-4 w-[18rem] h-[18rem]">
                        <FileUploaderSingle />
                    </Card>
                </div>
                <div className="h-[6rem] p flex justify-center items-center w-full border border-black">
                    <Button variant="contained" className="h-[5rem] p-3 text-sm rounded-full w-[5rem]" >
                        MERGE FILE
                    </Button>
                </div>

            </div>
        </div>
    )
}


export default PdfMerge