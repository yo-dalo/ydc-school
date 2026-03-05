export default function AchievementsSection() {
    const achievements = [
        { id: 1, number: "26+", label: "Unparalleled Years" },
        { id: 2, number: "55,000+", label: "Pupils" },
        { id: 3, number: "24", label: "Institutes" },
        { id: 4, number: "3,000+", label: "Gurus" },
    ];

    return (
        <section className="w-full bg-green-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="border-b border-green-700 pb-6 mb-14">
                    <h2 className="text-4xl font-bold text-center tracking-wide">
                        OUR ACHIEVEMENTS
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 border border-green-700">
                    {achievements.map((item, index) => (
                        <div
                            key={item.id}
                            className={`text-center py-12 px-6 border-green-700 ${index !== achievements.length - 1
                                ? "md:border-r border-b md:border-b-0"
                                : ""
                                }`}
                        >
                            <h3 className="text-5xl font-bold text-green-300">
                                {item.number}
                            </h3>
                            <p className="mt-4 text-sm tracking-wide uppercase text-green-100">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}