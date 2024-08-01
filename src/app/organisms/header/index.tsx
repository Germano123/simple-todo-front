import Image from "next/image";

export const Header = () => {
    return (
        <header className="w-1/5 h-screen
        flex flex-col items-center justify-start gap-16
        bg-white">
            
                <Image
                    width={ 0 }
                    height={ 0 }
                    src={ "" }
                    alt="Profile pic"
                />

                <div>
                    <p>Just Do it!</p>
                    <p>Germano Gomes</p>
                </div>

                <hr className="w-4/5
                border-primary
                border-[1px]" />

                <div>
                    Your tasks
                </div>

                <div>
                    Settings
                </div>

        </header>
    );
}
