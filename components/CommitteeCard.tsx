interface Member {
    name: string;
    post: string;
    imgLink: string;
}

interface CommitteeProps {
    title: string;
    members: Member[];
}

export const CommitteeCard = ({ title, members }: CommitteeProps) => {
    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center border-b-2 border-blue-500 pb-2">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member) => (
                    <div key={member.name} 
                         className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="p-6 flex flex-col items-center">
                            <div className="relative w-48 h-48 mb-4">
                                <img 
                                    className="w-full h-full rounded-full object-cover transition-all duration-300 group-hover:scale-102 ring-2 ring-blue-100 ring-offset-4 group-hover:ring-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                                    src={member.imgLink} 
                                    alt={member.name}
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-blue-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 font-medium">
                                    {member.post}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}