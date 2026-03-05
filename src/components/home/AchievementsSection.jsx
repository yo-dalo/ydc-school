export default function AchievementsSection() {
    const achievements = [
        { id: 1, number: "26+", label: "Unparalleled Years" },
        { id: 2, number: "55,000+", label: "Pupils" },
        { id: 3, number: "24", label: "Institutes" },
        { id: 4, number: "3,000+", label: "Gurus" },
    ];

    return (
        <section className="w-full bg-green-800 py-20 text-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-14">
                    Our Achievements
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4">
                    {achievements.map((item) => (
                        <div
                            key={item.id}
                            className="text-center py-10 border border-green-700"
                        >
                            <h3 className="text-5xl font-bold text-amber-400">
                                {item.number}
                            </h3>
                            <p className="mt-3 text-lg">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}