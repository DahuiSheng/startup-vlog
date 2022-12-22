import Link from "next/link";

const Navbar = () => {
    return (

        // 画面上部に固定
        <div className="navbar fixed z-50 bg-white opacity-100">

            {/* タイトル：　 */}
            <div className="flex-1">
                <Link href={"/"} className="btn btn-ghost normal-case text-xl text-blue-900">
                   startup-vlog
                </Link>
            </div>

            {/* ハンバーガーメニュー */}
            <div className="flex-none invisible md:visible">
                <ul className="menu menu-horizontal p-0 font-bold text-blue-900">
                    <Link href={"/about"} className="btn btn-ghost">
                        <li>startup-vlogとは</li>
                    </Link>
                    <Link href={"/author"} className="btn btn-ghost">
                        <li>運営者について</li>
                    </Link>
                    <Link href={"/inquiry"} className="btn btn-ghost">
                        <li>お問い合わせ</li>
                    </Link>
                </ul>
            </div>

            {/* ハンバーガーメニュー */}
            <div className="dropdown dropdown-end flex-none md:hidden">
                {/* 面面に現れるボタン */}
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current fill-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                {/* 中身 */}
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 px-6 bg-base-100 shadow">
                    <div className="card-body">
                        <Link href={"/about"} className="btn btn-ghost">
                            startup-vlogとは
                        </Link>
                        <Link href={"/author"} className="btn btn-ghost">
                            <li>運営者について</li>
                        </Link>
                        <Link href={"/inquiry"} className="btn btn-ghost">
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;