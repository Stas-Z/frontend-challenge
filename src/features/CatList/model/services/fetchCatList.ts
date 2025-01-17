import { ICat } from '@/entities/Cat'
import { $api } from '@/shared/api/api'

interface FetchTodoListProps {
    limit?: number
    page?: number
}

export const fetchCatList = async ({ limit, page }: FetchTodoListProps) => {
    try {
        const response = await $api.get<ICat[]>('v1/images/search', {
            params: {
                limit,
                page,
            },
        })

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error: any) {
        console.log(error)
        throw new Error('Ошибка сервера')
    }
}
