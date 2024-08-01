'use client';
import Image from "next/image";

interface ITaskCard {
    title: string;
    description: string;
    done: boolean;
}

const TaskCard = ({ title, description, done }: ITaskCard) => {
    return (
        <div className="px-6 py-4 mt-4
        flex items-center justify-between
        w-[600px]
        text-secondary
        rounded-[17px]
        bg-white
        group">
            <div className="flex flex-col">
                <p className="text-2xl">{ title }</p>
                <p className="text-sm
                invisible
                group-hover:visible">{ description }</p>
            </div>

            {/* <div className="">
                // conditional rendering with boolean `done` for checked
                {
                    if(done ==) {
                        return <Image 
                            width={ 36 }
                            height={ 36 }
                            src="/icons/checked.png" 
                            alt=""
                            />
                    }
                }
            </div> */}
        </div>
    );
}

export const Presentation = () => {

    const cards = [
        { 
            title: "Fazer a cama",
            description: "Preciso fazer a cama",
            done: true,
        },
        { 
            title: "Limpar a casa",
            description: "Preciso limpar a casa",
            done: true,
        },
        { 
            title: "Fazer almoço",
            description: "Preciso fazer o almoço",
            done: false,
        },
        { 
            title: "Estudar programação",
            description: "Preciso estudar programação front-end",
            done: false,
        },
        { 
            title: "Descansar",
            description: "Preciso descansar",
            done: false,
        },
    ];

    return (
        <section className="mx-5 pt-10 w-[98%] h-[95%]
        flex flex-col items-center justify-start
        rounded-r-[40px]
        text-white
        bg-primary">
            
            <p className="w-3/5 text-left text-3xl">Qual a <span className="text-secondary">task</span> de hoje?</p>
            
            <div className="my-4 px-4 w-[800px] h-[60px]
            flex items-center
            rounded-[23px]
            bg-white">
                <input type="text" placeholder="Fazer algo incrível"
                    className="w-4/5"
                />
                <Image
                    width={ 24 }
                    height={ 24 }
                    src="/icons/right-arrow.png"
                    alt="Right arrow"
                />
            </div>

            <div className="w-full
            flex flex-col items-center">
                { cards.map((card, index) => {
                    return <TaskCard
                        key={ `task-card-${ index }` }
                        title={ card.title }
                        description={ card.description }
                        done={ card.done }
                    />
                })}
            </div>

        </section>
    );
}
