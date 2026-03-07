import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        {
            Id: 1,
            Name: "about",
            Index_No: 1,
            pages: [
                {
                    Id: 1,
                    Name: "school-about",
                    Index_No: 122,
                },
            ],
        },
        {
            Id: 2,
            Name: "profile",
            Index_No: 2,
            pages: [
                { Id: 2, Name: "about-college", Index_No: 1 },
                { Id: 3, Name: "director-message", Index_No: 2 },
                { Id: 4, Name: "principal-message", Index_No: 3 },
            ],
        },
        {
            Id: 3,
            Name: "gallery",
            Index_No: 3,
            pages: [
                { Id: 5, Name: "photo-gallery", Index_No: 1 },
                { Id: 6, Name: "video-gallery", Index_No: 2 },
            ],
        },
        {
            Id: 4,
            Name: "courses Offered",
            Index_No: 4,
            pages: [
                { Id: 7, Name: "BCA", Index_No: 1 },
                { Id: 8, Name: "BBA", Index_No: 2 },
                { Id: 9, Name: "BA", Index_No: 3 },
                { Id: 10, Name: "BSc", Index_No: 4 },
            ],
        },
    ];

    return NextResponse.json({
        status: "success",
        data: data,
        message: "Pages fetched successfully",
    });
}
