import Link from "next/link";

const About = () => {
    return (
        <main className="pt-16">
          {/* グリッドを二つに分ける */}
          <div className='grid grid-cols-3 gap-2 px-2'>

            <div className="content col-span-2">
              <div className="container w-auto justify-between px-4 pt-4 pb-12">
                {/* 記事の表示： */}
                <div className="rounded w-full h-96 px-4 shadow-lg bg-white">
                    <div className='text-2xl font-bold pb-3'>
                       startup-vlogとは
                    </div>
                    <div className="text-md font-bold">startup-vlogの目的は？</div>
                    <div className="pl-3">
                        <p>
                            IT・スタートアップ界隈に興味のある運営者が
                        </p>
                        <p>
                            ・気になるスタートアップについて
                        </p>
                        <p>
                            ・開発の時につまづいたことについて
                        </p>
                        <p>
                            をまとめていきます。
                        </p>
                        <p>
                            また、私のポートフォリオとして、制作に携わったものを置いていきます。
                        </p>
                        <p>
                            blogよりもvlogよりに、体験したことを残していけたらと思っています。
                        </p>
                    </div>
                    <div className="divider"/>
                    <div className="text-md font-bold">運営者について</div>
                    <p>
                        
                    </p>
                </div>
              </div>
            </div>

            {/* ナビゲーションを表示する */}
            <div className="Navigation h-5/6 pt-4">
              <div className='text-2xl font-bold pb-3'>
                タグ
              </div>
              <div className='rounded w-64 xl:84 shadow-lg bg-white '>
                <ul>
                  
                </ul>
              </div>
            </div>
          </div>
      </main>
    );
};

export default About;
