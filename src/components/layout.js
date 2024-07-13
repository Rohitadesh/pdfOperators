import Image from "next/image"
import logo from "../../public/pdftools.png"
const Layout = ({children}) =>{



    return (
        <div className="min-h-screen w-screen border border-black">
            <div className="h-[4rem] w-full  flex justify-center items-center">
                <Image src={logo} alt="logo" height={140} width={200} />
            </div>
            {children}
        </div>


    )
}


export default Layout