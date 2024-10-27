import Image from "next/image";
import { Header } from "@/components/header";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="icon">
                    <Image
                        src="/assets/images/icon.png"
                    />
                </div>
                <nav>
                    <ul>
                        <li><a href="#Profile">Profile</a></li>
                        <li><a href="#Blog">Blog</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="https://zisty.net/" target="_blank">Team</a></li>
                    </ul>
                </nav>
                <div className="sns-accounts">
                    <a href="https://x.com/piennu_777" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://github.com/piennu777" aria-label="Facebook"><i className="fa-brands fa-github"></i></a>
                    <a href="https://discord.com/users/851357394976899116" aria-label="Instagram"><i
                        className="fa-brands fa-discord"></i></a>
                </div>
            </div>
        </header>
    );
}
