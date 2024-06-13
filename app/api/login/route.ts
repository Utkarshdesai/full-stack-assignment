
export async function POST (req: Request) 
{ 
    try {
        const {username , password} = await req.json()

        if(!username || !password) 
            {
                return Response.json(
                    {
                        sucess : false ,
                        message : 'Please check all the required fields'
                    }
                )
            }

        // add JWT token 
         const token = 'etwqyeydf'
         
        return Response.json(
            {
                sucess: true ,
                message : 'user login sucessfully',
                data : token,
                username,

            },
            {
                status:200
            }
         )
    } catch (error) {
        console.log('error while user login' ,error)

        return Response.json(
            {
                sucess: false,
                message:'error while user login'
            },
            {
                status: 400
            }
        )
    }

}