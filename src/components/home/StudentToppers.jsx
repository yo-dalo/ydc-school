import Image from "next/image";

export default function StudentToppers() {
    const toppers = [
        {
            id: 1,
            name: "Aman Yadav",
            father: "Mr. Rajesh Yadav",
            image: "/students/1.jpg",
        },
        {
            id: 2,
            name: "Priya Sharma",
            father: "Mr. Suresh Sharma",
            image: "/students/2.jpg",
        },
        {
            id: 3,
            name: "Rahul Verma",
            father: "Mr. Mahesh Verma",
            image: "/students/3.jpg",
        },
        {
            id: 4,
            name: "Sneha Rao",
            father: "Mr. Vijay Rao",
            image: "/students/4.jpg",
        },
    ];

    return (
        <section className="w-full bg-green-50 py-16">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
                    Student Toppers
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {toppers.map((student) => (
                        <div
                            key={student.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4"
                        >
                            <div className="w-full h-48 relative mb-4">
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                {student.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                Father: {student.father}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}