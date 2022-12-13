
//Next
import Link from "next/link";
import Image from "next/image";

//Images
import logo from "../public/images/logo.svg";

const Logo = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="Logo" priority/>
        </Link>
    )
}

export default Logo;