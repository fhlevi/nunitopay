import { rest } from 'msw'
import axiosService from 'utilities/mock/api/config';
import dataJson from 'utilities/mock/api/category/data.json';

const responseProduct = [
    rest.get(axiosService('/product-category'), (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                status: {
                    code: 200,
                    message: "Success"
                },
                data: dataJson
            })
        )
    }),
]

export default responseProduct