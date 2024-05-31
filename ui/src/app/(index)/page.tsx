import Image from 'next/image';
import BeforeLogin from '@/app/(index)/_components/BeforeLogin';
import AfterLogin from '@/app/(index)/_components/AfterLogin';
import { getCurrentUser } from '@/access/AuthenticationService';
import Role from '@/access/Role';
import LoginButton from '@/app/(index)/_components/LoginButton';
import Announcements from '@/app/(index)/_components/Announcements';
import uhGroupingsLogo from '../../../public/uh-groupings-text.svg';

const Home = async () => {
    const currentUser = await getCurrentUser();

    return (
        <main>
            <div className="container mt-5 mb-5">
                <Announcements />
                <div className="flex flex-row py-8 px-0.5 justify-between">
                    <div className="md:w-7/12 flex items-center">
                        <div>
                            <h1 className="sr-only">UH Groupings</h1>
                            <Image
                                src={uhGroupingsLogo}
                                alt="UH Groupings logotype"
                                width={338}
                                height={53}
                                className="w-[210px] h-auto sm:w-[285px] sm:h-auto md:w-[338px] md:h-auto"
                                // className="w-[210px] h-[32.67px] sm:w-1/2 sm:h-auto md:w-[337.5px] md:h-[52.5px]"
                                // className="sm:[210px] sm:h-auto md:w-[285px] md:h-auto lg:[338px] lg:h-auto"
                                sizes="(max-width: 576px) 210px, (max-width: 768px) 285px, 338px"
                            />

                            <p className="text-xl mt-1"> Manage your groupings in one place, use them in many.</p>
                            <div className="mt-4">
                                <LoginButton currentUser={currentUser}/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block md:w-5/12">
                        <Image
                            src="/uhgroupings/uh-groupings-logo-large.svg"
                            alt="UH Groupings"
                            width={365.5}
                            height={292.5}
                        />
                    </div>
                </div>
            </div>

            {currentUser.roles.includes(Role.UH) ? (
                <AfterLogin/>
            ) : (
                <BeforeLogin/>
            )}
        </main>
    );
}

export default Home;
