import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;

    const pages = {
        "1": {
            "Id": 1,
            "Name": "school-about",
            "Pages_Category_Id": 1,
            "Page_Data": "<h2>About Our School</h2><p>Welcome to Yaduvanshi Degree College. We provide excellence in education and character building.</p><p>This content is fetched from the dynamic API based on ID 1.</p>",
            "Is_Active": "active",
            "Index_No": 122,
            "Branch_Id": 5
        },
        // Add more mock pages if needed
    };

    const page = pages[id];

    if (!page) {
        return NextResponse.json({
            status: "error",
            message: "Page not found"
        }, { status: 404 });
    }

    return NextResponse.json({
        status: "success",
        data: page,
        message: "Pages fetched successfully",
    });
}
