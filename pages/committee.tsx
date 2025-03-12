import { CommitteeCard } from "../components/CommitteeCard";

export default function Committee() {
    const committees = [
        {
            title: "Chief Patron",
            members: require("../data/chief_patron").default
        },
        {
            title: "Patrons",
            members: require("../data/patrons").default
        },
        {
            title: "Conference Chairs",
            members: require("../data/conference_chairs").default
        },
        {
            title: "Program Chairs",
            members: require("../data/program_chairs").default
        },
        {
            title: "Technical Program Chairs",
            members: require("../data/technical_program_chairs").default
        },
        {
            title: "Finance Chairs",
            members: require("../data/finance_chairs").default
        },
        {
            title: "Publication Chairs",
            members: require("../data/publication_chairs").default
        },
        {
            title: "Sponsorship Chairs",
            members: require("../data/sponsorship_chairs").default
        },
        {
            title: "Publicity and Media Chairs",
            members: require("../data/pm_chairs").default
        },
        {
            title: "Organizing Committee",
            members: require("../data/organizing_committee").default
        },
        {
            title: "Advisory Committee",
            members: require("../data/advisory_committee").default
        },
        {
            title: "Website Chairs",
            members: require("../data/website_chairs").default
        },
        {
            title: "Conference Convenors",
            members: require("../data/conference_convenors").default
        },
        {
            title: "Session Management",
            members: require("../data/session_management").default
        },
        {
            title: "Hospitality",
            members: require("../data/hospitality").default
        },
        {
            title: "Transportation",
            members: require("../data/transportation").default
        },
        {
            title: "Registration Committee",
            members: require("../data/registration_committee").default
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-12">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    Organizing Committee
                </h1>
                <div className="sticky top-0 z-50 bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
                            {committees.map((committee) => (
                                <a
                                    key={committee.title}
                                    href={`#${committee.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800 whitespace-nowrap px-4 py-2 rounded-full hover:bg-blue-50/50 transition-colors border border-blue-100 hover:border-blue-200"
                                >
                                    {committee.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-16 mt-8">
                    {committees.map((committee) => (
                        <div
                            key={committee.title}
                            id={committee.title.toLowerCase().replace(/\s+/g, '-')}
                            className="scroll-mt-24"
                        >
                            <CommitteeCard
                                title={committee.title}
                                members={committee.members}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
