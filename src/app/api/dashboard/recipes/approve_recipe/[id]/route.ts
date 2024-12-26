import { NextResponse } from 'next/server';
import connect from '../../../../../../../utils/db';
import Recipe from '../../../../../../../models/recipe';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        // Kết nối cơ sở dữ liệu
        await connect();

        // Tìm và cập nhật recipe
        const recipe = await Recipe.findByIdAndUpdate(
            id,
            {
                $set: {
                    status: true,
                    updatedAt: new Date(),
                },
            },
            { new: true } // Trả về dữ liệu sau khi cập nhật
        );

        // Nếu không tìm thấy recipe
        if (!recipe) {
            return NextResponse.json(
                { message: 'Recipe not found' },
                { status: 404 }
            );
        }

        // Thành công
        return NextResponse.json(
            { message: 'Recipe approved successfully', data: recipe },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating recipe:', error);
        return NextResponse.json(
            { message: 'Internal Server Error', error },
            { status: 500 }
        );
    }
}
